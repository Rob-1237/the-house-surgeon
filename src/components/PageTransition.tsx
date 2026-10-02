import { ViewTransition, type ReactNode } from "react";

/**
 * Wrap each page's content (not the layout — layouts persist, so enter/exit never fire there).
 * Animations live in globals.css under `.page-enter` / `.page-exit`.
 */
export function PageTransition({ children }: { children: ReactNode }) {
  return (
    <ViewTransition enter="page-enter" exit="page-exit" default="none">
      <div>{children}</div>
    </ViewTransition>
  );
}
