# cocovs/weread-agent-chat experience run

- Project: https://github.com/cocovs/weread-agent-chat
- Category: Workflows & Assistants
- Runtime: Next.js Web app plus Pi Agent
- Run date: 2026-05-25

## Setup and run

Temporary workspace:

```bash
git clone https://github.com/cocovs/weread-agent-chat /tmp/weread-agent-chat-run
cd /tmp/weread-agent-chat-run
npm install
npm run typecheck --workspaces --if-present
npm run build --workspaces --if-present
```

The WeRead key was passed through the existing `WEREAD_API_KEY` environment variable only. No API key was printed, copied into this repo, or committed.

## Exercised data

The project requires a separate model API key for the full Pi Agent chat flow. The current environment has the WeRead key but no model API key, so the full natural-language chat run was not executed. The WeRead tool layer was run directly through the project's own `WeReadClient`.

Tested WeRead APIs:

- `/shelf/sync`
- `/readdata/detail` with `overall` and `monthly`
- `/user/notebooks`
- `/book/bookmarklist`
- `/review/list/mine`
- `/store/search`

Sanitized aggregate metrics from the run:

- Visible shelf records: 118 ebooks, 0 audiobooks, plus 1 public-account shelf bucket
- Total reading time: 3,765,957 seconds, about 1046 hours 5 minutes
- Effective reading days: 1797
- Read stats reported by WeRead: 86 read, 41 finished, 949 notes/highlights
- Notebook overview: 40 notebook-bearing books, 949 total notes/highlights, no additional notebook page pending
- Single-book note path: tested with a hashed book id (`6cbf593e631a`), 1 bookmark record and 0 personal review records returned

## Output artifacts

Private local workspace, not committed:

- `/tmp/weread-agent-chat-run`

The build produced a working Next.js app with:

- `/`: single-page chat UI
- `/api/chat`: dynamic API route
- WeRead tools restricted to an allowlist of official Skill endpoints
- API-key handling designed for request scope rather than persistence

## Observed value

This project is useful as an "interactive analyst" layer: instead of generating a fixed report, it gives an Agent a bounded set of WeRead tools and lets the Agent decide whether to inspect shelf, reading stats, notebooks, book notes, or reviews.

The security shape is sensible for a public demo: the code validates `wrk-` keys, passes the key only into a request-scoped client, blocks non-WeRead tools before execution, and restricts raw API calls to the official Skill allowlist.

## Limitations and notes

- Full chat output requires a model API key. The current run verified compile/build and the WeRead tool layer, but did not produce a final Pi Agent narrative.
- `npm install` reported 2 moderate npm audit findings in dependencies; this should be reviewed before production deployment.
- The web UI asks users to paste both WeRead and model keys, so a hosted version needs explicit privacy messaging, rate limits, and request-body logging controls.

## Xiaohongshu-ready talking points

- "这不是固定模板报告，而是让一个受限 Agent 自己决定怎么查你的微信读书数据。"
- "项目只开放微信读书工具，不给 shell、文件系统或浏览器权限，适合做公开 demo 的安全边界。"
- "它支持书架、阅读统计、笔记本、单书划线、个人想法和受限 raw API 调用。"
- "如果接上模型 key，就可以把你的阅读数据变成连续对话，而不是一次性图表。"
- "Awesome WeRead 现在开始区分两类二创：固定报告型和交互 Agent 型。"
