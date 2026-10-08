// Curated public projection of the 2026-10-06 Capability Atlas.
// Source paths, actor identities, credentials and raw operations are intentionally excluded.
// Source evidence establishes component presence, not a verified end-to-end deployment.
export type AtlasCapability = {
  id: string;
  name: string;
  system: string;
  access: string;
  readiness: string;
};
export const atlasSystems = [
  {
    id: "relation",
    name: "RelationEdge",
    job: "Relationships & audiences",
    app: "relation",
  },
  { id: "send", name: "SendEdge", job: "Email, SMS & calling", app: "send" },
  {
    id: "portal",
    name: "Investor portal",
    job: "Investor journeys & records",
    app: "",
  },
  {
    id: "property",
    name: "Property operations",
    job: "Properties & acquisition deals",
    app: "",
  },
  {
    id: "hiring",
    name: "Hiring",
    job: "Applications & candidate workflow",
    app: "",
  },
  { id: "hr", name: "hrEdge", job: "Employee lifecycle", app: "hr" },
  {
    id: "projects",
    name: "projEdge",
    job: "Tasks & accountable delivery",
    app: "proj",
  },
  {
    id: "plasticity",
    name: "PlasticityEdge",
    job: "Processes & operating procedures",
    app: "plasticity",
  },
  {
    id: "insights",
    name: "InsightsEdge",
    job: "Reports & analysis",
    app: "insights",
  },
  {
    id: "govern",
    name: "GovernEdge",
    job: "Responsibilities & authority",
    app: "govern",
  },
  {
    id: "devobs",
    name: "DevEdge Observatory",
    job: "Engineering evidence",
    app: "devobs",
  },
  {
    id: "middleware",
    name: "Event connections",
    job: "Synchronize system records",
    app: "",
  },
  {
    id: "cos",
    name: "AI orchestration",
    job: "Proposals & reviewed actions",
    app: "",
  },
];
const existing = "Existing component · client setup required";
const gated = "Existing component · access and write gates require setup";
const partial =
  "App-specific implementation · shared orchestration requires integration";
export const atlasCapabilities: AtlasCapability[] = [
  {
    id: "list.manage",
    name: "Build, preview and refresh audiences",
    system: "relation",
    access: "Permission-controlled changes",
    readiness: existing,
  },
  {
    id: "cadence.lifecycle",
    name: "Draft, start and pause follow-up sequences",
    system: "relation",
    access: "Permission-controlled changes",
    readiness: existing,
  },
  {
    id: "contact.manage",
    name: "Find, organize and update contact records",
    system: "relation",
    access: "Permission-controlled changes",
    readiness: existing,
  },
  {
    id: "appointment.manage",
    name: "Manage appointments linked to contacts",
    system: "relation",
    access: "Permission-controlled changes",
    readiness: existing,
  },
  {
    id: "funnel.analyze",
    name: "Inspect conversion and pipeline activity",
    system: "relation",
    access: "Read and analyze",
    readiness: existing,
  },
  {
    id: "message.email_send",
    name: "Deliver email through connected accounts",
    system: "send",
    access: "Authorized external communication",
    readiness: existing,
  },
  {
    id: "message.sms_send",
    name: "Send SMS and receive delivery events",
    system: "send",
    access: "Authorized external communication",
    readiness: existing,
  },
  {
    id: "call.ai_start",
    name: "Initiate AI-assisted calls",
    system: "send",
    access: "Authorized external communication",
    readiness: existing,
  },
  {
    id: "delivery.capacity",
    name: "Inspect sending capacity and delivery health",
    system: "send",
    access: "Read and analyze",
    readiness: existing,
  },
  {
    id: "communication.timeline",
    name: "Review communication history and delivery evidence",
    system: "send",
    access: "Read and analyze",
    readiness: existing,
  },
  {
    id: "investor.profile",
    name: "Work with investor profiles and onboarding state",
    system: "portal",
    access: "Identity-scoped access",
    readiness: existing,
  },
  {
    id: "report.generate",
    name: "Generate, refresh and export reports",
    system: "insights",
    access: "Permission-controlled changes",
    readiness: gated,
  },
  {
    id: "event.sync",
    name: "Validate and synchronize events between systems",
    system: "middleware",
    access: "Authorized service connection",
    readiness: "Documented integration · client mapping required",
  },
  {
    id: "action.propose",
    name: "Prepare inspectable actions for review",
    system: "cos",
    access: "Propose before execution",
    readiness: partial,
  },
  {
    id: "action.approve_execute",
    name: "Review and authorize app-specific actions",
    system: "cos",
    access: "Human approval",
    readiness: partial,
  },
  {
    id: "candidate.manage",
    name: "Manage jobs, candidate records and research",
    system: "hiring",
    access: "Staff administration · human hiring decisions",
    readiness: existing,
  },
  {
    id: "candidate.apply",
    name: "Collect applications, profiles and documents",
    system: "hiring",
    access: "Applicant submission",
    readiness: existing,
  },
  {
    id: "employee.lifecycle",
    name: "Coordinate onboarding and lifecycle steps",
    system: "hr",
    access: "Permission-controlled changes",
    readiness: gated,
  },
  {
    id: "governance.manage",
    name: "Maintain roles, assignments and governing records",
    system: "govern",
    access: "Reviewed changes",
    readiness: gated,
  },
  {
    id: "project.manage",
    name: "Assign and track project tasks",
    system: "projects",
    access: "Permission-controlled changes",
    readiness: gated,
  },
  {
    id: "property.manage",
    name: "Import, enrich and inspect property records",
    system: "property",
    access: "Permission-controlled changes",
    readiness: existing,
  },
  {
    id: "weekly.ranking",
    name: "Generate and review property rankings",
    system: "property",
    access: "Permission-controlled changes",
    readiness: existing,
  },
  {
    id: "property.outreach",
    name: "Coordinate property outreach and follow-up",
    system: "property",
    access: "Authorized external communication",
    readiness: existing,
  },
  {
    id: "deal.manage",
    name: "Advance acquisition deals and associated records",
    system: "property",
    access: "Permission-controlled changes",
    readiness: existing,
  },
  {
    id: "engineering.observe",
    name: "Inspect engineering plans and delivery evidence",
    system: "devobs",
    access: "Read and analyze",
    readiness: existing,
  },
  {
    id: "process.govern",
    name: "Map processes, review gates and record runs",
    system: "plasticity",
    access: "Permission-controlled changes",
    readiness: gated,
  },
  {
    id: "sop.manage",
    name: "Draft, review, publish and export procedures",
    system: "plasticity",
    access: "Permission-controlled changes",
    readiness: gated,
  },
  {
    id: "authority.resolve",
    name: "Inspect responsibilities and operation permissions",
    system: "govern",
    access: "Read within configured policy",
    readiness: gated,
  },
];
export const atlasOutcomes = [
  {
    id: "campaign",
    label: "Run an investor campaign",
    prompt:
      "“Build the right audience, prepare the follow-up and show me what happened.”",
    result:
      "An audience, a reviewed communication sequence and a report your team can follow.",
    boundary:
      "Audience rules, consent, channel access and launch approvals are defined before sending.",
    steps: [
      { title: "Build the audience", uses: ["list.manage"] },
      { title: "Prepare the sequence", uses: ["cadence.lifecycle"] },
      {
        title: "Deliver & track",
        uses: [
          "message.email_send",
          "message.sms_send",
          "call.ai_start",
          "delivery.capacity",
        ],
      },
      { title: "Review response", uses: ["funnel.analyze"] },
    ],
  },
  {
    id: "conversion",
    label: "Understand investor conversion",
    prompt:
      "“Where are investors getting stuck, and what should we investigate next?”",
    result:
      "A connected view of the investor journey, supporting evidence and proposed next actions.",
    boundary:
      "Analysis is read-first. Changes are proposed for review; a shared autonomous diagnosis-and-remediation workflow still requires integration.",
    steps: [
      {
        title: "Inspect the journey",
        uses: ["funnel.analyze", "investor.profile"],
      },
      {
        title: "Connect the evidence",
        uses: ["communication.timeline", "event.sync"],
      },
      { title: "Explain the findings", uses: ["report.generate"] },
      {
        title: "Review next actions",
        uses: ["action.propose", "action.approve_execute"],
      },
    ],
  },
  {
    id: "hiring",
    label: "Coordinate a hiring process",
    prompt:
      "“Bring our applications, candidate records and interview follow-up into one workflow.”",
    result:
      "An organized candidate pipeline with application context, outreach and interview follow-through.",
    boundary:
      "People make hiring decisions. Candidate access, outreach and review criteria are configured with your team.",
    steps: [
      { title: "Collect applications", uses: ["candidate.apply"] },
      {
        title: "Organize candidate work",
        uses: ["candidate.manage", "contact.manage"],
      },
      {
        title: "Prepare outreach",
        uses: ["action.propose", "message.email_send"],
      },
      { title: "Coordinate interviews", uses: ["appointment.manage"] },
    ],
  },
  {
    id: "property",
    label: "Move an acquisition forward",
    prompt:
      "“Help us prioritize properties, understand the owners and follow through on the next step.”",
    result:
      "A prioritized property pipeline, ownership context, outreach and accountable deal progression.",
    boundary:
      "Scoring criteria and outreach permissions are configured for your operation. People retain control over transaction decisions.",
    steps: [
      { title: "Understand the properties", uses: ["property.manage"] },
      { title: "Prioritize the work", uses: ["weekly.ranking"] },
      {
        title: "Coordinate follow-up",
        uses: ["contact.manage", "property.outreach"],
      },
      { title: "Advance the deal", uses: ["deal.manage"] },
    ],
  },
  {
    id: "onboarding",
    label: "Onboard a new employee",
    prompt:
      "“Turn this approved hire into an onboarding plan with clear owners and completion records.”",
    result:
      "A coordinated onboarding process linking employee state, responsibilities and assigned tasks.",
    boundary:
      "Lifecycle writes and access changes require configured permissions. Your team approves the hire and each consequential access decision.",
    steps: [
      { title: "Start from the approved hire", uses: ["candidate.manage"] },
      { title: "Plan the lifecycle", uses: ["employee.lifecycle"] },
      {
        title: "Assign responsibilities",
        uses: ["governance.manage", "project.manage"],
      },
      { title: "Review & authorize", uses: ["action.approve_execute"] },
    ],
  },
  {
    id: "procedure",
    label: "Build an operating procedure",
    prompt:
      "“Turn how this work actually happens into a procedure the team can review and use.”",
    result:
      "A documented process, reviewed responsibilities and a published operating procedure.",
    boundary:
      "Process owners review the procedure and approve publication. The workflow is adapted to your existing knowledge and review practices.",
    steps: [
      { title: "Gather working evidence", uses: ["engineering.observe"] },
      { title: "Map the process", uses: ["process.govern"] },
      { title: "Draft the procedure", uses: ["sop.manage"] },
      {
        title: "Review & publish",
        uses: ["authority.resolve", "action.approve_execute"],
      },
    ],
  },
];
