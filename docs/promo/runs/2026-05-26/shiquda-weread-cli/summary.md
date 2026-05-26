# shiquda/weread-cli 体验记录

- 项目：https://github.com/shiquda/weread-cli
- 分类：命令行与 SDK
- 运行环境：Node.js（离线验证：CLI `--help` + 仓库结构）
- 运行日期：2026-05-26

## 运行方式

临时工作目录：

```bash
cd /private/tmp/awesome-weread-backfill-workflows-cli-1779781183/shiquda-weread-cli
node dist/cli.js --help
```

微信读书 AK 只通过已有的 `WEREAD_API_KEY` 环境变量或本机已配置的官方 Skill 传入；本次产物未保存 AK。

## 最终产物

已提交产物：

- [CLI 帮助输出](./artifacts/terminal-help.txt)
- [仓库结构与 commit](./artifacts/repo-structure.txt)
- [官方信号摘录](./artifacts/readme-signals.txt)
- [历史 clone 记录](./artifacts/git-clone.txt)

说明：本次产物为离线可验证材料，不包含任何阅读数据与密钥。

## 调用的数据

项目文档声明默认 base_url 为 `https://i.weread.qq.com/api/agent/gateway`，鉴权从 `WEREAD_API_KEY` 或本地配置读取（`wrk-...`）。

本次仅完成 `--help` 与离线结构/信号检查，未发起真实网关请求。

## 体验判断

它更像“给人和 agent 共用的一把 CLI 扳手”：把官方 Gateway 的能力组织成明确的子命令与 JSON 输出，让你更容易把它接进脚本、定时任务或 agent 工具链。

## 限制与注意

- 当前环境 DNS/外网受限，无法解析/访问 `i.weread.qq.com`，因此未跑出真实书架/笔记/统计输出。
- 完整体验需：可访问官方网关 + 运行时提供 `WEREAD_API_KEY`（不要写入仓库/日志/截图）。

## 小红书可用角度

- “一把 CLI 打通人和 agent”：同一套命令喂给脚本/终端/IDE
- “官方网关统一入口”：所有能力都走 `api/agent/gateway`
- “JSON 输出更适合二次加工”：管道进 Obsidian/Notion/可视化
- “密钥只走环境变量”：避免把 key 写进配置或截图
