# kejixiaoliang/read-persona 体验记录

- 项目：https://github.com/kejixiaoliang/read-persona
- 分类：工作流与助手
- 运行环境：Codex Skill + Python 辅助脚本
- 运行日期：2026-05-24

## 运行方式

临时工作目录：

```bash
git clone https://github.com/kejixiaoliang/read-persona /tmp/read-persona-run
cd /tmp/read-persona-run
mkdir -p exports
python3 scripts/fetch_persona_data.py --output exports/persona-data.json --recommend-count 6 --max-notebook-pages 3
python3 scripts/generate_report.py exports/persona-data.json --output exports/read-persona-report.html --theme classic
```

微信读书 AK 只通过已有的 `WEREAD_API_KEY` 环境变量传入。没有打印、复制到仓库或提交 AK。

## 最终产物

已提交产物：

- [完整 HTML 阅读人格报告](./artifacts/read-persona-report.html)
- [完整报告长截图](./artifacts/read-persona-report.jpg)

这个项目会生成完整 HTML 阅读人格报告，包含指标概览、人格卡片、阅读 DNA、时间节律、笔记行为、代表性书目、推荐和数据说明。

用户已明确授权提交阅读相关产物，因此这次把真实阅读画像 HTML 与截图都放进了 `artifacts/`。仍然没有提交微信读书 AK、Authorization header 或 `.env`。

私有本地产物：

- `/tmp/read-persona-run/exports/persona-data.json`

## 调用的数据

- `/shelf/sync`：拉取 118 本电子书、0 本有声书、1 个公众号书架桶。
- `/readdata/detail`：拉取 overall、annual、monthly、weekly 阅读统计。
- `/user/notebooks`：检测到 40 本有笔记的书，949 条笔记/划线，1 页完成，没有截断。
- `/book/recommend`：拉取 6 条推荐记录。

脱敏聚合结果：

- 可见书架条目：119
- 累计阅读时长：3,765,957 秒，约 1046 小时 5 分钟
- 有效阅读天数：1797 天
- 微信读书统计：86 本读过、41 本读完、949 条笔记/划线
- 私有 JSON 大小：259 KB
- 私有 HTML 报告大小：15 KB

## 体验判断

这个项目是官方 WeRead Skill 上很强的“可分享结果层”。它把书架、阅读时长、笔记和推荐数据包装成单页 HTML，比 raw API 输出更容易截图或改造成社交内容。

它的核心价值是包装能力：脚本依赖轻，直接调用官方 Agent Gateway，两条命令就能产出可读报告。适合想要私人阅读画像，而不是同步管线的用户。

## 限制与注意

- 生成报告包含私人阅读数据，默认只作为本地产物保存。
- 当前模板里的分析逻辑偏静态，如果加入 LLM 生成评论，画像文本会更有变化。
- fetch 脚本会在本地写完整源 JSON，公开仓库里不应该提交这类文件。

## 小红书可用角度

- “微信读书官方 Skill 不只能查数据，还能一键生成阅读人格报告。”
- “这类二创最适合做可视化：书架、阅读时长、笔记量和推荐都能变成一张可分享页面。”
- “这个项目没有走 cookie 抓取，直接用官方 `WEREAD_API_KEY` 和 Agent Gateway。”
- “跑出来的不是表格，而是一份完整 HTML 报告，后续可以截屏、改模板、做成小红书图文。”
- “Awesome WeRead 现在会把新项目分成两步处理：先收录，再真实跑一遍看结果。”
