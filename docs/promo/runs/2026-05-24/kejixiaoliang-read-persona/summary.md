# kejixiaoliang/read-persona experience run

- Project: https://github.com/kejixiaoliang/read-persona
- Category: Workflows & Assistants
- Runtime: Codex Skill plus Python helper scripts
- Run date: 2026-05-24

## Setup and run

Temporary workspace:

```bash
git clone https://github.com/kejixiaoliang/read-persona /tmp/read-persona-run
cd /tmp/read-persona-run
mkdir -p exports
python3 scripts/fetch_persona_data.py --output exports/persona-data.json --recommend-count 6 --max-notebook-pages 3
python3 scripts/generate_report.py exports/persona-data.json --output exports/read-persona-report.html --theme classic
```

The WeRead key was passed through the existing `WEREAD_API_KEY` environment variable only. No API key was printed, copied into this repo, or committed.

## Exercised data

- `/shelf/sync`: 118 ebook records, 0 audiobook records, and 1 public-account shelf bucket were fetched.
- `/readdata/detail`: overall, annual, monthly, and weekly reading statistics were fetched.
- `/user/notebooks`: 40 notebook-bearing books and 949 total notes/highlights were detected in 1 page; the notebook fetch was not truncated.
- `/book/recommend`: 6 recommendation records were fetched.

Sanitized aggregate metrics from the run:

- Visible shelf items: 119
- Total reading time: 3,765,957 seconds, about 1046 hours 5 minutes
- Effective reading days: 1797
- Read stats reported by WeRead: 86 read, 41 finished, 949 notes/highlights
- Generated private JSON size: 259 KB
- Generated private HTML report size: 15 KB

## Output artifacts

Private local artifacts, not committed:

- `/tmp/read-persona-run/exports/persona-data.json`
- `/tmp/read-persona-run/exports/read-persona-report.html`

The HTML report rendered a complete reading-persona page with overview metrics, persona cards, category/DNA analysis, time rhythm, note-behavior analysis, representative-book section, recommendation section, and data notes.

## Observed value

This project is a strong "shareable result" layer on top of the official WeRead Skill. It turns raw shelf, reading-time, notebook, and recommendation data into a single polished HTML report that is easier to screenshot or adapt into social content than raw API output.

The main value is packaging: the scripts are dependency-light, use the official Agent Gateway directly, and produce a readable artifact in one command pair. It is a good fit for users who want a personal reading profile rather than a sync pipeline.

## Limitations and notes

- The generated report contains private reading data and should be treated as a local artifact unless the user explicitly reviews and approves publishing specific screenshots.
- The current report template is mostly static analysis logic; richer LLM-written commentary could make the persona copy less repetitive.
- The fetch script writes full source JSON locally, so downstream usage should keep it outside public repos by default.

## Xiaohongshu-ready talking points

- "微信读书官方 Skill 不只能查数据，还能一键生成阅读人格报告。"
- "这类二创最适合做可视化：书架、阅读时长、笔记量和推荐都能变成一张可分享页面。"
- "这个项目没有走 cookie 抓取，直接用官方 `WEREAD_API_KEY` 和 Agent Gateway。"
- "跑出来的不是表格，而是一份完整 HTML 报告，后续可以截屏、改模板、做成小红书图文。"
- "Awesome WeRead 现在会把新项目分成两步处理：先收录，再真实跑一遍看结果。"
