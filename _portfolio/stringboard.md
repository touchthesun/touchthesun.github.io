---
title: "Stringboard"
excerpt: "Secure Investigative Journalism Toolkit"
header:
  teaser: /assets/images/stringboard-thumb.jpg
---

# Stringboard
## Secure Investigative Journalism Toolkit

Empowering journalists to uncover truth in massive datasets without compromising source protection.

## The Problem

Modern investigative journalism requires analyzing massive datasets - leaked documents, public records, communications archives. But journalists face two critical barriers:

**Technical Complexity**: Most reporters aren't data scientists. Existing tools require writing code, understanding databases, and mastering command-line workflows.

**Security Risk**: Cloud-based AI tools log everything they process. For journalists protecting confidential sources, this creates an impossible choice: accept help from AI and risk source exposure, or analyze millions of documents manually.

In an era of increasing threats to press freedom, these barriers directly impact our ability to hold power accountable.

## The Solution

Stringboard consolidates 27 specialized tools into a unified, secure-by-design platform that makes data journalism accessible while maintaining uncompromising source protection.

**Comprehensive Data Pipeline:**
- **Acquisition**: Web scraping, bulk downloads, BitTorrent, archive extraction
- **Processing**: Emails (EML/MBOX/PST), chat logs, CSV/JSON/SQL, transcription, translation
- **Analysis**: Full-text search, OCR, entity extraction, geospatial mapping, knowledge graphs
- **Security**: Encryption management, document sanitization, Tor integration

**Novel AI Architecture:**

First investigative tool to safely integrate AI assistance through privacy-preserving design:
- LLM agent operates via tool interfaces (MCP), never sees raw data
- Data isolated in read-only, network-isolated Docker sandbox
- Agent analyzes patterns from aggregate results only
- Maintains journalist-source confidentiality while leveraging AI capabilities

## Technical Architecture

**Service-Oriented Design** (42,639 lines of Python)
- Each capability exposed via CLI, REST API, and Python library
- Consistent patterns enable community extensibility
- Docker Compose orchestration with Celery for async processing

**Security-First Implementation**
- GPG container for encryption operations
- Dangerzone integration for document sanitization
- Tor and OnionShare for secure communications
- Network-isolated sandbox for AI agent execution

**Comprehensive Documentation**
- 64 markdown files covering all services and workflows
- Architecture diagrams and security models
- End-to-end investigation workflows

## Impact & Validation

**Community Response:**
- Beta testing with investigative journalists
- Endorsement from Micah Lee (author, "Hacks, Leaks, and Revelations")
- EFF Director of Security interest and planned public announcement
- Built for long-term maintenance and community contribution

**Origin Story:**

Inspired by Micah Lee's excellent book teaching journalists technical skills, but recognizing most reporters still face insurmountable barriers. Stringboard makes those techniques accessible without requiring a CS degree.

**The Mission:**

As stories are increasingly hidden in vast quantities of data, journalists shouldn't need to become data scientists to find them. This tool lowers barriers to high-quality data-driven journalism while protecting those who risk everything to expose truth.

## Technical Stack

Python | Docker | Celery | Redis | Whisper ASR | Pandas | MCP | Claude API  
FastAPI | Rich CLI | GPG | Dangerzone | ExifTool | Tor | OnionShare

## Current Status

**Beta Testing** - Active development, seeking feedback from journalists and security researchers.

[View Documentation](#) | [GitHub Repository](#)

---

**For Journalists:** Interested in beta testing? Contact me.  
**For Developers:** Contributions welcome on GitHub.  
**For Organizations:** Institutional deployment and security audit inquiries welcome.