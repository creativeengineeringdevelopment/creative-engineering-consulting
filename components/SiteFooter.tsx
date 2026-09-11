import Link from "next/link";
import { ROUTES, SITE } from "@/lib/constants";

const FOOTER_GROUPS = [
  {
    title: "Product",
    links: [
      { href: ROUTES.unlockd, label: "Unlockd platform" },
      { href: ROUTES.sandbox, label: "Sandbox" },
      { href: ROUTES.pricing, label: "Pricing" },
    ],
  },
  {
    title: "Company",
    links: [
      { href: ROUTES.howItWorks, label: "Method" },
      { href: ROUTES.caseStudies, label: "Case studies" },
      { href: ROUTES.contact, label: "Contact" },
    ],
  },
  {
    title: "Engage",
    links: [
      { href: ROUTES.audit, label: "Operating System Diagnostic" },
      { href: ROUTES.contact, label: "Custom engagement" },
    ],
  },
] as const;

export function SiteFooter() {
  const year = new Date().getFullYear();

  return (
    <footer className="border-t border-zinc-900 bg-zinc-950">
      <div className="mx-auto max-w-6xl px-6 py-12 lg:px-8">
        <div className="grid gap-10 sm:grid-cols-2 lg:grid-cols-4">
          <div className="space-y-3">
            <p className="font-mono text-xs uppercase tracking-[0.22em] text-zinc-500">
              {SITE.name}
            </p>
            <p className="max-w-xs text-sm leading-relaxed text-zinc-500">
              Agentic operating systems for investment managers. Explore free,
              deploy into infrastructure you own.
            </p>
          </div>
          {FOOTER_GROUPS.map((group) => (
            <nav key={group.title} aria-label={`Footer — ${group.title}`}>
              <p className="font-mono text-[10px] uppercase tracking-widest text-zinc-600">
                {group.title}
              </p>
              <ul className="mt-4 space-y-2.5">
                {group.links.map(({ href, label }) => (
                  <li key={`${href}-${label}`}>
                    <Link
                      href={href}
                      className="text-sm text-zinc-400 transition hover:text-zinc-200"
                    >
                      {label}
                    </Link>
                  </li>
                ))}
              </ul>
            </nav>
          ))}
        </div>
        <div className="mt-12 flex flex-col gap-3 border-t border-zinc-900 pt-6 text-sm text-zinc-600 sm:flex-row sm:items-center sm:justify-between">
          <p>© {year} {SITE.name}. All rights reserved.</p>
          <p className="font-mono text-xs">
            Synthetic data only — not a fund administrator, broker-dealer,
            custodian, or transfer agent.
          </p>
        </div>
      </div>
    </footer>
  );
}
