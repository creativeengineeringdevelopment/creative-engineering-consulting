import { SectionHeader } from "@/components/home/SectionHeader";

const painPoints = [
  {
    title: "Truth is split across systems",
    body: "The CRM, portal, spreadsheets, inboxes, vendor tools, and dashboards all disagree. Nobody knows which system actually owns the answer.",
  },
  {
    title: "One person is the operating system",
    body: "Revenue, investor, support, data, and campaign workflows depend on an overloaded founder, CTO, or operator remembering the hidden path.",
  },
  {
    title: "Execution has no proof",
    body: "Emails, tasks, approvals, handoffs, and exceptions happen somewhere, but there is no reliable ledger that proves what happened and what is next.",
  },
  {
    title: "AI amplifies the mess",
    body: "Adding agents before workflow truth creates faster confusion. The operating layer has to come before broad automation.",
  },
];

export function Problem() {
  return (
    <section
      className="border-b border-zinc-900"
      aria-labelledby="problem-heading"
    >
      <div className="mx-auto max-w-6xl px-6 py-20 sm:py-24 lg:px-8">
        <SectionHeader
          eyebrow="The problem worth solving"
          title="Investment firms don't lack software. They lack operational coherence."
          description="The CRM, investor portal, email platform, spreadsheets, document rooms, reporting systems, vendors, and individual operators each hold a different fragment of reality. The fragmentation is a hidden operating tax."
          titleId="problem-heading"
        />
        <div className="mt-14 grid gap-4 sm:grid-cols-2">
          {painPoints.map((item) => (
            <article
              key={item.title}
              className="rounded-sm border border-zinc-800/80 bg-zinc-900/25 p-6 transition hover:border-zinc-700/90"
            >
              <h3 className="font-serif text-xl text-zinc-100">{item.title}</h3>
              <p className="mt-3 text-sm leading-relaxed text-zinc-400">
                {item.body}
              </p>
            </article>
          ))}
        </div>
        <p className="mt-12 max-w-2xl border-l border-zinc-700 pl-6 text-sm leading-relaxed text-zinc-500">
          AI initiatives stall because the underlying facts, permissions, owners,
          and acceptance criteria are unresolved. The fix is a coherent operating
          environment you can explore before you commit — then deploy into
          infrastructure you own.
        </p>
      </div>
    </section>
  );
}
