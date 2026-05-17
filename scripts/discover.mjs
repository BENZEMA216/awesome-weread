#!/usr/bin/env node
// Discovery bot for awesome-weread.
// Searches GitHub for new WeRead repos, keyword-filters for official-Skill usage,
// then asks Claude Haiku 4.5 to make a final in-scope judgment.
// Outputs:
//   - seen.json: appended with all evaluated repos (skip on next run)
//   - pr_body.md: PR description if any candidates were accepted (else not written)

import Anthropic from "@anthropic-ai/sdk";
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
const MODEL = "claude-haiku-4-5-20251001";

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

【输出格式 — 严格 JSON，不要任何其他文本】
{
  "in_scope": true | false,
  "evidence": "<=200 字。从 README 引用最有说服力的关键句子，证明你的判断>",
  "reason": "<=80 字。一句话判断依据>",
  "category": "skill-bundles" | "workflows" | "clis" | "mcp-servers" | "sync" | "widgets" | null,
  "runtime_or_target": "<=20 字。比如 'Claude Code' / 'OpenClaw' / 'Obsidian' / 'macOS' / '跨 runtime'>",
  "description_zh": "<=80 字符。建议的中文描述>",
  "description_en": "<=140 chars. English description>"
}
in_scope=false 时 category / runtime_or_target / description_* 全部填 null。`;

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
    const info = ghJson(`api repos/${fullName}/readme --jq '{download_url: .download_url, encoding: .encoding}'`);
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

async function judge(client, candidate, readme) {
  const userPrompt = `仓库：${candidate.fullName}\n描述：${candidate.description || "(无)"}\nStars：${candidate.stargazersCount}\n推送时间：${candidate.pushedAt}\n\nREADME 内容（最多 8000 字符）:\n${readme.slice(0, 8000)}`;
  const msg = await client.messages.create({
    model: MODEL,
    max_tokens: 700,
    system: [{ type: "text", text: SYSTEM_PROMPT, cache_control: { type: "ephemeral" } }],
    messages: [
      { role: "user", content: userPrompt },
      { role: "assistant", content: "{" },
    ],
  });
  const raw = "{" + (msg.content[0]?.text ?? "");
  // Sometimes the model continues past the closing brace; chop at the matching one.
  let depth = 0, end = -1;
  for (let i = 0; i < raw.length; i++) {
    if (raw[i] === "{") depth++;
    else if (raw[i] === "}") { depth--; if (depth === 0) { end = i + 1; break; } }
  }
  const json = end > 0 ? raw.slice(0, end) : raw;
  return JSON.parse(json);
}

async function main() {
  if (!process.env.ANTHROPIC_API_KEY) {
    console.error("ANTHROPIC_API_KEY not set");
    process.exit(1);
  }
  const client = new Anthropic();

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
      // Don't mark as seen — try again next run.
      continue;
    }

    llmCalls++;
    let result;
    try {
      result = await judge(client, candidate, readme);
    } catch (e) {
      console.error(`LLM error on ${candidate.fullName}: ${e.message}`);
      newSeen.push({ repo: candidate.fullName, decision: "llm_error", reason: e.message.slice(0, 200), date: nowIso });
      continue;
    }

    newSeen.push({
      repo: candidate.fullName,
      decision: result.in_scope ? "accepted" : "out_of_scope_llm",
      reason: result.reason,
      category: result.category,
      date: nowIso,
    });

    if (result.in_scope) {
      accepted.push({ ...candidate, ...result });
      console.log(`  ✓ ${candidate.fullName} → ${result.category}`);
    } else {
      console.log(`  ✗ ${candidate.fullName} — ${result.reason}`);
    }
  }

  // Save updated seen.json
  const updatedSeen = [...seen, ...newSeen];
  writeFileSync(SEEN_PATH, JSON.stringify(updatedSeen, null, 2) + "\n");
  console.log(`Updated seen.json (+${newSeen.length} entries, ${updatedSeen.length} total). LLM calls: ${llmCalls}`);

  // Clean up any stale PR body from previous runs
  if (existsSync(PR_BODY_PATH)) unlinkSync(PR_BODY_PATH);

  if (accepted.length > 0) {
    const body = renderPrBody(accepted);
    writeFileSync(PR_BODY_PATH, body);
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
    `**Judge model:** \`${MODEL}\``,
    "",
    "> 这是 discovery bot 的自动建议。Review 每条证据，把同意收录的复制到两个 README 对应表格里，然后 merge / close 本 PR。"
    , "",
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
