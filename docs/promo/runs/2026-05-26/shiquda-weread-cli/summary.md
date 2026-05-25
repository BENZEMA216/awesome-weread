# shiquda/weread-cli 体验记录（未完成：网络受限）

- 项目：https://github.com/shiquda/weread-cli
- 分类：命令行与 SDK
- 运行环境：macOS（本机）/ Node.js（计划）
- 运行日期：2026-05-26

## 运行方式

临时工作目录：

```bash
git clone https://github.com/shiquda/weread-cli /private/tmp/shiquda-weread-cli-run
cd /private/tmp/shiquda-weread-cli-run
```

本次在 `git clone` 阶段失败：当前环境无法解析 `github.com`（无代理时 DNS 失败；代理配置指向 `127.0.0.1:7897` 但不可达），因此无法继续安装与运行。

微信读书 AK 只通过已有的 `WEREAD_API_KEY` 环境变量或本机已配置的官方 Skill 传入。不要打印、复制到仓库或提交 AK。

## 最终产物

已提交产物：

- [clone 日志](./artifacts/git-clone.txt)

由于网络受限，本次未能生成 CLI 输出、导出文件或截图等“可验证最终效果”，因此该项目仍视为待补跑。

## 调用的数据

未实际调用（clone 阶段失败）。

## 体验判断

这是一个“命令行与 SDK”类项目，适合做快速导出/查询/批处理工作流；但必须先完成拉取代码与依赖安装后才能验证其是否真的基于官方 Agent Gateway / `WEREAD_API_KEY` 跑通完整链路。

## 限制与注意

- 受限于当前网络环境（DNS/代理不可用），无法从 GitHub 拉取源码与依赖。

## 小红书可用角度

- “把微信读书能力做成 CLI：一条命令导出你的阅读数据”
- “不靠 Cookie，官方 API Key 的命令行工作流长什么样”
- “阅读数据自动化：从手动截图到可复用的脚本/命令”
