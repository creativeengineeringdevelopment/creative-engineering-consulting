# Creative Engineering Consulting

Founder-led implementation practice for AI-enabled operations in investment and real-estate businesses. Next.js 16.2.3, React 19, TypeScript, Tailwind 4; deployed to the existing Vercel consultancy project.

## Development

```sh
bun install --frozen-lockfile
bun run dev
bun run lint
bunx tsc --noEmit
bun run build
bun run start
```

The production build downloads and self-hosts IBM Plex Sans and Newsreader through `next/font`. Network access is needed on a clean build.

## Site map

- `/`: positioning, selected experience, capabilities demo and engagement overview.
- `/work`: case-study index.
- `/work/[slug]`: three statically generated cases sourced from `lib/work.ts`.
- `/about`: founder journey from 2022 to the present.
- `/how-it-works`: software rights, implementation, payment structure, handoff and FAQ.
- `/audit`: assessment scope and engagement entry point.
- `/contact`: local inquiry composer and direct email contact.
- `/privacy`: inquiry handling and site information.
- Generated sitemap, robots, icon, social image and custom 404.

## Contact behavior

`CONTACT_EMAIL` in `lib/constants.ts` is the single recipient setting. It uses Jared's contact email from his existing portfolio. No email API key, CRM, database or scheduler is required.

The form validates required fields and prepares an email **locally**. It then offers a `mailto:` draft and copy fallback. It never claims to have sent a message. Editing fields clears an earlier prepared draft. The visitor must send through their own email application. No test inquiry was emailed during verification.

## Interactive example

`CapabilityDemo` presents three illustrative workflows with an approval checkpoint. All figures are example data, explicitly labeled. The demo does not connect accounts, call models or execute business actions. The production integration described by the offer must be scoped and delivered per client.

## Content and commercial decisions

The October 2026 redesign uses Jared's supplied career chronology and previously reviewed résumé/project evidence. Specific outcomes are not invented. Case studies describe work across operating roles, not current client endorsements. The 30,000 active-investor figure is Jared's reported business context, not an independently audited user count.

Mentorship is described as practical learning, not a legal qualification. REtokens application preparation is not described as an approved registration. The offer starts at $30,000 as a new proposed commercial starting price, not a historical average. Source access/internal-use rights are distinct from exclusive IP ownership. Hosted dependencies, support and third-party charges must be specified in each agreement.

No confidential internal records, investor data, private contracts or personal assessments are included in this repository.

## Deployment

Existing project: `creative-engineering-consulting`, project ID `prj_Rva7PxUPWsYog0IdAZ6uzDPMxr60`, team `creative-engineering`. Verify those targets before release. Stage a production deployment with `--prod --skip-domain`, inspect it, then promote the tested build. The `.vercel` directory and local credentials must remain untracked.

Production URL: https://creative-engineering-consulting.vercel.app

## Maintenance

- Visual tokens and responsive rules: `app/globals.css`.
- Contact address, canonical URL and description: `lib/constants.ts`.
- Case-study source content: `lib/work.ts`.
- Shared navigation, footer and CTA: `components/`.
- Most content renders statically; only the example and inquiry composer are client components.

All rights reserved unless otherwise specified by the owner.
