const steps = [
  { label: "Audit", body: "We identify the system gaps." },
  { label: "Build", body: "We install structured execution." },
  { label: "Operate", body: "We refine and scale." },
] as const;

export function WhatHappensAfter() {
  return (
    <section className="border-b border-zinc-900" aria-labelledby="what-happens-after-heading">
      <div className="mx-auto max-w-6xl px-6 py-20 sm:py-24 lg:px-8">
        <div className="max-w-2xl space-y-4">
          <h2
            id="what-happens-after-heading"
            className="font-serif text-3xl font-medium tracking-tight text-zinc-50 sm:text-4xl"
          >
            What happens after
          </h2>
        </div>

        <ol className="mt-10 grid gap-6 sm:grid-cols-3">
          {steps.map((step, index) => (
            <li
              key={step.label}
              className="rounded-sm border border-zinc-800/80 bg-zinc-900/25 p-6"
            >
              <p className="font-mono text-xs text-zinc-500">
                {String(index + 1).padStart(2, "0")} · {step.label}
              </p>
              <p className="mt-3 text-sm leading-relaxed text-zinc-300">{step.body}</p>
            </li>
          ))}
        </ol>
      </div>
    </section>
  );
}
