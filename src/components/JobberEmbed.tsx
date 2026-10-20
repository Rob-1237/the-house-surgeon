import { Placeholder } from "./Placeholder";

/**
 * Floyd's Jobber booking form (on-site jobs + Video House Call), embedded on /contact/#schedule.
 * Renders a placeholder until Floyd sends the embed code
 * (Jobber → Settings → Requests and Bookings → … → Share links → Copy code).
 */
export function JobberEmbed() {
  return <Placeholder label="Jobber booking form" ratio="4 / 3" />;
}
