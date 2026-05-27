# weread-master 命令清单（摘自 README）

说明：以下是项目 README 中展示的常用命令示例，便于快速理解这个 CLI 大概覆盖哪些任务面。

```bash
weread doctor --json

weread shelf stat
weread shelf recent --limit 5
weread shelf stale --days 30

weread search "三体"
weread book info <bookId>
weread book progress <bookId>

weread readdata detail --mode monthly --analyze

weread notes export <bookId> --format obsidian -o notes.md
weread highlights search "关键词"

weread daily
weread reportcard --mode monthly

weread rating <bookId>
weread goals set --year 30
```
