# zephyrwang6/space-weread 体验记录

- 项目：https://github.com/zephyrwang6/space-weread
- 分类：工作流与助手
- 运行环境：macOS / Python 3 标准库 / 本地静态 HTML 预览
- 运行日期：2026-05-25

## 运行方式

临时工作目录：

```bash
git clone --depth 1 https://github.com/zephyrwang6/space-weread /tmp/awesome-weread-runs.aY4IvX/zephyrwang6-space-weread
cd /tmp/awesome-weread-runs.aY4IvX/zephyrwang6-space-weread
python3 space-weread-analyzer/scripts/fetch.py /tmp/awesome-weread-runs.aY4IvX/zephyr-space-weread-data.json
```

微信读书 AK 只通过已有的 `WEREAD_API_KEY` 环境变量传入。没有打印、复制到仓库或提交 AK。

## 最终产物

已提交产物：

- [公开指标 JSON](./artifacts/public-metrics.json)
- [体验预览 Markdown](./artifacts/space-weread-preview.md)
- [体验预览 HTML](./artifacts/space-weread-preview.html)
- [完整截图](./artifacts/space-weread-preview-screenshot.jpg)
- [终端输出](./artifacts/terminal-output.txt)

截图是完整页面截图，尺寸为 1280x4024。

项目脚本生成的原始 JSON 约 911KB，包含完整划线和想法明细。本次只把它作为临时运行输入，不提交原始 JSON；提交的是聚合指标和可分享预览。

## 调用的数据

项目自带 `space-weread-analyzer/scripts/fetch.py` 调用官方 Agent Gateway：

- `/user/notebooks` 分页全量。
- `/shelf/sync`。
- `/readdata/detail`：annually / overall。
- `/book/bookmarklist`。
- `/review/list/mine`。

本次真实结果：

- 有笔记书籍：40 本。
- 书架条目：119。
- 电子书：118。
- 划线：897 条。
- 想法：31 条。
- 累计阅读：1046 小时 9 分钟。
- 今年阅读：21 小时 30 分钟，42 天。

## 体验判断

`space-weread` 更像一组三件套 Skill：导出、分析和应用。它最扎实的部分是数据准备，`fetch.py` 能把书架、阅读统计、笔记、划线和想法拉成一个分析语料包。

对 Awesome WeRead 来说，它代表“把微信读书数据真正用起来”的 workflow 方向。项目本身不只是页面，而是让 Agent 继续基于数据生成 10 维度报告、选题建议、引用助手和每日划线回顾。

## 限制与注意

- 原始 JSON 包含完整划线和想法，公开仓库不提交。
- 完整 10 维度报告需要 Agent 在 JSON 数据上继续写作和排版；本次提交的是公开安全的体验预览。
- `fetch.py` 对 40 本书并行拉取划线和想法，运行速度不错，但对大书架用户仍需关注 API 调用量。

## 小红书可用角度

- “这个项目不是只看数据，而是把微信读书变成一个 Agent 可用的语料包。”
- “一条命令拉出 40 本有笔记书、897 条划线、31 条想法，再生成阅读画像预览。”
- “适合做长期内容工作流：选题、引用、每日笔记回顾，都可以从同一份 WeRead 数据开始。”
- “公开分享时不需要暴露原始划线，聚合指标和截图已经足够说明价值。”
