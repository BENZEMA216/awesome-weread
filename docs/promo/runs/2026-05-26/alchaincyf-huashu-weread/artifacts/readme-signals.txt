./README.md:154:- `WEREAD_API_KEY` 未设置 → 报错并告知怎么获取
./SKILL.md:16:- 必须先有 `WEREAD_API_KEY` 环境变量（在用户 shell 中 export）
./SKILL.md:17:- 所有 API 调用走 `POST https://i.weread.qq.com/api/agent/gateway`
./SKILL.md:105:| `WEREAD_API_KEY` 未设置 | 环境变量不存在或不是 `wrk-` 开头 | 报错：「请先 export WEREAD_API_KEY=<你的apikey>，从微信读书后台获取」，终止 |
./shared/shelf-cross-notes.md:10:API_KEY = os.environ["WEREAD_API_KEY"]
./shared/shelf-cross-notes.md:11:GATEWAY = "https://i.weread.qq.com/api/agent/gateway"
