@AGENTS.md

# The House Surgeon — plumbing site

Planning lives outside this repo in `../NOTES/PLUMBING_PLAN.md` (§0.1–0.3 = decisions; latest wins).
Visual references: `../thd-concepts/`. Pages: Home, Services (+ service area, `/services/[slug]` detail
pages for SEO), About, Contact (+ booking, Video House Call, form, emergency tips).

## Stack
- Next.js (App Router) **static export** → `out/`, deployed on Netlify (`netlify.toml`). No server
  features: no route handlers, server actions, rewrites/redirects in next.config, or image optimizer.
- TypeScript, **plain CSS**: `src/styles/tokens.css` (design tokens) + CSS Modules per component +
  a small global layer in `src/app/globals.css`. Components use only token variables.
- Netlify Forms: blueprint in `public/__forms.html`; `ContactForm` posts multipart to it. Keep field names in sync.
- Scheduling: Cal.com inline embed (`CalEmbed`), links in `src/content/site.ts → cal`.
- Motion: page transitions via React `<ViewTransition>` (`PageTransition`, wrap every page),
  hero entry is CSS-only (`.enter`), scroll reveals via `Reveal` (IntersectionObserver).
  ≤ 24px travel, ease-out, respect `prefers-reduced-motion`.

## Content rules
- Business facts in `src/content/*.ts` only — never hard-code phone/email/license in components.
- Only name on the site: "The House Surgeon". Voice: "we" (team). No prices, no warranty language,
  no seasonal promos. No stock or AI imagery (Pip mascot excepted; secondary placement only).
- `<Tbd>` marks content waiting on Floyd. Before launch: `grep -rn "Tbd\|TBD" src` must be empty.
- Never invent reviews or testimonials.

## Skills
Use `premium-web-design` for any UI work, `brand-kit` for fonts/logo (colors come from
thd-palette; fonts are PROVISIONAL until that pass), and `design-review` before calling a page done.
