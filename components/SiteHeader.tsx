import Link from "next/link";
import { ROUTES, SITE, buttonSecondaryClass } from "@/lib/constants";

export function SiteHeader() {
  return (
    <header className="sticky top-0 z-50 border-b border-zinc-900/80 bg-zinc-950/85 backdrop-blur-md">
      <div className="mx-auto flex max-w-6xl items-center justify-between gap-6 px-6 py-4 lg:px-8">
        <Link
          href="/"
          className="group font-serif text-lg font-medium tracking-tight text-zinc-100"
        >
          <span className="block sm:hidden">CEC</span>
          <span className="hidden sm:block">{SITE.name}</span>
        </Link>
        <nav aria-label="Primary" className="flex items-center gap-3">
          <Link
            href={ROUTES.howItWorks}
            className="hidden text-sm text-zinc-400 transition hover:text-zinc-200 sm:inline"
          >
            How it works
          </Link>
          <Link href={ROUTES.audit} className={`${buttonSecondaryClass} !py-2 text-xs sm:text-sm`}>
            <span className="sm:hidden">Book audit</span>
            <span className="hidden sm:inline">Book a System Audit</span>
          </Link>
        </nav>
      </div>
    </header>
  );
}
