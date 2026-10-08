import type { Metadata } from "next";
import Link from "next/link";
import { notFound } from "next/navigation";
import { cases } from "@/lib/work";
import { CTA, Label, Arrow } from "@/components/Shared";
export function generateStaticParams() {
  return cases.map((c) => ({ slug: c.slug }));
}
export async function generateMetadata({
  params,
}: {
  params: Promise<{ slug: string }>;
}): Promise<Metadata> {
  const { slug } = await params;
  const c = cases.find((c) => c.slug === slug);
  return {
    title: c ? `${c.client} — Selected work` : "Case study",
    description: c?.summary,
  };
}
export default async function CaseStudy({
  params,
}: {
  params: Promise<{ slug: string }>;
}) {
  const { slug } = await params;
  const c = cases.find((c) => c.slug === slug);
  if (!c) notFound();
  return (
    <main id="main-content">
      <section className="container page-hero case-hero">
        <Link className="back-link" href="/work">
          ← All selected work
        </Link>
        <Label>
          {c.category} / {c.number}
        </Label>
        <h1>{c.title}</h1>
        <p className="lede">{c.summary}</p>
        <div className="case-meta">
          <div>
            <span>ORGANIZATION</span>
            <strong>{c.client}</strong>
          </div>
          <div>
            <span>PERIOD</span>
            <strong>{c.period}</strong>
          </div>
          <div>
            <span>ROLE</span>
            <strong>{c.role}</strong>
          </div>
        </div>
      </section>
      <section className={`case-banner ${c.color}`}>
        <div className="container">
          <div className="case-metric">
            <strong>{c.metric}</strong>
            <span>{c.metricLabel}</span>
          </div>
          <div className="banner-flow">
            {c.flow.map((f, i) => (
              <div key={f}>
                <span>0{i + 1}</span>
                <strong>{f}</strong>
                {i < 3 && <span aria-hidden="true">→</span>}
              </div>
            ))}
          </div>
        </div>
      </section>
      <section className="container section case-body">
        <aside>
          <Label>IN PRACTICE</Label>
          <p>A field note on systems, decisions and operating context.</p>
        </aside>
        <div className="case-prose">
          <h2>The operating challenge</h2>
          <p>{c.problem}</p>
          <h2>The approach</h2>
          <p>{c.approach}</p>
          <h3>Scope of the work</h3>
          <ul className="check-list">
            {c.capabilities.map((t) => (
              <li key={t}>{t}</li>
            ))}
          </ul>
          <h2>What the work established</h2>
          <p>{c.result}</p>
          <blockquote>{c.lesson}</blockquote>
          <div className="editorial-note">
            <strong>Scope & attribution</strong>
            <p>{c.note}</p>
          </div>
          <Link className="text-link" href="/contact">
            Discuss a similar workflow <Arrow />
          </Link>
        </div>
      </section>
      <CTA />
    </main>
  );
}
