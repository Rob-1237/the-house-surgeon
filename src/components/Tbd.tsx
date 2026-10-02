import type { ReactNode } from "react";

/** Visible rough-in marker for content waiting on Floyd. Grep "<Tbd" before launch. */
export function Tbd({ children = "TBD" }: { children?: ReactNode }) {
  return <em className="tbd">{children}</em>;
}
