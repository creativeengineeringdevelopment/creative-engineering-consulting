import { SITE } from "@/lib/constants";

export function SiteFooter() {
  const year = new Date().getFullYear();

  return (
    <footer className="border-t border-zinc-900 bg-zinc-950">
      <div className="mx-auto flex max-w-6xl flex-col gap-4 px-6 py-10 text-sm text-zinc-500 sm:flex-row sm:items-center sm:justify-between lg:px-8">
        <p>
          © {year} {SITE.name}. All rights reserved.
        </p>
        <p className="font-mono text-xs text-zinc-600">
          Creative Engineering studio · Unlockd platform
        </p>
      </div>
    </footer>
  );
}
