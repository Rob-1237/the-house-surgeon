import { contactPhotos } from "@/content/photos";
import { site } from "@/content/site";
import type { IconName } from "./Icon";
import { PhotoCard } from "./PhotoCard";
import type { Photo } from "@/content/photos";
import styles from "./ContactOptions.module.css";

/** The two ways to reach us, as a chooser at the top of /contact/ (photo cards, like Services). */
export function ContactOptions() {
  const options: { href: string; icon: IconName; title: string; body: string; photo: Photo }[] = [
    { href: site.phone.href, icon: "phone", title: "Emergency? Call", body: site.phone.display, photo: contactPhotos.call },
    { href: "#schedule", icon: "calendar", title: "Schedule a job", body: "Pick a time online", photo: contactPhotos.book },
  ];
  return (
    <ul className={styles.grid}>
      {options.map((o) => (
        <li key={o.title} className={styles.item}>
          <PhotoCard
            href={o.href}
            photo={o.photo}
            icon={o.icon}
            title={o.title}
            sizes="(max-width: 30em) 100vw, 36rem"
          >
            <span className={`muted ${styles.body}`}>{o.body}</span>
          </PhotoCard>
        </li>
      ))}
    </ul>
  );
}
