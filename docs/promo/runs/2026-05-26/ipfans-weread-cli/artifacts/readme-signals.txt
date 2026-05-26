./README.md:10:2. 访问 [WeRead API Key 管理页面](https://weread.qq.com/r/weread-skills) 创建 API Key，记录生成的 `[REDACTED_WEREAD_API_KEY]` 字符串。
./README.md:18:> 从 GitHub 仓库 `ipfans/weread-cli` 的 release 页面下载最新版本的二进制文件，根据当前系统的 OS 和架构选择正确的压缩包，解压后将 `weread-cli` 安装到系统 PATH 中（如 `/usr/local/bin` 或 `~/.local/bin`）。然后询问我的 API Key，将其写入 `weread-cli` 二进制所在目录的 `weread.env` 文件中，格式为 `WEREAD_API_KEY=<key>`。
./README.md:49:2. `WEREAD_API_KEY` 环境变量
./README.md:55:export WEREAD_API_KEY=[REDACTED_WEREAD_API_KEY]
./README.md:58:echo "WEREAD_API_KEY=[REDACTED_WEREAD_API_KEY]" > $(dirname $(which weread-cli))/weread.env
./skills/search/SKILL.md:62:- 如果返回认证错误，提示检查 `WEREAD_API_KEY` 配置
./skills/weread/SKILL.md:16:- `WEREAD_API_KEY` 必须通过以下任一方式配置（按优先级排列）：
./skills/weread/SKILL.md:18:  2. `WEREAD_API_KEY` 环境变量
./skills/weread/SKILL.md:33:- 如果返回认证错误，提示用户检查 `WEREAD_API_KEY` 是否正确配置（可写入 `weread-cli` 所在目录的 `weread.env` 文件）
./skills/notes/SKILL.md:97:- 如果返回认证错误，提示检查 `WEREAD_API_KEY` 配置
./internal/api/client_test.go:17:	key, err := ResolveAPIKey("[REDACTED_WEREAD_API_KEY]")
./internal/api/client_test.go:21:	if key != "[REDACTED_WEREAD_API_KEY]" {
./internal/api/client_test.go:22:		t.Errorf("got %q, want %q", key, "[REDACTED_WEREAD_API_KEY]")
./internal/api/client_test.go:27:	t.Setenv("WEREAD_API_KEY", "[REDACTED_WEREAD_API_KEY]")
./internal/api/client_test.go:32:	if key != "[REDACTED_WEREAD_API_KEY]" {
./internal/api/client_test.go:33:		t.Errorf("got %q, want %q", key, "[REDACTED_WEREAD_API_KEY]")
./internal/api/client_test.go:40:	os.WriteFile(envFile, []byte("WEREAD_API_KEY=[REDACTED_WEREAD_API_KEY]\n"), 0644)
./internal/api/client_test.go:46:	t.Setenv("WEREAD_API_KEY", "")
./internal/api/client_test.go:47:	os.Unsetenv("WEREAD_API_KEY")
./internal/api/client_test.go:53:	if key != "[REDACTED_WEREAD_API_KEY]" {
./internal/api/client_test.go:54:		t.Errorf("got %q, want %q", key, "[REDACTED_WEREAD_API_KEY]")
./internal/api/client_test.go:61:	os.WriteFile(envFile, []byte("WEREAD_API_KEY=[REDACTED_WEREAD_API_KEY]\n"), 0644)
./internal/api/client_test.go:63:	os.Unsetenv("WEREAD_API_KEY")
./internal/api/client_test.go:66:	val := os.Getenv("WEREAD_API_KEY")
./internal/api/client_test.go:67:	t.Cleanup(func() { os.Unsetenv("WEREAD_API_KEY") })
./internal/api/client_test.go:69:	if val != "[REDACTED_WEREAD_API_KEY]" {
./internal/api/client_test.go:70:		t.Errorf("got %q, want %q", val, "[REDACTED_WEREAD_API_KEY]")
./internal/api/client_test.go:80:	t.Setenv("WEREAD_API_KEY", "")
./internal/api/client_test.go:81:	os.Unsetenv("WEREAD_API_KEY")
./internal/api/client_test.go:95:		if r.Header.Get("Authorization") != "Bearer wrk-test" {
./internal/api/client_test.go:104:	c := NewClient("wrk-test", WithBaseURL(srv.URL))
./internal/api/client_test.go:133:	c := NewClient("wrk-test", WithBaseURL(srv.URL))
./internal/api/client_test.go:153:	c := NewClient("wrk-test", WithBaseURL(srv.URL))
./internal/api/client_test.go:177:	c := NewClient("wrk-test", WithBaseURL(srv.URL))
./internal/api/client_test.go:190:	c := NewClient("wrk-test", WithBaseURL(srv.URL))
./skills/discover/SKILL.md:62:- 如果返回认证错误，提示检查 `WEREAD_API_KEY` 配置
./skills/shelf/SKILL.md:46:- 如果返回认证错误，提示检查 `WEREAD_API_KEY` 配置
./skills/readdata/SKILL.md:57:- 如果返回认证错误，提示检查 `WEREAD_API_KEY` 配置
./internal/api/client.go:17:	BaseURL      = "https://i.weread.qq.com/api/agent/gateway"
./internal/api/client.go:97:	if envVal := os.Getenv("WEREAD_API_KEY"); envVal != "" {
./internal/api/client.go:102:	if envVal := os.Getenv("WEREAD_API_KEY"); envVal != "" {
./internal/api/client.go:109:		if envVal := os.Getenv("WEREAD_API_KEY"); envVal != "" {
./internal/api/client.go:114:	return "", fmt.Errorf("未找到 API Key，请通过以下方式设置：\n  1. --api-key 参数\n  2. 环境变量 WEREAD_API_KEY\n  3. 当前目录 .env 文件\n  4. 程序目录 weread.env 文件")
