# Pricing — Standard Work™

**This file is the single source of truth for all prices.**

`index.html` is the live implementation and must match this file exactly.
`PROJECT_BRIEF.md`, `AI_HANDOFF.md`, and `README.md` reference this file — they do not restate prices.

Currency: SEK. All prices are **ex. moms (excluding VAT)**. VAT is added at checkout.

Last updated: 2026-08-26 · v0.3

**This file is now complete.** Every priced control in `index.html` appears
below — 18 items, reconciled against the build on 2026-08-26. It had been
claiming to be the single source of truth while ten of them were absent.

---

## Brand Tool Kit

Named **Brand Tool Kit** everywhere — the product page, the order summary and
the Stripe receipt. "Basic Brand Tool Kit" is retired: *Basic* is a discount
word on a fixed-price premium product. Decided 2026-08-26.

| Item | Price (SEK) | Type | Chosen in |
|---|---|---|---|
| Base package | 12,000 | Base | — |
| Naming | +3,000 | Add-on | Step 06 |
| Brand summary PDF | +1,500 | Add-on | Step 06 |
| Social starter templates | +2,000 | Add-on | Step 06 |
| Extended imagery pack | +1,500 | Add-on | Step 06 |
| Extra revision round | +1,500 | Add-on | Step 06 |
| Rush delivery — inside 14 days | +1,000 | Surcharge | Step 05, automatic | ⚠

⚠ **Rush is not settled.** 1,000 on a 12,000 package is 8.3%, where a queue-jump
premium normally runs 15–25%. It also applies to Brand only — the Website
configurator has no deadline step, so a rushed website is currently free. Both
the rate and that asymmetry are open. Filippos, 2026-08-26.

**Base includes:** logo, typography, colour palette, brand direction, imagery direction, tone of voice.

---

## Website

Named **Website** everywhere. "One Page Website" is retired: it names a
limitation where *Website* names an outcome. Decided 2026-08-26.

| Item | Price (SEK) | Type | Chosen in |
|---|---|---|---|
| Base package | 8,000 | Base | — |
| Brand prep — logo | +1,500 | Prep | Step 01 |
| Brand prep — typeface | +1,000 | Prep | Step 01 |
| Brand prep — colour palette | +750 | Prep | Step 01 |
| Brand prep — imagery direction | +750 | Prep | Step 01 |
| Design, build, publish | +1,000 | Build level | Step 03 |
| Copy editing — you supply rough copy | +1,000 | Copy step | Step 05 |
| Copy writing — we write it | +2,000 | Copy step | Step 05 |
| Extra page | +2,000 | Add-on | Step 06 |
| Multilingual setup | +2,000 | Add-on | Step 06 |
| Image pack | +1,500 | Add-on | Step 06 |
| SEO setup | +1,500 | Add-on | Step 06 |
| Extra revision round | +1,500 | Add-on | Step 06 |

**Brand prep is priced by what is missing.** The four items sum to 4,000, which
is `PREP_MAX` in `index.html` and the flat fee TASK_005 originally proposed. A
client ticks what they already hold and the total comes down: 12,000 → 10,500 →
9,500 → 8,750 → 8,000. Verified against the build.

**Accepted knowingly:** brand prep at 4,000 will take some clients who would
otherwise have bought the 12,000 Brand Tool Kit. Simon's read — most of them
were a no otherwise — is probably right, but it is logged rather than
discovered in three months.

**Base includes:** one scrollable page, content sections, brand-aligned visuals, contact, desktop + mobile.

**Copy is priced once, in the configurator's copy step — not as an add-on.**
It was in both places and both were added to the total, so a client who said
they needed copy help and then ticked the add-on paid 2,000 twice for one job.
The add-on is gone; the copy step owns it and carries two tiers where the add-on
had one. Fixed 2026-08-26 — see `aios/DECISIONS.md`.

The prices themselves are unchanged: writing was 2,000 as an add-on and is 2,000
in the copy step. Editing at 1,000 is a tier the add-on never had, and it is one
of the placeholder numbers still awaiting your audit.

---

## Payment Terms

- 50% to start, 50% on delivery.
- Payment via Stripe. VAT (25% MOMS) added at checkout.
- Legal entity for invoicing: South North Studios AB.
- No retainer. No open-ended billing.
- Add-ons are the only flexibility on price. Base scope is fixed.

---

## Change Protocol

Prices do not change without explicit instruction from Filippos.

When a price changes:

1. Update this file first.
2. Update the matching value in `index.html` (configurator state).
3. Confirm no other file restates the number — they should reference this file, not copy it.
4. Note the change and date at the top.
