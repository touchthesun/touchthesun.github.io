import { uses } from "@/lib/site-config";
import { createMetadata } from "@/lib/metadata";

export const metadata = createMetadata({
  title: "Uses",
  description: "Languages, frameworks, tools, and infrastructure I actually reach for.",
  path: "/uses/",
});

function Section({ title, items }: { title: string; items: string[] }) {
  return (
    <div>
      <h2 className="text-lg font-semibold text-zinc-100">{title}</h2>
      <p className="mt-2 text-zinc-400">{items.join(" · ")}</p>
    </div>
  );
}

export default function UsesPage() {
  return (
    <article className="space-y-8">
      <header>
        <h1 className="text-3xl font-bold tracking-tight text-zinc-50 sm:text-4xl">Uses</h1>
        <p className="mt-3 text-lg text-zinc-400">
          What I actually reach for — not an aspirational stack list.
        </p>
      </header>
      <div className="space-y-6">
        <Section title="Languages" items={uses.languages} />
        <Section title="Frameworks" items={uses.frameworks} />
        <Section title="Cloud & Infrastructure" items={uses.cloud} />
        <Section title="AI Tools" items={uses.ai} />
        <Section title="Editor" items={[uses.editor]} />
        <Section title="OS" items={[uses.os]} />
      </div>
    </article>
  );
}
