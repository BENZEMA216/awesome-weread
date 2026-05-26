# alchaincyf/huashu-weread 体验记录

- 项目：https://github.com/alchaincyf/huashu-weread
- 分类：工作流与助手
- 运行环境：通用 Agent Skill（离线验证：Skill/workflow 文档与结构）
- 运行日期：2026-05-26

## 运行方式

临时工作目录：

```bash
cd /private/tmp/awesome-weread-backfill-workflows-cli-1779781183/alchaincyf-huashu-weread
# 本次仅离线导出 Skill/workflow 规则片段与结构信息
```

微信读书 AK 只通过已有的 `WEREAD_API_KEY` 环境变量或本机已配置的官方 Skill 传入；本次产物未保存 AK。

## 最终产物

已提交产物：

- [Skill 规则节选](./artifacts/skill-head.txt)
- [4 个 workflow 节选](./artifacts/workflows-head.txt)
- [仓库结构与 commit](./artifacts/repo-structure.txt)
- [官方信号摘录](./artifacts/readme-signals.txt)

说明：本次产物为离线可验证材料（规则片段与结构/信号摘录），不包含任何阅读数据与密钥。

## 调用的数据

项目文档声明基于官方 Agent Gateway（`POST https://i.weread.qq.com/api/agent/gateway`，使用 `WEREAD_API_KEY` / `wrk-...`），并以书架与笔记为核心信号来源（如 `/shelf/sync`、`/user/notebooks`）。

本次环境 DNS/外网受限，无法解析/访问 `i.weread.qq.com`，因此未进行真实接口调用；已完成离线结构与规则检查。

## 体验判断

它是“读书顾问 workflow 集合”的典型范式：把官方 Skill 的原子能力组织成 4 条可复用流程（`advisor` / `path` / `alchemy` / `review`），强调“书架 × 笔记”交叉信号，适合做推荐、路径规划、笔记提炼与阶段复盘。

## 限制与注意

- 本次仅离线检查规则与结构，未跑出真实导出/推荐结果。
- 完整体验需：可访问官方网关 + 运行时提供 `WEREAD_API_KEY`（不要写入仓库/日志/截图）。

## 小红书可用角度

- “读书顾问四件套”：推荐/路径/提炼/复盘一次配齐
- “书架×笔记交叉分析”：避免‘把读过的书当新书推荐’这种低级错误
- “把原子接口变 workflow”：从数据到建议，省掉大量提示词工程
