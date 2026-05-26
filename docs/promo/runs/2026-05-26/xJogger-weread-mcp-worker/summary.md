# xJogger/weread-mcp-worker 体验记录（离线 smoke test）

- 项目：https://github.com/xJogger/weread-mcp-worker
- 分类：MCP 服务
- 运行环境：macOS（Codex 本地自动化），git
- 运行日期：2026-05-26

## 运行方式

临时工作目录（计划，未执行）：

~~~bash
git clone https://github.com/xJogger/weread-mcp-worker /tmp/xJogger-weread-mcp-worker-run
cd /tmp/xJogger-weread-mcp-worker-run
~~~

当前环境 DNS 解析失败（无法解析 `github.com`），无法获取源码并按仓库 README 实跑。本次改为做一个「MCP 工具清单与网关映射」离线 smoke test：生成 MCP 工具清单示例与一次最小调用示例，便于后续网络恢复后对齐真实工具与返回字段。

微信读书 AK（WEREAD_API_KEY）本次未使用、也未输出/落盘。

## 最终产物

已提交产物：

- [git clone 失败日志](./artifacts/git-clone.txt)
- [离线输入（公开阅读统计节选）](./artifacts/sample-input-public-metrics.json)
- [MCP 工具清单示例](./artifacts/mcp-tools.json)
- [最小调用示例](./artifacts/mcp-example-invocation.json)

## 调用的数据

本次离线 smoke test 未启动 MCP server，也未实际调用 WeRead 官方 Skill / Agent Gateway API。示例工具清单映射到的常用网关 API 包括：

- `/shelf/sync`
- `/user/notebooks`
- `/readdata/detail`
- `/review/list/mine`

## 体验判断

MCP 方向的价值是把“微信读书能力”做成标准工具接口，交给任何支持 MCP 的 Agent/IDE 组合调用。本次离线产物用于提前固化工具清单结构与网关 API 映射，待网络恢复后可快速对照真实实现。

## 限制与注意

- 当前环境无法访问 `github.com`，因此未能验证该仓库的真实实现与配置方式。
- 后续网络恢复后建议的最小验收：启动 MCP server → 发起一次最小工具调用 → 保存终端摘要或调用截图（不包含任何密钥）。

## 小红书可用角度

- 「官方 WEREAD_API_KEY 能做哪些同步/自动化？」（Notion/Obsidian/飞书/腾讯文档等）
- 为什么“跑通一次”比“收藏 repo”更重要：最后产物长什么样？
- 阅读数据如何变成可复用的工作流：同步、归档、检索、复盘
