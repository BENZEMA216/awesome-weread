# ktKongTong/wereto 体验记录

- 项目：https://github.com/ktKongTong/wereto
- 分类：桌面挂件与可视化
- 运行环境：Cloudflare Workers/Pages（离线导出示例与部署配置）
- 运行日期：2026-05-26

## 运行方式

临时工作目录：

```bash
cd /private/tmp/awesome-weread-runs.AuGRSv/ktKongTong-wereto
# 本次未在线部署；仅导出仓库内置示例截图与 Cloudflare 配置文件
```

微信读书 AK 只通过已有的 `WEREAD_API_KEY` 环境变量或本机已配置的官方 Skill 传入；本次产物未保存 AK。

## 最终产物

已提交产物：

- [示例截图 1](./artifacts/example-1.png)
- [示例截图 2](./artifacts/example-2.png)
- [wrangler 配置](./artifacts/wrangler.jsonc)
- [weread-api 包 README](./artifacts/weread-api-README.md)
- [仓库结构与 commit](./artifacts/repo-structure.txt)
- [官方信号摘录](./artifacts/readme-signals.txt)

说明：`example-*.png` 为项目仓库自带示例图，用于展示页面形态；本次未生成任何真实阅读数据截图。

## 调用的数据

项目文档声明依赖官方 `WEREAD_API_KEY`（`wrk-...`）并通过 `https://i.weread.qq.com/api/agent/gateway` 获取数据，在页面里展示阅读数据，并提供一些聚合 API（如 recent/read、recent/annotation）。

本次未安装依赖/未在线部署，仅完成离线材料导出。

## 体验判断

它更像一个“可部署的个人阅读数据页”：你在 Cloudflare 上部署后，用配置页填入 `WEREAD_API_KEY`，就能把书架/近期阅读/笔记等做成一个随时可访问的网页。

## 限制与注意

- 完整体验需要 Cloudflare 环境（Workers/Pages）与可访问官方网关；并在运行时提供真实 `WEREAD_API_KEY`（不要写入仓库/日志/截图）。
- 本次仅展示示例与部署形态，未验证端到端同步效果。

## 小红书可用角度

- “把微信读书做成个人主页”：部署到 Cloudflare 就能随时访问
- “配置页填 key 自动同步”：读书数据网页化/可分享
- “适合博客侧边栏/独立站”：把阅读记录变成长期资产
