import Link from "next/link";
export default function NotFound() {
  return (
    <main id="main-content" className="container page-hero">
      <p className="eyebrow">404 / PAGE NOT FOUND</p>
      <h1>
        Let’s get you
        <br />
        back on track.
      </h1>
      <p className="lede">
        That page isn’t here. Explore the work or tell us what you’re looking
        for.
      </p>
      <div className="button-row">
        <Link href="/" className="button button-primary">
          Back to home ↗
        </Link>
        <Link href="/contact" className="text-link">
          Get in touch →
        </Link>
      </div>
    </main>
  );
}
