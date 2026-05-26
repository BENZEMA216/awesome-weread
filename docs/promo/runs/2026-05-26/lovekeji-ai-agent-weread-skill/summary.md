# lovekeji-ai/agent-weread-skill 体验记录

## 基本信息

- 项目地址：https://github.com/lovekeji-ai/agent-weread-skill
- 分类：Skill 安装包
- 本次状态：已体验（范围风险）
- 体验日期：2026-05-26

## 运行方式

```bash
python3 scripts/weread_export.py --help && python3 scripts/weread_init.py --help
```

## 本次调用/检查的数据

本地执行导出与初始化脚本 help，验证 recent-day 过滤、max-books、扫码登录和输出目录配置参数。

本轮没有使用微信读书 AK，也没有提交 Cookie、会话文件或任何第三方凭据。

## 产物

- [terminal-output.txt](./artifacts/terminal-output.txt)
- [skill-metadata.txt](./artifacts/skill-metadata.txt)
- [repo-structure.txt](./artifacts/repo-structure.txt)

## 体验判断

它在 cookie 方案上补了初始化向导、自动续期、最近 N 天 digest，产品化程度比普通脚本更高。

## 限制与问题

依赖 wr_skey/wr_rt 续期与扫码登录，不属于当前官方 wrk API Key 方案。建议后续复核是否继续放在主列表。

范围风险：Cookie/扫码登录方案，不是官方 Agent Gateway。

## 小红书角度

- 带续期和初始化向导的笔记导出 Skill：它在 cookie 方案上补了初始化向导、自动续期、最近 N 天 digest，产品化程度比普通脚本更高。
- 体验重点不是 UI，而是 agent 能否按文档/命令稳定接入微信读书能力。
- 这个项目暴露了早期 cookie 方案和当前 official-Skill-only 标准之间的边界，适合做一次收录复核。
- 对用户来说，关键是把微信读书数据从“只能在 App 里看”变成 agent 可调用的素材。
