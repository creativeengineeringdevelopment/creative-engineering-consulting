import Link from "next/link";
export function Arrow() {
  return <span aria-hidden="true">↗</span>;
}
export function Label({ children }: { children: React.ReactNode }) {
  return (
    <p className="eyebrow">
      <span className="small-square" aria-hidden="true" />
      {children}
    </p>
  );
}
export function CTA() {
  return (
    <section className="cta-band">
      <div className="container cta-inner">
        <div>
          <Label>YOUR NEXT CHAPTER</Label>
          <h2>
            Start with the work
            <br />
            that should work better.
          </h2>
          <p>
            Bring one workflow. We’ll talk through the bottleneck,
            <br className="desktop-only" /> the opportunity, and whether we’re
            the right fit.
          </p>
        </div>
        <Link className="button button-light" href="/contact">
          Discuss your workflow <Arrow />
        </Link>
      </div>
    </section>
  );
}
export function PageHero({
  label,
  title,
  description,
}: {
  label: string;
  title: string;
  description: string;
}) {
  return (
    <section className="page-hero container">
      <Label>{label}</Label>
      <h1>{title}</h1>
      <p className="lede">{description}</p>
    </section>
  );
}
