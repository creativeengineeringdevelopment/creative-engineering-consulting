import Link from "next/link";
import { SectionHeader } from "@/components/home/SectionHeader";
import { ROUTES, buttonSecondaryClass } from "@/lib/constants";

const metrics = [
  { value: "5", label: "operating surfaces", detail: "CRM, portal, send plane, reporting, executive ops" },
  { value: "407", label: "2026 build commits", detail: "CRM, portal, send-plane, relation-edge evidence" },
  { value: "90", label: "day transfer lens", detail: "owner map, acceptance gates, runbooks" },
  { value: "0", label: "PII exposed here", detail: "public-safe reconstruction only" },
] as const;

const proofPoints = [
  "CRM work converted from tribal admin behavior into explicit states, owner queues, and operational reporting.",
  "Outbound execution separated from CRM screens into a dedicated send/proof plane with measurable campaign flow.",
  "Investor and relationship operations split into focused surfaces instead of one overloaded internal portal.",
  "CTO transition risk converted into runbooks, owner matrices, acceptance gates, and executive visibility.",
] as const;

function CaseStudyDashboard() {
  return (
    <div className="overflow-hidden rounded-sm border border-zinc-800/90 bg-zinc-950/80 shadow-2xl shadow-black/30">
      <div className="flex items-center justify-between border-b border-zinc-800/80 bg-zinc-900/60 px-5 py-3">
        <div>
          <p className="font-mono text-[10px] uppercase tracking-widest text-zinc-600">Client operating console</p>
          <p className="mt-1 text-sm text-zinc-300">DiversyFund case-study reconstruction</p>
        </div>
        <div className="flex gap-1.5" aria-hidden>
          <span className="h-2.5 w-2.5 rounded-full bg-red-400/70" />
          <span className="h-2.5 w-2.5 rounded-full bg-yellow-400/70" />
          <span className="h-2.5 w-2.5 rounded-full bg-emerald-400/70" />
        </div>
      </div>

      <div className="grid gap-px bg-zinc-800/70 sm:grid-cols-2">
        {metrics.map((metric) => (
          <div key={metric.label} className="bg-zinc-950 px-5 py-5">
            <p className="font-serif text-4xl text-zinc-50">{metric.value}</p>
            <p className="mt-1 text-sm font-medium text-zinc-200">{metric.label}</p>
            <p className="mt-2 text-xs leading-relaxed text-zinc-500">{metric.detail}</p>
          </div>
        ))}
      </div>

      <div className="border-t border-zinc-800/80 p-5">
        <div className="grid gap-3">
          {["Source of truth mapped", "Proof plane separated", "Owner transfer underway"].map((item, index) => (
            <div key={item} className="grid grid-cols-[120px_1fr_auto] items-center gap-3 text-xs">
              <span className="font-mono uppercase tracking-wider text-zinc-600">Gate {index + 1}</span>
              <span className="h-1.5 overflow-hidden rounded-full bg-zinc-900">
                <span className="block h-full rounded-full bg-gradient-to-r from-sky-500/80 to-emerald-400/80" style={{ width: `${88 - index * 11}%` }} />
              </span>
              <span className="text-zinc-400">Verified</span>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}

export function ProofCaseStudy() {
  return (
    <section
      className="border-b border-zinc-900 bg-zinc-950/40"
      aria-labelledby="proof-heading"
    >
      <div className="mx-auto max-w-6xl px-6 py-20 sm:py-24 lg:px-8">
        <div className="grid gap-12 lg:grid-cols-[0.9fr_1.1fr] lg:items-start">
          <div>
            <SectionHeader
              eyebrow="Case study · DiversyFund"
              title="Real operating transition proof, shown without client-sensitive detail."
              description="This is the sellable version of the work: a complex investment operation with investor workflows, CRM, outbound, reporting, data, executive attention, and transition risk converted into a clearer operating layer."
              titleId="proof-heading"
            />
            <ul className="mt-8 space-y-4">
              {proofPoints.map((point) => (
                <li key={point} className="flex gap-3 text-sm leading-relaxed text-zinc-300">
                  <span className="mt-2 h-1.5 w-1.5 shrink-0 rounded-full bg-sky-400/80" />
                  <span>{point}</span>
                </li>
              ))}
            </ul>
            <div className="mt-8">
              <Link
                href={`${ROUTES.caseStudies}/diversyfund-operating-system`}
                className={buttonSecondaryClass}
              >
                Read the full case study
              </Link>
            </div>
          </div>
          <CaseStudyDashboard />
        </div>
      </div>
    </section>
  );
}
