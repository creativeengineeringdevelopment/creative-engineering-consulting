const criteria = [
  "Founder-led companies with real revenue and too much operator dependency",
  "Capital, investor, lending, marketplace, or high-ticket B2B workflows",
  "Teams with CRM, portal, reporting, inbox, and spreadsheet truth in conflict",
  "Operators preparing for a transition, migration, acquisition, or growth push",
] as const;

export function WhoItsFor() {
  return (
    <section className="border-b border-zinc-900 bg-zinc-950/40" aria-labelledby="who-its-for-heading">
      <div className="mx-auto max-w-6xl px-6 py-20 sm:py-24 lg:px-8">
        <div className="max-w-2xl space-y-4">
          <h2
            id="who-its-for-heading"
            className="font-serif text-3xl font-medium tracking-tight text-zinc-50 sm:text-4xl"
          >
            Who this is for
          </h2>
        </div>

        <ul className="mt-10 max-w-xl space-y-3 text-base text-zinc-300">
          {criteria.map((item) => (
            <li key={item} className="flex gap-3">
              <span className="mt-2 h-1.5 w-1.5 shrink-0 rounded-full bg-zinc-500" aria-hidden />
              <span>{item}</span>
            </li>
          ))}
        </ul>

        <p className="mt-10 max-w-2xl border-l border-zinc-700 pl-6 text-sm leading-relaxed text-zinc-500">
          If the next stage requires cleaner execution before more headcount or more
          AI tools, this is where to start.
        </p>
      </div>
    </section>
  );
}
