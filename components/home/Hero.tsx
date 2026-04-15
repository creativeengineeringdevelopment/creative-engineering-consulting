import Link from "next/link";
import { ROUTES, buttonPrimaryClass, buttonSecondaryClass } from "@/lib/constants";

function ExecutionPreview() {
  return (
    <div
      className="relative overflow-hidden rounded-sm border border-zinc-800/90 bg-zinc-950/80 p-6 shadow-[0_0_0_1px_rgba(255,255,255,0.03)_inset] sm:p-8"
      aria-hidden
    >
      <div className="pointer-events-none absolute inset-0 bg-[linear-gradient(to_bottom,rgba(255,255,255,0.04),transparent_40%)]" />
      <div className="relative grid gap-4 font-mono text-[11px] text-zinc-500 sm:grid-cols-[1fr_auto_1fr] sm:items-stretch sm:gap-3">
        <div className="space-y-2 rounded-sm border border-zinc-800/80 bg-zinc-900/40 p-3">
          <p className="text-[10px] uppercase tracking-widest text-zinc-600">
            Triggers
          </p>
          <ul className="space-y-1.5 text-zinc-400">
            <li className="flex items-center gap-2">
              <span className="h-1.5 w-1.5 rounded-full bg-emerald-500/80" />
              event.ingest
            </li>
            <li className="flex items-center gap-2">
              <span className="h-1.5 w-1.5 rounded-full bg-sky-500/70" />
              schedule.cron
            </li>
            <li className="flex items-center gap-2">
              <span className="h-1.5 w-1.5 rounded-full bg-amber-500/70" />
              webhook.partner
            </li>
          </ul>
        </div>
        <div className="hidden flex-col items-center justify-center gap-2 sm:flex">
          <div className="h-px w-full bg-gradient-to-r from-transparent via-zinc-700 to-transparent sm:h-full sm:w-px sm:bg-gradient-to-b" />
        </div>
        <div className="space-y-3 rounded-sm border border-zinc-800/80 bg-zinc-900/40 p-3 sm:col-span-1">
          <p className="text-[10px] uppercase tracking-widest text-zinc-600">
            Execution graph
          </p>
          <div className="space-y-2">
            <div className="flex flex-wrap items-center gap-2">
              <span className="rounded-sm border border-zinc-700/80 bg-zinc-950/80 px-2 py-1 text-zinc-300">
                decision.route
              </span>
              <span className="text-zinc-600">→</span>
              <span className="rounded-sm border border-zinc-700/80 bg-zinc-950/80 px-2 py-1 text-zinc-300">
                workflow.run
              </span>
            </div>
            <div className="h-px w-full bg-zinc-800/80" />
            <div className="flex flex-wrap gap-2">
              <span className="rounded-sm border border-zinc-700/60 px-2 py-1 text-zinc-400">
                api.crm
              </span>
              <span className="rounded-sm border border-zinc-700/60 px-2 py-1 text-zinc-400">
                api.ledger
              </span>
              <span className="rounded-sm border border-emerald-900/50 bg-emerald-950/30 px-2 py-1 text-emerald-200/90">
                ai.step (bounded)
              </span>
              <span className="rounded-sm border border-zinc-700/60 px-2 py-1 text-zinc-400">
                notify.ops
              </span>
            </div>
          </div>
        </div>
      </div>
      <p className="mt-4 font-mono text-[10px] text-zinc-600">
        Triggers · Decisions · APIs · Bounded AI steps
      </p>
    </div>
  );
}

export function Hero() {
  return (
    <section
      className="relative border-b border-zinc-900"
      aria-labelledby="hero-heading"
    >
      <div className="mx-auto max-w-6xl px-6 pb-20 pt-24 sm:pb-28 sm:pt-28 lg:px-8">
        <div className="grid gap-14 lg:grid-cols-[minmax(0,1.05fr)_minmax(0,0.95fr)] lg:items-center lg:gap-16">
          <div className="space-y-10">
            <div className="space-y-6">
              <p className="font-mono text-xs uppercase tracking-[0.22em] text-zinc-500">
                AI-powered systems · Not an agency or dev shop
              </p>
              <h1
                id="hero-heading"
                className="font-serif text-4xl font-medium leading-[1.08] tracking-tight text-zinc-50 sm:text-5xl lg:text-[3.25rem]"
              >
                Turn your operations into AI-powered systems that run automatically.
              </h1>
              <p className="max-w-xl text-lg leading-relaxed text-zinc-400">
                We take the workflows you already have and structure them into systems
                that execute—handling follow-up, routing, and decisions without manual
                effort.
              </p>
              <p className="max-w-xl text-sm leading-relaxed text-zinc-500">
                No new tools. No rebuilds. We structure what already exists so it
                actually runs.
              </p>
            </div>
            <div className="flex flex-col gap-3 sm:flex-row sm:items-center">
              <Link href={ROUTES.audit} className={buttonPrimaryClass}>
                Book a System Audit
              </Link>
              <Link href={ROUTES.howItWorks} className={buttonSecondaryClass}>
                See How It Works
              </Link>
            </div>
          </div>
          <div className="motion-safe:animate-fade-up">
            <ExecutionPreview />
          </div>
        </div>
      </div>
    </section>
  );
}
