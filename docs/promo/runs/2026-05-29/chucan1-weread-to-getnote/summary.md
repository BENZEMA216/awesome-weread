# chucan1/weread-to-getnote 试用记录

## 项目信息

- 项目 URL: https://github.com/chucan1/weread-to-getnote
- 分类: 第三方同步
- 运行环境: Claude Code Skill / notebridge / Get 笔记 CLI
- 本次试用日期: 2026-05-29

## 运行方式

```bash
git clone --depth 1 https://github.com/chucan1/weread-to-getnote.git /tmp/weread-to-getnote.Ich2IW/repo
npm view @chucan1013/notebridge version --silent
python3 <local smoke script>
node scripts/check-experience-runs.mjs --repo chucan1/weread-to-getnote
```

项目本身是 Claude Code Skill，核心执行依赖 `@chucan1013/notebridge` 和 `getnote` CLI。本机没有配置 Get 笔记账号和 `getnote` CLI，因此本次没有向第三方账号真实写入，而是生成可检查的 dry-run 导入预览。

## 调用的数据 / API

本次使用当前环境已有的 `WEREAD_API_KEY`，只通过环境变量传入，不写入日志或产物。实际调用官方 Agent Gateway:

- `/user/notebooks`: 读取最近有笔记/划线的书籍列表。
- `/book/bookmarklist`: 读取一本笔记较密集书籍的划线。
- `/book/chapterinfo`: 补章节标题。

本次选用《从0到1：开启商业与未来的秘密》的 3 条短划线，生成一份模拟 Get 笔记导入 Markdown 和保存 payload。

## 最终产物

- [gateway-export-evidence.json](./artifacts/gateway-export-evidence.json): 脱敏后的 Gateway 调用摘要、选中书籍和短划线元数据。
- [getnote-import-preview.md](./artifacts/getnote-import-preview.md): 模拟导入 Get 笔记前展示给用户确认的 Markdown。
- [getnote-save-payload.json](./artifacts/getnote-save-payload.json): `getnote save` 的 dry-run 参数结构。
- [skill-head.md](./artifacts/skill-head.md): 项目 Skill 规则全文。
- [repo-signals.txt](./artifacts/repo-signals.txt): README / Skill 中与官方 WeRead、notebridge、Get 笔记相关的证据行。
- [terminal-output.txt](./artifacts/terminal-output.txt): 运行摘要。

## 体验判断

这个项目的价值在于把微信读书划线从“导出文件”推进到“导入 Get 笔记并进入知识库”的完整链路。它明确要求先让用户确认导入范围和格式，再 dry-run 展示内容，最后才写入 Get 笔记并询问是否加入知识库，安全边界比一键全自动批量导入更稳。

从代码结构看，仓库很轻，主要交付物是 Claude Code Skill。当前 Skill v3 已经把底层数据层收敛到 notebridge，README 仍保留官方 Agent Gateway 的验证命令和 `WEREAD_API_KEY` 配置说明，符合 Awesome WeRead 的官方 Skill / API Key 收录范围。

## 限制与问题

- 本机未安装 `notebridge` / `getnote`，只验证到 npm 包存在和 Skill 规则可读。
- 没有 Get 笔记账号凭证，因此没有真实写入第三方服务，也没有第三方 UI 截图。
- 本次产物包含少量必要短划线，用于展示格式，不做批量版权内容导出。

## 小红书角度

- “微信读书划线可以直接进知识库”：从读书摘录到 Get 笔记的一条龙。
- “不是暴力导出”：先 dry-run 给用户确认，再保存，再询问是否加入知识库。
- “适合 Claude Code 用户”：把导入流程写成 Skill，让 Agent 按步骤处理范围、格式和错误。
- “官方 API Key 路线”：不用 cookie，走微信读书官方 Gateway / `WEREAD_API_KEY`。
- “Get 笔记用户友好”：输出默认带标题、标签和知识库推荐，减少整理成本。
