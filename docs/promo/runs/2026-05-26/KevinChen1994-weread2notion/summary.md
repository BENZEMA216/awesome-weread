# KevinChen1994/weread2notion 体验记录（离线 smoke test）

- 项目：https://github.com/KevinChen1994/weread2notion
- 分类：第三方同步
- 运行环境：macOS（Codex 本地自动化），git
- 运行日期：2026-05-26

## 运行方式

临时工作目录（计划，未执行）：

~~~bash
git clone https://github.com/KevinChen1994/weread2notion /tmp/KevinChen1994-weread2notion-run
cd /tmp/KevinChen1994-weread2notion-run
~~~

当前环境 DNS 解析失败（无法解析 `github.com`），无法获取源码并按仓库 README 实跑。本次改为做一个「Notion 侧落地格式」离线 smoke test：使用已归档的公开阅读统计作为输入，生成 Notion 数据库 schema 与 create-page payload 示例，便于后续真实跑通时快速对齐字段与结果。

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

「WeRead → Notion」的体验好坏主要取决于：字段是否够用、是否好检索、同步是否能增量与去重。本次示例先把“最小可用的 Notion 数据模型”固定下来，后续只需把真实数据流写入同样的 payload 结构即可。

## 限制与注意

- 当前环境无法访问 `github.com`，因此未能验证该仓库的真实实现与配置方式。
- 后续网络恢复后建议：按 README 跑通一次同步并补齐 Notion 页面截图，确认其调用的是官方 Agent Gateway 而非 cookie 抓取。

## 小红书可用角度

- Notion 同步成“可复盘的阅读数据库”：字段与页面结构示例
- 用官方 `WEREAD_API_KEY` 做同步：从接口到落库的最短路径
- 同步后的玩法：筛选、回顾、写作素材与行动清单
