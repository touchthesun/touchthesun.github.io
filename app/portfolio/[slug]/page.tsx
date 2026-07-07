import { notFound } from "next/navigation";
import { Markdown } from "@/components/markdown";
import { ProjectActions } from "@/components/project-actions";
import { getPortfolioContent, getAllPortfolioSlugs } from "@/lib/content";
import { getProject, pillarLabels } from "@/lib/site-config";
import { createMetadata } from "@/lib/metadata";

type Props = {
  params: Promise<{ slug: string }>;
};

export async function generateStaticParams() {
  return getAllPortfolioSlugs().map((slug) => ({ slug }));
}

export async function generateMetadata({ params }: Props) {
  const { slug } = await params;
  const project = getProject(slug);
  if (!project) return {};

  return createMetadata({
    title: project.title,
    description: project.excerpt,
    path: `/portfolio/${slug}/`,
  });
}

export default async function PortfolioDetailPage({ params }: Props) {
  const { slug } = await params;
  const project = getProject(slug);
  if (!project) notFound();

  const content = getPortfolioContent(slug);

  return (
    <article>
      <header className="mb-6">
        <div className="mb-3 flex flex-wrap items-center gap-2">
          <span className="rounded-full bg-zinc-800 px-2.5 py-0.5 text-xs text-zinc-400">
            {pillarLabels[project.pillar]}
          </span>
        </div>
        <h1 className="text-3xl font-bold tracking-tight text-zinc-50 sm:text-4xl">
          {project.title}
        </h1>
        <p className="mt-3 text-lg text-zinc-400">{project.excerpt}</p>
      </header>

      <ProjectActions links={project.links} status={project.status} />
      <Markdown content={content.content} />
    </article>
  );
}
