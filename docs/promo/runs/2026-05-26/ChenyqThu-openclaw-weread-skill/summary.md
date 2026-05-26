# ChenyqThu/openclaw-weread-skill 体验记录

## 基本信息

- 项目地址：https://github.com/ChenyqThu/openclaw-weread-skill
- 分类：Skill 安装包
- 本次状态：已体验（范围风险）
- 体验日期：2026-05-26

## 运行方式

```bash
/opt/homebrew/bin/python3.11 scripts/weread_api.py verify
```

## 本次调用/检查的数据

本地执行验证入口，确认它依赖 ~/.weread/cookie 而非官方 Agent Gateway。

本轮没有使用微信读书 AK，也没有提交 Cookie、会话文件或任何第三方凭据。

## 产物

- [terminal-output.txt](./artifacts/terminal-output.txt)
- [skill-metadata.txt](./artifacts/skill-metadata.txt)
- [repo-structure.txt](./artifacts/repo-structure.txt)

## 体验判断

作为 OpenClaw 时代的技能移植样本，它展示了书架、划线、笔记、热门书评等能力如何包装成 agent 命令。

## 限制与问题

该项目依赖浏览器 Cookie；按当前 official-Skill-only 标准，建议后续复核是否应移出主 README 或单独标注为历史项目。

范围风险：README/SKILL 明确写明 Cookie 认证，不是官方 wrk API Key 方案。

## 小红书角度

- OpenClaw cookie 版微信读书 Skill：作为 OpenClaw 时代的技能移植样本，它展示了书架、划线、笔记、热门书评等能力如何包装成 agent 命令。
- 体验重点不是 UI，而是 agent 能否按文档/命令稳定接入微信读书能力。
- 这个项目暴露了早期 cookie 方案和当前 official-Skill-only 标准之间的边界，适合做一次收录复核。
- 对用户来说，关键是把微信读书数据从“只能在 App 里看”变成 agent 可调用的素材。
