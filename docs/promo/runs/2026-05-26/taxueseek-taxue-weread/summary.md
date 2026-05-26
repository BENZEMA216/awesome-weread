# taxueseek/taxue-weread 体验记录

## 基本信息

- 项目地址：https://github.com/taxueseek/taxue-weread
- 分类：Skill 安装包
- 本次状态：已体验
- 体验日期：2026-05-26

## 运行方式

```bash
WEREAD_API_KEY=$WEREAD_API_KEY node bin/taxue-weread.js list-apis
```

## 本次调用/检查的数据

使用现有 WEREAD_API_KEY 调用 list-apis，验证官方 Agent Gateway API 清单可以返回。

微信读书 AK 只通过已有的 `WEREAD_API_KEY` 环境变量传入；产物中没有保存 AK。

## 产物

- [terminal-output.txt](./artifacts/terminal-output.txt)
- [skill-metadata.txt](./artifacts/skill-metadata.txt)
- [repo-structure.txt](./artifacts/repo-structure.txt)

## 体验判断

它把官方 Skill 拆成更适合 agent 按需调用的 CLI，减少每轮读完整 Skill 文档的上下文成本。

## 限制与问题

本次只跑 API 清单 smoke test，没有导出用户具体书架/划线；后续可针对 report/mirror/export 再做可视化产物。

符合当前 Awesome WeRead 的官方 Skill / Agent Gateway 收录标准。

## 小红书角度

- 官方 Skill 的 CLI + 缓存优化版：它把官方 Skill 拆成更适合 agent 按需调用的 CLI，减少每轮读完整 Skill 文档的上下文成本。
- 体验重点不是 UI，而是 agent 能否按文档/命令稳定接入微信读书能力。
- 它适合作为官方 Skill 生态里的基础能力或二次封装样本。
- 对用户来说，关键是把微信读书数据从“只能在 App 里看”变成 agent 可调用的素材。
