import type { ReactNode } from "react";

/**
 * Code-rendered product imagery (design.md imagery addendum).
 * These are honest stand-ins: synthetic data only, rendered as the console
 * actually reads — dark instrument, no chrome gradients, no fake photography.
 * All data on the surface is synthetic (footer disclaimer applies).
 */

type ConsoleFrameProps = {
  children: ReactNode;
  /** Window title shown in the chrome bar, e.g. "app.unlockd.com/inbox". */
  title: string;
  className?: string;
};

export function ConsoleFrame({ children, title, className = "" }: ConsoleFrameProps) {
  return (
    <figure
      className={`overflow-hidden rounded-sm border border-zinc-800/80 bg-zinc-950 shadow-[0_24px_80px_-32px_rgba(0,0,0,0.7)] ${className}`}
    >
      {/* window chrome */}
      <div className="flex items-center gap-3 border-b border-zinc-900 bg-zinc-900/40 px-4 py-2.5">
        <div className="flex gap-1.5" aria-hidden>
          <span className="h-2.5 w-2.5 rounded-full bg-zinc-700" />
          <span className="h-2.5 w-2.5 rounded-full bg-zinc-700" />
          <span className="h-2.5 w-2.5 rounded-full bg-zinc-700" />
        </div>
        <p className="truncate font-mono text-[10px] tracking-wider text-zinc-500">
          {title}
        </p>
        <span className="ml-auto rounded-full border border-zinc-800 bg-zinc-900/60 px-2 py-0.5 font-mono text-[9px] uppercase tracking-widest text-zinc-600">
          Synthetic data
        </span>
      </div>
      <div className="bg-zinc-950 text-left">{children}</div>
    </figure>
  );
}

type SidebarProps = {
  items: { label: string; active?: boolean }[];
  brand: string;
};

export function ConsoleSidebar({ items, brand }: SidebarProps) {
  return (
    <div className="hidden w-40 shrink-0 flex-col border-r border-zinc-900 bg-zinc-950 p-3 sm:flex">
      <p className="px-2 pb-3 font-mono text-[10px] font-medium uppercase tracking-[0.2em] text-zinc-400">
        {brand}
      </p>
      <nav className="space-y-0.5" aria-hidden>
        {items.map((item) => (
          <div
            key={item.label}
            className={`rounded-sm px-2 py-1.5 font-mono text-[10px] tracking-wide ${
              item.active
                ? "bg-zinc-900 text-zinc-100"
                : "text-zinc-500"
            }`}
          >
            {item.label}
          </div>
        ))}
      </nav>
      <div className="mt-auto border-t border-zinc-900 pt-3">
        <div className="flex items-center gap-2 px-2">
          <span className="h-1.5 w-1.5 rounded-full bg-emerald-400/80" aria-hidden />
          <span className="font-mono text-[9px] uppercase tracking-widest text-zinc-600">
            All systems live
          </span>
        </div>
      </div>
    </div>
  );
}
