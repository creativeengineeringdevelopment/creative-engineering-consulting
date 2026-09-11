import type { Metadata } from "next";
import Link from "next/link";
import { ROUTES, SITE, buttonPrimaryClass, buttonSecondaryClass } from "@/lib/constants";

export const metadata: Metadata = {
  title: "Free Edge Sandbox",
  description:
    "Launch a complete synthetic investment firm free: three funds, 135 synthetic investors, pipeline, documents, communications, fund operations, and an AI operator — no credentials required.",
  openGraph: {
    title: `Free Edge Sandbox · ${SITE.name}`,
    description:
      "Explore a coherent investment-manager operating environment with synthetic data, then deploy into infrastructure you own.",
  },
};

const sandboxContents = [
  { label: "Synthetic funds", value: "3" },
  { label: "Synthetic investors", value: "135" },
  { label: "Micro-apps", value: "6" },
  { label: "Credentials required", value: "0" },
];

const boundaries = [
  "Synthetic data by default — no sensitive investor information required to explore.",
  "Not a production fund administrator, broker-dealer, custodian, transfer agent, or source of investment advice.",
  "Clear separation between sandbox, development, staging, and production environments.",
  "Human approval gates for communications, data changes, and consequential agent actions.",
  "No automatic creation of your human identity on infrastructure providers.",
  "Third-party free tiers are not guaranteed to remain free or support unlimited production usage.",
];

const deployTargets = [
  { name: "Cloudflare", role: "Application hosting and object storage" },
  { name: "Neon", role: "Postgres and authentication" },
  { name: "Resend", role: "Transactional communication" },
  { name: "Your AI key", role: "Customer-funded or capped demonstration allocation" },
];

export default function SandboxPage() {
  return (
    <main id="main-content">
      <section className="border-b border-zinc-900" aria-labelledby="sandbox-heading">
        <div className="mx-auto max-w-6xl px-6 pb-20 pt-24 sm:pb-24 sm:pt-28 lg:px-8">
          <div className="grid gap-12 lg:grid-cols-[1.05fr_0.95fr] lg:items-center">
            <div className="space-y-8">
              <div className="space-y-6">
                <p className="font-mono text-xs uppercase tracking-[0.22em] text-zinc-500">
                  Unlockd Edge · Free sandbox
                </p>
                <h1
                  id="sandbox-heading"
                  className="font-serif text-4xl font-medium leading-[1.08] tracking-tight text-zinc-50 sm:text-5xl"
                >
                  Operate a complete synthetic investment firm. Free.
                </h1>
                <p className="max-w-xl text-lg leading-relaxed text-zinc-400">
                  The sandbox loads a realistic operating environment — funds,
                  investors, pipeline, documents, communications, and an AI operator —
                  so you can discover the gap between your current tools and a
                  coherent operating system. No budget authority, production
                  credentials, or sensitive data required.
                </p>
                <p className="max-w-xl text-sm leading-relaxed text-zinc-500">
                  The product earns the conversation. When you are ready, the same
                  system deploys into accounts you own, upgrades into Edge Plus, or
                  becomes a Creative Engineering transformation.
                </p>
              </div>
              <div className="flex flex-col gap-3 sm:flex-row sm:items-center">
                <Link href={ROUTES.contact} className={buttonPrimaryClass}>
                  Request sandbox access
                </Link>
                <Link href={ROUTES.unlockd} className={buttonSecondaryClass}>
                  How the platform works
                </Link>
              </div>
            </div>

            <div className="overflow-hidden rounded-sm border border-zinc-800/90 bg-zinc-950/80 shadow-2xl shadow-black/30">
              <div className="border-b border-zinc-800/80 bg-zinc-900/60 px-5 py-3">
                <p className="font-mono text-[10px] uppercase tracking-widest text-zinc-600">Launch parameters</p>
                <p className="mt-1 text-sm text-zinc-300">Demonstration scale, not a production-capacity promise</p>
              </div>
              <div className="grid gap-px bg-zinc-800/70 sm:grid-cols-2">
                {sandboxContents.map((item) => (
                  <div key={item.label} className="bg-zinc-950 p-5">
                    <p className="font-serif text-3xl text-zinc-50">{item.value}</p>
                    <p className="mt-2 text-[11px] uppercase tracking-wider text-zinc-600">{item.label}</p>
                  </div>
                ))}
              </div>
              <div className="border-t border-zinc-800/80 p-5">
                <p className="font-mono text-[10px] uppercase tracking-widest text-zinc-600">What you can do in minutes</p>
                <ul className="mt-4 space-y-2 text-sm text-zinc-400">
                  <li>· Walk an investor from first conversation to commitment in the CRM</li>
                  <li>· See the portal an investor would actually use</li>
                  <li>· Watch a communication move through approval to delivery evidence</li>
                  <li>· Read the AI Operator&apos;s morning briefing and approve its queue</li>
                </ul>
              </div>
            </div>
          </div>
        </div>
      </section>

      <section className="border-b border-zinc-900 bg-zinc-950/40" aria-labelledby="ownership-heading">
        <div className="mx-auto max-w-6xl px-6 py-20 sm:py-24 lg:px-8">
          <div className="grid gap-12 lg:grid-cols-[0.8fr_1.2fr] lg:items-start">
            <div>
              <p className="font-mono text-xs uppercase tracking-[0.22em] text-zinc-500">Customer ownership</p>
              <h2 id="ownership-heading" className="mt-4 font-serif text-3xl text-zinc-50 sm:text-4xl">
                Deployment into infrastructure you own.
              </h2>
              <p className="mt-4 text-sm leading-relaxed text-zinc-500">
                You create and verify your own third-party accounts, then authorize
                Factory to create and manage agreed resources. Scoped, revocable,
                audited — and the basic deployment rides third-party free allowances
                in your accounts, so the free tier costs us nothing to give you.
              </p>
            </div>
            <div className="grid gap-3 sm:grid-cols-2">
              {deployTargets.map((target) => (
                <div key={target.name} className="rounded-sm border border-zinc-800/80 bg-zinc-900/25 p-5">
                  <p className="font-serif text-xl text-zinc-100">{target.name}</p>
                  <p className="mt-2 text-sm leading-relaxed text-zinc-400">{target.role}</p>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      <section className="border-b border-zinc-900" aria-labelledby="boundaries-heading">
        <div className="mx-auto max-w-6xl px-6 py-20 sm:py-24 lg:px-8">
          <div className="max-w-2xl">
            <p className="font-mono text-xs uppercase tracking-[0.22em] text-zinc-500">Trust boundaries</p>
            <h2 id="boundaries-heading" className="mt-4 font-serif text-3xl text-zinc-50 sm:text-4xl">
              Safe by design before production.
            </h2>
          </div>
          <ul className="mt-12 grid gap-3 md:grid-cols-2">
            {boundaries.map((boundary) => (
              <li key={boundary} className="flex gap-3 rounded-sm border border-zinc-800/80 bg-zinc-900/25 p-5 text-sm leading-relaxed text-zinc-400">
                <span className="mt-2 h-1.5 w-1.5 shrink-0 rounded-full bg-emerald-400/80" />
                <span>{boundary}</span>
              </li>
            ))}
          </ul>
        </div>
      </section>

      <section className="bg-zinc-950" aria-labelledby="sandbox-cta-heading">
        <div className="mx-auto max-w-6xl px-6 py-20 lg:px-8">
          <div className="rounded-sm border border-zinc-800/90 bg-gradient-to-br from-zinc-900/60 to-zinc-950 px-8 py-14 sm:px-12 sm:py-16">
            <div className="mx-auto max-w-2xl text-center">
              <p className="font-mono text-xs uppercase tracking-[0.22em] text-zinc-500">Next step</p>
              <h2 id="sandbox-cta-heading" className="mt-4 font-serif text-3xl font-medium tracking-tight text-zinc-50 sm:text-4xl">
                Explore first. Buy only what proves itself.
              </h2>
              <p className="mt-4 text-base leading-relaxed text-zinc-400">
                If the sandbox shows you the gap, the next step is yours: deploy the
                free tier into your own accounts, subscribe to Edge Plus, or book an
                Operating System Diagnostic for the workflows that need custom judgment.
              </p>
              <div className="mt-10 flex flex-col items-center justify-center gap-3 sm:flex-row">
                <Link href={ROUTES.contact} className={buttonPrimaryClass}>
                  Request access
                </Link>
                <Link href={ROUTES.audit} className={buttonSecondaryClass}>
                  Operating System Diagnostic
                </Link>
              </div>
            </div>
          </div>
        </div>
      </section>
    </main>
  );
}
