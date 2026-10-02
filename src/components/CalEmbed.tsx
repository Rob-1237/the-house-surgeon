"use client";

import Cal from "@calcom/embed-react";
import { Placeholder } from "./Placeholder";

/**
 * Inline Cal.com booking. `calLink` is "username/event-slug" from site.cal.
 * Renders a placeholder until Floyd's Cal.com account and event types exist.
 */
export function CalEmbed({ calLink, label }: { calLink: string; label: string }) {
  if (!calLink) return <Placeholder label={`Cal.com booking: ${label}`} ratio="4 / 3" />;
  return (
    <Cal
      calLink={calLink}
      style={{ inlineSize: "100%", minBlockSize: "40rem" }}
      config={{ layout: "month_view", theme: "light" }}
    />
  );
}
