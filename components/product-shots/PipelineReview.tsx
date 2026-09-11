import { ConsoleFrame } from "./ConsoleFrame";

// Synthetic pipeline review — commitments by stage, movement flagged.
const stages = [
  { label: "Introduced", count: 21, pct: 100 },
  { label: "Materials sent", count: 14, pct: 72 },
  { label: "Diligence", count: 8, pct: 46 },
  { label: "Docs out", count: 5, pct: 30 },
  { label: "Closed", count: 3, pct: 18 },
] as const;

const movement = [
  "L. Okafor moved to diligence (synthetic)",
  "Beacon Trust requested the data room index",
  "2 commitments closed this week — $4.5M synthetic",
] as const;

export function PipelineReview() {
  return (
    <ConsoleFrame title="app.unlockd.com/pipeline">
      <div className="p-4 sm:p-6">
        <div className="flex items-baseline justify-between gap-4">
          <div>
            <p className="font-mono text-[10px] uppercase tracking-[0.2em] text-zinc-600">
              Harbor Income Partners
            </p>
            <p className="mt-1 font-serif text-lg text-zinc-100">
              Raise pipeline — week 11
            </p>
          </div>
          <span className="font-mono text-[9px] uppercase tracking-widest text-sky-300">
            51 active conversations
          </span>
        </div>

        <div className="mt-5 space-y-2.5">
          {stages.map((stage) => (
            <div key={stage.label} className="flex items-center gap-3">
              <p className="w-28 shrink-0 text-[11px] text-zinc-400">
                {stage.label}
              </p>
              <div className="h-4 flex-1 overflow-hidden rounded-sm bg-zinc-900">
                <div
                  className="h-full rounded-sm bg-sky-500/25"
                  style={{ width: `${stage.pct}%` }}
                />
              </div>
              <p className="w-8 shrink-0 text-right font-mono text-[10px] text-zinc-300">
                {stage.count}
              </p>
            </div>
          ))}
        </div>

        <p className="mt-5 font-mono text-[10px] uppercase tracking-[0.2em] text-zinc-600">
          Movement this week
        </p>
        <ul className="mt-2 space-y-1.5">
          {movement.map((item) => (
            <li key={item} className="flex gap-2.5 text-[11px] leading-relaxed text-zinc-400">
              <span className="mt-1.5 h-1 w-1 shrink-0 rounded-full bg-emerald-400/80" aria-hidden />
              {item}
            </li>
          ))}
        </ul>
      </div>
    </ConsoleFrame>
  );
}
