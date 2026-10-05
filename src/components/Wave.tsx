import styles from "./Wave.module.css";

/** Soft curved edge at the bottom of a gradient band. Filled with the next section's background. */
export function Wave({ fill = "var(--color-bg-app)", className }: { fill?: string; className?: string }) {
  return (
    <svg
      className={className ? `${styles.wave} ${className}` : styles.wave}
      viewBox="0 0 1440 120"
      preserveAspectRatio="none"
      aria-hidden="true"
      focusable="false"
    >
      <path d="M0 64C240 120 480 120 720 88S1200 8 1440 40V120H0Z" style={{ fill }} />
    </svg>
  );
}
