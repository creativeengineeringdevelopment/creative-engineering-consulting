"use client";

import { useMemo, useState } from "react";
import { Eyebrow, MicroLabel, Section } from "@/components/primitives";
import {
  AUM_BANDS,
  CONFIRMATION_POINTS,
  FUND_COUNTS,
  INTAKE_STEPS,
  ONBOARDING_PATHS,
  STRATEGIES,
  TEAM_SIZES,
  TIMELINES,
  type IntakeStepId,
  type OnboardingPath,
} from "@/lib/onboarding";
import { PUBLIC_CONTACT_EMAIL, PUBLIC_BOOKING_URL } from "@/lib/constants";

// Funnel step: terminal conversion — the structured post-sandbox intake that
// collects the defined data model (identity → firm → workflow → intent+consent)
// and composes a scoped, human-readable request.

type FormState = {
  name: string;
  email: string;
  company: string;
  role: string;
  aumBand: string;
  fundCount: string;
  strategy: string;
  teamSize: string;
  workflowName: string;
  workflowSystems: string;
  workflowPain: string;
  path: OnboardingPath;
  timeline: string;
  consent: boolean;
};

const initialState: FormState = {
  name: "",
  email: "",
  company: "",
  role: "",
  aumBand: "",
  fundCount: "",
  strategy: "",
  teamSize: "",
  workflowName: "",
  workflowSystems: "",
  workflowPain: "",
  path: "diagnostic",
  timeline: "",
  consent: false,
};

const inputClass =
  "w-full rounded-sm border border-zinc-700 bg-zinc-900/60 px-3 py-2.5 text-sm text-zinc-100 placeholder:text-zinc-600 transition focus:border-zinc-500 focus:outline focus:outline-1 focus:outline-zinc-500";
const labelClass = "mb-1.5 block text-sm font-medium text-zinc-200";
const helpClass = "mt-1 text-xs text-zinc-500";

function OptionGrid({
  options,
  value,
  onChange,
  name,
}: {
  options: readonly string[];
  value: string;
  onChange: (v: string) => void;
  name: string;
}) {
  return (
    <div className="flex flex-wrap gap-2" role="radiogroup" aria-label={name}>
      {options.map((opt) => (
        <button
          key={opt}
          type="button"
          role="radio"
          aria-checked={value === opt}
          onClick={() => onChange(opt)}
          className={`rounded-sm border px-3 py-1.5 text-sm transition ${
            value === opt
              ? "border-zinc-300 bg-zinc-100 text-zinc-950"
              : "border-zinc-700 bg-transparent text-zinc-300 hover:border-zinc-500 hover:bg-zinc-900/60"
          }`}
        >
          {opt}
        </button>
      ))}
    </div>
  );
}

export function IntakeForm() {
  const [stepIndex, setStepIndex] = useState(0);
  const [form, setForm] = useState<FormState>(initialState);
  const [submitted, setSubmitted] = useState(false);

  const step = INTAKE_STEPS[stepIndex];
  const isFirst = stepIndex === 0;
  const isLast = stepIndex === INTAKE_STEPS.length - 1;

  const set = <K extends keyof FormState>(key: K, value: FormState[K]) =>
    setForm((f) => ({ ...f, [key]: value }));

  const canContinue = useMemo(() => {
    switch (step.id as IntakeStepId) {
      case "identity":
        return (
          form.name.trim() !== "" &&
          /.+@.+\..+/.test(form.email) &&
          form.company.trim() !== ""
        );
      case "firm":
        return form.aumBand !== "" && form.fundCount !== "" && form.teamSize !== "";
      case "workflow":
        return form.workflowName.trim() !== "" && form.workflowPain.trim() !== "";
      case "intent":
        return form.timeline !== "" && form.consent;
      default:
        return false;
    }
  }, [step.id, form]);

  const mailtoHref = useMemo(() => {
    const pathLabel = ONBOARDING_PATHS[form.path].label;
    const subject = `Onboarding intake — ${form.company || "New firm"}`;
    const lines = [
      "POST-SANDBOX ONBOARDING INTAKE",
      "",
      "— Identity —",
      `Name: ${form.name}`,
      `Work email: ${form.email}`,
      `Company: ${form.company}`,
      `Role: ${form.role || "—"}`,
      "",
      "— Firm —",
      `AUM band: ${form.aumBand}`,
      `Funds: ${form.fundCount}`,
      `Strategy: ${form.strategy || "—"}`,
      `Team size: ${form.teamSize}`,
      "",
      "— Workflow —",
      `Process (trigger to done): ${form.workflowName}`,
      `Systems involved: ${form.workflowSystems || "—"}`,
      `Where it hurts: ${form.workflowPain}`,
      "",
      "— Intent —",
      `Path: ${pathLabel}`,
      `Timeline: ${form.timeline}`,
      "",
      "Consent: I agree this information is used only to scope a reply,",
      "never sold or shared, and nothing is provisioned yet.",
    ];
    const to = PUBLIC_CONTACT_EMAIL ?? "";
    return `mailto:${to}?subject=${encodeURIComponent(
      subject,
    )}&body=${encodeURIComponent(lines.join("\n"))}`;
  }, [form]);

  function handleSubmit(e: React.FormEvent) {
    e.preventDefault();
    if (!isLast) {
      setStepIndex((i) => Math.min(i + 1, INTAKE_STEPS.length - 1));
      return;
    }
    // Compose the scoped request. If a booking URL is set, prefer sending the
    // prospect there after capturing intent; otherwise open the email draft.
    window.location.href = mailtoHref;
    setSubmitted(true);
  }

  if (submitted) {
    return (
      <Section tone="solid" ariaLabelledby="intake-confirm-heading">
        <div className="mx-auto max-w-2xl">
          <Eyebrow>Request composed</Eyebrow>
          <h2
            id="intake-confirm-heading"
            className="mt-4 font-serif text-3xl font-medium tracking-tight text-zinc-50 sm:text-4xl"
          >
            Your intake is ready to send.
          </h2>
          <p className="mt-4 text-sm leading-relaxed text-zinc-400">
            {PUBLIC_BOOKING_URL
              ? "Your email draft opened with everything scoped. Send it, then pick a time that works — we'll confirm prep before any call."
              : "Your email draft opened with everything scoped. Send it from your work address and we'll take it from there."}
          </p>
          <ul className="mt-8 space-y-3">
            {CONFIRMATION_POINTS.map((point) => (
              <li
                key={point}
                className="flex gap-3 rounded-sm border border-zinc-800/80 bg-zinc-900/25 p-4 text-sm text-zinc-300"
              >
                <span
                  className="mt-1.5 h-1.5 w-1.5 shrink-0 rounded-full bg-emerald-400/80"
                  aria-hidden
                />
                <span>{point}</span>
              </li>
            ))}
          </ul>
          {PUBLIC_BOOKING_URL ? (
            <a
              href={PUBLIC_BOOKING_URL}
              target="_blank"
              rel="noopener noreferrer"
              className="mt-8 inline-flex items-center justify-center rounded-sm border border-zinc-200/90 bg-zinc-100 px-5 py-2.5 text-sm font-medium text-zinc-950 transition hover:bg-white"
            >
              Schedule the call
            </a>
          ) : null}
        </div>
      </Section>
    );
  }

  return (
    <Section tone="solid" ariaLabelledby="intake-heading">
      <div className="mx-auto max-w-3xl">
        <Eyebrow>Post-sandbox intake</Eyebrow>
        <h2
          id="intake-heading"
          className="mt-4 font-serif text-3xl font-medium tracking-tight text-zinc-50 sm:text-4xl"
        >
          Four short steps. A few minutes.
        </h2>
        <p className="mt-4 max-w-xl text-sm leading-relaxed text-zinc-500">
          {step.why}
        </p>

        {/* Stepper */}
        <ol className="mt-10 flex flex-wrap gap-x-6 gap-y-2 border-b border-zinc-800/80 pb-5">
          {INTAKE_STEPS.map((s, i) => (
            <li key={s.id} className="flex items-center gap-2">
              <span
                className={`font-mono text-[10px] uppercase tracking-widest ${
                  i < stepIndex
                    ? "text-emerald-400/80"
                    : i === stepIndex
                      ? "text-zinc-100"
                      : "text-zinc-600"
                }`}
              >
                {String(i + 1).padStart(2, "0")} {s.label}
              </span>
              {i < INTAKE_STEPS.length - 1 ? (
                <span className="text-zinc-700" aria-hidden>
                  →
                </span>
              ) : null}
            </li>
          ))}
        </ol>

        <form onSubmit={handleSubmit} className="mt-10">
          <h3 className="font-serif text-2xl text-zinc-100">{step.headline}</h3>

          <div className="mt-8 space-y-6">
            {step.id === "identity" ? (
              <>
                <div className="grid gap-5 sm:grid-cols-2">
                  <div>
                    <label htmlFor="name" className={labelClass}>
                      Full name
                    </label>
                    <input
                      id="name"
                      required
                      value={form.name}
                      onChange={(e) => set("name", e.target.value)}
                      className={inputClass}
                      autoComplete="name"
                    />
                  </div>
                  <div>
                    <label htmlFor="email" className={labelClass}>
                      Work email
                    </label>
                    <input
                      id="email"
                      type="email"
                      required
                      value={form.email}
                      onChange={(e) => set("email", e.target.value)}
                      className={inputClass}
                      autoComplete="email"
                    />
                    <p className={helpClass}>Replies come from a human. No list.</p>
                  </div>
                </div>
                <div className="grid gap-5 sm:grid-cols-2">
                  <div>
                    <label htmlFor="company" className={labelClass}>
                      Company / firm
                    </label>
                    <input
                      id="company"
                      required
                      value={form.company}
                      onChange={(e) => set("company", e.target.value)}
                      className={inputClass}
                      autoComplete="organization"
                    />
                  </div>
                  <div>
                    <label htmlFor="role" className={labelClass}>
                      Your role <span className="text-zinc-600">(optional)</span>
                    </label>
                    <input
                      id="role"
                      value={form.role}
                      onChange={(e) => set("role", e.target.value)}
                      className={inputClass}
                      placeholder="e.g. Managing Partner, COO"
                    />
                  </div>
                </div>
              </>
            ) : null}

            {step.id === "firm" ? (
              <>
                <div>
                  <span className={labelClass}>AUM band</span>
                  <OptionGrid
                    name="AUM band"
                    options={AUM_BANDS}
                    value={form.aumBand}
                    onChange={(v) => set("aumBand", v)}
                  />
                </div>
                <div className="grid gap-6 sm:grid-cols-2">
                  <div>
                    <span className={labelClass}>Number of funds</span>
                    <OptionGrid
                      name="Number of funds"
                      options={FUND_COUNTS}
                      value={form.fundCount}
                      onChange={(v) => set("fundCount", v)}
                    />
                  </div>
                  <div>
                    <span className={labelClass}>Team size</span>
                    <OptionGrid
                      name="Team size"
                      options={TEAM_SIZES}
                      value={form.teamSize}
                      onChange={(v) => set("teamSize", v)}
                    />
                  </div>
                </div>
                <div>
                  <span className={labelClass}>
                    Strategy <span className="text-zinc-600">(optional)</span>
                  </span>
                  <OptionGrid
                    name="Strategy"
                    options={STRATEGIES}
                    value={form.strategy}
                    onChange={(v) => set("strategy", v)}
                  />
                </div>
              </>
            ) : null}

            {step.id === "workflow" ? (
              <>
                <div>
                  <label htmlFor="workflowName" className={labelClass}>
                    The one workflow you want examined
                  </label>
                  <input
                    id="workflowName"
                    required
                    value={form.workflowName}
                    onChange={(e) => set("workflowName", e.target.value)}
                    className={inputClass}
                    placeholder="e.g. Investor onboarding, from first call to funded"
                  />
                  <p className={helpClass}>
                    From trigger to done — the process, not the department.
                  </p>
                </div>
                <div>
                  <label htmlFor="workflowSystems" className={labelClass}>
                    Systems it touches <span className="text-zinc-600">(optional)</span>
                  </label>
                  <input
                    id="workflowSystems"
                    value={form.workflowSystems}
                    onChange={(e) => set("workflowSystems", e.target.value)}
                    className={inputClass}
                    placeholder="e.g. CRM, DocuSign, Outlook, a shared drive, three spreadsheets"
                  />
                </div>
                <div>
                  <label htmlFor="workflowPain" className={labelClass}>
                    Where it hurts
                  </label>
                  <textarea
                    id="workflowPain"
                    required
                    rows={4}
                    value={form.workflowPain}
                    onChange={(e) => set("workflowPain", e.target.value)}
                    className={inputClass}
                    placeholder="Delays, rework, dropped handoffs, manual glue — be specific. This is what makes the reply useful."
                  />
                </div>
              </>
            ) : null}

            {step.id === "intent" ? (
              <>
                <div>
                  <span className={labelClass}>Which path fits</span>
                  <div className="space-y-3" role="radiogroup" aria-label="Path">
                    {(Object.keys(ONBOARDING_PATHS) as OnboardingPath[]).map(
                      (key) => {
                        const p = ONBOARDING_PATHS[key];
                        const active = form.path === key;
                        return (
                          <button
                            key={key}
                            type="button"
                            role="radio"
                            aria-checked={active}
                            onClick={() => set("path", key)}
                            className={`block w-full rounded-sm border p-4 text-left transition ${
                              active
                                ? "border-zinc-400 bg-zinc-900/60"
                                : "border-zinc-800/80 bg-zinc-900/25 hover:border-zinc-600"
                            }`}
                          >
                            <span className="flex items-center gap-2.5">
                              <span
                                className={`h-2 w-2 rounded-full ${
                                  active ? "bg-zinc-100" : "bg-zinc-700"
                                }`}
                                aria-hidden
                              />
                              <span className="font-serif text-lg text-zinc-100">
                                {p.label}
                              </span>
                            </span>
                            <span className="mt-1.5 block pl-4 text-sm leading-relaxed text-zinc-400">
                              {p.blurb}
                            </span>
                          </button>
                        );
                      },
                    )}
                  </div>
                </div>
                <div>
                  <span className={labelClass}>Timeline</span>
                  <OptionGrid
                    name="Timeline"
                    options={TIMELINES}
                    value={form.timeline}
                    onChange={(v) => set("timeline", v)}
                  />
                </div>
                <label className="flex cursor-pointer items-start gap-3 rounded-sm border border-zinc-800/80 bg-zinc-900/25 p-4">
                  <input
                    type="checkbox"
                    checked={form.consent}
                    onChange={(e) => set("consent", e.target.checked)}
                    className="mt-1 h-4 w-4 shrink-0 accent-zinc-100"
                  />
                  <span className="text-sm leading-relaxed text-zinc-300">
                    I understand this information is used only to scope a reply,
                    is never sold or shared, and that nothing is provisioned,
                    deployed, or billed until I choose it.
                  </span>
                </label>
              </>
            ) : null}
          </div>

          {/* Controls */}
          <div className="mt-10 flex items-center justify-between border-t border-zinc-800/80 pt-6">
            <button
              type="button"
              onClick={() => setStepIndex((i) => Math.max(i - 1, 0))}
              disabled={isFirst}
              className="text-sm text-zinc-400 transition hover:text-zinc-200 disabled:pointer-events-none disabled:opacity-0"
            >
              ← Back
            </button>
            <div className="flex items-center gap-4">
              <MicroLabel>
                Step {stepIndex + 1} of {INTAKE_STEPS.length}
              </MicroLabel>
              <button
                type="submit"
                disabled={!canContinue}
                className="inline-flex items-center justify-center rounded-sm border border-zinc-200/90 bg-zinc-100 px-5 py-2.5 text-sm font-medium text-zinc-950 transition hover:bg-white disabled:cursor-not-allowed disabled:opacity-40"
              >
                {isLast ? "Compose request" : "Continue"}
              </button>
            </div>
          </div>
        </form>
      </div>
    </Section>
  );
}
