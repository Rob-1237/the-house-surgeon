import type { Faq } from "@/content/faqs";
import styles from "./FaqList.module.css";

export function FaqList({ faqs }: { faqs: Faq[] }) {
  return (
    <div className={styles.list}>
      {faqs.map((f) => (
        <details key={f.q} className={styles.item}>
          <summary className={styles.q}>{f.q}</summary>
          <p className={`muted ${styles.a}`}>{f.a}</p>
        </details>
      ))}
    </div>
  );
}
