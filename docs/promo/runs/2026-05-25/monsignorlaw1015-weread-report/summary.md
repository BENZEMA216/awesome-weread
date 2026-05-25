# monsignorlaw1015/weread-report 体验记录

- 项目：https://github.com/monsignorlaw1015/weread-report
- 分类：工作流与助手
- 运行环境：macOS / Node.js v25.6.1 / 本地静态 HTML 预览
- 运行日期：2026-05-25

## 运行方式

临时工作目录：

```bash
git clone --depth 1 https://github.com/monsignorlaw1015/weread-report /tmp/awesome-weread-runs.aY4IvX/monsignorlaw1015-weread-report
cd /tmp/awesome-weread-runs.aY4IvX/monsignorlaw1015-weread-report
# 按 SKILL.md 的 Step 1 数据口径，调用官方 Agent Gateway 并生成公开安全版单页报告
```

该仓库是一个 Agent Skill，没有独立 CLI 脚本。本次体验按 `SKILL.md` 的 8 章节结构采集数据并生成公开安全版 HTML 报告。微信读书 AK 只通过已有的 `WEREAD_API_KEY` 环境变量传入，没有打印、复制到仓库或提交 AK。

## 最终产物

已提交产物：

- [公开指标 JSON](./artifacts/public-metrics.json)
- [书读你 Markdown 摘要](./artifacts/shuduni-report.md)
- [书读你 HTML 报告](./artifacts/shuduni-report.html)
- [完整截图](./artifacts/shuduni-report-screenshot.jpg)
- [终端输出](./artifacts/terminal-output.txt)

截图是完整页面截图，尺寸为 1280x4488。

## 调用的数据

本次按 `SKILL.md` 的数据口径调用官方 Agent Gateway：

- `/readdata/detail`：overall 与 2017-2026 逐年 annually。
- `/shelf/sync`。
- `/user/notebooks`。
- `/book/bookmarklist`：Top 15 笔记书，仅用于关键词频次统计。

本次真实结果：

- 累计阅读：1046 小时 9 分钟。
- 有效阅读：1798 天。
- 书架条目：119。
- 有笔记书籍：40。
- 笔记信号：928。
- Top 关键词：产品、用户、社会、经济、市场、行动、心理、决策、原则、表达。

## 体验判断

`weread-report` 的强项是叙事包装。它不是一个 API wrapper，而是一套“书读你”的报告脚本：阅读轨迹、划线主题、生命线、投入矩阵、作者关系、私密书架、阴影书库和结尾自画像。

这类 Skill 很适合 Awesome WeRead 的传播场景：用户不是只看到数字，而是看到一份有标题、有章节、有观点的报告。它的 README 和截图预览也很明确地指向 Guardian / Pudding.cool 式单页报告。

## 限制与注意

- 仓库没有提供可直接运行的生成脚本；完整体验需要 Agent 按 `SKILL.md` 执行采集、加工、写作和 HTML 生成。
- 本次报告为了公开归档，只保留关键词频次、书名、统计和聚合结论，不提交原始划线文本。
- “私密书架”章节只记录私密条目数量，不展开任何私密书名。

## 小红书可用角度

- “你以为你在读书，其实书一直在读你：这个 Skill 把微信读书变成叙事报告。”
- “1046 小时、1798 个阅读日、928 个笔记信号，最后生成一份单页自画像。”
- “Top 关键词直接暴露阅读重心：产品、用户、社会、经济、市场。”
- “这类项目最适合做小红书封面：标题强、章节强、截图也有传播感。”
