import type { Metadata } from "next";
import Link from "next/link";
import { ROUTES, buttonPrimaryClass, buttonSecondaryClass } from "@/lib/constants";

export const metadata: Metadata = {
  title: "Unlockd Platform",
  description:
    "Unlockd is the product and proprietary operating layer: a free synthetic-firm sandbox, a Factory deployment engine, and the Edge environment investment managers actually use.",
};

const layers = [
  {
    title: "Edge — the operating environment",
    body: "The surface the customer and team actually use. Unifies investor CRM, investor portal, fund operations, documents, communications, and AI assistance into one coherent firm.",
  },
  {
    title: "Factory — the deployment engine",
    body: "Creates repositories, infrastructure, configuration, seed data, releases, and proof of deployment inside customer-owned Cloudflare, Neon, and Resend accounts.",
  },
  {
    title: "Specialist agents",
    body: "Bounded agents that work inside source-of-truth rules: classify, draft, route, summarize, verify, and escalate with human approval gates.",
  },
  {
    title: "Micro-app model",
    body: "Focused apps on a shared operating layer instead of monolithic software — the same pattern that powers the synthetic firm becomes the pattern for custom work.",
  },
];

const useCases = [
  "A fund manager wants to see a coherent operating environment before committing to change.",
  "A firm wants AI assistance without surrendering control of data, approvals, or core business logic.",
  "A team wants to deploy real infrastructure without a platform engineering hire.",
  "An operator wants subscription software that can grow into a custom operating system, not a dead-end SaaS.",
];

export default function UnlockdPage() {
  return (
    <main id="main-content">
      <section className="border-b border-zinc-900" aria-labelledby="unlockd-heading">
        <div className="mx-auto max-w-6xl px-6 pb-20 pt-24 sm:pb-28 sm:pt-28 lg:px-8">
          <div className="grid gap-14 lg:grid-cols-[1.05fr_0.95fr] lg:items-center">
            <div className="space-y-8">
              <div className="space-y-6">
                <p className="font-mono text-xs uppercase tracking-[0.22em] text-zinc-500">
                  Unlockd · Platform and IP
                </p>
                <h1
                  id="unlockd-heading"
                  className="font-serif text-4xl font-medium leading-[1.08] tracking-tight text-zinc-50 sm:text-5xl lg:text-[3.25rem]"
                >
                  Explore a synthetic firm free. Deploy into infrastructure you own.
                </h1>
                <p className="max-w-xl text-lg leading-relaxed text-zinc-400">
                  Unlockd gives an investment manager a complete synthetic firm to
                  operate immediately, then a path to deploy the same system into
                  customer-controlled vendor accounts — upgraded by subscription or
                  transformed through a Creative Engineering engagement.
                </p>
              </div>
              <div className="flex flex-col gap-3 sm:flex-row sm:items-center">
                <Link href={ROUTES.sandbox} className={buttonPrimaryClass}>
                  Explore the free sandbox
                </Link>
                <Link href="/" className={buttonSecondaryClass}>
                  Back to Creative Engineering
                </Link>
              </div>
            </div>
            <div className="rounded-sm border border-zinc-800/90 bg-zinc-950/80 p-6 sm:p-8">
              <p className="font-mono text-[10px] uppercase tracking-widest text-zinc-600">
                The business in one view
              </p>
              <p className="mt-4 font-serif text-2xl text-zinc-50">
                Creative Engineering is the studio. Unlockd is the platform. Factory deploys it. Edge is where you work.
              </p>
              <p className="mt-4 text-sm leading-relaxed text-zinc-400">
                The paired diamond mark represents the sandbox becoming owned
                infrastructure across the controlled Factory-to-Edge boundary.
              </p>
            </div>
          </div>
        </div>
      </section>

      <section className="border-b border-zinc-900 bg-zinc-950/40" aria-labelledby="layers-heading">
        <div className="mx-auto max-w-6xl px-6 py-20 sm:py-24 lg:px-8">
          <div className="max-w-3xl">
            <p className="font-mono text-xs uppercase tracking-[0.22em] text-zinc-500">
              What it includes
            </p>
            <h2 id="layers-heading" className="mt-4 font-serif text-3xl text-zinc-50 sm:text-4xl">
              Edge, Factory, agents, and a micro-app model.
            </h2>
          </div>
          <div className="mt-14 grid gap-4 md:grid-cols-2">
            {layers.map((layer, index) => (
              <article key={layer.title} className="rounded-sm border border-zinc-800/80 bg-zinc-900/25 p-6">
                <p className="font-mono text-[10px] uppercase tracking-widest text-zinc-600">
                  {String(index + 1).padStart(2, "0")}
                </p>
                <h3 className="mt-3 font-serif text-2xl text-zinc-100">{layer.title}</h3>
                <p className="mt-3 text-sm leading-relaxed text-zinc-400">{layer.body}</p>
              </article>
            ))}
          </div>
        </div>
      </section>

      <section className="border-b border-zinc-900" aria-labelledby="fit-heading">
        <div className="mx-auto max-w-6xl px-6 py-20 sm:py-24 lg:px-8">
          <div className="grid gap-12 lg:grid-cols-[0.8fr_1.2fr] lg:items-start">
            <div>
              <p className="font-mono text-xs uppercase tracking-[0.22em] text-zinc-500">
                When Unlockd fits
              </p>
              <h2 id="fit-heading" className="mt-4 font-serif text-3xl text-zinc-50 sm:text-4xl">
                For firms that want ownership, not another dependency.
              </h2>
            </div>
            <ul className="space-y-3">
              {useCases.map((useCase) => (
                <li key={useCase} className="flex gap-3 border-b border-zinc-800/80 pb-3 text-sm leading-relaxed text-zinc-300">
                  <span className="mt-2 h-1.5 w-1.5 shrink-0 rounded-full bg-emerald-400/80" />
                  <span>{useCase}</span>
                </li>
              ))}
            </ul>
          </div>
        </div>
      </section>

      <section className="bg-zinc-950" aria-labelledby="unlockd-cta-heading">
        <div className="mx-auto max-w-6xl px-6 py-24 lg:px-8">
          <div className="rounded-sm border border-zinc-800/90 bg-gradient-to-br from-zinc-900/60 to-zinc-950 px-8 py-14 sm:px-12 sm:py-16">
            <div className="mx-auto max-w-2xl text-center">
              <p className="font-mono text-xs uppercase tracking-[0.22em] text-zinc-500">
                First step
              </p>
              <h2 id="unlockd-cta-heading" className="mt-4 font-serif text-3xl font-medium tracking-tight text-zinc-50 sm:text-4xl">
                Product before pitch. Operate the idea before you buy it.
              </h2>
              <p className="mt-4 text-base leading-relaxed text-zinc-400">
                Open the sandbox, run a real workflow against synthetic data, and
                decide what deserves to become real in your own infrastructure.
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
    </main>
  );
}
