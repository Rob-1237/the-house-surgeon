import Link from "next/link";
import { primaryNav, site } from "@/content/site";
import { Tbd } from "./Tbd";
import { Wordmark } from "./Wordmark";
import styles from "./SiteFooter.module.css";

export function SiteFooter() {
  return (
    <footer className={styles.footer}>
      <div className={`container ${styles.grid}`}>
        <div className={styles.brand}>
          <Wordmark />
          <p className="muted">{site.tagline}</p>
          <p className={styles.legal}>
            Licensed, bonded &amp; insured · IN License # <Tbd>{site.license}</Tbd>
          </p>
        </div>

        <nav aria-label="Footer">
          <h2 className={styles.heading}>Explore</h2>
          <ul className={styles.list}>
            {primaryNav.map((item) => (
              <li key={item.href}>
                <Link href={item.href}>{item.label}</Link>
              </li>
            ))}
          </ul>
        </nav>

        <div>
          <h2 className={styles.heading}>Contact</h2>
          <ul className={styles.list}>
            <li>
              <a href={site.phone.href}>{site.phone.display}</a>
            </li>
            <li>
              <a href={`mailto:${site.email}`}>{site.email}</a>
            </li>
            <li className="muted">
              Hours: <Tbd>{site.hours}</Tbd>
            </li>
            <li>
              {site.links.payInvoice ? (
                <a href={site.links.payInvoice}>Pay an invoice</a>
              ) : (
                <span className="muted">
                  Pay an invoice <Tbd>Jobber link</Tbd>
                </span>
              )}
            </li>
          </ul>
        </div>
      </div>

      <div className={`container ${styles.base}`}>
        <p>© {new Date().getFullYear()} {site.name}</p>
        <p>Site by Garfish Digital</p>
      </div>
    </footer>
  );
}
