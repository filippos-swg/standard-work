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

See [`ARCHITECTURE.md`](ARCHITECTURE.md) for how it all fits together.

---

## Repo Structure

```
standard-work/
  index.html              ← the entire site
  README.md
  PRICING.md              ← canonical prices (single source of truth)
  PROJECT_BRIEF.md        ← what it is and must not become
  MVP_SCOPE.md            ← what is in scope, what waits
  ARCHITECTURE.md         ← how the site is built
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

## Working on This Project

Start with [`docs/AI_HANDOFF.md`](docs/AI_HANDOFF.md). It is the standing briefing for any agent or collaborator and points to everything else.

---

## Guild

Standard Work is part of the guild of [Silly Wizards](https://www.sillywizardsguild.com).

---

## Operating System

This project runs on the Project AIOS method: build from briefs, not vibes.

Every change traces back to a brief, a scope, and a decision — not a whim. The files in this repo are the operating system; the site is the output.
