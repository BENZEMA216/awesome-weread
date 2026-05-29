# lucis-yg/weread-skill-api 体验记录

- 项目：https://github.com/lucis-yg/weread-skill-api
- 分类：命令行与 SDK
- 运行环境：Node.js / Express（离线验证：服务可启动 + 配置读取）
- 运行日期：2026-05-26

## 运行方式

临时工作目录：

```bash
cd /private/tmp/awesome-weread-backfill-workflows-cli-1779781183/lucis-yg-weread-skill-api
WEREAD_API_KEY=<YOUR_WEREAD_API_KEY> node server.js
```

说明：这里使用占位 `wrk-REDACTED` 仅用于验证服务启动与读取配置，避免触发真实请求/避免泄露密钥。

## 最终产物

已提交产物：

- [package.json 与脚本](./artifacts/package-json.txt)
- [服务启动日志（短启动后退出）](./artifacts/server-start.txt)
- [仓库结构与 commit](./artifacts/repo-structure.txt)
- [官方信号摘录](./artifacts/readme-signals.txt)

说明：本次产物不包含任何阅读数据与密钥。

## 调用的数据

项目目标是把官方 Agent Gateway 能力封装成本地 REST API（按文档对应到官方 `api_name`/模块：书籍、书架、笔记、发现、书评、阅读数据、个人信息等）。

本次仅验证服务骨架可启动与配置读取，未发起真实网关请求。

## 体验判断

它适合做“中间层”：前端/脚本/别的语言不需要理解官方网关协议，只要打本地 REST，就能把微信读书能力当成一个常规后端服务来用。

## 限制与注意

- 要获取真实数据，需要：可访问 `i.weread.qq.com` + 运行时提供真实 `WEREAD_API_KEY`（不要写入仓库/日志/截图）。
- 配套前端为 `lucis-yg/weread-dashboard`（当前仍在待补列表）。

## 小红书可用角度

- “把微信读书能力变成本地 REST 后端”：前端开发者更友好
- “不用理解 Agent Gateway 协议”：只要会调 API 就能用
- “配套 dashboard 做成仪表盘”：一键同步后可视化展示
