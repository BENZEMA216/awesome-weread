# TianLanhe/weread-readtime-for-tencent-doc 体验记录（离线 smoke test）

- 项目：https://github.com/TianLanhe/weread-readtime-for-tencent-doc
- 分类：第三方同步
- 运行环境：macOS（Codex 本地自动化），git
- 运行日期：2026-05-26

## 运行方式

临时工作目录（计划，未执行）：

~~~bash
git clone https://github.com/TianLanhe/weread-readtime-for-tencent-doc /tmp/TianLanhe-weread-readtime-for-tencent-doc-run
cd /tmp/TianLanhe-weread-readtime-for-tencent-doc-run
~~~

当前环境 DNS 解析失败（无法解析 `github.com`），无法获取源码并按仓库 README 实跑。本次改为做一个「腾讯文档表格导入」离线 smoke test：使用已归档的公开阅读统计作为输入，生成可直接导入表格的 CSV 示例，便于后续替换为真实同步脚本输出。

微信读书 AK（WEREAD_API_KEY）本次未使用、也未输出/落盘。

## 最终产物

已提交产物：

- [git clone 失败日志](./artifacts/git-clone.txt)
- [离线输入（公开阅读统计节选）](./artifacts/sample-input-public-metrics.json)
- [腾讯文档表格 CSV 示例](./artifacts/tencent-docs-reading-stats.csv)

## 调用的数据

本次离线 smoke test 未调用任何 WeRead 官方 Skill / Agent Gateway API。对应真实同步一般会覆盖：

- `/readdata/detail`

## 体验判断

“读书时长 → 腾讯文档”适合做周期复盘与分享：把年度阅读时长/天数落到表格后，可做趋势图与对比。本次示例先固化 CSV 结构，后续接入真实脚本即可自动刷新数据。

## 限制与注意

- 当前环境无法访问 `github.com`，因此未能验证该仓库的真实实现与配置方式。
- 后续网络恢复后建议：真实跑通一次同步（不提交第三方 token），保留终端摘要或导入后的表格截图。

## 小红书可用角度

- 「官方 WEREAD_API_KEY 能做哪些同步/自动化？」（Notion/Obsidian/飞书/腾讯文档等）
- 为什么“跑通一次”比“收藏 repo”更重要：最后产物长什么样？
- 阅读数据如何变成可复用的工作流：同步、归档、检索、复盘
