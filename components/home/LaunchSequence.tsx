import Link from "next/link";
import { SectionHeader } from "@/components/home/SectionHeader";
import { ROUTES, buttonSecondaryClass } from "@/lib/constants";

const launchPhases = [
  {
    phase: "Phase 1",
    title: "Make the proposition tangible",
    body: "Product-led homepage, interactive synthetic Edge environment, launch instrumentation, and clear free-tier boundaries.",
    proof: "Visitors launch the sandbox",
  },
  {
    phase: "Phase 2",
    title: "Prove customer-owned deployment",
    body: "Cloudflare authorization, Neon and Resend connections, Factory recipe, seeded environment, and a clean deletion path.",
    proof: "Customers authorize and deploy their own environment",
  },
  {
    phase: "Phase 3",
    title: "Earn repeat usage",
    body: "Investor CRM, portal, fund operations, documents, communications, AI briefing, and telemetry that show real workflows being completed.",
    proof: "Sandbox users complete meaningful workflows",
  },
  {
    phase: "Phase 4",
    title: "Monetize proven needs",
    body: "Edge Plus controls, managed releases, diagnostic offer, and the first custom transformations — priced from observed usage, not guesses.",
    proof: "Free → Plus, diagnostic, or custom conversion",
  },
  {
    phase: "Phase 5",
    title: "Narrow the platform",
    body: "Reference architecture, reusable workflow specs, playbook, and evidence from repeat customers before productizing further.",
    proof: "Thirty-day active organizations · workflows reused across customers",
  },
];

export function LaunchSequence() {
  return (
    <section className="border-b border-zinc-900 bg-zinc-950/40" aria-labelledby="launch-sequence-heading">
      <div className="mx-auto max-w-6xl px-6 py-20 sm:py-24 lg:px-8">
        <div className="flex flex-col gap-10 lg:flex-row lg:items-end lg:justify-between">
          <SectionHeader
            eyebrow="The first twelve months"
            title="Product-led, deployment-proven, monetized from observed usage."
            description="The free product is the acquisition engine. Attention becomes product activity, product activity identifies serious operators, and serious operators convert into subscriptions or custom work."
            titleId="launch-sequence-heading"
          />
          <Link href={ROUTES.contact} className={`${buttonSecondaryClass} shrink-0`}>
            Start a conversation
          </Link>
        </div>

        <div className="mt-14 grid gap-4 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-5">
          {launchPhases.map((phase) => (
            <article key={phase.phase} className="rounded-sm border border-zinc-800/80 bg-zinc-900/25 p-6">
              <p className="font-mono text-[10px] uppercase tracking-widest text-zinc-600">
                {phase.phase}
              </p>
              <h3 className="mt-4 font-serif text-xl leading-tight text-zinc-50">{phase.title}</h3>
              <p className="mt-4 text-sm leading-relaxed text-zinc-400">{phase.body}</p>
              <p className="mt-5 border-l border-zinc-700 pl-4 text-xs leading-relaxed text-zinc-500">{phase.proof}</p>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
}
