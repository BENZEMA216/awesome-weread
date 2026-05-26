# nlimpid/weread 体验记录

- 项目：https://github.com/nlimpid/weread
- 分类：命令行与 SDK
- 运行环境：Node.js（离线验证：CLI `--help` + 仓库结构）
- 运行日期：2026-05-26

## 运行方式

临时工作目录：

```bash
cd /private/tmp/awesome-weread-backfill-workflows-cli-1779781183/nlimpid-weread
node dist/cli.js --help
```

微信读书 AK 只通过已有的 `WEREAD_API_KEY` 环境变量或本机已配置的官方 Skill 传入；本次产物未保存 AK。

## 最终产物

已提交产物：

- [CLI 帮助输出](./artifacts/terminal-help.txt)
- [仓库结构与 commit](./artifacts/repo-structure.txt)
- [官方信号摘录](./artifacts/readme-signals.txt)

说明：本次产物为离线可验证材料，不包含任何阅读数据与密钥。

## 调用的数据

项目声明所有请求走官方统一网关：`POST https://i.weread.qq.com/api/agent/gateway`，鉴权使用 `WEREAD_API_KEY`（`wrk-...`）。

本次仅完成 `--help` 与离线结构/信号检查，未发起真实网关请求。

## 体验判断

它更偏“二次开发底座”：把官方能力做成可编程 SDK，再配 CLI 作为最小可用入口，后续做同步/导出/可视化项目时复用成本更低。

## 限制与注意

- 当前环境 DNS/外网受限，无法解析/访问 `i.weread.qq.com`，因此未跑出真实输出。
- 完整体验需：可访问官方网关 + 运行时提供 `WEREAD_API_KEY`（不要写入仓库/日志/截图）。

## 小红书可用角度

- “官方网关的 SDK + CLI”：不再手撸每个接口
- “先看 `--help` 就知道能力边界”：命令结构=产品结构
- “输出可管道化”：JSON 一路喂进知识库/可视化/同步
