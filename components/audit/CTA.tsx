import Link from "next/link";
import { BookingPrimaryLink } from "@/components/BookingPrimaryLink";
import { ROUTES, buttonSecondaryClass } from "@/lib/constants";

export function CTA() {
  return (
    <section
      id="book-audit"
      className="bg-zinc-950"
      aria-labelledby="audit-cta-heading"
    >
      <div className="mx-auto max-w-6xl px-6 py-24 lg:px-8">
        <div className="rounded-sm border border-zinc-800/90 bg-gradient-to-br from-zinc-900/60 to-zinc-950 px-8 py-14 sm:px-12 sm:py-16">
          <div className="mx-auto max-w-2xl text-center">
            <p className="font-mono text-xs uppercase tracking-[0.22em] text-zinc-500">
              Next step
            </p>
            <h2
              id="audit-cta-heading"
              className="mt-4 font-serif text-3xl font-medium tracking-tight text-zinc-50 sm:text-4xl"
            >
              Start with an operating-system diagnostic
            </h2>
            <p className="mt-4 text-base leading-relaxed text-zinc-400">
              We&apos;ll show you what is breaking, what is owner-dependent, and which
              workflows should become system-driven first.
            </p>

            <div className="mt-10 rounded-sm border border-dashed border-zinc-700/90 bg-zinc-950/50 px-6 py-8 text-left sm:text-center">
              <p className="font-mono text-[11px] uppercase tracking-widest text-zinc-600">
                Scheduling
              </p>
              <p className="mt-2 text-sm leading-relaxed text-zinc-500">
                The diagnostic is designed as a paid first step. Until scheduling is
                wired, book through contact and we&apos;ll confirm scope, time, and prep.
              </p>
            </div>

            <div className="mt-8 flex flex-col items-center justify-center gap-3 sm:flex-row">
              <BookingPrimaryLink>Book diagnostic</BookingPrimaryLink>
              <Link href={ROUTES.howItWorks} className={buttonSecondaryClass}>
                How it works
              </Link>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
