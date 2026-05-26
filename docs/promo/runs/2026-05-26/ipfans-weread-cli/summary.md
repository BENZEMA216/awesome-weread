# ipfans/weread-cli 体验记录

- 项目：https://github.com/ipfans/weread-cli
- 分类：命令行与 SDK
- 运行环境：Go（离线验证：单测 + 仓库结构）
- 运行日期：2026-05-26

## 运行方式

临时工作目录：

```bash
cd /private/tmp/awesome-weread-backfill-workflows-cli-1779781183/ipfans-weread-cli
go test ./internal/api -run TestResolveAPIKey -count=1
go test ./... -count=1
```

微信读书 AK 只通过已有的 `WEREAD_API_KEY` 环境变量或本机已配置的官方 Skill 传入；本次产物未保存 AK。

## 最终产物

已提交产物：

- [Go 单测输出（内部模块）](./artifacts/go-test.txt)
- [Go 单测输出（全量尝试）](./artifacts/go-test-all.txt)
- [仓库结构与 commit](./artifacts/repo-structure.txt)
- [官方信号摘录](./artifacts/readme-signals.txt)

说明：本次产物为离线可验证材料（单测输出与结构/信号摘录），不包含任何阅读数据与密钥。

## 调用的数据

项目文档与代码声明通过 `WEREAD_API_KEY`（`wrk-...`）调用官方 Agent Gateway，并提供 CLI + Claude Code 插件（内置 skills）。

本次重点验证：API Key 读取/解析与优先级相关逻辑（通过单测覆盖）。未发起真实网关请求。

## 体验判断

它的产品形态是“双通道”：人类用 CLI 查/导出，agent 用插件直接调用同一套能力；单测覆盖了 key 解析这类高风险环节，适合放进长期自动化链路里。

## 限制与注意

- 当前环境 DNS/外网受限，无法解析/访问 `i.weread.qq.com`，因此未跑出真实书架/笔记/统计输出。
- 完整体验需：可访问官方网关 + 运行时提供 `WEREAD_API_KEY`（不要写入仓库/日志/截图）。

## 小红书可用角度

- “人类 CLI + agent 插件二合一”：同一套能力两种入口
- “单测把密钥读取这块钉死”：自动化链路更安心
- “把读书数据变成可调用工具”：适配 Claude Code / Cursor 等工作流
