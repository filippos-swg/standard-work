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
*Superseded twice, 2026-08-25/26. The ground is now #F2F0EA — see "The network ground". The rationing clause is withdrawn — see "The accent is a surface". The accent value itself is unchanged.*

**Outfit + JetBrains Mono + UnifrakturMaguntia.**
Display/body, labels/metadata, and the guild mark respectively. Trade-off: three families and a blackletter face add font weight; loaded from Google Fonts CDN.

**Left-aligned layout, centre bias banned.**
Supports a structured, scannable, document-like feel. Trade-off: less "hero-centric" than typical landing pages. Intended.

**The orange period/dot is the consistent brand mark across sizes.**
One mark that scales from `SW.` to `STANDARD WORK™`. Trade-off: subtle; depends on the accent colour staying reserved.

---

## How to add a decision

Append a new entry under the right section with the same one-line format: decision, why, trade-off. Date it if it reverses or supersedes an earlier one.

---

## Brand DNA — joining the network, 2026-08-25

The brief: bring Standard Work into the same visual system as
sillywizardsguild.com and seriouslywow.com so the three read as one network,
without changing structure, copy or functions.

**The network ground. `--bg` moves from `#E8E6E1` to `#F2F0EA`.**
Both siblings already share this exact value and both stylesheets say in their
own comments that it is shared *by decision* and is never the thing that changes
to tell the sites apart — if they ever read too similar, the answer is the
display face or the accent, never the ground. `--text` follows to `#141414`,
`--greige` to `#D6CEC2`, the hairline to `rgba(20,20,20,.14)`, `--max-w` to
`1280px`. Trade-off: every measured ratio in the file was recomputed against the
new ground, and two of them failed and had to change (below).

**The accent stays orange. Filippos's call, 2026-08-25.**
`#E84500` is close enough to the Guild's `#FF3D00` that the two sites will read
as near relatives rather than as two brands. Separation is carried by the
display face and by the radii instead. Trade-off: accepted knowingly — the
orange period/dot is the brand mark and moving it is a brand decision, not a
visual one. Logged so nobody "fixes" it later.

**One accent, two values. `--accent` ≥24px, `--accent-dark` below.**
`--accent` is 3.49 on the new ground: legal for large text and marks, illegal
for small text. Every 9–11px orange label on the site was failing. `--accent-dark`
was already in the file as the button hover and is 4.84 — it is now load-bearing.
The Guild runs the identical rule at 3.11 / 4.81. Trade-off: none; it is the
same colour at two depths, and no new value was introduced.

**Type on the orange is ink, not white.**
White on `#E84500` is 3.98 and fails for anything under 24px; ink is 4.63 and
passes at any size. The bands were carrying the offer in white at 3.98 and their
notes in white@.75 at 2.80. There is also no legal dim tier on that ground
(ink@.72 is 3.37), so where a second voice is needed it is paper at 3.49 on
large bold text. Trade-off: **this is the most visible change in the pass** and
reads as a regression to anyone who knows the white version. It is the same
finding, in the same words, that the Guild logged on its red page.

**`--text-faint` is collapsed into `--text-dim`.**
It was `#AEADA9`, which is 1.97 on this ground — below even the 3.0 floor for
non-text marks — and every token it coloured is 9–11px type needing 4.5. It was
not a tier, it was invisible. Both siblings carry exactly two ink values for the
same reason. Trade-off: one less step of hierarchy in the option chips and case
rows. The token is kept, so re-tiering is one line.

**Outfit becomes a display face; body, buttons and forms move to Inter.**
One display face per site, one body grotesk across the network — the split both
siblings run. Trade-off: two families load instead of one, offset by trimming
Outfit to three weights and dropping UnifrakturMaguntia entirely. Body stays at
17px rather than dropping to the Guild's 16 — reflowing 1391 lines to save a
pixel is churn, not system.

**Rounded corners and pill CTAs stay. Filippos's call, 2026-08-25.**
Both siblings are square. Standard Work is the one you buy from and it is the
soft one. Trade-off: it is the most visible way the site differs from the
network — which, with the accent held, is now doing real work as separation
rather than being a leftover. The radii are a signature. Do not square them
without saying so here.

**Coloured full-bleed surfaces are token swaps, not forked rules.**
`.accent-block` and `.ink-block` redefine what the tokens mean; children inherit.
Same mechanism as the Guild's `.page-red` and Seriously Wow's `.band`. This
removed roughly twenty hardcoded `#fff` and `rgba(255,255,255,…)` literals that
had already drifted to three different values, against this file's own rule that
nothing is hardcoded outside the tokens. Note the trap: a swap must never source
its own background from a token it redefines — custom properties resolve after
the cascade — which is why the swap blocks carry flat hexes.

**The footer moves to the paper ground.**
Both siblings close on the ground with a single hairline. A footer is on every
page of every site, so it is the cheapest family resemblance available. The
near-black surface stays where it is a *component* rather than a page —
`.summary-top` and `.mtotal`. Trade-off: the site loses its heaviest closing
block.

**UnifrakturMaguntia is retired.**
The blackletter stood in for a Guild reference with no lockup. There is one now,
and seriouslywow.com dropped its own blackletter for the same reason.

**The footer carries the network line.**
The Guild, plus Seriously, Wow. as the sister studio. Standard Work was the only
one of the three that never linked its own network. "Sister studio" is the only
new copy in this pass — two words, because "a part of the guild of" is not true
of a sibling studio and one sentence introducing both would have made the footer
say something false.

**Binary assets now live in the repo. This REVERSES the no-binaries rule.**
`work/` holds 32 webp, 1.4 MB. The rule was logged when the repo had no images
and no Work view; the Work view is the thing that changes the premise. The
alternative — serving them from Cloudinary under Simon's account — would put
half the site outside this repo behind a vendor and a manual upload step.
Filippos owns the master repo and wants one place. Trade-off: the repo is no
longer text-only, and image churn will show in history.

**Copy is priced once, in the copy step. The duplicate add-on is deleted.
2026-08-26.**
"Need help writing" in step 05 and the "Copy support" add-on in step 06 were the
same service at the same price, and `startCheckout` added both: 8,000 → 10,000 →
12,000 for one job, with "Copy support" listed twice in the order summary.

THE HISTORY DECIDED WHICH ONE GOES. Before the 2026-08-25 handover the copy step
was an unpriced question — it captured the answer for the brief and charged
nothing — and the add-on was the only place copy was billed. The handover put
`data-price` on the step without removing the add-on. So the step is the newer,
better instrument (three tiers: ready, rough copy edited at 1,000, written from
scratch at 2,000, against the add-on's single 2,000) and the add-on is what the
change should have taken with it.

Simon knew: the step carried a note reading "Same as the Copy support add-on".
The duplicate was labelled rather than removed. That note is gone with it.

No price moved. Writing was 2,000 and is 2,000. Trade-off: the add-on grid loses
a row, and anyone who had learned to buy copy there now meets it one step
earlier — which is the step that asks about copy, so it is where it belonged.

**The accent is a surface, not a ration. Filippos, 2026-08-26.**
The rationing clause above is withdrawn. The 2026-08-25 handover puts two
full-bleed accent sections on the homepage, and Simon's latest stands.

This is not a loosening so much as a correction: the network already treats an
accent as a *ground* rather than only as a highlight — the Guild's About page
inverts to a full red ground, Seriously, Wow. runs full purple bands — and
Standard Work was the odd one out in treating its orange as something to spend
sparingly. Rationing also carried a hidden cost: it is why the bands were set in
white in the first place, because a surface nobody expected to be a surface
never got the contrast work a surface needs.

What replaces the ration is a *rule*, and it is stricter than the ration was in
the one place that matters:

  · an accent surface is `.accent-block` or `.step-header` and therefore a token
    swap — never a hand-written background
  · type on it is `--on-accent`, and there is no dim tier on that ground
  · the accent as INK is still bounded by size: `--accent` ≥24px,
    `--accent-dark` below. That limit is arithmetic and does not relax.

Trade-off: the homepage is louder, and two large orange fields put more weight
on the orange staying exactly where it is. Accepted knowingly, alongside the
decision to keep `#E84500` rather than separate it from the Guild's red.

---

## Open — Filippos, not settled here

- **Rush is Brand-only.** `startCheckout` guards the 1,000 rush fee with
  `isBrand`, and the Website configurator has no deadline step at all. A rushed
  website is currently free. The handover's price table lists "Rush (14-day
  window) 1,000" without saying it applies to one package. Intended or not, it
  should be written down.

- **Every new price in the 2026-08-25 handover is an invented placeholder** and
  is not in `PRICING.md`. Of the eighteen priced items in the configurator,
  eleven match `PRICING.md` exactly and **seven do not appear in it at all**:
  SEO setup 1,500; the four brand-prep items (logo 1,500, typeface 1,000,
  palette 750, imagery 750); "Design, build, publish" 1,000; and the two copy
  options (rough copy 1,000, need help writing 2,000). `PRICING.md` still says
  it is "the single source of truth" and was last updated 2026-06-16.
- **Product names are inconsistent** — *Basic Brand Tool Kit* vs *Brand Tool Kit*,
  *One Page Website* vs *Website*. The plain form reaches the Stripe receipt.
- **A real Stripe transaction with add-ons selected** has not been verified.
  Nothing automated can prove the charge matches the order summary, and it is
  the one path where a bug costs money.
- **The handover claims nine test files and 126 assertions.** They are not in the
  package and not in this repo — only `review/prototype-opens-anywhere.html`
  shipped. The behaviour was re-verified by hand against the pristine build
  instead (see the commit message); the suite itself should be recovered from
  Simon.
