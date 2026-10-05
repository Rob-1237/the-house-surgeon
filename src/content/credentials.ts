/**
 * Memberships and accreditations shown on About, in Rob's order (2026-10-05).
 * ⚠ Confirm each with Floyd before launch: these logos may only be shown by members (BBB:
 * accredited businesses only).
 */
export type Credential = { name: string; logo: string; width: number; height: number };

export const credentials: Credential[] = [
  { name: "Better Business Bureau", logo: "/images/credentials/bbb.webp", width: 137, height: 206 },
  { name: "Indiana Builders Association", logo: "/images/credentials/iba.webp", width: 240, height: 240 },
  { name: "Plumbing Contractors of America", logo: "/images/credentials/pca.webp", width: 480, height: 240 },
];
