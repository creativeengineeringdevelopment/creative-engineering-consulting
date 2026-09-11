import type { Metadata } from "next";
import Link from "next/link";
import { flagshipCaseStudies, proofCardCaseStudies } from "@/lib/case-studies";
import { ROUTES, SITE, buttonPrimaryClass, buttonSecondaryClass } from "@/lib/constants";

export const metadata: Metadata = {
  title: "Case Studies",
  description:
    "Public-safe case-study system for Creative Engineering: DiversyFund operating rebuild, CRM command center, send plane, Unlockd runtime, and proof cards.",
  openGraph: {
    title: `Case Studies · ${SITE.name}`,
    description:
      "Proof stories from operator-built systems across capital operations, CRM, outbound, reporting, governance, and agent runtime.",
  },
};

export default function CaseStudiesPage() {
  return (
    <main id="main-content">
      <section className="border-b border-zinc-900" aria-labelledby="case-studies-heading">
        <div className="mx-auto max-w-6xl px-6 pb-20 pt-24 sm:pb-24 sm:pt-28 lg:px-8">
          <div className="max-w-3xl space-y-6">
            <p className="font-mono text-xs uppercase tracking-[0.22em] text-zinc-500">
              Case studies
            </p>
            <h1 id="case-studies-heading" className="font-serif text-4xl font-medium leading-[1.08] tracking-tight text-zinc-50 sm:text-5xl">
              Ten credible proof stories. Four are flagship launch assets.
            </h1>
            <p className="text-lg leading-relaxed text-zinc-400 sm:text-xl">
              These are framed from real operating work without publishing credentials, investor PII, private screenshots, or client-sensitive internals.
            </p>
            <div className="flex flex-col gap-3 pt-2 sm:flex-row sm:items-center">
              <Link href={ROUTES.audit} className={buttonPrimaryClass}>
                Book diagnostic
              </Link>
              <Link href="/" className={buttonSecondaryClass}>
                Back to home
              </Link>
            </div>
          </div>
        </div>
      </section>

      <section className="border-b border-zinc-900 bg-zinc-950/40" aria-labelledby="flagship-heading">
        <div className="mx-auto max-w-6xl px-6 py-20 sm:py-24 lg:px-8">
          <div className="max-w-2xl">
            <p className="font-mono text-xs uppercase tracking-[0.22em] text-zinc-500">Flagship studies</p>
            <h2 id="flagship-heading" className="mt-4 font-serif text-3xl text-zinc-50 sm:text-4xl">
              Deep dives that sell the Creative Engineering method.
            </h2>
          </div>

          <div className="mt-14 grid gap-5 lg:grid-cols-2">
            {flagshipCaseStudies.map((study) => (
              <Link
                key={study.slug}
                href={`${ROUTES.caseStudies}/${study.slug}`}
                className="rounded-sm border border-zinc-800/90 bg-zinc-900/25 p-6 transition hover:border-zinc-700 hover:bg-zinc-900/40 sm:p-7"
              >
                <div className="flex flex-wrap items-center justify-between gap-3">
                  <p className="font-mono text-[10px] uppercase tracking-widest text-sky-300/80">{study.label}</p>
                  <p className="text-xs text-zinc-500">{study.client}</p>
                </div>
                <h3 className="mt-4 font-serif text-2xl leading-tight text-zinc-50">{study.title}</h3>
                <p className="mt-4 text-sm leading-relaxed text-zinc-400">{study.summary}</p>
                <p className="mt-4 border-l border-zinc-700 pl-4 text-sm leading-relaxed text-zinc-300">{study.outcome}</p>

                <div className="mt-6 grid gap-3 sm:grid-cols-3">
                  {study.metrics.map((metric) => (
                    <div key={metric.label} className="rounded-sm border border-zinc-800 bg-zinc-950/70 p-4">
                      <p className="font-serif text-2xl text-zinc-50">{metric.value}</p>
                      <p className="mt-1 text-[11px] uppercase tracking-wider text-zinc-600">{metric.label}</p>
                    </div>
                  ))}
                </div>

                <div className="mt-6 flex flex-wrap gap-2">
                  {study.surfaces.map((surface) => (
                    <span key={surface} className="rounded-full border border-zinc-800 bg-zinc-950/70 px-3 py-1 text-xs text-zinc-400">
                      {surface}
                    </span>
                  ))}
                </div>
                <span className="mt-6 inline-block text-xs font-medium text-zinc-300">Read case study →</span>
              </Link>
            ))}
          </div>
        </div>
      </section>

      <section className="bg-zinc-950" aria-labelledby="proof-cards-heading">
        <div className="mx-auto max-w-6xl px-6 py-20 sm:py-24 lg:px-8">
          <div className="grid gap-12 lg:grid-cols-[0.75fr_1.25fr] lg:items-start">
            <div>
              <p className="font-mono text-xs uppercase tracking-[0.22em] text-zinc-500">Proof cards</p>
              <h2 id="proof-cards-heading" className="mt-4 font-serif text-3xl text-zinc-50 sm:text-4xl">
                Six smaller stories, now labeled by use and readiness.
              </h2>
              <p className="mt-4 text-sm leading-relaxed text-zinc-500">
                These are not meant to sit on the homepage as unexplained names. They are source material for sales cards, redacted screenshots, appendix slides, and diligence conversations.
              </p>
            </div>
            <div className="grid gap-3 sm:grid-cols-2">
              {proofCardCaseStudies.map((study, index) => (
                <Link
                  key={study.slug}
                  href={`${ROUTES.caseStudies}/${study.slug}`}
                  className="rounded-sm border border-zinc-800/80 bg-zinc-900/25 p-5 transition hover:border-zinc-700 hover:bg-zinc-900/40"
                >
                  <div className="flex flex-wrap items-center justify-between gap-3">
                    <p className="font-mono text-[10px] uppercase tracking-widest text-zinc-600">Support {String(index + 1).padStart(2, "0")}</p>
                    {study.readiness ? (
                      <p className="rounded-full border border-zinc-800 bg-zinc-950/70 px-2.5 py-1 text-[10px] uppercase tracking-wider text-zinc-500">
                        {study.readiness}
                      </p>
                    ) : null}
                  </div>
                  <h3 className="mt-4 font-serif text-xl leading-tight text-zinc-50">{study.title}</h3>
                  <p className="mt-3 text-sm leading-relaxed text-zinc-400">{study.summary}</p>
                  {study.use ? <p className="mt-4 border-l border-zinc-700 pl-4 text-xs leading-relaxed text-zinc-500">{study.use}</p> : null}
                  <span className="mt-5 inline-block text-xs font-medium text-zinc-300">Read case study →</span>
                </Link>
              ))}
            </div>
          </div>
        </div>
      </section>
    </main>
  );
}
