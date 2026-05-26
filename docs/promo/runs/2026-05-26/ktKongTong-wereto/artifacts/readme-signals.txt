./packages/weread-api/src/client.ts:35:const DEFAULT_BASE_URL = "https://i.weread.qq.com/api/agent/gateway";
./packages/weread-api/src/client.ts:214:  const apiKey = options.apiKey ?? process.env.WEREAD_API_KEY;
./packages/weread-api/README.md:14:export WEREAD_API_KEY=[REDACTED_WEREAD_API_KEY]
./packages/weread-api/README.md:43:- 默认 `prefix` 为 `api/agent/gateway`
./packages/weread-api/README.md:45:- 默认读取 `WEREAD_API_KEY`
./apps/web/src/components/settings-dialog.tsx:499:            <DarkInput id="settings-api-key" type="password" value={apiKey} onChange={(event) => onApiKeyChange(event.target.value)} placeholder="wrk-..." />
