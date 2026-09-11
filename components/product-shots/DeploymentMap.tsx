import { ConsoleFrame } from "./ConsoleFrame";

// Synthetic deployment view — the infrastructure you own, named by provider.
const nodes = [
  { name: "app.yourfirm.com", provider: "Cloudflare", state: "Live", tone: "emerald" as const },
  { name: "db.yourfirm.internal", provider: "Neon", state: "Live", tone: "emerald" as const },
  { name: "mail.yourfirm.com", provider: "Resend", state: "Live", tone: "emerald" as const },
  { name: "ai.operator", provider: "BYOK — your key", state: "Connected", tone: "sky" as const },
] as const;

const toneClass = {
  emerald: "text-emerald-400",
  sky: "text-sky-300",
} as const;

export function DeploymentMap() {
  return (
    <ConsoleFrame title="app.unlockd.com/deployments">
      <div className="p-4 sm:p-6">
        <div className="flex items-baseline justify-between gap-4">
          <p className="font-serif text-lg text-zinc-100">
            Your deployment — infrastructure you own
          </p>
          <span className="hidden font-mono text-[9px] uppercase tracking-widest text-emerald-400/90 sm:block">
            4 / 4 healthy
          </span>
        </div>

        <div className="mt-4 grid gap-2 sm:grid-cols-2">
          {nodes.map((node) => (
            <div
              key={node.name}
              className="rounded-sm border border-zinc-900 bg-zinc-900/30 px-3 py-2.5"
            >
              <div className="flex items-center justify-between gap-2">
                <p className="truncate font-mono text-[11px] text-zinc-200">
                  {node.name}
                </p>
                <span className="flex shrink-0 items-center gap-1.5">
                  <span
                    className={`h-1.5 w-1.5 rounded-full ${node.tone === "emerald" ? "bg-emerald-400/80" : "bg-sky-400/80"}`}
                    aria-hidden
                  />
                  <span className={`font-mono text-[9px] uppercase tracking-widest ${toneClass[node.tone]}`}>
                    {node.state}
                  </span>
                </span>
              </div>
              <p className="mt-0.5 font-mono text-[9px] uppercase tracking-widest text-zinc-600">
                {node.provider}
              </p>
            </div>
          ))}
        </div>

        <div className="mt-4 flex items-center justify-between rounded-sm border border-zinc-900 bg-zinc-900/20 px-3 py-2.5">
          <p className="font-mono text-[10px] text-zinc-500">
            <span className="text-zinc-300">$ git push unlockd main</span> — deploys to
            your account
          </p>
          <span className="hidden font-mono text-[9px] uppercase tracking-widest text-zinc-600 sm:block">
            No hosted lock-in
          </span>
        </div>
      </div>
    </ConsoleFrame>
  );
}
