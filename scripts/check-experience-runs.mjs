#!/usr/bin/env node
// Checks whether listed Awesome WeRead projects have real experience-run folders.
// Default mode is report-only because historical entries are still being backfilled.
// Use --strict, or --repo owner/repo, when reviewing a newly picked project.

import { existsSync, readdirSync, readFileSync, statSync } from "node:fs";
import { join, relative } from "node:path";

const ROOT = new URL("..", import.meta.url).pathname;
const README_PATH = join(ROOT, "README.md");
const RUNS_DIR = join(ROOT, "docs/promo/runs");
const args = new Set(process.argv.slice(2));
const repoArgIndex = process.argv.indexOf("--repo");
const requiredRepo = repoArgIndex >= 0 ? process.argv[repoArgIndex + 1]?.toLowerCase() : null;
const strict = args.has("--strict") || Boolean(requiredRepo);
const json = args.has("--json");

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

function extractListedRepos() {
  const text = readFileSync(README_PATH, "utf8");
  const repos = [];
  let section = "";

  for (const line of text.split(/\n/)) {
    const heading = line.match(/^## (.+)$/);
    if (heading) section = heading[1];

    const row = line.match(/^\| \[([^\]]+)\]\(https:\/\/github\.com\/([^)]+)\)/);
    if (!row) continue;

    const repo = row[2].replace(/\/$/, "");
    repos.push({
      section,
      name: row[1],
      repo,
      key: repo.toLowerCase(),
    });
  }

  return repos;
}

function extractRunRecords() {
  const summaries = walk(RUNS_DIR).filter(path => path.endsWith("/summary.md"));
  const records = [];

  for (const summaryPath of summaries) {
    if (summaryPath.includes("/_template/")) continue;
    const text = readFileSync(summaryPath, "utf8");
    const isBlocked = /未完成|网络受限|blocked/i.test(text.split(/\n/).slice(0, 20).join("\n"));
    const repoMatch = text.match(/github\.com\/([\w.-]+\/[\w.-]+)/i);
    if (!repoMatch) {
      records.push({
        repo: null,
        key: null,
        summary: summaryPath,
        summaryRel: relative(ROOT, summaryPath),
        artifactCount: 0,
        imageCount: 0,
        problem: "summary_missing_project_url",
      });
      continue;
    }

    const runDir = summaryPath.replace(/\/summary\.md$/, "");
    const artifactDir = join(runDir, "artifacts");
    const artifacts = walk(artifactDir);
    const images = artifacts.filter(path => /\.(png|jpe?g|webp|gif)$/i.test(path));

    records.push({
      repo: repoMatch[1],
      key: repoMatch[1].toLowerCase(),
      summary: summaryPath,
      summaryRel: relative(ROOT, summaryPath),
      artifactDirRel: relative(ROOT, artifactDir),
      artifactCount: artifacts.length,
      imageCount: images.length,
      problem: isBlocked ? "blocked_run" : artifacts.length ? null : "missing_artifacts",
    });
  }

  return records;
}

const listed = extractListedRepos();
const runs = extractRunRecords();
const runByRepo = new Map();

for (const run of runs) {
  if (!run.key) continue;
  const existing = runByRepo.get(run.key);
  if (!existing || run.summaryRel > existing.summaryRel) {
    runByRepo.set(run.key, run);
  }
}

let scoped = listed;
if (requiredRepo) {
  scoped = listed.filter(item => item.key === requiredRepo);
  if (scoped.length === 0) {
    console.error(`Repo is not listed in README.md: ${requiredRepo}`);
    process.exit(1);
  }
}

const completed = scoped
  .map(item => ({ ...item, run: runByRepo.get(item.key) || null }))
  .filter(item => item.run && !item.run.problem);

const pending = scoped
  .map(item => ({ ...item, run: runByRepo.get(item.key) || null }))
  .filter(item => !item.run || item.run.problem);

const report = {
  listed: scoped.length,
  completed: completed.length,
  pending: pending.length,
  completedRuns: completed.map(item => ({
    repo: item.repo,
    section: item.section,
    summary: item.run.summaryRel,
    artifacts: item.run.artifactCount,
    images: item.run.imageCount,
  })),
  pendingRuns: pending.map(item => ({
    repo: item.repo,
    section: item.section,
    reason: item.run?.problem || "missing_experience_run",
  })),
};

if (json) {
  console.log(JSON.stringify(report, null, 2));
} else {
  console.log(`Experience runs: ${report.completed}/${report.listed} complete`);
  if (completed.length) {
    console.log("\nCompleted:");
    for (const item of completed) {
      console.log(`- ${item.repo}: ${item.run.summaryRel} (${item.run.artifactCount} artifacts, ${item.run.imageCount} images)`);
    }
  }
  if (pending.length) {
    console.log("\nPending:");
    for (const item of pending) {
      console.log(`- ${item.repo}: ${item.run?.problem || "missing experience run"}`);
    }
  }
}

if (strict && pending.length > 0) {
  process.exit(1);
}
