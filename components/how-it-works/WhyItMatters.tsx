const outcomes = [
  "Consistent execution",
  "Faster response times",
  "No dropped leads or tasks",
  "Clear ownership and visibility",
  "Ability to scale without chaos",
] as const;

// Funnel step: doctrine — what this is not, what it is, what it produces.
// (Merges the former Clarification + WhyItMatters sections; one idea per
// design.md composition rule 2.)
export function WhyItMatters() {
  return (
    <section
      className="border-b border-zinc-900 bg-zinc-950/30"
      aria-labelledby="why-matters-heading"
    >
      <div className="mx-auto max-w-6xl px-6 py-20 sm:py-24 lg:px-8">
        <div className="grid gap-12 lg:grid-cols-2 lg:items-start">
          <div className="space-y-6">
            <p className="font-mono text-xs uppercase tracking-[0.2em] text-zinc-500">
              Clarification
            </p>
            <h2
              id="why-matters-heading"
              className="font-serif text-3xl font-medium tracking-tight text-zinc-50 sm:text-4xl"
            >
              This is not automation as most people know it
            </h2>
            <div className="space-y-5 text-base leading-relaxed text-zinc-400">
              <p>
                It is not Zapier-style wiring, not open-ended AI agents, and not
                disconnected sequences that stop when someone forgets the next step.
              </p>
              <p className="font-medium text-zinc-200">
                It is a structured system that executes complete workflows with
                defined logic, states, and outcomes.
              </p>
            </div>
          </div>
          <div>
            <p className="font-mono text-xs uppercase tracking-[0.2em] text-zinc-500">
              Outcomes
            </p>
            <p className="mt-4 text-base leading-relaxed text-zinc-400">
              When execution is system-driven, the business stops paying the tax
              of manual follow-up and rework.
            </p>
            <ul className="mt-8 space-y-3 text-base text-zinc-300">
              {outcomes.map((item) => (
                <li key={item} className="flex gap-3">
                  <span
                    className="mt-2 h-1.5 w-1.5 shrink-0 rounded-full bg-emerald-400/80"
                    aria-hidden
                  />
                  <span>{item}</span>
                </li>
              ))}
            </ul>
          </div>
        </div>
      </div>
    </section>
  );
}
