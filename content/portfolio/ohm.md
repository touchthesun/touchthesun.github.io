---
title: Open Hardware Manager
description: Who can make this? Infrastructure that matches open hardware designs to real workshops — federated, not centralized.
---


Open Hardware Manager answers one question: **who can make this?** Then it gets out of the way. The conversation that follows happens between you and the workshop — OHM is not a marketplace, a shop, or a broker.

## The Problem

Open hardware has a licensing story and a publishing story. What it does not have is a manufacturing story.

A design is released under an open licence. The files are online. Anyone is legally free to build it. And then, in practice, almost nobody does — because finding someone who *can* build it is a research project every single time.

COVID-19 made the cost visible. When centralized supply chains collapsed, 1,800+ maker organizations produced roughly 48 million medical supply units. The capacity existed. Around seventy percent of volunteer effort still went to manual coordination: matching designs to facilities, validating specs, routing materials, aggregating output. Systems built fast under pressure fell apart when volunteers moved on, then got rebuilt from scratch the next crisis.

The next pandemic, natural disaster, or supply chain break will find us just as unprepared — unless the coordination layer already exists.

## Why Standards Aren't Enough

I co-developed machine-readable standards for this field — [Open Know-How](https://www.openhardwaremanager.org/docs/reference/okh-and-okw/) for designs, Open Know-Where for facilities — with the Open Source Hardware Association, Field Ready, and the University of Bath. Standards alone do not get you far. Nobody manually interacts with a data standard.

I think about it as five layers: standards at the base, then single-purpose tools, an engine that wraps those tools into something usable, services that let you query the engine remotely, and finally a platform. Until a project reaches at least the engine layer, it does not matter how good the standard is.

Open Hardware Manager is that engine.

## What It Actually Does

OHM keeps structured records of two things: open hardware designs, and real production facilities — makerspaces, fab labs, university workshops, small manufacturers. It works out which facilities can build a given design, and hands you what you need to go ask them.

**Meet people where they already are.** The alternative — demanding every project and workshop adopt a format before they get value — is how you build a system nobody uses. OHM absorbs the mess: point it at a GitHub or GitLab repo and it parses files, documentation, and licensing into a valid Open Know-How manifest. Facility data comes from directories that already exist, starting with [Maps of Making](https://mapsofmaking.org/). Those spaces publish about themselves; OHM is a reader, not a scraper.

**Thin manifests, heavy files only when needed.** The manifest is a light JSON record — who made it, how it's made, what it's for, and links out to STLs, DXFs, source. Matching a design against workshops happens against the manifest alone. The full package moves only when someone is ready to build.

**Matching that scales past one person's network.** Given a design, find capable manufacturers by capability and geography. Ask who can build a face shield *in France* and you get named workshops with real addresses — not an unhelpfully global list of every space with a 3D printer.

## Federation, Not Another Silo

It would be simple to build one more website and ask everyone to upload there. I've watched that pattern fail: projects lose funding, platforms get bought, data ends up with someone nobody trusts.

OHM is built for federation. The software is on [Docker Hub](https://hub.docker.com/r/touchthesun/openhardwaremanager) — pull the image and run your own node on your own hardware today. The hosted site at [openhardwaremanager.org](https://www.openhardwaremanager.org/) is a convenience, not the product. The shape I'm working toward is a mesh: nodes that pass signal to each other so if one goes down the rest heal around it. Same logic for a supply chain of physical goods.

## Current Status

**Live, documented, not yet at 1.0.**

Browse designs, run a match, and open the resulting supply tree in the browser — no Docker or CLI required. Public docs cover the problem, how it works, and how to run your own node. Maps of Making facilities are in the matching pool alongside your own data. My instance currently holds on the order of 170+ designs, from simple printable parts to hard cases like NASA JPL's open-source Mars rover — chosen specifically to prove the system can handle complexity.

Before opening broadly to the public I want three things settled: reliable federation between nodes, and working tools for onboarding a new design and a new space. Until then I'm inviting developers and people already fluent in this work as beta testers — not yet the general public.

**Recent visibility:** Presented at [FAB26](https://fab26.fabevent.org/) (MIT / Cambridge, July 2026) to the international fab lab community; walked the GIG network through four years of work on a [community call](https://globalinnovationgathering.org/2026/07/22/community-call-open-hardware-manager/) with a [writeup from Global Innovation Gathering](https://globalinnovationgathering.org/2026/08/03/open-hardware-manager-nathan-parker/); earlier [Open Hardware Summit 2026](https://www.youtube.com/watch?v=Lr21NQtMSUc) talk on supply chain mesh networks.

**Collaboration:**
- Internet of Production Alliance (IoPA) — international coordination
- Open Source Hardware Association (OSHWA) — standards development
- Field Ready — humanitarian deployment expertise
- University of Bath — research partnership
- EU mAkE Project — African/European makerspace infrastructure
- [Maps of Making](https://mapsofmaking.org/) — facility network integration, live in v0.9.0

**Emerging:** Early conversations with [DMDM](https://dmdm.icu/) (Distributed Medical Device Manufacturing — FDA-registered, producing tourniquets for Sudan and Gaza) and [GOSQAS](https://gosqas.org/about) (open-source closed-loop tracking for humanitarian supply chains). Both are exactly the kind of distributed, humanitarian-facing manufacturing this project exists to support.

## The Vision

The goal isn't replacing centralized manufacturing — it's creating resilient alternatives that activate when centralized systems fail. Designs publish in machine-readable OKH. Facilities advertise capabilities in OKW. Matching engines route production to available capacity. Networks self-organize without rebuilding the coordination layer from scratch every crisis.

Everyday use is what makes the network exist when you actually need it. Mutual aid under pressure cannot invent trust, formats, and facility maps while people are waiting.

## Get Involved

**Try it:** [openhardwaremanager.org](https://www.openhardwaremanager.org/) — browse, match, no setup.  
**Read the docs:** [What is OHM?](https://www.openhardwaremanager.org/docs/about/what-is-ohm/)  
**Run a node:** [Docker image](https://hub.docker.com/r/touchthesun/openhardwaremanager) · [Source on GitHub](https://github.com/helpfulengineering/supply-graph-ai)  
**Community:** [Open Source Hardware Association](https://www.oshwa.org/), [Internet of Production Alliance](https://internetofproduction.org/), [Field Ready](https://fieldready.org/)

If you want to spin up a node and break things once federation tools settle, I want that feedback.

Open Source (MIT) | Maintained by Nathan Parker
