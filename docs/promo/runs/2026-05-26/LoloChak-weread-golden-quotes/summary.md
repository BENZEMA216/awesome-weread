# LoloChak/weread-golden-quotes 体验记录

## 基本信息

- 项目地址：https://github.com/LoloChak/weread-golden-quotes
- 分类：桌面挂件与可视化
- 本次状态：已跑通
- 体验日期：2026-05-26

## 运行方式

```bash
git clone --depth 1 https://github.com/LoloChak/weread-golden-quotes.git
cd weread-golden-quotes
python3 scripts/fetch_quotes.py --max-books 20 --json -o ./output
```

微信读书 AK 只通过已有的 `WEREAD_API_KEY` 环境变量传入。运行日志已做脱敏处理，没有打印、复制到仓库或提交 AK。

## 本次调用的数据

- 通过官方 Agent Gateway：`https://i.weread.qq.com/api/agent/gateway`
- 调用能力：`/user/notebooks`、`/book/bookmarklist`、`/review/list/mine`
- 处理范围：前 20 本有笔记的书
- 生成结果：296 条金句，其中 293 条来自划线、3 条来自想法，覆盖 19 本书

## 产物

- [daily-golden-quotes.html](./artifacts/daily-golden-quotes.html)：项目生成的网页壳
- [daily-golden-quotes-fullpage.jpg](./artifacts/daily-golden-quotes-fullpage.jpg)：完整页面截图，尺寸 1280x2104
- [public-metrics.json](./artifacts/public-metrics.json)：公开安全版统计指标
- [terminal-output.txt](./artifacts/terminal-output.txt)：脱敏后的运行日志

没有提交项目生成的完整 `quotes_data.js/json`，因为里面包含 296 条完整划线/想法原文，属于大批量原始摘录。当前归档保留可验证截图、HTML 壳、日志和公开指标。

## 体验判断

这个项目的价值很清楚：它不是单纯导出笔记，而是把划线筛选、分类、思考问题和页面审美组合成一个可分享的“每日金句”页面。宣纸质感、宋体/文楷字体、日期种子随机和收藏功能都比较适合做小红书截图或个人主页素材。

对 Awesome WeRead 来说，它适合放在「桌面挂件与可视化」分类：输入是官方微信读书 Agent Gateway 数据，输出是面向展示和分享的网页。

## 限制与问题

- README 同时提到通过浏览器开发者工具获取 token 的方式；实际代码使用的是官方 Agent Gateway 和 `WEREAD_API_KEY`，因此本次仍按官方 Skill 项目收录。
- 运行过程中 Agent Gateway 多次返回“微信读书 Skill 有新版本”的升级提示，但不影响本次生成。
- 页面完整数据文件未提交；如果要在公开仓库里保留可交互页面，需要后续做一个只含少量公开样例的 sample 数据版本。

## 小红书角度

- “把微信读书划线自动筛成每日金句，直接生成宣纸风网页。”
- “不只是导出笔记，还会给每条金句配一个反思问题。”
- “20 本书跑出了 296 条候选金句，适合做每日阅读卡片。”
- “页面是可以截图分享的成品，不需要自己再排版。”
- “适合把长期划线变成每天可见、可收藏、可复盘的内容资产。”
