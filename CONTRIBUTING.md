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
