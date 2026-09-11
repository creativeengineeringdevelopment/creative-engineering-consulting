import { ConsoleFrame, ConsoleSidebar } from "./ConsoleFrame";

// Synthetic inbox — every message is drafted, flagged, and waiting on you.
const threads = [
  {
    from: "R. Alvarez — family office",
    subject: "Re: side letter terms",
    state: "Drafted",
    tone: "sky" as const,
  },
  {
    from: "Wealth portal ops",
    subject: "KYC refresh — 4 records",
    state: "Flagged",
    tone: "emerald" as const,
  },
  {
    from: "Auditor — fieldwork",
    subject: "PBC list, items 12–14",
    state: "Waiting on you",
    tone: "zinc" as const,
  },
] as const;

const toneClass = {
  sky: "border-sky-500/30 bg-sky-500/10 text-sky-300",
  emerald: "border-emerald-500/30 bg-emerald-500/10 text-emerald-300",
  zinc: "border-zinc-700 bg-zinc-900/60 text-zinc-400",
} as const;

export function InboxTriage() {
  return (
    <ConsoleFrame title="app.unlockd.com/inbox">
      <div className="flex">
        <ConsoleSidebar
          brand="Unlockd"
          items={[
            { label: "Overview" },
            { label: "Inbox", active: true },
            { label: "Pipeline" },
            { label: "Investors" },
            { label: "Documents" },
            { label: "Deployments" },
          ]}
        />
        <div className="min-w-0 flex-1 p-4 sm:p-5">
          <div className="flex items-baseline justify-between gap-4">
            <p className="font-serif text-lg text-zinc-100">
              Inbox, triaged — 3 need you
            </p>
            <span className="font-mono text-[9px] uppercase tracking-widest text-zinc-600">
              14 handled overnight
            </span>
          </div>

          <div className="mt-4 space-y-2">
            {threads.map((thread) => (
              <div
                key={thread.subject}
                className="rounded-sm border border-zinc-900 bg-zinc-900/30 px-3 py-2.5"
              >
                <div className="flex items-center justify-between gap-3">
                  <p className="truncate text-xs font-medium text-zinc-200">
                    {thread.from}
                  </p>
                  <span
                    className={`shrink-0 rounded-full border px-2 py-0.5 font-mono text-[9px] uppercase tracking-widest ${toneClass[thread.tone]}`}
                  >
                    {thread.state}
                  </span>
                </div>
                <p className="mt-0.5 truncate text-[11px] text-zinc-500">
                  {thread.subject}
                </p>
              </div>
            ))}
          </div>

          <div className="mt-4 rounded-sm border border-zinc-900 bg-zinc-900/20 p-3">
            <p className="font-mono text-[9px] uppercase tracking-widest text-zinc-600">
              Drafted reply — R. Alvarez
            </p>
            <p className="mt-1.5 text-[11px] leading-relaxed text-zinc-400">
              &ldquo;Thanks for the markup — sections 2 and 4 are agreed as drafted.
              Attached is the revised side letter with the reporting cadence you
              asked for&hellip;&rdquo;
            </p>
            <div className="mt-3 flex gap-2">
              <span className="rounded-sm border border-zinc-700 bg-zinc-900 px-2.5 py-1 font-mono text-[9px] uppercase tracking-widest text-zinc-300">
                Send
              </span>
              <span className="rounded-sm border border-zinc-800 px-2.5 py-1 font-mono text-[9px] uppercase tracking-widest text-zinc-500">
                Edit first
              </span>
            </div>
          </div>
        </div>
      </div>
    </ConsoleFrame>
  );
}
