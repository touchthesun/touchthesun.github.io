---
title: "Glovebox"
excerpt: "MCP Server for Privacy-Preserving AI Analysis"
permalink: /portfolio/glovebox/
header:
  teaser: /assets/images/glovebox-thumb.jpg
---

# Glovebox
## MCP Server for Privacy-Preserving AI Analysis

An open-source MCP server that gives language models controlled access to sensitive files — returning metadata and aggregates only, never raw content.

## The Problem

The standard way to let an LLM help with sensitive data (logs, medical records, leaked documents, compliance datasets) is to paste the content into context. That works until it doesn't: the model provider logs prompts, the context window becomes a single point of exfiltration, and "just ask the AI" becomes a liability.

The threat is not hypothetical. It affects journalists protecting sources, engineers auditing internal systems, and compliance teams handling regulated data.

## The Solution

Glovebox is a Model Context Protocol (MCP) server that enforces a strict boundary: the model reasons about the data through tools, not by reading it directly. Every tool returns structured summaries — directory listings, file statistics, regex match counts, row/column dimensions — and nothing else.

The name is intentional. A laboratory glovebox lets you manipulate hazardous material without contact. Same principle.

## How It Works

Four built-in tools implement the no-leak contract:

| Tool | Returns |
|---|---|
| `glovebox_list` | Directory structure |
| `glovebox_stat` | File metadata (size, timestamps, type) |
| `glovebox_search` | Regex match counts and line numbers — not the matching lines |
| `glovebox_aggregate` | Row/column counts, summary statistics for CSV/text |

Additional controls:
- **Configurable search budgets** — cap how many results a query can return
- **Small-cell suppression** — prevents re-identification via statistical aggregates
- **Optional filename redaction** — for cases where directory names encode sensitive information
- **Path traversal validation** — read-only access, no escape from the mounted directory

## Security Model

The contract is enforced through architecture, not policy. Tools are implemented to structurally prevent content leakage; the test suite includes contract tests that verify no raw file contents appear in any tool output under any code path.

Hardened Docker defaults (non-root user, read-only mounts, no outbound network) provide an additional containment layer for deployment in high-sensitivity environments.

## Installation

```bash
pip install mcp-glovebox          # PyPI
uv tool install mcp-glovebox      # uv
```

Or via Docker (linux/amd64 and linux/arm64):

```bash
docker pull maker-nathan/mcp-glovebox
```

Requires Python 3.11+. Integrates with any MCP client: Claude Desktop, Cursor, and custom toolchains.

## Status

**v0.3.0** — Active development. MIT license.

- [PyPI package](https://pypi.org/project/mcp-glovebox/)
- [Source on GitLab](https://gitlab.com/maker-nathan/glovebox)

---

This is the reference implementation of the MCP-style privacy boundary described in [Privacy-preserving MCP-style agents for investigative datasets](/posts/2026-04-14-stringboard-mcp-privacy-architecture/). The architecture is general-purpose — Stringboard uses the same pattern, but Glovebox is designed to be dropped into any environment where a model needs to assist with sensitive data without seeing it.
