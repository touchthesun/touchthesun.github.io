---
title: Open Hardware Manager has a home now — openhardwaremanager.org
description: v0.9.0 ships the reference frontend as a live public demo, plus OKH-LOSH interop and a Maps of Making facility network integration.
date: 2026-07-13
categories: [open hardware]
tags: [ohm, frontend, open-source, manufacturing]
---


Open Hardware Manager now has a website: [openhardwaremanager.org](https://www.openhardwaremanager.org/). Browse designs, run a match against the facility network, and open the resulting supply tree — no Docker, no CLI, no reading API docs first. This has been the missing piece since the [Docker Hub release](/blog/ohm-docker/) last month. The system worked, but "pull the image and read the OpenAPI spec" was never going to get anyone but other engineers to try it. Now anyone can.

This shipped alongside v0.9.0, which is the biggest release since I started publishing versioned Docker images. Three things in it are worth calling out.

## The frontend is real, not a demo shell

The reference UI (Vite + React, living in `frontend/` in the repo) went from "proves the API works" to an actual workflow tool in this release: a searchable design catalog with category/process/license filters and grouping, a match flow that lets you pick a design, filter facilities by city/region/country, and pull in the [Maps of Making](https://mapsofmaking.org/) network as match candidates alongside your own facility data. Multi-select match results now link straight through to their supply trees, and there's an RFQ handoff so a match result turns into a request for quote rather than dead-ending as a JSON blob. It's backed by a local React Query cache so the catalog and network data (which change slowly) don't get re-fetched on every navigation.

None of this is complicated technology. It's the unglamorous work of turning a working API into something a facility owner or a maker actually wants to click through. That work was overdue.

## OHK-LOSH interop, because standards fragmentation is the enemy

The OpenKnowHow spec has its own reference tooling (LOSH) that emits TOML manifests in a different shape than OHM's canonical OKH format. Until this release, that meant anyone with LOSH-format data had to hand-convert it before OHM could use it. `OkhLoshConverter` closes that gap — it maps LOSH's kebab-case fields to OHM's schema, preserves anything it doesn't recognize under `metadata.*` instead of silently dropping it, and is exposed three ways: `ohm convert from-okh-losh`, `POST /v1/api/convert/from-okh-losh`, and a batch import script for bulk migrations.

This matters more than it sounds like it should. The whole point of OpenKnowHow is that hardware documentation should be portable across tools. If OHM only speaks its own dialect, it's just another silo with better manners. Round-tripping cleanly with the upstream reference implementation is table stakes for actually being infrastructure rather than a competing standard.

## The facility network just got bigger, via Maps of Making

Match quality is bounded by how many facilities you know about. This release integrates [Maps of Making](https://mapsofmaking.org/) as a facility source alongside your own network: match candidates can now be drawn from Maps of Making's network, your own storage-backed facility data, or the union of both. That's a meaningful expansion of the capacity pool OHM can search against without anyone having to manually onboard those facilities into OHM's own storage first — the whole point of building on shared open data standards rather than a proprietary facility database.

## What's next

Materials extraction quality also got real attention this release — a scoring harness, confidence thresholds, and optional LLM triage to filter noise out of auto-generated manifests — because manifest quality is the thing that makes or breaks whether matching results are trustworthy. That work continues.

I'm also in early conversations with a couple of groups doing exactly the kind of work OHM exists to support: [DMDM](https://dmdm.icu/), an FDA-registered team manufacturing tourniquets for mutual aid in Sudan and Gaza, and [GOSQAS](https://gosqas.org/about), whose Global Distributed Tracking system solves the closed-loop tracking problem for humanitarian supply chains. Nothing shipped yet — but if these partnerships land, they're the kind of real-world stress test this infrastructure was built for.

If you're working on distributed manufacturing, humanitarian logistics, or open hardware infrastructure: go click around [the live site](https://www.openhardwaremanager.org/), or pull the image directly.

```bash
docker pull touchthesun/openhardwaremanager:0.9.0
```

Source, docs, and the full changelog are on [GitHub](https://github.com/helpfulengineering/supply-graph-ai). Questions and collaboration inquiries: [nathan@makernet.work](mailto:nathan@makernet.work).
