---
title: "AI Developer Tooling"
excerpt: "Open-Source Tools and Skills for AI-Assisted Development"
permalink: /portfolio/ai-tooling/
header:
  teaser: /assets/images/ai-tooling-thumb.jpg
---

# AI Developer Tooling
## Open-Source Tools and Skills for AI-Assisted Development

A collection of tools and agent skills developed from practical experience building production AI systems — focused on making AI coding agents faster, more precise, and less wasteful.

## repo-map

A CLI tool that generates fast, deterministic repository maps optimized for AI coding agents. The core problem: agents that try to comprehend an entire codebase by reading files serially burn tokens on structure they could derive locally.

**How it works:** repo-map uses Tree-sitter for local tag extraction — no LLM calls during analysis. It generates a `.repo-map.md` at the repo root that agents can grep and partially read rather than consuming whole.

**Output modes:**
- `--full` — complete symbol catalog
- `--budget N` — token-capped output for context-constrained scenarios
- `--enrich-python` — enhanced detail for Python-heavy repos
- JSON export for downstream tooling

For repos over 100 files, the tool generates an agent navigation guide, prioritizes symbols over structure, and uses compact path notation to keep the map usable rather than overwhelming.

Integrates via symlink with Cursor and Claude Code. Designed as a lightweight complement to deeper architectural analysis tools — fast enough to run on every session start.

## Claude Code Skills

A set of reusable [Claude Code skills](https://docs.anthropic.com/en/docs/claude-code/skills) developed for recurring patterns in software work:

**backpass** — Two-pass coding rhythm. Forward pass solves the problem; backward pass strips the result to its essential form — removing dead code, collapsing over-abstraction, simplifying control flow. Guards against the overbuild tendency in agentic coding sessions.

**renovate** — Systematic cleanup for inherited or messy codebases. Map → cover → clean, module by module. Structured to avoid breaking things while improving them, with coverage gates before each cleanup pass.

**scaffold-setup-skill** — Generates a repo-embedded setup skill for a software project, creating a natural language interface for onboarding and configuration tasks.

## Source

[gitlab.com/maker-nathan/my-skills](https://gitlab.com/maker-nathan/my-skills) — MIT license, open for use and contribution.
