export const SITE = {
  name: "Creative Engineering Consulting",
  /** Horizontal lockup (PNG in /public). */
  logoSrc: "/logo.png",
  tagline:
    "We structure the workflows you already have into AI-powered systems that run automatically—follow-up, routing, and decisions without manual effort.",
  url: "https://creative-engineering-consulting.vercel.app",
} as const;

export const ROUTES = {
  audit: "/audit",
  contact: "/contact",
  howItWorks: "/how-it-works",
} as const;

function readPublicEnv(key: string): string | undefined {
  const value = process.env[key]?.trim();
  return value || undefined;
}

/** Calendly, Cal.com, or similar — opens in a new tab when set. */
export const PUBLIC_BOOKING_URL = readPublicEnv("NEXT_PUBLIC_BOOKING_URL");

/** Public inbox for audit requests (mailto on CTAs when set). */
export const PUBLIC_CONTACT_EMAIL = readPublicEnv("NEXT_PUBLIC_CONTACT_EMAIL");

export function systemAuditMailto(): string | null {
  if (!PUBLIC_CONTACT_EMAIL) return null;
  const params = new URLSearchParams({
    subject: "System audit request",
    body:
      "Company:\nPrimary workflow you want examined:\nTime zone:\nAnything else we should know:\n",
  });
  return `mailto:${PUBLIC_CONTACT_EMAIL}?${params.toString()}`;
}

export const buttonPrimaryClass =
  "inline-flex items-center justify-center rounded-sm border border-zinc-200/90 bg-zinc-100 px-5 py-2.5 text-sm font-medium text-zinc-950 shadow-sm transition hover:bg-white focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-zinc-300";

export const buttonSecondaryClass =
  "inline-flex items-center justify-center rounded-sm border border-zinc-700 bg-transparent px-5 py-2.5 text-sm font-medium text-zinc-100 transition hover:border-zinc-500 hover:bg-zinc-900/60 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-zinc-500";
