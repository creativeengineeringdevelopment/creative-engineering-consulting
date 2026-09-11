import Image from "next/image";
import Link from "next/link";
import { ROUTES, SITE, buttonSecondaryClass } from "@/lib/constants";

export function SiteHeader() {
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
        <nav aria-label="Primary" className="flex items-center gap-3">
          <Link
            href={ROUTES.unlockd}
            className="hidden text-sm text-zinc-400 transition hover:text-zinc-200 sm:inline"
          >
            Unlockd
          </Link>
          <Link
            href={ROUTES.howItWorks}
            className="hidden text-sm text-zinc-400 transition hover:text-zinc-200 md:inline"
          >
            Method
          </Link>
          <Link
            href={ROUTES.caseStudies}
            className="hidden text-sm text-zinc-400 transition hover:text-zinc-200 lg:inline"
          >
            Proof
          </Link>
          <Link href={ROUTES.sandbox} className={`${buttonSecondaryClass} !py-2 text-xs sm:text-sm`}>
            <span className="sm:hidden">Sandbox</span>
            <span className="hidden sm:inline">Explore the sandbox</span>
          </Link>
        </nav>
      </div>
    </header>
  );
}
