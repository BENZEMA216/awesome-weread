# Awesome WeRead [![Awesome](https://awesome.re/badge.svg)](https://awesome.re)

> A curated list of resources for WeRead (微信读书) — official Skill, third-party Agent Skills, MCP servers, note sync tools, ePub exporters, and the rest of the ecosystem.

WeRead released its [official Agent Skill](https://cdn.weread.qq.com/skills/weread-skills.zip) on 2026-05-17, instantly turning a long-standing community of unofficial scrapers and exporters into a first-class Agent surface. This list tracks both — the new Skill-based wave and the mature tooling layer underneath.

精选的「微信读书」生态资源清单：官方 Skill、第三方 Agent Skills、MCP 服务、笔记同步、ePub 导出，以及围绕微信读书的所有像样的开源项目。

## Contents

- [Official](#official)
- [Agent Skills](#agent-skills)
- [MCP Servers](#mcp-servers)
- [CLIs & Libraries](#clis--libraries)
- [Note Sync & Export](#note-sync--export)
  - [Obsidian](#obsidian)
  - [Notion](#notion)
  - [Flomo](#flomo)
  - [Other Targets](#other-targets)
- [ePub & Book Download](#epub--book-download)
- [Reading Analytics & Widgets](#reading-analytics--widgets)
- [Automation](#automation)
- [Editor & Browser Plugins](#editor--browser-plugins)
- [Articles & Reports](#articles--reports)
- [Contributing](#contributing)

## Official

- [WeRead Skills (官方下载)](https://cdn.weread.qq.com/skills/weread-skills.zip) — Bookshelf, reading stats, highlights, notes, book search. Released 2026-05-17.
- [WeRead Skill 介绍页](https://weread.qq.com/r/weread-skills) — Official Skill landing page.
- [WeRead Team Blog](https://wereadteam.github.io/) — Engineering blog from the WeRead team.

## Agent Skills

Skills (Claude Code / OpenClaw / Hermes / etc.) that wrap the official API or its workflows.

- [gandli/weread-skills](https://github.com/gandli/weread-skills) — Auto-synced collection of the official WeRead Agent Skills.
- [alchaincyf/huashu-weread](https://github.com/alchaincyf/huashu-weread) — 花叔 "读书顾问" — adds 4 workflows (advisor / path / alchemy / review) on top of the official Skill, with bookshelf × notes cross-analysis.
- [taxueseek/taxue-weread](https://github.com/taxueseek/taxue-weread) — Agent-optimized version of the official Skill: CLI + caching + merged commands tailored for Agent environments.
- [shiquda/weread-cli](https://github.com/shiquda/weread-cli) — Official API-based CLI with bundled Agent Skill support.
- [ColorlessBoy/weread-dl-skill](https://github.com/ColorlessBoy/weread-dl-skill) — AI reading assistant Skill: QR login, chapter decoding, reading progress, AI chat.
- [zhongyi-byte/openclaw-weread-skill](https://github.com/zhongyi-byte/openclaw-weread-skill) — OpenClaw Skill that exports highlights, thoughts, and reviews to Markdown / Obsidian.
- [ChenyqThu/openclaw-weread-skill](https://github.com/ChenyqThu/openclaw-weread-skill) — OpenClaw Skill for bookshelf, notes, highlights, and reading stats.
- [lovekeji-ai/agent-weread-skill](https://github.com/lovekeji-ai/agent-weread-skill) — Hermes / OpenClaw note export Skill with recent-day filtering and safe defaults.
- [huangcheng/weread-to-flomo](https://github.com/huangcheng/weread-to-flomo) — Agent Skill exporting WeRead highlights and thoughts to flomo via the flomo MCP.
- [KANIKIG/wechat-search-weread](https://github.com/KANIKIG/wechat-search-weread) — Skill for searching WeChat public-account articles inside WeRead.

## MCP Servers

- [wong2/weread-mcp](https://github.com/wong2/weread-mcp) — Remote MCP server for WeRead.
- [aixiasang/weread-mcp](https://github.com/aixiasang/weread-mcp) — 14 tools (bookshelf, book info, highlights, search, export, …) with TTL-based SQLite caching.
- [xJogger/weread-mcp-worker](https://github.com/xJogger/weread-mcp-worker) — Single-user WeRead MCP server for ChatGPT, deployed on Cloudflare Workers.
- [freestylefly/mcp-server-weread](https://github.com/freestylefly/mcp-server-weread) — MCP server feeding WeRead books, notes, and highlights to Cursor / Claude Desktop.
- [wt153/weread-mcp](https://github.com/wt153/weread-mcp) — MCP service for AI agents to manage and analyze WeRead libraries.

## CLIs & Libraries

- [ipfans/weread-cli](https://github.com/ipfans/weread-cli) — Command-line client: search books, manage bookshelf, view highlights and notes, browse reviews, reading stats.
- [nlimpid/weread](https://github.com/nlimpid/weread) — LLM-friendly CLI and Rust library for the WeRead Agent gateway.
- [Vanyoo/weread-cli](https://github.com/Vanyoo/weread-cli) — TUI controller for WeRead.

## Note Sync & Export

### Obsidian

- [zhaohongxuan/obsidian-weread-plugin](https://github.com/zhaohongxuan/obsidian-weread-plugin) — Sync WeRead highlights and annotations directly into an Obsidian vault. The de-facto standard.
- [ZhongJiaqi/weread-to-obsidian](https://github.com/ZhongJiaqi/weread-to-obsidian) — Convert WeRead highlights and thoughts into Obsidian notes with Dataview-friendly frontmatter and deep links.
- [gnixner/weread-import](https://github.com/gnixner/weread-import) — Export WeRead highlights and thoughts to Markdown files for any local directory or Obsidian vault.

### Notion

- [uuavv/weread-notion-worker](https://github.com/uuavv/weread-notion-worker) — Sync WeRead to Notion.

### Flomo

- [blessonism/weread2flomo](https://github.com/blessonism/weread2flomo) — Sync WeRead highlights to flomo with AI summarization, tag generation, and scheduled sync.
- [huangcheng/weread-to-flomo](https://github.com/huangcheng/weread-to-flomo) — Export each highlight as its own flomo memo via the flomo MCP.

### Other Targets

- [arry-lee/wereader](https://github.com/arry-lee/wereader) — Full-featured WeRead note assistant.
- [k190513120/weread-bitable-sync-plugin](https://github.com/k190513120/weread-bitable-sync-plugin) — Sync WeRead to Feishu Bitable (Cloudflare Worker + Stripe).
- [Glaube-TY/siyuan-douban](https://github.com/Glaube-TY/siyuan-douban) — Siyuan plugin: Douban book info + auto-generate reading notes + sync WeRead highlights.
- [uuaki/halo-weread-plugin](https://github.com/uuaki/halo-weread-plugin) — Halo blog plugin that syncs bookshelf, reading progress, and book metadata.
- [Yant2023/WeRead2Note](https://github.com/Yant2023/WeRead2Note) — WeRead notes exporter.

## ePub & Book Download

- [magicdawn/weread-spy](https://github.com/magicdawn/weread-spy) — Generate ePub e-books from the WeRead web reader.
- [sun1638650145/bunnyburrow-weread](https://github.com/sun1638650145/bunnyburrow-weread) — WeRead ePub download tool (Bunnyburrow Software Project).
- [gerrywingfield-pixel/weread-canvas-exporter](https://github.com/gerrywingfield-pixel/weread-canvas-exporter) — Export WeRead canvases.

## Reading Analytics & Widgets

- [TinaDu-AI/reading-widget](https://github.com/TinaDu-AI/reading-widget) — macOS desktop widget for WeRead reading stats (streak, time, current book, year quote) via Übersicht.
- [Kalmaegi/weread-analyzer](https://github.com/Kalmaegi/weread-analyzer) — Reading-profile analysis built on the official WeRead API key.
- [zzylanmengqingchuan/weread-tools](https://github.com/zzylanmengqingchuan/weread-tools) — "Honest bookshelf report" and reading-personality profile generator.
- [charleschen2426-maker/weread-screensaver-cards](https://github.com/charleschen2426-maker/weread-screensaver-cards) — Turn WeRead notes into GPT-Image knowledge-card screensavers for macOS.
- [fakechris/douban-books-next](https://github.com/fakechris/douban-books-next) — Clean rebuild of the WeRead / Douban bookshelf product.

## Automation

- [88825/wereadx](https://github.com/88825/wereadx) — WeRead helper: book download, auto-reading, auto-redeem of trial cards.
- [EastSlavs/weread-auto](https://github.com/EastSlavs/weread-auto) — Image-recognition automation script for the web reader; simulates human page-turning, daily scheduled run, accumulates reading time and check-ins.
- [chieeh/WereadCheckin](https://github.com/chieeh/WereadCheckin) — Daily check-in tool.

## Editor & Browser Plugins

- [Angus-Liu/weread-toolkit](https://github.com/Angus-Liu/weread-toolkit) — Chrome extension toolbox for the WeRead web reader.
- [jiangfei5945/weread-app](https://github.com/jiangfei5945/weread-app) — Tauri-based WeRead desktop app for macOS and Windows.
- [wangjianghu/VSCode-WeRead](https://github.com/wangjianghu/VSCode-WeRead) — Read WeRead inside VS Code.
- [ylw1997/touchFish](https://github.com/ylw1997/touchFish) — VS Code "slacking off" suite covering WeRead, X, Bilibili, QQ Music, Zhihu, Weibo, and more.

## Articles & Reports

- [小众软件: 微信读书发布官方 Skill](https://www.appinn.com/weread-skills) — Launch coverage of the official Skill (2026-05-17).
- [Claude Code 橙皮书：从入门到精通（微信读书特别版）](https://weread.qq.com/web/reader/870320d0813abb494g0113ca) — WeRead-published Claude Code book.

## Contributing

Contributions are welcome — see [CONTRIBUTING.md](CONTRIBUTING.md).

Quick rules:

- One link per line, format: `[name](url) — short, factual description.`
- Group by category. Open a new section only when there are 2+ entries.
- Project must be **public, working, and documented**. No vendored forks or stale mirrors.
- Prefer the **upstream repo** over a fork. If a fork is meaningfully different, say how in the description.
- For Skills / MCP servers, mention which runtime (Claude Code, OpenClaw, Hermes, Cursor, etc.) it targets.

## License

[![CC0](https://mirrors.creativecommons.org/presskit/buttons/88x31/svg/cc-zero.svg)](https://creativecommons.org/publicdomain/zero/1.0/)

To the extent possible under law, the authors have waived all copyright and related or neighboring rights to this work.
