# Creative Engineering Consulting — Website

Production-quality marketing homepage for **Creative Engineering Consulting**, an execution systems firm that installs structured, API-native workflow execution for operationally complex businesses.

Built with **Next.js 16** (App Router), **TypeScript**, **Tailwind CSS v4**, and optimized for deployment on **Vercel**.

## Run locally

```bash
bun install
bun run dev
```

Open [http://localhost:3000](http://localhost:3000).

## Scripts

| Command         | Description              |
| --------------- | ------------------------ |
| `bun run dev`   | Start development server |
| `bun run build` | Production build         |
| `bun run start` | Start production server  |
| `bun run lint`  | Run ESLint               |

## Deploy to Vercel

1. Push this repository to GitHub (or GitLab / Bitbucket).
2. In the [Vercel Dashboard](https://vercel.com/new), import the repository.
3. Use the default Next.js framework preset; root directory is the repo root.
4. Deploy. Vercel detects `bun.lock` and runs `bun run build` automatically.

After your production domain is assigned, update `SITE.url` in `lib/constants.ts` so Open Graph metadata resolves correctly.

## Project structure

- `app/` — App Router layout, global styles, homepage entry (`page.tsx`).
- `components/home/` — Homepage section components.
- `components/` — Shared chrome (`SiteHeader`, `SiteFooter`).
- `lib/constants.ts` — Site copy helpers, routes, and shared CTA styles.

## License

Private / all rights reserved unless otherwise specified by the owner.
