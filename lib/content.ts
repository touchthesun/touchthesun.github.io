import fs from "fs";
import path from "path";
import matter from "gray-matter";

const contentDir = path.join(process.cwd(), "content");

export type ContentMeta = {
  title: string;
  description?: string;
  date?: string;
  categories?: string[];
  tags?: string[];
  slug: string;
};

export type ContentItem = ContentMeta & {
  content: string;
};

function readMarkdownFile(filePath: string, slug: string): ContentItem {
  const raw = fs.readFileSync(filePath, "utf8");
  const { data, content } = matter(raw);
  return {
    slug,
    title: data.title as string,
    description: data.description as string | undefined,
    date: data.date as string | undefined,
    categories: data.categories as string[] | undefined,
    tags: data.tags as string[] | undefined,
    content,
  };
}

export function getPageContent(name: string): ContentItem {
  const filePath = path.join(contentDir, "pages", `${name}.md`);
  return readMarkdownFile(filePath, name);
}

export function getPortfolioContent(slug: string): ContentItem {
  const filePath = path.join(contentDir, "portfolio", `${slug}.md`);
  return readMarkdownFile(filePath, slug);
}

export function getAllPortfolioSlugs(): string[] {
  const dir = path.join(contentDir, "portfolio");
  return fs
    .readdirSync(dir)
    .filter((f) => f.endsWith(".md"))
    .map((f) => f.replace(/\.md$/, ""));
}

export function getBlogPost(slug: string): ContentItem {
  const filePath = path.join(contentDir, "blog", `${slug}.md`);
  return readMarkdownFile(filePath, slug);
}

export function getAllBlogPosts(): ContentItem[] {
  const dir = path.join(contentDir, "blog");
  return fs
    .readdirSync(dir)
    .filter((f) => f.endsWith(".md"))
    .map((f) => getBlogPost(f.replace(/\.md$/, "")))
    .sort((a, b) => {
      if (!a.date || !b.date) return 0;
      return new Date(b.date).getTime() - new Date(a.date).getTime();
    });
}

export function getAllBlogSlugs(): string[] {
  return getAllBlogPosts().map((p) => p.slug);
}
