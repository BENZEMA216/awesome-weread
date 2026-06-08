# chanity256/weread-export 体验记录

- 项目：https://github.com/chanity256/weread-export
- 分类：第三方同步
- 运行环境：macOS / Python 3
- 运行日期：2026-06-08

## 运行方式

临时工作目录：

```bash
mkdir -p /tmp/chanity256-weread-export-run
# 通过 GitHub 读取候选仓库源码后，在临时目录复现 auto_export.py / export.py
WEREAD_EXPORT_DIR=/tmp/chanity256-weread-export-run/output python3 /tmp/chanity256-weread-export-run/auto_export.py
python3 /tmp/chanity256-weread-export-run/export.py --help
python3 /tmp/chanity256-weread-export-run/export.py \
  --bookmarks /tmp/chanity256-weread-export-sample/bm.json \
  --reviews /tmp/chanity256-weread-export-sample/rv.json \
  --chapters /tmp/chanity256-weread-export-sample/ch.json \
  --info /tmp/chanity256-weread-export-sample/info.json \
  --progress /tmp/chanity256-weread-export-sample/prog.json \
  --output /tmp/chanity256-weread-export-sample/sample-export.md
```

微信读书 AK 只通过已有的 `WEREAD_API_KEY` 环境变量传入；本次没有打印、写入或提交 AK。

## 最终产物

已提交产物：

- [样例导出 Markdown](./artifacts/sample-export.md)
- [样例输入元数据](./artifacts/sample-input-metadata.json)
- [live Gateway 阻塞日志](./artifacts/live-gateway-blocked.stderr.txt)
- [CLI 帮助](./artifacts/export-help.txt)

说明：

- `sample-export.md` 是用脱敏样例 JSON 跑真实 `export.py` 生成的 Markdown，验证了 frontmatter、章节分组、blockquote、多行划线和书评排版。
- `live-gateway-blocked.stderr.txt` 记录了真实 `auto_export.py` 试跑时的失败点：当前 Codex 受管沙箱不允许向 `i.weread.qq.com` 发起 HTTPS 连接，因此没法在本轮直接拉取真实书架。
- 本轮没有提交长篇真实划线内容，只保留结构化样例和阻塞证据。

## 调用的数据

项目代码明确面向这些官方 Agent Gateway / Skill API：

- `/user/notebooks`
- `/book/bookmarklist`
- `/book/chapterinfo`
- `/book/info`
- `/book/getprogress`
- `/review/list/mine`

本轮实际执行分成两部分：

- `auto_export.py` live 试跑在首次请求 `/user/notebooks` 前后的网络层即被沙箱拦截，未拿到真实返回体。
- `export.py` 本地样例跑通，成功渲染 1 本书、2 条划线、1 条章节想法、1 条整书书评，输出 1 个 Markdown 文件。

## 体验判断

这个项目的价值很直接：它不是把微信读书数据推到复杂数据库，而是每天把“已读完且有笔记的书”沉淀成 Obsidian 兼容 Markdown，适合把阅读笔记长期留在本地目录或知识库里。

和已有的 Obsidian 同步项目相比，它的差异点是更偏“定时增量导出器”而不是一次性同步脚本：`auto_export.py` 负责扫书、跳过已导出书籍、维护 `exported-books.json`，`export.py` 则只管把 5 份 JSON 渲染成 Markdown，拆分很清楚。

虽然本轮受沙箱限制没法直接验证真实 Gateway 返回，但 README 与 `auto_export.py` 都明确使用 `WEREAD_API_KEY` 和官方 `https://i.weread.qq.com/api/agent/gateway`，本地渲染链路也已经跑通，足以证明它属于“官方 Skill 时代”的实用同步器。

## 限制与注意

- 当前 Codex 受管沙箱禁止 outbound HTTPS，live 运行会报 `URLError: [Errno 1] Operation not permitted`；这不是项目自身 bug。
- 项目是 macOS 定时任务方案，核心部署依赖 `launchd`，不适合直接照搬到 Linux 服务器。
- `install.sh` 会把 `WEREAD_API_KEY` 写入本机 `~/Library/LaunchAgents/*.plist` 环境变量；本地使用时要注意不要把该 plist 纳入公开同步目录。
- 项目默认只处理“已读完且有笔记”的书，不是全书架全量镜像。

## 小红书可用角度

- “把微信读书自动沉淀进 Obsidian：每天 0 点增量导出，不用再手抄划线”
- “这个 WeRead 二创很克制：一个脚本扫书，一个脚本只管排版 Markdown”
- “官方 `WEREAD_API_KEY` 路线也能做本地知识库，不必回到 cookie 抓取”
- “我最喜欢它的点不是 AI，而是把书评、想法、划线统一整理成可长期保存的 Markdown”
- “如果你只想要本地笔记归档，不想上 Notion / 数据库，这个 macOS 定时导出器很对路”
