import Image from "next/image";
import Link from "next/link";
import type { ReactNode } from "react";
import type { Photo } from "@/content/photos";
import { site } from "@/content/site";
import { Placeholder } from "./Placeholder";
import { Tbd } from "./Tbd";
import styles from "./PageHero.module.css";

/**
 * Interior-page hero: editorial split header (headline left; lead + actions right) over a wide
 * rounded photo band with a credentials card breaking its lower edge. Home uses <Hero> instead.
 */
export function PageHero({
  eyebrow,
  title,
  lead,
  actions,
  photo,
  photoLabel,
  crumb,
}: {
  eyebrow?: string;
  title: ReactNode;
  lead?: ReactNode;
  actions?: ReactNode;
  /** Wide band image. Omit both photo and photoLabel for a text-only hero (404, thanks). */
  photo?: Photo;
  /** Placeholder label when the page should have a photo but doesn't yet. */
  photoLabel?: string;
  crumb?: { href: string; label: string };
}) {
  const hasBand = Boolean(photo || photoLabel);
  return (
    <section className={styles.hero}>
      <div className="container">
        <div className={styles.head}>
          <div className={styles.titleCol}>
            {crumb && (
              <nav aria-label="Breadcrumb" className={`enter ${styles.crumb}`}>
                <Link href={crumb.href}>{crumb.label}</Link>
                <span aria-hidden="true">/</span>
              </nav>
            )}
            {eyebrow && !crumb && <p className={`enter ${styles.eyebrow}`}>{eyebrow}</p>}
            <h1 className="enter enter-1">{title}</h1>
          </div>
          {(lead || actions) && (
            <div className={`enter enter-2 ${styles.side}`}>
              {lead && <p className={`muted ${styles.lead}`}>{lead}</p>}
              {actions && <div className={styles.actions}>{actions}</div>}
            </div>
          )}
        </div>

        {hasBand && (
          <div className={`enter enter-3 ${styles.band}`}>
            {photo ? (
              <Image
                src={photo.src}
                alt={photo.alt}
                width={photo.width}
                height={photo.height}
                sizes="(max-width: 75rem) 100vw, 1200px"
                preload
                className={styles.photo}
                style={{ objectPosition: photo.position }}
              />
            ) : (
              <Placeholder label={photoLabel!} ratio="auto" className={styles.photo} />
            )}
            <div className={styles.chip}>
              <span className={styles.chipDot} aria-hidden="true" />
              <div>
                <strong>Licensed, bonded &amp; insured</strong>
                <span>
                  Indiana license # <Tbd>{site.license}</Tbd>
                </span>
              </div>
            </div>
          </div>
        )}
      </div>
    </section>
  );
}
