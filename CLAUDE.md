@AGENTS.md

# The House Surgeon — plumbing site

Planning lives outside this repo in `../NOTES/PLUMBING_PLAN.md` (§0.1–0.3 = decisions; latest wins).
Visual references: `../thd-concepts/`. Pages: Home, Services (+ service area, `/services/[slug]` detail
pages for SEO), About, Contact (two routes only: call, or schedule a job in Jobber; plus emergency tips).

## Design
Read `DESIGN.md` before any UI work: palette (core tokens only, no new colors), type, heroes,
Pip placement rules, and the pipe motif.

## Stack
- Next.js (App Router) **static export** → `out/`, deployed on Netlify (`netlify.toml`). No server
  features: no route handlers, server actions, rewrites/redirects in next.config, or image optimizer.
- TypeScript, **plain CSS**: `src/styles/tokens.css` (design tokens) + CSS Modules per component +
  a small global layer in `src/app/globals.css`. Components use only token variables.
- Scheduling, requests, invoices: **Jobber** only (`JobberEmbed` on /contact/#schedule; Video House Call is
  an appointment type inside it). No Cal.com, no Netlify Forms. Keep platforms to Netlify + Jobber + Google.
- Motion: page transitions via React `<ViewTransition>` (`PageTransition`, wrap every page),
  hero entry is CSS-only (`.enter`), scroll reveals via `Reveal` (IntersectionObserver).
  ≤ 24px travel, ease-out, respect `prefers-reduced-motion`.

## Content rules
- Business facts in `src/content/*.ts` only — never hard-code phone/email/license in components.
- Only name on the site: "The House Surgeon". Voice: "we" (team). No prices, no warranty language,
  no seasonal promos. No AI imagery (Pip excepted; one pose per page, see DESIGN.md). Placeholder photos live in
  `src/content/photos.ts` until Floyd's shoot.
- `<Tbd>` marks content waiting on Floyd. Before launch: `grep -rn "Tbd\|TBD" src` must be empty.
- Never invent reviews or testimonials.

## Skills
Use `premium-web-design` for any UI work, `brand-kit` for logo work, and `design-review` before calling a page done.
