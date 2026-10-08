import Link from "next/link";
import { CONTACT_EMAIL } from "@/lib/constants";
export function SiteFooter() {
  return (
    <footer className="site-footer">
      <div className="container footer-top">
        <div>
          <Link href="/" className="footer-brand">
            Creative Engineering<span className="accent-dot">.</span>
          </Link>
          <p>
            Built from experience.
            <br />
            Designed for your operation.
          </p>
        </div>
        <div className="footer-links">
          <Link href="/work">Selected work</Link>
          <Link href="/how-it-works">The offering</Link>
          <Link href="/capabilities">Capabilities</Link>
          <Link href="/about">About Jared</Link>
          <Link href="/audit">System assessment</Link>
        </div>
        <div>
          <p className="eyebrow">START A CONVERSATION</p>
          <a className="footer-email" href={`mailto:${CONTACT_EMAIL}`}>
            {CONTACT_EMAIL} ↗
          </a>
          <p>
            San Diego, California
            <br />
            Working with teams across the US.
          </p>
        </div>
      </div>
      <div className="container footer-bottom">
        <span>
          © {new Date().getFullYear()} Creative Engineering Consulting
        </span>
        <Link href="/privacy">Privacy & site information</Link>
        <span>Independent practice. Human accountability.</span>
      </div>
    </footer>
  );
}
