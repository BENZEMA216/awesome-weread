# viewer12/weread-mirror Experience Run

- Project: https://github.com/viewer12/weread-mirror
- Category: Workflows & Assistants
- Runtime / target: Claude Code with the official WeRead Skill
- Run date: 2026-05-21

## Setup and Run

The project is a static HTML example plus a reusable prompt, not a CLI. I cloned it into a temporary workspace and verified the documented workflow against the user's configured official WeRead Skill/API key.

Commands and checks used:

```bash
git clone --depth 1 https://github.com/viewer12/weread-mirror.git /tmp/weread-mirror-run
```

The experience run then exercised the official Agent Gateway through these Skill APIs:

- `/shelf/sync`
- `/readdata/detail` with `mode=overall`
- `/user/notebooks`
- `/book/bookmarklist` for the top 3 note-heavy books
- `/review/list/mine` for the top 3 note-heavy books

No API key, raw shelf titles, highlight text, or review text was saved in this repository.

## Sanitized Result

- Visible shelf items checked: 119
- Ebooks checked: 118
- MP collection present: yes
- Books with notes checked: 40
- Total note count checked: 949
- Overall read stats returned by the official API:
  - Read: 86 books
  - Finished: 41 books
  - Reading days: 1796 days
  - Notes: 949
- Detail API checks for the top 3 note-heavy books:
  - Book 1: 292 notebook items; fetched 288 highlights and 4 reviews
  - Book 2: 133 notebook items; fetched 133 highlights and 0 reviews
  - Book 3: 120 notebook items; fetched 116 highlights and 3 reviews

## Observed Value

`weread-mirror` packages the official WeRead Skill into a highly understandable user-facing workflow: install Skill, set `WEREAD_API_KEY`, copy a prompt, and generate a one-file reading portrait. Its strongest idea is not the API wrapper itself, but the editorial method: separate shelf, reading stats, highlights, and written thoughts, then ask the AI to produce a private "third-party evaluator" portrait grounded in identifiable data points.

The project is especially useful for social sharing because the final artifact is a single HTML page. It can be screenshotted, edited into a carousel, or used as a prompt template for personalized reading-analysis posts.

## Limitations

- There is no packaged CLI or one-command generator.
- The current run verified the data path and prompt workflow, but did not commit a full private portrait because that would expose personal reading history in a public repository.
- The generated portrait quality depends heavily on the agent's writing ability and whether the user has enough notes/highlights to support real observations.

## Xiaohongshu Talking Points

1. "微信读书不只是记录读了几本书，它能被 AI 读成一份私人画像。"
2. "这个项目最聪明的地方，是把书架、阅读时长、划线、想法分开看：想读什么、真读什么、留下些什么，是三件不同的事。"
3. "它不用 cookie 抓取，直接走微信读书官方 Skill 和 `wrk-` API Key，更适合放进 Agent 工作流。"
4. "最后产物是单文件 HTML，很适合截图做成小红书图文。"
5. "不是年度报告那种热闹模板，而是一个第三方 AI 基于数据写出的阅读侧写。"
