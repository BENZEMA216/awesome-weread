# Llxsfd/weread-review-web 体验记录

- 项目：https://github.com/Llxsfd/weread-review-web
- 分类：工作流与助手
- 运行环境：Web（FastAPI + Vue3）/ MySQL 8+ / Python 3.9+ / Node.js 18+
- 运行日期：2026-06-01

## 运行方式

临时工作目录：

```bash
eval "$(scripts/network-preflight.sh --emit-env)"

git clone --depth 1 https://github.com/Llxsfd/weread-review-web /private/tmp/Llxsfd-weread-review-web-run
cd /private/tmp/Llxsfd-weread-review-web-run

# 后端
cd back
python -m venv .venv
source .venv/bin/activate
pip install -r requirements.txt
cp .env.example .env
# 在 Web UI 中填写你的 WeRead Skill API Key（不要写入仓库）
python -m uvicorn app.main:app --reload --host 127.0.0.1 --port 8000

# 前端（新终端）
cd front
npm install
npm run dev
```

本次运行受外部网络影响未能真正跑通：本机 shell 环境内 `github.com` 与 `i.weread.qq.com` 均 DNS 解析失败，无法克隆项目代码，也无法连通官方 Agent Gateway（因此无法生成 UI 截图或真实阅读数据产物）。

微信读书 AK 只通过已有的 `WEREAD_API_KEY` 环境变量或本机已配置的官方 Skill 传入。不要打印、复制到仓库或提交 AK。

## 最终产物

已提交产物：

- [环境变量证据](./artifacts/evidence.env.example)
- [克隆失败记录](./artifacts/git-clone-attempt.txt)
- [Agent Gateway 连通性记录](./artifacts/weread-gateway-connectivity.txt)

说明：本次产物不包含真实阅读数据；待网络恢复后应补跑一次，产出完整页面长截图（前端界面、今日复习/卡片列表等）与最小可分享的导出文件。

## 调用的数据

项目设计上基于官方 Agent Gateway（`https://i.weread.qq.com/api/agent/gateway`）拉取书架/划线/想法等数据，并在 Web UI 中用用户提供的 Skill API Key 进行同步。

由于本次无法连通网关，未产生真实调用记录。

## 体验判断

这是一个「把微信读书划线变成可复习资产」的前后端分离 Web 应用：主打划线卡片的日常复习、数据管理，并额外提供 Edge-TTS 的流式朗读体验；同时还支持可选的 BYOK AI 伴读/解析（README 提到会对用户提供的模型 Key 做加密存储）。

如果你平时在微信读书划线很多，但复盘效率低，这类“复习系统”形态比单次导出更贴近长期使用。

## 限制与注意

- 运行依赖外部网络（克隆仓库 + 访问官方 Agent Gateway），以及本地 MySQL。
- AI 伴读需要额外的模型 Key（BYOK），且需要理解其存储/加密与部署边界。
- 本次外部网络 DNS 失败，导致无法完成真正体验与截图留存（见产物里的失败记录）。

## 小红书可用角度

- 「划线太多记不住？把微信读书变成每日复习系统」
- 「读书划线 + 流式朗读：把旧句子重新亮起来」
- 「Web 版微信读书复盘：书架/划线/想法一站式管理」
- 「用官方 Skill API Key 同步微信读书数据：不靠 cookie，更安全」
- 「把碎片阅读痕迹变成知识资产：复习 + AI 伴读」
