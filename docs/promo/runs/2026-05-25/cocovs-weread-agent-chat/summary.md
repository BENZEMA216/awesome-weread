# cocovs/weread-agent-chat 体验记录

- 项目：https://github.com/cocovs/weread-agent-chat
- 分类：工作流与助手
- 运行环境：Next.js Web app + Pi Agent
- 运行日期：2026-05-25

## 运行方式

临时工作目录：

```bash
git clone https://github.com/cocovs/weread-agent-chat /tmp/weread-agent-chat-run
cd /tmp/weread-agent-chat-run
npm install
npm run typecheck --workspaces --if-present
npm run build --workspaces --if-present
```

微信读书 AK 只通过已有的 `WEREAD_API_KEY` 环境变量传入。没有打印、复制到仓库或提交 AK。

## 最终产物

这次没有产生完整聊天截图，原因是项目完整 Pi Agent 对话还需要额外的模型 API key；当前环境只有微信读书 AK，没有模型 key。

已验证的产物是：

- Next.js 应用可以构建，包含 `/` 单页聊天 UI 和 `/api/chat` 动态接口。
- WeRead 工具层可以通过项目自己的 `WeReadClient` 真实调用官方 Agent Gateway。
- 私有临时目录：`/tmp/weread-agent-chat-run`。

后续如果提供模型 API key，应该补一张完整聊天结果截图，并把截图放到本目录的 `artifacts/` 下。

## 调用的数据

已通过项目自己的工具层测试以下接口：

- `/shelf/sync`
- `/readdata/detail`，覆盖 `overall` 和 `monthly`
- `/user/notebooks`
- `/book/bookmarklist`
- `/review/list/mine`
- `/store/search`

脱敏聚合结果：

- 可见书架记录：118 本电子书、0 本有声书、1 个公众号书架桶
- 累计阅读时长：3,765,957 秒，约 1046 小时 5 分钟
- 有效阅读天数：1797 天
- 微信读书统计：86 本读过、41 本读完、949 条笔记/划线
- 笔记本概览：40 本有笔记的书，949 条笔记/划线，没有下一页
- 单书路径：用哈希后的 book id 测试，返回 1 条 bookmark、0 条个人 review

## 体验判断

这个项目的价值是“交互式阅读分析师”：它不是生成固定模板报告，而是给 Agent 一组受限的微信读书工具，让 Agent 自己决定先查书架、阅读统计、笔记本、单书划线还是个人想法。

安全边界设计比较清楚：校验 `wrk-` key，请求级创建 client，只允许 `weread_` 工具，并把 raw API 调用限制在官方 Skill allowlist 内。

## 限制与注意

- 完整聊天输出需要模型 API key，本次只验证了构建和 WeRead 工具层。
- `npm install` 报告 2 个 moderate 级别 npm audit 问题，生产部署前需要处理。
- Web UI 会让用户粘贴微信读书 key 和模型 key，如果托管成公开服务，需要明确隐私说明、限流和 request body 日志控制。

## 小红书可用角度

- “这不是固定模板报告，而是让一个受限 Agent 自己决定怎么查你的微信读书数据。”
- “项目只开放微信读书工具，不给 shell、文件系统或浏览器权限，适合做公开 demo 的安全边界。”
- “它支持书架、阅读统计、笔记本、单书划线、个人想法和受限 raw API 调用。”
- “如果接上模型 key，就可以把你的阅读数据变成连续对话，而不是一次性图表。”
- “Awesome WeRead 现在开始区分两类二创：固定报告型和交互 Agent 型。”
