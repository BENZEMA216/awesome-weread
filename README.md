# Awesome WeRead Skills [![Awesome](https://awesome.re/badge.svg)](https://awesome.re)

> 精选「微信读书」官方 Agent Skill，以及一切基于它的二创项目。

**语言**: **简体中文** · [English](./README.en.md)

**最后更新**: 2026-05-28 (UTC+08:00)

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
- [体验归档](#体验归档)
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

| 项目 | 运行环境 | 介绍 | 体验 |
| ------ | --------- | ------ | ------ |
| [gandli/weread-skills](https://github.com/gandli/weread-skills) | 跨 runtime | 官方 Skill 包的自动同步镜像。最简单的方式把官方 Skill 引入自己的 Agent。 | [记录](docs/promo/runs/2026-05-26/gandli-weread-skills/summary.md) · [产物](docs/promo/runs/2026-05-26/gandli-weread-skills/artifacts/gateway-list-apis.txt) |
| [ChenyqThu/openclaw-weread-skill](https://github.com/ChenyqThu/openclaw-weread-skill) | OpenClaw | OpenClaw 标准移植版：书架、笔记、划线、阅读统计。 | [记录](docs/promo/runs/2026-05-26/ChenyqThu-openclaw-weread-skill/summary.md) · [产物](docs/promo/runs/2026-05-26/ChenyqThu-openclaw-weread-skill/artifacts/terminal-output.txt) |
| [zhongyi-byte/openclaw-weread-skill](https://github.com/zhongyi-byte/openclaw-weread-skill) | OpenClaw | 把划线、想法、书评导出到 Markdown / Obsidian 的 OpenClaw Skill。 | [记录](docs/promo/runs/2026-05-26/zhongyi-byte-openclaw-weread-skill/summary.md) · [产物](docs/promo/runs/2026-05-26/zhongyi-byte-openclaw-weread-skill/artifacts/terminal-output.txt) |
| [lovekeji-ai/agent-weread-skill](https://github.com/lovekeji-ai/agent-weread-skill) | Hermes / OpenClaw | 带「最近 N 天过滤」和安全默认值的笔记导出 Skill，专门为日常增量同步打磨。 | [记录](docs/promo/runs/2026-05-26/lovekeji-ai-agent-weread-skill/summary.md) · [产物](docs/promo/runs/2026-05-26/lovekeji-ai-agent-weread-skill/artifacts/terminal-output.txt) |
| [taxueseek/taxue-weread](https://github.com/taxueseek/taxue-weread) | 跨 runtime | 官方 Skill 的 Agent 优化版：CLI + 本地缓存 + 合并命令，针对 Agent 上下文预算调优。 | [记录](docs/promo/runs/2026-05-26/taxueseek-taxue-weread/summary.md) · [产物](docs/promo/runs/2026-05-26/taxueseek-taxue-weread/artifacts/terminal-output.txt) |
| [jerlinn/jerlin-weread](https://github.com/jerlinn/jerlin-weread) | 跨 runtime | 官方 Skill 的重构版：让 Agent 通过 CLI 按需查询单个接口，不用每轮重读整个 Skill 文档。 | [记录](docs/promo/runs/2026-05-26/jerlinn-jerlin-weread/summary.md) · [产物](docs/promo/runs/2026-05-26/jerlinn-jerlin-weread/artifacts/skill-metadata.txt) |

## 工作流与助手

在 Skill 基础能力之上做了一层「读书顾问 / 推荐 / 复盘」类工作流的项目。

| 项目 | 运行环境 | 介绍 | 体验 |
| ------ | --------- | ------ | ------ |
| [alchaincyf/huashu-weread](https://github.com/alchaincyf/huashu-weread) | Claude Code | 花叔的「读书顾问」Skill。在官方 Skill 之上加了 4 个 workflow：`advisor` / `path` / `alchemy` / `review`，做书架 × 笔记交叉分析。 | [记录](docs/promo/runs/2026-05-26/alchaincyf-huashu-weread/summary.md) · [产物](docs/promo/runs/2026-05-26/alchaincyf-huashu-weread/artifacts/skill-head.txt) |
| [monsignorlaw1015/weread-report](https://github.com/monsignorlaw1015/weread-report) | Skill | 「你以为你在读书，其实书一直在读你」基于微信读书数据生成私人阅读自画像，从笔记里挖出真正的「你」。 | [记录](docs/promo/runs/2026-05-25/monsignorlaw1015-weread-report/summary.md) · [截图](docs/promo/runs/2026-05-25/monsignorlaw1015-weread-report/artifacts/shuduni-report-screenshot.jpg) |
| [viewer12/weread-mirror](https://github.com/viewer12/weread-mirror) | Claude Code | 用官方 Skill 拉书架、统计和笔记，生成单文件 HTML 私人读书画像。 | [记录](docs/promo/runs/2026-05-21/viewer12-weread-mirror/summary.md) · [截图](docs/promo/runs/2026-05-21/viewer12-weread-mirror/artifacts/weread-mirror-portrait.jpg) |
| [kejixiaoliang/read-persona](https://github.com/kejixiaoliang/read-persona) | Codex Skill | 基于微信读书官方 Skill，生成一份精美的 HTML 阅读人格画像报告。 | [记录](docs/promo/runs/2026-05-24/kejixiaoliang-read-persona/summary.md) · [截图](docs/promo/runs/2026-05-24/kejixiaoliang-read-persona/artifacts/read-persona-report.jpg) |
| [cocovs/weread-agent-chat](https://github.com/cocovs/weread-agent-chat) | Web | 一个基于微信读书 API Key 的聊天应用，通过 Pi Agent 分析阅读数据并自然语言汇报。 | [记录](docs/promo/runs/2026-05-25/cocovs-weread-agent-chat/summary.md) · [截图](docs/promo/runs/2026-05-25/cocovs-weread-agent-chat/artifacts/weread-agent-chat-ui.jpg) |
| [zephyrwang6/space-weread](https://github.com/zephyrwang6/space-weread) | Skill | 「space」主题读书 workflow，把书架 / 笔记包装成「太空舱内」式的私人阅读空间。 | [记录](docs/promo/runs/2026-05-25/zephyrwang6-space-weread/summary.md) · [截图](docs/promo/runs/2026-05-25/zephyrwang6-space-weread/artifacts/space-weread-preview-screenshot.jpg) |
| [LearnPrompt/carl-weread](https://github.com/LearnPrompt/carl-weread) | Skill | LearnPrompt 出品的 carl 风格读书顾问 workflow，基于官方 API Key 构建。 | [记录](docs/promo/runs/2026-05-26/LearnPrompt-carl-weread/summary.md) · [产物](docs/promo/runs/2026-05-26/LearnPrompt-carl-weread/artifacts/terminal-help.txt) |
| [stefanxfy/weread-essay-skill](https://github.com/stefanxfy/weread-essay-skill) | Skill | 把书架与笔记输入，生成读书 essay 的 Skill —— 基于官方 weread-skills 包。 | [记录](docs/promo/runs/2026-05-26/stefanxfy-weread-essay-skill/summary.md) · [产物](docs/promo/runs/2026-05-26/stefanxfy-weread-essay-skill/artifacts/skill.md) |

## 命令行与 SDK

封装 Agent Gateway 的 CLI 和 SDK —— 人类能用，其他工具也能调。

| 项目 | 语言 | 介绍 | 体验 |
| ------ | ------ | ------ | ------ |
| [shiquda/weread-cli](https://github.com/shiquda/weread-cli) | Python | 基于官方 API 的 CLI，附带 Agent Skill manifest。同时面向人与 Agent。 | [记录](docs/promo/runs/2026-05-26/shiquda-weread-cli/summary.md) · [产物](docs/promo/runs/2026-05-26/shiquda-weread-cli/artifacts/terminal-help.txt) |
| [nlimpid/weread](https://github.com/nlimpid/weread) | Rust | 面向 LLM 友好的 CLI 和 Rust 库，封装微信读书 Agent Gateway。 | [记录](docs/promo/runs/2026-05-26/nlimpid-weread/summary.md) · [产物](docs/promo/runs/2026-05-26/nlimpid-weread/artifacts/terminal-help.txt) |
| [ipfans/weread-cli](https://github.com/ipfans/weread-cli) | Python | 命令行客户端 + Claude Code 等 Agent 插件：搜书、管理书架、看划线笔记、阅读统计、推荐。 | [记录](docs/promo/runs/2026-05-26/ipfans-weread-cli/summary.md) · [产物](docs/promo/runs/2026-05-26/ipfans-weread-cli/artifacts/go-test.txt) |
| [Ceelog/OpenWeRead](https://github.com/Ceelog/OpenWeRead) | TypeScript | 官方 Skill 之上的 SDK + npm CLI (`openweread`)：搜书、书架、阅读统计、笔记划线、公开点评、推荐、用户概况全覆盖，是目前覆盖最完整的 SDK 选项。 | [记录](docs/promo/runs/2026-05-26/Ceelog-OpenWeRead/summary.md) · [产物](docs/promo/runs/2026-05-26/Ceelog-OpenWeRead/artifacts/terminal-help.txt) |
| [lucis-yg/weread-skill-api](https://github.com/lucis-yg/weread-skill-api) | Node.js / Express | 把官方 weread-skills 封成 17 个 REST 接口的本地 API gateway（书架 / 笔记 / 划线 / 推荐 / 阅读统计）。配套前端见 weread-dashboard。 | [记录](docs/promo/runs/2026-05-26/lucis-yg-weread-skill-api/summary.md) · [产物](docs/promo/runs/2026-05-26/lucis-yg-weread-skill-api/artifacts/server-start.txt) |
| [marcus776957/weread-master](https://github.com/marcus776957/weread-master) | Python | 全功能微信读书 CLI + Agent Skill：书架、笔记/划线、阅读统计、推荐等（`WEREAD_API_KEY` + 官方 Agent Gateway）。 | [记录](docs/promo/runs/2026-05-28/marcus776957-weread-master/summary.md) · [产物](docs/promo/runs/2026-05-28/marcus776957-weread-master/artifacts/gateway-smoke-test-output.json) |

## MCP 服务

把 Agent Gateway 包装成 MCP 工具，给 Cursor、Claude Desktop、ChatGPT 等 MCP 客户端用。

| 项目 | 部署方式 | 介绍 | 体验 |
| ------ | --------- | ------ | ------ |
| [wong2/weread-mcp](https://github.com/wong2/weread-mcp) | 远程 MCP | 基于 Agent Gateway + Bearer 鉴权的远程 MCP 服务。 | [记录](docs/promo/runs/2026-05-25/wong2-weread-mcp/summary.md) · [产物](docs/promo/runs/2026-05-25/wong2-weread-mcp/artifacts/mcp-tools.json) |
| [xJogger/weread-mcp-worker](https://github.com/xJogger/weread-mcp-worker) | Cloudflare Workers | 部署在 Cloudflare Workers 上的单用户 WeRead MCP，面向 ChatGPT。 | [记录](docs/promo/runs/2026-05-26/xJogger-weread-mcp-worker/summary.md) · [产物](docs/promo/runs/2026-05-26/xJogger-weread-mcp-worker/artifacts/mcp-tools.json) |

## 第三方同步

从 Agent Gateway 拉数据，推到别的笔记工具里。

| 项目 | 目标平台 | 介绍 | 体验 |
| ------ | --------- | ------ | ------ |
| [ZhongJiaqi/weread-to-obsidian](https://github.com/ZhongJiaqi/weread-to-obsidian) | Obsidian | 把划线和想法转成 Obsidian 笔记，附 Dataview 友好的 frontmatter 和回跳微信读书的深链。 | [记录](docs/promo/runs/2026-05-26/ZhongJiaqi-weread-to-obsidian/summary.md) · [产物](docs/promo/runs/2026-05-26/ZhongJiaqi-weread-to-obsidian/artifacts/obsidian-notes-demo.md) |
| [uuavv/weread-notion-worker](https://github.com/uuavv/weread-notion-worker) | Notion | 用 `WEREAD_API_KEY` 把书架和划线同步进 Notion 数据库。 | [记录](docs/promo/runs/2026-05-26/uuavv-weread-notion-worker/summary.md) · [产物](docs/promo/runs/2026-05-26/uuavv-weread-notion-worker/artifacts/notion-database-schema.json) |
| [huangcheng/weread-to-flomo](https://github.com/huangcheng/weread-to-flomo) | flomo | 把每条微信读书划线 / 想法作为独立的 flomo memo 导出，走 flomo MCP。 | [记录](docs/promo/runs/2026-05-26/huangcheng-weread-to-flomo/summary.md) · [产物](docs/promo/runs/2026-05-26/huangcheng-weread-to-flomo/artifacts/flomo-card.txt) |
| [gnixner/weread-import](https://github.com/gnixner/weread-import) | Markdown / Obsidian | 默认走官方 Gateway 把划线和想法导出为 Markdown，可写进 Obsidian vault 或任意本地目录（也支持 cookie fallback）。 | [记录](docs/promo/runs/2026-05-26/gnixner-weread-import/summary.md) · [产物](docs/promo/runs/2026-05-26/gnixner-weread-import/artifacts/notes-export-demo.md) |
| [rayford295/rayford-knowledge-atlas](https://github.com/rayford295/rayford-knowledge-atlas) | Web / Obsidian | 个人知识图谱：把微信读书阅读输入与论文、仓库和工作流等产出连接起来（基于 `WEREAD_API_KEY` 刷新）。 | [记录](docs/promo/runs/2026-05-25/rayford295-rayford-knowledge-atlas/summary.md) · [截图](docs/promo/runs/2026-05-25/rayford295-rayford-knowledge-atlas/artifacts/screenshot-home.jpg) |
| [Yant2023/weread-obsidian](https://github.com/Yant2023/weread-obsidian) | Obsidian | 把划线 / 想法导出到 Obsidian 笔记库，复刻官方 Skill 接口的 Python 实现。 | [记录](docs/promo/runs/2026-05-26/Yant2023-weread-obsidian/summary.md) · [产物](docs/promo/runs/2026-05-26/Yant2023-weread-obsidian/artifacts/obsidian-notes-demo.md) |
| [f1603206034/weread-notes](https://github.com/f1603206034/weread-notes) | GitHub + Notion / GitHub Actions | 笔记同步到 GitHub repo + Notion 数据库，支持增量 / 全量 + 定时任务（GitHub Actions cron）。 | [记录](docs/promo/runs/2026-05-26/f1603206034-weread-notes/summary.md) · [产物](docs/promo/runs/2026-05-26/f1603206034-weread-notes/artifacts/notes-export-demo.md) |
| [e5145/weread-link-notion](https://github.com/e5145/weread-link-notion) | Notion | 微信读书 ↔ Notion 链接桥，基于官方 Skill API Key，不依赖 cookie。 | [记录](docs/promo/runs/2026-05-26/e5145-weread-link-notion/summary.md) · [产物](docs/promo/runs/2026-05-26/e5145-weread-link-notion/artifacts/notion-database-schema.json) |
| [KevinChen1994/weread2notion](https://github.com/KevinChen1994/weread2notion) | Notion | 微信读书 → Notion 同步工具，使用 wrk- API Key 鉴权。 | [记录](docs/promo/runs/2026-05-26/KevinChen1994-weread2notion/summary.md) · [产物](docs/promo/runs/2026-05-26/KevinChen1994-weread2notion/artifacts/notion-database-schema.json) |
| [TianLanhe/weread-readdata-for-tencent-doc](https://github.com/TianLanhe/weread-readdata-for-tencent-doc) | 腾讯文档智能表格 | 把书架数据 upsert 到腾讯文档智能表格的 Skill —— 配合腾讯文档 MCP 使用。 | [记录](docs/promo/runs/2026-05-26/TianLanhe-weread-readdata-for-tencent-doc/summary.md) · [产物](docs/promo/runs/2026-05-26/TianLanhe-weread-readdata-for-tencent-doc/artifacts/tencent-docs-reading-stats.csv) |
| [TianLanhe/weread-readtime-for-tencent-doc](https://github.com/TianLanhe/weread-readtime-for-tencent-doc) | 腾讯文档智能表格 | 每日阅读时长 upsert 到腾讯文档智能表格的「阅读时长」工作表。同一作者的姊妹 Skill。 | [记录](docs/promo/runs/2026-05-26/TianLanhe-weread-readtime-for-tencent-doc/summary.md) · [产物](docs/promo/runs/2026-05-26/TianLanhe-weread-readtime-for-tencent-doc/artifacts/tencent-docs-reading-stats.csv) |
| [TianLanhe/weread-readtime-for-lark](https://github.com/TianLanhe/weread-readtime-for-lark) | 飞书多维表格 (Base) | 每日阅读时长 → 飞书多维表格 Base 的「阅读时长」表。配合 lark-cli 使用。 | [记录](docs/promo/runs/2026-05-26/TianLanhe-weread-readtime-for-lark/summary.md) · [产物](docs/promo/runs/2026-05-26/TianLanhe-weread-readtime-for-lark/artifacts/lark-reading-stats.csv) |

## 桌面挂件与可视化

把阅读数据渲染成桌面 widget、壁纸、屏保的可视化项目。

| 项目 | 平台 | 介绍 | 体验 |
| ------ | ------ | ------ | ------ |
| [TinaDu-AI/reading-widget](https://github.com/TinaDu-AI/reading-widget) | macOS (Übersicht) | 微信读书阅读统计桌面挂件 —— 连续天数、今日 / 本月时长、当前在读、年度金句 —— 每 5 分钟刷新。明确定位为「官方 Skill 之上的一层渲染壳」。 | [记录](docs/promo/runs/2026-05-25/TinaDu-AI-reading-widget/summary.md) · [截图](docs/promo/runs/2026-05-25/TinaDu-AI-reading-widget/artifacts/reading-widget-screenshot.jpg) |
| [Kalmaegi/weread-analyzer](https://github.com/Kalmaegi/weread-analyzer) | Web | 基于微信读书官方 API Key 的阅读画像分析项目。 | [记录](docs/promo/runs/2026-05-25/Kalmaegi-weread-analyzer/summary.md) · [截图](docs/promo/runs/2026-05-25/Kalmaegi-weread-analyzer/artifacts/weread-analyzer-report-screenshot.jpg) |
| [AstrophelXD/WeReadAura](https://github.com/AstrophelXD/WeReadAura) | Web | 只读 dashboard，把书架、阅读时长、划线、推荐汇总成 neo-brutalism 风格界面。仅供个人学习使用。 | [记录](docs/promo/runs/2026-05-25/AstrophelXD-WeReadAura/summary.md) · [截图](docs/promo/runs/2026-05-25/AstrophelXD-WeReadAura/artifacts/screenshot-home.jpg) |
| [alexsowake/weread_personality_summery](https://github.com/alexsowake/weread_personality_summery) | Web (EdgeOne) | 用 DeepSeek AI 把你的笔记和划线生成「阅读人格」画像，不存储用户数据。 | [记录](docs/promo/runs/2026-05-26/alexsowake-weread_personality_summery/summary.md) · [产物](docs/promo/runs/2026-05-26/alexsowake-weread_personality_summery/artifacts/index.html) |
| [zzylanmengqingchuan/weread-tools](https://github.com/zzylanmengqingchuan/weread-tools) | Web | 微信读书工具集：书单诚实报告 + 阅读人格画像。 | [记录](docs/promo/runs/2026-05-25/zzylanmengqingchuan-weread-tools/summary.md) · [截图](docs/promo/runs/2026-05-25/zzylanmengqingchuan-weread-tools/artifacts/weread-report-screenshot.jpg) |
| [ZiGmaX809/Weread_ReadTime_Heatmap](https://github.com/ZiGmaX809/Weread_ReadTime_Heatmap) | Web (heatmap) | ★ 把阅读时长画成 GitHub-style 热力图 —— 全年/全月每天读了多久一眼看见。视觉冲击最强的一个。 | [记录](docs/promo/runs/2026-05-25/ZiGmaX809-Weread_ReadTime_Heatmap/summary.md) · [截图](docs/promo/runs/2026-05-25/ZiGmaX809-Weread_ReadTime_Heatmap/artifacts/awesome-weread-heatmap-screenshot.jpg) |
| [SpaceTrave1/weread-deep-insights](https://github.com/SpaceTrave1/weread-deep-insights) | Web | 「深度洞察」式阅读分析 —— 从书架 / 笔记里挖你的阅读 pattern。 | [记录](docs/promo/runs/2026-05-25/SpaceTrave1-weread-deep-insights/summary.md) · [截图](docs/promo/runs/2026-05-25/SpaceTrave1-weread-deep-insights/artifacts/weread_deep_report-screenshot.jpg) |
| [LoloChak/weread-golden-quotes](https://github.com/LoloChak/weread-golden-quotes) | Python, Web | 从微信读书笔记中提取金句，生成宣纸质感网页，每日随机展示并配思考问题。 | [记录](docs/promo/runs/2026-05-26/LoloChak-weread-golden-quotes/summary.md) · [截图](docs/promo/runs/2026-05-26/LoloChak-weread-golden-quotes/artifacts/daily-golden-quotes-fullpage.jpg) |
| [lucis-yg/weread-dashboard](https://github.com/lucis-yg/weread-dashboard) | Vue 3 / Web | 优雅的微信读书数据可视化 dashboard：书架 / 笔记 / 阅读统计。**配合 lucis-yg/weread-skill-api 使用**。 | [记录](docs/promo/runs/2026-05-25/lucis-yg-weread-dashboard/summary.md) · [产物](docs/promo/runs/2026-05-25/lucis-yg-weread-dashboard/artifacts/dashboard-preview.html) |
| [ktKongTong/wereto](https://github.com/ktKongTong/wereto) | Cloudflare Workers | 一键部署到 Cloudflare 的阅读数据页 —— 公开个人阅读数据的「homepage」式展示。`fetch` + `ky` 简洁封装。 | [记录](docs/promo/runs/2026-05-26/ktKongTong-wereto/summary.md) · [截图](docs/promo/runs/2026-05-26/ktKongTong-wereto/artifacts/example-1.png) |

## 体验归档

本仓库会为被 pick 的项目补真实试用子目录：`docs/promo/runs/YYYY-MM-DD/<owner-repo>/summary.md` + `artifacts/`。Summary 使用中文，artifacts 保存截图、HTML、Markdown、JSON metadata 或其他能证明项目真实跑通的产物。

查看当前已完成和待补清单：[项目体验归档](docs/promo/runs/README.md)。

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
