import Link from "next/link";
import { cases } from "@/lib/work";
import { Arrow } from "@/components/Shared";
export function WorkCards() {
  return (
    <div className="work-grid">
      {cases.map((c) => (
        <Link
          href={`/work/${c.slug}`}
          className={`work-card ${c.color}`}
          key={c.slug}
        >
          <div className="case-art" aria-hidden="true">
            <span className="art-label">FIELD NOTE / {c.number}</span>
            <div className="art-flow">
              {c.flow.slice(0, 3).map((s, i) => (
                <div key={s}>
                  <span>0{i + 1}</span>
                  {s}
                </div>
              ))}
            </div>
            <span className="art-corner">↗</span>
          </div>
          <div className="work-card-body">
            <p className="eyebrow">{c.category}</p>
            <h3>{c.title}</h3>
            <p>{c.summary}</p>
            <div className="case-link">
              <span>{c.client}</span>
              <Arrow />
            </div>
          </div>
        </Link>
      ))}
    </div>
  );
}
