const deliverables = [
  "A clear execution map of your current system",
  "Identified breakdowns and failure points",
  "Where leads or opportunities are being lost",
  "Defined workflow opportunities",
  "A prioritized plan for what should be system-driven",
  "Where AI should (and should not) be used",
] as const;

export function WhatYouGet() {
  return (
    <section className="border-b border-zinc-900" aria-labelledby="what-you-get-heading">
      <div className="mx-auto max-w-6xl px-6 py-20 sm:py-24 lg:px-8">
        <div className="max-w-2xl space-y-4">
          <h2
            id="what-you-get-heading"
            className="font-serif text-3xl font-medium tracking-tight text-zinc-50 sm:text-4xl"
          >
            What you get
          </h2>
        </div>

        <ul className="mt-10 max-w-2xl space-y-3 text-base text-zinc-300">
          {deliverables.map((item) => (
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
