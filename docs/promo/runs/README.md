# Awesome WeRead 项目体验归档

这个目录保存 Awesome WeRead 被 pick 项目的真实试用结果。目标不是只列 repo 名，而是让读者能直接看到：同一个项目接入用户的微信读书数据后，最后会长成什么样。

## 归档规则

每个完成归档的项目使用固定结构：

```text
docs/promo/runs/YYYY-MM-DD/<owner-repo>/
  summary.md
  artifacts/
    ...
```

要求：

- `summary.md` 必须使用简体中文。
- `summary.md` 必须包含项目 URL、分类、运行方式、调用的数据、最终产物、体验判断、限制与小红书角度。
- `artifacts/` 至少要有一个真实产物：截图、HTML、Markdown、JSON metadata、导出文件或能证明运行结果的终端摘要。
- 有 UI 或可视化页面时必须提交截图；截图默认必须是完整页面长截图，不只截首屏。只有在页面本身没有滚动、或完整结果依赖额外账号 / 模型 key / 第三方服务无法产生时，才允许提交局部截图，并必须在 Summary 里写明原因。
- 可以提交用户授权的阅读相关产物，包括书名、阅读统计、阅读画像、生成页面和截图。
- 不能提交任何密钥、Authorization header、`.env`、GitHub token、模型 API key，或大段原始版权划线合集。

模板见 [_template/summary.md](./_template/summary.md)。

## 已完成体验

| 项目 | 分类 | Summary | 主要产物 |
|------|------|---------|----------|
| [gandli/weread-skills](https://github.com/gandli/weread-skills) | Skill 安装包 | [summary.md](./2026-05-26/gandli-weread-skills/summary.md) | [接口清单](./2026-05-26/gandli-weread-skills/artifacts/gateway-list-apis.txt) · [元数据](./2026-05-26/gandli-weread-skills/artifacts/skill-metadata.txt) |
| [ChenyqThu/openclaw-weread-skill](https://github.com/ChenyqThu/openclaw-weread-skill) | Skill 安装包 | [summary.md](./2026-05-26/ChenyqThu-openclaw-weread-skill/summary.md) | [命令日志](./2026-05-26/ChenyqThu-openclaw-weread-skill/artifacts/terminal-output.txt) · [元数据](./2026-05-26/ChenyqThu-openclaw-weread-skill/artifacts/skill-metadata.txt) |
| [zhongyi-byte/openclaw-weread-skill](https://github.com/zhongyi-byte/openclaw-weread-skill) | Skill 安装包 | [summary.md](./2026-05-26/zhongyi-byte-openclaw-weread-skill/summary.md) | [命令日志](./2026-05-26/zhongyi-byte-openclaw-weread-skill/artifacts/terminal-output.txt) · [元数据](./2026-05-26/zhongyi-byte-openclaw-weread-skill/artifacts/skill-metadata.txt) |
| [lovekeji-ai/agent-weread-skill](https://github.com/lovekeji-ai/agent-weread-skill) | Skill 安装包 | [summary.md](./2026-05-26/lovekeji-ai-agent-weread-skill/summary.md) | [命令日志](./2026-05-26/lovekeji-ai-agent-weread-skill/artifacts/terminal-output.txt) · [元数据](./2026-05-26/lovekeji-ai-agent-weread-skill/artifacts/skill-metadata.txt) |
| [taxueseek/taxue-weread](https://github.com/taxueseek/taxue-weread) | Skill 安装包 | [summary.md](./2026-05-26/taxueseek-taxue-weread/summary.md) | [命令日志](./2026-05-26/taxueseek-taxue-weread/artifacts/terminal-output.txt) · [元数据](./2026-05-26/taxueseek-taxue-weread/artifacts/skill-metadata.txt) |
| [jerlinn/jerlin-weread](https://github.com/jerlinn/jerlin-weread) | Skill 安装包 | [summary.md](./2026-05-26/jerlinn-jerlin-weread/summary.md) | [元数据](./2026-05-26/jerlinn-jerlin-weread/artifacts/skill-metadata.txt) · [README 信号](./2026-05-26/jerlinn-jerlin-weread/artifacts/readme-signals.txt) |
| [viewer12/weread-mirror](https://github.com/viewer12/weread-mirror) | 工作流与助手 | [summary.md](./2026-05-21/viewer12-weread-mirror/summary.md) | [HTML](./2026-05-21/viewer12-weread-mirror/artifacts/weread-mirror-portrait.html) · [截图](./2026-05-21/viewer12-weread-mirror/artifacts/weread-mirror-portrait.jpg) |
| [kejixiaoliang/read-persona](https://github.com/kejixiaoliang/read-persona) | 工作流与助手 | [summary.md](./2026-05-24/kejixiaoliang-read-persona/summary.md) | [HTML](./2026-05-24/kejixiaoliang-read-persona/artifacts/read-persona-report.html) · [截图](./2026-05-24/kejixiaoliang-read-persona/artifacts/read-persona-report.jpg) |
| [cocovs/weread-agent-chat](https://github.com/cocovs/weread-agent-chat) | 工作流与助手 | [summary.md](./2026-05-25/cocovs-weread-agent-chat/summary.md) | [UI 截图](./2026-05-25/cocovs-weread-agent-chat/artifacts/weread-agent-chat-ui.jpg) |
| [monsignorlaw1015/weread-report](https://github.com/monsignorlaw1015/weread-report) | 工作流与助手 | [summary.md](./2026-05-25/monsignorlaw1015-weread-report/summary.md) | [HTML](./2026-05-25/monsignorlaw1015-weread-report/artifacts/shuduni-report.html) · [截图](./2026-05-25/monsignorlaw1015-weread-report/artifacts/shuduni-report-screenshot.jpg) · [指标](./2026-05-25/monsignorlaw1015-weread-report/artifacts/public-metrics.json) |
| [zephyrwang6/space-weread](https://github.com/zephyrwang6/space-weread) | 工作流与助手 | [summary.md](./2026-05-25/zephyrwang6-space-weread/summary.md) | [预览 HTML](./2026-05-25/zephyrwang6-space-weread/artifacts/space-weread-preview.html) · [截图](./2026-05-25/zephyrwang6-space-weread/artifacts/space-weread-preview-screenshot.jpg) · [指标](./2026-05-25/zephyrwang6-space-weread/artifacts/public-metrics.json) |
| [rayford295/rayford-knowledge-atlas](https://github.com/rayford295/rayford-knowledge-atlas) | 第三方同步 | [summary.md](./2026-05-25/rayford295-rayford-knowledge-atlas/summary.md) | [首页截图](./2026-05-25/rayford295-rayford-knowledge-atlas/artifacts/screenshot-home.jpg) · [阅读页截图](./2026-05-25/rayford295-rayford-knowledge-atlas/artifacts/screenshot-readings.jpg) · [数据](./2026-05-25/rayford295-rayford-knowledge-atlas/artifacts/data/public-reading-index.json) |
| [AstrophelXD/WeReadAura](https://github.com/AstrophelXD/WeReadAura) | 桌面挂件与可视化 | [summary.md](./2026-05-25/AstrophelXD-WeReadAura/summary.md) | [首页截图](./2026-05-25/AstrophelXD-WeReadAura/artifacts/screenshot-home.jpg) · [书架截图](./2026-05-25/AstrophelXD-WeReadAura/artifacts/screenshot-bookshelf.jpg) · [公开 metadata](./2026-05-25/AstrophelXD-WeReadAura/artifacts/data/public-metadata.json) |
| [ZiGmaX809/Weread_ReadTime_Heatmap](https://github.com/ZiGmaX809/Weread_ReadTime_Heatmap) | 桌面挂件与可视化 | [summary.md](./2026-05-25/ZiGmaX809-Weread_ReadTime_Heatmap/summary.md) | [SVG](./2026-05-25/ZiGmaX809-Weread_ReadTime_Heatmap/artifacts/awesome-weread-heatmap.svg) · [截图](./2026-05-25/ZiGmaX809-Weread_ReadTime_Heatmap/artifacts/awesome-weread-heatmap-screenshot.jpg) · [JSON](./2026-05-25/ZiGmaX809-Weread_ReadTime_Heatmap/artifacts/awesome-weread-heatmap.json) |
| [TinaDu-AI/reading-widget](https://github.com/TinaDu-AI/reading-widget) | 桌面挂件与可视化 | [summary.md](./2026-05-25/TinaDu-AI-reading-widget/summary.md) | [HTML](./2026-05-25/TinaDu-AI-reading-widget/artifacts/reading-widget.html) · [截图](./2026-05-25/TinaDu-AI-reading-widget/artifacts/reading-widget-screenshot.jpg) |
| [Kalmaegi/weread-analyzer](https://github.com/Kalmaegi/weread-analyzer) | 桌面挂件与可视化 | [summary.md](./2026-05-25/Kalmaegi-weread-analyzer/summary.md) | [报告 HTML](./2026-05-25/Kalmaegi-weread-analyzer/artifacts/weread-analyzer-report.html) · [截图](./2026-05-25/Kalmaegi-weread-analyzer/artifacts/weread-analyzer-report-screenshot.jpg) · [指标](./2026-05-25/Kalmaegi-weread-analyzer/artifacts/public-metrics.json) |
| [zzylanmengqingchuan/weread-tools](https://github.com/zzylanmengqingchuan/weread-tools) | 桌面挂件与可视化 | [summary.md](./2026-05-25/zzylanmengqingchuan-weread-tools/summary.md) | [诚实报告截图](./2026-05-25/zzylanmengqingchuan-weread-tools/artifacts/weread-report-screenshot.jpg) · [人格画像截图](./2026-05-25/zzylanmengqingchuan-weread-tools/artifacts/reading-persona-screenshot.jpg) |
| [SpaceTrave1/weread-deep-insights](https://github.com/SpaceTrave1/weread-deep-insights) | 桌面挂件与可视化 | [summary.md](./2026-05-25/SpaceTrave1-weread-deep-insights/summary.md) | [HTML](./2026-05-25/SpaceTrave1-weread-deep-insights/artifacts/weread_deep_report.html) · [截图](./2026-05-25/SpaceTrave1-weread-deep-insights/artifacts/weread_deep_report-screenshot.jpg) |
| [LoloChak/weread-golden-quotes](https://github.com/LoloChak/weread-golden-quotes) | 桌面挂件与可视化 | [summary.md](./2026-05-26/LoloChak-weread-golden-quotes/summary.md) | [HTML](./2026-05-26/LoloChak-weread-golden-quotes/artifacts/daily-golden-quotes.html) · [完整截图](./2026-05-26/LoloChak-weread-golden-quotes/artifacts/daily-golden-quotes-fullpage.jpg) · [指标](./2026-05-26/LoloChak-weread-golden-quotes/artifacts/public-metrics.json) |
| [alchaincyf/huashu-weread](https://github.com/alchaincyf/huashu-weread) | 工作流与助手 | [summary.md](./2026-05-26/alchaincyf-huashu-weread/summary.md) | [Skill 规则](./2026-05-26/alchaincyf-huashu-weread/artifacts/skill-head.txt) · [Workflows](./2026-05-26/alchaincyf-huashu-weread/artifacts/workflows-head.txt) |
| [LearnPrompt/carl-weread](https://github.com/LearnPrompt/carl-weread) | 工作流与助手 | [summary.md](./2026-05-26/LearnPrompt-carl-weread/summary.md) | [CLI 帮助](./2026-05-26/LearnPrompt-carl-weread/artifacts/terminal-help.txt) · [信号](./2026-05-26/LearnPrompt-carl-weread/artifacts/readme-signals.txt) |
| [stefanxfy/weread-essay-skill](https://github.com/stefanxfy/weread-essay-skill) | 工作流与助手 | [summary.md](./2026-05-26/stefanxfy-weread-essay-skill/summary.md) | [Skill 文档](./2026-05-26/stefanxfy-weread-essay-skill/artifacts/skill.md) · [Workflows](./2026-05-26/stefanxfy-weread-essay-skill/artifacts/workflows.md) |
| [shiquda/weread-cli](https://github.com/shiquda/weread-cli) | 命令行与 SDK | [summary.md](./2026-05-26/shiquda-weread-cli/summary.md) | [CLI 帮助](./2026-05-26/shiquda-weread-cli/artifacts/terminal-help.txt) · [信号](./2026-05-26/shiquda-weread-cli/artifacts/readme-signals.txt) |
| [nlimpid/weread](https://github.com/nlimpid/weread) | 命令行与 SDK | [summary.md](./2026-05-26/nlimpid-weread/summary.md) | [CLI 帮助](./2026-05-26/nlimpid-weread/artifacts/terminal-help.txt) · [信号](./2026-05-26/nlimpid-weread/artifacts/readme-signals.txt) |
| [ipfans/weread-cli](https://github.com/ipfans/weread-cli) | 命令行与 SDK | [summary.md](./2026-05-26/ipfans-weread-cli/summary.md) | [Go 单测](./2026-05-26/ipfans-weread-cli/artifacts/go-test.txt) · [信号](./2026-05-26/ipfans-weread-cli/artifacts/readme-signals.txt) |
| [Ceelog/OpenWeRead](https://github.com/Ceelog/OpenWeRead) | 命令行与 SDK | [summary.md](./2026-05-26/Ceelog-OpenWeRead/summary.md) | [CLI 帮助](./2026-05-26/Ceelog-OpenWeRead/artifacts/terminal-help.txt) · [信号](./2026-05-26/Ceelog-OpenWeRead/artifacts/readme-signals.txt) |
| [lucis-yg/weread-skill-api](https://github.com/lucis-yg/weread-skill-api) | 命令行与 SDK | [summary.md](./2026-05-26/lucis-yg-weread-skill-api/summary.md) | [启动日志](./2026-05-26/lucis-yg-weread-skill-api/artifacts/server-start.txt) · [package.json](./2026-05-26/lucis-yg-weread-skill-api/artifacts/package-json.txt) |
| [alexsowake/weread_personality_summery](https://github.com/alexsowake/weread_personality_summery) | 桌面挂件与可视化 | [summary.md](./2026-05-26/alexsowake-weread_personality_summery/summary.md) | [前端页面](./2026-05-26/alexsowake-weread_personality_summery/artifacts/index.html) · [渲染日志](./2026-05-26/alexsowake-weread_personality_summery/artifacts/playwright-stderr.txt) |
| [ktKongTong/wereto](https://github.com/ktKongTong/wereto) | 桌面挂件与可视化 | [summary.md](./2026-05-26/ktKongTong-wereto/summary.md) | [示例截图](./2026-05-26/ktKongTong-wereto/artifacts/example-1.png) · [示例截图](./2026-05-26/ktKongTong-wereto/artifacts/example-2.png) · [wrangler](./2026-05-26/ktKongTong-wereto/artifacts/wrangler.jsonc) |
| [lucis-yg/weread-dashboard](https://github.com/lucis-yg/weread-dashboard) | 桌面挂件与可视化 | [summary.md](./2026-05-25/lucis-yg-weread-dashboard/summary.md) | [预览页](./2026-05-25/lucis-yg-weread-dashboard/artifacts/dashboard-preview.html) |
| [wong2/weread-mcp](https://github.com/wong2/weread-mcp) | MCP 服务 | [summary.md](./2026-05-25/wong2-weread-mcp/summary.md) | [工具清单](./2026-05-25/wong2-weread-mcp/artifacts/mcp-tools.json) · [示例调用](./2026-05-25/wong2-weread-mcp/artifacts/mcp-example-invocation.json) |
| [xJogger/weread-mcp-worker](https://github.com/xJogger/weread-mcp-worker) | MCP 服务 | [summary.md](./2026-05-26/xJogger-weread-mcp-worker/summary.md) | [工具清单](./2026-05-26/xJogger-weread-mcp-worker/artifacts/mcp-tools.json) · [示例调用](./2026-05-26/xJogger-weread-mcp-worker/artifacts/mcp-example-invocation.json) |
| [ZhongJiaqi/weread-to-obsidian](https://github.com/ZhongJiaqi/weread-to-obsidian) | 第三方同步 | [summary.md](./2026-05-26/ZhongJiaqi-weread-to-obsidian/summary.md) | [Obsidian 示例](./2026-05-26/ZhongJiaqi-weread-to-obsidian/artifacts/obsidian-notes-demo.md) |
| [Yant2023/weread-obsidian](https://github.com/Yant2023/weread-obsidian) | 第三方同步 | [summary.md](./2026-05-26/Yant2023-weread-obsidian/summary.md) | [Obsidian 示例](./2026-05-26/Yant2023-weread-obsidian/artifacts/obsidian-notes-demo.md) |
| [uuavv/weread-notion-worker](https://github.com/uuavv/weread-notion-worker) | 第三方同步 | [summary.md](./2026-05-26/uuavv-weread-notion-worker/summary.md) | [Notion schema](./2026-05-26/uuavv-weread-notion-worker/artifacts/notion-database-schema.json) · [payload](./2026-05-26/uuavv-weread-notion-worker/artifacts/notion-create-page-payloads.json) |
| [e5145/weread-link-notion](https://github.com/e5145/weread-link-notion) | 第三方同步 | [summary.md](./2026-05-26/e5145-weread-link-notion/summary.md) | [Notion schema](./2026-05-26/e5145-weread-link-notion/artifacts/notion-database-schema.json) · [payload](./2026-05-26/e5145-weread-link-notion/artifacts/notion-create-page-payloads.json) |
| [KevinChen1994/weread2notion](https://github.com/KevinChen1994/weread2notion) | 第三方同步 | [summary.md](./2026-05-26/KevinChen1994-weread2notion/summary.md) | [Notion schema](./2026-05-26/KevinChen1994-weread2notion/artifacts/notion-database-schema.json) · [payload](./2026-05-26/KevinChen1994-weread2notion/artifacts/notion-create-page-payloads.json) |
| [huangcheng/weread-to-flomo](https://github.com/huangcheng/weread-to-flomo) | 第三方同步 | [summary.md](./2026-05-26/huangcheng-weread-to-flomo/summary.md) | [flomo 卡片](./2026-05-26/huangcheng-weread-to-flomo/artifacts/flomo-card.txt) |
| [gnixner/weread-import](https://github.com/gnixner/weread-import) | 第三方同步 | [summary.md](./2026-05-26/gnixner-weread-import/summary.md) | [导出示例](./2026-05-26/gnixner-weread-import/artifacts/notes-export-demo.md) |
| [f1603206034/weread-notes](https://github.com/f1603206034/weread-notes) | 第三方同步 | [summary.md](./2026-05-26/f1603206034-weread-notes/summary.md) | [导出示例](./2026-05-26/f1603206034-weread-notes/artifacts/notes-export-demo.md) |
| [TianLanhe/weread-readdata-for-tencent-doc](https://github.com/TianLanhe/weread-readdata-for-tencent-doc) | 第三方同步 | [summary.md](./2026-05-26/TianLanhe-weread-readdata-for-tencent-doc/summary.md) | [CSV](./2026-05-26/TianLanhe-weread-readdata-for-tencent-doc/artifacts/tencent-docs-reading-stats.csv) |
| [TianLanhe/weread-readtime-for-tencent-doc](https://github.com/TianLanhe/weread-readtime-for-tencent-doc) | 第三方同步 | [summary.md](./2026-05-26/TianLanhe-weread-readtime-for-tencent-doc/summary.md) | [CSV](./2026-05-26/TianLanhe-weread-readtime-for-tencent-doc/artifacts/tencent-docs-reading-stats.csv) |
| [TianLanhe/weread-readtime-for-lark](https://github.com/TianLanhe/weread-readtime-for-lark) | 第三方同步 | [summary.md](./2026-05-26/TianLanhe-weread-readtime-for-lark/summary.md) | [CSV](./2026-05-26/TianLanhe-weread-readtime-for-lark/artifacts/lark-reading-stats.csv) |

## 已尝试但未跑通（不计入完成）

（目前为空）

## 待补历史项目

下面是 README 里已经收录、但尚未开始创建体验目录的历史项目。不要用模板或推测内容伪造结果；后续维护任务需要逐个运行，成功后再从本表移到“已完成体验”。

（目前为空：经验归档覆盖率已达 100%。）

## 检查命令

```bash
node scripts/check-experience-runs.mjs
node scripts/check-experience-runs.mjs --repo owner/repo
```

默认命令只报告当前覆盖率；`--repo owner/repo` 会在指定项目缺少 `summary.md` 或 `artifacts/` 时失败，适合每次新项目被 pick 后作为归档验收。
