import Link from "next/link";
import type { Service } from "@/content/services";
import { Reveal } from "./Reveal";
import styles from "./ServiceGrid.module.css";

export function ServiceGrid({ services }: { services: Service[] }) {
  return (
    <ul className={styles.grid}>
      {services.map((s, i) => (
        <Reveal as="li" key={s.slug} delay={(i % 3) * 80} className={s.featured ? styles.featured : undefined}>
          <Link href={`/services/${s.slug}/`} className={styles.card}>
            {/* TODO: custom icon per service (§4.5: one set, matching the logo stroke) */}
            <span className={styles.icon} aria-hidden="true" />
            <h3 className={styles.name}>{s.name}</h3>
            <p className="muted">{s.summary}</p>
            <span className={styles.more}>
              Learn more <span aria-hidden="true">→</span>
            </span>
          </Link>
        </Reveal>
      ))}
    </ul>
  );
}
