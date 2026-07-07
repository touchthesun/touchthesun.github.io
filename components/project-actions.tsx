import type { ProjectLink } from "@/lib/site-config";

export function ProjectActions({ links, status }: { links: ProjectLink[]; status?: string }) {
  if (links.length === 0) return null;

  return (
    <div className="mb-8 rounded-lg border border-zinc-800 bg-zinc-900/50 p-4">
      {status && (
        <p className="mb-3 text-sm text-amber-400/90">
          <span className="font-medium">Status:</span> {status}
        </p>
      )}
      <div className="flex flex-wrap gap-2">
        {links.map((link) => (
          <a
            key={link.url}
            href={link.url}
            className="inline-flex items-center rounded-md bg-amber-500/10 px-4 py-2 text-sm font-medium text-amber-400 hover:bg-amber-500/20 transition-colors"
            {...(link.external ? { target: "_blank", rel: "noopener noreferrer" } : {})}
          >
            {link.label}
          </a>
        ))}
      </div>
    </div>
  );
}
