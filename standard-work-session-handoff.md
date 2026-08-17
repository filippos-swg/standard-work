# Standard Work — Session Handoff

**Date:** 2026-06-16
**Purpose:** Paste/attach this in a new chat to resume without losing context.

---

## Where things stand

**Repo:** `github.com/filippos-swg/standard-work` (public, branch `main`)
**Local repo:** `/Users/southnorthflip/Projects/standard-work`
**Domain:** `standardwork.design` — **LIVE on Netlify DNS** (DNS propagated, SSL pending auto-provision)
**Hosting:** Netlify free tier, deployed from GitHub `main`

---

## Done this session

### Deploy
- Site deployed to Netlify from `github.com/filippos-swg/standard-work`
- Custom domain `standardwork.design` added, Netlify DNS activated
- Nameservers at Namecheap switched to Netlify's (`dns1-4.p09.nsone.net`)
- SSL cert pending auto-provision (happens once DNS fully propagates)

### Stripe
- Account created under **Standard Work** (live account)
- Legal entity: **South North Studios AB**
- Business location: Sweden / Privat företag
- Products selected: Non-recurring payments, Invoicing, Tax collection
- Payment method: Pre-built Checkout (Stripe-hosted page)
- Tax monitoring: active (VAT registration to be added when first sale is near)
- **⚠️ Secret key was accidentally pasted in chat — must be regenerated in Stripe dashboard before integration**

### Docs updated
- `PRICING.md` — prices now stated as ex. moms, South North Studios AB added as invoicing entity
- `docs/DECISIONS.md` — VAT and Stripe payment decisions logged
- `docs/OPEN_QUESTIONS.md` — VAT question closed, Stripe integration added as TASK_003

---

## NEXT ACTIONS

### TASK_002 — Real form submission
- Replace mocked form with Netlify Forms
- Add email notification to filippos@southnorth.se
- File to edit: `index.html` (form element + success state)

### TASK_003 — Stripe Checkout integration
- Wire configurator "Get started" CTA to Stripe Checkout
- 50% of selected package total at checkout
- VAT via Stripe Tax (automatic, 25% MOMS)
- No backend needed — use Stripe Payment Links or client-side Checkout redirect
- **Before starting:** regenerate Stripe secret key, get live publishable key from Stripe dashboard
- Legal entity on invoices: South North Studios AB

### Site fixes (noted, not yet tasked)
- Add "ex. moms" label next to all prices in `index.html`
- Verify site is fully live at `standardwork.design` with HTTPS
- Favicon, meta/OG tags, analytics (lower priority)

---

## Open questions (from docs/OPEN_QUESTIONS.md)

- **Form backend:** Netlify Forms (decided for v1, not yet built)
- **Analytics tool:** Plausible/Fathom vs GA4 (undecided)
- **Silly Wizards footer mark:** font approximation, needs real PNG/SVG
- **Site language:** English-only for v0.1 (decided), Swedish version later?
- **Stripe Tax VAT registration:** add Swedish VAT number in Stripe Tax settings before going live with payments

## Known gaps (v0.1)

Form mocked, no favicon, no OG/meta tags, no analytics, Silly Wizards footer mark is a font approximation, prices in `index.html` not yet labelled "ex. moms".
