---
title: "Production AI Systems"
excerpt: "Enterprise GenAI Solutions"
permalink: /portfolio/ai-systems/
---

Translating AI research into production value at scale.

## Case studies (anonymized)

### B2B SaaS: churn and save teams

**Problem:** A growing SaaS provider was losing mid-market accounts to silent churn; Customer Success was reactive, and leadership lacked early warning signals tied to product usage and support history.

**Approach:** Built an ML-based churn risk model with explainable drivers, integrated into the CRM and CS playbooks, plus lightweight automation for outreach and escalation. Emphasized evaluation rigor (holdouts, calibration, fairness checks) and human-in-the-loop workflows so teams trusted the system.

**Outcome:** Roughly **23% reduction in preventable churn** over the measurement window; CS shifted capacity from firefighting to high-touch saves on accounts the model surfaced early.

### Multi-tenant analytics: executive MCP-style access

**Problem:** Executives needed consolidated KPIs across siloed data stores without standing up another brittle ETL project or exposing raw warehouse access.

**Approach:** Designed API-first “tool surfaces” (MCP-style patterns) over governed metrics layers, with caching, rate limits, and role-based scopes. Prioritized latency and cost controls for **500K+ queries/day** at peak.

**Outcome:** Self-serve leadership reporting with stable p95 latency; reduced ad-hoc analyst load and improved consistency of definitions across teams.

### Healthcare: HIPAA-aware voice workflows

**Problem:** A clinical network needed phone-based intake and follow-up that reduced admin burden without creating PHI handling gaps or unreliable handoffs to staff.

**Approach:** HIPAA-conscious architecture: least-privilege access, encrypted transit and storage, audit logging, human escalation paths, and disciplined prompt/guardrail testing for common failure modes. Voice pipeline with ASR/NLU and structured handoff to EHR-adjacent systems.

**Outcome:** **1,000+ patient conversations per week** at steady state with **~94% task-completion accuracy** on scoped workflows; measurable reduction in manual scheduling and callback workload.

## Overview

As GenAI Subject Matter Expert at DoIT International, I lead customer engagements developing agentic systems for enterprise and startup customers, translating business requirements into AI solutions deployed on GCP and AWS.

## Delivered Systems

**Customer Churn Prediction**  
Machine learning system that reduced customer attrition by 23% for B2B SaaS company through predictive analytics and automated intervention workflows.

**Business Intelligence MCP Servers**  
Processing 500K+ daily queries, providing executives with real-time insights into business metrics and KPIs across multiple data sources.

**Customer Success Co-pilot Agents**  
AI assistants that handle routine customer success tasks, allowing teams to focus on high-value interactions. Deployed across multiple enterprise accounts.

**Medical Voice Agents**  
HIPAA-compliant conversational AI handling 1,000+ patient interactions weekly with 94% accuracy rate, reducing administrative burden on medical staff.

## Technical Approach

**Architecture Focus:**
- RAG (Retrieval-Augmented Generation) systems with custom evaluation frameworks
- Agentic orchestration using LangGraph and Bedrock
- Production-grade safety guardrails and content filtering
- Multi-modal processing (text, voice, structured data)

**Security & Compliance:**
- HIPAA compliance for healthcare applications
- SOC2 compliance for financial services
- FedRAMP considerations for government contractors
- Privacy-preserving architectures for sensitive data

## Business Impact

- **12+ production deployments** across healthcare, SaaS, and financial services
- **$4.5M in expansion revenue** through technical pre-sales and solution design
- **97% CSAT score** across 500+ customer interactions
- **35% cost reduction** ($850K annual savings) through cloud optimization

## Community Leadership

Founded and lead GenAI Community of Practice at DoIT (40+ members):
- Weekly technical workshops on AI security, threat modeling, prompt injection defense
- Mentorship program that upskilled 15 colleagues in AI engineering
- Training materials (agents, embeddings, explainability strategies) published openly at [gitlab.com/maker-nathan/ai-training-and-threat-modeling](https://gitlab.com/maker-nathan/ai-training-and-threat-modeling)

## Tech Stack

LangGraph | Bedrock | Claude | Vertex AI | GCP | AWS  
Python | FastAPI | Kubernetes | Terraform | Vector Databases

---

**Note:** Specific client details are confidential. Case studies available upon request with appropriate NDAs.
