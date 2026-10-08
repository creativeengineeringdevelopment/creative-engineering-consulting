export const cases = [
  {
    slug: "investor-operations",
    number: "01",
    client: "DiversyFund",
    category: "INVESTOR OPERATIONS",
    title: "An operating platform for a 30,000-investor business.",
    summary:
      "Connecting investor workflows, relationship operations and communication infrastructure in an AI-enabled platform.",
    period: "2025–2026",
    role: "Chief Technology Officer",
    metric: "30,000",
    metricLabel: "active investors in the business served¹",
    color: "blue",
    problem:
      "Investor operations span more than an account record. Communications, documents, account access and follow-up have to stay connected as people move through the investment lifecycle.",
    approach:
      "As CTO, Jared built an AI-enabled platform spanning investor and relationship workflows. The architecture separates business records and campaign intent from communication delivery, with explicit ownership, execution history and operator-facing controls.",
    capabilities: [
      "Investor-facing workflows and account support",
      "CRM segmentation, qualification and follow-up",
      "Email, SMS and voice integrations",
      "Workflow orchestration and execution records",
    ],
    flow: [
      "Investor event",
      "Business rules",
      "Approved action",
      "Execution record",
    ],
    result:
      "The work brought investor-facing and internal operating capabilities into a connected application ecosystem. It is the foundation for this practice’s approach to permissions, workflow ownership and verifiable execution.",
    lesson:
      "A useful AI system needs the operational layer around it: identity, reliable data, bounded actions and a record of what actually happened.",
    note: "¹ Investor scale and career dates are reported by Jared. This describes his CTO work, not an independent audit of current platform usage, investment performance or regulatory compliance.",
  },
  {
    slug: "tokenized-asset-infrastructure",
    number: "02",
    client: "REtokens",
    category: "PRIVATE-MARKET INFRASTRUCTURE",
    title: "Connecting tokenized assets to institutional infrastructure.",
    summary:
      "Development leadership and integration work across custody and investor infrastructure during ATS / broker-dealer application preparation.",
    period: "2023–2024",
    role: "Development & integration leadership",
    metric: "Custody ↔ workflows",
    metricLabel: "connecting asset and investor systems",
    color: "orange",
    problem:
      "Tokenization does not remove the operating requirements of private markets. Investor records, custody integrations and transaction workflows still need to connect across organizations and systems.",
    approach:
      "Jared led development and integration work with Brassica / BitGo as REtokens prepared for an ATS / broker-dealer application. The work connected his experience in tokenized assets with the practical demands of investor and custody infrastructure.",
    capabilities: [
      "Development and integration leadership",
      "Brassica / BitGo integration work",
      "Investor verification and distribution workflows",
      "Technical preparation for an ATS / broker-dealer application",
    ],
    flow: [
      "Investor records",
      "Verification workflow",
      "Custody integration",
      "Operational record",
    ],
    result:
      "The engagement expanded Jared’s experience at the boundary between application development, asset infrastructure and securities-related workflows. That experience informs how he scopes dependencies and responsibilities before implementation.",
    lesson:
      "The important integration is between the business rules, the institutions and the software—not simply between two APIs.",
    note: "Engagement details are based on Jared’s account. Application preparation does not imply an application was filed, approved, or that any entity held an ATS or broker-dealer registration. This is technical experience, not legal advice.",
  },
  {
    slug: "real-estate-acquisitions",
    number: "03",
    client: "TEM Capital / Tarek Buys Houses",
    category: "REAL ESTATE & ACQUISITIONS",
    title: "From incoming lead to an acquisition workflow.",
    summary:
      "Data and acquisition systems informed by hands-on exposure to wholesaling, flipping and real-estate operations with Tarek El Moussa’s businesses.",
    period: "2024–2025",
    role: "Data & acquisition systems",
    metric: "Signal → action",
    metricLabel: "connecting data to the next operating step",
    color: "green",
    problem:
      "Acquisition teams need more than a list of leads. Data has to reach the right person, carry the relevant context and support a clear next step through qualification and follow-up.",
    approach:
      "Working with Tarek El Moussa’s businesses, Jared designed data infrastructure using Salesforce, Snowflake and Twilio Segment, alongside AI-enabled acquisition and investor systems. The engagement grounded the technical work in wholesaling, flipping and acquisition operations.",
    capabilities: [
      "Unified acquisition and investor data",
      "Salesforce, Snowflake and Twilio Segment infrastructure",
      "AI-enabled acquisition workflows",
      "Operational context across wholesaling and flipping",
    ],
    flow: ["Incoming signal", "Connected data", "Qualification", "Next action"],
    result:
      "The work connected data infrastructure with acquisition workflows and sharpened the practice’s focus on follow-through: what happens after a signal arrives, who owns it, and how the next action becomes visible.",
    lesson:
      "A better data stack earns its place when the next person in the workflow can make a better, faster-informed decision.",
    note: "Scope combines Jared’s résumé and his account of the engagement. No conversion lift, transaction volume or financial return is asserted. Named organizations and individuals are experience references, not endorsements.",
  },
] as const;
