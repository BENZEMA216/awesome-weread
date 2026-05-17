# Awesome WeRead Skills [![Awesome](https://awesome.re/badge.svg)](https://awesome.re)

> A curated list of WeRead's official Agent Skill and the community projects built on top of it.

**Languages**: **English** · [简体中文](./README.zh-CN.md)

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

| Project | Runtime | What it does |
|---------|---------|--------------|
| [gandli/weread-skills](https://github.com/gandli/weread-skills) | Multi-runtime | Auto-synced mirror of the official Skill bundle. Easiest way to vendor the Skill into your agent. |
| [ChenyqThu/openclaw-weread-skill](https://github.com/ChenyqThu/openclaw-weread-skill) | OpenClaw | Canonical OpenClaw port: bookshelf, notes, highlights, reading stats. |
| [zhongyi-byte/openclaw-weread-skill](https://github.com/zhongyi-byte/openclaw-weread-skill) | OpenClaw | OpenClaw Skill that exports highlights, thoughts, and reviews to Markdown / Obsidian. |
| [lovekeji-ai/agent-weread-skill](https://github.com/lovekeji-ai/agent-weread-skill) | Hermes / OpenClaw | Note export Skill with recent-day filtering and safe defaults for routine "sync the last N days" runs. |
| [taxueseek/taxue-weread](https://github.com/taxueseek/taxue-weread) | Multi-runtime | Agent-optimized rebuild of the official Skill: CLI + local caching + merged commands tuned for agent token budgets. |

## Workflows & Assistants

Opinionated workflows layered on top of the raw Skill — recommendations, reviews, study paths.

| Project | Runtime | What it does |
|---------|---------|--------------|
| [alchaincyf/huashu-weread](https://github.com/alchaincyf/huashu-weread) | Claude Code | "Reading advisor" by 花叔. Four workflows on top of the official Skill: `advisor` / `path` / `alchemy` / `review`, with bookshelf × notes cross-analysis. |
| [ColorlessBoy/weread-dl-skill](https://github.com/ColorlessBoy/weread-dl-skill) | Generic Agent Skill | AI reading assistant: QR-code login, chapter decoding, reading-progress tracking, in-Skill AI chat. |

## CLIs & Libraries

Command-line and SDK wrappers around the Agent Gateway — usable by humans and by other tools.

| Project | Language | What it does |
|---------|----------|--------------|
| [shiquda/weread-cli](https://github.com/shiquda/weread-cli) | Python | Official-API-based CLI with a bundled Agent Skill manifest. Designed for both humans and agents. |
| [nlimpid/weread](https://github.com/nlimpid/weread) | Rust | LLM-friendly CLI and Rust library for the WeRead Agent Gateway. |

## MCP Servers

MCP servers that expose the Agent Gateway as MCP tools — for Cursor, Claude Desktop, ChatGPT, etc.

| Project | Hosting | What it does |
|---------|---------|--------------|
| [wong2/weread-mcp](https://github.com/wong2/weread-mcp) | Remote | Remote MCP server for WeRead, built on the Agent Gateway with Bearer auth. |
| [xJogger/weread-mcp-worker](https://github.com/xJogger/weread-mcp-worker) | Cloudflare Workers | Single-user WeRead MCP server for ChatGPT, deployed on Cloudflare Workers. |

## Third-Party Sync

Apps that pull from the Agent Gateway and push into another note-taking tool.

| Project | Target | What it does |
|---------|--------|--------------|
| [ZhongJiaqi/weread-to-obsidian](https://github.com/ZhongJiaqi/weread-to-obsidian) | Obsidian | Convert WeRead highlights and thoughts into Obsidian notes with Dataview-friendly frontmatter and deep links back to WeRead. |
| [uuavv/weread-notion-worker](https://github.com/uuavv/weread-notion-worker) | Notion | Sync WeRead bookshelf and highlights into a Notion database, using `WEREAD_API_KEY`. |
| [huangcheng/weread-to-flomo](https://github.com/huangcheng/weread-to-flomo) | flomo | Export each WeRead highlight or thought as its own flomo memo, via the flomo MCP. |

## Widgets & Visualizations

Apps that render reading data into something you can hang on your desktop, wallpaper, or screensaver.

| Project | Platform | What it does |
|---------|----------|--------------|
| [TinaDu-AI/reading-widget](https://github.com/TinaDu-AI/reading-widget) | macOS (Übersicht) | Desktop widget for WeRead reading stats — streak, today / month time, current book, year quote — refreshed every 5 minutes. Built explicitly as a "rendering shell" on top of the official Skill. |
| [Kalmaegi/weread-analyzer](https://github.com/Kalmaegi/weread-analyzer) | Web | Reading-profile analyzer built on the official WeRead API Key. |

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
