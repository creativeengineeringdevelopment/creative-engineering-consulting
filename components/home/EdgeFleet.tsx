import Link from "next/link";
import { SectionHeader } from "@/components/home/SectionHeader";
import { ConsoleDashboard } from "@/components/product-shots/ConsoleDashboard";
import { ROUTES } from "@/lib/constants";

const apps = [
  {
    name: "Investor CRM",
    job: "Relationship and pipeline management",
    experience: "A living record of conversations, indications, commitments, tasks, and next actions.",
  },
  {
    name: "Investor Portal",
    job: "Investor experience",
    experience: "Offerings, onboarding, subscriptions, documents, notices, and portfolio reporting.",
  },
  {
    name: "Fund Operations",
    job: "Recurring operating work",
    experience: "Funds, entities, capital activity, operating calendars, portfolio data, and reporting workflows.",
  },
  {
    name: "Document Workspace",
    job: "Controlled information flow",
    experience: "Offering materials, subscription packages, investor files, version history, and evidence.",
  },
  {
    name: "Communications",
    job: "Approved outreach and service",
    experience: "Email preparation, approvals, delivery evidence, relationship context, and a proof ledger.",
  },
  {
    name: "AI Operator",
    job: "Attention and execution support",
    experience: "Daily briefings, prepared work, cross-system answers, recommended actions, and human approval gates.",
  },
];

export function EdgeFleet() {
  return (
    <section className="border-b border-zinc-900 bg-zinc-950/40" aria-labelledby="fleet-heading">
      <div className="mx-auto max-w-6xl px-6 py-20 sm:py-24 lg:px-8">
        <SectionHeader
          eyebrow="The Edge fleet"
          title="One coherent firm, six focused surfaces."
          description="Unlockd Edge opens as a working synthetic investment manager — not an empty dashboard. Every micro-app demonstrates how information and work should move through the operating system."
          titleId="fleet-heading"
        />
        <div className="mt-14">
          <ConsoleDashboard />
          <figcaption className="mt-3 font-mono text-[10px] uppercase tracking-widest text-zinc-600">
            The console on an ordinary Tuesday — synthetic data
          </figcaption>
        </div>
        <div className="mt-14 grid gap-4 md:grid-cols-2 lg:grid-cols-3">
          {apps.map((app, index) => (
            <article
              key={app.name}
              className="group relative overflow-hidden rounded-sm border border-zinc-800/80 bg-zinc-900/20 p-6 transition hover:border-zinc-700"
            >
              <div className="pointer-events-none absolute inset-0 opacity-0 transition group-hover:opacity-100">
                <div className="absolute inset-x-0 top-0 h-px bg-gradient-to-r from-transparent via-zinc-500/40 to-transparent" />
              </div>
              <p className="font-mono text-[10px] uppercase tracking-widest text-zinc-600">
                {String(index + 1).padStart(2, "0")} · {app.job}
              </p>
              <h3 className="mt-3 font-serif text-xl text-zinc-100">{app.name}</h3>
              <p className="mt-3 text-sm leading-relaxed text-zinc-400">{app.experience}</p>
            </article>
          ))}
        </div>
        <p className="mt-10 text-sm text-zinc-500">
          All six are live in the sandbox.{" "}
          <Link
            href={ROUTES.sandbox}
            className="text-zinc-200 underline decoration-zinc-700 underline-offset-4 transition hover:decoration-zinc-400"
          >
            Operate them now
          </Link>{" "}
          — no credentials required.
        </p>
      </div>
    </section>
  );
}
