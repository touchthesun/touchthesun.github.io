---
title: AI Developer Tooling
description: repo-map, lesson, and Claude Code skills for faster, more precise agentic development.
---


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

### Example output

Running `repo-map --full --enrich-python` on the Glovebox codebase (65 source files) produces a structured map agents navigate with `grep`, not by reading end-to-end:

```
# Repository map: glovebox

## How agents should use this map
Do not read this file end-to-end. Locate targets with grep, then read a
small line range around matches. Open real source for implementation detail.

## Quick index
| Section                    | Start line | End line |
|----------------------------|------------|----------|
| Code intelligence catalog  | 49         | 1164     |
| Directory tree             | 1165       | 1523     |

### Top-level directories
- `tests/`   — 22 files
- `src/`     — 21 files
- `harness/` — 11 files
- `scripts/` —  9 files

---

## src/glovebox/config.py
> Configuration for a Glovebox server.
Classes: GloveboxConfig (warnings, from_env)

## src/glovebox/server.py
> FastMCP stdio server for glovebox tools.
Exports: build_mcp, main
Definitions: _AUDIT_METRIC_KEYS, glovebox_list, glovebox_stat,
             glovebox_search, glovebox_aggregate, build_mcp, main

## src/glovebox/budget.py
> Per-session query budget. Search is a disclosure oracle: repeated
> calls can reconstruct content. SessionBudget caps total queries.
Classes: Decision, SessionBudget (check_and_consume)

## src/glovebox/disclosure.py
> Statistical-disclosure limiting for counts (threat-model §5.2).
Exports: below_min_cell, bucket_label, suppressed, count_fields, below_min_file

## src/glovebox/paths.py
> Resolve user-supplied relative paths strictly under the glovebox mount.
Classes: PathEscapeError, FileResolutionError
Functions: resolve_under_root(), resolve_file_under_root()

## src/glovebox/tools/
├── aggregate.py   — glovebox_aggregate_impl()
├── list_dir.py    — glovebox_list_impl()
├── search.py      — glovebox_search_impl()
└── stat_path.py   — glovebox_stat_impl()

## tests/adversarial/
├── test_output_bounds.py  — output size and aggregate edge cases
├── test_path_abuse.py     — path traversal and normalization abuse
├── test_search_abuse.py   — regex and search edge cases
└── test_symlink_escape.py — symlink escape out of mount (threat-model §5.6)
```

The full map for Glovebox runs ~1,500 lines and takes under 3 seconds to generate. An agent starting a session `grep`s for the module it needs and reads 30–50 lines rather than consuming the whole codebase.

## Claude Code Skills

A set of reusable [Claude Code skills](https://docs.anthropic.com/en/docs/claude-code/skills) developed for recurring patterns in software work. Each encodes a specific approach to a problem that keeps coming back.

### backpass

AI coding agents tend to overbuild. Given a task, they'll solve it — and then add error handling for cases that can't happen, abstract the three-line function into a framework, and leave behind speculative parameters for callers that don't exist. The forward pass produces working code; the backward pass is how you get *good* code.

backpass enforces a two-phase rhythm: write the solution without worrying about elegance, then systematically review every modified file for dead code, one-call abstractions, verbose conditionals, and interfaces that are more public than they need to be. The constraint is strict — the backward pass changes form, not behavior. Tests must pass before and after each pass. New features discovered during review are deferred. The result is code that solved the stated problem and nothing else.

### renovate

Taking over an unfamiliar or neglected codebase is one of the riskier things you can do in software. The temptation is to start refactoring immediately, which is how you break things you don't understand yet. Renovate imposes a discipline: map before you touch, cover before you clean.

The workflow runs in five phases — triage, map (using repo-map), audit test coverage, write characterization tests for any uncovered modules, then refactor one module at a time. Characterization tests capture current behavior including bugs, which are flagged but not fixed during the clean pass. No new features, no bug fixes, no advancing to the next module until the test suite passes. The output is a cleaned codebase and a clear list of what was found along the way.

### lesson

Correcting an agent is cheap and forgettable. The correction lands, the turn ends, and the same mistake shows up next week in a different repo. The signal is already there in every session — it just evaporates. lesson catches it and converts it into an artifact that makes the mistake structurally impossible to repeat.

The core idea is an enforceability ladder, tried top-down: a **hook** if the rule is a deterministic condition on a tool call or file path (the litmus test — could a shell script read the tool input and decide pass/fail with no judgment?), a **lint rule or test** if it's a code-level invariant, a **skill** if it's a multi-step procedure being reinvented in chat, and a **rule-line** in `CLAUDE.md` only for judgment that genuinely resists mechanization. The rule-line is the explicit fallback, not the default — the failure mode this design fights is writing prose nobody enforces when a five-line hook would have blocked the thing outright.

Scope defaults to the narrowest correct one: project before global. Cross-repo relevance is a trap, since a lesson that's true in one repo is frequently wrong in the next. Promotion to global is opt-in and evidence-driven.

Every lesson appends a row to a ledger, which is what makes the system self-improving rather than accumulating. A near-duplicate bumps a `hits` counter instead of adding noise, and when a rule-line reaches three hits it triggers promotion — the skill proposes the concrete hook or test that would have made it impossible. A periodic review pass runs the other direction too, flagging hooks that never fired and rule-lines that never recurred as deletion candidates. A mistake corrected once should become progressively impossible; a guardrail that never fires should be deleted before it becomes ignorable noise.

### scaffold-setup-skill

Every project has the same onboarding problem: someone new needs to get the environment running, and the documentation is either missing, stale, or assumes context they don't have. scaffold-setup-skill generates a repo-embedded natural language setup wizard by reading the actual configuration files, dependency manifests, and infrastructure definitions in the repository — then producing a SKILL.md that walks through discovery, configuration, and verification in plain language.

The generated skill lives at `.claude/skills/setup/SKILL.md` and is designed to be maintained alongside the code. The goal is to make "how do I get this running" answerable without a synchronous call to someone who already knows.

## Source

[gitlab.com/maker-nathan/my-skills](https://gitlab.com/maker-nathan/my-skills) — MIT license, open for use and contribution.
