"use client";
import { useState } from "react";
import {
  atlasCapabilities,
  atlasOutcomes,
  atlasSystems,
} from "@/lib/capability-atlas";
import { Arrow, Label } from "@/components/Shared";

export function CapabilityAtlas({
  onExploreApp,
}: {
  onExploreApp: (id: string) => void;
}) {
  const [outcomeId, setOutcomeId] = useState("campaign");
  const [systemId, setSystemId] = useState("relation");
  const outcome = atlasOutcomes.find((item) => item.id === outcomeId)!;
  const used = new Set(outcome.steps.flatMap((step) => step.uses));
  const connected = new Set(
    atlasCapabilities
      .filter((item) => used.has(item.id))
      .map((item) => item.system),
  );
  const system = atlasSystems.find((item) => item.id === systemId)!;
  const capabilities = atlasCapabilities.filter(
    (item) => item.system === systemId,
  );
  return (
    <div className="atlas-explorer">
      <div className="atlas-picker">
        <Label>01 / WHAT DO YOU WANT TO ACCOMPLISH?</Label>
        <div
          className="atlas-outcomes"
          role="group"
          aria-label="Choose a business outcome"
        >
          {atlasOutcomes.map((item, i) => (
            <button
              key={item.id}
              type="button"
              aria-pressed={outcomeId === item.id}
              aria-controls="atlas-outcome"
              onClick={() => {
                setOutcomeId(item.id);
                const first = atlasCapabilities.find(
                  (c) => c.id === item.steps[0].uses[0],
                );
                if (first) setSystemId(first.system);
              }}
            >
              <span>0{i + 1}</span>
              {item.label}
              <span aria-hidden="true">↗</span>
            </button>
          ))}
        </div>
      </div>
      <div id="atlas-outcome" className="atlas-outcome" aria-live="polite">
        <div className="atlas-request">
          <span className="eyebrow">YOUR TEAM · YOUR AI INTERFACE</span>
          <h3>{outcome.prompt}</h3>
          <p>Your request brings the relevant capabilities into view.</p>
        </div>
        <div className="atlas-bridge">
          <span>Business context</span>
          <span>Permissions</span>
          <span>Review points</span>
        </div>
        <ol className="atlas-flow">
          {outcome.steps.map((step, i) => (
            <li key={step.title}>
              <span className="atlas-step-no">0{i + 1}</span>
              <h4>{step.title}</h4>
              <ul>
                {[
                  ...new Set(
                    step.uses.map(
                      (id) =>
                        atlasCapabilities.find((c) => c.id === id)!.system,
                    ),
                  ),
                ].map((id) => (
                  <li key={id}>
                    <button
                      type="button"
                      aria-pressed={systemId === id}
                      aria-controls="atlas-system-detail"
                      onClick={() => setSystemId(id)}
                    >
                      {atlasSystems.find((s) => s.id === id)!.name}
                      <span aria-hidden="true">↗</span>
                    </button>
                  </li>
                ))}
              </ul>
            </li>
          ))}
        </ol>
        <div className="atlas-output">
          <span className="eyebrow">WHAT YOUR TEAM GETS</span>
          <p>{outcome.result}</p>
        </div>
      </div>
      <div className="atlas-network">
        <div className="atlas-network-heading">
          <Label>02 / EXPLORE THE CONNECTED SYSTEMS</Label>
          <p>
            <i />
            Highlighted systems contribute to this outcome. Select any system to
            inspect its capabilities.
          </p>
        </div>
        <div
          className="atlas-nodes"
          role="group"
          aria-label="Capability atlas systems"
        >
          {atlasSystems.map((item) => (
            <button
              type="button"
              key={item.id}
              className={connected.has(item.id) ? "is-connected" : ""}
              aria-pressed={systemId === item.id}
              aria-controls="atlas-system-detail"
              onClick={() => setSystemId(item.id)}
            >
              <span className="atlas-node-light" />
              <span>
                <strong>{item.name}</strong>
                <small>{item.job}</small>
              </span>
              <span aria-hidden="true">↗</span>
            </button>
          ))}
        </div>
      </div>
      <div
        className="atlas-system-detail"
        id="atlas-system-detail"
        aria-live="polite"
      >
        <div>
          <Label>CAPABILITIES IN FOCUS</Label>
          <h3>{system.name}</h3>
          <p>{system.job}</p>
          {system.app && (
            <button
              type="button"
              className="text-link"
              onClick={() => onExploreApp(system.app)}
            >
              Explore the staff app <Arrow />
            </button>
          )}
        </div>
        <ul>
          {capabilities.map((item) => (
            <li key={item.id}>
              <div>
                <strong>{item.name}</strong>
                {used.has(item.id) && (
                  <span className="atlas-used">In this outcome</span>
                )}
              </div>
              <p>{item.access}</p>
              <small>{item.readiness}</small>
            </li>
          ))}
        </ul>
      </div>
      <div className="atlas-boundary">
        <div>
          <Label>HOW THIS BECOMES YOUR SYSTEM</Label>
          <p>{outcome.boundary}</p>
        </div>
        <p>
          These are example workflow compositions drawn from the existing
          Capability Atlas. Components are supported by source or documentation
          evidence; each client’s connections, orchestration and end-to-end
          workflow are configured and verified during implementation. This
          explorer does not execute actions.
        </p>
      </div>
    </div>
  );
}
