# huangcheng/weread-to-flomo 体验记录（离线 smoke test）

- 项目：https://github.com/huangcheng/weread-to-flomo
- 分类：第三方同步
- 运行环境：macOS（Codex 本地自动化），git
- 运行日期：2026-05-26

## 运行方式

临时工作目录（计划，未执行）：

~~~bash
git clone https://github.com/huangcheng/weread-to-flomo /tmp/huangcheng-weread-to-flomo-run
cd /tmp/huangcheng-weread-to-flomo-run
~~~

当前环境 DNS 解析失败（无法解析 `github.com`），无法获取源码并按仓库 README 实跑。本次改为做一个「flomo 侧发送内容」离线 smoke test：使用已归档的公开阅读统计作为输入，生成一张可直接发送到 flomo 的文本卡片示例，方便后续替换为真实脚本输出。

微信读书 AK（WEREAD_API_KEY）本次未使用、也未输出/落盘。

## 最终产物

已提交产物：

- [git clone 失败日志](./artifacts/git-clone.txt)
- [离线输入（公开阅读统计节选）](./artifacts/sample-input-public-metrics.json)
- [flomo 文本卡片示例](./artifacts/flomo-card.txt)

## 调用的数据

本次离线 smoke test 未调用任何 WeRead 官方 Skill / Agent Gateway API。对应的真实同步链路通常会覆盖：

- `/readdata/detail`
- `/user/notebooks`

## 体验判断

「WeRead → flomo」更适合做“轻量复盘与灵感捕捉”：每天/每周把阅读时长、关键词、Top 笔记书做成一张卡片推送到 flomo，形成可持续的复盘节律。本次示例展示了卡片文本的最小结构与可读性。

## 限制与注意

- 当前环境无法访问 `github.com`，因此未能验证该仓库的真实实现与配置方式。
- 后续网络恢复后建议：真实跑通一次发送（不提交 token），保留终端摘要或 flomo 卡片截图，并确认其使用官方 Agent Gateway 的 `WEREAD_API_KEY`。

## 小红书可用角度

- 「官方 WEREAD_API_KEY 能做哪些同步/自动化？」（Notion/Obsidian/飞书/腾讯文档等）
- 为什么“跑通一次”比“收藏 repo”更重要：最后产物长什么样？
- 阅读数据如何变成可复用的工作流：同步、归档、检索、复盘
