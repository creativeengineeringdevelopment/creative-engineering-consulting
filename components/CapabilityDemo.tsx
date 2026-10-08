"use client";
import { useState } from "react";
const examples = [
  {
    name: "Investor operations",
    prompt:
      "Find incomplete investor applications and prepare the next follow-up.",
    records: "12 applications need attention",
    rule: "Read assigned records only",
    action: "12 follow-ups prepared",
    system: "Investor platform",
  },
  {
    name: "Acquisitions",
    prompt:
      "Review new property leads and prepare a qualified shortlist for the team.",
    records: "8 leads match the agreed criteria",
    rule: "Apply the acquisition criteria",
    action: "Shortlist ready for review",
    system: "Acquisition CRM",
  },
  {
    name: "Client service",
    prompt: "Review open requests and draft a status update for each client.",
    records: "6 requests need a response",
    rule: "Respect account-level access",
    action: "6 status updates drafted",
    system: "Service workspace",
  },
];
export function CapabilityDemo() {
  const [active, setActive] = useState(0);
  const [approved, setApproved] = useState(false);
  const item = examples[active];
  return (
    <div className="capability-demo">
      <div className="demo-top">
        <span className="live-dot" /> CAPABILITY EXPLORER
        <span className="demo-tag">ILLUSTRATIVE DEMO</span>
      </div>
      <div
        className="demo-tabs"
        role="group"
        aria-label="Choose an example workflow"
      >
        {examples.map((e, i) => (
          <button
            type="button"
            key={e.name}
            aria-pressed={active === i}
            onClick={() => {
              setActive(i);
              setApproved(false);
            }}
          >
            {e.name}
          </button>
        ))}
      </div>
      <div className="demo-conversation">
        <div className="demo-avatar">You</div>
        <p>{item.prompt}</p>
      </div>
      <div className="demo-path">
        <div>
          <span className="step-dot">1</span>
          <p>
            <strong>Your interface</strong>
            <span>ChatGPT or your chosen AI workspace</span>
          </p>
        </div>
        <div>
          <span className="step-dot">2</span>
          <p>
            <strong>Your capabilities layer</strong>
            <span>
              {item.rule} · {item.records}
            </span>
          </p>
        </div>
        <div>
          <span className="step-dot">3</span>
          <p>
            <strong>Your connected systems</strong>
            <span>{item.system} · Authorized account</span>
          </p>
        </div>
      </div>
      <div className="demo-result" aria-live="polite">
        <span className="status-label">
          {approved ? "APPROVAL RECORDED" : "HUMAN CHECKPOINT"}
        </span>
        <strong>
          {approved ? "Ready for the authorized next step" : item.action}
        </strong>
        <p>
          {approved
            ? "In a deployed workflow, the approved action would run and its result would be logged."
            : "Nothing is sent or changed until the required approval is given."}
        </p>
        <button
          type="button"
          className="demo-approve"
          onClick={() => setApproved(!approved)}
        >
          {approved ? "Reset example ↺" : "Simulate approval →"}
        </button>
      </div>
      <p className="demo-footnote">
        Example data only. No accounts connected and no actions executed.
      </p>
    </div>
  );
}
