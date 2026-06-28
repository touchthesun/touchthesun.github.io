---
title: "Open Hardware Manager is now on Docker Hub"
date: 2026-06-28
categories:
  - open hardware
tags:
  - ohm
  - docker
  - open-source
  - manufacturing
---

After three years of building Open Hardware Manager as a reference implementation for distributed manufacturing coordination, version 0.8.4 is now published on Docker Hub: [touchthesun/openhardwaremanager](https://hub.docker.com/r/touchthesun/openhardwaremanager).

Multi-architecture images for linux/amd64 and linux/arm64. Pull and run.

---

A brief explanation of what OHM actually does, since I don't talk about it enough.

The coordination problem in distributed manufacturing comes down to this: when a crisis hits and you need to activate distributed capacity — makerspaces, fab labs, small shops — you have no reliable way to find out who can make what, in what quantity, to what quality standard, with what lead time. During COVID-19, we had 1,800+ maker organizations producing medical supply units, and roughly seventy percent of the volunteer effort went to solving this problem manually. Phone calls, spreadsheets, emails. Heroic and inefficient.

OHM is the system that should have existed. At its core, it's a matching engine: given a hardware requirement (a design in OpenKnowHow format), find every facility in the network capable of producing it (expressed in OpenKnowWhere format), ranked by proximity, capacity, quality level, and lead time. The matching runs in four layers — exact specification match, heuristic similarity, NLP-based inference, and ML-based ranking — which means it degrades gracefully when data is incomplete, which it usually is.

The rest of the system exists to make the matching problem tractable. Manifest generation converts unstructured project data — GitHub repositories, PDF documentation, whatever you have — into machine-readable OKH format. Supply tree construction maps the full manufacturing solution for a given design: not just who makes the final part, but what are the sub-components, where do materials come from, what are the dependencies and the critical path. Package management bundles complete hardware packages with all the documentation, validation data, and specifications a distributed producer actually needs.

The data standards underlying all of this — OpenKnowHow and OpenKnowWhere — were co-developed with the Open Source Hardware Association, Field Ready, and the University of Bath. OHM is the reference implementation that makes those standards useful rather than merely correct.

---

Version 0.8.4 is stable and functional. The system works. What it doesn't have yet is adoption — which is the harder problem, and the one I'm actively working on through conference presentations (including the [Open Hardware Summit 2026 talk](https://www.youtube.com/watch?v=Lr21NQtMSUc)), documentation, and community engagement.

If you're working on supply chain resilience, humanitarian logistics, distributed manufacturing, or open hardware infrastructure and want to see what this looks like running, pulling the image is the fastest way to find out.

```bash
docker pull touchthesun/openhardwaremanager:latest
```

Questions and collaboration inquiries: [nathan@makernet.work](mailto:nathan@makernet.work).
