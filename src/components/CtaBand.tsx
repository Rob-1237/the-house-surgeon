import Link from "next/link";
import type { ReactNode } from "react";
import { site } from "@/content/site";
import { Reveal } from "./Reveal";
import styles from "./CtaBand.module.css";

/** Closing CTA before the footer. Restates the page goal: call, or book. */
export function CtaBand({
  title = "Got a plumbing problem? Let's take a look.",
  lead = "Call us, or book a visit online.",
  secondary = { href: "/contact/#book", label: "Book a visit" },
  media,
}: {
  title?: string;
  lead?: string;
  secondary?: { href: string; label: string } | null;
  /** Optional mascot; it stands on the band's bottom edge and breaks out of the top. */
  media?: ReactNode;
}) {
  return (
    <section className={`section section--dark ${media ? styles.withMedia : ""}`} aria-labelledby="cta-heading">
      <Reveal className={`container ${styles.band}`}>
        <div className={styles.copy}>
          <h2 id="cta-heading">{title}</h2>
          <p className="muted">{lead}</p>
        </div>
        <div className={styles.actions}>
          <a href={site.phone.href} className="btn btn--primary">
            Call {site.phone.display}
          </a>
          {secondary && (
            <Link href={secondary.href} className="btn btn--secondary">
              {secondary.label}
            </Link>
          )}
        </div>
        {media && <div className={styles.media}>{media}</div>}
      </Reveal>
    </section>
  );
}
