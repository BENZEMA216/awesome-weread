# weread-api

一个基于 `fetch` + `ky` 的微信读书 API wrapper，默认封装了 Agent Gateway 的调用方式。

## 安装

```bash
pnpm install
```

## 环境变量

```bash
export WEREAD_API_KEY=wrk-xxxxxxxx
```

## 用法

```ts
import { createWereadClient } from "weread-api";

const client = createWereadClient();

const search = await client.searchBooks({
  keyword: "三体",
  scope: 10,
  count: 5,
});

const bookId = search.results?.[0]?.books?.[0]?.bookInfo.bookId;

if (bookId) {
  const book = await client.getBookInfo({ bookId });
  console.log(book.title, book.author);
}
```

## 设计

- `WereadClient` 基于 `ky.create(...)`
- JS 和 `.d.ts` 产物都由 `rolldown` 生成
- 默认 `baseUrl` 为 `https://i.weread.qq.com/`
- 默认 `prefix` 为 `api/agent/gateway`
- 默认自动注入 `skill_version`
- 默认读取 `WEREAD_API_KEY`
- 对网关 `errcode` 和 `upgrade_info` 做统一错误处理

## 已封装方法

- `request(payload)`：通用网关调用
- `searchBooks(...)`
- `getBookInfo(...)`
- `getChapterInfo(...)`
- `getProgress(...)`
- `getShelf()`
- `getReadData(...)`

## 示例

```bash
pnpm run example:search -- 三体 5
pnpm run example:readdata
pnpm run example:archive
```

阅读数据示例会抓取全部历史年份，生成带年度切换的 GitHub 风格本地 dashboard：

```text
examples/output/readdata-history-dashboard.html
```

个人档案页会导出书架、笔记本、划线与个人评论摘要：

```text
examples/output/library-archive.html
```

## 开发

```bash
pnpm run check
pnpm run build
pnpm run example:search
pnpm run example:readdata
pnpm run example:archive
```
