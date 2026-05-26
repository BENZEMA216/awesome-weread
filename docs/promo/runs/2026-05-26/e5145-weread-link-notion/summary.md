# e5145/weread-link-notion 体验记录（离线 smoke test）

- 项目：https://github.com/e5145/weread-link-notion
- 分类：第三方同步
- 运行环境：macOS（Codex 本地自动化），git
- 运行日期：2026-05-26

## 运行方式

临时工作目录（计划，未执行）：

~~~bash
git clone https://github.com/e5145/weread-link-notion /tmp/e5145-weread-link-notion-run
cd /tmp/e5145-weread-link-notion-run
~~~

当前环境 DNS 解析失败（无法解析 `github.com`），无法获取源码并按仓库 README 实跑。本次改为做一个「Notion 侧落地格式」离线 smoke test：使用已归档的公开阅读统计作为输入，生成 Notion 数据库 schema 与 create-page payload 示例，作为后续真实跑通时的对照基线。

微信读书 AK（WEREAD_API_KEY）本次未使用、也未输出/落盘。

## 最终产物

已提交产物：

- [git clone 失败日志](./artifacts/git-clone.txt)
- [离线输入（公开阅读统计节选）](./artifacts/sample-input-public-metrics.json)
- [Notion 数据库字段设计示例](./artifacts/notion-database-schema.json)
- [Notion create-page payload 示例](./artifacts/notion-create-page-payloads.json)

## 调用的数据

本次离线 smoke test 未调用任何 WeRead 官方 Skill / Agent Gateway API。对应的真实同步链路通常会覆盖：

- `/user/notebooks`
- `/review/list/mine`
- `/book/info`

## 体验判断

「WeRead → Notion」方向的关键点通常是：字段映射（书/作者/标签/时间）、去重策略（按 reviewId 或 bookmarkId）、增量同步游标（synckey/分页），以及如何在 Notion 里形成可检索的长期资产。本次示例先把“落库形态”固定下来，便于后续接入真实脚本。

## 限制与注意

- 当前环境无法访问 `github.com`，因此未能验证该仓库的真实实现与配置方式。
- 后续网络恢复后建议：按 README 真实同步 1 本书的笔记，补齐 Notion 页面截图/终端摘要，并确认其是否使用官方 Agent Gateway（`Authorization: Bearer wrk-...`）。

## 小红书可用角度

- Notion 里存阅读笔记：字段映射怎么设计才好用
- 同步工具的关键不是“能导出”，而是“能增量、能去重、能复盘”
- 用官方网关接口做同步：更稳定、更可维护
