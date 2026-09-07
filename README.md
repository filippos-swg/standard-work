# Standard Work™

**A productized design service for businesses that need clear, professional brand and website work without agency overhead.**

Standard Work offers defined design packages with clear scope, predictable pricing, and guided project intake.

---

## What It Is

Standard Work is a guided design system that helps founders, small businesses, and individual creators build professional brands and websites with clear scope, clear decisions, and predictable outcomes.

It is not about endless exploration.

It is about making a small number of good decisions and executing them properly.

---

## Services

### Brand for Your Business

Create the essential elements your business needs to look coherent and credible.
Base from 12,000 SEK.

### Website for Your Business

A simple, scrollable website that explains what you do and how to contact you. Designed. Built. Published.
Base from 8,000 SEK.

Full pricing, including all add-ons, lives in [`PRICING.md`](PRICING.md) — the single source of truth.

---

## Current Build State

**v0.1 — Prototype**

- 7-page single-file HTML prototype
- Working configurator with live price updates
- Order summary panel
- Enquiry form with success state (submission mocked)
- Responsive layout (desktop + mobile)
- Hosting: Netlify (pending)
- Domain: standardwork.design (Namecheap)

---

## Tech Stack

- Single HTML file (`index.html`)
- Vanilla JS — hash-based SPA routing
- CSS custom properties design system
- Google Fonts: Outfit, JetBrains Mono, UnifrakturMaguntia
- No build step. No dependencies. No framework.

See [`docs/ARCHITECTURE.md`](docs/ARCHITECTURE.md) for how it all fits together.

---

## Repo Structure

The whole site is `index.html`. Everything else is either canonical data
(`PRICING.md`), the project OS (`aios/`), extended reference (`docs/`), the case images
(`work/`) or the test suite (`tests.html`).

*This used to be a drawn file tree. It was wrong within a month of being written, which is why
AiOS bans a hand-maintained list of files: `aios/STATE.md` is generated and reports the
real one.*

---

## Working on This Project

Start with `CLAUDE.md` — five lines, loaded automatically — then `aios/STATE.md` for what is
true right now. `aios/CANON.md` holds the rules that outlive the build; `aios/LOG.md` holds
every decision and what is still open.

---

## Guild

Standard Work is part of the guild of [Silly Wizards](https://www.sillywizardsguild.com).

---

## Operating System

This project runs on the Project AIOS method: build from briefs, not vibes.

Every change traces back to a brief, a scope, and a decision — not a whim. The files in this repo are the operating system; the site is the output.
