import Link from "next/link";
import { site } from "@/content/site";
import styles from "./MobileActionBar.module.css";

/** Persistent Call / Book bar on phones. Hidden ≥ 48em, where the header CTA is visible. */
export function MobileActionBar() {
  return (
    <div className={styles.bar} role="region" aria-label="Quick contact">
      <a href={site.phone.href} className={`btn btn--primary ${styles.action}`}>
        Call now
      </a>
      <Link href="/contact/#book" className={`btn btn--secondary ${styles.action}`}>
        Book a visit
      </Link>
    </div>
  );
}
