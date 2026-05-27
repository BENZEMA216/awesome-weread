#!/usr/bin/env python3
import json
import os
import time
import urllib.error
import urllib.request


GATEWAY = "https://i.weread.qq.com/api/agent/gateway"


def must_get_api_key() -> str:
    api_key = os.environ.get("WEREAD_API_KEY", "")
    if not api_key.startswith("wrk-"):
        raise SystemExit("Missing/invalid WEREAD_API_KEY (expected wrk-...).")
    return api_key


def call_gateway(api_key: str, api_name: str, **params):
    payload = {"api_name": api_name, **{k: v for k, v in params.items() if v is not None}}
    req = urllib.request.Request(
        GATEWAY,
        data=json.dumps(payload).encode("utf-8"),
        headers={
            "Authorization": f"Bearer {api_key}",
            "Content-Type": "application/json",
        },
        method="POST",
    )
    try:
        with urllib.request.urlopen(req, timeout=30) as resp:
            body = resp.read().decode("utf-8")
            return json.loads(body)
    except urllib.error.HTTPError as e:
        body = e.read().decode("utf-8", errors="replace")
        raise RuntimeError(f"HTTP {e.code}: {body}") from e
    except Exception as e:
        raise RuntimeError(str(e)) from e


def summarize_shelf_sync(data: dict) -> dict:
    books = data.get("books", []) or []
    albums = data.get("albums", []) or []
    total_books = len(books)
    total_albums = len(albums)

    finished = sum(1 for b in books if b.get("finishReading") == 1)
    reading = sum(1 for b in books if 0 < (b.get("progress") or 0) < 100)
    unread = total_books - finished - reading

    secret_books = sum(1 for b in books if b.get("secret") == 1)
    secret_albums = sum(1 for a in albums if a.get("secret") == 1)

    return {
        "books": total_books,
        "albums": total_albums,
        "finished": finished,
        "reading": reading,
        "unread": unread,
        "private_books": secret_books,
        "private_albums": secret_albums,
    }


def summarize_readdata_overall(data: dict) -> dict:
    keys = [
        "totalReadTime",
        "readDays",
        "preferTimeWord",
        "topKeywords",
        "yearReadTime",
        "monthReadTime",
        "weekReadTime",
        "todayReadTime",
    ]
    return {k: data.get(k) for k in keys if k in data}


def main() -> int:
    api_key = must_get_api_key()

    started_at = time.time()
    try:
        shelf = call_gateway(api_key, "/shelf/sync")
        readdata = call_gateway(api_key, "/readdata/detail", mode="overall", baseTime=0)

        result = {
            "ok": True,
            "gateway": GATEWAY,
            "apis": [
                {"api_name": "/shelf/sync", "ok": isinstance(shelf, dict) and shelf.get("errcode", 0) == 0},
                {
                    "api_name": "/readdata/detail",
                    "params": {"mode": "overall", "baseTime": 0},
                    "ok": isinstance(readdata, dict) and readdata.get("errcode", 0) == 0,
                },
            ],
            "summary": {
                "shelf_sync": summarize_shelf_sync(shelf),
                "readdata_overall": summarize_readdata_overall(readdata),
            },
            "elapsed_ms": int((time.time() - started_at) * 1000),
        }
    except Exception as e:
        result = {
            "ok": False,
            "gateway": GATEWAY,
            "error": {
                "type": "network_or_gateway_error",
                "message": str(e),
                "note": "This environment may block outbound network connections (sandbox).",
            },
            "elapsed_ms": int((time.time() - started_at) * 1000),
        }

    with open("gateway-smoke-test-output.json", "w", encoding="utf-8") as f:
        json.dump(result, f, ensure_ascii=False, indent=2)

    print(json.dumps(result, ensure_ascii=False, indent=2))
    return 0 if result.get("ok") else 1


if __name__ == "__main__":
    raise SystemExit(main())
