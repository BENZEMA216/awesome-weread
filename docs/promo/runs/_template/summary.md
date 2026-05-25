# owner/repo 体验记录

- 项目：https://github.com/owner/repo
- 分类：工作流与助手 / 命令行与 SDK / MCP 服务 / 第三方同步 / 桌面挂件与可视化 / Skill 安装包
- 运行环境：填写实际 runtime
- 运行日期：YYYY-MM-DD

## 运行方式

临时工作目录：

```bash
git clone https://github.com/owner/repo /tmp/owner-repo-run
cd /tmp/owner-repo-run
# 填写实际安装、构建、运行命令
```

微信读书 AK 只通过已有的 `WEREAD_API_KEY` 环境变量或本机已配置的官方 Skill 传入。不要打印、复制到仓库或提交 AK。

## 最终产物

已提交产物：

- [截图或页面](./artifacts/example.jpg)
- [生成文件](./artifacts/example.md)

说明这些产物是否包含真实阅读数据、是否适合公开分享，以及没有提交哪些敏感内容。

## 调用的数据

列出实际跑到的官方 Agent Gateway / Skill API，或项目明确调用的数据范围：

- `/shelf/sync`
- `/readdata/detail`
- `/user/notebooks`

给出聚合结果，优先写统计量、数量、文件大小、页面数量、构建结果。可以提交用户授权的阅读相关产物；永远不要提交密钥、Authorization header、`.env` 或长篇原始划线合集。

## 体验判断

用 1-3 段说明这个项目的真实价值、适用场景，以及它和其他同类项目的差异。

## 限制与注意

- 填写运行失败、额外依赖、模型 key、第三方服务账号、部署要求、隐私发布边界。

## 小红书可用角度

- 写 3-5 条可以直接改成小红书图文标题或正文的角度。
