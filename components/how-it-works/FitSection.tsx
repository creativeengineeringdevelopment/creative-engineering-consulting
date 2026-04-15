const bullets = [
  "We don’t rebuild your business",
  "We don’t replace all your tools",
  "We structure and connect what already exists",
  "We make it execute automatically",
] as const;

export function FitSection() {
  return (
    <section className="border-b border-zinc-900 bg-zinc-950/30" aria-labelledby="fit-heading">
      <div className="mx-auto max-w-6xl px-6 py-20 sm:py-24 lg:px-8">
        <div className="max-w-2xl space-y-4">
          <p className="font-mono text-xs uppercase tracking-[0.2em] text-zinc-500">
            How we work with you
          </p>
          <h2
            id="fit-heading"
            className="font-serif text-3xl font-medium tracking-tight text-zinc-50 sm:text-4xl"
          >
            How this fits with your business
          </h2>
          <p className="text-base leading-relaxed text-zinc-400 sm:text-lg">
            We install this system on top of your existing operations.
          </p>
        </div>

        <ul className="mt-10 max-w-xl space-y-3 text-base text-zinc-300">
          {bullets.map((item) => (
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
