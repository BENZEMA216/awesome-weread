# Awesome WeRead Skills [![Awesome](https://awesome.re/badge.svg)](https://awesome.re)

> A curated list of WeRead's official Agent Skill and the community projects built on top of it.

**Languages**: **English** · [简体中文](./README.md)

**Last updated**: 2026-05-28 (UTC+08:00)

On 2026-05-17, WeRead (微信读书) released its [official Agent Skill](https://cdn.weread.qq.com/skills/weread-skills.zip) — an `Agent Gateway` reachable with a personal API Key (`wrk-...`) that exposes bookshelf, reading stats, highlights, thoughts, and book search. Within 48 hours, a wave of community projects appeared on top of it.

This list tracks them.

**Inclusion criteria.** A project belongs here if it is **built on top of the official Agent Gateway / API Key** released on 2026-05-17. Projects that rely on cookie scraping, browser automation, or other unofficial WeRead access methods are out of scope — many predate the official Skill and have their own communities elsewhere.

## Contents

- [Official](#official)
- [Skill Bundles](#skill-bundles)
- [Workflows & Assistants](#workflows--assistants)
- [CLIs & Libraries](#clis--libraries)
- [MCP Servers](#mcp-servers)
- [Third-Party Sync](#third-party-sync)
- [Widgets & Visualizations](#widgets--visualizations)
- [Experience Runs](#experience-runs)
- [Contributing](#contributing)
- [License](#license)

## Official

| Resource | Type | What it is |
|----------|------|-----------|
| [WeRead Skills (zip)](https://cdn.weread.qq.com/skills/weread-skills.zip) | Skill bundle | Official Skill package: bookshelf, reading progress, reading stats, highlights & thoughts, book search. |
| [WeRead Skill landing page](https://weread.qq.com/r/weread-skills) | Docs | Install instructions, API Key onboarding (QR-code login → `wrk-...`), capability reference. |
| [WeRead Team Blog](https://wereadteam.github.io/) | Blog | Engineering blog from the WeRead team. |

## Skill Bundles

Drop-in Skill packages — install once, every Skill-aware agent can use them.

| Project | Runtime | What it does | Trial |
| --------- | --------- | -------------- | ------ |
| [gandli/weread-skills](https://github.com/gandli/weread-skills) | Multi-runtime | Auto-synced mirror of the official Skill bundle. Easiest way to vendor the Skill into your agent. | [Summary](docs/promo/runs/2026-05-26/gandli-weread-skills/summary.md) · [Artifact](docs/promo/runs/2026-05-26/gandli-weread-skills/artifacts/gateway-list-apis.txt) |
| [ChenyqThu/openclaw-weread-skill](https://github.com/ChenyqThu/openclaw-weread-skill) | OpenClaw | Canonical OpenClaw port: bookshelf, notes, highlights, reading stats. | [Summary](docs/promo/runs/2026-05-26/ChenyqThu-openclaw-weread-skill/summary.md) · [Artifact](docs/promo/runs/2026-05-26/ChenyqThu-openclaw-weread-skill/artifacts/terminal-output.txt) |
| [zhongyi-byte/openclaw-weread-skill](https://github.com/zhongyi-byte/openclaw-weread-skill) | OpenClaw | OpenClaw Skill that exports highlights, thoughts, and reviews to Markdown / Obsidian. | [Summary](docs/promo/runs/2026-05-26/zhongyi-byte-openclaw-weread-skill/summary.md) · [Artifact](docs/promo/runs/2026-05-26/zhongyi-byte-openclaw-weread-skill/artifacts/terminal-output.txt) |
| [lovekeji-ai/agent-weread-skill](https://github.com/lovekeji-ai/agent-weread-skill) | Hermes / OpenClaw | Note export Skill with recent-day filtering and safe defaults for routine "sync the last N days" runs. | [Summary](docs/promo/runs/2026-05-26/lovekeji-ai-agent-weread-skill/summary.md) · [Artifact](docs/promo/runs/2026-05-26/lovekeji-ai-agent-weread-skill/artifacts/terminal-output.txt) |
| [taxueseek/taxue-weread](https://github.com/taxueseek/taxue-weread) | Multi-runtime | Agent-optimized rebuild of the official Skill: CLI + local caching + merged commands tuned for agent token budgets. | [Summary](docs/promo/runs/2026-05-26/taxueseek-taxue-weread/summary.md) · [Artifact](docs/promo/runs/2026-05-26/taxueseek-taxue-weread/artifacts/terminal-output.txt) |
| [jerlinn/jerlin-weread](https://github.com/jerlinn/jerlin-weread) | Multi-runtime | Refactored fork of the official Skill: agents query individual endpoints via CLI on demand, so they don't have to reload the full Skill doc every turn. | [Summary](docs/promo/runs/2026-05-26/jerlinn-jerlin-weread/summary.md) · [Artifact](docs/promo/runs/2026-05-26/jerlinn-jerlin-weread/artifacts/skill-metadata.txt) |

## Workflows & Assistants

Opinionated workflows layered on top of the raw Skill — recommendations, reviews, study paths.

| Project | Runtime | What it does | Trial |
| --------- | --------- | -------------- | ------ |
| [alchaincyf/huashu-weread](https://github.com/alchaincyf/huashu-weread) | Claude Code | "Reading advisor" by 花叔. Four workflows on top of the official Skill: `advisor` / `path` / `alchemy` / `review`, with bookshelf × notes cross-analysis. | [Summary](docs/promo/runs/2026-05-26/alchaincyf-huashu-weread/summary.md) · [Artifact](docs/promo/runs/2026-05-26/alchaincyf-huashu-weread/artifacts/skill-head.txt) |
| [monsignorlaw1015/weread-report](https://github.com/monsignorlaw1015/weread-report) | Skill | "You think you're reading books — really, books are reading you." Generates a private reading self-portrait from your highlights. | [Summary](docs/promo/runs/2026-05-25/monsignorlaw1015-weread-report/summary.md) · [Screenshot](docs/promo/runs/2026-05-25/monsignorlaw1015-weread-report/artifacts/shuduni-report-screenshot.jpg) |
| [viewer12/weread-mirror](https://github.com/viewer12/weread-mirror) | Claude Code | Generates a single-file private reading portrait from official Skill bookshelf, stats, and notes data. | [Summary](docs/promo/runs/2026-05-21/viewer12-weread-mirror/summary.md) · [Screenshot](docs/promo/runs/2026-05-21/viewer12-weread-mirror/artifacts/weread-mirror-portrait.jpg) |
| [kejixiaoliang/read-persona](https://github.com/kejixiaoliang/read-persona) | Codex Skill | Generates a polished HTML reading-persona report from official WeRead Skill data. | [Summary](docs/promo/runs/2026-05-24/kejixiaoliang-read-persona/summary.md) · [Screenshot](docs/promo/runs/2026-05-24/kejixiaoliang-read-persona/artifacts/read-persona-report.jpg) |
| [cocovs/weread-agent-chat](https://github.com/cocovs/weread-agent-chat) | Web | A Pi Agent chat app that analyzes WeRead data through a user-provided API Key and reports in natural language. | [Summary](docs/promo/runs/2026-05-25/cocovs-weread-agent-chat/summary.md) · [Screenshot](docs/promo/runs/2026-05-25/cocovs-weread-agent-chat/artifacts/weread-agent-chat-ui.jpg) |
| [zephyrwang6/space-weread](https://github.com/zephyrwang6/space-weread) | Skill | Workflow that wraps your shelf and notes into a personalized "reading space" theme. | [Summary](docs/promo/runs/2026-05-25/zephyrwang6-space-weread/summary.md) · [Screenshot](docs/promo/runs/2026-05-25/zephyrwang6-space-weread/artifacts/space-weread-preview-screenshot.jpg) |
| [LearnPrompt/carl-weread](https://github.com/LearnPrompt/carl-weread) | Skill | LearnPrompt's carl-style reading advisor workflow, built on the official API Key. | [Summary](docs/promo/runs/2026-05-26/LearnPrompt-carl-weread/summary.md) · [Artifact](docs/promo/runs/2026-05-26/LearnPrompt-carl-weread/artifacts/terminal-help.txt) |
| [stefanxfy/weread-essay-skill](https://github.com/stefanxfy/weread-essay-skill) | Skill | A Skill that turns your shelf and highlights into an essay, built on the official weread-skills package. | [Summary](docs/promo/runs/2026-05-26/stefanxfy-weread-essay-skill/summary.md) · [Artifact](docs/promo/runs/2026-05-26/stefanxfy-weread-essay-skill/artifacts/skill.md) |

## CLIs & Libraries

Command-line and SDK wrappers around the Agent Gateway — usable by humans and by other tools.

| Project | Language | What it does | Trial |
| --------- | ---------- | -------------- | ------ |
| [shiquda/weread-cli](https://github.com/shiquda/weread-cli) | Python | Official-API-based CLI with a bundled Agent Skill manifest. Designed for both humans and agents. | [Summary](docs/promo/runs/2026-05-26/shiquda-weread-cli/summary.md) · [Artifact](docs/promo/runs/2026-05-26/shiquda-weread-cli/artifacts/terminal-help.txt) |
| [nlimpid/weread](https://github.com/nlimpid/weread) | Rust | LLM-friendly CLI and Rust library for the WeRead Agent Gateway. | [Summary](docs/promo/runs/2026-05-26/nlimpid-weread/summary.md) · [Artifact](docs/promo/runs/2026-05-26/nlimpid-weread/artifacts/terminal-help.txt) |
| [ipfans/weread-cli](https://github.com/ipfans/weread-cli) | Python | CLI client and Claude Code-style agent plugin: book search, bookshelf management, highlights, notes, reading stats, recommendations. | [Summary](docs/promo/runs/2026-05-26/ipfans-weread-cli/summary.md) · [Artifact](docs/promo/runs/2026-05-26/ipfans-weread-cli/artifacts/go-test.txt) |
| [Ceelog/OpenWeRead](https://github.com/Ceelog/OpenWeRead) | TypeScript | TypeScript SDK + npm CLI (`openweread`) on top of the official Skill — search, books, shelf, stats, notes, reviews, recommendations, profile. The most comprehensive SDK option so far. | [Summary](docs/promo/runs/2026-05-26/Ceelog-OpenWeRead/summary.md) · [Artifact](docs/promo/runs/2026-05-26/Ceelog-OpenWeRead/artifacts/terminal-help.txt) |
| [lucis-yg/weread-skill-api](https://github.com/lucis-yg/weread-skill-api) | Node.js / Express | Local API gateway that exposes the official weread-skills as 17 REST endpoints (shelf, notes, highlights, recommendations, stats). Pairs with weread-dashboard. | [Summary](docs/promo/runs/2026-05-26/lucis-yg-weread-skill-api/summary.md) · [Artifact](docs/promo/runs/2026-05-26/lucis-yg-weread-skill-api/artifacts/server-start.txt) |
| [marcus776957/weread-master](https://github.com/marcus776957/weread-master) | Python | Full-featured WeRead CLI + agent skill: shelf, notes/highlights, reading stats, recommendations (via `WEREAD_API_KEY` + official Agent Gateway). | [Summary](docs/promo/runs/2026-05-28/marcus776957-weread-master/summary.md) · [Artifact](docs/promo/runs/2026-05-28/marcus776957-weread-master/artifacts/gateway-smoke-test-output.json) |

## MCP Servers

MCP servers that expose the Agent Gateway as MCP tools — for Cursor, Claude Desktop, ChatGPT, etc.

| Project | Hosting | What it does | Trial |
| --------- | --------- | -------------- | ------ |
| [wong2/weread-mcp](https://github.com/wong2/weread-mcp) | Remote | Remote MCP server for WeRead, built on the Agent Gateway with Bearer auth. | [Summary](docs/promo/runs/2026-05-25/wong2-weread-mcp/summary.md) · [Artifact](docs/promo/runs/2026-05-25/wong2-weread-mcp/artifacts/mcp-tools.json) |
| [xJogger/weread-mcp-worker](https://github.com/xJogger/weread-mcp-worker) | Cloudflare Workers | Single-user WeRead MCP server for ChatGPT, deployed on Cloudflare Workers. | [Summary](docs/promo/runs/2026-05-26/xJogger-weread-mcp-worker/summary.md) · [Artifact](docs/promo/runs/2026-05-26/xJogger-weread-mcp-worker/artifacts/mcp-tools.json) |

## Third-Party Sync

Apps that pull from the Agent Gateway and push into another note-taking tool.

| Project | Target | What it does | Trial |
| --------- | -------- | -------------- | ------ |
| [ZhongJiaqi/weread-to-obsidian](https://github.com/ZhongJiaqi/weread-to-obsidian) | Obsidian | Convert WeRead highlights and thoughts into Obsidian notes with Dataview-friendly frontmatter and deep links back to WeRead. | [Summary](docs/promo/runs/2026-05-26/ZhongJiaqi-weread-to-obsidian/summary.md) · [Artifact](docs/promo/runs/2026-05-26/ZhongJiaqi-weread-to-obsidian/artifacts/obsidian-notes-demo.md) |
| [uuavv/weread-notion-worker](https://github.com/uuavv/weread-notion-worker) | Notion | Sync WeRead bookshelf and highlights into a Notion database, using `WEREAD_API_KEY`. | [Summary](docs/promo/runs/2026-05-26/uuavv-weread-notion-worker/summary.md) · [Artifact](docs/promo/runs/2026-05-26/uuavv-weread-notion-worker/artifacts/notion-database-schema.json) |
| [huangcheng/weread-to-flomo](https://github.com/huangcheng/weread-to-flomo) | flomo | Export each WeRead highlight or thought as its own flomo memo, via the flomo MCP. | [Summary](docs/promo/runs/2026-05-26/huangcheng-weread-to-flomo/summary.md) · [Artifact](docs/promo/runs/2026-05-26/huangcheng-weread-to-flomo/artifacts/flomo-card.txt) |
| [gnixner/weread-import](https://github.com/gnixner/weread-import) | Markdown / Obsidian | Exports highlights and thoughts to Markdown via the official Gateway by default, writable to any Obsidian vault or local directory (cookie fallback also supported). | [Summary](docs/promo/runs/2026-05-26/gnixner-weread-import/summary.md) · [Artifact](docs/promo/runs/2026-05-26/gnixner-weread-import/artifacts/notes-export-demo.md) |
| [rayford295/rayford-knowledge-atlas](https://github.com/rayford295/rayford-knowledge-atlas) | Web / Obsidian | A personal knowledge atlas connecting WeRead reading inputs with papers, repositories, and workflows (refreshed via `WEREAD_API_KEY`). | [Summary](docs/promo/runs/2026-05-25/rayford295-rayford-knowledge-atlas/summary.md) · [Screenshot](docs/promo/runs/2026-05-25/rayford295-rayford-knowledge-atlas/artifacts/screenshot-home.jpg) |
| [Yant2023/weread-obsidian](https://github.com/Yant2023/weread-obsidian) | Obsidian | Exports highlights and thoughts to an Obsidian vault; a Python re-implementation of the official Skill API. | [Summary](docs/promo/runs/2026-05-26/Yant2023-weread-obsidian/summary.md) · [Artifact](docs/promo/runs/2026-05-26/Yant2023-weread-obsidian/artifacts/obsidian-notes-demo.md) |
| [f1603206034/weread-notes](https://github.com/f1603206034/weread-notes) | GitHub + Notion / GitHub Actions | Syncs notes to both a GitHub repo and Notion database with incremental + full sync modes plus cron via GitHub Actions. | [Summary](docs/promo/runs/2026-05-26/f1603206034-weread-notes/summary.md) · [Artifact](docs/promo/runs/2026-05-26/f1603206034-weread-notes/artifacts/notes-export-demo.md) |
| [e5145/weread-link-notion](https://github.com/e5145/weread-link-notion) | Notion | A WeRead ↔ Notion link bridge using the official Skill API Key (no cookies). | [Summary](docs/promo/runs/2026-05-26/e5145-weread-link-notion/summary.md) · [Artifact](docs/promo/runs/2026-05-26/e5145-weread-link-notion/artifacts/notion-database-schema.json) |
| [KevinChen1994/weread2notion](https://github.com/KevinChen1994/weread2notion) | Notion | WeRead → Notion sync tool, authenticated with a wrk- API Key. | [Summary](docs/promo/runs/2026-05-26/KevinChen1994-weread2notion/summary.md) · [Artifact](docs/promo/runs/2026-05-26/KevinChen1994-weread2notion/artifacts/notion-database-schema.json) |
| [TianLanhe/weread-readdata-for-tencent-doc](https://github.com/TianLanhe/weread-readdata-for-tencent-doc) | Tencent Docs (smart table) | A Skill that upserts your bookshelf data into a Tencent Docs smart table, via the Tencent Docs MCP. | [Summary](docs/promo/runs/2026-05-26/TianLanhe-weread-readdata-for-tencent-doc/summary.md) · [Artifact](docs/promo/runs/2026-05-26/TianLanhe-weread-readdata-for-tencent-doc/artifacts/tencent-docs-reading-stats.csv) |
| [TianLanhe/weread-readtime-for-tencent-doc](https://github.com/TianLanhe/weread-readtime-for-tencent-doc) | Tencent Docs (smart table) | Upserts daily reading time into the "reading-time" sheet of a Tencent Docs smart table. Sibling Skill of the same author. | [Summary](docs/promo/runs/2026-05-26/TianLanhe-weread-readtime-for-tencent-doc/summary.md) · [Artifact](docs/promo/runs/2026-05-26/TianLanhe-weread-readtime-for-tencent-doc/artifacts/tencent-docs-reading-stats.csv) |
| [TianLanhe/weread-readtime-for-lark](https://github.com/TianLanhe/weread-readtime-for-lark) | Feishu Base | Syncs daily reading time into a Feishu Base "reading-time" table, using lark-cli. | [Summary](docs/promo/runs/2026-05-26/TianLanhe-weread-readtime-for-lark/summary.md) · [Artifact](docs/promo/runs/2026-05-26/TianLanhe-weread-readtime-for-lark/artifacts/lark-reading-stats.csv) |

## Widgets & Visualizations

Apps that render reading data into something you can hang on your desktop, wallpaper, or screensaver.

| Project | Platform | What it does | Trial |
| --------- | ---------- | -------------- | ------ |
| [TinaDu-AI/reading-widget](https://github.com/TinaDu-AI/reading-widget) | macOS (Übersicht) | Desktop widget for WeRead reading stats — streak, today / month time, current book, year quote — refreshed every 5 minutes. Built explicitly as a "rendering shell" on top of the official Skill. | [Summary](docs/promo/runs/2026-05-25/TinaDu-AI-reading-widget/summary.md) · [Screenshot](docs/promo/runs/2026-05-25/TinaDu-AI-reading-widget/artifacts/reading-widget-screenshot.jpg) |
| [Kalmaegi/weread-analyzer](https://github.com/Kalmaegi/weread-analyzer) | Web | Reading-profile analyzer built on the official WeRead API Key. | [Summary](docs/promo/runs/2026-05-25/Kalmaegi-weread-analyzer/summary.md) · [Screenshot](docs/promo/runs/2026-05-25/Kalmaegi-weread-analyzer/artifacts/weread-analyzer-report-screenshot.jpg) |
| [AstrophelXD/WeReadAura](https://github.com/AstrophelXD/WeReadAura) | Web | Read-only analytics dashboard aggregating bookshelf, reading time, highlights, and recommendations into a neo-brutalism web interface. Personal use only. | [Summary](docs/promo/runs/2026-05-25/AstrophelXD-WeReadAura/summary.md) · [Screenshot](docs/promo/runs/2026-05-25/AstrophelXD-WeReadAura/artifacts/screenshot-home.jpg) |
| [alexsowake/weread_personality_summery](https://github.com/alexsowake/weread_personality_summery) | Web (EdgeOne) | Generates a "reading personality" portrait from your WeRead notes and highlights using DeepSeek AI; stores no user data. | [Summary](docs/promo/runs/2026-05-26/alexsowake-weread_personality_summery/summary.md) · [Artifact](docs/promo/runs/2026-05-26/alexsowake-weread_personality_summery/artifacts/index.html) |
| [zzylanmengqingchuan/weread-tools](https://github.com/zzylanmengqingchuan/weread-tools) | Web | WeRead toolkit: honest-bookshelf report and reading-personality profile generator. | [Summary](docs/promo/runs/2026-05-25/zzylanmengqingchuan-weread-tools/summary.md) · [Screenshot](docs/promo/runs/2026-05-25/zzylanmengqingchuan-weread-tools/artifacts/weread-report-screenshot.jpg) |
| [ZiGmaX809/Weread_ReadTime_Heatmap](https://github.com/ZiGmaX809/Weread_ReadTime_Heatmap) | Web (heatmap) | ★ Paints reading time as a GitHub-style heatmap — at-a-glance daily/weekly/monthly intensity over the year. The most striking visualization in this list. | [Summary](docs/promo/runs/2026-05-25/ZiGmaX809-Weread_ReadTime_Heatmap/summary.md) · [Screenshot](docs/promo/runs/2026-05-25/ZiGmaX809-Weread_ReadTime_Heatmap/artifacts/awesome-weread-heatmap-screenshot.jpg) |
| [SpaceTrave1/weread-deep-insights](https://github.com/SpaceTrave1/weread-deep-insights) | Web | A "deep insights" reading analytics tool — surfaces patterns hidden in your shelf and notes. | [Summary](docs/promo/runs/2026-05-25/SpaceTrave1-weread-deep-insights/summary.md) · [Screenshot](docs/promo/runs/2026-05-25/SpaceTrave1-weread-deep-insights/artifacts/weread_deep_report-screenshot.jpg) |
| [LoloChak/weread-golden-quotes](https://github.com/LoloChak/weread-golden-quotes) | Python, Web | Extracts golden quotes from WeRead notes and renders a rice-paper styled daily quote page with reflection prompts. | [Summary](docs/promo/runs/2026-05-26/LoloChak-weread-golden-quotes/summary.md) · [Screenshot](docs/promo/runs/2026-05-26/LoloChak-weread-golden-quotes/artifacts/daily-golden-quotes-fullpage.jpg) |
| [lucis-yg/weread-dashboard](https://github.com/lucis-yg/weread-dashboard) | Vue 3 / Web | An elegant WeRead data dashboard (shelf, notes, reading stats). **Pairs with lucis-yg/weread-skill-api as the backend.** | [Summary](docs/promo/runs/2026-05-25/lucis-yg-weread-dashboard/summary.md) · [Artifact](docs/promo/runs/2026-05-25/lucis-yg-weread-dashboard/artifacts/dashboard-preview.html) |
| [ktKongTong/wereto](https://github.com/ktKongTong/wereto) | Cloudflare Workers | One-click Cloudflare deploy for a public "reading homepage" page; minimal `fetch` + `ky` wrapper around the Agent Gateway. | [Summary](docs/promo/runs/2026-05-26/ktKongTong-wereto/summary.md) · [Screenshot](docs/promo/runs/2026-05-26/ktKongTong-wereto/artifacts/example-1.png) |

## Experience Runs

For picked projects, this repo keeps real trial outputs under `docs/promo/runs/YYYY-MM-DD/<owner-repo>/summary.md` plus an `artifacts/` folder. Summaries are written in Simplified Chinese, and artifacts hold screenshots, HTML, Markdown, JSON metadata, or other concrete outputs that show what the project produces with live WeRead data.

See the current completed and backfill list: [project experience archive](docs/promo/runs/README.md).

## Contributing

Contributions are welcome — see [CONTRIBUTING.md](CONTRIBUTING.md).

In short:

- **Official-Skill-only.** The project must use the official Agent Gateway / API Key (`wrk-...`). Cookie scraping and browser automation are out of scope.
- **State the runtime / target.** Claude Code, OpenClaw, Hermes, Cursor, Cloudflare Workers, macOS, etc. — whatever the right axis is for the table.
- **One row per project.** Pick the right table; if no table fits, propose a new section in your PR.
- **Working & documented.** Public repo, working README, last commit within ~12 months.

## License

[![CC0](https://mirrors.creativecommons.org/presskit/buttons/88x31/svg/cc-zero.svg)](https://creativecommons.org/publicdomain/zero/1.0/)

To the extent possible under law, the authors have waived all copyright and related or neighboring rights to this work.
