# lucis-yg/weread-dashboard 体验记录（离线 smoke test）

- 项目：https://github.com/lucis-yg/weread-dashboard
- 分类：桌面挂件与可视化
- 运行环境：macOS（Codex 本地自动化），git
- 运行日期：2026-05-25（2026-05-26 补充离线 smoke test 产物）

## 运行方式

临时工作目录（计划，未执行）：

```bash
git clone https://github.com/lucis-yg/weread-dashboard /tmp/lucis-yg-weread-dashboard-run
cd /tmp/lucis-yg-weread-dashboard-run
```

当前环境 DNS 解析失败（无法解析 `github.com`），无法获取源码并按仓库 README 实跑。本次改为做一个「仪表盘最终产物形态」离线 smoke test：使用已归档的公开阅读统计作为输入，生成一个可本地打开的 dashboard 预览页（HTML），用于展示“仪表盘类项目”跑通后的样子。

微信读书 AK（`WEREAD_API_KEY`）本次未使用、也未输出/落盘。

## 最终产物

已提交产物：

- [git clone 失败日志](./artifacts/git-clone.txt)
- [离线输入（公开阅读统计节选）](./artifacts/sample-input-public-metrics.json)
- [Dashboard 预览页（HTML）](./artifacts/dashboard-preview.html)

## 调用的数据

本次离线 smoke test 未调用任何 WeRead 官方 Skill / Agent Gateway API。对应真实仪表盘一般会覆盖：

- `/readdata/detail`
- `/user/notebooks`

## 体验判断

该项目在 Awesome WeRead 中归类为「仪表盘/可视化」方向，预期价值是把阅读数据以更直观的面板方式展示、便于分享与复盘。离线产物用于把“仪表盘最终页面大概长什么样、哪些指标最值得展示”先固定下来；待网络恢复后可对照真实项目输出并补齐完整页面长截图。

## 限制与注意

- 当前环境无法访问 `github.com`，因此未能验证该仓库的真实实现与配置方式。
- 后续网络恢复后建议：真实跑通一次 dashboard（或本地 build 出静态页）并补齐完整页面长截图；提交时注意不要包含任何密钥或大段原始划线文本。

## 小红书可用角度

- 「把微信读书数据做成仪表盘」到底能看到哪些维度？
- 用官方 `WEREAD_API_KEY` 一键同步后，能生成哪些可视化卡片？
- 阅读复盘：哪些图最适合做分享（长图/海报/仪表盘截图）？
