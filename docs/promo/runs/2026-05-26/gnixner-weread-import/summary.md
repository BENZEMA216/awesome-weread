# gnixner/weread-import 体验记录（离线 smoke test）

- 项目：https://github.com/gnixner/weread-import
- 分类：第三方同步
- 运行环境：macOS（Codex 本地自动化），git
- 运行日期：2026-05-26

## 运行方式

临时工作目录（计划，未执行）：

~~~bash
git clone https://github.com/gnixner/weread-import /tmp/gnixner-weread-import-run
cd /tmp/gnixner-weread-import-run
~~~

当前环境 DNS 解析失败（无法解析 `github.com`），无法获取源码并按仓库 README 实跑。本次改为做一个「导出落地格式」离线 smoke test：使用已归档的公开阅读统计作为输入，生成一个可公开的 Markdown 导出样例，便于后续对照真实导出结果。

微信读书 AK（WEREAD_API_KEY）本次未使用、也未输出/落盘。

## 最终产物

已提交产物：

- [git clone 失败日志](./artifacts/git-clone.txt)
- [离线输入（公开阅读统计节选）](./artifacts/sample-input-public-metrics.json)
- [Markdown 导出示例](./artifacts/notes-export-demo.md)

## 调用的数据

本次离线 smoke test 未调用任何 WeRead 官方 Skill / Agent Gateway API。对应真实导出一般会覆盖：

- `/user/notebooks`
- `/review/list/mine`
- `/book/info`

## 体验判断

这类“import/export”项目的关键在于：导出格式是否可读、可检索、可增量更新。本次示例先把一个最小可用的导出结果形态落地（聚合指标 + Top 笔记书），作为后续真实跑通时的对照基线。

## 限制与注意

- 当前运行环境无法解析外网域名（包括 github.com），导致无法 clone/安装/运行。
- 待网络恢复后：重新 clone，按项目 README 的 quickstart 跑通一次最小可验证链路，并补齐至少一个可分享产物（终端摘要/导出文件/页面截图）。

## 小红书可用角度

- 「官方 WEREAD_API_KEY 能做哪些同步/自动化？」（Notion/Obsidian/飞书/腾讯文档等）
- 为什么“跑通一次”比“收藏 repo”更重要：最后产物长什么样？
- 阅读数据如何变成可复用的工作流：同步、归档、检索、复盘
