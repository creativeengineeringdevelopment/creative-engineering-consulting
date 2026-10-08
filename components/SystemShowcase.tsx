"use client";
import { useState } from "react";
import Link from "next/link";
import { Arrow, Label } from "@/components/Shared";
import { staffApps, appGroups } from "@/lib/staff-apps";

export function SystemShowcase() {
  const [active, setActive] = useState("relation");
  const app = staffApps.find((item) => item.id === active)!;
  return (
    <section className="section systems-showcase" id="systems">
      <div className="container">
        <div className="section-heading">
          <div>
            <Label>THE CAPABILITIES, CONNECTED</Label>
            <h2>
              15 staff apps.
              <br />
              <em>One operating layer.</em>
            </h2>
          </div>
          <p>
            Start with software already built. Bring your accounts, your people
            and the way you work. Explore the apps that can become your
            operating system.
          </p>
        </div>
        <div className="cap-map">
          <div className="cap-entry">
            <span className="cap-signal" />
            YOUR TEAM + YOUR AI INTERFACE
            <span>ChatGPT or a supported assistant</span>
          </div>
          <div className="cap-spine">
            <span className="eyebrow">SHARED CAPABILITIES LAYER</span>
            <strong>Your accounts. Defined access. Connected work.</strong>
            <p>
              Configured tools let your AI work with the apps your team uses.
            </p>
          </div>
          <div
            className="cap-groups"
            role="group"
            aria-label="Explore 15 staff apps"
          >
            {appGroups.map((group, index) => (
              <div className="cap-group" key={group.name}>
                <div className="cap-group-label">
                  <span>0{index + 1}</span>
                  {group.name}
                </div>
                {staffApps
                  .filter((item) => item.group === group.name)
                  .map((item) => (
                    <button
                      type="button"
                      key={item.id}
                      aria-pressed={active === item.id}
                      aria-controls="cap-app-detail"
                      onClick={() => setActive(item.id)}
                    >
                      <span className="cap-node-dot" />
                      <span>
                        <strong>{item.name}</strong>
                        <small>{item.job}</small>
                      </span>
                      <span aria-hidden="true">↗</span>
                    </button>
                  ))}
              </div>
            ))}
          </div>
          <div className="cap-map-key">
            <span>
              <i />
              Select an app to explore
            </span>
            <span>
              Suite map · connections and AI actions are configured per
              deployment
            </span>
          </div>
        </div>
        <div
          className="cap-detail"
          id="cap-app-detail"
          aria-live="polite"
          aria-atomic="true"
        >
          <div className="cap-detail-intro">
            <Label>{app.group.toUpperCase()}</Label>
            <h3>{app.name}</h3>
            <p>{app.description}</p>
            <span className="cap-status">{app.status}</span>
          </div>
          <div>
            <span className="eyebrow">WHAT YOU CAN DO</span>
            <ul className="check-list">
              {app.actions.map((action) => (
                <li key={action}>{action}</li>
              ))}
            </ul>
          </div>
          <div className="cap-setup">
            <span className="eyebrow">CONNECT & CONFIGURE</span>
            <p>{app.setup}</p>
            <strong>Works with</strong>
            <p>{app.connections}</p>
          </div>
        </div>
        <div className="cap-handoff">
          <div>
            <Label>SEE THE HANDOFF</Label>
            <h3>
              A relationship becomes an action.
              <br />
              <em>The result comes back into view.</em>
            </h3>
          </div>
          <ol>
            <li>
              <strong>RelationEdge</strong>
              <span>Define the audience and cadence</span>
            </li>
            <li>
              <strong>SendEdge</strong>
              <span>Deliver through connected channels</span>
            </li>
            <li>
              <strong>InsightsEdge</strong>
              <span>Review delivery through reports</span>
            </li>
          </ol>
        </div>
        <div className="systems-next">
          <p>
            Choose the apps you need. Your deployment includes the agreed
            license, account connections, access controls and setup. Some
            modules need additional production engineering; the explorer shows
            where. This is a product map, not a live connection to client
            systems.
          </p>
          <Link className="button button-primary" href="/contact">
            Build your operating system <Arrow />
          </Link>
        </div>
      </div>
    </section>
  );
}

export function SystemDeliverables() {
  return (
    <section className="container section" id="what-you-get">
      <div className="section-heading">
        <div>
          <Label>WHAT YOU WALK AWAY WITH</Label>
          <h2>
            A system to use.
            <br />
            <em>A clear way to run it.</em>
          </h2>
        </div>
        <p>
          The deliverable is a deployed system configured for your operation,
          with an agreed set of workflows and a practical handoff.
        </p>
      </div>
      <div className="delivery-grid">
        {[
          [
            "01",
            "Your working application",
            "The agreed screens, roles and tools, configured around your team and business processes.",
          ],
          [
            "02",
            "Your connected workflows",
            "Connections to the selected accounts and data sources, with rules for access, approvals and exceptions.",
          ],
          [
            "03",
            "Your AI capabilities",
            "Scoped assistants and actions available through the application or a supported AI interface, including ChatGPT where compatible.",
          ],
          [
            "04",
            "Your source & handoff",
            "Source access and agreed usage rights, deployment documentation, operator training and a defined support option.",
          ],
        ].map(([n, t, d]) => (
          <article key={n}>
            <span className="index">{n}</span>
            <h3>{t}</h3>
            <p>{d}</p>
          </article>
        ))}
      </div>
      <div className="delivery-example">
        <Label>EXAMPLE FIRST ENGAGEMENT</Label>
        <h3>A follow-up system your team can actually operate.</h3>
        <p>
          Connect an agreed lead source, organize the records, prepare
          follow-ups with AI, require approval before sending, and show the
          result in the operator view. Delivery is accepted against that
          workflow—not just a list of installed tools.
        </p>
        <Link className="text-link" href="/contact">
          Map your first workflow <Arrow />
        </Link>
      </div>
    </section>
  );
}
