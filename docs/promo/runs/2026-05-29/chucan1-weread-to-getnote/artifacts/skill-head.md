---
name: weread-to-getnote
description: 微信读书笔记 → Get笔记 → 知识库 全流程导入。引擎：notebridge + getnote CLI。
trigger: 导入读书笔记、微信读书、读书摘录、划线整理、知识库入库
version: 3.0.0
---

# weread-to-getnote

将微信读书笔记导入 Get 笔记并加入知识库。底层由 [notebridge](https://github.com/chucan1/notebridge) 驱动。

### v2 → v3 变化

- **删除**：不再需要安装 `weread-skills`、`getnote-note`、`getnote-kb` 子 skill
- **新增**：`npm install -g @chucan1013/notebridge`
- **拉取数据**：`notebridge weread --book "..." --to getnote` 替代所有 raw curl 命令
- **技能体积**：370 行 → 120 行

## 前置依赖（首次使用先完成这里）

### 1. 安装 notebridge

```bash
npm install -g @chucan1013/notebridge
```

### 2. 获取微信读书 API Key

微信读书 App →「我」→「设置」→「网络接入助手」复制 API Key（格式：`wrk-...`）。

### 3. 配置 API Key

```bash
export WEREAD_API_KEY=<redacted-key>
```

或在 Claude Code 的 `settings.local.json`：
```json
{ "env": { "WEREAD_API_KEY": "wrk-..." } }
```

### 4. 安装并认证 Get 笔记 CLI

从 [releases](https://github.com/iswalle/getnote-cli/releases) 下载，然后：

```bash
getnote auth login --api-key gk_live_...
getnote auth status
```

### 5. 验证环境

```bash
notebridge --list-sources        # 应显示 "weread, local-markdown"
notebridge weread --book "任意" --to getnote --dry-run  # 测试连接
```

---

## 工作流

### 1. 确认导入内容

**必须先问用户**要导入什么：

- **指定书名** —「导《智人之上》的笔记」
- **指定几条划线** —「把《黑客与画家》里关于设计的挑几条」
- **某本书全部笔记** — 全书划线+想法
- **最新 N 条** — 不限书
- **批量导入** — 多本书/全部书

> 导入范围由用户决定，不要替用户选。

### 2. 确认格式

**每次都必须问**用户格式是否有特殊要求。默认格式：

```markdown
# 《书名》— 作者

> 共 N 条划线，N 条想法

## 划线摘录

### 章节名
> 划线原文

## 个人想法
- 想法内容
```

**默认标题**：`《书名》读书笔记`
**默认标签**：`微信读书`、`读书笔记`

### 3. 拉取数据

用 notebridge CLI 拉取并格式化：

```bash
# 先 dry-run 展示会给用户看的内容
notebridge weread --book "<书名>" --to getnote --dry-run

# 确认后实际拉取（输出 JSON，包含 formatted notes）
notebridge weread --book "<书名>" --to getnote --dry-run -o json
```

**批量导入**：先 `notebridge --list-sources` 看有哪些书，逐本处理。

**分组选项**：
- `--grouping per_item` — 每条划线独立一条笔记
- `--grouping per_chapter` — 按章节合并（推荐）
- `--grouping per_book` — 全书合并为一条笔记

### 4. 整理 + 展示给用户

将 notebridge 的输出按用户确认的格式整理成 Markdown，**展示给用户确认**后再保存。

### 5. 保存到 Get 笔记

用户确认内容后：

```bash
getnote save "笔记内容" --title "《书名》读书笔记" --tag 微信读书 --tag 读书笔记 -o json
```

内容较长时用 Python/node 写临时文件再 `getnote save`，不要用 Shell 单行字符串。

### 6. 加入知识库

**必须先问用户，批准后再加入。**

1. 列出知识库：`getnote kbs -o json`
2. 根据笔记内容推荐最合适的知识库，说明理由
3. 用户确认后加入：`getnote kb add <topic_id> <note_id>`

---

## 批量导入规则

1. 先 `notebridge weread --list-resources` 告知工作量
2. **逐本处理** — 每本走完整流程，不一次性全自动
3. 第一本问格式，后续同格式可沿用
4. 每本单独推荐知识库
5. 每本之间告知进度

---

## 错误处理

| 场景 | 处理 |
|------|------|
| `WEREAD_API_KEY` 未设置 | `export WEREAD_API_KEY=<redacted-key>` |
| `notebridge` 未安装 | `npm install -g @chucan1013/notebridge` |
| `getnote` 未安装 | 指向 https://github.com/iswalle/getnote-cli/releases |
| `getnote` 未认证 | `getnote auth login --api-key <key>` |
| 书未找到 | 用 `notebridge weread --list-resources` 列出可用的书 |
| `getnote save` 失败 | 先 `getnote auth status` 检查认证 |
| 知识库添加失败 | 订阅知识库只读，用 `getnote kbs` 找自有知识库 |

