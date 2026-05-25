# SpaceTrave1/weread-deep-insights 体验记录

- 项目：https://github.com/SpaceTrave1/weread-deep-insights
- 分类：桌面挂件与可视化
- 运行环境：macOS / Python 3 标准库 / 本地静态 HTML 预览
- 运行日期：2026-05-25

## 运行方式

临时工作目录：

```bash
git clone --depth 1 https://github.com/SpaceTrave1/weread-deep-insights /tmp/awesome-weread-runs.aY4IvX/SpaceTrave1-weread-deep-insights
cd /tmp/awesome-weread-runs.aY4IvX/SpaceTrave1-weread-deep-insights
python3 scripts/generate_deep_report.py \
  --format both \
  --output-dir /Users/benzema/awesome-weread/docs/promo/runs/2026-05-25/SpaceTrave1-weread-deep-insights/artifacts \
  --title "Awesome WeRead 深度阅读画像" \
  --skip-progress \
  --skip-book-info
```

微信读书 AK 只通过已有的 `WEREAD_API_KEY` 环境变量传入。没有打印、复制到仓库或提交 AK。

## 最终产物

已提交产物：

- [公开安全版 Markdown 报告](./artifacts/weread_deep_report.md)
- [公开安全版 HTML 报告](./artifacts/weread_deep_report.html)
- [完整长截图](./artifacts/weread_deep_report-screenshot.jpg)
- [终端输出](./artifacts/terminal-output.txt)

截图是完整页面截图，尺寸为 1280x11563。

原始生成报告会包含较长划线原文；归档版已把长划线替换为“公开归档版已省略长划线原文”，只保留统计、分析结论、来源书名与项目体验结果。

## 调用的数据

项目通过 `scripts/generate_deep_report.py` 调用官方 Agent Gateway：

- `/readdata/detail`：overall、weekly、monthly、annually。
- `/shelf/sync`。
- `/user/notebooks`。
- `/review/list/mine`。
- `/book/bookmarklist`。

本次真实结果：

- 累计阅读：1046 小时 9 分钟。
- 有效阅读：1798 天。
- 读过：86 本，读完：41 本。
- 官方笔记口径：949 条。
- 书架可见：119 个条目，其中电子书 118 本。
- 已遍历 40 本有笔记的书，导出 897 条划线和 19 条个人想法/点评。
- 报告画像摘要：现实解释者。

## 体验判断

这是一个非常适合“深度复盘”的本地分析项目。它不依赖大模型，使用规则、统计和模板就能生成完整 HTML/Markdown 报告，稳定、成本低，隐私边界也清楚。

它和 `reading-widget`、`weread-tools` 的差异在于：前者偏日常展示，后者偏传播包装；`weread-deep-insights` 更像一份可离线保存的“阅读审计报告”，适合年度复盘、知识结构诊断和后续交给大模型二次润色。

## 限制与注意

- 本次使用 `--skip-progress --skip-book-info`，跳过逐本进度和书籍详情补充，减少 API 调用量；报告中也明确显示进度和书籍详情导出数为 0。
- 原始报告包含较长划线原文，公开归档版已做省略处理，避免提交大段版权文本。
- 当前版本是规则分析，语义深度不如接入模型后的访谈式画像。

## 小红书可用角度

- “不用模型 API，只用微信读书官方 AK，也能生成 1 万多像素的深度阅读画像长图。”
- “这份报告把 1046 小时阅读、1798 个阅读日、949 条笔记信号揉成一个画像：现实解释者。”
- “适合做年度复盘：它不是打卡图，而是知识结构、价值信号、信息茧房和行动建议。”
- “公开版可以安全分享：保留结论和书名，不提交长篇原始划线。”
