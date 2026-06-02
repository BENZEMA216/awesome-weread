# a3100821009/weread-to-notion 体验记录

- 项目：https://github.com/a3100821009/weread-to-notion
- 分类：第三方同步
- 运行环境：Python / Notion
- 运行日期：2026-06-02

## 运行方式

临时工作目录：

```bash
eval "$(scripts/network-preflight.sh --emit-env)"

git clone --depth 1 https://github.com/a3100821009/weread-to-notion /private/tmp/a3100821009-weread-to-notion-run
cd /private/tmp/a3100821009-weread-to-notion-run

# README 未能拉取到本地；按候选证据推测的最小路径应是：
# export WEREAD_API_KEY=...
# export NOTION_TOKEN=...
# export NOTION_DATABASE_ID=...
# python main.py
```

本次先完成了可核验的本地归档：保留 discovery bot 候选证据，并实际记录了 GitHub 克隆与官方 Agent Gateway 连通性检查。外部网络当前无法解析 `github.com` 和 `i.weread.qq.com`，所以没能进入源码阅读、依赖安装、Notion 写入或真实阅读数据同步阶段。

微信读书 AK 只通过已有的 `WEREAD_API_KEY` 环境变量或本机已配置的官方 Skill 传入。不要打印、复制到仓库或提交 AK。

## 最终产物

已提交产物：

- [候选证据](./artifacts/candidate-evidence.md)
- [克隆失败记录](./artifacts/git-clone-attempt.txt)
- [Agent Gateway 连通性记录](./artifacts/weread-gateway-connectivity.txt)

说明：本次产物不包含真实阅读数据，也没有 Notion 页面截图。待网络恢复后，最小补跑目标应是：拉取源码、确认 README 的真实启动命令、用官方 `WEREAD_API_KEY` 同步至少 1 本书 / 1 组划线到 Notion，并补一张最终页面或数据库视图截图。

## 调用的数据

从 bot 候选证据看，项目明确依赖微信读书官方 Agent Gateway 提供的 `wrk-...` API Key，并计划把以下数据同步到 Notion：

- 书架
- 划线
- 想法
- 阅读统计

本次只完成了连接验证，没有产生真实的 Agent Gateway 请求日志或 Notion 写入结果。

## 体验判断

这个项目的价值很直白：不是做单次导出，而是把微信读书里的核心阅读资产整理进 Notion，方便继续做数据库管理、筛选、回顾和二次加工。它和纯 Markdown 导出类项目的差异，在于目标就是把阅读数据变成可维护的知识库条目。

当前这次归档的可信度来自两部分：一是 bot 候选文件里留下了官方 API Key 信号，二是我们把真实的外部网络阻塞单独落盘了。也就是说，这条收录已经有明确证据链，但还缺一次“源码 + 真实同步 + 结果截图”的补跑。

## 限制与注意

- 本次外部网络 DNS 故障，导致无法克隆 GitHub 仓库，也无法解析官方 Agent Gateway。
- 项目实际跑通大概率还需要 Notion 凭证与数据库 ID；这些都只能在运行时注入，不能提交进仓库。
- 由于没有拿到源码 README，本次命令区块里的启动步骤只保留了候选证据能支持的最小推断，后续应以仓库实际文档为准。

## 小红书可用角度

- 「把微信读书直接同步进 Notion：书架、划线、想法一次归档」
- 「官方 API Key 路线做阅读知识库，不再靠 cookie 抓取」
- 「Notion 党最需要的微信读书工作流：读完不散，直接进数据库」
- 「这类项目最适合做什么：阅读统计 + 重点摘录 + 长期复盘」
- 「这次没跑通也值得记：连阻塞点都能留成可复查证据」
