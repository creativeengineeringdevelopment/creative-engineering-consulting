<!-- BEGIN:nextjs-agent-rules -->
# This is NOT the Next.js you know

This version has breaking changes — APIs, conventions, and file structure may all differ from your training data. Read the relevant guide in `node_modules/next/dist/docs/` before writing any code. Heed deprecation notices.
<!-- END:nextjs-agent-rules -->

## Learned User Preferences

- When updating this marketing site, keep the existing layout and section structure unless the request explicitly expands scope (copy-only changes are common).
- Prefer direct, operator-focused copy: concrete outcomes, no fluff, no “AI magic,” and avoid generic consulting tone.
- When a brief includes “DO NOT ASK QUESTIONS” or equivalent, implement with strong defaults instead of opening clarification threads.
- Site positioning should stay execution-systems-first (operations that run automatically), not an AI agency, dev shop, or generic tool rollout; treat AI as bounded steps inside workflows, not the product headline everywhere.
- System Audit and related pages are conversion-critical: frame the audit as structured diagnosis of how work executes, not a casual discovery call or generic contact page.

## Learned Workspace Facts

- This repo is the Creative Engineering Consulting Next.js marketing site (App Router, Tailwind, shared patterns under `components/home/`, inner pages under `app/`).
- Local and scripted workflows use Bun (`bun install`, `bun run dev`, `bun run build`); deployment can follow `bun.lock` on Vercel when present.
- Primary routes include `/` (home), `/how-it-works`, `/audit` (System Audit), and `/contact` (booking path when no external scheduler is configured).
- Booking-related behavior is driven by optional env vars `NEXT_PUBLIC_BOOKING_URL` and `NEXT_PUBLIC_CONTACT_EMAIL`, documented in `.env.example`, with helpers and shared CTAs in `lib/constants.ts` (and related components).
- Absolute marketing URLs and site metadata use `SITE` values in `lib/constants.ts` (update `SITE.url` when the production domain is finalized).
- The GitHub remote for this project targets the `creativeengineeringdevelopment` organization repository `creative-engineering-consulting`.
- `.cursor/` is intentionally excluded from version control for local IDE state.

## October 2026 redesign

- Current positioning: founder-led AI-enabled operational software for investment and real-estate businesses; scoped implementation with source access, internal-use rights and optional support.
- The redesign replaces the old section component directories with route content, Shared, WorkCards, CapabilityDemo and ContactForm. Case content lives in lib/work.ts.
- Current routes also include /work, /work/[slug], /about and /privacy. Keep existing /audit, /contact and /how-it-works URLs functional.
- Public contact is CONTACT_EMAIL in lib/constants.ts; the new flow does not use the earlier optional booking environment variables. It prepares an email locally with mailto and copy options and must never claim a message was sent.
- The capability explorer is explicitly illustrative. Do not imply it has connected accounts or executed live actions.
- Career narrative and 30,000-investor context come from Jared. Do not invent performance metrics, client endorsements, legal qualifications or regulatory approvals.
- The $30,000 starting offer is a proposed commercial price, not a historical transaction average. Distinguish source access/internal-use rights from an exclusive IP sale.
- Keep the cream/cobalt/forest visual direction, responsive layouts, visible focus states and reduced-motion support unless a later request changes direction.
