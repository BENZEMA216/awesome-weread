# ZhongJiaqi/weread-to-obsidian 体验记录（离线 smoke test）

- 项目：https://github.com/ZhongJiaqi/weread-to-obsidian
- 分类：第三方同步
- 运行环境：macOS（Codex 本地自动化），git
- 运行日期：2026-05-26

## 运行方式

临时工作目录（计划，未执行）：

~~~bash
git clone https://github.com/ZhongJiaqi/weread-to-obsidian /tmp/ZhongJiaqi-weread-to-obsidian-run
cd /tmp/ZhongJiaqi-weread-to-obsidian-run
~~~

当前环境 DNS 解析失败（无法解析 `github.com`），无法获取源码并按仓库 README 实跑。本次改为做一个「Obsidian 侧落地格式」离线 smoke test：使用已归档的公开阅读统计作为输入，生成可直接放进 Obsidian Vault 的 Markdown 示例文件，方便后续在网络恢复后替换为真实脚本输出。

微信读书 AK（WEREAD_API_KEY）本次未使用、也未输出/落盘。

## 最终产物

已提交产物：

- [git clone 失败日志](./artifacts/git-clone.txt)
- [离线输入（公开阅读统计节选）](./artifacts/sample-input-public-metrics.json)
- [Obsidian Markdown 落地示例](./artifacts/obsidian-notes-demo.md)

## 调用的数据

本次离线 smoke test 未调用任何 WeRead 官方 Skill / Agent Gateway API。对应的真实同步链路通常会覆盖：

- `/user/notebooks`（拿到有笔记的书列表）
- `/review/list/mine`（按书拉取个人想法/笔记，分页）
- `/book/info`（补齐书籍元信息）

## 体验判断

这类「WeRead → Obsidian」同步工具的核心价值是把读书划线/想法落到本地文件系统，让检索、双链、日记式复盘与二次写作更顺滑；同时把“读书数据接口”与“知识库落地格式”解耦，后续可以按个人模板扩展（frontmatter、标签、章节结构、引用回链等）。

本次产物重点展示 Obsidian 侧文件长什么样、哪些字段适合作为 frontmatter，以及如何在不提交大段原始划线文本的前提下做一个可公开的同步结果样例。

## 限制与注意

- 当前环境无法访问 `github.com`，因此未能验证该仓库是否确实基于官方 Agent Gateway、也未能按其实际实现跑通。
- 后续网络恢复后建议的最小验收：成功拉取源码 → 配置 `WEREAD_API_KEY` → 真实导出 1 本书的笔记 → 对比本次 `obsidian-notes-demo.md` 的落地形态并补齐截图/终端摘要。

## 小红书可用角度

- 「把微信读书笔记变成 Obsidian 卡片」到底长什么样（frontmatter + 结构示例）
- 用官方 `WEREAD_API_KEY` 做同步：为什么比 cookie 抓取更稳定、更可复用
- 读书笔记落地后怎么用：检索、双链、复盘、二次写作
