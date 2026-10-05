import {
  CalendarCheck,
  Flame,
  GlassWater,
  MessageSquareText,
  Phone,
  ScanSearch,
  ShowerHead,
  ThermometerSun,
  Video,
  Wrench,
  type LucideIcon,
} from "lucide-react";
import styles from "./Icon.module.css";

/**
 * Interim icon set (Lucide, ISC license, 1.75 stroke). Replace with the custom set that matches
 * the final logo stroke (DESIGN.md → Imagery) by swapping entries here.
 */
const icons = {
  "pipe-repair": Wrench,
  "gas-lines": Flame,
  "water-quality": GlassWater,
  "leak-detection": ScanSearch,
  "water-heaters": ThermometerSun,
  fixtures: ShowerHead,
  phone: Phone,
  calendar: CalendarCheck,
  video: Video,
  message: MessageSquareText,
} satisfies Record<string, LucideIcon>;

export type IconName = keyof typeof icons;

/** Line icon inside a filled circle ("node"). `tone="light"` for use on dark cards. */
export function IconBadge({ name, tone = "brand" }: { name: IconName; tone?: "brand" | "light" }) {
  const Glyph = icons[name];
  return (
    <span className={`${styles.badge} ${styles[tone]}`} aria-hidden="true">
      <Glyph strokeWidth={1.75} />
    </span>
  );
}
