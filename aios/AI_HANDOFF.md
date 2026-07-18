# AI Handoff — Standard Work™

**AIOS version:** 1.3

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

To make any change to the site, edit `index.html` only. See `docs/ARCHITECTURE.md` for how routing, state, and the configurator work.

---

## Files to Read Before Working

1. `aios/PROJECT_BRIEF.md` — what this is and what it must not become
2. `docs/MVP_SCOPE.md` — what is in scope and what waits
3. `PRICING.md` — canonical prices (the only place prices live)
4. `docs/CREATIVE_DIRECTION.md` — design system, copy rules, banned language
5. `docs/UX_PRINCIPLES.md` — how the site must behave
6. `aios/DECISIONS.md` — what was decided and why (read before reversing anything)
7. `docs/OPEN_QUESTIONS.md` — what is still undecided

---

## Rules for This Project

**Preserve the voice.** Direct, plainspoken, senior. No agency or SaaS language. The banned-words list is in `docs/CREATIVE_DIRECTION.md`.

**Preserve the design system.** All tokens are in `:root` CSS variables. Never hardcode colours or fonts outside the system.

**Preserve scope.** The configurator has defined steps and pricing. Do not add options, reorder steps, or change prices without explicit instruction.

**Prices live in one place.** `PRICING.md` is canonical. The configurator in `index.html` must match it. Never restate prices in other docs — link to `PRICING.md`.

**No bloat.** This site is intentionally lean. Do not add libraries, frameworks, or dependencies without strong reason.

**Test responsiveness.** Every change must work on mobile. Check the 640px and 960px breakpoints.

---

## Pricing

All prices — base and add-ons — are in `PRICING.md`. Do not change them without explicit instruction from Filippos, and follow the change protocol in that file when you do.

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

If a decision was made during the task, add it to `aios/DECISIONS.md`. If a question was opened, add it to `docs/OPEN_QUESTIONS.md`.

---

## Known Gaps (as of v0.1)

- Form submission is mocked (no backend)
- Silly Wizards footer logo is a font approximation — needs actual PNG
- No favicon
- No meta/OG tags
- No analytics

These are tracked in `docs/MVP_SCOPE.md` (v1) and `docs/OPEN_QUESTIONS.md`.
