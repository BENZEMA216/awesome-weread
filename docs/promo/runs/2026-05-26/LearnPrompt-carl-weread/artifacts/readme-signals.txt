./README.md:210:export WEREAD_API_KEY="<你的微信读书API Key>"
./scripts/weread.sh:5:GATEWAY="${WEREAD_GATEWAY:-https://i.weread.qq.com/api/agent/gateway}"
./scripts/weread.sh:7:API_KEY_FILE="${WEREAD_API_KEY_FILE:-$HOME/.config/carl-weread/api_key}"
./scripts/weread.sh:34:  or export WEREAD_API_KEY=<YOUR_WEREAD_API_KEY>
./scripts/weread.sh:129:if [[ -z "${WEREAD_API_KEY:<YOUR_WEREAD_API_KEY>" && -r "$API_KEY_FILE" ]]; then
./scripts/weread.sh:130:  IFS= read -r WEREAD_API_KEY < "$API_KEY_FILE"
./scripts/weread.sh:131:  export WEREAD_API_KEY
./scripts/weread.sh:134:if [[ -z "${WEREAD_API_KEY:<YOUR_WEREAD_API_KEY>" ]]; then
./scripts/weread.sh:135:  echo "缺少 WEREAD_API_KEY。请运行 scripts/setup_api_key.py，或临时 export WEREAD_API_KEY=<YOUR_WEREAD_API_KEY>" >&2
./scripts/weread.sh:145:api_key = os.environ["WEREAD_API_KEY"]
./SKILL.md:57:9. 不打印 `WEREAD_API_KEY`；如需持久化，只能写入 `~/.config/carl-weread/api_key` 这种权限为 `600` 的私有 key 文件，不能写入 `config.toml`、README、日志或普通 shell 配置。
./SKILL.md:80:- 必须配置 `WEREAD_API_KEY` 或私有 key 文件，Key 从官方微信读书 Skill/API 入口获取。
./SKILL.md:86:- 首次 API Key 配置优先通过 `scripts/setup_api_key.py` 写入 `~/.config/carl-weread/api_key`；也支持临时环境变量 `WEREAD_API_KEY`。
./docs/phase-1-code-validation.md:11:1. 当前环境没有 `WEREAD_API_KEY`，无法跑真实 WeRead API 端到端。
./docs/phase-1-code-validation.md:53:- `WEREAD_API_KEY` 是否只从环境变量读取
./docs/phase-1-code-validation.md:59:- 仓库中出现的 `wrk-secret` 是测试假值，用于验证不泄露 API Key，不是真实凭据。
./docs/phase-1-code-validation.md:60:- `WEREAD_API_KEY` 的使用符合当前约定：只从环境变量读取，不写入配置文件，不作为正常命令行参数传入。
./docs/phase-1-code-validation.md:78:### 1. 当前环境没有真实 `WEREAD_API_KEY`
./scripts/setup_api_key.py:21:    return getpass.getpass("Paste WEREAD_API_KEY: ").strip()
./scripts/setup_api_key.py:48:    if not api_key.startswith("wrk-"):
./scripts/setup_api_key.py:49:        print("未写入：WEREAD_API_KEY 应以 wrk- 开头。", file=sys.stderr)
./workflows/today-chapter.md:59:- 没有 API Key：提示用户运行 `scripts/setup_api_key.py` 或临时设置 `WEREAD_API_KEY`，不编造结果。
./docs/phase-1-final-verdict.md:50:| `WEREAD_API_KEY` 安全边界 | 通过 |
./docs/phase-1-final-verdict.md:80:当前环境没有 `WEREAD_API_KEY`，所以真实 API 端到端没有跑通。
./docs/phase-1-acceptance.md:32:| 不依赖官方 WeRead Skill | 已完成 | 项目自带 `scripts/weread.sh`，只要求 `WEREAD_API_KEY`。 |
./docs/phase-1-acceptance.md:42:| 真实 API 样本加固 | 部分完成 | 已做防御式字段兼容，但当前环境没有 `WEREAD_API_KEY`，未跑真实样本。 |
./tests/test_today_live_script.py:69:            "wrk-secret",
./tests/test_today_live_script.py:77:    assert "wrk-secret" not in result.stdout
./tests/test_fetch_candidates_script.py:61:            "wrk-secret",
./tests/test_fetch_candidates_script.py:71:    assert "wrk-secret" not in result.stdout
./tests/test_config.py:18:    monkeypatch.setenv("WEREAD_API_KEY", "[REDACTED_WEREAD_API_KEY]")
./tests/test_config.py:25:    assert "wrk-secret" not in raw
./tests/test_config.py:84:        input="[REDACTED_WEREAD_API_KEY]\n",
./tests/test_config.py:91:    assert output.read_text(encoding="utf-8") == "[REDACTED_WEREAD_API_KEY]\n"
./tests/test_config.py:93:    assert "[REDACTED_WEREAD_API_KEY]" not in result.stdout
./tests/test_weread_script.py:14:    env.pop("WEREAD_API_KEY", None)
./tests/test_weread_script.py:25:    assert "缺少 WEREAD_API_KEY" in result.stderr
./tests/test_weread_script.py:26:    assert "wrk-" not in result.stdout
./tests/test_weread_script.py:44:        env["WEREAD_API_KEY"] = "wrk-test"
./tests/test_weread_script.py:60:    assert "wrk-test" not in result.stderr
./tests/test_weread_script.py:82:        env["WEREAD_API_KEY"] = "wrk-test"
./tests/test_weread_script.py:118:        env["WEREAD_API_KEY"] = "wrk-test"
./tests/test_weread_script.py:153:        env["WEREAD_API_KEY"] = "wrk-test"
./tests/test_weread_script.py:196:        env["WEREAD_API_KEY"] = "wrk-test"
./tests/test_weread_script.py:246:    key_file.write_text("[REDACTED_WEREAD_API_KEY]\n", encoding="utf-8")
./tests/test_weread_script.py:254:        env.pop("WEREAD_API_KEY", None)
./tests/test_weread_script.py:268:    assert requests == ["Bearer [REDACTED_WEREAD_API_KEY]"]
./tests/test_weread_script.py:269:    assert "[REDACTED_WEREAD_API_KEY]" not in result.stdout
./tests/test_weread_script.py:270:    assert "[REDACTED_WEREAD_API_KEY]" not in result.stderr
