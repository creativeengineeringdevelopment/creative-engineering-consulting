import Link from "next/link";
import { buttonPrimaryClass } from "@/lib/constants";

export function Hero() {
  return (
    <section
      className="relative border-b border-zinc-900"
      aria-labelledby="audit-hero-heading"
    >
      <div className="mx-auto max-w-6xl px-6 pb-20 pt-24 sm:pb-24 sm:pt-28 lg:px-8">
        <div className="max-w-3xl space-y-8">
          <h1
            id="audit-hero-heading"
            className="font-serif text-4xl font-medium leading-[1.08] tracking-tight text-zinc-50 sm:text-5xl"
          >
            System Audit
          </h1>
          <p className="text-lg leading-relaxed text-zinc-400 sm:text-xl">
            We map how your operations actually run, where execution breaks, and what
            should be system-driven.
          </p>
          <p className="max-w-2xl text-base leading-relaxed text-zinc-500">
            This is not a sales call. It&apos;s a structured diagnosis of how your business
            executes.
          </p>
          <div className="pt-2">
            <Link href="#book-audit" className={buttonPrimaryClass}>
              Book a System Audit
            </Link>
          </div>
        </div>
      </div>
    </section>
  );
}
