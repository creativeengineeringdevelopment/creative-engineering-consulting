import { SectionHeader } from "@/components/home/SectionHeader";

const painPoints = [
  {
    title: "Disconnected tools",
    body: "CRM, inbox, and spreadsheets each hold part of the story. Handoffs get dropped and context gets lost—so deals stall and mistakes creep in.",
  },
  {
    title: "Manual follow-up",
    body: "Leads and cases depend on who remembered to ping whom. Response times swing, opportunities go cold, and revenue leaks in the gaps.",
  },
  {
    title: "Inconsistent execution",
    body: "The same situation gets handled different ways depending on the day. Customers feel it, teams burn time reconciling, and speed never stabilizes.",
  },
  {
    title: "Undefined workflows",
    body: "How work should run lives in people's heads. Without a clear path, you cannot hold a standard, spot delays early, or fix what breaks.",
  },
];

export function Problem() {
  return (
    <section
      className="border-b border-zinc-900 bg-zinc-950/40"
      aria-labelledby="problem-heading"
    >
      <div className="mx-auto max-w-6xl px-6 py-20 sm:py-24 lg:px-8">
        <SectionHeader
          eyebrow="The problem"
          title="Tools everywhere. The work still doesn't run itself."
          description="Most teams have software. Few have a single way work moves from first touch to done—with clear ownership, timing, and outcomes."
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
          When how you operate is fragmented, hiring more people adds cost before
          it adds reliability. The fix is a system that runs the same way every
          time—not another app to babysit.
        </p>
      </div>
    </section>
  );
}
