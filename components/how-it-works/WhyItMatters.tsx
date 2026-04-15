const outcomes = [
  "Consistent execution",
  "Faster response times",
  "No dropped leads or tasks",
  "Clear ownership and visibility",
  "Ability to scale without chaos",
] as const;

export function WhyItMatters() {
  return (
    <section className="border-b border-zinc-900" aria-labelledby="why-matters-heading">
      <div className="mx-auto max-w-6xl px-6 py-20 sm:py-24 lg:px-8">
        <div className="max-w-2xl space-y-4">
          <p className="font-mono text-xs uppercase tracking-[0.2em] text-zinc-500">
            Outcomes
          </p>
          <h2
            id="why-matters-heading"
            className="font-serif text-3xl font-medium tracking-tight text-zinc-50 sm:text-4xl"
          >
            Why this matters
          </h2>
          <p className="text-base leading-relaxed text-zinc-400 sm:text-lg">
            When execution is system-driven, the business stops paying the tax of manual follow-up
            and rework.
          </p>
        </div>

        <ul className="mt-12 max-w-xl space-y-3 text-base text-zinc-300">
          {outcomes.map((item) => (
            <li key={item} className="flex gap-3">
              <span className="mt-2 h-1.5 w-1.5 shrink-0 rounded-full bg-zinc-500" aria-hidden />
              <span>{item}</span>
            </li>
          ))}
        </ul>
      </div>
    </section>
  );
}
