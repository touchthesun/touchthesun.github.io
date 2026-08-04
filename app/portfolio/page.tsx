import { FeaturedProject } from "@/components/featured-project";
import { ProjectCard } from "@/components/project-card";
import { portfolioProjects } from "@/lib/site-config";
import { createMetadata } from "@/lib/metadata";

export const metadata = createMetadata({
  title: "Portfolio",
  description:
    "Open hardware infrastructure for manufacturing resilience, investigative journalism tools, and production AI systems.",
  path: "/portfolio/",
});

export default function PortfolioPage() {
  const featured = portfolioProjects.find((p) => p.featured);
  const rest = portfolioProjects.filter((p) => !p.featured);

  return (
    <div className="space-y-8">
      <header>
        <h1 className="text-3xl font-bold tracking-tight text-zinc-50 sm:text-4xl">Portfolio</h1>
        <p className="mt-3 text-lg text-zinc-400">
          Open hardware infrastructure for manufacturing resilience, plus tools for investigative
          journalism and production AI systems.
        </p>
      </header>
      {featured && <FeaturedProject project={featured} />}
      <div className="grid gap-6 sm:grid-cols-2">
        {rest.map((project) => (
          <ProjectCard key={project.slug} project={project} />
        ))}
      </div>
    </div>
  );
}
