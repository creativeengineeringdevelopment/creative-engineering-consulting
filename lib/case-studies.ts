export type CaseStudy = {
  slug: string;
  title: string;
  client: string;
  label: string;
  summary: string;
  challenge: string;
  solution: string;
  outcome: string;
  surfaces: string[];
  metrics: { value: string; label: string }[];
  artifacts: string[];
  readiness?: string;
  use?: string;
};

export const flagshipCaseStudies: CaseStudy[] = [
  {
    slug: "diversyfund-operating-system",
    title: "Operating system rebuild during a CTO transition",
    client: "DiversyFund",
    label: "Flagship",
    summary:
      "A complex real-estate investment business needed the hidden operating layer made visible: CRM, investor portal, outbound, reporting, owner routines, and transition proof.",
    challenge:
      "The company depended on scattered systems and operator knowledge that made transition risk hard to see, measure, and transfer.",
    solution:
      "Mapped source-of-truth boundaries, separated proof-led workflows, created owner routines, and reframed the CTO role into transferable operating rails.",
    outcome:
      "Converted scattered operational knowledge into source-of-truth maps, proof-led workflows, owner transfer paths, and executive visibility.",
    surfaces: ["CRM", "Investor portal", "Send plane", "Executive reporting", "Runbooks"],
    metrics: [
      { value: "5", label: "operating surfaces" },
      { value: "407", label: "relevant 2026 build commits" },
      { value: "90 days", label: "transfer lens" },
    ],
    artifacts: ["Operating map", "Owner dependency register", "Proof-led workflow dashboard", "Transition runbooks"],
  },
  {
    slug: "df-crm-revenue-command-center",
    title: "Revenue operations command center",
    client: "DiversyFund CRM",
    label: "Revenue ops",
    summary:
      "Lead, BDR, campaign, admin, and reporting workflows needed a single operating view instead of disconnected task execution.",
    challenge:
      "Revenue work was split across lists, campaigns, manual follow-up, and reporting that could not consistently explain what happened next.",
    solution:
      "Created a command-center pattern with owner queues, campaign state, execution reporting, and explicit workflow lanes.",
    outcome:
      "Defined owner queues, campaign visibility, state discipline, reporting surfaces, and operational controls for revenue motion.",
    surfaces: ["Lead flow", "BDR workflow", "Campaign reporting", "Admin queues"],
    metrics: [
      { value: "236", label: "2026 CRM commits" },
      { value: "4", label: "revenue workflow lanes" },
      { value: "1", label: "command-center thesis" },
    ],
    artifacts: ["Lead flow map", "Campaign control view", "Owner queue", "Revenue reporting panel"],
  },
  {
    slug: "sendedge-send-plane",
    title: "Dedicated outbound send and proof plane",
    client: "Sendedge",
    label: "Infrastructure",
    summary:
      "Outbound execution needed to be separated from CRM list views and mailbox assumptions into a governed send plane with reporting truth.",
    challenge:
      "Campaign truth was at risk of being mixed across CRM columns, mailbox vendors, live sends, and reporting definitions.",
    solution:
      "Designed a standalone send-plane pattern where CRM enqueues work and the send plane owns transport, proof, mailbox boundaries, and funnel reporting.",
    outcome:
      "Established a standalone send-plane pattern: CRM enqueue only, delivery proof, mailbox source-of-truth boundaries, and reporting discipline.",
    surfaces: ["Outbound queue", "Mailbox registry", "Delivery proof", "Funnel reporting"],
    metrics: [
      { value: "71", label: "send-plane commits" },
      { value: "4", label: "proof boundaries" },
      { value: "0", label: "live data mixed into copy" },
    ],
    artifacts: ["Mailbox registry", "Send queue", "Delivery proof ledger", "Funnel definitions"],
  },
  {
    slug: "unlockd-runtime",
    title: "Agentic operating runtime and micro-app layer",
    client: "Unlockd",
    label: "Platform IP",
    summary:
      "The repeatable product layer behind the studio: local-first runtime, specialist agents, micro-apps, device/app governance, and operator consoles.",
    challenge:
      "The same operating patterns kept appearing across companies and workflows, but a generic SaaS product would flatten the nuance too early.",
    solution:
      "Packaged the method into runtime primitives: local-first execution, app registration, agent runbooks, and governed micro-app surfaces.",
    outcome:
      "Packaged the operating-system method into reusable platform primitives without forcing every buyer into generic SaaS.",
    surfaces: ["Edge runtime", "Factory control plane", "Specialist agents", "Micro-apps"],
    metrics: [
      { value: "137", label: "PersonalAI commits" },
      { value: "73", label: "UnlockdApps commits" },
      { value: "4", label: "platform layers" },
    ],
    artifacts: ["Runtime console", "Agent policy", "Micro-app registry", "Operator dashboard"],
  },
];

export const supportCaseStudies: CaseStudy[] = [
  {
    slug: "investor-portal-capital-ops",
    title: "Investor portal / capital operations modernization",
    client: "Capital operations",
    label: "Support 01",
    summary:
      "Investor-facing account, onboarding, capital workflow, and reporting surfaces that show the same operating-system method outside CRM.",
    challenge:
      "Investor operations needed cleaner state, clearer owner boundaries, and safer public-facing flows.",
    solution:
      "Treat portal behavior as part of the operating layer: account state, workflow proof, reporting surfaces, and exception paths.",
    outcome:
      "A stronger capital-operations story that can become public after screenshot approval and data redaction.",
    surfaces: ["Investor account state", "Onboarding", "Capital workflow", "Reporting"],
    metrics: [
      { value: "66", label: "portal-related commits" },
      { value: "4", label: "capital ops surfaces" },
      { value: "1", label: "redaction gate" },
    ],
    artifacts: ["Portal flow screenshots", "State map", "Exception path", "Reporting view"],
    readiness: "Public-ready after screenshot approval",
    use: "Use as a public proof card once screens are redacted.",
  },
  {
    slug: "relationship-edge-investor-intelligence",
    title: "Relationship Edge investor intelligence",
    client: "Relationship Edge",
    label: "Support 02",
    summary:
      "A focused relationship workflow layer for high-value investor and stakeholder management instead of forcing every interaction through admin screens.",
    challenge:
      "High-value relationships get buried when every interaction is treated as a generic CRM note or admin task.",
    solution:
      "Create a specialist relationship surface with context, ownership, follow-up state, and investor intelligence close to the work.",
    outcome:
      "A supporting proof story for capital markets and investor ops buyers who need relationship-aware execution.",
    surfaces: ["Relationship context", "Follow-up state", "Investor intelligence", "Owner workflow"],
    metrics: [
      { value: "34", label: "relation-edge commits" },
      { value: "4", label: "relationship surfaces" },
      { value: "1", label: "specialist app" },
    ],
    artifacts: ["Relationship dashboard", "Investor context card", "Follow-up queue", "Owner map"],
    readiness: "Public-ready after naming cleanup",
    use: "Use as supporting proof for capital markets and investor ops buyers.",
  },
  {
    slug: "agent-factory-developer-os",
    title: "Agent Factory developer operating system",
    client: "Creative Engineering delivery system",
    label: "Support 03",
    summary:
      "The AI-assisted engineering factory behind the work: transcripts, worktrees, validation gates, repo memory, and repeatable delivery loops.",
    challenge:
      "AI coding without operating discipline creates scattered work, retry storms, and unreviewable changes.",
    solution:
      "Use transcripts, worktree jobs, repo memory, validation gates, and handoff patterns to turn AI-assisted delivery into a controlled system.",
    outcome:
      "A sales-call asset that explains why Creative Engineering can ship faster than a normal dev shop without becoming chaotic.",
    surfaces: ["Cursor transcripts", "VS Code sessions", "Worktree jobs", "Validation gates"],
    metrics: [
      { value: "22,667", label: "agent transcript files" },
      { value: "46,689", label: "user messages analyzed" },
      { value: "950", label: "unique 2026 commits" },
    ],
    artifacts: ["Factory workflow", "Transcript index", "Validation checklist", "Handoff pattern"],
    readiness: "Strong sales-call asset",
    use: "Use to explain why Creative Engineering can ship faster than a normal dev shop.",
  },
  {
    slug: "micro-app-operating-layer",
    title: "Micro-app operating layer",
    client: "Unlockd apps",
    label: "Support 04",
    summary:
      "PlasticityEdge, Basis Built, and related focused apps show the pattern: small operator tools on a shared platform instead of monolithic software.",
    challenge:
      "Operators need focused tools, but each new internal app should not become a bespoke product fork.",
    solution:
      "Build micro-apps on a shared operating layer with consistent registration, brand boundaries, and platform leverage.",
    outcome:
      "A public Unlockd proof story that shows how the platform creates repeatable app surfaces.",
    surfaces: ["PlasticityEdge", "Basis Built", "Local app registry", "Shared runtime"],
    metrics: [
      { value: "2+", label: "micro-app patterns" },
      { value: "1", label: "shared runtime" },
      { value: "0", label: "product forks needed" },
    ],
    artifacts: ["App cards", "Registration flow", "Brand-safe UI", "Shared platform primitives"],
    readiness: "Public-ready as Unlockd proof",
    use: "Use on Unlockd pages to show the platform creates repeatable app surfaces.",
  },
  {
    slug: "hr-edge-governance-ops",
    title: "HR Edge governance operations",
    client: "Internal governance",
    label: "Support 05",
    summary:
      "Internal people, policy, approval, and governance workflows converted from informal process into trackable owner accountability.",
    challenge:
      "Governance work often lives in messages and memory, which makes approvals, ownership, and policy exceptions hard to audit.",
    solution:
      "Frame HR and governance as an operating workflow with owner state, approval paths, policy artifacts, and visibility.",
    outcome:
      "A reserve proof story for diligence or internal-ops buyers once artifacts are strong enough.",
    surfaces: ["People workflow", "Policy", "Approvals", "Governance reporting"],
    metrics: [
      { value: "18", label: "HR Edge commits" },
      { value: "4", label: "governance surfaces" },
      { value: "1", label: "appendix story" },
    ],
    artifacts: ["Approval queue", "Policy map", "Owner state", "Governance dashboard"],
    readiness: "Reserve / appendix",
    use: "Keep for diligence unless artifacts are strong enough for public use.",
  },
  {
    slug: "devops-identity-deployment-governance",
    title: "DevOps identity and deployment governance",
    client: "Deployment control",
    label: "Support 06",
    summary:
      "Vercel, Trigger, GitHub, AWS, WorkOS, environment, and deploy-identity boundaries mapped so production control is explicit.",
    challenge:
      "Modern operator stacks spread production control across identities, vendors, environments, and deployment surfaces.",
    solution:
      "Map deploy identity, environment ownership, org boundaries, production gates, and vendor-specific control rules.",
    outcome:
      "A diligence appendix that proves governance discipline behind the more visible product and operating-system work.",
    surfaces: ["Vercel", "Trigger", "GitHub", "AWS", "WorkOS"],
    metrics: [
      { value: "5", label: "identity planes" },
      { value: "1", label: "deploy doctrine" },
      { value: "0", label: "production ambiguity" },
    ],
    artifacts: ["Identity map", "Deploy gates", "Environment register", "Access doctrine"],
    readiness: "Diligence appendix",
    use: "Use in technical diligence to prove governance discipline, not as homepage copy.",
  },
];

export const proofCardCaseStudies = supportCaseStudies;
export const allCaseStudies = [...flagshipCaseStudies, ...supportCaseStudies] as const;

export function getCaseStudy(slug: string): CaseStudy | undefined {
  return allCaseStudies.find((study) => study.slug === slug);
}
