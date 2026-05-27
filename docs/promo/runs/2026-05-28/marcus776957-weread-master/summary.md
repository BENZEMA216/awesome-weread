# marcus776957/weread-master 体验记录

- 项目：https://github.com/marcus776957/weread-master
- 分类：命令行与 SDK
- 运行环境：Python 3（本机 smoke test）
- 运行日期：2026-05-28

## 运行方式

说明：本次维护环境内 `github.com` DNS 无法解析，无法直接 `git clone` 拉取候选仓库代码进行完整 CLI 安装与运行。本次仅做「官方 Agent Gateway + API Key」链路的可验证 smoke test，并结合项目 README/源码片段确认其确实使用 `WEREAD_API_KEY`（`wrk-...`）与官方 `https://i.weread.qq.com/api/agent/gateway`。

在本仓库内直接运行（不需要额外依赖）：

```bash
cd docs/promo/runs/2026-05-28/marcus776957-weread-master/artifacts
python3 gateway-smoke-test.py | tee terminal-output.txt
```

微信读书 AK 只通过已有的 `WEREAD_API_KEY` 环境变量传入；脚本不会打印或写入 AK。

## 最终产物

已提交产物：

- [Smoke test 脚本](./artifacts/gateway-smoke-test.py)
- [Smoke test 输出](./artifacts/gateway-smoke-test-output.json)
- [终端输出](./artifacts/terminal-output.txt)
- [README 摘要命令清单](./artifacts/command-list.md)

本次产物不包含任何密钥或 Authorization header。由于沙箱环境限制（出站网络被禁止），本次 smoke test 未能拿到真实阅读数据，仅记录了可复现的网络阻断错误。

## 调用的数据

（计划调用，但本次被沙箱网络限制拦截）

- `/shelf/sync`：用于统计书架数量、完成/在读/未读概览（仅输出聚合计数）。
- `/readdata/detail`（`mode=overall`，`baseTime=0`）：用于读取总阅读时长、阅读天数等汇总字段（仅输出必要字段）。

## 体验判断

这是一个「全功能」取向的 WeRead CLI + Agent Skill：同一套能力既能让人直接在终端里查书架/统计/笔记，也能作为 agent 的“可调用工具层”。从 README 展示的命令覆盖面看，它比“只做一两类导出/画像”的工具更像一个通用工作台。

在同类项目里，它的差异点更偏「命令覆盖面 + 一站式」：既有健康检查（doctor），也包含书架、笔记/划线、阅读统计、推荐、目标等常用任务入口，适合做个人读书数据的统一 CLI 面板。

## 限制与注意

- 本次运行受限于网络环境：无法 `git clone` 完整仓库，未能按项目 README 走完整安装流程（如 `./weread.sh --install`）。
- 同时受沙箱限制：出站网络请求会报错 `<urlopen error [Errno 1] Operation not permitted>`，因此本次未能验证「官方 Agent Gateway 调用成功 + 返回真实数据」这一链路。
- 体验产物不代表项目所有 CLI 子命令都已逐个验证。

## 小红书可用角度

- 「把微信读书变成终端命令」：一个 `weread` 命令行就能看书架/阅读时长/高亮笔记。
- 「AI 读书助手不是 PPT」：用官方 `WEREAD_API_KEY` 直接拉真实阅读数据做分析。
- 「读书数据也能做体检」：doctor 一键检查 API Key 配置是否可用。
- 「想做自己的读书工作流？」：先有一个覆盖面足够全的 CLI，当底座更稳。
