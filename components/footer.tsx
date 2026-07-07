import { site } from "@/lib/site-config";

export function Footer() {
  return (
    <footer className="border-t border-zinc-800 mt-16">
      <div className="mx-auto max-w-5xl px-4 py-10 sm:px-6">
        <div className="flex flex-col gap-6 sm:flex-row sm:items-center sm:justify-between">
          <div className="space-y-2 text-sm text-zinc-400">
            <p>
              Built with{" "}
              <a
                href="https://nextjs.org"
                className="text-zinc-300 hover:text-amber-400 transition-colors"
                target="_blank"
                rel="noopener noreferrer"
              >
                Next.js
              </a>
              {" · "}Deployed on{" "}
              <a
                href="https://vercel.com"
                className="text-zinc-300 hover:text-amber-400 transition-colors"
                target="_blank"
                rel="noopener noreferrer"
              >
                Vercel
              </a>
            </p>
            <p className="text-zinc-500">
              <a href={site.sourceRepo} className="hover:text-zinc-300 transition-colors" target="_blank" rel="noopener noreferrer">
                Source on GitHub
              </a>
            </p>
          </div>
          <div className="flex flex-wrap gap-4 text-sm text-zinc-400">
            <a href={site.linkedin} className="hover:text-zinc-100 transition-colors" target="_blank" rel="noopener noreferrer">
              LinkedIn
            </a>
            <a href={site.github} className="hover:text-zinc-100 transition-colors" target="_blank" rel="noopener noreferrer">
              GitHub
            </a>
            <a href={site.email} className="hover:text-zinc-100 transition-colors">
              Email
            </a>
          </div>
        </div>
      </div>
    </footer>
  );
}
