# wong2/weread-mcp 体验记录（离线 smoke test）

- 项目：https://github.com/wong2/weread-mcp
- 分类：MCP 服务
- 运行环境：macOS（Codex 本地自动化），git
- 运行日期：2026-05-25（2026-05-26 补充离线 smoke test 产物）

## 运行方式

临时工作目录（计划，未执行）：

```bash
git clone https://github.com/wong2/weread-mcp /tmp/wong2-weread-mcp-run
cd /tmp/wong2-weread-mcp-run
```

当前环境 DNS 解析失败（无法解析 `github.com`），无法获取源码并按仓库 README 实跑。本次改为做一个「MCP 工具清单与网关映射」离线 smoke test：生成 MCP 工具清单示例与一次最小调用示例，便于后续网络恢复后对齐真实工具与返回字段。

微信读书 AK（`WEREAD_API_KEY`）本次未使用、也未输出/落盘。

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

如果该项目确实基于官方 WeRead Skill/Agent Gateway，它的核心价值通常是：把微信读书能力以 MCP Server 的形式暴露给各类 Agent/IDE（例如 Claude Desktop / Cursor / 其他支持 MCP 的客户端），让「读书数据 → 工具调用」的链路更标准化、可组合。

离线产物用于把“工具清单长什么样、每个工具对应哪个网关 API、一次最小调用要哪些字段”先固定下来；待网络恢复后，只需对照 `mcp-tools.json` 校验真实工具与返回字段即可。

## 限制与注意

- 当前环境无法访问 `github.com`，因此未能验证该仓库的真实实现与配置方式。
- 后续网络恢复后建议的最小验收：启动 MCP server → 发起一次最小工具调用 → 保存终端摘要或调用截图（不包含任何密钥）。

## 小红书可用角度

- 「微信读书接入 MCP」能让哪些工作流变得自动化？
- 把阅读数据变成可调用工具：书架/笔记/阅读时长能怎么用？
- MCP 生态里，WeRead 工具适合配哪些 Agent（写作/复盘/知识库）？
