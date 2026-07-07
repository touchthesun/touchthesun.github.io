import Link from "next/link";
import { navigation, site } from "@/lib/site-config";

export function Header() {
  return (
    <header className="border-b border-zinc-800 bg-zinc-950/80 backdrop-blur-sm sticky top-0 z-50">
      <div className="mx-auto flex max-w-5xl items-center justify-between gap-4 px-4 py-4 sm:px-6">
        <Link href="/" className="text-lg font-semibold tracking-tight text-zinc-50 hover:text-amber-400 transition-colors">
          {site.name}
        </Link>
        <nav className="flex flex-wrap items-center justify-end gap-x-4 gap-y-2 text-sm text-zinc-400">
          {navigation.map((item) => (
            <Link
              key={item.href}
              href={item.href}
              className="hover:text-zinc-100 transition-colors"
            >
              {item.title}
            </Link>
          ))}
        </nav>
      </div>
    </header>
  );
}
