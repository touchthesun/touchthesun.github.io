import ReactMarkdown from "react-markdown";
import remarkGfm from "remark-gfm";
import Link from "next/link";

const components = {
  a: ({ href, children, ...props }: React.ComponentProps<"a">) => {
    if (href?.startsWith("/")) {
      return (
        <Link href={href} className="text-amber-400 hover:text-amber-300 underline underline-offset-2" {...props}>
          {children}
        </Link>
      );
    }
    return (
      <a
        href={href}
        className="text-amber-400 hover:text-amber-300 underline underline-offset-2"
        target="_blank"
        rel="noopener noreferrer"
        {...props}
      >
        {children}
      </a>
    );
  },
  h2: ({ children, ...props }: React.ComponentProps<"h2">) => (
    <h2 className="mt-10 mb-4 text-2xl font-semibold text-zinc-50 first:mt-0" {...props}>
      {children}
    </h2>
  ),
  h3: ({ children, ...props }: React.ComponentProps<"h3">) => (
    <h3 className="mt-8 mb-3 text-xl font-semibold text-zinc-100" {...props}>
      {children}
    </h3>
  ),
  p: ({ children, ...props }: React.ComponentProps<"p">) => (
    <p className="mb-4 leading-relaxed text-zinc-300" {...props}>
      {children}
    </p>
  ),
  ul: ({ children, ...props }: React.ComponentProps<"ul">) => (
    <ul className="mb-4 list-disc space-y-1 pl-6 text-zinc-300" {...props}>
      {children}
    </ul>
  ),
  ol: ({ children, ...props }: React.ComponentProps<"ol">) => (
    <ol className="mb-4 list-decimal space-y-1 pl-6 text-zinc-300" {...props}>
      {children}
    </ol>
  ),
  li: ({ children, ...props }: React.ComponentProps<"li">) => (
    <li className="leading-relaxed" {...props}>
      {children}
    </li>
  ),
  strong: ({ children, ...props }: React.ComponentProps<"strong">) => (
    <strong className="font-semibold text-zinc-100" {...props}>
      {children}
    </strong>
  ),
  blockquote: ({ children, ...props }: React.ComponentProps<"blockquote">) => (
    <blockquote className="my-6 border-l-2 border-amber-500/50 pl-4 italic text-zinc-400" {...props}>
      {children}
    </blockquote>
  ),
  hr: () => <hr className="my-8 border-zinc-800" />,
  code: ({ className, children, ...props }: React.ComponentProps<"code">) => {
    const isBlock = className?.includes("language-");
    if (isBlock) {
      return (
        <code className={`block overflow-x-auto rounded-lg bg-zinc-900 p-4 text-sm text-zinc-300 ${className ?? ""}`} {...props}>
          {children}
        </code>
      );
    }
    return (
      <code className="rounded bg-zinc-800 px-1.5 py-0.5 text-sm text-amber-300" {...props}>
        {children}
      </code>
    );
  },
  pre: ({ children, ...props }: React.ComponentProps<"pre">) => (
    <pre className="my-4 overflow-x-auto rounded-lg bg-zinc-900" {...props}>
      {children}
    </pre>
  ),
  table: ({ children, ...props }: React.ComponentProps<"table">) => (
    <div className="my-6 overflow-x-auto">
      <table className="w-full border-collapse text-sm" {...props}>
        {children}
      </table>
    </div>
  ),
  th: ({ children, ...props }: React.ComponentProps<"th">) => (
    <th className="border border-zinc-700 bg-zinc-800 px-3 py-2 text-left font-medium text-zinc-200" {...props}>
      {children}
    </th>
  ),
  td: ({ children, ...props }: React.ComponentProps<"td">) => (
    <td className="border border-zinc-700 px-3 py-2 text-zinc-300" {...props}>
      {children}
    </td>
  ),
};

export function Markdown({ content }: { content: string }) {
  return (
    <div className="prose-custom">
      <ReactMarkdown remarkPlugins={[remarkGfm]} components={components}>
        {content}
      </ReactMarkdown>
    </div>
  );
}
