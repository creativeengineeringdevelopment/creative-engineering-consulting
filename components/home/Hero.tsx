import Link from "next/link";
import { ROUTES, buttonPrimaryClass, buttonSecondaryClass } from "@/lib/constants";

function OperatingSystemPreview() {
  const metrics = [
    ["Synthetic funds", "3"],
    ["Synthetic investors", "135"],
    ["Micro-apps", "6"],
  ];

  const lanes = [
    ["Investor CRM", "Pipeline · commitments · next actions", "Live"],
    ["Portal", "Onboarding · subscriptions · notices", "Live"],
    ["Fund Ops", "Capital activity · calendars · reporting", "Live"],
    ["AI Operator", "Daily briefing · recommended actions", "Gated"],
  ];

  return (
    <div
      className="relative overflow-hidden rounded-sm border border-zinc-800/90 bg-zinc-950/80 shadow-2xl shadow-black/40"
      aria-hidden
    >
      <div className="pointer-events-none absolute inset-0 bg-[radial-gradient(circle_at_top_right,rgba(56,189,248,0.18),transparent_34%),radial-gradient(circle_at_bottom_left,rgba(16,185,129,0.12),transparent_36%)]" />
      <div className="relative border-b border-zinc-800/80 bg-zinc-900/60 px-5 py-3">
        <div className="flex items-center justify-between">
          <div>
            <p className="font-mono text-[10px] uppercase tracking-widest text-zinc-600">Unlockd Edge · sandbox</p>
            <p className="mt-1 text-sm text-zinc-300">A complete synthetic investment firm, safe to explore</p>
          </div>
          <div className="rounded-full border border-sky-500/30 bg-sky-500/10 px-3 py-1 font-mono text-[10px] uppercase tracking-wider text-sky-300">
            synthetic data
          </div>
        </div>
      </div>

      <div className="relative p-5 sm:p-6">
        <div className="grid gap-3 sm:grid-cols-3">
          {metrics.map(([label, value]) => (
            <div key={label} className="rounded-sm border border-zinc-800 bg-zinc-950/80 p-4">
              <p className="font-mono text-[10px] uppercase tracking-widest text-zinc-600">{label}</p>
              <p className="mt-2 font-serif text-2xl text-zinc-50">{value}</p>
            </div>
          ))}
        </div>

        <div className="mt-4 space-y-2 rounded-sm border border-zinc-800 bg-zinc-900/30 p-4">
          {lanes.map(([source, signal, status]) => (
            <div key={`${source}-${signal}`} className="grid grid-cols-[96px_1fr] gap-3 rounded-sm bg-zinc-950/70 px-3 py-3 text-xs sm:grid-cols-[96px_1fr_72px]">
              <span className="font-mono uppercase tracking-wider text-sky-300/80">{source}</span>
              <span className="text-zinc-300">{signal}</span>
              <span className="text-zinc-500">{status}</span>
            </div>
          ))}
        </div>

        <div className="mt-4 rounded-sm border border-dashed border-zinc-700/80 bg-zinc-950/70 p-4">
          <p className="font-mono text-[10px] uppercase tracking-widest text-zinc-600">No credentials required</p>
          <p className="mt-2 text-sm leading-relaxed text-zinc-300">
            Explore every surface with synthetic data. When it earns the conversation, deploy into infrastructure you own.
          </p>
        </div>
      </div>
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
                Creative Engineering · Unlockd platform
              </p>
              <h1
                id="hero-heading"
                className="font-serif text-4xl font-medium leading-[1.08] tracking-tight text-zinc-50 sm:text-5xl lg:text-[3.25rem]"
              >
A complete investment firm you can operate before you buy.
              </h1>
              <p className="max-w-xl text-lg leading-relaxed text-zinc-400">
Unlockd Edge opens as a synthetic fund manager — investors, pipeline,
documents, communications, fund operations, and an AI operator —
so you can see how a coherent firm should run before changing yours.
              </p>
              <p className="max-w-xl text-sm leading-relaxed text-zinc-500">
Explore free with synthetic data. When it earns the conversation,
Factory deploys the same system into Cloudflare, Neon, and Resend
accounts you own — and Creative Engineering transforms the workflows
that need custom judgment.
              </p>
            </div>
            <div className="flex flex-col gap-3 sm:flex-row sm:items-center">
              <Link href={ROUTES.sandbox} className={buttonPrimaryClass}>
Explore the free sandbox
              </Link>
              <Link href={ROUTES.caseStudies} className={buttonSecondaryClass}>
See the proof
              </Link>
            </div>
          </div>
          <div className="motion-safe:animate-fade-up">
            <OperatingSystemPreview />
          </div>
        </div>
      </div>
    </section>
  );
}
