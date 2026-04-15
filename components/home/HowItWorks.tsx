import Link from "next/link";
import { SectionHeader } from "@/components/home/SectionHeader";
import { ROUTES, buttonSecondaryClass } from "@/lib/constants";

const phases = [
  {
    phase: "01 — Audit",
    title: "We map how things actually work",
    body: "We follow real work from trigger to outcome—where it stalls, where data drops, and where people are carrying the load. You see what should run automatically first.",
  },
  {
    phase: "02 — Build",
    title: "We structure it into a system",
    body: "We encode workflows, decisions, and integrations so the path is explicit: what happens next, which tool owns it, and how success is measured.",
  },
  {
    phase: "03 — Operate",
    title: "We make it run automatically",
    body: "We stay with you as volume changes: tightening rules, adding branches, fixing edge cases—so the system keeps behaving the way you intend.",
  },
];

export function HowItWorks() {
  return (
    <section
      id="how-it-works"
      className="scroll-mt-24 border-b border-zinc-900 bg-zinc-950/30"
      aria-labelledby="how-heading"
    >
      <div className="mx-auto max-w-6xl px-6 py-20 sm:py-24 lg:px-8">
        <div className="flex flex-col gap-10 lg:flex-row lg:items-end lg:justify-between">
          <SectionHeader
            eyebrow="How it works"
            title="Audit. Build. Operate."
            description="A straight path from how work happens today to a system that runs it—without ripping out your stack or starting from zero."
            titleId="how-heading"
          />
          <Link href={ROUTES.audit} className={`${buttonSecondaryClass} shrink-0`}>
            Start with an audit
          </Link>
        </div>
        <ol className="mt-16 grid gap-6 lg:grid-cols-3">
          {phases.map((item, index) => (
            <li
              key={item.phase}
              className="relative rounded-sm border border-zinc-800/80 bg-zinc-900/20 p-8"
            >
              {index < phases.length - 1 ? (
                <div
                  className="pointer-events-none absolute -right-3 top-1/2 hidden h-px w-6 bg-zinc-800 lg:block"
                  aria-hidden
                />
              ) : null}
              <p className="font-mono text-xs text-zinc-500">{item.phase}</p>
              <h3 className="mt-4 font-serif text-2xl text-zinc-50">{item.title}</h3>
              <p className="mt-3 text-sm leading-relaxed text-zinc-400">{item.body}</p>
            </li>
          ))}
        </ol>
      </div>
    </section>
  );
}
