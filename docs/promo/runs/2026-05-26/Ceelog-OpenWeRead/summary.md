# Ceelog/OpenWeRead 体验记录

- 项目：https://github.com/Ceelog/OpenWeRead
- 分类：命令行与 SDK
- 运行环境：Node.js（离线验证：CLI `--help` + 仓库结构）
- 运行日期：2026-05-26

## 运行方式

临时工作目录：

```bash
cd /private/tmp/awesome-weread-backfill-workflows-cli-1779781183/Ceelog-OpenWeRead
node dist/cli.js --help
```

微信读书 AK 只通过已有的 `WEREAD_API_KEY` 环境变量或本机已配置的官方 Skill 传入；本次产物未保存 AK。

## 最终产物

已提交产物：

- [CLI 帮助输出](./artifacts/terminal-help.txt)
- [仓库结构与 commit](./artifacts/repo-structure.txt)
- [官方信号摘录](./artifacts/readme-signals.txt)
- [历史 clone 记录](./artifacts/git-clone.txt)

说明：本次产物为离线可验证材料（命令输出与结构/信号摘录），不包含任何阅读数据与密钥。

## 调用的数据

项目定位为 TypeScript SDK + npm CLI（`openweread`），文档声明通过官方 Agent Gateway（`POST https://i.weread.qq.com/api/agent/gateway`）并用 `WEREAD_API_KEY`（`wrk-...`）鉴权，覆盖搜书、书架、阅读统计、笔记/划线、点评、推荐、概况等能力。

本次仅完成离线验证（`--help` + 结构/信号），未发起真实网关请求。

## 体验判断

从 CLI/SDK 的“覆盖面”来看，它更像一个通用底座：先用 `openweread` 把微信读书数据拉成结构化 JSON，再把输出接到你的知识库/可视化/同步工具链里。

## 限制与注意

- 当前环境 DNS/外网受限，无法解析/访问 `i.weread.qq.com`，因此没有跑出真实书架/笔记/统计输出。
- 完整体验需：可访问官方网关 + 运行时提供 `WEREAD_API_KEY`（不要写入仓库/日志/截图）。

## 小红书可用角度

- “把微信读书变成可编程数据源”：CLI/SDK 一套打通脚本与 agent
- “覆盖面最全的 openweread”：搜书、书架、统计、笔记、推荐都在一个工具里
- “从 JSON 到知识库/可视化”：输出管道化，接到 Obsidian/Notion/仪表盘
- “密钥只走环境变量”：不写 `.env`，不把 key 打进日志
