import Link from "next/link";
import { getAllBlogPosts } from "@/lib/content";
import { createMetadata } from "@/lib/metadata";

export const metadata = createMetadata({
  title: "Blog",
  description: "Notes on architecture, tooling, and the occasional build log.",
  path: "/blog/",
});

export default function BlogPage() {
  const posts = getAllBlogPosts();

  return (
    <div className="space-y-8">
      <header>
        <h1 className="text-3xl font-bold tracking-tight text-zinc-50 sm:text-4xl">Blog</h1>
        <p className="mt-3 text-lg text-zinc-400">
          Notes on architecture, tooling, and the occasional build log.
        </p>
      </header>
      <div className="space-y-6">
        {posts.map((post) => (
          <article
            key={post.slug}
            className="rounded-lg border border-zinc-800 bg-zinc-900/30 p-6 transition-colors hover:border-zinc-700"
          >
            <time className="text-sm text-zinc-500">
              {post.date
                ? new Date(post.date).toLocaleDateString("en-US", {
                    year: "numeric",
                    month: "long",
                    day: "numeric",
                  })
                : ""}
            </time>
            <h2 className="mt-2 text-xl font-semibold">
              <Link
                href={`/blog/${post.slug}/`}
                className="text-zinc-50 hover:text-amber-400 transition-colors"
              >
                {post.title}
              </Link>
            </h2>
            {post.description && (
              <p className="mt-2 text-sm text-zinc-400">{post.description}</p>
            )}
            {post.tags && post.tags.length > 0 && (
              <div className="mt-3 flex flex-wrap gap-2">
                {post.tags.map((tag) => (
                  <span
                    key={tag}
                    className="rounded-full bg-zinc-800 px-2 py-0.5 text-xs text-zinc-500"
                  >
                    {tag}
                  </span>
                ))}
              </div>
            )}
          </article>
        ))}
      </div>
    </div>
  );
}
