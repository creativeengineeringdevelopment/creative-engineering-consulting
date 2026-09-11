import Link from "next/link";
import { ROUTES, buttonSecondaryClass } from "@/lib/constants";

export function Founder() {
  return (
    <section className="border-b border-zinc-900" aria-labelledby="founder-heading">
      <div className="mx-auto max-w-6xl px-6 py-20 sm:py-24 lg:px-8">
        <div className="grid gap-12 lg:grid-cols-[minmax(0,0.9fr)_minmax(0,1.1fr)] lg:items-center">
          <div>
            <p className="font-mono text-xs uppercase tracking-[0.2em] text-zinc-500">
              Founder
            </p>
            <h2
              id="founder-heading"
              className="mt-4 font-serif text-3xl font-medium tracking-tight text-zinc-50 sm:text-4xl"
            >
              Jared Lutz
            </h2>
            <p className="mt-2 text-sm text-zinc-400">
              Former investment-manager CTO · Systems architect · Founder
            </p>
          </div>
          <div className="space-y-6 border-l border-zinc-800 pl-8 lg:pl-12">
            <p className="text-base leading-relaxed text-zinc-300">
              Jared spent the last year as CTO of a real-estate investment manager,
              compressing investor operations, CRM, portal, communications, reporting,
              vendor administration, and agent execution into owned software systems.
            </p>
            <p className="text-sm leading-relaxed text-zinc-500">
              Creative Engineering and Unlockd are that year externalized: a free
              synthetic firm to explore, a deployment engine that respects customer
              ownership, and a studio that transforms the workflows where custom
              judgment creates real value.
            </p>
            <Link href={ROUTES.contact} className={buttonSecondaryClass}>
              Discuss your operations
            </Link>
          </div>
        </div>
      </div>
    </section>
  );
}
