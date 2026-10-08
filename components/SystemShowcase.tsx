"use client";
import { useRef, useState } from "react";
import Link from "next/link";
import Image from "next/image";
import { appScreenshots } from "@/lib/app-screenshots";
import { Arrow, Label } from "@/components/Shared";
import { CapabilityAtlas } from "@/components/CapabilityAtlas";
import { staffApps, appGroups } from "@/lib/staff-apps";

export function SystemShowcase() {
  const [active, setActive] = useState("relation");
  const [view, setView] = useState<"outcomes" | "apps">("outcomes");
  const explorer = useRef<HTMLDivElement>(null);
  const detail = useRef<HTMLDivElement>(null);
  const app = staffApps.find((item) => item.id === active)!;
  const screenshot = appScreenshots[active];
  return (
    <section className="section systems-showcase" id="systems">
      <div className="container">
        <div className="section-heading">
          <div>
            <Label>THE CAPABILITIES, CONNECTED</Label>
            <h2>
              Start with an outcome.
              <br />
              <em>See what connects.</em>
            </h2>
          </div>
          <p>
            Explore how existing capabilities can work together across your
            operation. Choose a business outcome, follow the connections, then
            explore the software behind it.
          </p>
        </div>
        <div
          className="atlas-view-switch"
          ref={explorer}
          role="group"
          aria-label="Choose explorer view"
        >
          <button
            type="button"
            aria-pressed={view === "outcomes"}
            onClick={() => setView("outcomes")}
          >
            Explore by outcome <span>6 workflows</span>
          </button>
          <button
            type="button"
            aria-pressed={view === "apps"}
            onClick={() => setView("apps")}
          >
            Explore staff apps <span>15 apps</span>
          </button>
        </div>
        {view === "outcomes" ? (
          <CapabilityAtlas
            onExploreApp={(id) => {
              setActive(id);
              setView("apps");
              explorer.current?.scrollIntoView({
                block: "start",
                behavior: "instant",
              });
            }}
          />
        ) : (
          <>
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
                  Configured tools let your AI work with the apps your team
                  uses.
                </p>
              </div>
              <div
                id="cap-app-map"
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
                          onClick={() => {
                            setActive(item.id);
                            if (
                              window.matchMedia("(max-width: 700px)").matches
                            ) {
                              detail.current?.focus({ preventScroll: true });
                              detail.current?.scrollIntoView({
                                block: "start",
                                behavior: "instant",
                              });
                            }
                          }}
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
              ref={detail}
              tabIndex={-1}
              className="cap-detail"
              id="cap-app-detail"
              aria-live="polite"
              aria-atomic="true"
            >
              {screenshot && (
                <figure className="cap-screenshot" key={app.id}>
                  <div className="cap-screenshot-bar">
                    <span>{app.name} / PRODUCT VIEW</span>
                    <a
                      href={screenshot.src}
                      target="_blank"
                      rel="noopener noreferrer"
                    >
                      View full size ↗
                    </a>
                  </div>
                  <a
                    href={screenshot.src}
                    target="_blank"
                    rel="noopener noreferrer"
                    aria-label={`View ${app.name} screenshot full size`}
                  >
                    <Image
                      src={screenshot.src}
                      alt={screenshot.alt}
                      width={1440}
                      height={900}
                      sizes="(max-width: 700px) 100vw, 1100px"
                    />
                  </a>
                  <figcaption>
                    {screenshot.caption} The interface and functionality can be
                    customized for your business.
                  </figcaption>
                </figure>
              )}
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
                <a className="cap-back text-link" href="#cap-app-map">
                  Explore another app ↑
                </a>
              </div>
            </div>
          </>
        )}
        <div className="cap-customize">
          <div>
            <Label>BUILT TO BECOME YOURS</Label>
            <h3>
              The starting point.
              <br />
              <em>You decide what it becomes.</em>
            </h3>
          </div>
          <div>
            <strong>Change how it looks.</strong>
            <p>
              Your brand, layouts, dashboards, navigation and the screens each
              role needs.
            </p>
          </div>
          <div>
            <strong>Change how it works.</strong>
            <p>
              Your fields, business rules, approvals, integrations and AI
              actions. Add capabilities as your operation evolves.
            </p>
          </div>
          <p className="cap-customize-note">
            Describe what you want to change. We use AI-assisted development to
            build, test and deploy it. Customization can reach the source
            code—not just a settings menu. Scope, integrations and ongoing
            changes are agreed with you.
          </p>
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
            "Your branding, screens, roles and tools. Both the interface and functionality can be adapted around your team and business processes.",
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
