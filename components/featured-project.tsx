import Link from "next/link";
import type { PortfolioProject } from "@/lib/site-config";
import { pillarLabels } from "@/lib/site-config";

export function FeaturedProject({ project }: { project: PortfolioProject }) {
  const liveLink = project.links.find((l) => l.label === "Live site");
  const docsLink = project.links.find((l) => l.label === "Docs");

  return (
    <article className="relative overflow-hidden rounded-xl border border-amber-500/30 bg-gradient-to-br from-zinc-900 via-zinc-900 to-amber-950/20 p-6 sm:p-8">
      <div className="mb-4 flex flex-wrap items-center gap-2">
        <span className="text-xs font-medium uppercase tracking-widest text-amber-400/80">
          Featured
        </span>
        <span className="rounded-full bg-zinc-800 px-2.5 py-0.5 text-xs text-zinc-400">
          {pillarLabels[project.pillar]}
        </span>
        {project.status && (
          <span className="rounded-full bg-amber-950/50 px-2.5 py-0.5 text-xs text-amber-400/90">
            {project.status}
          </span>
        )}
      </div>

      <h2 className="text-2xl font-bold tracking-tight text-zinc-50 sm:text-3xl">
        <Link href={`/portfolio/${project.slug}/`} className="hover:text-amber-400 transition-colors">
          {project.title}
        </Link>
      </h2>

      <p className="mt-3 max-w-2xl text-base leading-relaxed text-zinc-400 sm:text-lg">
        {project.excerpt}
      </p>

      {project.heroMetric && (
        <ul className="mt-5 flex flex-wrap gap-x-4 gap-y-2 text-sm text-zinc-400">
          {project.heroMetric.split(";").map((metric) => (
            <li
              key={metric}
              className="flex items-center gap-2 before:h-1 before:w-1 before:rounded-full before:bg-amber-400/70 before:content-['']"
            >
              {metric.trim()}
            </li>
          ))}
        </ul>
      )}

      <div className="mt-6 flex flex-wrap gap-3">
        <Link
          href={`/portfolio/${project.slug}/`}
          className="inline-flex items-center rounded-md bg-amber-500 px-4 py-2 text-sm font-medium text-zinc-950 hover:bg-amber-400 transition-colors"
        >
          Read case study
        </Link>
        {liveLink && (
          <a
            href={liveLink.url}
            className="inline-flex items-center rounded-md border border-zinc-700 px-4 py-2 text-sm font-medium text-zinc-300 hover:border-zinc-600 hover:text-zinc-100 transition-colors"
            {...(liveLink.external ? { target: "_blank", rel: "noopener noreferrer" } : {})}
          >
            Live site
          </a>
        )}
        {docsLink && (
          <a
            href={docsLink.url}
            className="inline-flex items-center rounded-md border border-zinc-700 px-4 py-2 text-sm font-medium text-zinc-300 hover:border-zinc-600 hover:text-zinc-100 transition-colors"
            {...(docsLink.external ? { target: "_blank", rel: "noopener noreferrer" } : {})}
          >
            Docs
          </a>
        )}
      </div>
    </article>
  );
}
