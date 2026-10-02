import styles from "./Placeholder.module.css";

/** Stand-in for Floyd's photos/video. Keeps the final aspect ratio so layout doesn't shift later. */
export function Placeholder({
  label,
  ratio = "4 / 3",
  className,
}: {
  label: string;
  ratio?: string;
  className?: string;
}) {
  return (
    <div
      className={[styles.placeholder, className].filter(Boolean).join(" ")}
      style={{ aspectRatio: ratio }}
      role="img"
      aria-label={`Placeholder: ${label}`}
    >
      <span>{label}</span>
    </div>
  );
}
