# Standard Work™ — Canon

**Frozen except by a dated decision in `aios/LOG.md`.** Canon is supposed to freeze; staleness
here is not a defect and `aios check` never reports it.

Derived 2026-08-26 from the v1.3 files this replaces — PROJECT_BRIEF.md and DECISIONS.md,
both now folded into `aios/LOG.md` — and from `docs/CREATIVE_DIRECTION.md`. That is what the
v1.3 PROJECT_CANON.md placeholder instructed:
*"derive from the brief and the creative direction; do not invent."* It had sat unfilled since
2026-07-18 with `[Principle 1]` still in it. Nothing below is new: every line traces to one of
those three files or to a dated entry in `LOG.md`.

---

## 1 · Identity

Standard Work is a fixed-scope design service for businesses that need clear, professional
brand and website work without agency overhead. Two defined packages, transparent pricing, a
guided intake.

## 2 · Purpose

**Senior creative judgment made easier to buy.**

The value is not the fixed price. Fixed packages are the *mechanism*; senior judgment is the
*value*. Confusing the two turns the product into a cheap production service, which is the one
thing it must not become.

## 3 · Principles

1. **Scope stays fixed.** Add-ons are the only flexibility on price.
2. **Nothing is sold that isn't defined.** No exploration, no consulting, no open-ended work.
3. **Price is shown live and upfront, never on request.** Price visibility is positioning, not
   just UX.
4. **The voice is direct and plainspoken.** No agency language.
5. **The site must feel like the service** — structured, calm, confident, easy to buy from.
6. **Prices live in one place.** `PRICING.md` is the source of truth, `index.html` implements
   it, and `tests.html` asserts the two agree. A price changes in all three or the suite fails.
7. **Never hardcode a colour or a font outside the tokens.** The design system is CSS custom
   properties in `:root`; a value written past them is a defect, not a shortcut.
8. **Measure contrast before shipping a colour.** Every ratio in the stylesheet is computed
   against the ground it sits on and written down beside it. "It looks fine" is not a reading.

## 4 · What this is not

- Not Fiverr
- Not an unlimited design subscription
- Not a cheap production service
- Not a generic design agency
- Not a bloated consultancy
- Not a SaaS template site

## 5 · The two packages

**Brand Tool Kit** — the essential brand elements a business needs to look coherent and
credible: logo, typography, colour palette, brand direction, imagery direction, tone of voice.

**Website** — a simple, scrollable site that explains what the business does and makes it easy
to get in touch: one scrollable page, content sections, brand-aligned visuals, contact,
desktop and mobile.

Those two names are the product names everywhere — page, order summary and Stripe receipt.
Decided 2026-08-26; see `LOG.md`. Prices are in `PRICING.md` and nowhere else.

## 6 · Business model

- Fixed-scope packages, clear upfront pricing
- 50% to start, 50% on delivery
- Prices ex. moms; VAT added at checkout by Stripe Tax
- Legal entity for invoicing and payouts: South North Studios AB
- No retainer, no open-ended billing

## 7 · Audience

Founders and small business owners · freelancers and individual creators · businesses that
have outgrown their current brand · people who want professional results without an agency
relationship.

## 8 · Architecture, and why it is small

A single `index.html` — no framework, no build step, no dependencies — with hash-based SPA
routing and a vanilla JS state object driving the configurator. The site is small and must
stay lean.

**Revisit if it passes roughly ten views or needs shared components across files.** That is the
stated exit condition, not a vague preference. `tests.html` drives the real page in an iframe
for the same reason: adding a runner would break the rule it is testing.

## 9 · The network

Standard Work is one of two studios under the **Silly Wizards Guild**, alongside
**Seriously, Wow.** The three sites share a ground (`#F2F0EA`), an ink, a greige, a hairline
and a rhythm — by documented convention, not by shared code. Nothing enforces it.

**The ground is never what changes to tell the three sites apart.** If they read too similar,
the answer is the display face or the accent. That rule is written into all three stylesheets
in the same words.

Standard Work's own signature is Outfit at display scale, the orange, and rounded corners —
it is the one you buy from, and it is deliberately the soft one.

## 10 · Source of truth

Git history and `aios/`. Not chat, not a handoff, not this file's prose about the present —
`aios/STATE.md` is generated and says what is true right now.

**If a suggestion conflicts with this canon, return here before proceeding.**
