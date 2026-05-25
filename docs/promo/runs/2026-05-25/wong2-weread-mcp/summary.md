# wong2/weread-mcp 体验记录（未完成：网络受限）

- 项目：https://github.com/wong2/weread-mcp
- 分类：MCP 服务
- 运行环境：macOS（Codex 本地自动化），git
- 运行日期：2026-05-25

## 运行方式

临时工作目录（计划）：

```bash
git clone https://github.com/wong2/weread-mcp /tmp/wong2-weread-mcp-run
cd /tmp/wong2-weread-mcp-run
```

本次实际在 `git clone` 阶段即失败（见下方产物）。当前环境对 GitHub 的网络访问被代理配置影响（指向 `127.0.0.1:7897`），导致无法继续安装/运行与 MCP 联调。

微信读书 AK（`WEREAD_API_KEY`）本次未使用、也未输出/落盘。

## 最终产物

已提交产物：

- [git clone 失败日志](./artifacts/git-clone.txt)

由于未能拉取源码，本次未能启动 MCP server，也没有生成任何可验证的调用输出/截图。

## 调用的数据

本次未调用任何 WeRead 官方 Skill / Agent Gateway API（未能运行到该阶段）。

## 体验判断

如果该项目确实基于官方 WeRead Skill/Agent Gateway，它的核心价值通常是：把微信读书能力以 MCP Server 的形式暴露给各类 Agent/IDE（例如 Claude Desktop / Cursor / 其他支持 MCP 的客户端），让「读书数据 → 工具调用」的链路更标准化、可组合。

但本次受限于无法获取源码与 README，暂无法验证其 API key 形态（如 `WEREAD_API_KEY` / `wrk-`）与具体工具列表。

## 限制与注意

- 当前机器无法访问 GitHub（代理端口 `127.0.0.1:7897` 不可用），导致无法完成体验跑通。
- 待网络恢复后：需要重新 clone，按项目文档启动 MCP，并做一次最小可验证调用（例如列书架/同步/导出笔记），同时产出终端输出或调用截图作为归档产物。

## 小红书可用角度

- 「微信读书接入 MCP」能让哪些工作流变得自动化？
- 把阅读数据变成可调用工具：书架/笔记/阅读时长能怎么用？
- MCP 生态里，WeRead 工具适合配哪些 Agent（写作/复盘/知识库）？
