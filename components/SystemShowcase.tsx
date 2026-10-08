"use client";
import { useState } from "react";
import Image from "next/image";
import Link from "next/link";
import { Arrow, Label } from "@/components/Shared";

const systems = [
  {
    name: "Operating workspace",
    short: "One place to work",
    image: "operating-workspace.png",
    title: "Your tools and AI, in one working environment.",
    description:
      "A workspace that brings your business applications, conversations and AI assistance together. Your team has a place to start the work and follow it through.",
    capabilities: [
      "Open connected business apps",
      "Ask an AI assistant to help with a workflow",
      "Delegate to a specialist and follow the activity",
    ],
    delivery:
      "A configured workspace, agreed app connections, access rules and the workflows your team will use.",
    scenario:
      "Start the day, open the CRM, ask for help preparing a follow-up campaign and track the delegated work alongside your apps.",
    alt: "Existing operating workspace showing connected applications, a central assistant and a Chief of Staff activity panel",
  },
  {
    name: "AI staff & workflows",
    short: "Give the work an owner",
    image: "ai-staff.png",
    title: "AI roles with a defined job to do.",
    description:
      "Specialist agents sit inside the operating software, with responsibilities, playbooks, escalation rules and outputs. You can see what each role is there to do.",
    capabilities: [
      "Give a specialist a task",
      "Work from business playbooks and knowledge",
      "Review the output and the next handoff",
    ],
    delivery:
      "The agreed AI roles, their instructions and knowledge connections, task workflows and review checkpoints.",
    scenario:
      "Ask a marketing specialist for a campaign draft, use your approved playbook and review the resulting work before it moves forward.",
    alt: "Existing AI staff screen showing an agent’s responsibilities, escalation rules, task controls, output area and conversation",
  },
  {
    name: "Content & communication",
    short: "Create where you operate",
    image: "content-studio.png",
    title: "A content studio connected to the business.",
    description:
      "Tools for producing and organizing content live alongside the operational system. The image studio shown here turns a brief or website context into a starting point for creative work.",
    capabilities: [
      "Prepare creative concepts from website context",
      "Generate images from a brief or reference",
      "Keep assets in the connected content library",
    ],
    delivery:
      "The scoped content tools, brand context, asset storage and approval process. Email, SMS or voice delivery is added where agreed.",
    scenario:
      "Prepare creative for a campaign, review it with your team and bring the approved assets into the next communication workflow.",
    alt: "Existing AI image studio with website analysis, reference upload, creative brief, model selection and image preview",
  },
];
export function SystemShowcase() {
  const [active, setActive] = useState(0);
  const system = systems[active];
  return (
    <section className="section systems-showcase" id="systems">
      <div className="container">
        <div className="section-heading">
          <div>
            <Label>CONSULTING, WITH AN OPERATING LAYER</Label>
            <h2>
              Your AI. Your accounts.
              <br />
              <em>Real capabilities.</em>
            </h2>
          </div>
          <p>
            Here’s what that looks like. Explore screens from systems I’ve
            built, then see what a version configured for your business can
            include.
          </p>
        </div>
        <div
          className="system-selector"
          role="group"
          aria-label="Choose a system to explore"
        >
          {systems.map((s, i) => (
            <button
              type="button"
              key={s.name}
              aria-pressed={active === i}
              onClick={() => setActive(i)}
            >
              <span>0{i + 1}</span>
              <strong>{s.name}</strong>
              <small>{s.short}</small>
            </button>
          ))}
        </div>
        <div className="system-product" aria-live="polite">
          <div className="system-product-view">
            <div className="product-screen-bar">
              <span>EXISTING IMPLEMENTATION</span>
              <a
                href={`/systems/${system.image}`}
                target="_blank"
                rel="noopener noreferrer"
              >
                Open full-size image ↗
              </a>
            </div>
            <a
              className="product-screen-link"
              href={`/systems/${system.image}`}
              target="_blank"
              rel="noopener noreferrer"
              aria-label={`Open full-size ${system.name} screenshot`}
            >
              <Image
                src={`/systems/${system.image}`}
                alt={system.alt}
                width={1024}
                height={538}
                sizes="(max-width: 900px) 100vw, 800px"
              />
            </a>
            <p className="product-screen-caption">
              Screenshot from Jared’s existing portfolio. This is a product
              view, not an interactive connection to a client system.
            </p>
          </div>
          <div className="system-product-copy">
            <Label>WHAT YOUR TEAM CAN DO</Label>
            <h3>{system.title}</h3>
            <p>{system.description}</p>
            <ul className="check-list">
              {system.capabilities.map((c) => (
                <li key={c}>{c}</li>
              ))}
            </ul>
            <div className="product-delivery">
              <strong>What you receive</strong>
              <p>{system.delivery}</p>
            </div>
          </div>
        </div>
        <div className="system-use-case">
          <span className="eyebrow">A DAY IN THE SYSTEM</span>
          <p>{system.scenario}</p>
        </div>
        <div className="systems-next">
          <p>
            Start with the system your business needs. We define the modules,
            connections and handoff together; these examples are not a promise
            that every module is included.
          </p>
          <Link className="button button-primary" href="/contact">
            Discuss your system <Arrow />
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
