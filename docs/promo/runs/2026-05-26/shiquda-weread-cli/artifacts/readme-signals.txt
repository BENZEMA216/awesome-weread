./src/client.ts:3:export const DEFAULT_BASE_URL = "https://i.weread.qq.com/api/agent/gateway";
./src/client.ts:68:    const envApiKey = nonEmpty(process.env.WEREAD_API_KEY);
./src/client.ts:110:            message: "WeRead API key is not configured. Run: weread config set-key <wrk-...>"
./src/cli.ts:63:      hint: authConfigured ? "Ready." : "Set WEREAD_API_KEY=wrk-...",
./src/cli.ts:68:              message: "WeRead API key is not configured. Run: weread config set-key <wrk-...>"
./src/cli.ts:128:    if (!apiKey.startsWith("wrk-")) {
./src/cli.ts:129:      throw new Error("API key should look like wrk-...");
./README.md:35:4. 如果还没有 API Key，请指导我打开 https://weread.qq.com/r/weread-skills 获取 key，并用 weread config set-key "wrk-..." 完成登录配置。
./README.md:52:3. 在页面中获取 API Key，格式通常是 `wrk-...`。
./README.md:56:weread config set-key "wrk-..."
./README.md:68:export WEREAD_API_KEY="wrk-..."
./test/cli.test.ts:20:  const env = { ...process.env, WEREAD_CLI_CONFIG_DIR: dir, WEREAD_API_KEY: "" };
./test/cli.test.ts:23:    await execFileAsync(process.execPath, ["--import", "tsx", "src/cli.ts", "--json", "config", "set-key", "[REDACTED_WEREAD_API_KEY]"], { env });
./test/cli.test.ts:56:      WEREAD_API_KEY: "[REDACTED_WEREAD_API_KEY]",
./test/cli.test.ts:104:      WEREAD_API_KEY: "[REDACTED_WEREAD_API_KEY]",
./test/config.test.ts:14:    config.updateConfig({ apiKey: "[REDACTED_WEREAD_API_KEY]", baseUrl: "http://127.0.0.1:1", timeoutMs: 1234 });
./test/config.test.ts:18:      apiKey: "[REDACTED_WEREAD_API_KEY]",
./test/config.test.ts:22:    assert.equal(config.maskSecret("[REDACTED_WEREAD_API_KEY]"), "wrk-******oken");
./skills/weread/references/first-use.md:29:   wrk-...
./skills/weread/references/first-use.md:33:   weread config set-key "wrk-..."
./skills/weread/references/first-use.md:48:The environment variable `WEREAD_API_KEY` takes priority over the config file. This is useful for temporary overrides or CI:
./skills/weread/references/first-use.md:51:export WEREAD_API_KEY="wrk-..."
./skills/weread/references/first-use.md:65:- If an environment variable is set to the wrong key, it overrides the config file. Clear `WEREAD_API_KEY` and rerun `doctor`.
./test/client.test.ts:28:      apiKey: "[REDACTED_WEREAD_API_KEY]",
./test/client.test.ts:37:        authorization: "Bearer [REDACTED_WEREAD_API_KEY]",
./test/client.test.ts:62:      apiKey: "[REDACTED_WEREAD_API_KEY]",
./test/client.test.ts:96:      apiKey: "[REDACTED_WEREAD_API_KEY]",
./test/client.test.ts:123:      apiKey: "[REDACTED_WEREAD_API_KEY]",
