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
            Operating System Diagnostic
          </h1>
          <p className="text-lg leading-relaxed text-zinc-400 sm:text-xl">
            The launch offer is a paid diagnostic for founder-led operators who need
            to know what owns truth, where execution breaks, and which workflows are
            safe to automate first.
          </p>
          <p className="max-w-2xl text-base leading-relaxed text-zinc-500">
            In one to two weeks, you leave with an operating map, risk register,
            90-day roadmap, and a build proposal only if the proof supports it.
          </p>
          <div className="pt-2">
            <Link href="#book-audit" className={buttonPrimaryClass}>
              Book diagnostic
            </Link>
          </div>
        </div>
      </div>
    </section>
  );
}
