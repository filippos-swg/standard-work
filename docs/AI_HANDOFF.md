# AI Handoff — Standard Work™

**Standing briefing for Claude / Cowork.**

Read this before any work on this project.

---

## What This Project Is

Standard Work is a productized design service with two fixed-scope packages: Brand for Your Business and Website for Your Business.

The site is the primary sales and intake tool.

It must feel like the service: structured, calm, confident, easy to buy from.

---

## Tech Stack

- Single HTML file: `index.html`
- Vanilla JS — hash-based SPA routing (`#home`, `#brand`, etc.)
- CSS custom properties (no Tailwind, no framework)
- Google Fonts: Outfit, JetBrains Mono, UnifrakturMaguntia
- No build step. No dependencies. No backend (yet).

To make any change to the site, edit `index.html` only.

---

## Files to Read Before Working

1. `PROJECT_BRIEF.md` — what this is and what it must not become
2. `MVP_SCOPE.md` — what is in scope and what waits
3. `docs/CREATIVE_DIRECTION.md` — design system, copy rules, what is banned

---

## Rules for This Project

**Preserve the voice.** Direct, plainspoken, senior. No agency or SaaS language.

**Preserve the design system.** All tokens are in `:root` CSS variables. Never hardcode colours or fonts outside of the system.

**Preserve scope.** The configurator has defined steps and pricing. Do not add options, reorder steps, or change prices without explicit instruction.

**No bloat.** This site is intentionally lean. Do not add libraries, frameworks, or dependencies without strong reason.

**Test responsiveness.** Every change must work on mobile. Check the 640px and 960px breakpoints.

---

## Current Pricing (do not change without instruction)

### Brand for Your Business
Base: 12,000 SEK

Add-ons:
- Naming: +3,000 SEK
- Brand summary PDF: +1,500 SEK
- Social starter templates: +2,000 SEK
- Extended imagery pack: +1,500 SEK
- Extra revision round: +1,500 SEK

### Website for Your Business
Base: 8,000 SEK

Add-ons:
- Extra page: +2,000 SEK
- Copy support: +2,000 SEK
- Multilingual setup: +2,000 SEK
- Image pack: +1,500 SEK
- Extra revision round: +1,500 SEK

---

## Task Handoff Format

When receiving a task, confirm:

1. Which file(s) will change
2. What will change and why
3. What must not change
4. How to verify it worked

When completing a task, report:

1. What was changed
2. What was tested
3. Any known issues
4. Suggested next step

---

## Known Gaps (as of v0.1)

- Form submission is mocked (no backend)
- Silly Wizards footer logo is a font approximation — needs actual PNG
- No favicon
- No meta/OG tags
- No analytics
