---
title: Privacy-preserving MCP-style agents for investigative datasets
description: How to get analytical leverage from a model without giving it raw evidence.
date: 2026-04-14
categories: [architecture]
tags: [stringboard, mcp, security, journalism]
---


Investigative journalists increasingly work like small data shops: multi-terabyte leaks, mixed formats, chat logs, email archives, and public records—all of which must be handled without creating new subpoena surfaces. Cloud-hosted “upload your documents” AI is a non-starter for many newsrooms because the provider, not the reporter, becomes the weak link in source protection.

Stringboard is a **local-first toolkit** (dozens of services behind a consistent CLI/API) for acquisition, processing, search, and secure collaboration. The hard design problem is not “add an LLM button,” but **how to get analytical leverage from a model without ever giving it raw evidence**.

## The threat model, stated bluntly

If the model provider logs prompts, or your orchestration layer accidentally forwards document text, you have re-created the cloud risk journalists were trying to avoid. The goal is not perfect OpSec theater; it is **meaningful separation of duties**:

- The analyst owns the host, disk encryption, and network posture.
- The **data plane** stays on the machine (or an air-gapped / Tor-routed path the reporter controls).
- The **model** sees only what you deliberately choose to expose—ideally aggregates, excerpts you approve, or tool outputs that are already redacted.

## MCP as a boundary, not a buzzword

Model Context Protocol (MCP) is useful here as a pattern: the assistant reasons about **tools** and **schemas**, not about an implicit “God view” of every file on disk. In Stringboard’s architecture direction, the agent is wired to **narrow interfaces** (search, summarize bounded windows, run transforms, graph queries) implemented as local services.

Concretely, that implies:

1. **Read-only, isolated execution** for anything that touches untrusted data—containers without outbound network access where appropriate, minimal mounts, and explicit egress controls when a model call is unavoidable.
2. **Structured tool outputs** so the model reasons over JSON summaries, histograms, or entity lists instead of dumping entire mailboxes into context.
3. **Human gates** for actions that could leak (export bundles, outbound email, publishing). Automation should assist, not silently exfiltrate.

This is the same engineering instinct you would use for production RAG in a regulated enterprise—except the “compliance story” is **source protection and legal exposure**, not a SOC2 checkbox deck.

## Why not “just run local Llama”?

Local models help with *custody*, but they do not automatically solve *compartmentalization*. A 70B model with the whole PST in-context is still a single point of compromise: screenshots, crash logs, and shoulder-surfing exist. The MCP-style decomposition forces you to decide **what crosses the boundary** on every hop, which is how you keep the trust surface aligned with how journalists actually work under deadline pressure.

## What I would measure next

For this class of system, “vibes-based security” is unacceptable. The next milestones on my side are adversarial exercises against the orchestration layer (prompt injection against tool routing, accidental over-reads via pagination bugs, logging hygiene), plus journalist-led usability testing so safety features are not fighting the story.

If you are building similar boundaries between models and sensitive corpora—legal, healthcare, insider-risk—the design pattern transfers: **treat the LLM as an untrusted client of your data plane**, not the other way around.
