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

## Theme control

- **Dark is the default theme.** `:root` in `app/globals.css` is the dark theme;
  `.light` on `<html>` inverts to the paper theme. There is no system-follow mode.
- All color is tokenized: the zinc and accent ramps are CSS variables consumed via
  Tailwind `@theme inline`, so every utility (`bg-zinc-950`, `text-zinc-400`,
  `border-zinc-800`, `text-sky-300`, …) resolves per-theme. **Never hard-code a
  hex or a raw Tailwind zinc/accent color in a component — use the utility
  classes, which now resolve through the theme variables.** The one structural
  exception is the page background, read from `var(--background)`.
- Light theme is a true inversion: zinc ramp flipped 50↔950, accents stepped
  darker to keep AA contrast on paper, `--background` one step darker than the
  lightest surface so bordered cards still lift.
- The toggle is `components/ThemeToggle.tsx` in the header (desktop + mobile);
  `components/ThemeScript.tsx` bootstraps the stored choice before first paint
  (no flash). Choice persists in `localStorage` key `ce-theme`.
- The wordmark ships white-on-black, so it is inverted on the light theme via a
  global `img[src$="/logo.png"]` filter — no asset swap.

## Shape & spacing

- Corners: `rounded-sm` everywhere. No pills, no `rounded-xl` cards.
  Sole exception: `Badge` (status pill) via `components/primitives.tsx`.
- Section padding: `py-20 sm:py-24`; heroes `pt-24 sm:pt-28`.
- Container: `mx-auto max-w-6xl px-6 lg:px-8`.
- Section separators: `border-b border-zinc-900` on the `<section>`.
- Cards: `border border-zinc-800/80 bg-zinc-900/25 p-6` (or `p-8` for feature cards).
- Buttons: shared `buttonPrimaryClass` / `buttonSecondaryClass` from
  `lib/constants.ts`. Never hand-roll button styles.

### Shared primitives (use these, don't re-roll)

`components/primitives.tsx` is the code form of this file:

- `Section` — border-b + container + rhythm padding; `tone` = default / muted
  (`bg-zinc-950/40`) / solid; `hero` for hero padding.
- `Eyebrow` / `MicroLabel` — the two label sizes.
- `Card` / `Card feature` — the only card shape.
- `CtaPanel` — the only sanctioned gradient surface.
- `Badge` — the only `rounded-full` element.
- `SectionHeader` (components/home) stays the H2 block; it will move under
  primitives in a later pass.

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

## Product imagery

- **No stock photography, no fake dashboards.** Product imagery is code-rendered
  in `components/product-shots/` as `ConsoleFrame`-based surfaces — the console
  as it actually reads, on synthetic data.
- Every shot carries a `Synthetic data` tag in its window chrome; figures get a
  mono caption naming the surface and the synthetic-data fact.
- Shots are honest stand-ins: they show the shape of the product (console,
  inbox triage, pipeline, deployments) without claiming a live screenshot.
- Frames stay dark in both themes — they depict the dark console instrument,
  not the marketing surface.
- One shot per page section, mounted where it advances that section's point.

## Workflow rules for agents editing this site

- Read this file before editing any component.
- Make the smallest change that serves the page's job.
- After editing, run `bun run lint && bun run build` and screenshot the affected
  page(s) before declaring done.
- New sections must state which funnel step they serve in their first comment.
