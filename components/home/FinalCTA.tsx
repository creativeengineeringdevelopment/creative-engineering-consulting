import Link from "next/link";
import { ROUTES, buttonPrimaryClass, buttonSecondaryClass } from "@/lib/constants";

export function FinalCTA() {
  return (
    <section className="bg-zinc-950" aria-labelledby="final-cta-heading">
      <div className="mx-auto max-w-6xl px-6 py-24 lg:px-8">
        <div className="rounded-sm border border-zinc-800/90 bg-gradient-to-br from-zinc-900/60 to-zinc-950 px-8 py-14 sm:px-12 sm:py-16">
          <div className="mx-auto max-w-2xl text-center">
            <p className="font-mono text-xs uppercase tracking-[0.22em] text-zinc-500">
              Next step
            </p>
            <h2
              id="final-cta-heading"
              className="mt-4 font-serif text-3xl font-medium tracking-tight text-zinc-50 sm:text-4xl"
            >
              Launch a complete synthetic firm. Free.
            </h2>
            <p className="mt-4 text-base leading-relaxed text-zinc-400">
              Understand the future of your operation in minutes, not a sales cycle.
              When the system earns it, deploy into infrastructure you own — or book
              a diagnostic for the workflows that need custom judgment.
            </p>
            <div className="mt-10 flex flex-col items-center justify-center gap-3 sm:flex-row">
              <Link href={ROUTES.sandbox} className={buttonPrimaryClass}>
                Explore the sandbox
              </Link>
              <Link href={ROUTES.audit} className={buttonSecondaryClass}>
                Book a diagnostic
              </Link>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
