#!/usr/bin/env bash
# Normalize network proxy settings for local Codex maintenance runs.
#
# Usage:
#   bash scripts/network-preflight.sh
#   eval "$(scripts/network-preflight.sh --emit-env)"

set -u
set -o pipefail

TIMEOUT="${NETWORK_PREFLIGHT_TIMEOUT:-10}"
GITHUB_URL="${NETWORK_PREFLIGHT_URL:-https://github.com}"
EMIT_ENV=0
STRICT="${NETWORK_PREFLIGHT_STRICT:-0}"

if [[ "${1:-}" == "--emit-env" ]]; then
  EMIT_ENV=1
fi

log() {
  printf '[network-preflight] %s\n' "$*" >&2
}

proxy_value() {
  printf '%s' "${HTTPS_PROXY:-${https_proxy:-${ALL_PROXY:-${all_proxy:-${HTTP_PROXY:-${http_proxy:-}}}}}}"
}

emit_unset_proxy_env() {
  cat <<'EOF'
# awesome-weread network-preflight: clear stale proxy environment.
unset HTTP_PROXY
unset HTTPS_PROXY
unset ALL_PROXY
unset http_proxy
unset https_proxy
unset all_proxy
EOF
}

without_proxy() {
  env \
    -u HTTP_PROXY \
    -u HTTPS_PROXY \
    -u ALL_PROXY \
    -u http_proxy \
    -u https_proxy \
    -u all_proxy \
    "$@"
}

direct_github_ok() {
  if command -v curl >/dev/null 2>&1; then
    without_proxy curl -fsSIL --max-time "$TIMEOUT" --noproxy '*' "$GITHUB_URL" >/dev/null 2>&1
    return $?
  fi

  if command -v git >/dev/null 2>&1; then
    without_proxy git ls-remote https://github.com/BENZEMA216/awesome-weread.git HEAD >/dev/null 2>&1
    return $?
  fi

  return 1
}

parse_proxy_host_port() {
  local url="$1"
  local scheme rest host port

  scheme="${url%%://*}"
  if [[ "$scheme" == "$url" ]]; then
    scheme=""
    rest="$url"
  else
    rest="${url#*://}"
  fi

  rest="${rest%%/*}"
  rest="${rest#*@}"

  if [[ "$rest" == \[*\]:* ]]; then
    host="${rest%%]*}"
    host="${host#[}"
    port="${rest##*:}"
  elif [[ "$rest" == *:* ]]; then
    host="${rest%%:*}"
    port="${rest##*:}"
  else
    host="$rest"
    case "$scheme" in
      https) port="443" ;;
      socks*) port="1080" ;;
      *) port="80" ;;
    esac
  fi

  printf '%s %s\n' "$host" "$port"
}

is_local_proxy_host() {
  case "$1" in
    127.0.0.1|localhost|::1) return 0 ;;
    *) return 1 ;;
  esac
}

local_proxy_listening() {
  local host="$1"
  local port="$2"

  [[ -n "$host" && -n "$port" ]] || return 1
  is_local_proxy_host "$host" || return 2
  (: >"/dev/tcp/$host/$port") >/dev/null 2>&1
}

main() {
  local proxy host port
  proxy="$(proxy_value)"

  if [[ -n "$proxy" ]]; then
    read -r host port < <(parse_proxy_host_port "$proxy")
    log "proxy env detected: ${host}:${port}"
  else
    log "no proxy env detected"
  fi

  if direct_github_ok; then
    log "direct GitHub connectivity works; using direct route for this run"
    if [[ "$EMIT_ENV" -eq 1 ]]; then
      emit_unset_proxy_env
    fi
    return 0
  fi

  log "direct GitHub connectivity failed within ${TIMEOUT}s"

  if [[ -n "$proxy" ]]; then
    read -r host port < <(parse_proxy_host_port "$proxy")
    if local_proxy_listening "$host" "$port"; then
      log "local proxy is listening; keeping proxy env"
      return 0
    fi

    if is_local_proxy_host "$host"; then
      log "local proxy ${host}:${port} is not listening; clearing stale proxy env for clearer retries"
      if [[ "$EMIT_ENV" -eq 1 ]]; then
        emit_unset_proxy_env
      fi
      [[ "$STRICT" == "1" ]] && return 1
      return 0
    fi

    log "non-local proxy configured; keeping proxy env"
    return 0
  fi

  log "no working route detected"
  [[ "$STRICT" == "1" ]] && return 1
  return 0
}

main "$@"
