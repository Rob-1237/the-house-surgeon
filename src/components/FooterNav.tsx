"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import { primaryNav } from "@/content/site";
import { isCurrent } from "./SiteHeader";
import styles from "./SiteFooter.module.css";

/** Footer page links: same hover and current-page underline as the header nav. */
export function FooterNav() {
  const pathname = usePathname();
  return (
    <ul className={styles.list}>
      {primaryNav.map((item) => (
        <li key={item.href}>
          <Link
            href={item.href}
            className={styles.navLink}
            aria-current={isCurrent(pathname, item.href) ? "page" : undefined}
          >
            {item.label}
          </Link>
        </li>
      ))}
    </ul>
  );
}
