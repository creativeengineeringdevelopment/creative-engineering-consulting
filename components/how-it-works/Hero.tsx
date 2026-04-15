import Link from "next/link";
import { ROUTES, buttonPrimaryClass, buttonSecondaryClass } from "@/lib/constants";

export function Hero() {
  return (
    <section
      className="relative border-b border-zinc-900"
      aria-labelledby="how-it-works-hero-heading"
    >
      <div className="mx-auto max-w-6xl px-6 pb-20 pt-24 sm:pb-24 sm:pt-28 lg:px-8">
        <div className="max-w-3xl space-y-8">
          <p className="font-mono text-xs uppercase tracking-[0.22em] text-zinc-500">
            How the system works
          </p>
          <h1
            id="how-it-works-hero-heading"
            className="font-serif text-4xl font-medium leading-[1.08] tracking-tight text-zinc-50 sm:text-5xl"
          >
            This is the system that runs your operations
          </h1>
          <p className="text-lg leading-relaxed text-zinc-400 sm:text-xl">
            Once installed, your workflows don&apos;t rely on manual follow-up—they run
            as structured, automated systems.
          </p>
          <p className="max-w-2xl text-base leading-relaxed text-zinc-500">
            This is not new software. It&apos;s the execution layer that connects and runs
            what you already have.
          </p>
          <div className="flex flex-col gap-3 pt-2 sm:flex-row sm:items-center">
            <Link href={ROUTES.audit} className={buttonPrimaryClass}>
              Book a System Audit
            </Link>
            <Link href="/" className={buttonSecondaryClass}>
              Back to home
            </Link>
          </div>
        </div>
      </div>
    </section>
  );
}
