"use client";

import Image from "next/image";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { useState } from "react";
import { ROUTES, SITE, buttonSecondaryClass } from "@/lib/constants";

const NAV_LINKS = [
  { href: ROUTES.unlockd, label: "Unlockd" },
  { href: ROUTES.howItWorks, label: "Method" },
  { href: ROUTES.caseStudies, label: "Proof" },
  { href: ROUTES.pricing, label: "Pricing" },
  { href: ROUTES.audit, label: "Diagnostic" },
  { href: ROUTES.contact, label: "Contact" },
] as const;

export function SiteHeader() {
  const [open, setOpen] = useState(false);
  const [lastPath, setLastPath] = useState(usePathname());
  const pathname = usePathname();

  // Close the mobile menu on navigation (render-time state adjust, no effect).
  if (pathname !== lastPath) {
    setLastPath(pathname);
    setOpen(false);
  }

  return (
    <header className="sticky top-0 z-50 border-b border-zinc-900/80 bg-zinc-950/85 backdrop-blur-md">
      <div className="mx-auto flex max-w-6xl items-center justify-between gap-6 px-6 py-3 lg:px-8">
        <Link
          href="/"
          aria-label={`${SITE.name}, home`}
          className="shrink-0 opacity-95 transition hover:opacity-100"
        >
          <Image
            src={SITE.logoSrc}
            alt=""
            width={1024}
            height={682}
            priority
            className="h-8 w-auto sm:h-9"
          />
        </Link>

        <nav aria-label="Primary" className="hidden items-center gap-5 md:flex">
          {NAV_LINKS.map(({ href, label }) => (
            <Link
              key={href}
              href={href}
              aria-current={pathname === href ? "page" : undefined}
              className={`text-sm transition hover:text-zinc-200 ${
                pathname === href ? "text-zinc-100" : "text-zinc-400"
              }`}
            >
              {label}
            </Link>
          ))}
          <Link
            href={ROUTES.sandbox}
            className={`${buttonSecondaryClass} !py-2 text-xs sm:text-sm`}
          >
            Explore the sandbox
          </Link>
        </nav>

        <div className="flex items-center gap-3 md:hidden">
          <Link
            href={ROUTES.sandbox}
            className={`${buttonSecondaryClass} !py-2 text-xs`}
          >
            Sandbox
          </Link>
          <button
            type="button"
            aria-expanded={open}
            aria-controls="mobile-nav"
            aria-label={open ? "Close menu" : "Open menu"}
            onClick={() => setOpen((v) => !v)}
            className="inline-flex h-9 w-9 items-center justify-center rounded-sm border border-zinc-800 text-zinc-300 transition hover:border-zinc-700 hover:text-zinc-100"
          >
            <svg
              aria-hidden
              viewBox="0 0 16 16"
              className="h-4 w-4"
              fill="none"
              stroke="currentColor"
              strokeWidth="1.5"
            >
              {open ? (
                <path d="M3 3l10 10M13 3L3 13" strokeLinecap="round" />
              ) : (
                <path d="M2 4.5h12M2 8h12M2 11.5h12" strokeLinecap="round" />
              )}
            </svg>
          </button>
        </div>
      </div>

      {open ? (
        <nav
          id="mobile-nav"
          aria-label="Mobile"
          className="border-t border-zinc-900 md:hidden"
        >
          <div className="mx-auto flex max-w-6xl flex-col px-6 py-2 lg:px-8">
            {NAV_LINKS.map(({ href, label }) => (
              <Link
                key={href}
                href={href}
                aria-current={pathname === href ? "page" : undefined}
                className={`border-b border-zinc-900/60 py-3 text-sm transition last:border-0 hover:text-zinc-100 ${
                  pathname === href ? "text-zinc-100" : "text-zinc-400"
                }`}
              >
                {label}
              </Link>
            ))}
          </div>
        </nav>
      ) : null}
    </header>
  );
}
