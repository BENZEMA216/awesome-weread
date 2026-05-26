#!/usr/bin/env bash
# Push the current HEAD to main with one network-aware retry.

set -euo pipefail

ROOT="$(cd "$(dirname "${BASH_SOURCE[0]}")/.." && pwd)"
REMOTE="${1:-origin}"
BRANCH="${2:-main}"
RETRY_DELAY="${PUSH_RETRY_DELAY:-20}"

cd "$ROOT"

eval "$("$ROOT/scripts/network-preflight.sh" --emit-env)"

if git push "$REMOTE" "HEAD:$BRANCH"; then
  exit 0
fi

echo "[git-push-main-with-retry] initial push failed; retrying after network preflight + rebase" >&2
sleep "$RETRY_DELAY"

eval "$("$ROOT/scripts/network-preflight.sh" --emit-env)"
git fetch "$REMOTE" "$BRANCH" --prune
git rebase "$REMOTE/$BRANCH"
git push "$REMOTE" "HEAD:$BRANCH"
