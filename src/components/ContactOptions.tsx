import { contactPhotos } from "@/content/photos";
import { site } from "@/content/site";
import type { IconName } from "./Icon";
import { PhotoCard } from "./PhotoCard";
import type { Photo } from "@/content/photos";
import styles from "./ContactOptions.module.css";

/** The four ways to reach us, as a chooser at the top of /contact/ (photo cards, like Services). */
export function ContactOptions() {
  const options: { href: string; icon: IconName; title: string; body: string; photo: Photo }[] = [
    { href: site.phone.href, icon: "phone", title: "Call", body: site.phone.display, photo: contactPhotos.call },
    { href: "#book", icon: "calendar", title: "Book a visit", body: "Pick a time online", photo: contactPhotos.book },
    { href: "#video", icon: "video", title: "Video House Call", body: "Show us from your phone", photo: contactPhotos.video },
    { href: "#message", icon: "message", title: "Send a message", body: "Add a photo of the problem", photo: contactPhotos.message },
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
            sizes="(max-width: 30em) 100vw, (max-width: 60em) 50vw, 18rem"
          >
            <span className={`muted ${styles.body}`}>{o.body}</span>
          </PhotoCard>
        </li>
      ))}
    </ul>
  );
}
