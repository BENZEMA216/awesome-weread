# uuavv/weread-notion-worker 体验记录（离线 smoke test）

- 项目：https://github.com/uuavv/weread-notion-worker
- 分类：第三方同步
- 运行环境：macOS（Codex 本地自动化），git
- 运行日期：2026-05-26

## 运行方式

临时工作目录（计划，未执行）：

~~~bash
git clone https://github.com/uuavv/weread-notion-worker /tmp/uuavv-weread-notion-worker-run
cd /tmp/uuavv-weread-notion-worker-run
~~~

当前环境 DNS 解析失败（无法解析 `github.com`），无法获取源码并按仓库 README 实跑。本次改为做一个「Notion 侧落地格式」离线 smoke test：使用已归档的公开阅读统计作为输入，生成 Notion 数据库 schema 与 create-page payload 示例，方便后续替换为真实同步脚本输出。

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

这类「WeRead → Notion」同步工具的价值在于把阅读资产结构化进 Notion：可按书/作者/关键词筛选，支持二次整理与团队共享。离线示例展示了一个可落地的最小字段集合（书名、作者、bookId、笔记/想法条数、进度、同步时间等）。

## 限制与注意

- 当前环境无法访问 `github.com`，因此未能验证该仓库的真实实现与配置方式。
- 后续网络恢复后建议的最小验收：成功拉取源码 → 配置 `WEREAD_API_KEY` 与 Notion token/database → 同步 1 本书的聚合笔记，并保留终端摘要或 Notion 页面截图。

## 小红书可用角度

- Notion 里怎么存微信读书笔记最舒服？字段怎么设计？
- 用官方 `WEREAD_API_KEY` 做同步：可组合的“阅读数据 API”
- 同步后怎么玩：筛选、回顾、复盘、写作素材沉淀
