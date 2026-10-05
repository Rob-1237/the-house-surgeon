import type { ReactNode } from "react";
import { Reveal } from "./Reveal";
import styles from "./Section.module.css";

/** default = bg-app canvas, alt = white surface, dark = hero gradient */
type Tone = "default" | "alt" | "dark";

/** A page section: optional eyebrow + h2 + intro, then content. One h2 per section. */
export function Section({
  id,
  tone = "default",
  eyebrow,
  title,
  intro,
  align = "start",
  children,
}: {
  id?: string;
  tone?: Tone;
  eyebrow?: string;
  title?: ReactNode;
  intro?: ReactNode;
  align?: "start" | "center";
  children?: ReactNode;
}) {
  const toneClass = tone === "default" ? "" : `section--${tone}`;
  const headingId = id ? `${id}-heading` : undefined;
  return (
    <section id={id} className={`section ${toneClass}`} aria-labelledby={title ? headingId : undefined}>
      <div className="container">
        {(eyebrow || title || intro) && (
          <Reveal className={`${styles.head} ${align === "center" ? styles.center : ""}`}>
            {eyebrow && <p className="eyebrow">{eyebrow}</p>}
            {title && <h2 id={headingId}>{title}</h2>}
            {intro && <p className={`muted ${styles.intro}`}>{intro}</p>}
          </Reveal>
        )}
        {children}
      </div>
    </section>
  );
}
