import { site } from "@/content/site";
import { Reveal } from "./Reveal";
import { Tbd } from "./Tbd";
import styles from "./Reviews.module.css";

/**
 * Curated Google reviews go here (real quotes only, with permission).
 * Until Floyd's picks arrive this renders empty slots, never invented testimonials.
 */
export function Reviews({ count = 3 }: { count?: number }) {
  return (
    <div className={styles.wrap}>
      <ul className={styles.grid}>
        {Array.from({ length: count }, (_, i) => (
          <Reveal as="li" key={i} delay={i * 80} className={`on-dark ${styles.card}`}>
            <p className={styles.stars} aria-hidden="true">★★★★★</p>
            <blockquote>
              <Tbd>Real Google review #{i + 1}: quote, first name, neighborhood</Tbd>
            </blockquote>
          </Reveal>
        ))}
      </ul>
      <div className={styles.links}>
        <a href={site.links.googleProfile} className="btn btn--secondary" rel="noopener" target="_blank">
          Read our reviews on Google
        </a>
        {site.links.googleReview ? (
          <a href={site.links.googleReview} rel="noopener" target="_blank">
            Leave us a review
          </a>
        ) : (
          <span className="muted">
            Leave us a review <Tbd>GBP short link</Tbd>
          </span>
        )}
      </div>
    </div>
  );
}
