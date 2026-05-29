./src/sdk.ts:15: * const weread = new OpenWeRead({ apiKey: process.env.WEREAD_API_KEY });
./src/constants.ts:1:export const GATEWAY_URL = 'https://i.weread.qq.com/api/agent/gateway';
./CLAUDE.md:7:`openweread` 是微信读书开放 Skills（`./weread-skills/`）的 TypeScript SDK + CLI。所有功能最终都是把请求打到统一网关 `POST https://i.weread.qq.com/api/agent/gateway`，通过 body 中的 `api_name` 区分接口。SDK 发布为同名 npm 包，CLI 通过 `npm i -g openweread` 安装。
./CLAUDE.md:24:WEREAD_API_KEY=<YOUR_WEREAD_API_KEY> node dist/cli.js shelf       # 真实跑接口
./CLAUDE.md:36:- `Authorization: Bearer ${WEREAD_API_KEY}`；构造期 key 缺失即抛 `WereadAuthError`。
./src/client.ts:27:    const apiKey = options.apiKey ?? process.env.WEREAD_API_KEY ?? '';
./README.md:19:所有调用都依赖 `WEREAD_API_KEY`（格式 `[REDACTED_WEREAD_API_KEY]`）：
./README.md:21:获取并管理 WEREAD_API_KEY：https://weread.qq.com/r/weread-skills
./README.md:26:export WEREAD_API_KEY=<YOUR_WEREAD_API_KEY> apikey>
./README.md:53:const weread = new OpenWeRead({ apiKey: "" }); // 读取 WEREAD_API_KEY
./src/errors.ts:17:    message = '未设置 WEREAD_API_KEY，请获取 https://weread.qq.com/r/weread-skills，并执行: export WEREAD_API_KEY=<YOUR_WEREAD_API_KEY>',
./tests/client.test.ts:18:    delete process.env.WEREAD_API_KEY;
./tests/client.test.ts:30:    process.env.WEREAD_API_KEY = 'wrk-test';
./tests/client.test.ts:36:    const client = new WereadClient({ apiKey: 'wrk-x', fetch: fetchMock });
./tests/client.test.ts:45:    expect((init.headers as Record<string, string>).Authorization).toBe('Bearer wrk-x');
./tests/client.test.ts:57:    const client = new WereadClient({ apiKey: 'wrk-x', fetch: fetchMock });
./tests/client.test.ts:69:    const client = new WereadClient({ apiKey: 'wrk-x', fetch: fetchMock });
./tests/client.test.ts:79:    const client = new WereadClient({ apiKey: 'wrk-x', fetch: fetchMock });
./openweread-skills/SKILL.md:17:test -n "$WEREAD_API_KEY"
./openweread-skills/SKILL.md:26:If `WEREAD_API_KEY` is missing, ask the user to set it:
./openweread-skills/SKILL.md:29:export WEREAD_API_KEY=<YOUR_WEREAD_API_KEY>
./openweread-skills/SKILL.md:155:- Authentication errors usually mean `WEREAD_API_KEY` is missing, expired, or invalid.
./weread-skills/SKILL.md:33:POST https://i.weread.qq.com/api/agent/gateway
./weread-skills/SKILL.md:38:- Header：`Authorization: Bearer $WEREAD_API_KEY`
./weread-skills/SKILL.md:39:- `WEREAD_API_KEY` 从环境变量获取，格式 `[REDACTED_WEREAD_API_KEY]`
./weread-skills/SKILL.md:40:- 若未设置，提示用户：`export WEREAD_API_KEY=<YOUR_WEREAD_API_KEY>
./weread-skills/SKILL.md:50:curl -X POST "https://i.weread.qq.com/api/agent/gateway" \
./weread-skills/SKILL.md:51:  -H "Authorization: Bearer $WEREAD_API_KEY" \
