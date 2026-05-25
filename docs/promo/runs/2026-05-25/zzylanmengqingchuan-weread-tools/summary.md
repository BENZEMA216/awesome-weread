# zzylanmengqingchuan/weread-tools 体验记录

- 项目：https://github.com/zzylanmengqingchuan/weread-tools
- 分类：桌面挂件与可视化
- 运行环境：本地静态 HTTP 服务 / 浏览器
- 运行日期：2026-05-25

## 运行方式

临时工作目录：

```bash
git clone --depth 1 https://github.com/zzylanmengqingchuan/weread-tools /tmp/awesome-weread-runs.AuGRSv/zzylanmengqingchuan-weread-tools
cd /tmp/awesome-weread-runs.AuGRSv/zzylanmengqingchuan-weread-tools
python3 -m http.server 8128 --bind 127.0.0.1
```

然后分别打开：

```text
http://127.0.0.1:8128/weread-report.html
http://127.0.0.1:8128/reading-persona.html
```

微信读书 AK 只在浏览器运行时输入，没有写入提交产物。项目页面会通过它自己的 Cloudflare Worker 代理请求 WeRead API；这一点已在限制里记录。

## 最终产物

已提交产物：

- [书单诚实报告源码 HTML](./artifacts/weread-report-source.html)
- [书单诚实报告完整截图](./artifacts/weread-report-screenshot.jpg)
- [书单诚实报告页面文本](./artifacts/weread-report-page-text.txt)
- [阅读人格画像源码 HTML](./artifacts/reading-persona-source.html)
- [阅读人格画像完整截图](./artifacts/reading-persona-screenshot.jpg)
- [阅读人格画像页面文本](./artifacts/reading-persona-page-text.txt)

两张截图都是完整页面截图：

- 书单诚实报告：1280x3857。
- 阅读人格画像：1280x2557。

## 调用的数据

两个页面都基于官方 WeRead Agent API 数据。根据源码与页面运行路径，本次主要调用：

- `/shelf/sync`
- `/readdata/detail`，包括 `overall` 和 `annually`
- `/user/notebooks`

本次真实结果：

- 书架总量：118。
- 已读完：35。
- 累计阅读：1046 小时。
- 机会榜当前在读：`埃隆·马斯克传`、`夜晚的潜水艇`、`毛泽东选集（全四卷）` 等。
- 阅读人格：`EDAT / 星图编目员`。
- 画像依据：119 个书架条目、今年 21 小时 30 分钟、42 个阅读日、949 条笔记痕迹、40 本书有笔记。

## 体验判断

这是本轮最适合直接发小红书的项目之一。它不是开发者工具，而是已经写好了传播文案和视觉结构的双页面工具：一个偏“扎心报告”，一个偏“人格画像”。

`weread-report.html` 的优势是观点强：打开率、弃读图鉴、积灰排行榜、品类陷阱、机会榜都能直接变成图文切片。`reading-persona.html` 的优势是包装完整：人格代号、人格名、依据指标、阅读样子和代表书籍都已经组织好。

## 限制与注意

- 项目是纯前端页面，但本地页面请求微信读书数据时依赖作者提供的 Cloudflare Worker 代理 `weread-proxy.zhuzhaoyu73.workers.dev`。这意味着 AK 会在运行时发送到该代理；本次没有把 AK 写入任何文件或截图。
- `reading-persona.html` 提供“下载结果图片”按钮，但本次归档以完整页面截图为准，没有额外提交导出的 PNG 卡片。
- 页面文本里包含书名和阅读统计，用户已授权提交阅读相关产物；没有提交 API Key、Authorization header 或原始长篇划线合集。

## 小红书可用角度

- “这个工具会直接告诉你：你书架 118 本，真正读完 35 本。”
- “最适合做图文的一页：弃读图鉴、品类陷阱、机会榜，全是可截图素材。”
- “我的微信读书人格是 EDAT 星图编目员，画像依据来自书架、阅读时段和 949 条笔记痕迹。”
- “Awesome WeRead 不只是收 repo，还会把每个项目用真实数据跑出能发布的效果。”
