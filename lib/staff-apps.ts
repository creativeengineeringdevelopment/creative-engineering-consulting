// Public product summaries from ops-profile 07 registry and 10 data encyclopedia.
// 15 staff apps exclude the investor portal / planned InvestEdge rebrand.
// Edges show suite membership; only documented handoffs are presented as integrations.
export const appGroups = [
  { name: "Relationships" },
  { name: "Execution" },
  { name: "Intelligence" },
  { name: "Business operations" },
  { name: "Access & oversight" },
];
export const staffApps = [
  {
    id: "relation",
    name: "RelationEdge",
    group: "Relationships",
    job: "Contacts & pipeline",
    description:
      "A working view of your relationships, from the first contact to the next follow-up.",
    actions: [
      "Organize contacts, lists and pipeline",
      "Build audiences and follow-up cadences",
      "Hand approved outreach to SendEdge",
    ],
    connections: "Contact data, SendEdge and your campaign execution service.",
    setup:
      "Import your records, define pipeline stages and enable approved write actions.",
    status: "Existing app · configuration required",
  },
  {
    id: "send",
    name: "SendEdge",
    group: "Relationships",
    job: "Outbound communication",
    description:
      "The delivery layer for outbound work, with visibility into sending and mailbox health.",
    actions: [
      "Process queued outbound messages",
      "Monitor mailbox and delivery health",
      "Review delivery status and exceptions",
    ],
    connections:
      "RelationEdge, messaging providers and InsightsEdge reporting.",
    setup:
      "Connect sending accounts, provision the delivery worker and configure channel policies.",
    status: "Existing app · configuration required",
  },
  {
    id: "hr",
    name: "hrEdge",
    group: "Relationships",
    job: "People & hiring",
    description:
      "A staff workspace for employee lifecycle work and hiring administration.",
    actions: [
      "Review employee records",
      "Manage hiring and candidate information",
      "Track lifecycle runs and audit history",
    ],
    connections: "Staff identity, people records and hiring data.",
    setup:
      "Connect your people and hiring data; configure permissions and lifecycle execution.",
    status: "Existing app · configuration required",
  },
  {
    id: "proj",
    name: "projEdge",
    group: "Execution",
    job: "Projects & tasks",
    description:
      "Keep projects, task ownership and delivery status in one simple workspace.",
    actions: [
      "Plan projects and assign owners",
      "Track tasks and completion",
      "See active, planned and paused work",
    ],
    connections: "Project records and the staff workspace.",
    setup:
      "Configure your project structure, production data storage and staff access.",
    status: "Additional production setup",
  },
  {
    id: "plasticity",
    name: "PlasticityEdge",
    group: "Execution",
    job: "Processes & playbooks",
    description:
      "Make the way your company works visible, from process maps to documented runs.",
    actions: [
      "Map business processes",
      "Review SOPs and revisions",
      "Inspect runs, gates and remaining issues",
    ],
    connections: "Process records, SOP documents and staff permissions.",
    setup:
      "Map your processes, connect the process database and configure access and review gates.",
    status: "Additional production setup",
  },
  {
    id: "loop",
    name: "LoopEdge",
    group: "Execution",
    job: "Missions & improvement",
    description:
      "A control surface for work that executes, gets assessed and improves against a defined goal.",
    actions: [
      "Review missions and status",
      "Work with execution recipes",
      "Track fleet activity and improvements",
    ],
    connections: "A separately hosted execution engine.",
    setup:
      "Provision the execution engine, secure its connection and define permitted missions.",
    status: "Execution engine required",
  },
  {
    id: "data",
    name: "Data Refinery",
    group: "Intelligence",
    job: "Data quality & identity",
    description:
      "Turn imported records into data an operator can inspect, reconcile and approve.",
    actions: [
      "Review imports and identity relationships",
      "Inspect quarantined merge candidates",
      "Audit and promote qualified records",
    ],
    connections: "The data engine, source archives and entity graph.",
    setup:
      "Connect source files and the data engine; define review rules and access.",
    status: "Additional production setup",
  },
  {
    id: "insights",
    name: "InsightsEdge",
    group: "Intelligence",
    job: "Reports & visibility",
    description:
      "A report studio that brings connected operational data onto a working canvas.",
    actions: [
      "Compose operational reports",
      "Refresh panels from connected sources",
      "Review sending and engagement information",
    ],
    connections: "SendEdge, portal data and configured reporting adapters.",
    setup:
      "Connect report sources, distinguish live panels and configure durable report storage and access.",
    status: "Additional production setup",
  },
  {
    id: "idea",
    name: "IdeaEdge",
    group: "Intelligence",
    job: "Ideas & planning",
    description:
      "A spatial whiteboard for the ideas you are considering, developing and moving forward.",
    actions: [
      "Organize ideas into rooms",
      "Link related cards",
      "Assign an owner and next step",
    ],
    connections: "Idea boards and the staff workspace.",
    setup:
      "Configure boards, staff access and durable storage for shared work.",
    status: "Additional production setup",
  },
  {
    id: "finance",
    name: "FinanceEdge",
    group: "Business operations",
    job: "Financial workspaces",
    description:
      "Bring company, vehicle and asset books into a workspace for review and follow-through.",
    actions: [
      "Organize books by company, vehicle or asset",
      "Review connected documents and capital snapshots",
      "Track unresolved work on each book",
    ],
    connections: "Drive documents and read-only portal capital data.",
    setup:
      "Map books to your sources and configure persistent storage and access. Your capital ledger remains the system of record.",
    status: "Additional production setup",
  },
  {
    id: "assets",
    name: "AssetEdge",
    group: "Business operations",
    job: "Portfolio & property ops",
    description:
      "A portfolio operations workspace for the properties, people and obligations behind the assets.",
    actions: [
      "Review property KPIs and weekly updates",
      "Track debt and reporting obligations",
      "Manage asset contacts, vendors and tasks",
    ],
    connections: "A dedicated asset database and KPI event integration.",
    setup:
      "Import your asset records, assign properties and configure role-based access and reporting.",
    status: "Existing app · configuration required",
  },
  {
    id: "govern",
    name: "GovernEdge",
    group: "Business operations",
    job: "Rules & responsibilities",
    description:
      "A structured home for company entities, responsibilities, rules and governing documents.",
    actions: [
      "Organize entities and seats",
      "Document rules and responsibilities",
      "Keep governance records in context",
    ],
    connections: "Governance records and supporting documents.",
    setup:
      "Choose a durable hosting model, configure access and review the deployment before rollout.",
    status: "Deployment review required",
  },
  {
    id: "my",
    name: "MyEdge",
    group: "Access & oversight",
    job: "Staff profiles & access",
    description:
      "A staff profile and access-request workspace with an audit trail for its managed applications.",
    actions: [
      "Manage staff profile preferences",
      "Request access to managed apps",
      "Review grants and access decisions",
    ],
    connections: "WorkOS identity and SecretsEdge access grants.",
    setup:
      "Configure your identity organization and app grants. Broader suite access is scoped separately.",
    status: "Existing app · configuration required",
  },
  {
    id: "secrets",
    name: "SecretsEdge",
    group: "Access & oversight",
    job: "Credential inventory",
    description:
      "Know which services depend on which credentials, without putting secret values in the inventory.",
    actions: [
      "Record credential reference metadata",
      "Track review and rotation dates",
      "Review affected applications and changes",
    ],
    connections:
      "MyEdge permissions and references to provider-managed credentials.",
    setup:
      "Configure access and register credential references. Actual credentials stay with their providers.",
    status: "Existing app · configuration required",
  },
  {
    id: "devobs",
    name: "DevEdge Observatory",
    group: "Access & oversight",
    job: "Engineering visibility",
    description:
      "An observatory for engineering plans, delivery evidence and agent information.",
    actions: [
      "Review engineering plans",
      "Inspect delivery evidence",
      "Browse the agent registry",
    ],
    connections: "Engineering records and delivery evidence sources.",
    setup:
      "Connect your engineering data and configure staff access and reporting boundaries.",
    status: "Existing app · configuration required",
  },
];
