./test.ts:3://   Add WEREAD_API_KEY=<your key> to .env, then:
./test.ts:18:const WEREAD_KEY = process.env.WEREAD_API_KEY ?? "";
./test.ts:25:  console.error("ERROR: WEREAD_API_KEY not set. Add it to .env");
./server/index.ts:49:    if (!wereadKey || !wereadKey.startsWith("wrk-")) {
./server/index.ts:50:      return c.json({ error: "无效的 API Key 格式，应以 wrk- 开头" }, 400);
./server/index.ts:65:  if (!wereadKey || !wereadKey.startsWith("wrk-")) return c.json({ error: "无效的 WeRead API Key" }, 400);
./lib/weread.ts:4:const GATEWAY = "https://i.weread.qq.com/api/agent/gateway";
./public/index.html:820:        <li>用微信扫码登录 → 复制页面上的 API Key（以 <code>wrk-</code> 开头）</li>
./public/index.html:830:          <input id="manual-key" type="text" placeholder="[REDACTED_WEREAD_API_KEY]" class="manual-input" />
./public/index.html:905:    const match = (text || "").trim().match(/wrk-[A-Za-z0-9_-]+/);
./public/index.html:909:      showError("剪贴板里没有发现 API Key（应以 wrk- 开头）。请展开下方手动粘贴。");
./public/index.html:918:  if (!v.startsWith("wrk-")) { showError("Key 应以 wrk- 开头"); return; }
./deploy/DEPLOY.md:82:  -d '{"wereadKey":"wrk-真实key测试一下"}'                              # {"totalBookCount": ...}
