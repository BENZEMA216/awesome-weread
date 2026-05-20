#!/usr/bin/env node
// Discovery bot for awesome-weread.
// Searches GitHub for new WeRead repos, keyword-filters for official-Skill usage,
// then asks Gemini 2.0 Flash to make a final in-scope judgment.
// Outputs:
//   - seen.json: appended with all evaluated repos (skip on next run)
//   - pr_body.md: PR description if any candidates were accepted (else not written)

import { GoogleGenAI, Type } from "@google/genai";
import { execSync } from "node:child_process";
import { readFileSync, writeFileSync, existsSync, unlinkSync } from "node:fs";
import { resolve, dirname } from "node:path";
import { fileURLToPath } from "node:url";

const __dirname = dirname(fileURLToPath(import.meta.url));
const ROOT = resolve(__dirname, "..");
const SEEN_PATH = resolve(ROOT, "seen.json");
const PR_BODY_PATH = resolve(ROOT, "pr_body.md");
const README_PATH = resolve(ROOT, "README.md");
const README_EN_PATH = resolve(ROOT, "README.en.md");

const MAX_LLM_CALLS = 20;
const SEARCH_LIMIT = 50;
const MODEL = "gemini-2.5-flash";

// Keywords that indicate official-Skill usage. README must contain at least one
// (case-insensitive) to even reach the LLM judgment step.
const KEYWORD_RE = /wrk-[a-z0-9]|WEREAD_API_KEY|weread-skills|i\.weread\.qq\.com\/api\/agent|Agent Gateway|官方\s*(Agent\s*)?Skill|官方\s*API\s*Key|官方提供的\s*api/i;

const SYSTEM_PROMPT = `你是 BENZEMA216/awesome-weread 仓库的策展助手。判断一个 weread 相关 GitHub repo 是否符合本仓库收录标准。

【收录标准 — 必须满足】
项目必须基于 2026-05-17 微信读书发布的官方 Agent Gateway / API Key (wrk-... 格式) 构建。
具体信号：
  - 调用 https://i.weread.qq.com/api/agent/gateway 或同义官方 endpoint
  - 使用 WEREAD_API_KEY 环境变量或 wrk- 格式的 API Key
  - 引用 / 安装 cdn.weread.qq.com/skills/weread-skills.zip
  - 自称 "基于官方 Skill / 官方 Agent Gateway / 官方 API"

【排除 — 任一即出局】
  - 使用 cookie (wr_vid, wr_skey, wr_rt) / Cookie Cloud
  - 浏览器自动化、Puppeteer、Selenium 抓页
  - 图像识别 / OCR 模拟翻页
  - 没有任何 README，或 README 完全不提如何与微信读书交互

【分类 — 选 1 个最合适的】
  - skill-bundles: 可直接安装的 Skill 包（往往是 .zip / Skill manifest）
  - workflows: 在 Skill 之上加 workflow / 助手 / 顾问
  - clis: 命令行工具、SDK、Library
  - mcp-servers: MCP server
  - sync: 把 weread 数据同步到 Notion / Obsidian / flomo / Feishu / 思源等
  - widgets: 桌面挂件、可视化、屏保、阅读画像

注意：in_scope=false 时，category 填 "none"，runtime_or_target / description_zh / description_en 填空字符串。
evidence 必须是 README 里的原文引用（不要改写、不要翻译），即便 in_scope=false 也要给出关键否定证据。`;

const RESPONSE_SCHEMA = {
  type: Type.OBJECT,
  properties: {
    in_scope: { type: Type.BOOLEAN, description: "是否符合收录标准" },
    evidence: { type: Type.STRING, description: "<=200 字。README 原文引用，证明你的判断" },
    reason: { type: Type.STRING, description: "<=80 字。一句话判断依据" },
    category: {
      type: Type.STRING,
      enum: ["skill-bundles", "workflows", "clis", "mcp-servers", "sync", "widgets", "none"],
      description: "分类。in_scope=false 时填空字符串",
    },
    runtime_or_target: { type: Type.STRING, description: "<=20 字。运行环境或目标平台。in_scope=false 时填空字符串" },
    description_zh: { type: Type.STRING, description: "<=80 字符建议中文描述。in_scope=false 时填空字符串" },
    description_en: { type: Type.STRING, description: "<=140 chars suggested English description. Empty string if in_scope=false" },
  },
  required: ["in_scope", "evidence", "reason", "category", "runtime_or_target", "description_zh", "description_en"],
  propertyOrdering: ["in_scope", "evidence", "reason", "category", "runtime_or_target", "description_zh", "description_en"],
};

function loadJson(path, fallback) {
  try { return JSON.parse(readFileSync(path, "utf8")); } catch { return fallback; }
}

function extractListedRepos(readmeText) {
  const set = new Set();
  for (const m of readmeText.matchAll(/github\.com\/([\w.-]+\/[\w.-]+?)(?=[)\s/#])/g)) {
    const slug = m[1].toLowerCase().replace(/\.git$/, "");
    if (slug.split("/").length === 2) set.add(slug);
  }
  return set;
}

function ghJson(args) {
  return JSON.parse(execSync(`gh ${args}`, { maxBuffer: 16 * 1024 * 1024 }).toString());
}

async function fetchReadme(fullName) {
  try {
    const info = ghJson(`api repos/${fullName}/readme --jq '{download_url: .download_url}'`);
    if (info.download_url) {
      const res = await fetch(info.download_url);
      if (!res.ok) throw new Error(`HTTP ${res.status}`);
      return await res.text();
    }
    return null;
  } catch (e) {
    return null;
  }
}

async function judge(ai, candidate, readme) {
  const userPrompt = `仓库：${candidate.fullName}\n描述：${candidate.description || "(无)"}\nStars：${candidate.stargazersCount}\n推送时间：${candidate.pushedAt}\n\nREADME 内容（最多 8000 字符）:\n${readme.slice(0, 8000)}`;

  const response = await ai.models.generateContent({
    model: MODEL,
    contents: userPrompt,
    config: {
      systemInstruction: SYSTEM_PROMPT,
      responseMimeType: "application/json",
      responseSchema: RESPONSE_SCHEMA,
      maxOutputTokens: 800,
      temperature: 0.1,
    },
  });

  const text = response.text;
  if (!text) throw new Error(`Empty response from Gemini (finishReason: ${response.candidates?.[0]?.finishReason})`);
  return JSON.parse(text);
}

async function main() {
  if (!process.env.GOOGLE_API_KEY) {
    console.error("GOOGLE_API_KEY not set. Get a free key at https://aistudio.google.com/apikey");
    process.exit(1);
  }
  const ai = new GoogleGenAI({ apiKey: process.env.GOOGLE_API_KEY });

  const seen = loadJson(SEEN_PATH, []);
  const seenSet = new Set(seen.map(s => s.repo.toLowerCase()));
  const listed = new Set([
    ...extractListedRepos(readFileSync(README_PATH, "utf8")),
    ...extractListedRepos(readFileSync(README_EN_PATH, "utf8")),
  ]);

  console.log(`Loaded ${seen.length} seen, ${listed.size} listed`);

  const search = ghJson(`search repos weread --sort updated --limit ${SEARCH_LIMIT} --json fullName,description,pushedAt,stargazersCount,isArchived,isFork`);
  const candidates = search.filter(r =>
    !r.isArchived && !r.isFork &&
    !listed.has(r.fullName.toLowerCase()) &&
    !seenSet.has(r.fullName.toLowerCase())
  );

  console.log(`Found ${candidates.length} new candidates (after filtering ${search.length - candidates.length})`);

  const accepted = [];
  const newSeen = [];
  let llmCalls = 0;
  const nowIso = new Date().toISOString();

  for (const candidate of candidates) {
    const readme = await fetchReadme(candidate.fullName);
    if (!readme) {
      newSeen.push({ repo: candidate.fullName, decision: "no_readme", reason: "Failed to fetch README", date: nowIso });
      continue;
    }

    if (!KEYWORD_RE.test(readme) && !KEYWORD_RE.test(candidate.description || "")) {
      newSeen.push({ repo: candidate.fullName, decision: "out_of_scope_keyword", reason: "README 未提及官方 Skill / Agent Gateway / API Key", date: nowIso });
      continue;
    }

    if (llmCalls >= MAX_LLM_CALLS) {
      console.log(`Hit LLM call cap (${MAX_LLM_CALLS}), deferring ${candidate.fullName}`);
      continue;
    }

    llmCalls++;
    let result;
    try {
      result = await judge(ai, candidate, readme);
    } catch (e) {
      console.error(`LLM error on ${candidate.fullName}: ${e.message}`);
      // Detect broken API key (401/403/PERMISSION_DENIED/leaked) and stop the run
      if (/PERMISSION_DENIED|reported as leaked|API key not valid|no longer available|deprecated|unregistered callers|RESOURCE_EXHAUSTED|quota|\b40[134]\b|\b429\b|\b50[023]\b/i.test(e.message)) {
        const marker = {
          error: e.message.slice(0, 800),
          first_candidate: candidate.fullName,
          ts: nowIso,
          deferred_count: candidates.length - candidates.indexOf(candidate),
        };
        writeFileSync(resolve(ROOT, ".api-key-broken"), JSON.stringify(marker, null, 2));
        console.error(`>>> API key appears broken. Stopping LLM calls and writing .api-key-broken. <<<`);
        // Don't mark this candidate as seen — let it be re-evaluated once the key is fixed.
        break;
      }
      newSeen.push({ repo: candidate.fullName, decision: "llm_error", reason: e.message.slice(0, 200), date: nowIso });
      continue;
    }

    newSeen.push({
      repo: candidate.fullName,
      decision: result.in_scope ? "accepted" : "out_of_scope_llm",
      reason: result.reason,
      category: result.category || null,
      date: nowIso,
    });

    if (result.in_scope) {
      accepted.push({ ...candidate, ...result });
      console.log(`  ✓ ${candidate.fullName} → ${result.category}`);
    } else {
      console.log(`  ✗ ${candidate.fullName} — ${result.reason}`);
    }
  }

  const updatedSeen = [...seen, ...newSeen];
  writeFileSync(SEEN_PATH, JSON.stringify(updatedSeen, null, 2) + "\n");
  console.log(`Updated seen.json (+${newSeen.length} entries, ${updatedSeen.length} total). LLM calls: ${llmCalls}`);

  if (existsSync(PR_BODY_PATH)) unlinkSync(PR_BODY_PATH);

  if (accepted.length > 0) {
    writeFileSync(PR_BODY_PATH, renderPrBody(accepted));
    console.log(`Wrote pr_body.md with ${accepted.length} candidate(s)`);
  } else {
    console.log("No new in-scope candidates this run.");
  }
}

function renderPrBody(accepted) {
  const ts = new Date().toISOString().slice(0, 16).replace("T", " ") + " UTC";
  const lines = [
    `## 🤖 自动发现 ${accepted.length} 个候选项目 / ${accepted.length} candidate(s) discovered`,
    "",
    `**Run at:** ${ts}`,
    `**Judge model:** \`${MODEL}\` (Google AI Studio, free tier)`,
    "",
    "> 这是 discovery bot 的自动建议。Review 每条证据，把同意收录的复制到两个 README 对应表格里，然后 merge / close 本 PR。",
    "",
    "---",
    "",
  ];
  for (const c of accepted) {
    lines.push(`### [${c.fullName}](https://github.com/${c.fullName}) → \`${c.category}\``);
    lines.push("");
    lines.push(`- **Runtime / Target:** ${c.runtime_or_target || "?"}`);
    lines.push(`- **Stars:** ${c.stargazersCount} · **Pushed:** ${c.pushedAt}`);
    lines.push(`- **Judge reason:** ${c.reason}`);
    lines.push(`- **Evidence:**`);
    lines.push("");
    lines.push("  > " + c.evidence.replace(/\n+/g, "\n  > "));
    lines.push("");
    lines.push(`**建议中文行**:`);
    lines.push("");
    lines.push("```");
    lines.push(`| [${c.fullName}](https://github.com/${c.fullName}) | ${c.runtime_or_target || "?"} | ${c.description_zh} |`);
    lines.push("```");
    lines.push("");
    lines.push(`**Suggested English row**:`);
    lines.push("");
    lines.push("```");
    lines.push(`| [${c.fullName}](https://github.com/${c.fullName}) | ${c.runtime_or_target || "?"} | ${c.description_en} |`);
    lines.push("```");
    lines.push("");
    lines.push("---");
    lines.push("");
  }
  return lines.join("\n");
}

main().catch(e => { console.error(e); process.exit(1); });
