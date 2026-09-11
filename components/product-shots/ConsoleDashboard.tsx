import { ConsoleFrame, ConsoleSidebar } from "./ConsoleFrame";

// Synthetic operating picture — matches the demo sandbox parameters
// (3 funds, 135 synthetic investors) from the vision doc.
const funds = [
  { name: "Meridian Growth Fund III", status: "Operating", investors: 58, open: 3 },
  { name: "Harbor Income Partners", status: "Fundraising", investors: 44, open: 7 },
  { name: "Cobalt Industrial Fund", status: "Reporting", investors: 33, open: 2 },
] as const;

const pulse = [
  { time: "09:41", text: "KYC packet cleared — L. Okafor (synthetic)" },
  { time: "09:17", text: "Q3 letter drafted, awaiting your review" },
  { time: "08:52", text: "Distribution notice sent — 21 LPs" },
  { time: "08:30", text: "Commitment pipeline synced to CRM" },
] as const;

export function ConsoleDashboard() {
  return (
    <ConsoleFrame title="app.unlockd.com/overview">
      <div className="flex">
        <ConsoleSidebar
          brand="Unlockd"
          items={[
            { label: "Overview", active: true },
            { label: "Inbox" },
            { label: "Pipeline" },
            { label: "Investors" },
            { label: "Documents" },
            { label: "Deployments" },
          ]}
        />
        <div className="min-w-0 flex-1 p-4 sm:p-5">
          <div className="flex items-baseline justify-between gap-4">
            <div>
              <p className="font-mono text-[10px] uppercase tracking-[0.2em] text-zinc-600">
                Operating picture
              </p>
              <p className="mt-1 font-serif text-lg text-zinc-100">
                Tuesday, 09:41 — 3 funds, 135 investors
              </p>
            </div>
            <span className="hidden font-mono text-[9px] uppercase tracking-widest text-emerald-400/90 sm:block">
              Synced 4 min ago
            </span>
          </div>

          <div className="mt-4 space-y-2">
            {funds.map((fund) => (
              <div
                key={fund.name}
                className="flex items-center gap-3 rounded-sm border border-zinc-900 bg-zinc-900/30 px-3 py-2.5"
              >
                <div className="min-w-0 flex-1">
                  <p className="truncate text-xs font-medium text-zinc-200">
                    {fund.name}
                  </p>
                  <p className="font-mono text-[9px] uppercase tracking-widest text-zinc-600">
                    {fund.investors} investors
                  </p>
                </div>
                <span
                  className={`rounded-full border px-2 py-0.5 font-mono text-[9px] uppercase tracking-widest ${
                    fund.status === "Operating"
                      ? "border-emerald-500/30 bg-emerald-500/10 text-emerald-300"
                      : fund.status === "Fundraising"
                        ? "border-sky-500/30 bg-sky-500/10 text-sky-300"
                        : "border-zinc-700 bg-zinc-900/60 text-zinc-400"
                  }`}
                >
                  {fund.status}
                </span>
                <span className="hidden font-mono text-[10px] text-zinc-500 sm:block">
                  {fund.open} open
                </span>
              </div>
            ))}
          </div>

          <p className="mt-5 font-mono text-[10px] uppercase tracking-[0.2em] text-zinc-600">
            Today&apos;s pulse
          </p>
          <div className="mt-2 space-y-1.5">
            {pulse.map((entry) => (
              <div key={entry.time} className="flex gap-3 text-[11px] leading-relaxed">
                <span className="shrink-0 font-mono text-[10px] text-zinc-600">
                  {entry.time}
                </span>
                <span className="text-zinc-400">{entry.text}</span>
              </div>
            ))}
          </div>
        </div>
      </div>
    </ConsoleFrame>
  );
}
