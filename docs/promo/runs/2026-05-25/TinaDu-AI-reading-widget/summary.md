# TinaDu-AI/reading-widget 体验记录

- 项目：https://github.com/TinaDu-AI/reading-widget
- 分类：桌面挂件与可视化
- 运行环境：macOS / Python 3 / 本地静态 HTML 预览
- 运行日期：2026-05-25

## 运行方式

临时工作目录：

```bash
git clone --depth 1 https://github.com/TinaDu-AI/reading-widget /tmp/awesome-weread-runs.AuGRSv/TinaDu-AI-reading-widget
cd /tmp/awesome-weread-runs.AuGRSv/TinaDu-AI-reading-widget
cp config.default.json config.json
python3 update.py
python3 -m http.server 8127 --bind 127.0.0.1
```

微信读书 AK 只通过已有的 `WEREAD_API_KEY` 环境变量传入。没有打印、复制到仓库或提交 AK。

## 最终产物

已提交产物：

- [生成的桌面 widget HTML](./artifacts/reading-widget.html)
- [Übersicht fragment](./artifacts/reading-widget-fragment.html)
- [完整截图](./artifacts/reading-widget-screenshot.jpg)
- [终端输出](./artifacts/terminal-output.txt)

截图是完整页面截图。该 widget 本身是固定桌面小卡片，渲染页没有额外滚动高度，因此 1280x720 即为完整页面。

## 调用的数据

项目通过 `update.py` 调用官方 Agent Gateway，主要数据范围：

- `/readdata/detail`：monthly / annually / weekly，用于本月阅读时长、年度统计、连续阅读天数。
- `/shelf/sync`：识别当前在读书。
- `/book/getprogress`：读取当前书籍进度。
- `/book/bestbookmarks`：取当前在读书的热门划线作为金句。

本次真实结果：

- 连续阅读：16 天。
- 今日阅读：3 分钟。
- 本月阅读：7 小时。
- 当前在读：《埃隆·马斯克传》。

## 体验判断

这个项目最适合做「桌面常驻」的阅读数据小挂件。它不是完整 dashboard，而是把最常看的几项数据压缩成一个很轻的视觉卡片：连续天数、今日 / 本月时长、当前在读、年度读完和金句。

对 Awesome WeRead 的使用者来说，它展示了官方 Skill 的一个低门槛用法：不用搭后端、不用数据库，只要 Python 脚本定时拉一次 Agent Gateway，就能生成一个可放在桌面的 HTML widget。

## 限制与注意

- 真实安装依赖 Übersicht；本次为了归档截图，只生成并预览 `widget.html`，没有修改本机桌面 widget 配置。
- 金句来自热门划线，不一定是用户自己的划线。
- 如果要长期使用，需要用 launchd 或 Übersicht 的刷新机制定时运行 `update.py`。

## 小红书可用角度

- “微信读书数据也可以变成桌面小挂件：今天读了多久，一眼就能看到。”
- “不用 cookie 抓取，只用官方 `WEREAD_API_KEY`，Python 跑一次就生成自己的阅读卡片。”
- “连续阅读 16 天、本月 7 小时、当前在读《埃隆·马斯克传》：这类数据很适合做每日读书打卡。”
- “Awesome WeRead 里最轻量的可视化项目之一，适合想先看到结果的人。”
