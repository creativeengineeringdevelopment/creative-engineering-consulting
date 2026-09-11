import { ROUTES } from "@/lib/constants";

// The offer ladder — single source of truth for the homepage Offers section
// and the /pricing page. From the company vision business-model table.

export type Offer = {
  slug: string;
  name: string;
  price: string;
  timeline: string;
  /** One-line role in the funnel. */
  role: string;
  body: string;
  cta: { href: string; label: string };
  /** Visual emphasis on /pricing. */
  featured?: boolean;
};

export const OFFERS: readonly Offer[] = [
  {
    slug: "free-edge",
    name: "Free Edge",
    price: "$0",
    timeline: "Self-serve",
    role: "Acquisition through experience",
    body: "A complete synthetic investment firm to explore, plus a basic deployment path within third-party free-tier limits. Acquisition through experience, not a lead magnet.",
    cta: { href: ROUTES.sandbox, label: "Explore the sandbox" },
  },
  {
    slug: "edge-plus",
    name: "Edge Plus",
    price: "Subscription",
    timeline: "Recurring",
    role: "Recurring subscription revenue",
    body: "Higher usage, managed releases, premium agents, integrations, observability, and support for teams running their own deployed environment.",
    cta: { href: ROUTES.contact, label: "Talk about Edge Plus" },
    featured: true,
  },
  {
    slug: "diagnostic",
    name: "Operating System Diagnostic",
    price: "$10k–$25k",
    timeline: "1–2 weeks",
    role: "Paid qualification and executive alignment",
    body: "System map, source-of-truth assessment, dependency register, and implementation roadmap. Paid qualification and executive alignment.",
    cta: { href: ROUTES.audit, label: "See the diagnostic" },
  },
  {
    slug: "custom-os",
    name: "Custom Operating System",
    price: "$75k–$250k",
    timeline: "8–12 weeks",
    role: "High-value transformation revenue",
    body: "Purpose-built workflows, integrations, data boundaries, agent runbooks, and owner transfer for the operations that need custom judgment.",
    cta: { href: ROUTES.contact, label: "Discuss your operations" },
  },
  {
    slug: "managed-layer",
    name: "Managed Operating Layer",
    price: "Retainer",
    timeline: "Ongoing",
    role: "Retained strategic and technical revenue",
    body: "Ongoing system stewardship within defined scope and response windows — strategic and technical, without disguised employment.",
    cta: { href: ROUTES.contact, label: "Scope a retainer" },
  },
] as const;
