import Link from "next/link";
import { FeaturedProject } from "@/components/featured-project";
import { ProjectCard } from "@/components/project-card";
import { pillars, portfolioProjects, site } from "@/lib/site-config";
import { createMetadata } from "@/lib/metadata";

export const metadata = createMetadata({
  description: `${site.description}. ${site.tagline}`,
});

export default function HomePage() {
  const featured = portfolioProjects.find((p) => p.featured);
  const rest = portfolioProjects.filter((p) => !p.featured);

  return (
    <div className="space-y-16">
      <section className="space-y-6">
        <p className="text-sm font-medium uppercase tracking-widest text-amber-400/80">
          {site.description}
        </p>
        <h1 className="text-4xl font-bold tracking-tight text-zinc-50 sm:text-5xl">
          {site.tagline}
        </h1>
        <p className="max-w-2xl text-lg leading-relaxed text-zinc-400">
          From emergency medicine to cloud infrastructure, I solve complex problems in
          high-stakes environments where failure has consequences.
        </p>
        <p className="max-w-2xl text-sm leading-relaxed text-zinc-500">
          <span className="font-medium text-zinc-400">Currently:</span> {site.currently}
        </p>
        <div className="flex flex-wrap gap-3 pt-2">
          <Link
            href="/portfolio/"
            className="inline-flex items-center rounded-md bg-amber-500 px-4 py-2 text-sm font-medium text-zinc-950 hover:bg-amber-400 transition-colors"
          >
            View portfolio
          </Link>
          <a
            href={site.email}
            className="inline-flex items-center rounded-md border border-zinc-700 px-4 py-2 text-sm font-medium text-zinc-300 hover:border-zinc-600 hover:text-zinc-100 transition-colors"
          >
            Get in touch
          </a>
        </div>
      </section>

      <section className="space-y-6">
        <h2 className="text-2xl font-semibold text-zinc-50">Projects</h2>
        {featured && <FeaturedProject project={featured} />}
        <div className="grid gap-6 sm:grid-cols-2">
          {rest.map((project) => (
            <ProjectCard key={project.slug} project={project} />
          ))}
        </div>
      </section>

      <section className="space-y-8">
        <h2 className="text-2xl font-semibold text-zinc-50">Why This Matters</h2>
        <p className="text-zinc-400 leading-relaxed">
          Most engineers optimize for performance or scale. I optimize for impact in environments
          where failure has consequences.
        </p>
        <div className="grid gap-6 sm:grid-cols-3">
          {pillars.map((pillar) => (
            <div key={pillar.id} className="rounded-lg border border-zinc-800 bg-zinc-900/30 p-5">
              <h3 className="font-semibold text-zinc-100">{pillar.title}</h3>
              <p className="mt-2 text-sm leading-relaxed text-zinc-400">{pillar.hook}</p>
              <p className="mt-3 text-xs text-amber-400/80">{pillar.project}</p>
            </div>
          ))}
        </div>
      </section>

      <section className="space-y-4 border-t border-zinc-800 pt-10">
        <h2 className="text-2xl font-semibold text-zinc-50">Background</h2>
        <p className="text-zinc-400 leading-relaxed">
          <strong className="text-zinc-200">15 years:</strong> Emergency medicine, welding, heavy
          equipment operation, large-scale event production
          <br />
          <strong className="text-zinc-200">7 years:</strong> DevOps engineer → Senior Cloud
          Architect → Forward Deployed Engineer
        </p>
        <p className="text-zinc-500 text-sm">
          What transferred: Crisis management, systems thinking, operational discipline, precision
          under pressure
        </p>
        <Link href="/about/" className="inline-block text-sm text-amber-400 hover:text-amber-300 transition-colors">
          More about my journey →
        </Link>
      </section>
    </div>
  );
}
