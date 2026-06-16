# Decisions — Standard Work™

The record of what was decided and why.

If you are about to undo one of these, read the reason first. A decision logged here changes only with explicit instruction. New decisions get appended, not edited in place.

Format: **Decision** · why · trade-off accepted.

---

## Product

**Two fixed-scope packages only — Brand and Website.**
The product is senior judgment made easy to buy. Fixed scope is the mechanism that makes it buyable. Trade-off: turns away clients who want bespoke or open-ended work. That is intended — they are not the audience.

**Add-ons are the only flexibility.**
Keeps every quote inside a known envelope and keeps the configurator honest. Trade-off: some real client needs won't map to an add-on and will have to wait or be declined.

**Price is shown live and upfront, never on request.**
Removes the agency dance. Price visibility is part of the positioning, not just UX. Trade-off: competitors and price-shoppers see the numbers. Acceptable — the audience values the clarity more than we lose to comparison.

**50/50 payment split, no retainer.**
Matches a fixed-scope, defined-delivery model. Trade-off: no recurring revenue. Out of scope for now by design.

**Prices shown ex. moms. VAT added at checkout.**
Swedish B2B standard. Stripe Tax handles calculation and display automatically. Trade-off: final price is higher than shown — mitigated by labelling prices "ex. moms" clearly on the site.

**Payment via Stripe Checkout, under South North Studios AB.**
Stripe is the processor. Legal entity for invoicing and payouts is South North Studios AB (not Silly Wizards, which is not yet a legal entity). Trade-off: Stripe account setup required before checkout can go live. (2026-06-16)

---

## Technical

**Single `index.html`, no framework, no build step.**
The site is small and must stay lean. A framework would add weight, a build pipeline, and a dependency surface for no benefit at this size. Trade-off: less structure as the site grows; revisit if it passes ~10 views or needs shared components.

**Hash-based SPA routing (`#home`, `#brand`, …).**
Works on static hosting with zero config and no server rewrites. Trade-off: URLs carry a `#`, and SEO/OG per-route is weaker. Acceptable for v0.1; revisit if organic search or per-page sharing matters.

**Vanilla JS state object drives the configurator and order summary.**
No state library needed for this scope. Trade-off: state logic is hand-rolled; keep it in one place to avoid drift.

**CSS custom properties in `:root` as the design system.**
Tokens, not hardcoded values. Makes the system enforceable and themeable. Trade-off: none meaningful at this scale. Rule: never hardcode a colour or font outside the tokens.

**No backend for v0.1. Form submission is mocked to a success state.**
Lets the prototype go live for review without standing up infrastructure. Trade-off: no real enquiries captured yet. Resolved in v1 via Netlify Forms or Formspree — see OPEN_QUESTIONS.md.

---

## Infrastructure

**Hosting on Netlify.**
Static deploy straight from the GitHub repo, free tier, auto HTTPS, built-in forms path for v1. Trade-off: vendor lock for forms/redirects if we lean on Netlify-specific features.

**Domain `standardwork.design` on Namecheap, nameservers pointed at Netlify.**
Netlify manages DNS and TLS. Trade-off: DNS lives away from the registrar; one more place to check if something breaks.

**Repo `github.com/filippos-swg/standard-work`, branch `main`, flat root.**
Single source of the site and its operating docs. Trade-off: site and AIOS docs share one repo; fine while small.

---

## Brand / Design

**Warm grey ground (#E8E6E1) with orange-red accent (#E84500).**
Reads as precise and confident, not SaaS-generic or agency-decorative. Trade-off: orange is loud; it is rationed to CTAs, step bars, and the brand dot.

**Outfit + JetBrains Mono + UnifrakturMaguntia.**
Display/body, labels/metadata, and the guild mark respectively. Trade-off: three families and a blackletter face add font weight; loaded from Google Fonts CDN.

**Left-aligned layout, centre bias banned.**
Supports a structured, scannable, document-like feel. Trade-off: less "hero-centric" than typical landing pages. Intended.

**The orange period/dot is the consistent brand mark across sizes.**
One mark that scales from `SW.` to `STANDARD WORK™`. Trade-off: subtle; depends on the accent colour staying reserved.

---

## How to add a decision

Append a new entry under the right section with the same one-line format: decision, why, trade-off. Date it if it reverses or supersedes an earlier one.
