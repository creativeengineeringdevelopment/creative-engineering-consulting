"use client";
import { useState } from "react";
import inventory from "@/lib/capability-inventory.json";

const domains: Record<string, string> = {
  analytics_data: "Analytics & data",
  communications: "Communications",
  engineering_platform: "Engineering & platform",
  finance: "Finance",
  general_operations: "General operations",
  governance_risk: "Governance & risk",
  identity_access: "Identity & access",
  investor_capital: "Investors & capital",
  knowledge_process: "Knowledge & processes",
  people_hiring: "People & hiring",
  projects_work: "Projects & work",
  property_assets: "Properties & assets",
  relationship_crm: "Relationships & CRM",
  support_care: "Support & care",
  workflow_automation: "Workflow automation",
};
const kinds: Record<string, string> = {
  http: "HTTP operations",
  job: "Background jobs",
  mcp: "MCP tools",
  cli: "Commands",
  deployment: "Deployment operations",
};
const verbs: Record<string, string> = {
  analyze: "Analyze",
  approve: "Review & approve",
  create: "Create",
  delete: "Remove",
  deploy: "Deploy",
  execute: "Execute",
  export: "Export",
  operate: "Operate",
  publish: "Publish",
  read: "Read & inspect",
  send: "Send",
  update: "Update",
};
export function CapabilityInventory() {
  const [query, setQuery] = useState("");
  const [domain, setDomain] = useState("all");
  const [kind, setKind] = useState("all");
  const matching = inventory.filter(
    (row) =>
      (domain === "all" || row.domain === domain) &&
      (kind === "all" ||
        Number(row.kinds[kind as keyof typeof row.kinds] || 0) > 0) &&
      `${domains[row.domain]} ${verbs[row.verb]} ${row.id}`
        .toLowerCase()
        .includes(query.trim().toLowerCase()),
  );
  const count = (row: (typeof inventory)[number]) =>
    kind === "all"
      ? row.operation_count
      : Number(row.kinds[kind as keyof typeof row.kinds] || 0);
  return (
    <section id="inventory" className="container section inventory-section">
      <p className="eyebrow">THE FULL DISCOVERY INDEX</p>
      <h2>Explore the building blocks.</h2>
      <p className="lede">
        141 candidate groups. 15 domains. Search the source inventory behind the
        selected workflows.
      </p>
      <div className="inventory-controls">
        <label>
          Search the inventory
          <input
            type="search"
            placeholder="Try communications, analyze or properties"
            value={query}
            onChange={(e) => setQuery(e.target.value)}
          />
        </label>
        <label>
          Business domain
          <select value={domain} onChange={(e) => setDomain(e.target.value)}>
            <option value="all">All 15 domains</option>
            {Object.entries(domains).map(([id, name]) => (
              <option key={id} value={id}>
                {name}
              </option>
            ))}
          </select>
        </label>
        <label>
          Operation type
          <select value={kind} onChange={(e) => setKind(e.target.value)}>
            <option value="all">All operation types</option>
            {Object.entries(kinds).map(([id, name]) => (
              <option key={id} value={id}>
                {name}
              </option>
            ))}
          </select>
        </label>
      </div>
      <div className="inventory-results" role="status">
        <strong>
          {matching.length} groups ·{" "}
          {matching
            .reduce((sum, row) => sum + count(row), 0)
            .toLocaleString("en-US")}{" "}
          operations
        </strong>
        <button
          type="button"
          onClick={() => {
            setQuery("");
            setDomain("all");
            setKind("all");
          }}
        >
          Reset filters
        </button>
      </div>
      <p className="caption">
        Candidate groups are automatic domain-and-action classifications
        awaiting semantic review. Counts include legacy implementations and
        development commands; they are not a count of unique, production-ready
        features.
      </p>
      <div className="inventory-domains">
        {Object.entries(domains).map(([id, name]) => {
          const rows = matching.filter((r) => r.domain === id);
          if (!rows.length) return null;
          return (
            <details
              key={id}
              className="inventory-domain"
              open={
                domain !== "all" || query.trim().length > 0 || kind !== "all"
                  ? true
                  : undefined
              }
            >
              <summary>
                <span>
                  {name}
                  <small>{rows.length} candidate groups</small>
                </span>
                <strong>
                  {rows
                    .reduce((sum, r) => sum + count(r), 0)
                    .toLocaleString("en-US")}{" "}
                  <small>operations</small>
                </strong>
                <span aria-hidden="true">+</span>
              </summary>
              <div className="inventory-rows">
                {rows.map((row) => (
                  <article key={row.id}>
                    <div>
                      <h3>
                        {verbs[row.verb]} · {name}
                      </h3>
                      <p>Candidate group · source-discovered</p>
                    </div>
                    <div className="inventory-kind-counts">
                      {Object.entries(row.kinds)
                        .filter(([k, n]) => n && (kind === "all" || k === kind))
                        .map(([k, n]) => (
                          <span key={k}>
                            <b>{n}</b> {kinds[k]}
                          </span>
                        ))}
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
          No matching groups. Try a broader term or reset the filters.
        </p>
      )}
    </section>
  );
}
