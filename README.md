# Awesome WeRead Skills [![Awesome](https://awesome.re/badge.svg)](https://awesome.re)

[![Featured on ToolFame](https://toolfame.com/badge-light.svg)](https://toolfame.com/item/awesome-weread-skills)

> 精选「微信读书」官方 Agent Skill，以及一切基于它的二创项目。

**语言**: **简体中文** · [English](./README.en.md)

2026 年 5 月 17 日，微信读书发布了[官方 Agent Skill](https://cdn.weread.qq.com/skills/weread-skills.zip) —— 一个用个人 API Key（`wrk-...`）即可访问的 `Agent Gateway`，提供书架、阅读统计、划线、想法、书籍搜索等能力。48 小时内，社区已经在它之上长出一波二创项目。

这个清单收录的就是它们。

**收录标准。** 项目必须**基于 2026-05-17 发布的官方 Agent Gateway / API Key**。依赖 cookie 抓取、浏览器自动化或其他非官方接口的项目不在范围内 —— 这些大多早于官方 Skill 出现，有自己独立的生态。

## 目录

- [官方资源](#官方资源)
- [Skill 安装包](#skill-安装包)
- [工作流与助手](#工作流与助手)
- [命令行与 SDK](#命令行与-sdk)
- [MCP 服务](#mcp-服务)
- [第三方同步](#第三方同步)
- [桌面挂件与可视化](#桌面挂件与可视化)
- [贡献指南](#贡献指南)
- [许可](#许可)

## 官方资源

| 资源 | 类型 | 介绍 |
|------|------|------|
| [WeRead Skills (zip 下载)](https://cdn.weread.qq.com/skills/weread-skills.zip) | Skill 安装包 | 官方 Skill 包：书架、阅读进度、阅读统计、划线与想法、书籍搜索。 |
| [微信读书 Skill 介绍页](https://weread.qq.com/r/weread-skills) | 文档 | 安装说明、API Key 申请流程（扫码登录拿到 `wrk-...`）、能力清单。 |
| [WeRead 团队博客](https://wereadteam.github.io/) | 博客 | 微信读书团队的技术博客。 |

## Skill 安装包

可以直接装进 Skill-aware Agent 的 Skill 包 —— 一次安装，到处可用。

| 项目 | 运行环境 | 介绍 |
|------|---------|------|
| [gandli/weread-skills](https://github.com/gandli/weread-skills) | 跨 runtime | 官方 Skill 包的自动同步镜像。最简单的方式把官方 Skill 引入自己的 Agent。 |
| [ChenyqThu/openclaw-weread-skill](https://github.com/ChenyqThu/openclaw-weread-skill) | OpenClaw | OpenClaw 标准移植版：书架、笔记、划线、阅读统计。 |
| [zhongyi-byte/openclaw-weread-skill](https://github.com/zhongyi-byte/openclaw-weread-skill) | OpenClaw | 把划线、想法、书评导出到 Markdown / Obsidian 的 OpenClaw Skill。 |
| [lovekeji-ai/agent-weread-skill](https://github.com/lovekeji-ai/agent-weread-skill) | Hermes / OpenClaw | 带「最近 N 天过滤」和安全默认值的笔记导出 Skill，专门为日常增量同步打磨。 |
| [taxueseek/taxue-weread](https://github.com/taxueseek/taxue-weread) | 跨 runtime | 官方 Skill 的 Agent 优化版：CLI + 本地缓存 + 合并命令，针对 Agent 上下文预算调优。 |

## 工作流与助手

在 Skill 基础能力之上做了一层「读书顾问 / 推荐 / 复盘」类工作流的项目。

| 项目 | 运行环境 | 介绍 |
|------|---------|------|
| [alchaincyf/huashu-weread](https://github.com/alchaincyf/huashu-weread) | Claude Code | 花叔的「读书顾问」Skill。在官方 Skill 之上加了 4 个 workflow：`advisor` / `path` / `alchemy` / `review`，做书架 × 笔记交叉分析。 |
| [ColorlessBoy/weread-dl-skill](https://github.com/ColorlessBoy/weread-dl-skill) | 通用 Agent Skill | AI 阅读助手：扫码登录、章节解码、阅读进度跟踪、Skill 内 AI 对话。 |

## 命令行与 SDK

封装 Agent Gateway 的 CLI 和 SDK —— 人类能用，其他工具也能调。

| 项目 | 语言 | 介绍 |
|------|------|------|
| [shiquda/weread-cli](https://github.com/shiquda/weread-cli) | Python | 基于官方 API 的 CLI，附带 Agent Skill manifest。同时面向人与 Agent。 |
| [nlimpid/weread](https://github.com/nlimpid/weread) | Rust | 面向 LLM 友好的 CLI 和 Rust 库，封装微信读书 Agent Gateway。 |

## MCP 服务

把 Agent Gateway 包装成 MCP 工具，给 Cursor、Claude Desktop、ChatGPT 等 MCP 客户端用。

| 项目 | 部署方式 | 介绍 |
|------|---------|------|
| [wong2/weread-mcp](https://github.com/wong2/weread-mcp) | 远程 MCP | 基于 Agent Gateway + Bearer 鉴权的远程 MCP 服务。 |
| [xJogger/weread-mcp-worker](https://github.com/xJogger/weread-mcp-worker) | Cloudflare Workers | 部署在 Cloudflare Workers 上的单用户 WeRead MCP，面向 ChatGPT。 |

## 第三方同步

从 Agent Gateway 拉数据，推到别的笔记工具里。

| 项目 | 目标平台 | 介绍 |
|------|---------|------|
| [ZhongJiaqi/weread-to-obsidian](https://github.com/ZhongJiaqi/weread-to-obsidian) | Obsidian | 把划线和想法转成 Obsidian 笔记，附 Dataview 友好的 frontmatter 和回跳微信读书的深链。 |
| [uuavv/weread-notion-worker](https://github.com/uuavv/weread-notion-worker) | Notion | 用 `WEREAD_API_KEY` 把书架和划线同步进 Notion 数据库。 |
| [huangcheng/weread-to-flomo](https://github.com/huangcheng/weread-to-flomo) | flomo | 把每条微信读书划线 / 想法作为独立的 flomo memo 导出，走 flomo MCP。 |

## 桌面挂件与可视化

把阅读数据渲染成桌面 widget、壁纸、屏保的可视化项目。

| 项目 | 平台 | 介绍 |
|------|------|------|
| [TinaDu-AI/reading-widget](https://github.com/TinaDu-AI/reading-widget) | macOS (Übersicht) | 微信读书阅读统计桌面挂件 —— 连续天数、今日 / 本月时长、当前在读、年度金句 —— 每 5 分钟刷新。明确定位为「官方 Skill 之上的一层渲染壳」。 |
| [Kalmaegi/weread-analyzer](https://github.com/Kalmaegi/weread-analyzer) | Web | 基于微信读书官方 API Key 的阅读画像分析项目。 |

## 贡献指南

欢迎贡献 —— 详见 [CONTRIBUTING.md](CONTRIBUTING.md)。

简版规则：

- **只收基于官方 Skill 的二创。** 项目必须使用官方 Agent Gateway / API Key（`wrk-...`）。Cookie 抓取和浏览器自动化不在范围内。
- **写清楚 runtime / 目标平台。** Claude Code、OpenClaw、Hermes、Cursor、Cloudflare Workers、macOS 等 —— 选择对应表格最重要的那一列。
- **一个项目一行。** 选合适的表格；如果都不合适，PR 里提出新加一节。
- **可用且有文档。** 公开仓库、README 能跑通、最近一年内有提交。

## 许可

[![CC0](https://mirrors.creativecommons.org/presskit/buttons/88x31/svg/cc-zero.svg)](https://creativecommons.org/publicdomain/zero/1.0/)

在法律允许的范围内，作者已放弃本作品的所有版权及相关权利。
