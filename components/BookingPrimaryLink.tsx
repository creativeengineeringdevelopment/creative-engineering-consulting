import Link from "next/link";
import {
  PUBLIC_BOOKING_URL,
  ROUTES,
  buttonPrimaryClass,
  systemAuditMailto,
} from "@/lib/constants";

type BookingPrimaryLinkProps = {
  children: React.ReactNode;
  className?: string;
};

/**
 * Prefer scheduler URL, then mailto with a prefilled audit template, then /contact.
 */
export function BookingPrimaryLink({
  children,
  className = buttonPrimaryClass,
}: BookingPrimaryLinkProps) {
  if (PUBLIC_BOOKING_URL) {
    return (
      <a
        href={PUBLIC_BOOKING_URL}
        className={className}
        target="_blank"
        rel="noopener noreferrer"
      >
        {children}
      </a>
    );
  }

  const mailto = systemAuditMailto();
  if (mailto) {
    return (
      <a href={mailto} className={className}>
        {children}
      </a>
    );
  }

  return (
    <Link href={ROUTES.contact} className={className}>
      {children}
    </Link>
  );
}
