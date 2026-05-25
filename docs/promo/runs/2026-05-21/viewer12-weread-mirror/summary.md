# viewer12/weread-mirror 体验记录

- 项目：https://github.com/viewer12/weread-mirror
- 分类：工作流与助手
- 运行环境：Claude Code + 官方 WeRead Skill
- 运行日期：2026-05-21

## 运行方式

这个项目主要是静态 HTML 示例和可复用 prompt，不是打包好的 CLI。我把它克隆到临时目录，并用用户已配置的官方 WeRead Skill / API key 验证了文档里的工作流。

使用的命令：

```bash
git clone --depth 1 https://github.com/viewer12/weread-mirror.git /tmp/weread-mirror-run
```

体验过程中调用了以下官方 Agent Gateway / Skill API：

- `/shelf/sync`
- `/readdata/detail`，`mode=overall`
- `/user/notebooks`
- `/book/bookmarklist`，针对笔记最多的 3 本书
- `/review/list/mine`，针对笔记最多的 3 本书

没有把 AK、原始书架标题、划线文本或 review 文本保存进本仓库。

## 最终产物

这个项目的目标产物是单文件 HTML 私人阅读画像。之前没有提交完整 HTML 或截图，原因是它会暴露用户真实书单、笔记结构和阅读侧写。

后续规则改为：

- 如果产物不含隐私，直接提交截图或导出文件到 `artifacts/`。
- 如果产物含私人阅读数据，summary 必须写清楚私有产物路径；只有在用户明确允许公开时，才提交截图。

本次私有产物没有进入公开 repo。

## 脱敏结果

- 检查的可见书架条目：119
- 检查的电子书：118
- 是否存在公众号书架桶：是
- 有笔记的书：40 本
- 笔记总数：949
- 官方 API 返回的整体阅读统计：
  - 读过：86 本
  - 读完：41 本
  - 阅读：1796 天
  - 笔记：949 条
- 笔记最多的 3 本书明细：
  - Book 1：292 条 notebook item，拉取 288 条 highlight、4 条 review
  - Book 2：133 条 notebook item，拉取 133 条 highlight、0 条 review
  - Book 3：120 条 notebook item，拉取 116 条 highlight、3 条 review

## 体验判断

`weread-mirror` 把官方 WeRead Skill 包装成一个很容易理解的用户工作流：安装 Skill、设置 `WEREAD_API_KEY`、复制 prompt、生成单文件阅读画像。它最强的地方不是 API wrapper，而是编辑方法：把书架、阅读统计、划线和想法分开，让 AI 基于可识别的数据点生成一个私人“第三方评价者”画像。

这个项目适合做社交分享，因为最终产物是单文件 HTML，可以截图、拆成卡片，或者当成个性化阅读分析帖的 prompt 模板。

## 限制与注意

- 没有封装 CLI 或一键生成器。
- 本次验证了数据路径和 prompt 工作流，但没有提交完整私人画像，避免公开个人阅读历史。
- 画像质量高度依赖 Agent 的写作能力，以及用户是否有足够的笔记/划线支撑观察。

## 小红书可用角度

1. “微信读书不只是记录读了几本书，它能被 AI 读成一份私人画像。”
2. “这个项目最聪明的地方，是把书架、阅读时长、划线、想法分开看：想读什么、真读什么、留下些什么，是三件不同的事。”
3. “它不用 cookie 抓取，直接走微信读书官方 Skill 和 `wrk-` API Key，更适合放进 Agent 工作流。”
4. “最后产物是单文件 HTML，很适合截图做成小红书图文。”
5. “不是年度报告那种热闹模板，而是一个第三方 AI 基于数据写出的阅读侧写。”
