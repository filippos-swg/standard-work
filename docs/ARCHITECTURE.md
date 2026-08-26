# Architecture — Standard Work™

How the site is built. Read this before changing structure, routing, or state. For day-to-day edits, `AI_HANDOFF.md` is enough.

---

## One file

The entire site is `index.html`. Markup, styles, and script live in that one file. There is no build step, no bundler, no dependencies, and no backend (yet). To change the site, edit `index.html`.

This is deliberate — see `aios/LOG.md`. The constraint holds until the site outgrows it (roughly: more than ~10 views, or a need for shared components across files).

---

## Routing

Hash-based single-page app. Each "page" is a section toggled by the URL hash:

`#home` · `#how` · `#brand` · `#website` · `#pricing` · `#contact` · `#thankyou`

A small router reads `location.hash`, shows the matching section, hides the rest, and resets scroll. No server-side routing and no rewrites — this is why it works on static hosting with zero config. The cost is the `#` in URLs and weaker per-route SEO/OG (logged as a trade-off in DECISIONS).

---

## Design system

All visual values are CSS custom properties in `:root` — colours, fonts, spacing. Components read from these tokens. Nothing visual is hardcoded outside the token set. The full token table lives in `docs/CREATIVE_DIRECTION.md`; this file just states the rule: change the system in `:root`, never inline.

Fonts load from Google Fonts: Outfit, JetBrains Mono, UnifrakturMaguntia.

---

## Configurator and state

Each package (Brand, Website) has a configurator: a base package plus a defined set of add-ons, selected via radio/checkbox controls.

A plain JS state object holds the current selection. On any change:

1. State updates.
2. The order summary re-renders from state — selected items and the running total.
3. The total is computed from the base price plus selected add-on prices.

All price values come from `PRICING.md` and must match it exactly. Pricing is static but accurate — there is no pricing engine, just the numbers wired into the configurator. If a price changes, follow the change protocol in `PRICING.md`.

Selection state must always be visible (see `docs/UX_PRINCIPLES.md`): selected options are unmistakably marked, and the summary is live.

---

## Enquiry form

The contact view has an enquiry form. In v0.1 it is mocked: on submit it shows the `#thankyou` success state but does not send anything. No data is captured or emailed.

v1 wires this to a real backend — Netlify Forms or Formspree (undecided, see `docs/OPEN_QUESTIONS.md`). When implemented, the success state stays; only the submission path changes.

---

## Deploy

```
edit index.html  →  commit  →  push to main  →  Netlify builds (no build cmd)  →  live
```

- Repo: `github.com/filippos-swg/standard-work`, branch `main`.
- Host: Netlify. Build command empty, publish directory root.
- Domain: `standardwork.design` (Namecheap nameservers → Netlify). HTTPS auto-provisioned by Netlify.

There is no CI, no tests, and no staging environment. The Netlify preview/deploy URL is the review surface before the domain is connected.

---

## File map

```
standard-work/
  index.html              ← the entire site
  README.md               ← what this is, current state, structure
  PRICING.md              ← canonical prices (single source of truth)
  PROJECT_BRIEF.md        ← what it is and must not become
  MVP_SCOPE.md            ← what is in scope, what waits
  ARCHITECTURE.md         ← this file
  .gitignore
  docs/
    AI_HANDOFF.md         ← standing briefing for any AI agent
    CREATIVE_DIRECTION.md ← design system, copy rules, banned language
    UX_PRINCIPLES.md      ← how the site behaves
    DECISIONS.md          ← what was decided and why
    OPEN_QUESTIONS.md     ← what is still undecided
  tasks/
    TASK_001.md           ← deploy v0.1
```

---

## Known gaps (v0.1)

- Form is mocked; no backend.
- No favicon, no meta/OG tags, no analytics.
- Silly Wizards footer mark is a font approximation, not the real asset.

These are tracked in `MVP_SCOPE.md` (v1) and `docs/OPEN_QUESTIONS.md`.
