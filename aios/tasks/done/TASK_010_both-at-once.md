# TASK 010 — Brand and website in one order

**Status: Proposed** · raised 26 Aug
**Answers:** the `OPEN_QUESTIONS.md` item added by TASK 004 — *"No way to buy brand and website together."*

---

## How it surfaced

Simon showed the prototype to someone standing next to him. Within seconds, unprompted: **"What if I want to order a brand and a website at once?"**

He wasn't being clever. He read the headline.

> **Order a brand and website for your business** — homepage hero
>
> A structured way to build the brand and website for your business — footer

And then, in the order summary:

> Brand Tool Kit 12,000 SEK · Website 8,000 SEK · **Bought separately** — 20,000 SEK

The site adds the two together correctly and then explains you cannot buy it. **The promise is in the headline and the refusal is at the counter.** That is the defect, and it is worse than a missing feature because the site raises the expectation itself.

---

## What changes

Answering **Not yet** at step 01 of the Website configurator used to be a dead end that routed you to the Brand page. It is now a live choice:

| | |
|---|---|
| **Order both together** | 20,000 SEK · one order, one payment |
| **Start with the brand** | 12,000 SEK · website ordered separately later |

Choosing *both* swaps the order summary to a combined view — Brand Tool Kit, Website, any website additions, one total — and checkout submits a single transaction.

**The sequence does not change.** The brand is still built first and the website is still built from it. What is removed is the second transaction, not the dependency.

### ⚠ Nothing is discounted

`BUNDLE_ADJUST = 0`. Twelve plus eight is still twenty.

The friction being fixed is being made to buy twice, not the price. **If a bundle rate is ever agreed, it goes in that one constant** and every total, summary row and mobile bar follows automatically. A negative value renders as a discount line labelled *Together*.

Whether there should be a discount is Filippos's call, and it does not block this.

### Scope of the brand in a combined order

The website configurator still asks all six of its questions, so the site is properly specified.

**The brand goes in at base scope** — the six items, no add-ons. Naming, extra revision rounds and the rest stay a conversation. That is deliberate: nobody should buy naming from a checkbox they met four seconds ago, and the brand add-ons need a discussion the configurator cannot have.

---

## Copy that changed

The gate panel read as a refusal and now reads as a sequence:

| Was | Now |
|---|---|
| **You need a brand first.** | **The brand comes first.** |
| *We don't build websites without one. There is nothing to build from…* | *A website needs one to be built from, and a fixed scope has no room to invent one on the way. So the brand gets made first either way.* |
| **Bought separately** | **Two orders** |
| *Start with the brand. Order the website once it is delivered.* | *Brand first, website when it is delivered. Or order both together above.* |

The summary header now names what is actually in the order — *Brand Tool Kit + Website* rather than *Website*.

---

## Files

`index.html` only. One new CSS block, one choice inside the existing gate panel, one additional summary state, and four small JS functions. No new dependencies.

The Netlify checkout function is unchanged — it already accepts an arbitrary total and description, so a combined order needs nothing new server-side.

---

## Verification

All nine existing test files still pass. New assertions cover:

1. **Not yet** shows the choice rather than a dead end
2. Choosing **both** swaps the summary and hides the route panel
3. Website add-ons flow into the combined total — verified at 22,000 with a 2,000 add-on
4. Switching back to **brand first** restores the original route panel
5. **An existing brand** and **A Standard Work brand** are untouched by any of it

Worth checking by hand: a real Stripe transaction in both mode, confirming the charge and the description that reaches the receipt.

---

## Append to `DECISIONS.md`

> **Brand and website can be bought in one order.** (2026-08-26)
> The homepage promised it and the configurator refused it. Both are now sold together at the sum of their prices, with no discount, and the brand-first sequence is unchanged. Trade-off: a combined order takes the brand at base scope, because its add-ons need a conversation the configurator cannot have.

## Remove from `OPEN_QUESTIONS.md`

The item **"No way to buy brand and website together."** Answered by this task.

## Add to `OPEN_QUESTIONS.md`

> **Should buying both carry a discount?** `BUNDLE_ADJUST` is currently 0 — one transaction, full price. A bundle rate would strengthen the upsell the gate already pushes people toward, but it needs a number and a view on whether it cannibalises the two separate sales.
