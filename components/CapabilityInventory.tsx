"use client";
import { useState } from "react";
import catalog from "@/lib/capability-inventory.json";

const domains = [...new Set(catalog.actions.map((action) => action.domain))];
export function CapabilityInventory() {
  const [query, setQuery] = useState("");
  const [domain, setDomain] = useState("all");
  const matching = catalog.actions.filter(
    (action) =>
      (domain === "all" || action.domain === domain) &&
      `${action.name} ${action.description} ${action.domain}`
        .toLowerCase()
        .includes(query.trim().toLowerCase()),
  );
  return (
    <section id="inventory" className="container section inventory-section">
      <p className="eyebrow">THE APPLICATION ACTION CATALOG</p>
      <h2>Find the action you need.</h2>
      <p className="lede">
        Search {catalog.actions.length} distinct actions across {domains.length}{" "}
        areas of work. Each entry describes a specific thing your team can ask
        the system to do.
      </p>
      <div className="inventory-controls action-controls">
        <label htmlFor="action-search">
          Search application actions
          <input
            id="action-search"
            type="search"
            placeholder="Try send an email, import contacts or onboarding"
            value={query}
            onChange={(event) => setQuery(event.target.value)}
          />
        </label>
        <label htmlFor="action-domain">
          Area of work
          <select
            id="action-domain"
            value={domain}
            onChange={(event) => setDomain(event.target.value)}
          >
            <option value="all">All {domains.length} areas</option>
            {domains.map((name) => (
              <option key={name} value={name}>
                {name}
              </option>
            ))}
          </select>
        </label>
      </div>
      <div className="inventory-results" role="status">
        <strong>
          {matching.length} unique application{" "}
          {matching.length === 1 ? "action" : "actions"}
        </strong>
        <button
          type="button"
          onClick={() => {
            setQuery("");
            setDomain("all");
          }}
        >
          Reset filters
        </button>
      </div>
      <p className="caption">
        Counted once per business action, across the reviewed implementations.
        Source evidence supports these entries; client configuration,
        permissions and end-to-end verification are part of delivery. This
        catalog is a reviewed subset of the wider source inventory.
      </p>
      <div className="inventory-domains">
        {domains.map((name) => {
          const actions = matching.filter((action) => action.domain === name);
          if (!actions.length) return null;
          return (
            <details
              key={name}
              className="inventory-domain"
              open={
                domain !== "all" || query.trim().length > 0 ? true : undefined
              }
            >
              <summary>
                <span>{name}</span>
                <strong>
                  {actions.length}
                  <small>actions</small>
                </strong>
                <span aria-hidden="true">+</span>
              </summary>
              <div className="inventory-rows">
                {actions.map((action) => (
                  <article key={action.id}>
                    <div>
                      <h3>{action.name}</h3>
                      <p className="action-description">{action.description}</p>
                    </div>
                    <div className="action-evidence">
                      <span className="eyebrow">SOURCE EVIDENCE</span>
                      <div className="inventory-kind-counts">
                        {action.interfaces.map((method) => (
                          <span key={method}>{method}</span>
                        ))}
                      </div>
                    </div>
                  </article>
                ))}
              </div>
            </details>
          );
        })}
      </div>
      {!matching.length && (
        <p className="inventory-empty">
          No matching actions. Try a broader term or reset the filters.
        </p>
      )}
    </section>
  );
}
