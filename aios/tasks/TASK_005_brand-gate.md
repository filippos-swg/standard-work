# TASK 005 — The brand dependency gate

**Status: Proposed** · Simon's rule, prepared 2026-08-20
**Supersedes:** the open question added by TASK 004 about buying brand and website together. There is no bundle, and there should not be one. There is a sequence.

---

## The rule

Simon, in his words:

> A customer can request a brand package, then we can upsell to a website design and build.
> Or if they already have a previous brand package and want a new website they can order one.
> What we won't do is build a website for a customer that doesn't have an existing brand playbook, as we have nothing to build from.

The site does not currently say this anywhere, and the configurator does not enforce it.

**This is live money.** Stripe checkout is on. The Website configurator asks nothing about whether a brand exists. Today, someone with nothing can configure a site, pay 8,000 SEK, and arrive in the inbox as a project that cannot be started. That is a refund.

---

## What counts as a brand

Four assets. Not a quality judgement — an inputs check. However good or bad the brand is, these four are what a website gets built from:

| Asset | Accepted as |
|---|---|
| Logo | SVG, EPS, AI or PDF. PNG at 2000px or larger |
| Typeface | The font, **with a web licence** |
| Colour palette | Hex values |
| Imagery direction | Written down |

They are items 2, 3, 4 and 5 of the Brand base package. The two not required — Brand direction and Tone of voice — are the ones that are thinking rather than assets. The site says this out loud, because it makes the upsell arithmetic rather than a pitch: *a website needs four of the six things in the brand package.*

**Three catches the raw list does not cover, all handled in the build:**

1. **Font licensing.** A desktop licence does not cover webfont embedding. Client supplies their brand typeface, it cannot legally be served, and a substitute is now being chosen inside a fixed scope with no room for brand decisions. The checklist item reads "Typeface — with a web licence" for this reason. Do not shorten it.
2. **Imagery direction is not imagery.** A defined direction and zero usable photographs is a common state. A note under the checklist points at the existing Image pack add-on, so it prompts itself at the right moment instead of surfacing after the invoice.
3. **Tone of voice and Copy support.** Copy support at +2,000 with no agreed tone of voice means writing in a voice nobody signed off. That add-on now carries the note "Needs a tone of voice to write against".

---

## Behaviour

Step 01 of the Website configurator. Three defined choices, in the site's existing option-card pattern.

| Starting point | What happens |
|---|---|
| **A Standard Work brand** | Proceeds. No checklist — we already hold the files. |
| **An existing brand** | Reveals the four-item checklist. |
| **Not yet** | Routes to the brand package. |

**All four ticked** → gate closes, normal checkout, 8,000 SEK.

**Any missing** → a Brand prep panel appears, naming exactly what is missing and exactly what gets done about it, generated from the unticked boxes:

> *Brand prep covers the rest: the palette extended for screen and contrast checked, the imagery direction written down. Fixed price, defined scope, no exploration.*

The add-on is pre-selected and the total updates live. Unticking it is allowed, and produces a plain warning that the client will need to supply the missing items before work can start.

**Not yet** → two things change. The panel itself carries the actions — **→ Build a brand** and **Ask us about it →** — so the reader never has to find the summary rail, which on mobile sits a thousand pixels below. And the order summary swaps out. Checkout is replaced by Brand 12,000 and Website 8,000 shown as two line items, totalled as "Bought separately", with **Start with the brand →** as the primary action and **Ask us about it →** as the secondary.

### Soft route, deliberately

Nothing hard-blocks. There is no error state, no disabled button, no dead end. The client can always reach a human. They just cannot pay 8,000 SEK for something that cannot be built.

The dark CTA at the foot of the Website page swaps too. Left alone it reads "Start building your website / Configure your website →" and scrolls the client back into a configurator they cannot finish. Under the gate it becomes "Start with the brand." and goes where it says. It reverts the moment the gate clears.

Steps 02–06 stay visible and usable under the "Not yet" panel. That is a decision, not an oversight: someone being told to spend 12,000 first should be able to see exactly what the 8,000 buys, or the total reads as a shakedown rather than a sequence. If you disagree, collapsing them is a two-line change.

---

## Brand prep

A **conditional add-on on the Website package**, not a third product.

That matters. "Two fixed-scope packages only" is a logged decision in `DECISIONS.md`. A third card on the homepage reverses it and invites a fourth. As an add-on that surfaces only when the checklist finds a gap, it adds nothing to the homepage and nothing to the nav.

Scope is fixed, and each item maps to one checklist failure:

| Missing | Brand prep delivers |
|---|---|
| Logo | Redrawn to vector |
| Typeface | A licensed web equivalent |
| Colour palette | Extended for screen, contrast checked |
| Imagery direction | Written down |

Flat fee whatever is missing, rather than per item. Simpler configurator, and it is generous in the worst case, which reads well.

### ⚠ The price is a placeholder

**`PREP_PRICE = 4000` in the prototype is invented. It is not in `PRICING.md` and it is Filippos's call.**

It appears in exactly one place — a single JS constant at the top of the configurator script — plus the two static add-on tables. Change the constant and both tables and it is done.

Reasoning for the band, take it or leave it: existing add-ons run 1,500 to 3,000 and this is bigger than all of them. It has to sit clearly under 12,000 or nobody buys the brand package. Somewhere around 3,000–5,000 keeps the choice legible — patch what you have, or build it properly for 12,000.

**Accept this trade-off consciously:** some people who would have bought the 12,000 brand will take the prep instead. Probably worth it, since most of them were a "no" otherwise. Better logged now than discovered in three months.

---

## The edits

Seventeen, all anchored on exact existing strings, all in `index.html`. They are applied in `build.py` and visible in the prototype. In order:

0. **Website foot CTA** — ids added to its heading, paragraph and button so the gate can swap them.
1. **CSS** — three rules appended: `.opt-note`, its checked state, and `.gate-panel`. Tokens only.
2. **Step 01** — the whole new block inserted before "01 / Website type".
3. **Renumber** — the five existing website steps become 02 to 06.
4. **Copy support** — tone-of-voice note added to the add-on card.
5. **Summary** — Start and Assets rows added above Type.
6. **Summary** — existing price section, note and CTA wrapped in `<div id="ws-buy">`; `<div id="ws-route">` added after it.
7. **Homepage** — Website service card gains "Requires a brand. Yours or ours."
8. **Website hero** — gains "It needs a brand to build from. Yours or ours."
9. **Website page add-on table** — Brand prep row.
10. **Pricing page add-on table** — Brand prep row, plus a paragraph stating the four requirements.
11. **Thank-you page** — a secondary upsell block. Outline button, not accent, so it does not compete with the primary action. This is the highest-intent screen on the site and it currently sells nothing.
12. **`updateWebSummary()`** — replaced. Handles the gate, the checklist, the prep add-on, and the summary swap.
13. **`startCheckout()`** — replaced. Adds `PREP_PRICE` to the website total when prep is selected. **Without this, prep is shown in the summary and never charged.**

---

## `PRICING.md` changes

Under **Website for Your Business**, add:

| Item | Price (SEK) | Type |
|---|---|---|
| Brand prep | +TBD | Add-on |

And under the base-includes line, add:

> **Requires:** logo, typeface with web licence, colour palette, imagery direction. Supplied by the client, by a Standard Work brand package, or by the Brand prep add-on.

Follow the change protocol in that file: this file first, then `index.html`, then confirm nothing else restates the number.

---

## Append to `aios/DECISIONS.md`

Under **Product**:

> **A website cannot be bought without a brand.** (2026-08-20)
> Four assets are required — logo, typeface with web licence, colour palette, imagery direction. Nothing gets built from nothing, and a fixed scope has no room to invent a brand on the way. Trade-off: turns away website-only buyers at the point of sale. Intended — they were a refund otherwise.
>
> **No brand-and-website bundle. A sequence instead.** (2026-08-20)
> Brand first, website upsold after, or website alone for clients who already hold the four assets. Trade-off: no single-transaction path for someone who wants both. Accepted, because the work genuinely cannot run in parallel.
>
> **Brand prep is a conditional add-on, not a third package.** (2026-08-20)
> Fixed price, fixed scope, four defined fixes, surfacing only when the asset checklist finds a gap. Trade-off: some clients who would have bought the 12,000 brand will take prep instead.
>
> **The gate routes, it does not block.** (2026-08-20)
> No error states and no disabled buttons. A client who fails the checklist is shown the brand package and a way to ask a human. Trade-off: a determined client can still enquire for something we will decline. Cheaper than a hard block that reads as rude.

## `docs/OPEN_QUESTIONS.md`

**Remove** the item TASK 004 added about buying brand and website together — answered above.

**Add:**

> **What does Brand prep cost?**
> The add-on is built and behaves correctly, but the price in `index.html` is a placeholder (4,000 SEK) and is not in `PRICING.md`. It must sit clearly under the 12,000 brand package or it cannibalises it, and above the 3,000 top add-on or it is not worth doing. Blocking merge of TASK 005.

---

## Verification

Automated, all passing in the prototype (32 assertions in `gate-test.js`, 20 more in `deadend-test.js`):

1. Nothing selected → gate hidden, checkout available, 8,000 SEK.
2. Standard Work brand → checklist hidden, gate hidden, 8,000 SEK.
3. Existing brand, none ticked → checklist shown, prep panel shown and pre-ticked, "0 of 4", all four fixes named, total 12,000 SEK.
4. Two ticked → "2 of 4", two fixes named, total still 12,000 SEK.
5. All four ticked → gate closes, prep unticks itself, total returns to 8,000 SEK, summary reads "4 of 4 ready".
6. Decline prep → warning appears, total drops to 8,000, offer stays on screen.
7. Not yet → brand-first panel, checklist hidden, checkout hidden, route panel shown, CTA reads "Start with the brand".
8. `startCheckout()` total carries the prep fee.
9. Brand configurator untouched — 12,000 + naming = 15,000.
10. Steps read 01 to 06 in order.
11. Under "Not yet", the panel's own CTA reaches the brand page — at 1440px and at 640px.
12. The foot CTA swaps under the gate, navigates to brand, and reverts to its scroll behaviour when the gate clears.

Manual, still needed before merge:

- Real Stripe checkout with prep selected, confirming the charged amount matches the summary.
- 640px and 960px — the checklist grid and gate panel both stack. Screenshot supplied.

---

## One unrelated thing found on the way

The static HTML renders prices as **8,000 SEK** (comma) and the JS re-renders them as **8 000 SEK** (`sv-SE`, non-breaking space). So the number visibly changes format the first time a user touches a configurator control. It exists on `main` today, on both packages, and is not caused by these edits. Half a line to fix, whichever way you want it to read.

---

## Next task

TASK 006 — mobile fixes and two dead CTAs (found reviewing this on a phone).
