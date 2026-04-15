const signals = [
  "Inconsistent follow-up",
  "Leads slipping through the cracks",
  "Manual processes everywhere",
  "Disconnected tools",
  "Unclear workflows or ownership",
  "Reliance on people instead of systems",
] as const;

export function WhatWeLookFor() {
  return (
    <section
      className="border-b border-zinc-900 bg-zinc-950/30"
      aria-labelledby="what-we-look-for-heading"
    >
      <div className="mx-auto max-w-6xl px-6 py-20 sm:py-24 lg:px-8">
        <div className="max-w-2xl space-y-4">
          <h2
            id="what-we-look-for-heading"
            className="font-serif text-3xl font-medium tracking-tight text-zinc-50 sm:text-4xl"
          >
            What we&apos;re looking for
          </h2>
        </div>

        <ul className="mt-10 max-w-xl space-y-3 text-base text-zinc-300">
          {signals.map((item) => (
            <li key={item} className="flex gap-3">
              <span className="mt-2 h-1.5 w-1.5 shrink-0 rounded-full bg-zinc-500" aria-hidden />
              <span>{item}</span>
            </li>
          ))}
        </ul>

        <p className="mt-10 max-w-2xl border-l border-zinc-700 pl-6 text-sm leading-relaxed text-zinc-500">
          If this sounds familiar, your system is likely not executing properly.
        </p>
      </div>
    </section>
  );
}
