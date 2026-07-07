import Link from "next/link";

export default function NotFound() {
  return (
    <div className="py-16 text-center">
      <h1 className="text-4xl font-bold text-zinc-50">404</h1>
      <p className="mt-4 text-zinc-400">Page not found.</p>
      <Link
        href="/"
        className="mt-6 inline-block text-amber-400 hover:text-amber-300 transition-colors"
      >
        Back to home
      </Link>
    </div>
  );
}
