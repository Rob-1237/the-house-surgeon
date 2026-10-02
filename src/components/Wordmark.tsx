import Link from "next/link";
import styles from "./Wordmark.module.css";

/** Text wordmark until the primary mark (faceless wrench + stethoscope) is drawn. */
export function Wordmark() {
  return (
    <Link href="/" className={styles.wordmark} aria-label="The House Surgeon, home">
      <span className={styles.the}>The</span>
      <span className={styles.name}>House Surgeon</span>
    </Link>
  );
}
