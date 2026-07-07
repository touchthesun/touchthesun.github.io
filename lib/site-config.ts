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
  featured?: boolean;
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
    "Senior Cloud Architect & Forward Deployed Engineer at DoIT International. Building Stringboard, open hardware coordination infrastructure, and production agentic AI systems.",
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
    id: "press-freedom" as const,
    title: "Press Freedom",
    hook: "Journalists need secure tools to investigate corruption without compromising sources.",
    project: "Stringboard",
  },
  {
    id: "manufacturing" as const,
    title: "Manufacturing Resilience",
    hook: "When supply chains collapse, distributed capacity exists but lacks coordination.",
    project: "Open Hardware Manager",
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
    slug: "stringboard",
    title: "Stringboard",
    excerpt:
      "Local-first platform for data journalism. AI-assisted analysis of leaked datasets without exposing sources to cloud infrastructure.",
    pillar: "press-freedom",
    status: "Beta",
    heroMetric: "Privacy-preserving AI toolkit; beta with investigative journalists; EFF Director interest",
    featured: true,
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
    slug: "ohm",
    title: "Open Hardware Manager",
    excerpt:
      "Infrastructure for manufacturing resilience. Universal data standards, automated matching, supply chain coordination.",
    pillar: "manufacturing",
    status: "v0.8.4",
    heroMetric: "Coordination infrastructure for 1,800+ maker orgs; 48M medical units produced during COVID-19",
    links: [
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
        label: "Docker release post",
        url: "/blog/ohm-docker/",
      },
    ],
  },
  {
    slug: "ai-systems",
    title: "Production AI Systems",
    excerpt:
      "Enterprise GenAI solutions. 12+ production deployments, $4.5M revenue impact, 97% CSAT across healthcare, SaaS, fintech.",
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
    heroMetric: "Open-source MCP server; pip install mcp-glovebox",
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
      "repo-map: Tree-sitter-based codebase comprehension for AI agents. Plus Claude Code skills for cleaner agentic development.",
    pillar: "tooling",
    heroMetric: "repo-map + Claude Code skills for agentic development",
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
