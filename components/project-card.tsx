import Link from "next/link";
import type { PortfolioProject } from "@/lib/site-config";
import { pillarLabels } from "@/lib/site-config";

export function ProjectCard({ project }: { project: PortfolioProject }) {
  return (
    <article className="group flex flex-col rounded-lg border border-zinc-800 bg-zinc-900/50 p-6 transition-colors hover:border-zinc-700 hover:bg-zinc-900">
      <div className="mb-3 flex items-center gap-2">
        <span className="rounded-full bg-zinc-800 px-2.5 py-0.5 text-xs text-zinc-400">
          {pillarLabels[project.pillar]}
        </span>
        {project.status && (
          <span className="rounded-full bg-amber-950/50 px-2.5 py-0.5 text-xs text-amber-400/90">
            {project.status}
          </span>
        )}
      </div>
      <h2 className="text-xl font-semibold text-zinc-50 group-hover:text-amber-400 transition-colors">
        <Link href={`/portfolio/${project.slug}/`}>{project.title}</Link>
      </h2>
      <p className="mt-2 flex-1 text-sm leading-relaxed text-zinc-400">{project.excerpt}</p>
      <div className="mt-4 flex flex-wrap gap-2">
        <Link
          href={`/portfolio/${project.slug}/`}
          className="inline-flex items-center rounded-md bg-amber-500/10 px-3 py-1.5 text-sm font-medium text-amber-400 hover:bg-amber-500/20 transition-colors"
        >
          Read more
        </Link>
        {project.links.slice(0, 1).map((link) => (
          <a
            key={link.url}
            href={link.url}
            className="inline-flex items-center rounded-md border border-zinc-700 px-3 py-1.5 text-sm text-zinc-300 hover:border-zinc-600 hover:text-zinc-100 transition-colors"
            {...(link.external ? { target: "_blank", rel: "noopener noreferrer" } : {})}
          >
            {link.label}
          </a>
        ))}
      </div>
    </article>
  );
}
