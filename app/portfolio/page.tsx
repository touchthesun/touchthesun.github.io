import { ProjectCard } from "@/components/project-card";
import { portfolioProjects } from "@/lib/site-config";
import { createMetadata } from "@/lib/metadata";

export const metadata = createMetadata({
  title: "Portfolio",
  description:
    "Projects spanning investigative journalism tools, open hardware infrastructure, and production AI systems.",
  path: "/portfolio/",
});

export default function PortfolioPage() {
  return (
    <div className="space-y-8">
      <header>
        <h1 className="text-3xl font-bold tracking-tight text-zinc-50 sm:text-4xl">Portfolio</h1>
        <p className="mt-3 text-lg text-zinc-400">
          A selection of projects spanning investigative journalism tools, open hardware
          infrastructure, and production AI systems.
        </p>
      </header>
      <div className="grid gap-6 sm:grid-cols-2">
        {portfolioProjects.map((project) => (
          <ProjectCard key={project.slug} project={project} />
        ))}
      </div>
    </div>
  );
}
