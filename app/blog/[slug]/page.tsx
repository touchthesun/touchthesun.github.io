import { notFound } from "next/navigation";
import { Markdown } from "@/components/markdown";
import { getBlogPost, getAllBlogSlugs } from "@/lib/content";
import { createMetadata } from "@/lib/metadata";

type Props = {
  params: Promise<{ slug: string }>;
};

export async function generateStaticParams() {
  return getAllBlogSlugs().map((slug) => ({ slug }));
}

export async function generateMetadata({ params }: Props) {
  const { slug } = await params;
  const post = getBlogPost(slug);

  return createMetadata({
    title: post.title,
    description: post.description,
    path: `/blog/${slug}/`,
  });
}

export default async function BlogPostPage({ params }: Props) {
  const { slug } = await params;

  try {
    const post = getBlogPost(slug);
    return (
      <article>
        <header className="mb-8">
          <time className="text-sm text-zinc-500">
            {post.date
              ? new Date(post.date).toLocaleDateString("en-US", {
                  year: "numeric",
                  month: "long",
                  day: "numeric",
                })
              : ""}
          </time>
          <h1 className="mt-2 text-3xl font-bold tracking-tight text-zinc-50 sm:text-4xl">
            {post.title}
          </h1>
          {post.tags && post.tags.length > 0 && (
            <div className="mt-4 flex flex-wrap gap-2">
              {post.tags.map((tag) => (
                <span
                  key={tag}
                  className="rounded-full bg-zinc-800 px-2.5 py-0.5 text-xs text-zinc-500"
                >
                  {tag}
                </span>
              ))}
            </div>
          )}
        </header>
        <Markdown content={post.content} />
      </article>
    );
  } catch {
    notFound();
  }
}
