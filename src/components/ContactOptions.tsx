import { site } from "@/content/site";
import styles from "./ContactOptions.module.css";

/** The four ways to reach us, as a chooser at the top of /contact/. */
export function ContactOptions() {
  const options = [
    { href: site.phone.href, title: "Call", body: site.phone.display },
    { href: "#book", title: "Book a visit", body: "Pick a time online" },
    { href: "#video", title: "Video House Call", body: "Show us from your phone" },
    { href: "#message", title: "Send a message", body: "Add a photo of the problem" },
  ];
  return (
    <ul className={styles.grid}>
      {options.map((o) => (
        <li key={o.title}>
          <a href={o.href} className={styles.card}>
            <span className={styles.icon} aria-hidden="true" />
            <strong>{o.title}</strong>
            <span className="muted">{o.body}</span>
          </a>
        </li>
      ))}
    </ul>
  );
}
