# rayford295/rayford-knowledge-atlas experience run

- Project: https://github.com/rayford295/rayford-knowledge-atlas
- Category: Third-Party Sync
- Runtime: Static web atlas plus Obsidian-ready markdown vault
- Run date: 2026-05-25

## Setup and run

Temporary workspace:

```bash
git clone https://github.com/rayford295/rayford-knowledge-atlas /tmp/rayford-knowledge-atlas-run
cd /tmp/rayford-knowledge-atlas-run
npm run weread:update
npm run build
npm run verify
```

The WeRead key was passed through the existing `WEREAD_API_KEY` environment variable only. No API key was printed, copied into this repo, or committed.

## Exercised data

The project ran its documented `scripts/fetch-weread.js` path against the official Agent Gateway and generated its public-safe reading layer.

Tested WeRead APIs:

- `/shelf/sync`
- `/user/notebooks`
- `/readdata/detail`

Sanitized aggregate metrics from the run:

- Visible shelf records: 118 ebooks, 0 audiobooks, plus 1 public-account shelf bucket
- Notebook overview: 40 notebook-bearing books, 949 total notes/highlights
- Public reading nodes written by the project: 12
- Public index note signals: 872 total note signals, 3 bookmark signals
- Reading intelligence totals: 17 true reads, 81 shelf-only items, 0 hidden deep reads
- Year-to-date reading signal in this run: 42 reading days, 21h 30m
- Depth bands: 9 heavy, 1 committed, 14 light, 16 skim
- Atlas build output: 34 graph nodes, including 17 output nodes, 12 input nodes, and 5 bridge-question nodes

## Output artifacts

Private local workspace, not committed:

- `/tmp/rayford-knowledge-atlas-run/raw/weread/public-reading-index.json`
- `/tmp/rayford-knowledge-atlas-run/raw/weread/reading-intelligence.json`
- `/tmp/rayford-knowledge-atlas-run/wiki/readings/*.md`
- `/tmp/rayford-knowledge-atlas-run/data.js`

The generated data was not copied into this Awesome repo because it contains the user's personal reading metadata, even though the upstream project intentionally keeps it public-safe.

## Observed value

This project is not a simple notes exporter. It turns WeRead into the input side of an input-output knowledge atlas: reading records become graph nodes, then connect to questions, papers, repositories, and public workflows.

The strongest product angle is the "reading as research infrastructure" framing. It is useful for people who want to show how their books, papers, projects, and long-term questions shape each other.

## Limitations and notes

- The project writes public-safe reading metadata, but the generated files still reflect a real user's reading history. They should be reviewed before publishing.
- `npm run verify` passed with warnings about some bridge questions lacking input-side or output-side connections. The structural verification still reported `PASS`.
- The theme inference is heuristic and tuned to the author's atlas. Forks will need to adjust the theme rules to match their own fields.

## Xiaohongshu-ready talking points

- "这个项目把微信读书变成知识图谱的输入层，而不是只导出笔记。"
- "书、论文、仓库、研究问题可以放在一张图里看：哪些阅读在塑造你的输出。"
- "它刻意不发布原始划线和私密想法，只保留元数据、数量和主题信号。"
- "适合做个人主页、研究主页、创作者知识库，而不是传统读书报告。"
- "Awesome WeRead 这类收录可以分成两类：数据同步型和个人知识系统型。"
