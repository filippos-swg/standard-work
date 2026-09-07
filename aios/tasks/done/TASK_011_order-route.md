# TASK 011 — One Order button, three things to order

**Status: Proposed** · 26 Aug
**Follows:** TASK 010, which made brand + website purchasable but left it findable only by first declaring you had no brand.

---

## The problem

TASK 010 built the combined order and hid it. To reach it you had to answer *"Not yet"* to *"Do you have a brand?"* — so someone whose actual thought is **"I want both"** never arrived, because they were never asked that question.

Simon, looking for it: *"I don't see the button to click to order both."* Which was the whole finding.

The site sells three things from a nav that offers two.

## Why not just add a third nav button

Measured. At 900px the nav already occupies **696px of 860px** of usable width. A third button is roughly 170px, so it overflows at 1000px and below, before the hamburger takes over.

## What changed instead

**The nav stops being a product menu.** Two buttons become one:

    → Order

which scrolls to the services section. Desktop and mobile menu both.

Nav width drops from **696px to 521px**, and it no longer changes with viewport — the same single button at 1440 and at 880. Verified at five widths, no overflow.

**The services section becomes the chooser.** A third card joins Brand and Website:

| Card | Price | Action |
|---|---|---|
| Brand | From 12,000 SEK | Order a brand |
| Website | From 8,000 SEK | Order a website |
| **Brand + Website** | **From 20,000 SEK** | **Order both** |

*Both, in one order. We build the brand first, then the website from it. Same sequence, one payment.*

Outlined in accent, because it is the option the dependency gate already pushes people towards.

**The accent moved rather than multiplied.** Simon: *"the order both button should be in orange as it is the money maker and most likely scenario."* `DECISIONS.md` rations the accent, so rather than adding a third orange button, the one that was already on *Order a brand* moved onto *Order both*. Exactly one accent per cluster, verified across all seven hero boxes and the services grid — the money-maker leads and nothing else competes with it.

It appears in **ten CTA clusters** — seven hero boxes and three foot rows — not just the ones anyone happened to look at. The build walks the finished page and fixes every cluster offering brand or website as a class, so any CTA added later inherits it. Two are visible on every one of the seven views.

**Order both** navigates to the website page and puts the configurator straight into combined mode, summary already reading 20,000 SEK. No question to answer first.

## Why this shape

The nav is a **door**; the services section is the **decision**. That separation is what makes it scale: a fourth thing to order is a fourth card and no nav change at all.

Simon: *"this could become a shopping list in the future, e.g. Order Merch."* The structure now allows that without another argument about button widths.

The grid is `repeat(auto-fit,minmax(280px,1fr))`, so three cards become two and then one as the viewport narrows. Adding a fourth needs no CSS.

---

## Also in this build: the colour splash

The homepage logo row rests as five black marks and blooms into each brand's own colour on hover. Built as a variant on 26 Aug and now the default — Simon: *"the colour splash behind the logo was a keeper."*

Grounds and mark colours are sampled from each case hero, so hovering a mark and opening its case are continuous. No new bandwidth: the coloured marks are the same artwork recoloured at build time. Touch devices get the colour as the resting state; `prefers-reduced-motion` keeps colour and drops the transition.

`LOGOS_PLAIN=1` at build time restores the original grey-hover strip if it is ever wanted back.

---

## Verification

Nine existing test files pass. Nav checked at 1440, 1200, 1000, 900 and 880 — one button, no overflow at any width. The route was walked end to end: **Order** lands on services, **Order both** arrives on the website page in combined mode with the correct total. No JS errors.

## Append to `DECISIONS.md`

> **The nav is a door, not a product menu.** (2026-08-26)
> Two product buttons became one **Order** that scrolls to the services section, and the services section became the three-way chooser. Trade-off: one more click to reach a specific product from the nav. Accepted, because a third nav button did not fit at 1000px and the two-button pattern could not survive a third product — let alone a fourth.
