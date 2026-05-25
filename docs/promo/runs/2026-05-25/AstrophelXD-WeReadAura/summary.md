# AstrophelXD/WeReadAura 体验记录

- 项目：https://github.com/AstrophelXD/WeReadAura
- 分类：桌面挂件与可视化
- 运行环境：Next.js 16 + React 19 dashboard
- 运行日期：2026-05-25

## 运行方式

临时工作目录：

```bash
git clone --depth 1 https://github.com/AstrophelXD/WeReadAura /tmp/wereadaura-run-20260525150759
cd /tmp/wereadaura-run-20260525150759
npm install --no-audit --no-fund
WEREAD_API_KEY="$WEREAD_API_KEY" npm run build
WEREAD_API_KEY="$WEREAD_API_KEY" npm run start -- -p 8139
curl -sS -X POST http://localhost:8139/api/sync
```

微信读书 AK 只通过服务端环境变量传入。没有写入 `.env.local`，也没有提交 AK。

## 最终产物

已提交产物：

- [首页截图](./artifacts/screenshot-home.jpg)
- [书架页截图](./artifacts/screenshot-bookshelf.jpg)
- [统计页截图](./artifacts/screenshot-stats.jpg)
- [笔记页截图](./artifacts/screenshot-notes.jpg)
- [公开 metadata](./artifacts/data/public-metadata.json)
- [同步响应](./artifacts/data/sync-response.json)
- [构建输出](./artifacts/build-output.txt)
- [安装输出](./artifacts/npm-install-output.txt)

没有提交项目生成的完整 `.data/sync-snapshot.json`，因为里面包含大量原始划线文本；归档里只放了截图、同步响应和去掉原文 quote 的公开 metadata。

## 调用的数据

项目通过内部 `/api/sync` 调用官方 WeRead Skill Gateway，并把结果缓存为本地 dashboard 数据。

实际覆盖的数据：

- 书架：118 本
- 划线信号：869 条
- 推荐：12 条
- 首页状态：live，已同步微信读书 Skill 数据
- 本月阅读时长：7 小时 19 分钟
- 本月阅读天数：16 天
- 本月读完书籍：1 本
- 全库笔记指标：949 条

## 体验判断

`WeReadAura` 是目前体验更完整的 dashboard 型项目之一。它不是单个报告页，而是把微信读书数据拆成总览、书架、统计、笔记、发现、助手、设置等多个视图，适合作为“个人阅读驾驶舱”。

真实数据接入链路跑通：安装依赖、生产构建、服务端启动、`/api/sync` 同步、页面读取 live cache 都可以完成。首页能明确显示已连接状态和上次同步时间，书架和笔记页能用真实数据渲染列表。

## 限制与注意

- 项目 README 要求 Node.js 24+ / npm 11+；低版本环境会有兼容风险。
- `npm install` 会在 postinstall 阶段浅克隆 `ekmas/neobrutalism-components`，离线环境会失败。
- 统计页部分图表区域在本次截图里仍显示加载骨架，但 API 已返回本月指标和热力图数据；后续可继续排查前端渲染时序。
- 项目声明仅供个人学习、禁止商用；公开部署前需要处理字体和隐私说明。

## 小红书可用角度

- “这是把微信读书做成个人阅读驾驶舱：总览、书架、统计、笔记都在一个页面体系里。”
- “和一次性报告不同，它更像长期使用的 dashboard。”
- “接入官方 Skill 后，首页会直接显示 live 同步状态、书架数量、在读数量和推荐数量。”
- “项目审美是 neo-brutalism，和常见数据看板不太一样，很适合做图文展示。”
- “完整跑下来也暴露了限制：项目依赖较新，公开部署前还要处理字体授权和隐私边界。”
