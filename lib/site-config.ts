export type Pillar = "press-freedom" | "manufacturing" | "commercial-ai" | "tooling";

export type ProjectLink = {
  label: string;
  url: string;
  external?: boolean;
};

export type PortfolioProject = {
  slug: string;
  title: string;
  excerpt: string;
  pillar: Pillar;
  status?: string;
  heroMetric?: string;
  links: ProjectLink[];
};

export type NavItem = {
  title: string;
  href: string;
};

export const site = {
  name: "Nathan Parker",
  title: "Nathan Parker",
  description: "Cloud Architect & Systems Builder",
  url: "https://maker-nathan.dev",
  tagline: "Shipping AI systems people can operate.",
  bio: "Cloud Architect & Systems Builder. Building systems that protect press freedom and enable manufacturing resilience.",
  location: "Tacoma, WA",
  currently:
    "Senior Cloud Architect & Forward Deployed Engineer at DoIT International. Building Open Hardware Manager, Stringboard, and production agentic AI systems.",
  github: "https://github.com/touchthesun",
  gitlab: "https://gitlab.com/maker-nathan",
  linkedin: "https://linkedin.com/in/maker-nathan",
  email: "mailto:nathan@makernet.work",
  calendly: "https://calendly.com/nathan-makernet/30min",
  sourceRepo: "https://github.com/touchthesun/touchthesun.github.io",
} as const;

export const navigation: NavItem[] = [
  { title: "About", href: "/about/" },
  { title: "Portfolio", href: "/portfolio/" },
  { title: "Speaking", href: "/speaking/" },
  { title: "Blog", href: "/blog/" },
  { title: "Uses", href: "/uses/" },
  { title: "Contact", href: "/contact/" },
];

export const pillars = [
  {
    id: "manufacturing" as const,
    title: "Manufacturing Resilience",
    hook: "When supply chains collapse, distributed capacity exists but lacks coordination.",
    project: "Open Hardware Manager",
  },
  {
    id: "press-freedom" as const,
    title: "Press Freedom",
    hook: "Journalists need secure tools to investigate corruption without compromising sources.",
    project: "Stringboard",
  },
  {
    id: "commercial-ai" as const,
    title: "Commercial AI",
    hook: "Enterprises need AI systems that actually work in production under real constraints.",
    project: "Production AI Systems",
  },
];

export const portfolioProjects: PortfolioProject[] = [
  {
    slug: "ohm",
    title: "Open Hardware Manager",
    excerpt:
      "Infrastructure for manufacturing resilience. Universal data standards, automated matching, supply chain coordination — now with a live web frontend.",
    pillar: "manufacturing",
    status: "v0.9.0 · Active development",
    heroMetric: "1,800+ maker orgs coordinated; 48M medical units produced during COVID-19",
    links: [
      {
        label: "Live site",
        url: "https://www.openhardwaremanager.org/",
        external: true,
      },
      {
        label: "GitHub",
        url: "https://github.com/helpfulengineering/supply-graph-ai",
        external: true,
      },
      {
        label: "Docker Hub",
        url: "https://hub.docker.com/r/touchthesun/openhardwaremanager",
        external: true,
      },
      {
        label: "Frontend launch post",
        url: "/blog/ohm-frontend-launch/",
      },
    ],
  },
  {
    slug: "stringboard",
    title: "Stringboard",
    excerpt:
      "Local-first platform for data journalism. AI-assisted analysis of leaked datasets without exposing sources to cloud infrastructure.",
    pillar: "press-freedom",
    status: "Beta",
    heroMetric: "In beta with investigative journalists; EFF Director interest",
    links: [
      {
        label: "Source",
        url: "https://gitlab.com/stringboard/stringboard",
        external: true,
      },
      {
        label: "Architecture writeup",
        url: "/blog/stringboard-mcp-privacy-architecture/",
      },
      {
        label: "Request beta access",
        url: "mailto:nathan@makernet.work",
      },
    ],
  },
  {
    slug: "ai-systems",
    title: "Production AI Systems",
    excerpt:
      "Enterprise GenAI built for real production constraints — healthcare, SaaS, and fintech systems that had to survive contact with actual users.",
    pillar: "commercial-ai",
    heroMetric: "12+ production deployments; $4.5M revenue impact; 97% CSAT",
    links: [
      {
        label: "Discuss case studies",
        url: "/contact/",
      },
      {
        label: "Training materials",
        url: "https://gitlab.com/maker-nathan/ai-training-and-threat-modeling",
        external: true,
      },
    ],
  },
  {
    slug: "glovebox",
    title: "Glovebox",
    excerpt:
      "Open-source MCP server for privacy-preserving AI analysis. Models get metadata and aggregates — never raw content.",
    pillar: "press-freedom",
    status: "v0.3.0",
    heroMetric: "Four tools, one boundary; Adversarial suite tests every escape path; pip install mcp-glovebox",
    links: [
      {
        label: "PyPI",
        url: "https://pypi.org/project/mcp-glovebox/",
        external: true,
      },
      {
        label: "Source",
        url: "https://gitlab.com/maker-nathan/glovebox",
        external: true,
      },
      {
        label: "Docker Hub",
        url: "https://hub.docker.com/r/touchthesun/glovebox",
        external: true,
      },
      {
        label: "Architecture writeup",
        url: "/blog/stringboard-mcp-privacy-architecture/",
      },
    ],
  },
  {
    slug: "ai-tooling",
    title: "AI Developer Tooling",
    excerpt:
      "repo-map: codebase comprehension agents can grep instead of reading whole. lesson: turns a correction into an enforceable hook, lint rule, or skill so the same mistake can't recur. Plus more Claude Code skills for cleaner agentic development.",
    pillar: "tooling",
    heroMetric: "Tree-sitter tag extraction, no LLM calls; 1,500-line map in under 3 seconds; MIT licensed",
    links: [
      {
        label: "Source",
        url: "https://gitlab.com/maker-nathan/my-skills",
        external: true,
      },
    ],
  },
];

export const pillarLabels: Record<Pillar, string> = {
  "press-freedom": "Press Freedom",
  manufacturing: "Manufacturing",
  "commercial-ai": "Commercial AI",
  tooling: "Developer Tooling",
};

export const uses = {
  languages: ["Python", "TypeScript", "Go", "Bash"],
  frameworks: ["Next.js", "React", "FastAPI", "LangGraph"],
  cloud: ["GCP", "AWS", "Kubernetes", "Terraform", "Docker"],
  ai: ["Claude", "Bedrock", "Vertex AI", "MCP", "Cursor", "Claude Code"],
  editor: "Cursor",
  os: "macOS",
};

export function getProject(slug: string): PortfolioProject | undefined {
  return portfolioProjects.find((p) => p.slug === slug);
}

export function pageTitle(page?: string): string {
  return page ? `${page} · ${site.name}` : site.name;
}
