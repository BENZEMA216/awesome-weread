# ZiGmaX809/Weread_ReadTime_Heatmap 体验记录

- 项目：https://github.com/ZiGmaX809/Weread_ReadTime_Heatmap
- 分类：桌面挂件与可视化
- 运行环境：Python CLI + SVG 生成器
- 运行日期：2026-05-25

## 运行方式

临时工作目录：

```bash
git clone --depth 1 https://github.com/ZiGmaX809/Weread_ReadTime_Heatmap /tmp/weread-heatmap-run-20260525150445
cd /tmp/weread-heatmap-run-20260525150445
python3 -m pip install -r requirements.txt --quiet
NAME='Awesome WeRead 真实阅读热力图' THEME_COLOR=weread \
  python3 heatmap.py --theme weread --start 2026 --end 2026 \
  --output awesome-weread-heatmap.svg \
  --json awesome-weread-heatmap.json \
  --stats
```

微信读书 AK 只通过已有的 `WEREAD_API_KEY` 环境变量传入。没有打印、复制到仓库或提交 AK。

## 最终产物

已提交产物：

- [SVG 热力图](./artifacts/awesome-weread-heatmap.svg)
- [白底预览页](./artifacts/heatmap-preview.html)
- [热力图截图](./artifacts/awesome-weread-heatmap-screenshot.jpg)
- [阅读时长 JSON](./artifacts/awesome-weread-heatmap.json)
- [运行输出](./artifacts/terminal-output.txt)

本次提交的是日期级阅读时长、SVG 和截图，不包含微信读书 AK、Authorization header、`.env` 或原始划线文本。

## 调用的数据

项目通过 `weread_auth.py` 调用官方 Agent Gateway：

- `/_list`：测试 Gateway 连通性。
- `/readdata/detail`，`mode=monthly`：逐月拉取每日阅读时长。

真实运行结果：

- 年份范围：2026
- 阅读记录天数：51 天
- 读取到的日期范围：2026-01-02 到 2026-05-25
- 2026 年累计阅读时长：77,427 秒，约 21 小时 30 分钟
- 最长单日阅读：13,087 秒，约 3 小时 38 分钟
- 配色主题：微信读书蓝

## 体验判断

这是一个非常直接的“结果型”项目：输入官方 WeRead API Key，输出 GitHub contribution graph 风格的年度阅读热力图。它不尝试做复杂画像，也不需要 Web 服务，适合放在个人 README、主页、周报或年度复盘里。

它的优势是产物轻：SVG 可以直接嵌入 Markdown，JSON 可以留给后续二次分析，GitHub Actions 也能每天自动刷新。

## 限制与注意

- 当前只展示阅读时长，不展示书名、分类、笔记或阅读质量。
- SVG 背景默认透明，归档截图时需要白底预览页，否则深色浏览器背景会影响观感。
- 逐月调用 `/readdata/detail`，年份跨度拉长后请求次数会线性增加。

## 小红书可用角度

- “把微信读书阅读时长做成 GitHub 贡献图，一眼看出今年哪几天真的在读。”
- “这个项目不讲复杂画像，只回答一个问题：你每天到底读了多久。”
- “SVG 产物可以直接放到个人主页、README 或年度复盘里。”
- “用的是微信读书官方 Skill API Key，不需要 cookie 抓取。”
- “从图上能看到阅读节奏断点，比单纯总时长更适合做自我复盘。”
