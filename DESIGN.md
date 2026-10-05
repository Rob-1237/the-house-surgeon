# Design Spec — The House Surgeon

_Last updated: 2026-10-04. Tokens live in `src/styles/tokens.css`; this file explains the intent
behind them. Visual references: `../thd-concepts/`._

## Feeling & goal
- **Feeling (first 50ms):** friendly, trustworthy. Neighborly, but clearly a licensed, organized team.
- **Primary goal (every page):** call, or book (a visit or a Video House Call).
- **Audience:** homeowners within ~40 mi of Decatur Township, Indianapolis; many are older and put off
  by anything that looks generated or salesy.
- **Not:** the competitors' look (busy templates, coupon carnivals, all-caps shouting).

## Typography
| Role | Family | Source / license | Weights |
|---|---|---|---|
| Headings | Plus Jakarta Sans | Google Fonts, SIL OFL 1.1 (free commercial), self-hosted via `next/font` | 800 (h1/h2), 700 (h3/h4) |
| Body | Plus Jakarta Sans | same | 400, 600–700 for labels/buttons |

- One family, two roles. Base 16px; scale Major Third 1.25 (`--text-*`). Mixed case headlines only.
- Body line-height 1.5; h1 1.05, h2 1.15, h3 1.25. Tracking −0.02em h1, −0.01em h2/h3.

## Color
Core set from Rob (2026-10-05: deep forest green, warm ivory, warm plumbing red). **Don't add
colors**; derive tints with `color-mix()` from these.

| Role | Token | Hex | Contrast |
|---|---|---|---|
| Primary (deep forest green) | `--color-primary` | #173A2F | white 12.5:1; titles, icons, footer |
| Primary light (secondary forest) | `--color-primary-light` | #285546 | white 8.5:1; gradient end, hover fills, pipe line-art |
| Accent (warm plumbing red, CTAs only) | `--color-accent` | #C92B20 | white 5.5:1 |
| Accent hover | `--color-accent-hover` | #A92219 | white 7.2:1 |
| Canvas / sections (warm ivory) | `--color-bg-app` | #F6F3EC | — |
| Surface | `--color-surface` | #FFFFFF | cards, header, inputs; text on dark |
| Text | `--color-text-main` | #17231F | 14.6:1 on bg-app |
| Muted text | `--color-text-muted` | #5B6862 | 5.3:1 on bg-app, 5.8:1 on white; also form-field borders |
| Border | `--color-border` | #D8D8D0 | 1.3:1, decorative only (never a field boundary) |
| Hero gradient | `--gradient-hero` | #173A2F → #285546 | white ≥ 8.5:1; secondary text (82% white) ≥ 6.3:1 |

- Derived: `--tint-primary` (12% primary-light on white: icon tiles, placeholders, pipe fill),
  `--on-dark-muted` (82% white).
- Exceptions: `--color-error` #B42318 (form error text only); `--color-star` #E8B33A (review stars
  only, 9.8:1 on primary). Rough-in `.tbd` markers use a dark gold
  that disappears with them before launch.
- Section rhythm: canvas (bg-app) ↔ white (`tone="alt"`), with the gradient for the home hero and the
  closing CTA band (`tone="dark"`). Primary-dark footer.
- **No ghost buttons, ever** (no transparent, outline, or frosted-glass buttons). Secondary buttons
  are solid `--color-secondary` rgb(48 59 128) with white text (10.2:1) on every surface (interim
  color, Rob 2026-10-05).

## Logo & mascot
- **Logo:** text wordmark for now ("THE" in teal, "House Surgeon" in brand blue). Primary mark
  (faceless wrench + stethoscope) still to be drawn.
- **Pip:** at most one pose per page, never in the nav or favicon.
  - Home: `standing` (full figure with stethoscope; the file is pre-mirrored to face left) inside the
    large `PipBadge` circle. His legs run past the circle and are clipped by it, so no cut-off edge shows.
    The circle has a faint line-art pipework pattern behind Pip (original SVG, not stock).
  - Services: `walking` (toolbox) in the closing CTA band, lifted ~25% of the band height (6rem) off
    its bottom edge on desktop, head breaking well into the section above. Phones: bottom-anchored.
  - Contact: `drips` (15rem) standing on the top edge of the booking embed, his head rising into the
    Video House Call section above. 404: `wink`. About: none.
  - Art is the v2 draft; replace the files in `public/images/pip/` after the Figma redraw.

## Layout
- Grid 12 / 8 / 4. Container 1200px; gutter 16→32px. 8pt spacing (`--space-*`).
- **Home hero (`Hero` with `backdrop`):** gradient band, soft wave bottom edge. The Pip circle is
  large (~54vw) and bleeds off the right edge, rising under the header and running down under the
  wave and the trust card, which overlaps it (ref: `../inspiration/home-inspiration-1.webp`). On
  mobile the circle sits above the copy, still cropped right and tucked under the header.
- **Photo heroes (`Hero` with `photo`; Services, About, Contact):** same layout as the home hero (eyebrow, h1, lead, actions
  on the left; wave bottom; `TrustStrip` overlapping the wave), with a full-bleed photo behind it (Services `indianapolis.webp`, About `about-hero.webp`, Contact `contact-hero.webp`): grayscale, primary gradient overlay (heaviest left and bottom), anchored top-right so
  only the left and bottom crop.
- **Service area map (`AreaMap`):** Google Maps embed (no key, no pin) centred on downtown
  Indianapolis, ~25 mi each way: Danville and Greenfield in view, Greencastle and Knightstown out.
  Zoom 10 on desktop, 9 on phones (≤ 36em), since frame width sets how much a zoom shows.
- **Header:** same treatment as the footer (primary background, white wordmark and links); logo +
  nav only, no call button (calls live in the hero and the CTA band; no fixed mobile action bar).
- **Interior heroes (`PageHero`: service pages, thanks):** light canvas,
  editorial split header (big primary headline left; lead + actions right, bottom-aligned; pill
  eyebrow or breadcrumb), then a wide rounded photo band with a white credentials card breaking
  its lower edge. Photos are mapped in `src/content/photos.ts`.
- **Section rhythm:** bg → ice → light blue → bg → gradient CTA → dark footer.
- **Shape:** tight radii. Buttons and inputs `--radius-sm` (4px), cards, strips and images
  `--radius-lg` (8px). Shadows soft and low.
- **Home service cards (`ServiceGrid`):** dark `--color-primary` tiles, white name, muted-white summary,
  light icon badge; no top stripe, no "Learn more". Each links to `/services/`. Only hover effect:
  icon + name + summary scale up together (1.05, 500ms ease-out), like an image zoom. No lift.
- **Photo cards (`PhotoCard`; Services `ServiceCards`, Contact `ContactOptions`):** white card, photo on
  top (~80%, 5:4, `serviceCardPhotos` in `photos.ts`) with a white wave bottom edge; solid primary
  icon badge with a white ring straddling the wave line; name below. Services: name only, not a link, no hover. Contact options: name + one muted line, the
  whole card links, and the photo zooms 1.05 inside its frame on hover.
- **"Prefer to talk?" (Contact):** same dark tile as the home service cards, light phone badge.
- **Review cards:** same dark `--color-primary` tile, white text, gold `--color-star` stars.
- **Credential logos (About):** BBB, IBA, PCA in that order (`src/content/credentials.ts`), each centred
  in an equal white tile (10rem tall, logo 6.5rem) so different shapes read as one set.

## Signature motif: the pipe
Friendly rounded pipe (`--tint-primary` fill, primary-light edge) connecting round primary "fittings".
- v1 is live in `Steps` (Contact): horizontal between centred columns on desktop, vertical on the
  left on mobile. It is built per segment so it can't misalign. Plays once when the list is ~45vh
  into view: step 1 fades in, the pipe fills to 2 (1.1s), step 2 fades in, the pipe fills to 3,
  step 3 fades in. Shown without animation for no-JS and reduced motion.
- Next: the Services list and the About story/values use the same fittings + pipe.
- Rules: decorative only (`aria-hidden`/pseudo-elements), never behind text, straight runs plus
  simple elbows only, nothing meandering.

## Imagery
- Photos: Floyd's own (natural light, real jobs, real team) are the goal. Current hero photos are
  placeholders supplied by Rob; confirm rights before launch. No AI imagery (Pip excepted).
- Icons: interim Lucide (ISC), 1.75 stroke, inside 64px `--tint-primary` circles (`IconBadge`). Replace with a
  custom set matched to the final logo stroke.
- Format: WebP, sized to render, ≤ 300KB.

## Motion
- Hero entry: CSS only (`.enter`). Page transitions: React `<ViewTransition>`. Scroll reveals: `Reveal`.
- Hover 150ms, transforms 250ms, reveals 500ms ease-out, ≤ 24px travel, once. Reduced motion respected.

## Voice
- "We" (team). Headlines ≤ 8 words, plain and outcome-first. Buttons say what happens.
- No prices, no warranty language, no promos, no promises about hours or response times Floyd hasn't made.
