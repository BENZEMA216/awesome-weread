./src/services/wereadService.js:47:            throw new Error('WEREAD_API_KEY 未配置，请检查环境变量');
./README.md:47:WEREAD_API_KEY=<YOUR_WEREAD_API_KEY>
./README.md:49:GATEWAY_URL=https://i.weread.qq.com/api/agent/gateway
./README.md:73:- API Key 必须以 wrk- 开头
./src/config/index.js:20:        apiKey: process.env.WEREAD_API_KEY,
./src/config/index.js:21:        gatewayUrl: process.env.GATEWAY_URL || 'https://i.weread.qq.com/api/agent/gateway',
./src/middlewares/auth.js:15:            hint: '请设置 WEREAD_API_KEY 环境变量',
./src/middlewares/auth.js:22:    if (!apiKey.startsWith('wrk-')) {
./src/middlewares/auth.js:23:        console.warn('[Auth] API Key 格式可能不正确，应该以 wrk- 开头');
