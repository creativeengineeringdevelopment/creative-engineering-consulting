import { SectionHeader } from "@/components/home/SectionHeader";

const pillars = [
  {
    title: "Workflow definitions",
    body: "Clear workflows so nothing gets missed—owners, timing, and what 'done' means are explicit.",
  },
  {
    title: "Decision logic",
    body: "Consistent routing and decisions so the same inputs produce the same next step, every time.",
  },
  {
    title: "Communication orchestration",
    body: "Follow-up happens automatically across email, SMS, and internal channels—sequenced, not improvised.",
  },
  {
    title: "API integrations",
    body: "Systems stay in sync without manual work—your tools exchange the right data at the right moment.",
  },
  {
    title: "AI-assisted execution",
    body: "AI handles specific steps—drafting, classifying, summarizing—inside guardrails so it speeds work without creating chaos.",
  },
];

export function WhatWeInstall() {
  return (
    <section className="border-b border-zinc-900" aria-labelledby="install-heading">
      <div className="mx-auto max-w-6xl px-6 py-20 sm:py-24 lg:px-8">
        <SectionHeader
          eyebrow="What we install"
          title="How your operations actually run automatically"
          description="We connect what you already use into a governed system: defined paths, automatic follow-up, and measured outcomes—so the operation runs, not just the inbox."
          titleId="install-heading"
        />
        <div className="mt-14 grid gap-4 md:grid-cols-2 lg:grid-cols-3">
          {pillars.map((item, index) => (
            <article
              key={item.title}
              className="group relative overflow-hidden rounded-sm border border-zinc-800/80 bg-zinc-900/20 p-6 transition hover:border-zinc-700"
            >
              <div className="pointer-events-none absolute inset-0 opacity-0 transition group-hover:opacity-100">
                <div className="absolute inset-x-0 top-0 h-px bg-gradient-to-r from-transparent via-zinc-500/40 to-transparent" />
              </div>
              <p className="font-mono text-[10px] uppercase tracking-widest text-zinc-600">
                {String(index + 1).padStart(2, "0")}
              </p>
              <h3 className="mt-3 font-serif text-xl text-zinc-100">{item.title}</h3>
              <p className="mt-3 text-sm leading-relaxed text-zinc-400">{item.body}</p>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
}
