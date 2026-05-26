# zhongyi-byte/openclaw-weread-skill 体验记录

## 基本信息

- 项目地址：https://github.com/zhongyi-byte/openclaw-weread-skill
- 分类：Skill 安装包
- 本次状态：已体验（范围风险）
- 体验日期：2026-05-26

## 运行方式

```bash
python3 scripts/weread_export.py --help
```

## 本次调用/检查的数据

本地执行 CLI help，确认导出全部、最近一周、单本书、Markdown/JSON 输出和 Obsidian 同步参数。

本轮没有使用微信读书 AK，也没有提交 Cookie、会话文件或任何第三方凭据。

## 产物

- [terminal-output.txt](./artifacts/terminal-output.txt)
- [skill-metadata.txt](./artifacts/skill-metadata.txt)
- [repo-structure.txt](./artifacts/repo-structure.txt)

## 体验判断

它把微信读书划线/想法导出包装成 OpenClaw Skill，输出面向 Markdown / Obsidian。

## 限制与问题

项目配置要求 wr_vid/wr_skey Cookie；未使用用户 AK 调官方 Agent Gateway。建议后续复核收录范围。

范围风险：Cookie 导出方案，不是当前官方 Agent Gateway 项目。

## 小红书角度

- OpenClaw 笔记导出 Skill：它把微信读书划线/想法导出包装成 OpenClaw Skill，输出面向 Markdown / Obsidian。
- 体验重点不是 UI，而是 agent 能否按文档/命令稳定接入微信读书能力。
- 这个项目暴露了早期 cookie 方案和当前 official-Skill-only 标准之间的边界，适合做一次收录复核。
- 对用户来说，关键是把微信读书数据从“只能在 App 里看”变成 agent 可调用的素材。
