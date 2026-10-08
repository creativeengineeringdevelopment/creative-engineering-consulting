import Link from "next/link";
import { Arrow, Label } from "@/components/Shared";

const journey = [
  {
    year: "2021",
    chapter: "STARSHIP",
    title: "Launch. Find real adoption.",
    built:
      "Launched a decentralized crypto trading app on iOS and Android. The ecosystem grew to more than 15,000 token holders.",
    thought: "People are using this. Okay… this is real. And a little scary.",
    detail:
      "StarShip made the responsibility tangible. Getting a product into people’s hands raised bigger questions about how capital moves, who holds it and what rules apply.",
  },
  {
    year: "2022",
    chapter: "DCAP",
    title: "Follow the money into private markets.",
    built:
      "Incorporated Decentralized Capital Allocation Protocol Inc. and began building investment-management software for private securities.",
    thought: "Wait. This is a lot more complicated than moving tokens.",
    detail:
      "By the end of Q1, DCAP was launched. The next challenge was understanding the legal and institutional processes the software needed to support.",
  },
  {
    year: "2023",
    chapter: "BETHANY LAFLAM · PREMIER LAW GROUP",
    title: "Learn the rules. Build them into the workflow.",
    built:
      "Began mentorship under Bethany LaFlam and built v.docs, an AI-powered legal document generator.",
    thought: "Now I’ve built this. How do I bring it on-chain?",
    detail:
      "Working with Bethany connected securities knowledge to document generation and operating workflows. It also established the importance of keeping legal judgment with qualified counsel.",
  },
  {
    year: "2024",
    chapter: "RETOKENS",
    title: "Connect the market infrastructure.",
    built:
      "Architected and led software development for REtokens’ alternative trading platform, including Brassica / BitGo integration work.",
    thought:
      "The infrastructure is one thing. What about people, marketing… sales?",
    detail:
      "This chapter brought practical exposure to US tokenized securities, broker-dealer regulatory development, transfer-agent services, capital formation, custody and ATS preparation. Building the platform led to the next question: how does a business actually operate around it?",
  },
  {
    year: "2025",
    chapter: "TAREK EL MOUSSA’S BUSINESSES",
    title: "Make the whole operation work together.",
    built:
      "As CTO, brought Salesforce, Aircall, SendMessage, Zapier and real-estate data into proprietary operating software where AI could call, text and email.",
    thought: "It works for the team. Can it serve thousands of users?",
    detail:
      "The work spanned Tarek Buys Houses, TEM Capital and Nestla / NestlaHome. At Nestla, I led the architecture buildout with Anthony Borquez and Grab Labs. The handoff in 2025 set up the next step: bringing the operating layer to a broader user base.",
  },
  {
    year: "2026",
    chapter: "DIVERSYFUND",
    title: "Bring it together at investor scale.",
    built:
      "Built an AI-enabled operating platform for a business serving 30,000 active investors, connecting investor workflows, CRM and communications.",
    thought: "Now bring those lessons to the next business.",
    detail:
      "The engagement began in November 2025. As CTO, I brought the accumulated software and operating experience into a centralized AI infrastructure. This chapter is about applying those lessons across investor-facing and internal workflows—not just demonstrating an isolated tool.",
  },
];

export function JourneyTimeline({ detailed = false }: { detailed?: boolean }) {
  return (
    <section
      className="container section learning-journey"
      id="journey"
      aria-labelledby="journey-title"
    >
      <div className="section-heading">
        <div>
          <Label>2021—2026 / THE LEARNING LOOP</Label>
          <h2 id="journey-title">
            One build led to
            <br />
            <em>the next question.</em>
          </h2>
        </div>
        <p>
          I didn’t start with a six-year plan. Each thing I built showed me what
          I needed to understand next.
        </p>
      </div>
      <ol className="journey-list">
        {journey.map((step) => (
          <li className="journey-step" key={step.year}>
            <div className="journey-date">
              <span>{step.year}</span>
              <span className="journey-node" aria-hidden="true" />
            </div>
            <div className="journey-build">
              <p className="eyebrow">{step.chapter}</p>
              <h3>{step.title}</h3>
              <p>{step.built}</p>
              {detailed && <p className="journey-detail">{step.detail}</p>}
            </div>
            <div className="journey-question">
              <span className="journey-question-label">
                {step.year === "2026" ? "WHAT COMES NEXT" : "THE NEXT QUESTION"}
              </span>
              <p>
                <span aria-hidden="true">↳ </span>
                {step.thought}
              </p>
            </div>
          </li>
        ))}
      </ol>
      <div className="journey-outcome">
        <div>
          <Label>THE PRACTICE TODAY</Label>
          <h3>
            All of that experience.
            <br />
            <em>Applied to your operation.</em>
          </h3>
        </div>
        <div>
          <p>
            Consulting that turns what we learn about your business into working
            software, connected workflows and a system your team can run.
          </p>
          <Link href={detailed ? "/work" : "/about"} className="text-link">
            {detailed ? "Explore the work" : "The full story"} <Arrow />
          </Link>
        </div>
      </div>
      <p className="caption">
        Milestones and scale reflect Jared’s account. Token holders and
        investors describe different populations, not verified application
        usage. Platform development and application preparation do not imply
        regulatory approval.
      </p>
    </section>
  );
}
