#!/usr/bin/env node
import { existsSync, readdirSync, readFileSync, statSync, writeFileSync } from "node:fs";
import { join, relative } from "node:path";

const ROOT = new URL("..", import.meta.url).pathname;
const RUNS_DIR = join(ROOT, "docs/promo/runs");
const RUNS_INDEX = join(RUNS_DIR, "README.md");
const README_TARGETS = [
  { file: "README.md", column: "体验", summaryLabel: "记录", screenshotLabel: "截图", artifactLabel: "产物", pendingLabel: "待补" },
  { file: "README.en.md", column: "Trial", summaryLabel: "Summary", screenshotLabel: "Screenshot", artifactLabel: "Artifact", pendingLabel: "Pending" },
];

function walk(dir, files = []) {
  if (!existsSync(dir)) return files;
  for (const name of readdirSync(dir)) {
    if (name.startsWith(".")) continue;
    const path = join(dir, name);
    const st = statSync(path);
    if (st.isDirectory()) walk(path, files);
    else files.push(path);
  }
  return files;
}

function repoLink(path) {
  return relative(ROOT, path).split("/").join("/");
}

function markdownLink(label, path) {
  return `[${label}](${repoLink(path)})`;
}

function scoreScreenshot(path) {
  const lower = path.toLowerCase();
  let score = 0;
  if (lower.includes("fullpage")) score += 100;
  if (lower.includes("screenshot")) score += 80;
  if (lower.includes("shot")) score += 50;
  if (lower.includes("home")) score += 20;
  if (lower.includes("report")) score += 10;
  return score;
}

function scoreArtifact(path) {
  const lower = path.toLowerCase();
  if (/\.(html?)$/.test(lower)) return 100;
  if (/\.svg$/.test(lower)) return 90;
  if (/\.md$/.test(lower)) return 80;
  if (/\.json$/.test(lower)) return 70;
  if (/\.csv$/.test(lower)) return 60;
  if (/\.txt$/.test(lower)) return 50;
  return 0;
}

function pickBest(files, scorer) {
  return [...files].sort((a, b) => scorer(b) - scorer(a) || a.localeCompare(b))[0] || null;
}

function extractRuns() {
  const summaries = walk(RUNS_DIR).filter(path => path.endsWith("/summary.md") && !path.includes("/_template/"));
  const byRepo = new Map();

  for (const summary of summaries) {
    const text = readFileSync(summary, "utf8");
    const repoMatch = text.match(/github\.com\/([\w.-]+\/[\w.-]+)/i);
    if (!repoMatch) continue;

    const runDir = summary.replace(/\/summary\.md$/, "");
    const artifactDir = join(runDir, "artifacts");
    const artifacts = walk(artifactDir);
    const screenshots = artifacts.filter(path => /\.(png|jpe?g|webp|gif)$/i.test(path));

    const run = {
      repo: repoMatch[1],
      key: repoMatch[1].toLowerCase(),
      summary,
      screenshot: pickBest(screenshots, scoreScreenshot),
      artifact: pickBest(artifacts, scoreArtifact),
    };

    const existing = byRepo.get(run.key);
    if (!existing || repoLink(run.summary) > repoLink(existing.summary)) {
      byRepo.set(run.key, run);
    }
  }

  return byRepo;
}

function resolveRunsIndexPath(link) {
  return join(RUNS_DIR, link.replace(/^\.\//, ""));
}

function extractCuratedLinks() {
  const byRepo = new Map();
  const text = readFileSync(RUNS_INDEX, "utf8");

  for (const line of text.split("\n")) {
    const repoMatch = line.match(/^\| \[[^\]]+\]\(https:\/\/github\.com\/([^)]+)\)/i);
    if (!repoMatch) continue;

    const links = [...line.matchAll(/\[([^\]]+)\]\((\.\/[^)]+)\)/g)]
      .map(match => ({ label: match[1], path: resolveRunsIndexPath(match[2]) }))
      .filter(link => !link.path.endsWith("/summary.md") && existsSync(link.path));

    const screenshot = links.find(link => /截图|screenshot/i.test(link.label) || /\.(png|jpe?g|webp|gif)$/i.test(link.path));
    byRepo.set(repoMatch[1].replace(/\/$/, "").toLowerCase(), {
      screenshot: screenshot?.path || null,
      artifact: links[0]?.path || null,
    });
  }

  return byRepo;
}

function splitRow(line) {
  return line.trim().slice(1, -1).split("|").map(cell => cell.trim());
}

function joinRow(cells) {
  return `| ${cells.join(" | ")} |`;
}

function trialCell(run, labels) {
  if (!run) return labels.pendingLabel;

  const parts = [markdownLink(labels.summaryLabel, run.summary)];
  if (run.screenshot) {
    parts.push(markdownLink(labels.screenshotLabel, run.screenshot));
  } else if (run.artifact) {
    parts.push(markdownLink(labels.artifactLabel, run.artifact));
  }
  return parts.join(" · ");
}

function updateReadme(target, runs) {
  const path = join(ROOT, target.file);
  const lines = readFileSync(path, "utf8").split("\n");
  const output = [];
  let changedRows = 0;

  for (let i = 0; i < lines.length; i += 1) {
    const line = lines[i];
    const header = line.match(/^\| (项目|Project) \|/);
    if (!header) {
      output.push(line);
      continue;
    }

    const headerCells = splitRow(line).slice(0, 3);
    headerCells.push(target.column);
    output.push(joinRow(headerCells));

    i += 1;
    const separatorCells = splitRow(lines[i]).slice(0, 3);
    separatorCells.push("------");
    output.push(joinRow(separatorCells));

    for (i += 1; i < lines.length; i += 1) {
      const rowLine = lines[i];
      if (!rowLine.startsWith("|")) {
        i -= 1;
        break;
      }

      const cells = splitRow(rowLine).slice(0, 3);
      const repoMatch = cells[0]?.match(/github\.com\/([^)]+)/i);
      const repo = repoMatch?.[1]?.replace(/\/$/, "").toLowerCase();
      cells.push(trialCell(repo ? runs.get(repo) : null, target));
      output.push(joinRow(cells));
      changedRows += 1;
    }
  }

  writeFileSync(path, `${output.join("\n").replace(/\n+$/u, "")}\n`);
  return changedRows;
}

const runs = extractRuns();
const curatedLinks = extractCuratedLinks();
for (const [repo, links] of curatedLinks.entries()) {
  const run = runs.get(repo);
  if (!run) continue;
  run.screenshot = links.screenshot || run.screenshot;
  run.artifact = links.artifact || run.artifact;
}

let totalChangedRows = 0;
for (const target of README_TARGETS) {
  totalChangedRows += updateReadme(target, runs);
}

console.log(`Updated README trial links for ${totalChangedRows} rows.`);
