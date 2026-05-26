# LearnPrompt/carl-weread 体验记录

- 项目：https://github.com/LearnPrompt/carl-weread
- 分类：工作流与助手
- 运行环境：Python（离线验证：CLI `--help` + 仓库结构）
- 运行日期：2026-05-26

## 运行方式

临时工作目录：

```bash
cd /private/tmp/awesome-weread-backfill-workflows-cli-1779781183/LearnPrompt-carl-weread
python3 -m carl_weread.cli --help
```

微信读书 AK 只通过已有的 `WEREAD_API_KEY` 环境变量或本机已配置的官方 Skill 传入；本次产物未保存 AK。

## 最终产物

已提交产物：

- [CLI 帮助输出](./artifacts/terminal-help.txt)
- [仓库结构与 commit](./artifacts/repo-structure.txt)
- [官方信号摘录](./artifacts/readme-signals.txt)

说明：本次产物为离线可验证材料，不包含任何阅读数据与密钥。

## 调用的数据

项目文档声明通过 `WEREAD_API_KEY`（`wrk-...`）访问官方 Agent Gateway，并在工程上约束密钥只走环境变量或私有 key 文件路径（测试中也使用脱敏 key）。

本次仅完成 `--help` 与离线结构/信号检查，未发起真实网关请求。

## 体验判断

它更偏“读书行动教练”范式：不只是导出数据，而是把书架/笔记变成可执行的阅读动作（建议/清单/复盘流程），适合作为个人阅读顾问类 workflow 的底座。

## 限制与注意

- 当前环境 DNS/外网受限，无法解析/访问 `i.weread.qq.com`，因此未跑出真实输出。
- 完整体验需：可访问官方网关 + 运行时提供 `WEREAD_API_KEY`（不要写入仓库/日志/截图）。

## 小红书可用角度

- “从读书数据到行动建议”：不止导出，直接给下一步怎么读
- “密钥工程化防泄漏”：测试/日志里也不放真实 key
- “把 workflow 做成可复用模块”：适合做长期阅读复盘
