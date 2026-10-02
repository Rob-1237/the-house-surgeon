import { site } from "@/content/site";
import { Tbd } from "./Tbd";
import styles from "./TrustStrip.module.css";

/** Short proof row under the hero. Fill from Floyd: license #, bonding, rating, recognitions. */
export function TrustStrip() {
  return (
    <section aria-label="Credentials" className={styles.strip}>
      <ul className={`container ${styles.list}`}>
        <li>
          <strong>Licensed in Indiana</strong>
          <span>
            License # <Tbd>{site.license}</Tbd>
          </span>
        </li>
        <li>
          <strong>Bonded &amp; insured</strong>
          <span>
            <Tbd>carrier</Tbd>
          </span>
        </li>
        <li>
          <strong>Google reviews</strong>
          <span>
            <Tbd>★ rating · count</Tbd>
          </span>
        </li>
        <li>
          <strong>Local recognition</strong>
          <span>
            <Tbd>award names</Tbd>
          </span>
        </li>
      </ul>
    </section>
  );
}
