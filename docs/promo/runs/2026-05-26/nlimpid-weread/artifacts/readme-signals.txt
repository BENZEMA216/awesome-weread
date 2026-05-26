./weread/src/cli.rs:30:    /// Override the gateway URL (defaults to `https://i.weread.qq.com/api/agent/gateway`).
./weread/src/error.rs:12:    /// `WEREAD_APIKEY` / `WEREAD_API_KEY` not set in environment.
./weread/src/error.rs:13:    #[error("WEREAD_APIKEY environment variable is not set; export WEREAD_APIKEY=wrk-... first")]
./weread/src/lib.rs:7://! The gateway accepts `POST https://i.weread.qq.com/api/agent/gateway`
./weread/src/lib.rs:23:pub const DEFAULT_GATEWAY: &str = "https://i.weread.qq.com/api/agent/gateway";
./weread/src/client.rs:34:    /// back to `WEREAD_API_KEY` (SKILL.md uses the underscore form).
./weread/src/client.rs:37:            .or_else(|_| std::env::var("WEREAD_API_KEY"))
./weread/tests/integration_api.rs:10://! Tests are gated on `WEREAD_APIKEY` / `WEREAD_API_KEY` being set. When the
./weread/tests/integration_api.rs:23:    let has_key = std::env::var("WEREAD_APIKEY").is_ok() || std::env::var("WEREAD_API_KEY").is_ok();
./SKILL.md:15:export WEREAD_APIKEY=[REDACTED_WEREAD_API_KEY]
./README.md:73:export WEREAD_APIKEY=[REDACTED_WEREAD_API_KEY]
./README.md:76:The CLI also accepts `WEREAD_API_KEY` (the form used in the original SKILL.md).
