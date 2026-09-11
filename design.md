# Design System — Creative Engineering / Unlockd

Every UI change on this site must read this file first. If a proposed change
conflicts with this file, the change is wrong — or the file gets updated in the
same commit with a reason.

## Funnel intent (the point of the site)

The site exists to move one visitor — an investment-firm operator — down one path:

```
Hero → Problem → Product (Edge fleet) → How it works (journey) → Proof → Offers → CTA
```

- **The sandbox is the conversion goal.** Primary CTAs site-wide lead to `/sandbox`.
- **The diagnostic is the fallback**, not the pitch. It lives at `/audit` and as
  secondary CTAs for buyers who need custom judgment.
- **Each page has one job.** If a section does not advance that page's job, cut it
  or move it to the page whose job it serves.

### Page jobs

| Route | Job | Ends in |
|---|---|---|
| `/` | Earn the sandbox click | FinalCTA → `/sandbox` |
| `/sandbox` | Convert intent into a request | `/contact` |
| `/unlockd` | Platform depth for evaluators | `/sandbox` |
| `/how-it-works` | Method + company doctrine for due-diligence readers | `/contact` |
| `/case-studies` + `[slug]` | Proof for skeptics | `/contact` |
| `/audit` | Sell the diagnostic to custom-judgment buyers | `/contact` |

## Voice

- Plain, operator-to-operator. No marketing adjectives, no "revolutionary", no
  exclamation marks. Claims carry evidence or they don't ship.
- Headlines state what the visitor gets, not what we feel.
  Good: "A complete investment firm you can operate before you buy."
  Bad: "Welcome to the future of operations."
- Body copy is short. If a paragraph exceeds 3 lines, split or cut it.

## Typography

- Headlines: `font-serif` (Newsreader), `font-medium`, `tracking-tight`.
  H1 `text-4xl → sm:text-5xl → lg:text-[3.25rem]`, leading `[1.08]`.
  Section H2 `text-3xl sm:text-4xl`. Card H3 `text-xl` or `text-2xl`.
- Body: `font-sans` (IBM Plex Sans), `text-sm`/`text-base`, `leading-relaxed`,
  `text-zinc-400` on dark, `text-zinc-300` for emphasized list items.
- Eyebrows/labels: `font-mono text-xs uppercase tracking-[0.22em] text-zinc-500`.
- Micro-labels inside cards: `font-mono text-[10px] uppercase tracking-widest text-zinc-600`.

## Palette (dark, zinc-first)

- Page background: `#030304` (set in layout). Section alternates: transparent,
  `bg-zinc-950/40`, `bg-zinc-950`. Never introduce a second hue family for surfaces.
- Borders: `border-zinc-900` (section rules), `border-zinc-800/80` (cards),
  hover `border-zinc-700/90`.
- Text: `text-zinc-50` headlines → `text-zinc-100` card titles →
  `text-zinc-300` emphasized → `text-zinc-400` body → `text-zinc-500/600` meta.
- Accents (sparingly, one per context): `emerald-400` for positive/active states,
  `sky-400` for proof/case-study markers. **No purple gradients. No gradients at
  all except the single CTA panel treatment already in use**
  (`bg-gradient-to-br from-zinc-900/60 to-zinc-950`, zinc-only).

## Shape & spacing

- Corners: `rounded-sm` everywhere. No pills, no `rounded-xl` cards.
- Section padding: `py-20 sm:py-24`; heroes `pt-24 sm:pt-28`.
- Container: `mx-auto max-w-6xl px-6 lg:px-8`.
- Section separators: `border-b border-zinc-900` on the `<section>`.
- Cards: `border border-zinc-800/80 bg-zinc-900/25 p-6` (or `p-8` for feature cards).
- Buttons: shared `buttonPrimaryClass` / `buttonSecondaryClass` from
  `lib/constants.ts`. Never hand-roll button styles.

## Composition rules

1. **Max ~8 sections per page.** Home page is the funnel; everything else earns
   its place or moves.
2. One idea per section. A section that needs two headlines is two sections —
   and one of them probably belongs on another page.
3. Alternate section backgrounds (transparent / `bg-zinc-950/40`) to create rhythm.
4. Company narrative (founder story, roadmap, operating principles, launch plans)
   does not live on the homepage funnel. It lives on `/how-it-works`.
5. Proof appears once per page, at full strength — not scattered as teasers.
6. Every section ends pointing somewhere: a link, a CTA, or the next section's
   evident tension. No dead ends.

## Workflow rules for agents editing this site

- Read this file before editing any component.
- Make the smallest change that serves the page's job.
- After editing, run `bun run lint && bun run build` and screenshot the affected
  page(s) before declaring done.
- New sections must state which funnel step they serve in their first comment.
