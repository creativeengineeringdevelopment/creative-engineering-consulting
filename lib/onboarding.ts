/**
 * Post-sandbox onboarding sequence — single source of truth.
 *
 * This is the contract for "what happens after you explore the sandbox":
 * the ordered steps a prospect moves through, and the structured data the
 * intake form collects at each step. Both the /sandbox journey section and the
 * /contact onboarding form render from these definitions so the two can never
 * drift apart.
 *
 * Design rules honored here (design.md):
 * - Progressive disclosure: one idea per step, minimal data at each.
 * - Bands and options over precise figures — qualify fit without asking for
 *   sensitive data.
 * - Consent is a first-class step, not a checkbox buried in a footer.
 */

export type OnboardingPath = "free-deploy" | "edge-plus" | "diagnostic";

/** The three ways forward once the sandbox shows the gap. */
export const ONBOARDING_PATHS: Record<
  OnboardingPath,
  { label: string; blurb: string }
> = {
  "free-deploy": {
    label: "Deploy the free tier",
    blurb:
      "Move the synthetic firm into infrastructure you own — your Cloudflare, Neon, and Resend accounts, scoped and revocable.",
  },
  "edge-plus": {
    label: "Edge Plus",
    blurb:
      "The managed operating layer on top of your deployment — capped, customer-funded, or bring-your-own-key AI.",
  },
  diagnostic: {
    label: "Operating System Diagnostic",
    blurb:
      "A guided examination of one workflow end-to-end — for the work that needs custom judgment before it becomes software.",
  },
} as const;

/** The ordered onboarding journey surfaced on /sandbox. */
export const ONBOARDING_JOURNEY = [
  {
    step: "01",
    title: "Explore the sandbox",
    body: "Operate the synthetic firm — pipeline, portal, documents, communications, fund operations, and the AI operator. No credentials, nothing collected.",
  },
  {
    step: "02",
    title: "Name the gap",
    body: "The sandbox is a mirror. When a workflow you run today is visibly smoother here, that is the signal worth acting on.",
  },
  {
    step: "03",
    title: "Tell us about your firm",
    body: "A short structured intake — who you are, the shape of your firm, and the one workflow you want examined. Four steps, a few minutes.",
  },
  {
    step: "04",
    title: "Pick the path",
    body: "Self-serve free deploy, Edge Plus, or an Operating System Diagnostic. You choose how hands-on this gets.",
  },
  {
    step: "05",
    title: "Scoped reply in 5 business days",
    body: "A human responds with a concrete next step. No auto-provisioning, no credential requests, nothing deployed until you say so.",
  },
] as const;

/** AUM bands — qualify scale without asking for a precise figure. */
export const AUM_BANDS = [
  "Pre-launch / first fund",
  "Under $25M",
  "$25M – $100M",
  "$100M – $500M",
  "$500M+",
] as const;

export const FUND_COUNTS = ["1", "2–3", "4–10", "10+"] as const;

export const TEAM_SIZES = ["Just me", "2–5", "6–20", "21–50", "50+"] as const;

export const STRATEGIES = [
  "Real estate / CRE",
  "Private equity",
  "Venture",
  "Private credit",
  "Fund of funds / multi-strategy",
  "Other",
] as const;

export const TIMELINES = [
  "Exploring — no timeline",
  "This quarter",
  "This month",
  "Urgent — this week",
] as const;

/** The intake form's four steps, in order. */
export const INTAKE_STEPS = [
  {
    id: "identity",
    label: "Identity",
    headline: "Who we're talking to",
    why: "Just enough to reply like a human — no newsletter, no list.",
  },
  {
    id: "firm",
    label: "Your firm",
    headline: "The shape of the operation",
    why: "Bands and options, not precise figures. This qualifies fit; it never leaves the conversation.",
  },
  {
    id: "workflow",
    label: "The workflow",
    headline: "One process, trigger to done",
    why: "Pick the one that hurts. This is the fuel for a useful reply.",
  },
  {
    id: "intent",
    label: "Path & consent",
    headline: "Where this goes",
    why: "You choose the path, and you see exactly how your information is handled.",
  },
] as const;

export type IntakeStepId = (typeof INTAKE_STEPS)[number]["id"];

/** What a submitter is told happens next — the confirmation contract. */
export const CONFIRMATION_POINTS = [
  "A human reads it — no autoresponder funnel.",
  "Scoped reply within 5 business days with a concrete next step.",
  "No auto-provisioning, no credential requests, nothing deployed yet.",
  "Your information stays in the conversation; it is never sold or shared.",
] as const;
