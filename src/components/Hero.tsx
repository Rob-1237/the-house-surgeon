import type { ReactNode } from "react";
import styles from "./Hero.module.css";

/**
 * Page hero. `size="home"` is the full statement; `size="page"` is the compact interior version.
 * Entry is CSS-only (`.enter`) so the headline never waits on JS.
 */
export function Hero({
  eyebrow,
  title,
  lead,
  actions,
  media,
  note,
  size = "page",
}: {
  eyebrow?: string;
  title: ReactNode;
  lead?: ReactNode;
  actions?: ReactNode;
  media?: ReactNode;
  note?: ReactNode;
  size?: "home" | "page";
}) {
  return (
    <section className={`${styles.hero} ${styles[size]}`}>
      <div className={`container ${styles.grid} ${media ? styles.withMedia : ""}`}>
        <div className={styles.copy}>
          {eyebrow && <p className="eyebrow enter">{eyebrow}</p>}
          <h1 className="enter enter-1">{title}</h1>
          {lead && <p className={`muted enter enter-2 ${styles.lead}`}>{lead}</p>}
          {actions && <div className={`enter enter-3 ${styles.actions}`}>{actions}</div>}
          {note && <div className={`enter enter-3 ${styles.note}`}>{note}</div>}
        </div>
        {media && <div className={`enter enter-2 ${styles.media}`}>{media}</div>}
      </div>
    </section>
  );
}
