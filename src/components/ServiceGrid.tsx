import Link from "next/link";
import type { Service } from "@/content/services";
import { IconBadge, type IconName } from "./Icon";
import { Reveal } from "./Reveal";
import styles from "./ServiceGrid.module.css";

/**
 * Service cards: dark (primary) tiles that each link to the Services page. On hover the icon, name
 * and summary scale up together as one unit (the image-zoom effect, without an image).
 */
export function ServiceGrid({ services }: { services: Service[] }) {
  return (
    <ul className={styles.grid}>
      {services.map((s, i) => (
        <Reveal as="li" key={s.slug} delay={(i % 3) * 80}>
          <Link href="/services/" className={styles.card}>
            <span className={styles.content}>
              <IconBadge name={s.slug as IconName} tone="light" />
              <h3 className={styles.name}>{s.name}</h3>
              <p className={styles.summary}>{s.summary}</p>
            </span>
          </Link>
        </Reveal>
      ))}
    </ul>
  );
}
