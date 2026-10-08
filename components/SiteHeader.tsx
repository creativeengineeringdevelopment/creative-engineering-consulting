import Link from "next/link";
export function SiteHeader() {
  return (
    <header className="site-header">
      <div className="container header-inner">
        <Link
          href="/"
          className="brand"
          aria-label="Creative Engineering Consulting home"
        >
          <span className="brand-mark" aria-hidden="true">
            ce<span>↗</span>
          </span>
          <span>
            Creative Engineering<span className="brand-sub">CONSULTING</span>
          </span>
        </Link>
        <nav aria-label="Main navigation">
          <Link href="/work">Selected work</Link>
          <Link href="/how-it-works">The offering</Link>
          <Link href="/about">The story</Link>
          <Link href="/contact" className="nav-cta">
            Let’s talk <span aria-hidden="true">↗</span>
          </Link>
        </nav>
      </div>
    </header>
  );
}
