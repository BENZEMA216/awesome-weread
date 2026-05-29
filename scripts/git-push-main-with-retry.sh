#!/usr/bin/env bash
# Push the current HEAD to main with one network-aware retry.

set -euo pipefail

ROOT="$(cd "$(dirname "${BASH_SOURCE[0]}")/.." && pwd)"
REMOTE="${1:-origin}"
BRANCH="${2:-main}"
RETRY_DELAY="${PUSH_RETRY_DELAY:-20}"

cd "$ROOT"

# First attempt uses the direct route only, so background maintenance jobs do
# not depend on a potentially stale localhost proxy inherited from login shells.
eval "$("$ROOT/scripts/network-preflight.sh" --emit-env)"

if git push "$REMOTE" "HEAD:$BRANCH"; then
  exit 0
fi

echo "[git-push-main-with-retry] initial push failed; retrying with verified proxy fallback + rebase" >&2
sleep "$RETRY_DELAY"

eval "$(NETWORK_PREFLIGHT_ALLOW_PROXY_FALLBACK=1 "$ROOT/scripts/network-preflight.sh" --emit-env)"
git fetch "$REMOTE" "$BRANCH" --prune
git rebase "$REMOTE/$BRANCH"
git push "$REMOTE" "HEAD:$BRANCH"
