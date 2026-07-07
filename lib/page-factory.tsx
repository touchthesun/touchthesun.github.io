import { Markdown } from "@/components/markdown";
import { getPageContent } from "@/lib/content";
import { createMetadata } from "@/lib/metadata";

type PageProps = {
  name: string;
  path: string;
};

export function createPage({ name, path }: PageProps) {
  const content = getPageContent(name);

  return {
    metadata: createMetadata({
      title: content.title,
      description: content.description,
      path,
    }),
    Page: function Page() {
      return (
        <article>
          <header className="mb-8">
            <h1 className="text-3xl font-bold tracking-tight text-zinc-50 sm:text-4xl">
              {content.title}
            </h1>
            {content.description && (
              <p className="mt-3 text-lg text-zinc-400">{content.description}</p>
            )}
          </header>
          <Markdown content={content.content} />
        </article>
      );
    },
  };
}
