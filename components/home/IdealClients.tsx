import { SectionHeader } from "@/components/home/SectionHeader";

const segments = [
  "Real estate operators",
  "Investment platforms",
  "Law firms",
  "Financial services",
  "High-ticket service businesses",
];

export function IdealClients() {
  return (
    <section className="border-b border-zinc-900" aria-labelledby="clients-heading">
      <div className="mx-auto max-w-6xl px-6 py-20 sm:py-24 lg:px-8">
        <div className="grid gap-14 lg:grid-cols-[1fr_1fr] lg:items-start">
          <SectionHeader
            eyebrow="Ideal clients"
            title="Built when execution is the business."
            description="If throughput, timing, and handoffs directly affect revenue and reputation, you need how work runs to be dependable—not heroic."
            titleId="clients-heading"
          />
          <ul className="space-y-3 border-t border-zinc-800 pt-8 lg:border-t-0 lg:pt-2">
            {segments.map((label) => (
              <li
                key={label}
                className="flex items-center justify-between gap-4 border-b border-zinc-800/80 py-3 text-sm text-zinc-200"
              >
                <span>{label}</span>
                <span className="font-mono text-[10px] uppercase tracking-widest text-zinc-600">
                  Ops-heavy
                </span>
              </li>
            ))}
          </ul>
        </div>
        <p className="mt-12 max-w-3xl text-sm leading-relaxed text-zinc-500">
          We work with teams who are done buying tools and still watching the same
          bottlenecks. If getting work from A to B—on time, every time—is what
          keeps you up, we should talk.
        </p>
      </div>
    </section>
  );
}
