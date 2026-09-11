const reviewAreas = [
  "Where each critical record is created, changed, trusted, and reported",
  "How work moves from signal to owner to action to proof",
  "Which workflows depend on tribal knowledge instead of runbooks",
  "Which integrations are glue, which are infrastructure, and which are risk",
  "Where Unlockd-style agent runtime would help after the operating layer is clean",
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
            A structured operating-system diagnosis for companies that cannot keep
            scaling on disconnected SaaS, manual heroics, and unclear ownership.
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
          We do not prescribe agents until the source-of-truth map, workflow ownership,
          and acceptance proof are visible.
        </p>
      </div>
    </section>
  );
}
