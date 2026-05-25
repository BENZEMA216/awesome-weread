# lucis-yg/weread-dashboard 体验记录（未完成：网络受限）

- 项目：https://github.com/lucis-yg/weread-dashboard
- 分类：桌面挂件与可视化
- 运行环境：macOS（Codex 本地自动化），git
- 运行日期：2026-05-25

## 运行方式

临时工作目录（计划）：

```bash
git clone https://github.com/lucis-yg/weread-dashboard /tmp/lucis-yg-weread-dashboard-run
cd /tmp/lucis-yg-weread-dashboard-run
```

本次实际在 `git clone` 阶段即失败（见下方产物）。当前环境对 GitHub 的网络访问被代理配置影响（指向 `127.0.0.1:7897`），且清理代理环境变量后仍出现 DNS 解析失败，导致无法继续安装/运行。

微信读书 AK（`WEREAD_API_KEY`）本次未使用、也未输出/落盘。

## 最终产物

已提交产物：

- [git clone 失败日志](./artifacts/git-clone.txt)

由于未能拉取源码，本次没有生成任何可视化页面/截图。待网络恢复后应优先补跑并补齐完整长截图（如有 UI）。

## 调用的数据

本次未调用任何 WeRead 官方 Skill / Agent Gateway API（未能运行到该阶段）。

## 体验判断

该项目在 Awesome WeRead 中归类为「仪表盘/可视化」方向，预期价值是把阅读数据以更直观的面板方式展示、便于分享与复盘；但本次受限于无法获取源码，暂无法验证其是否确实基于官方 Agent Gateway / `WEREAD_API_KEY` 工作流。

## 限制与注意

- 当前机器无法访问 GitHub（代理端口 `127.0.0.1:7897` 不可用；清理代理后仍出现域名解析问题），导致无法完成体验跑通。
- 待网络恢复后：需要重新 clone，再按项目 README 的 quickstart 运行，并在不泄露 `WEREAD_API_KEY` 的前提下产出可分享截图/报告。

## 小红书可用角度

- 「把微信读书数据做成仪表盘」到底能看到哪些维度？
- 用官方 `WEREAD_API_KEY` 一键同步后，能生成哪些可视化卡片？
- 阅读复盘：哪些图最适合做分享（长图/海报/仪表盘截图）？
