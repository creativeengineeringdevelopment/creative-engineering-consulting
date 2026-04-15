import Link from "next/link";
import { ROUTES, buttonPrimaryClass } from "@/lib/constants";

export function CTA() {
  return (
    <section className="bg-zinc-950" aria-labelledby="how-it-works-cta-heading">
      <div className="mx-auto max-w-6xl px-6 py-20 sm:py-24 lg:px-8">
        <div className="rounded-sm border border-zinc-800/90 bg-gradient-to-br from-zinc-900/60 to-zinc-950 px-8 py-14 sm:px-12 sm:py-16">
          <div className="mx-auto max-w-2xl text-center">
            <p className="font-mono text-xs uppercase tracking-[0.22em] text-zinc-500">
              Next step
            </p>
            <h2
              id="how-it-works-cta-heading"
              className="mt-4 font-serif text-3xl font-medium tracking-tight text-zinc-50 sm:text-4xl"
            >
              Start with a system audit
            </h2>
            <p className="mt-4 text-base leading-relaxed text-zinc-400 sm:text-lg">
              We map how your operations actually run, where they break, and what should be
              system-driven first.
            </p>
            <div className="mt-10 flex justify-center">
              <Link href={ROUTES.audit} className={buttonPrimaryClass}>
                Book a System Audit
              </Link>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
