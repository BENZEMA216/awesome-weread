# Contributing to Awesome WeRead Skills

Thanks for keeping this list useful.

## Scope (read this first)

This list is **only for projects built on top of the official WeRead Agent Skill** released on 2026-05-17.

A project is in scope if it:

- Uses the official `Agent Gateway` (typically `https://i.weread.qq.com/api/agent/gateway`), **or**
- Uses an official API Key in the `wrk-...` format obtained via the WeRead Skill onboarding flow, **or**
- Is the official Skill bundle itself / an auto-synced mirror of it / a port to another runtime.

A project is **out of scope** if it:

- Uses browser cookies (`wr_vid`, `wr_skey`, `wr_rt`, Cookie Cloud, etc.) to access WeRead.
- Uses browser automation / image recognition / page scraping.
- Reverse-engineers any non-official WeRead endpoint.

These projects are valuable — they just belong in a different list (e.g. the `weread` topic on GitHub).

## Adding an entry

1. **Pick the right section.** Skill Bundles / Workflows & Assistants / CLIs & Libraries / MCP Servers / Third-Party Sync / Widgets & Visualizations.
2. **Add one row to the table.** Format:
   ```
   | [owner/repo](https://github.com/owner/repo) | <column 2 value> | One factual sentence, ≤ 140 chars. |
   ```
3. **Update both READMEs** — `README.md` (Simplified Chinese) and `README.en.md` (English). Keep them in sync.
4. **State the runtime / target.** For Skills: Claude Code, OpenClaw, Hermes, Cursor, generic Agent Skill manifest, multi-runtime. For sync apps: Notion, Obsidian, flomo, etc.
5. **Add an experience run for picked projects.** When a project is accepted by the curator, create `docs/promo/runs/YYYY-MM-DD/<owner-repo>/summary.md` and `artifacts/` using the template in [`docs/promo/runs/_template/summary.md`](docs/promo/runs/_template/summary.md). The summary must be Simplified Chinese and the artifacts must include at least one real output from the project.

## Quality bar

A project belongs here if it meets **all** of:

- Public, with a README that explains what it does.
- Last commit within ~12 months, or clearly marked stable.
- Not a stale fork or vendored mirror of something already listed (unless meaningfully different — say how in the description).
- Solves a real use case (read / sync / analyze / extend / export / visualize) on top of the official Skill.

## Removing or moving an entry

PRs to remove archived / broken / migrated-to-cookie projects are welcome. Include a one-line reason in the PR body (e.g., "switched to cookie scraping in commit abc123, no longer in scope").

## License

By contributing you agree your contributions are released under [CC0](https://creativecommons.org/publicdomain/zero/1.0/).

## Discovery bot

This repo runs an automated discovery bot every 6 hours via [`.github/workflows/discover.yml`](.github/workflows/discover.yml). It:

1. Searches GitHub for recently updated `weread` repos.
2. Filters out anything already listed or previously evaluated (`seen.json`).
3. Keyword-filters for official-Skill signals (`wrk-`, `WEREAD_API_KEY`, `weread-skills`, `Agent Gateway`).
4. Asks Gemini (`gemini-2.5-flash`, fallback `gemini-2.5-flash-lite`) to make the final in-scope judgment with an evidence quote and a suggested category.
5. Opens a PR with the suggestions if anything was accepted. The PR is **never auto-merged** — a human curator reviews the evidence and copies the suggested row into both READMEs before merging.

Out-of-scope evaluations are appended to `seen.json` so we don't re-judge the same repo. If a previously rejected project later switches to the official Skill, you can manually remove its line from `seen.json` to give it a fresh look.

Requires repo secret `GOOGLE_API_KEY`. Workflow can also be triggered manually from the Actions tab.

## Experience runs

Awesome WeRead is meant to show what each picked project actually produces with real WeRead data, not just list repository names.

For every newly accepted project:

1. Clone or run the project in a temporary workspace outside this repository.
2. Use the documented quickstart and the user's configured official WeRead API key or Skill when live data is needed.
3. Save the result under:
   ```
   docs/promo/runs/YYYY-MM-DD/<owner-repo>/
     summary.md
     artifacts/
   ```
4. Put screenshots, generated HTML/Markdown/JSON metadata, exported files, or terminal summaries in `artifacts/`.
5. Write `summary.md` in Simplified Chinese with project URL, category, commands, data exercised, artifact links, observed value, limitations, and Xiaohongshu-ready talking points.

Run this check before considering a new pick archived:

```bash
node scripts/check-experience-runs.mjs --repo owner/repo
```

Reading-related outputs are allowed when the user has approved them. Secrets are never allowed: do not commit WeRead API keys, model API keys, GitHub tokens, Authorization headers, or `.env` files.
