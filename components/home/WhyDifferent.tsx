import { SectionHeader } from "@/components/home/SectionHeader";

const rows = [
  {
    label: "CRMs",
    contrast:
      "Store data but don't run your operations. They don't own the full path from signal to done.",
  },
  {
    label: "Automation tools",
    contrast:
      "Trigger basic sequences but don't manage real workflows—exceptions, ownership, and quality still land on people.",
  },
  {
    label: "AI tools",
    contrast:
      "Generate outputs but don't execute processes. We place AI inside defined steps with clear inputs, outputs, and limits.",
  },
  {
    label: "Agencies",
    contrast:
      "Do work manually instead of installing systems. We build what keeps running after the project ends.",
  },
];

export function WhyDifferent() {
  return (
    <section
      className="border-b border-zinc-900 bg-zinc-950/40"
      aria-labelledby="different-heading"
    >
      <div className="mx-auto max-w-6xl px-6 py-20 sm:py-24 lg:px-8">
        <SectionHeader
          eyebrow="Why this is different"
          title="Systems that run the work—not another purchase."
          description="We are not selling prompts, zaps, or one-off builds. We install how operations execute: explicit paths, connected tools, and outcomes you can see."
          titleId="different-heading"
        />
        <div className="mt-14 overflow-hidden rounded-sm border border-zinc-800/90">
          <div className="grid grid-cols-[minmax(0,0.35fr)_1fr] border-b border-zinc-800 bg-zinc-900/40 px-4 py-3 text-[10px] font-mono uppercase tracking-widest text-zinc-500 sm:px-6">
            <span>Category</span>
            <span className="hidden sm:inline">What we install instead</span>
          </div>
          <ul>
            {rows.map((row) => (
              <li
                key={row.label}
                className="grid gap-2 border-b border-zinc-800/80 px-4 py-5 last:border-b-0 sm:grid-cols-[minmax(0,0.35fr)_1fr] sm:px-6 sm:py-6"
              >
                <div className="font-serif text-lg text-zinc-100">{row.label}</div>
                <p className="text-sm leading-relaxed text-zinc-400">{row.contrast}</p>
              </li>
            ))}
          </ul>
        </div>
      </div>
    </section>
  );
}
