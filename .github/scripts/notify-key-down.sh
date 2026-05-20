#!/usr/bin/env bash
# API key health check + issue management.
# Called from the discover workflow. Inputs via env:
#   GH_TOKEN, GITHUB_REPOSITORY, GITHUB_RUN_ID, GITHUB_SERVER_URL
# Effects:
#   - If .api-key-broken exists: open or comment-on api-key-down issue, exit 1
#   - If not + open issue exists: close it
set -euo pipefail

# Idempotent label create
gh label create api-key-down --color B60205 \
  --description "Bot detected Gemini API key failure" 2>/dev/null || true
gh label create bot --color 5319E7 \
  --description "Opened by automation" 2>/dev/null || true

RUN_URL="${GITHUB_SERVER_URL}/${GITHUB_REPOSITORY}/actions/runs/${GITHUB_RUN_ID}"

if [ -f .api-key-broken ]; then
  echo "::error::API key marker file detected. Opening issue and failing the run."
  cat .api-key-broken
  ERROR_TEXT=$(cat .api-key-broken)

  cat > /tmp/issue_body.md <<EOM
## 🚨 Bot detected GOOGLE_API_KEY is broken

The discovery bot got an auth error (401/403/PERMISSION_DENIED) from Gemini and stopped early to avoid burning more calls.

### Error captured

\`\`\`json
${ERROR_TEXT}
\`\`\`

### How to recover

1. Generate a new key: https://aistudio.google.com/apikey
2. Rotate the secret:
   \`\`\`bash
   gh secret set GOOGLE_API_KEY --repo ${GITHUB_REPOSITORY} --body "NEW_KEY"
   \`\`\`
3. Clear failed entries so the bot re-evaluates them:
   \`\`\`bash
   cd ~/awesome-weread && git pull
   python3 -c "import json; d=json.load(open('seen.json')); d=[e for e in d if e['decision']!='llm_error']; open('seen.json','w').write(json.dumps(d,indent=2)+chr(10))"
   git add seen.json && git -c commit.gpgsign=false commit -m 'chore: clear llm_error after key rotation' && git push
   \`\`\`
4. Trigger a manual run:
   \`\`\`bash
   gh workflow run "Discover new candidates" --repo ${GITHUB_REPOSITORY}
   \`\`\`

This issue will **auto-close** once the next bot run completes without the marker.

— Failing run: ${RUN_URL}
EOM

  existing=$(gh issue list --label 'api-key-down' --state open --json number --jq '.[0].number // empty')
  if [ -n "$existing" ]; then
    echo "Existing issue #$existing — adding heartbeat comment."
    gh issue comment "$existing" \
      --body "Still broken as of $(date -u +%Y-%m-%dT%H:%MZ) · run ${RUN_URL}"
  else
    gh issue create \
      --title "🚨 Bot: GOOGLE_API_KEY broken (auto-detected)" \
      --label "api-key-down,bot" \
      --body-file /tmp/issue_body.md
  fi

  # Fail so GitHub auto-emails the repo owner
  exit 1
fi

# No marker — close any stale open issue
existing=$(gh issue list --label 'api-key-down' --state open --json number --jq '.[0].number // empty')
if [ -n "$existing" ]; then
  echo "Closing stale issue #$existing — bot run succeeded."
  gh issue close "$existing" \
    --comment "✓ Bot run succeeded — API key is back online (run ${RUN_URL})."
else
  echo "API key healthy ✓"
fi
