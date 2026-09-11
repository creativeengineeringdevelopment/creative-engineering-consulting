import type { Metadata } from "next";
import Link from "next/link";
import { notFound } from "next/navigation";
import { allCaseStudies, getCaseStudy } from "@/lib/case-studies";
import { ROUTES, SITE, buttonPrimaryClass, buttonSecondaryClass } from "@/lib/constants";

type CaseStudyPageProps = {
  params: Promise<{ slug: string }>;
};

export function generateStaticParams() {
  return allCaseStudies.map((study) => ({ slug: study.slug }));
}

export async function generateMetadata({ params }: CaseStudyPageProps): Promise<Metadata> {
  const { slug } = await params;
  const study = getCaseStudy(slug);

  if (!study) {
    return { title: "Case Study" };
  }

  return {
    title: `${study.title} Case Study`,
    description: study.summary,
    openGraph: {
      title: `${study.title} · ${SITE.name}`,
      description: study.summary,
    },
  };
}

export default async function CaseStudyDetailPage({ params }: CaseStudyPageProps) {
  const { slug } = await params;
  const study = getCaseStudy(slug);

  if (!study) notFound();

  return (
    <main id="main-content">
      <section className="border-b border-zinc-900" aria-labelledby="case-study-heading">
        <div className="mx-auto max-w-6xl px-6 pb-20 pt-24 sm:pb-24 sm:pt-28 lg:px-8">
          <div className="grid gap-12 lg:grid-cols-[0.95fr_1.05fr] lg:items-start">
            <div className="space-y-7">
              <div>
                <p className="font-mono text-xs uppercase tracking-[0.22em] text-sky-300/80">
                  {study.label} · {study.client}
                </p>
                <h1 id="case-study-heading" className="mt-5 font-serif text-4xl font-medium leading-[1.08] tracking-tight text-zinc-50 sm:text-5xl">
                  {study.title}
                </h1>
              </div>
              <p className="text-lg leading-relaxed text-zinc-400 sm:text-xl">{study.summary}</p>
              {study.readiness ? (
                <p className="inline-flex rounded-full border border-zinc-800 bg-zinc-900/60 px-3 py-1.5 font-mono text-[10px] uppercase tracking-wider text-zinc-500">
                  {study.readiness}
                </p>
              ) : null}
              <div className="flex flex-col gap-3 pt-2 sm:flex-row sm:items-center">
                <Link href={ROUTES.audit} className={buttonPrimaryClass}>
                  Book diagnostic
                </Link>
                <Link href={ROUTES.caseStudies} className={buttonSecondaryClass}>
                  All case studies
                </Link>
              </div>
            </div>

            <div className="overflow-hidden rounded-sm border border-zinc-800/90 bg-zinc-950/80 shadow-2xl shadow-black/30">
              <div className="border-b border-zinc-800/80 bg-zinc-900/60 px-5 py-3">
                <p className="font-mono text-[10px] uppercase tracking-widest text-zinc-600">Case-study console</p>
                <p className="mt-1 text-sm text-zinc-300">Public-safe proof summary</p>
              </div>
              <div className="grid gap-px bg-zinc-800/70 sm:grid-cols-3">
                {study.metrics.map((metric) => (
                  <div key={metric.label} className="bg-zinc-950 p-5">
                    <p className="font-serif text-3xl text-zinc-50">{metric.value}</p>
                    <p className="mt-2 text-[11px] uppercase tracking-wider text-zinc-600">{metric.label}</p>
                  </div>
                ))}
              </div>
              <div className="border-t border-zinc-800/80 p-5">
                <p className="font-mono text-[10px] uppercase tracking-widest text-zinc-600">Surfaces</p>
                <div className="mt-4 flex flex-wrap gap-2">
                  {study.surfaces.map((surface) => (
                    <span key={surface} className="rounded-full border border-zinc-800 bg-zinc-900/70 px-3 py-1 text-xs text-zinc-400">
                      {surface}
                    </span>
                  ))}
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      <section className="border-b border-zinc-900 bg-zinc-950/40" aria-labelledby="case-study-breakdown-heading">
        <div className="mx-auto max-w-6xl px-6 py-20 sm:py-24 lg:px-8">
          <div className="grid gap-5 lg:grid-cols-3">
            {[
              ["Challenge", study.challenge],
              ["Solution", study.solution],
              ["Outcome", study.outcome],
            ].map(([title, body]) => (
              <article key={title} className="rounded-sm border border-zinc-800/80 bg-zinc-900/25 p-6">
                <h2 id={title === "Challenge" ? "case-study-breakdown-heading" : undefined} className="font-serif text-2xl text-zinc-50">
                  {title}
                </h2>
                <p className="mt-4 text-sm leading-relaxed text-zinc-400">{body}</p>
              </article>
            ))}
          </div>
        </div>
      </section>

      <section className="border-b border-zinc-900" aria-labelledby="artifacts-heading">
        <div className="mx-auto max-w-6xl px-6 py-20 sm:py-24 lg:px-8">
          <div className="grid gap-12 lg:grid-cols-[0.75fr_1.25fr] lg:items-start">
            <div>
              <p className="font-mono text-xs uppercase tracking-[0.22em] text-zinc-500">Artifacts</p>
              <h2 id="artifacts-heading" className="mt-4 font-serif text-3xl text-zinc-50 sm:text-4xl">
                What this becomes in a sales room.
              </h2>
              <p className="mt-4 text-sm leading-relaxed text-zinc-500">
                Each artifact should be paired with a redacted screenshot, diagram, or metric before public distribution.
              </p>
            </div>
            <div className="grid gap-3 sm:grid-cols-2">
              {study.artifacts.map((artifact, index) => (
                <div key={artifact} className="rounded-sm border border-zinc-800/80 bg-zinc-900/25 p-5">
                  <p className="font-mono text-[10px] uppercase tracking-widest text-zinc-600">Artifact {String(index + 1).padStart(2, "0")}</p>
                  <p className="mt-3 text-sm leading-relaxed text-zinc-300">{artifact}</p>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      <section className="bg-zinc-950" aria-labelledby="case-study-cta-heading">
        <div className="mx-auto max-w-6xl px-6 py-20 lg:px-8">
          <div className="rounded-sm border border-zinc-800/90 bg-gradient-to-br from-zinc-900/60 to-zinc-950 px-8 py-14 sm:px-12 sm:py-16">
            <div className="mx-auto max-w-2xl text-center">
              <p className="font-mono text-xs uppercase tracking-[0.22em] text-zinc-500">Next step</p>
              <h2 id="case-study-cta-heading" className="mt-4 font-serif text-3xl font-medium tracking-tight text-zinc-50 sm:text-4xl">
                Turn this pattern into your operating map.
              </h2>
              <p className="mt-4 text-base leading-relaxed text-zinc-400">
                The diagnostic identifies which case-study pattern is closest to your business and what should be installed first.
              </p>
              <div className="mt-10 flex flex-col items-center justify-center gap-3 sm:flex-row">
                <Link href={ROUTES.audit} className={buttonPrimaryClass}>
                  Book diagnostic
                </Link>
                <Link href={ROUTES.caseStudies} className={buttonSecondaryClass}>
                  Compare case studies
                </Link>
              </div>
            </div>
          </div>
        </div>
      </section>
    </main>
  );
}
