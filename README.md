# maker-nathan.dev

Personal portfolio and blog for Nathan Parker — built with Next.js and deployed on Vercel.

## Development

```bash
npm install
npm run dev
```

Open [http://localhost:3000](http://localhost:3000).

## Commands

```bash
npm run dev      # local dev server with Turbopack
npm run build    # production build
npm run start    # serve production build
npm run lint     # ESLint
```

## Structure

- **`app/`** — Next.js App Router pages and layouts
- **`components/`** — React components (Header, Footer, Markdown, etc.)
- **`content/`** — Markdown content (portfolio, blog, pages)
- **`lib/`** — Site config, content loader, metadata helpers
- **`public/`** — Static assets
- **`notes/`** — Planning notes (not deployed)

## Content

- Portfolio projects: `content/portfolio/*.md`
- Blog posts: `content/blog/*.md`
- Static pages: `content/pages/*.md`
- Site config and nav: `lib/site-config.ts`

## Deployment

Deployed on [Vercel](https://vercel.com). Custom domain: `maker-nathan.dev`.

### First-time Vercel setup

1. Push this repo to GitHub
2. Import the repo at [vercel.com/new](https://vercel.com/new)
3. Vercel auto-detects Next.js — no build config needed
4. Add custom domain `maker-nathan.dev` in Vercel project settings
5. Update DNS: point `maker-nathan.dev` to Vercel (A record `76.76.21.21` or CNAME `cname.vercel-dns.com`)
6. Disable GitHub Pages for this repo once Vercel is live

### Permalink redirects

Legacy Jekyll blog URLs (`/architecture/YYYY/MM/DD/slug/`) redirect to `/blog/slug/` via `next.config.ts`.
