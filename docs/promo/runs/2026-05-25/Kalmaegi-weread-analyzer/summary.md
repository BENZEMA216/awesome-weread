# Kalmaegi/weread-analyzer 体验记录

- 项目：https://github.com/Kalmaegi/weread-analyzer
- 分类：桌面挂件与可视化
- 运行环境：Node.js v25.6.1 / pnpm / Next.js dev server
- 运行日期：2026-05-25

## 运行方式

临时工作目录：

```bash
git clone --depth 1 https://github.com/Kalmaegi/weread-analyzer /tmp/awesome-weread-runs.AuGRSv/Kalmaegi-weread-analyzer
cd /tmp/awesome-weread-runs.AuGRSv/Kalmaegi-weread-analyzer
pnpm install --ignore-scripts
pnpm exec next dev -p 8130
```

生产构建验证：

```bash
pnpm build
```

微信读书 AK 只通过本机环境变量传给本地 dev server 的 `/api/weread/shelf` 请求，没有写入页面、Markdown、JSON 或截图。

## 最终产物

已提交产物：

- [生成的阅读画像 Markdown](./artifacts/weread-reading-profile.md)
- [公开指标 JSON](./artifacts/public-metrics.json)
- [体验报告 HTML](./artifacts/weread-analyzer-report.html)
- [完整截图](./artifacts/weread-analyzer-report-screenshot.jpg)
- [API 运行摘要](./artifacts/api-run-output.txt)
- [生产构建输出](./artifacts/build-output.txt)

截图是完整页面截图，尺寸为 1280x1081。

## 调用的数据

项目本地 API route 调用官方 Agent Gateway：

- `/shelf/sync`

随后使用项目内置逻辑：

- `normalizeBooks`
- `getBasicMetrics`
- `getCategoryMetrics`
- `generateProfileTags`

本次真实结果：

- 书架总数：118 本。
- 已读：35 本。
- 在读：0 本。
- 完成率：30%。
- Top 分类：社会文化-社科、经济理财-财经、精品小说-悬疑推理、经济理财-商业、未知分类。
- 生成标签：中度书架收藏者、高收藏低完成型读者、待读清单型书架使用者、思想探索型读者、问题解决型读者、文学审美型读者。

## 体验判断

`weread-analyzer` 的价值在于把书架转换成一组可解释的基础阅读画像：书架规模、完成率、分类分布和人格标签。它不像 report 类项目那样强调文案效果，而更像一个可继续扩展的分析底座。

这类项目适合放进 Awesome WeRead 的「可视化 / 分析器」类目里：用户输入官方 API Key 后，先看到结构化指标，再导出 Markdown 或 JSON，后续可以再接小红书卡片、个人主页或年度复盘。

## 限制与注意

- `pnpm build` 暴露了项目当前的 TypeScript 问题：`rawShelf` 的 `unknown` 类型不能直接作为 ReactNode 渲染，详见 `build-output.txt`。
- 页面 UI 在自动化环境里没有可靠触发 React controlled input 的 state 更新；本次通过项目自己的本地 API route 和分析函数生成结果页，并把这个限制明确记录。
- 官方 `/shelf/sync` 返回的部分书籍没有进度字段，项目当前逻辑会把这些书统计为未读，因此“未读 118 本”和“已读 35 本”会同时出现，属于项目 normalize 口径需要继续修正的地方。

## 小红书可用角度

- “输入微信读书 AK，就能把 118 本书架拆成阅读画像标签。”
- “这个项目不是花哨页面，而是适合二次开发的 WeRead 分析底座。”
- “分类分布能直接看出你到底在囤什么书：社科、财经、悬疑推理一眼排出来。”
- “真实试用也暴露了项目问题：进度字段归一化还需要补强，这正是 Awesome 体验归档的价值。”
