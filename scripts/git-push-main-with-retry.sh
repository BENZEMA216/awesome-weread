#!/usr/bin/env bash
# Push the current HEAD to main with one network-aware retry.

set -euo pipefail

ROOT="$(cd "$(dirname "${BASH_SOURCE[0]}")/.." && pwd)"
REMOTE="${1:-origin}"
BRANCH="${2:-main}"
RETRY_DELAY="${PUSH_RETRY_DELAY:-20}"
ORIGINAL_HTTP_PROXY="${HTTP_PROXY-}"
ORIGINAL_HTTPS_PROXY="${HTTPS_PROXY-}"
ORIGINAL_ALL_PROXY="${ALL_PROXY-}"
ORIGINAL_http_proxy="${http_proxy-}"
ORIGINAL_https_proxy="${https_proxy-}"
ORIGINAL_all_proxy="${all_proxy-}"
ORIGINAL_NO_PROXY="${NO_PROXY-}"
ORIGINAL_no_proxy="${no_proxy-}"

cd "$ROOT"

restore_original_proxy_env() {
  if [[ -n "$ORIGINAL_HTTP_PROXY" ]]; then export HTTP_PROXY="$ORIGINAL_HTTP_PROXY"; else unset HTTP_PROXY; fi
  if [[ -n "$ORIGINAL_HTTPS_PROXY" ]]; then export HTTPS_PROXY="$ORIGINAL_HTTPS_PROXY"; else unset HTTPS_PROXY; fi
  if [[ -n "$ORIGINAL_ALL_PROXY" ]]; then export ALL_PROXY="$ORIGINAL_ALL_PROXY"; else unset ALL_PROXY; fi
  if [[ -n "$ORIGINAL_http_proxy" ]]; then export http_proxy="$ORIGINAL_http_proxy"; else unset http_proxy; fi
  if [[ -n "$ORIGINAL_https_proxy" ]]; then export https_proxy="$ORIGINAL_https_proxy"; else unset https_proxy; fi
  if [[ -n "$ORIGINAL_all_proxy" ]]; then export all_proxy="$ORIGINAL_all_proxy"; else unset all_proxy; fi
  if [[ -n "$ORIGINAL_NO_PROXY" ]]; then export NO_PROXY="$ORIGINAL_NO_PROXY"; else unset NO_PROXY; fi
  if [[ -n "$ORIGINAL_no_proxy" ]]; then export no_proxy="$ORIGINAL_no_proxy"; else unset no_proxy; fi
}

# First attempt uses the direct route only, so background maintenance jobs do
# not depend on a potentially stale localhost proxy inherited from login shells.
eval "$("$ROOT/scripts/network-preflight.sh" --emit-env)"

if git push "$REMOTE" "HEAD:$BRANCH"; then
  exit 0
fi

echo "[git-push-main-with-retry] initial push failed; retrying with verified proxy fallback + rebase" >&2
sleep "$RETRY_DELAY"

restore_original_proxy_env
eval "$(NETWORK_PREFLIGHT_ALLOW_PROXY_FALLBACK=1 "$ROOT/scripts/network-preflight.sh" --emit-env)"
git fetch "$REMOTE" "$BRANCH" --prune
git rebase "$REMOTE/$BRANCH"
git push "$REMOTE" "HEAD:$BRANCH"
