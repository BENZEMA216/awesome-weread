# Awesome WeRead Context

This repo is `BENZEMA216/awesome-weread`: a curated awesome-list for projects built on top of the official WeRead Agent Skill / Agent Gateway released on 2026-05-17.

## Active Local Repo

- Use `/Users/benzema/awesome-weread` as the active working tree.
- `/Users/benzema/Documents/New project 2/awesome-weread` appears to be an older clean copy. Do not use it unless the user explicitly asks.
- The default branch is `main`, tracking `origin/main` at `https://github.com/BENZEMA216/awesome-weread.git`.

## Product Positioning

- The unique lens is narrow and historical: projects that exist because of the official WeRead Skill / Agent Gateway.
- The list is not a general WeRead ecosystem directory. Broad cookie-scraping, browser-automation, and reverse-engineered endpoint projects are out of scope.
- Default user-facing language is Simplified Chinese in `README.md`; English lives in `README.en.md`.
- Keep the two READMEs structurally synchronized whenever changing entries or copy.

## Inclusion Rules

In scope:

- Uses the official Agent Gateway, usually `https://i.weread.qq.com/api/agent/gateway`.
- Uses a `wrk-...` API key or a `WEREAD_API_KEY` style environment variable from the official Skill flow.
- References or vendors `cdn.weread.qq.com/skills/weread-skills.zip`.
- Is the official Skill bundle, an auto-synced mirror, or a real port to another agent runtime.

Out of scope:

- Cookie-based access such as `wr_vid`, `wr_skey`, `wr_rt`, Cookie Cloud, or browser session scraping.
- Browser automation, Puppeteer/Selenium page scraping, OCR/page-turn simulation.
- Reverse-engineered non-official WeRead endpoints.
- Stale forks or vendored mirrors unless they are meaningfully different and the description says how.

When reviewing a candidate, inspect its README for concrete evidence. Good evidence includes `wrk-`, `WEREAD_API_KEY`, `Agent Gateway`, official Skill wording, or `weread-skills.zip`. Cookie evidence means reject.

## Repo Shape

- `README.md`: Simplified Chinese, default awesome-list.
- `README.en.md`: English mirror of the list.
- `CONTRIBUTING.md`: public contribution and scope rules.
- `seen.json`: discovery bot memory of evaluated repositories.
- `scripts/discover.mjs`: Node ESM discovery bot.
- `scripts/package.json`: discovery bot dependencies.
- `.github/workflows/discover.yml`: scheduled discovery workflow.
- `.github/scripts/notify-key-down.sh`: API key failure issue management.
- `docs/promo/xiaohongshu.html`: currently untracked local promo card artifact; treat as user work unless asked to modify/remove.

## Discovery Bot

- Runs from GitHub Actions every 6 hours and via manual workflow dispatch.
- Searches GitHub for recently updated `weread` repos.
- Skips already listed repos and repos recorded in `seen.json`.
- Keyword-filters for official-Skill signals before calling the model.
- Uses `GOOGLE_API_KEY` with `@google/genai`.
- Primary model is `gemini-2.5-flash`; fallback is `gemini-2.5-flash-lite`.
- Hard cap: 20 LLM calls per run.
- It updates `seen.json` on `main`.
- If it finds accepted candidates, it writes `pr_body.md`, then the workflow moves it into `candidates/<timestamp>.md` on a bot branch and opens a PR.
- It must never auto-merge accepted candidates into the READMEs. Human curation decides.

## Local Maintenance Network Preflight

The Codex automation can inherit stale local proxy variables such as `HTTP_PROXY`, `HTTPS_PROXY`, or `ALL_PROXY` pointing at `127.0.0.1:7897`. Before any local GitHub network operation in the 6h maintenance job, run:

```bash
eval "$(scripts/network-preflight.sh --emit-env)"
```

This prefers direct GitHub connectivity and clears local proxy variables for the current shell by default, even when the login shell inherited `127.0.0.1:7897`. If a one-off retry must use a confirmed-listening local proxy after direct GitHub connectivity fails, run the same command with `NETWORK_PREFLIGHT_ALLOW_PROXY_FALLBACK=1`. After committing maintenance changes, prefer:

```bash
scripts/git-push-main-with-retry.sh
```

That wrapper pushes direct-first, then retries once by allowing a verified proxy fallback, fetching `origin/main`, rebasing, and pushing again. Do not commit generated network logs that contain local machine paths unless they are part of a documented blocked experience run.

## Bot PR Review Workflow

When the user asks to review a bot PR:

1. Read the candidate evidence in the PR body.
2. Open the candidate README if evidence is weak or ambiguous.
3. Reject cookie/browser automation projects even if they mention WeRead.
4. For accepted projects, add one row to the right table in both `README.md` and `README.en.md`.
5. Keep descriptions factual and compact.
6. Do not manually run broad GitHub searches as the default next step; the bot is responsible for recurring discovery.

## Project Experience Runs

When a new in-scope project is found, the maintenance workflow should run it and produce shareable material for Xiaohongshu instead of only archiving the repo name.

- Use the user's configured WeRead Skill / official API key when the project needs live WeRead data.
- Treat the WeRead API key as a runtime secret: pass it via environment variables or existing local secret configuration only. Do not print it, write it into markdown/HTML/JSON outputs, commit it, or include it in screenshots.
- Clone or run third-party projects in a temporary workspace outside this repo unless the project is already vendored here.
- Prefer the project's documented quickstart. If there are several modes, choose the fastest one that demonstrates the core value.
- Capture concrete outputs: screenshots, generated reports, exported markdown/JSON summaries, or terminal output that proves what the project does with real WeRead data.
- Save every picked project's experience run under `docs/promo/runs/YYYY-MM-DD/<owner-repo>/`.
- Put final screenshots, generated pages, JSON metadata, markdown exports, or other concrete outputs under `docs/promo/runs/YYYY-MM-DD/<owner-repo>/artifacts/`.
- For UI, dashboard, report, generated HTML, widget, or visualization surfaces, screenshots must default to full-page/complete captures, not just the first viewport. If only a partial screenshot is possible, explain the blocker in the Chinese summary.
- For each run, produce a short Simplified Chinese `summary.md` with: project URL, category, setup command used, what data was exercised, output artifacts, observed value, limitations/errors, and 3-5 Xiaohongshu-ready talking points.
- Before considering a newly picked project archived, run `node scripts/check-experience-runs.mjs --repo owner/repo`.
- If a project cannot be run after a reasonable attempt, still record why and what would be needed next. Do not silently skip it.

## Current Known State

- Recent repo state observed from Claude/Codex context: v0.3 had 39 total listed projects after bot PR #4 added 16 new projects.
- `seen.json` had 72 evaluated entries at import time.
- Current tracked files were clean; `docs/` was untracked because of the promo HTML artifact.

## Secrets And Safety

- Do not commit API keys, copied Claude history, or local `.api-key-broken` markers.
- If a key appears in chat history or local logs, do not repeat it in responses or files. Recommend rotation if it may still be live.
- GitHub Actions expects `GOOGLE_API_KEY` as a repo secret.

## Promotion Context

The user has been using this repo to create Xiaohongshu/social promo material. Prior direction:

- Show the actual artifacts/results of projects, not just repo names.
- Use a unified carousel/menu style.
- Suggested sequence: cover explaining Awesome WeRead, category overview, category/project result cards, final summary/CTA.
- Content should be rich enough for readers to see what each project does.
