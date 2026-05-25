# rayford295/rayford-knowledge-atlas 体验记录

- 项目：https://github.com/rayford295/rayford-knowledge-atlas
- 分类：第三方同步
- 运行环境：静态知识图谱网站 + Obsidian 风格 Markdown vault
- 运行日期：2026-05-25

## 运行方式

临时工作目录：

```bash
git clone https://github.com/rayford295/rayford-knowledge-atlas /tmp/rayford-knowledge-atlas-run
cd /tmp/rayford-knowledge-atlas-run
npm run weread:update
npm run build
npm run verify
python3 -m http.server 8127 --bind 127.0.0.1
```

微信读书 AK 只通过已有的 `WEREAD_API_KEY` 环境变量传入。没有打印、复制到仓库或提交 AK。

## 最终产物

这次补充了可直接查看的公开安全截图：

- [首页知识图谱截图](./artifacts/screenshot-home.jpg)
- [阅读输入页截图](./artifacts/screenshot-readings.jpg)
- [阅读顾问页截图](./artifacts/screenshot-advisor.jpg)

也提交了项目生成的阅读数据产物：

- [public-reading-index.json](./artifacts/data/public-reading-index.json)
- [reading-intelligence.json](./artifacts/data/reading-intelligence.json)

用户已明确授权提交阅读相关产物，因此这次把真实阅读 metadata 和 reading intelligence JSON 一并放进 `artifacts/data/`。仍然没有提交微信读书 AK、Authorization header 或 `.env`。

## 调用的数据

项目通过 `scripts/fetch-weread.js` 调用官方 Agent Gateway，生成公开安全的阅读输入层。

实际调用的微信读书接口：

- `/shelf/sync`
- `/user/notebooks`
- `/readdata/detail`

脱敏聚合结果：

- 可见书架记录：118 本电子书、0 本有声书、1 个公众号书架桶
- 笔记本概览：40 本有笔记的书，949 条笔记/划线信号
- 项目生成的公开阅读节点：12 个
- public index 里的笔记信号：872 条 note signal，3 条 bookmark signal
- reading intelligence：17 个 true reads，81 个 shelf-only items，0 个 hidden deep reads
- 本次年内阅读信号：42 天，21h 30m
- 阅读深度分层：9 个 heavy、1 个 committed、14 个 light、16 个 skim
- atlas build 输出：34 个图谱节点，其中 17 个 output、12 个 input、5 个 bridge-question

## 体验判断

这个项目不是普通的笔记导出器。它把微信读书变成一个 input-output 知识图谱的输入层：阅读记录先变成图谱节点，再连接到问题、论文、仓库和公开工作流。

最强的产品角度是“阅读作为研究基础设施”。它适合把书、论文、项目和长期问题放到一个公开主页里，展示一个人的输入如何塑造输出。

## 限制与注意

- 项目写出的数据是 public-safe metadata，但依然是用户真实阅读历史，发布前需要人工审一遍。
- `npm run verify` 结构校验通过，但会提示部分 bridge question 还缺 input/output 连接；这属于内容完整度问题，不是运行失败。
- 主题推断规则偏作者个人知识图谱，fork 后需要改成自己的领域词表。

## 小红书可用角度

- “这个项目把微信读书变成知识图谱的输入层，而不是只导出笔记。”
- “书、论文、仓库、研究问题可以放在一张图里看：哪些阅读在塑造你的输出。”
- “它刻意不发布原始划线和私密想法，只保留元数据、数量和主题信号。”
- “适合做个人主页、研究主页、创作者知识库，而不是传统读书报告。”
- “Awesome WeRead 这类收录可以分成两类：数据同步型和个人知识系统型。”
