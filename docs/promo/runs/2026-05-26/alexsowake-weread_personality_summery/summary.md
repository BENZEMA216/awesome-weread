# alexsowake/weread_personality_summery 体验记录

- 项目：https://github.com/alexsowake/weread_personality_summery
- 分类：桌面挂件与可视化
- 运行环境：前端静态页（离线导出页面 + 结构/信号）
- 运行日期：2026-05-26

## 运行方式

临时工作目录：

```bash
cd /private/tmp/awesome-weread-runs.aY4IvX/alexsowake-weread_personality_summery
# 本次仅离线导出静态页面与运行依赖信息（未跑在线分析）
```

微信读书 AK 只通过已有的 `WEREAD_API_KEY` 环境变量或本机已配置的官方 Skill 传入；本次产物未保存 AK。

## 最终产物

已提交产物：

- [前端页面（本地预览）](./artifacts/index.html)
- [仓库结构与 commit](./artifacts/repo-structure.txt)
- [官方信号摘录](./artifacts/readme-signals.txt)
- [Playwright/Chrome headless 错误日志](./artifacts/playwright-stderr.txt)

说明：本次产物为离线可验证材料（静态页面与日志/信号），不包含任何阅读数据与密钥。

## 调用的数据

项目文档声明以官方 Agent Gateway（`https://i.weread.qq.com/api/agent/gateway`）为数据源（`WEREAD_API_KEY` / `wrk-...`），并引入 DeepSeek 模型做两阶段总结，最终生成“阅读人格画像”页面。

本次未能访问外网接口，且 headless 浏览器渲染失败，因此只完成静态页面与依赖/信号的离线导出。

## 体验判断

它更像“可分享的阅读画像页生成器”：把笔记/划线等素材做成偏人格侧写风格的总结展示，适合个人主页/年终复盘/朋友圈长图的内容来源。

## 限制与注意

- 端到端运行通常需要：
  - `WEREAD_API_KEY`（官方 `wrk-...`）
  - 模型 Key（项目使用 `DEEPSEEK_API_KEY` 等）
  - 可用的 Chromium/Playwright 环境用于渲染/截图
- 本次环境网络与 headless 浏览器均受限，因此未能产出最终页面长截图。

## 小红书可用角度

- “把笔记/划线变成阅读人格画像”：输出像一份‘人格侧写’
- “两阶段总结（数据→洞察→页面）”：适合做年度/季度复盘
- “可做个人主页/分享页”：把读书结果变成可传播的页面
