const reviewAreas = [
  "How leads enter the system",
  "How follow-up happens",
  "How decisions are made",
  "How tools are used",
  "Where handoffs occur",
] as const;

export function WhatThisIs() {
  return (
    <section className="border-b border-zinc-900 bg-zinc-950/40" aria-labelledby="what-this-is-heading">
      <div className="mx-auto max-w-6xl px-6 py-20 sm:py-24 lg:px-8">
        <div className="max-w-2xl space-y-4">
          <h2
            id="what-this-is-heading"
            className="font-serif text-3xl font-medium tracking-tight text-zinc-50 sm:text-4xl"
          >
            What this is
          </h2>
          <p className="text-base leading-relaxed text-zinc-400 sm:text-lg">
            We review how work actually moves through your operation.
          </p>
        </div>

        <ul className="mt-10 max-w-xl space-y-3 text-base text-zinc-300">
          {reviewAreas.map((item) => (
            <li key={item} className="flex gap-3">
              <span className="mt-2 h-1.5 w-1.5 shrink-0 rounded-full bg-zinc-500" aria-hidden />
              <span>{item}</span>
            </li>
          ))}
        </ul>

        <p className="mt-10 max-w-2xl border-l border-zinc-700 pl-6 text-sm leading-relaxed text-zinc-500">
          We don&apos;t rely on assumptions—we map how things actually work.
        </p>
      </div>
    </section>
  );
}
