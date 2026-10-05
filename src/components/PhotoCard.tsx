import Image from "next/image";
import type { ReactNode } from "react";
import type { Photo } from "@/content/photos";
import { IconBadge, type IconName } from "./Icon";
import { Wave } from "./Wave";
import styles from "./PhotoCard.module.css";

/**
 * White card: photo on top (~80%) cut by a white wave, icon straddling the wave line, title below.
 * With `href` the whole card is a link and the photo zooms slightly on hover; without it, no hover.
 */
export function PhotoCard({
  photo,
  icon,
  title,
  children,
  href,
  sizes,
}: {
  photo?: Photo;
  icon: IconName;
  title: string;
  children?: ReactNode;
  href?: string;
  sizes: string;
}) {
  const body = (
    <>
      <div className={styles.media}>
        <div className={styles.frame}>
          {photo && (
            <Image
              src={photo.src}
              alt={href ? "" : photo.alt}
              width={photo.width}
              height={photo.height}
              sizes={sizes}
              style={{ objectPosition: photo.position }}
            />
          )}
        </div>
        <Wave fill="var(--color-surface)" className={styles.wave} />
        <span className={styles.icon}>
          <IconBadge name={icon} />
        </span>
      </div>
      <div className={styles.body}>
        <h3 className={styles.title}>{title}</h3>
        {children}
      </div>
    </>
  );
  return href ? (
    <a href={href} className={`${styles.card} ${styles.link}`}>
      {body}
    </a>
  ) : (
    <div className={styles.card}>{body}</div>
  );
}
