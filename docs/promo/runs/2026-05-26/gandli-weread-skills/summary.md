# gandli/weread-skills 体验记录

## 基本信息

- 项目地址：https://github.com/gandli/weread-skills
- 分类：Skill 安装包
- 本次状态：已体验
- 体验日期：2026-05-26

## 运行方式

```bash
curl -X POST https://i.weread.qq.com/api/agent/gateway -d {"api_name":"/_list"}
```

## 本次调用/检查的数据

使用现有 WEREAD_API_KEY 调用官方 Agent Gateway 的 /_list 能力，验证接口清单可返回。

微信读书 AK 只通过已有的 `WEREAD_API_KEY` 环境变量传入；产物中没有保存 AK。

## 产物

- [gateway-list-apis.txt](./artifacts/gateway-list-apis.txt)
- [skill-metadata.txt](./artifacts/skill-metadata.txt)
- [repo-structure.txt](./artifacts/repo-structure.txt)

## 体验判断

它是最接近官方原包的基准项目，适合作为其他封装和二创项目的对照样本。

## 限制与问题

本项目本身是 Skill 文档包，不生成独立 UI；本次产物以接口能力清单、Skill 元数据和仓库结构为主。

符合当前 Awesome WeRead 的官方 Skill / Agent Gateway 收录标准。

## 小红书角度

- 官方 Skill 包的自动同步镜像：它是最接近官方原包的基准项目，适合作为其他封装和二创项目的对照样本。
- 体验重点不是 UI，而是 agent 能否按文档/命令稳定接入微信读书能力。
- 它适合作为官方 Skill 生态里的基础能力或二次封装样本。
- 对用户来说，关键是把微信读书数据从“只能在 App 里看”变成 agent 可调用的素材。
