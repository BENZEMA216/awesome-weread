# Eleven1111/weread-insight-skill 试用记录

## 项目信息

- 项目 URL: https://github.com/Eleven1111/weread-insight-skill
- 分类: 工作流与助手
- 运行环境: Codex Skill / Obsidian
- 本次试用日期: 2026-05-29

## 运行方式

```bash
git clone --depth 1 https://github.com/Eleven1111/weread-insight-skill.git /tmp/weread-insight-skill.ixyVbf/repo
python3 <local smoke script>
node scripts/check-experience-runs.mjs --repo Eleven1111/weread-insight-skill
```

本项目不是 CLI 或 Web app，而是一个 Codex Skill。试用重点是检查 `SKILL.md` 的规则、Obsidian 模板、eval prompts，以及它依赖微信读书官方 Skill / Gateway 的方式。

## 调用的数据 / API

本次使用当前环境已有的 `WEREAD_API_KEY`，只通过环境变量传入，不写入日志、截图或产物。实际调用了官方 Agent Gateway:

- `/user/notebooks`: 读取最近有笔记/划线的书籍列表。
- `/book/bookmarklist`: 读取一本笔记较密集书籍的划线。
- `/book/chapterinfo`: 补章节标题。
- `/readdata/detail`: 获取本周阅读摘要。

本次选用《从0到1：开启商业与未来的秘密》的一条短划线，生成一张模拟 Obsidian 理解卡片。产物只保留必要短引文和结构化元数据，没有保存 API Key 或 Authorization header。

## 最终产物

- [gateway-reading-evidence.json](./artifacts/gateway-reading-evidence.json): 脱敏后的 Gateway 调用摘要、选中书籍和短划线元数据。
- [obsidian-card-sample.md](./artifacts/obsidian-card-sample.md): 按项目模板生成的理解卡片样例。
- [obsidian-daily-sample.md](./artifacts/obsidian-daily-sample.md): 模拟 Daily note。
- [skill-head.md](./artifacts/skill-head.md): Skill 规则主体节选。
- [repo-signals.txt](./artifacts/repo-signals.txt): README / SKILL 中与官方 WeRead、`WEREAD_API_KEY`、Obsidian 相关的证据行。
- [terminal-output.txt](./artifacts/terminal-output.txt): 运行摘要。

## 体验判断

这个项目的定位很清晰：它不是批量导出笔记，而是把“某条划线为什么让我停下来”转成可复用的理解卡片。它对 Awesome WeRead 有价值，因为它代表了官方 Skill 之上的第二层工作流：从数据读取走向阅读理解、问题推断和知识沉淀。

实际试用中，它的 `SKILL.md` 对边界写得比较严谨：要求区分用户明确问题、划线证据和低置信推断；涉及翻译和原文时，要求查证来源，不能从译文反推；写入 Obsidian 时，也要求 Daily 和 Card 双向链接。这些规则适合被后续 Agent 直接执行。

## 限制与问题

- 本项目没有可直接运行的 CLI、脚本或网页，因此没有截图。
- 当前环境未配置 `OBSIDIAN_VAULT`，所以本次没有写入真实 Obsidian vault，而是生成了可检查的 Markdown 样例。
- 本次没有联网查证《从0到1》的英文原文，只验证了微信读书数据读取、问题推断和 Obsidian 卡片结构。若用户继续追问原文，Skill 应再查可靠来源。

## 小红书角度

- “微信读书划线不是收藏夹，而是你的困惑地图”：这个 Skill 直接把划线变成待解释的问题。
- “AI 读书助手终于不只是总结书”：它会区分原文、上下文、误读和可记忆结论。
- “适合 Obsidian 用户”：每条解释能沉淀成双链卡片，而不是一次性聊天记录。
- “官方 API Key 让体验变轻”：不用 cookie 抓取，直接用 WeRead Skill / Gateway 读取个人阅读信号。
- “最适合深度阅读者”：不是批量导出，而是挑高价值划线做精读解释。
