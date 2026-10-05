import Image from "next/image";
import type { ReactNode } from "react";
import type { Photo } from "@/content/photos";
import { Wave } from "./Wave";
import styles from "./Hero.module.css";

/**
 * Gradient hero with a curved bottom edge. `size="home"` is the full statement; `size="page"`
 * the compact interior version. Entry is CSS-only (`.enter`) so the headline never waits on JS.
 * `backdrop` is a large decorative element (home: the Pip circle) that bleeds off the right edge
 * and tucks under the header above and the trust strip below; `media` sits in a grid column.
 * `photo` makes the hero full-bleed: the photo, grayscale under a gradient overlay, fills the band
 * edge to edge and is cut by the same wave as the home hero (Services).
 */
export function Hero({
  eyebrow,
  title,
  lead,
  actions,
  media,
  backdrop,
  photo,
  size = "page",
  waveFill,
}: {
  eyebrow?: string;
  title: ReactNode;
  lead?: ReactNode;
  actions?: ReactNode;
  media?: ReactNode;
  backdrop?: ReactNode;
  photo?: Photo;
  size?: "home" | "page";
  /** Background of the section that follows, so the curve blends into it. */
  waveFill?: string;
}) {
  return (
    <section
      className={`on-dark ${styles.hero} ${styles[size]} ${backdrop ? styles.withBackdrop : ""} ${photo ? styles.withPhoto : ""}`}
    >
      {photo && (
        <div className={styles.photo}>
          <Image
            src={photo.src}
            alt=""
            width={photo.width}
            height={photo.height}
            sizes="100vw"
            preload
            style={{ objectPosition: photo.position }}
          />
        </div>
      )}
      {backdrop && <div className={`enter enter-2 ${styles.backdrop}`}>{backdrop}</div>}
      <div className={`container ${styles.grid} ${media ? styles.withMedia : ""}`}>
        <div className={styles.copy}>
          {eyebrow && <p className="eyebrow enter">{eyebrow}</p>}
          <h1 className="enter enter-1">{title}</h1>
          {lead && <p className={`muted enter enter-2 ${styles.lead}`}>{lead}</p>}
          {actions && <div className={`enter enter-3 ${styles.actions}`}>{actions}</div>}
        </div>
        {media && <div className={`enter enter-2 ${styles.media}`}>{media}</div>}
      </div>
      <Wave fill={waveFill} />
    </section>
  );
}
