# TASK 008 — Copy, structure and the two anatomy diagrams

**Status: Proposed** · Simon's session, 22–24 August 2026
**Covers:** everything not already in TASK 004–007. Merge after those, or all together.

---

## Why this exists

TASK 004–007 documented the case studies, the brand gate, the mobile fixes and the incremental pricing. Everything below happened after those were written, across two working sessions with Simon reading the site page by page as a customer would.

It is around fifty edits. The list at the end is complete and exact. This section is the argument, so you can disagree with decisions rather than lines.

**Nothing here changes `PRICING.md` values or the configurator's existing logic.** New prices are all flagged placeholders, all in TASK 007 or noted below.

---

## 1 · The verb — the largest single change

**"Build a brand" and "Make a website" are imperatives aimed at the reader.** Grammatically they instruct the visitor to do the work. On a page that looks like a configurator, that reads as a self-serve tool.

Simon spotted it. The site had a whole homepage section — *"Not automated"* — whose only job was rebutting the fear that nobody was doing this by hand. **The buttons were what planted it.**

Every CTA is now **Order a brand** / **Order a website**. 38 instances, plus the homepage headline.

*Order* was chosen because the site already said it everywhere else: **"Customise your order"**, **"Your request"**. It names the transaction and, crucially, the actor. The client orders; Standard Work builds.

Knock-on: the orange panel read *"STANDARD WORK helps you: Order a brand"*, which is backwards — you don't help someone order. That panel was rebuilt (see §4). Its second item had the same DIY problem all along: *"Create a simple, well-designed website"*.

---

## 2 · Two CTAs that did nothing

```
#brand    btn-accent → navigate('brand')     "→ Build a brand"    no-op
#website  btn-accent → navigate('website')   "→ Make a website"   no-op
```

The loudest button on each product page navigated to the page it was already on. Invisible on desktop, where `.hero-cta-box` sits off to the right and reads as furniture. On mobile it stacks directly under the working CTA.

Both removed. Each rail now carries one outline button pointing at the *other* package — and the Website page's version now states the gate before the reader reaches the configurator: **"No brand yet? → Order a brand"**.

There is now an automated assertion across all eight views that no CTA navigates to its own page. It cannot come back.

---

## 3 · Nav

Nouns became verbs, and the two things you can buy separated from the five you can read.

- **Work** → **See the work**, matching the homepage button, so nav and button finally agree
- **Pricing** → **Fixed pricing** — a category becomes a claim, and it matches that page's own h1
- **Brand** and **Website** left the link row and became buttons: accent *Order a brand*, outline *Order a website*
- Mobile menu gains a rule and the same two buttons below it

Desktop pills hold to 900px and drop out below 860, where the hamburger takes over. Nav does not overflow at 1440, 1000 or 900.

---

## 4 · Homepage

**Order changed.** Proof moved above process, on Simon's call:

```
hero → what we do / don't → the work → the process → the services → behind the work → CTA
```

**Hero simplified** to kicker, wordmark, one sentence, two buttons. The three "No workshops / No long briefs / No inflated fees" lines and *"Just a small number of good decisions"* moved down into the orange panel.

**The orange panel is now two columns**, *What we do* and *What we don't*, both headed in black `h2` on the accent — the first use of black type on orange, and better contrast than the white it replaced (4.42:1 against 3.98:1). Weighted 3:2 so what you get outranks what you avoid. Closes on *"Just a small number of good decisions, executed properly."*

**The work section** was extracted from *Behind the work*, given its own headline and door, and moved to position three. Six client logos, each linking to its case. On white, so the marks have a clean ground.

**Services moved to orange**, white cards floating on it, headline in black. Two full-bleed accent sections on one page — see §9.

**Process block**: *Calm and predictable* → **How Standard Work works.** Button moved inside the right column under step 05, so it works at both widths with no desktop-only rule. Mobile gap between the paragraph and step 01 was 72px — the list carried a 32px top margin meant for the desktop column, landing on top of the grid gap. Now 30px.

**Behind the work**: *Not automated* → **Humans in the loop.** The section stops denying and starts claiming. It is also the site's only position on AI, and it is a better one: not *we don't use it* but *people are in it*.

---

## 5 · Product pages

Both were repetitive and, in places, contradictory. Simon read them line by line.

**Website hero rebuilt.** Kicker kept, *"Website for Your Business"* dropped, the old subhead promoted and tightened to **"Standard Work creates websites that represent what you do."** *Professional* removed — it was on the crutch list and doing no work in a headline. The line beneath it repeated the same claim and went.

**The dependency now states itself:**

> **To build your website we always start with your brand.** If you have a logo, a typeface, a colour palette and an imagery direction, we can start. If not, we build the brand first.

The four items are worded exactly as the configurator words them. If those three lists ever drift, someone reads one and ticks another.

**Brand hero:** **"Standard Work builds the brand tool kit your business needs to look coherent and credible."** Singular verb, matching the Website page.

**Both "What this is" blocks cut.** They repeated the hero, and two of each page's three "designed for" lines described everyone who has ever considered buying. What survived from the Website one is in the hero: *a finished website that does its job*.

What went from Brand, in case it is wanted back: *New businesses that need a solid starting point · Existing businesses that need a cleaner, more consistent brand · Individuals and freelancers who want to present themselves professionally*, and *"This is not brand strategy consulting."*

**The second receipt is gone.** Both pages carried a *Fixed pricing* block: base price, the entire add-on table again, payment terms again. The base price appeared **five times** on the Website page. Every word of it already existed on the Pricing page and in the live order summary. Cut from both.

The one thing that had to survive is **cancellation terms** — the only content in that block not said elsewhere on the page. It is now a link in the order summary, under the payment terms and above **Get started**, which is where someone actually wants it.

**Foot CTAs no longer promise an enquiry.** *"Configure above, then continue to the enquiry"* sat above a button that runs `startCheckout()`. It takes a card. Now: *"Configure above. You will see the full price before you pay."*

---

## 6 · The two anatomy diagrams

New, and the largest addition. Both are inline SVG drawn entirely in `:root` tokens — no images, no dependencies, roughly 7KB each, scaling to any width.

**Website page — the page anatomy.** One framed page divided into header, what you do, your offer, about, contact and footer, with the section names set inside the frame as placeholder headlines, the way a wireframe does. A narrower frame beside it shows the same six sections at mobile width, so *responsive* is demonstrated rather than claimed. Crossed boxes for image slots, LOGO in place, nav marks and a pill in the header.

**Your offer cycles between one, two and three cards** on a 10.5s loop. This is not decoration — it is the fix for a real problem. A fixed count promises a count, and *three* is a number clients remember. Cycling means the drawing never commits to one. Cards resize rather than appear, so the band height never moves. `prefers-reduced-motion` freezes it on three. Pure CSS.

**Brand page — the deliverable.** Six pages showing what is on each, then a folder showing what is in it. The folder is drawn as a folder, contents itemised on hairline rows with their own glyphs: logo as SVG and PNG, the typeface, an image pack, and an **editable** tone of voice document.

**The rule both diagrams obey: structure only, never design.** No colour, no typeface, no imagery, nothing that decides how a client's site or book will look. If a later edit makes these look like mockups, they stop being honest and start being a promise you would have to keep six times over.

---

## 7 · SEO, which was promised and did not exist

*What's not included* listed **"SEO optimisation (basic setup as add-on)"**. There was no such add-on — not in the configurator, not in the pricing tables, not in `PRICING.md`. The page offered something nobody could buy.

Simon's call: make it real.

**SEO setup, +1,500 SEK** (placeholder), in the configurator, both pricing tables, the live summary and the checkout total. It carries a scope line — *Titles, meta, sitemap, Search Console* — because an add-on called "SEO" with no boundary is an argument waiting to happen, and one client in ten will expect rankings.

The not-included line became **"Ongoing SEO and content marketing"**, which is the honest exclusion now setup is buyable.

---

## 8 · Brand prep is now priced per missing item

**This reverses the flat fee in TASK 005.** Simon's reasoning, and he is right: a client ticks a box saying they have their logo and the number does not move. That breaks *"price is always visible and always current"* in the one place it matters most, and it charges someone with three of four assets the same as someone with none.

Each asset now carries its own fix price, all placeholders:

| Missing | Placeholder |
|---|---|
| Logo | 1,500 |
| Typeface | 1,000 |
| Colour palette | 750 |
| Imagery direction | 750 |

Worst case is unchanged at 4,000. The card's price updates live as boxes are ticked, each asset shows what ticking it saves, and the summary and checkout both follow.

The three starting-point cards also gained notes, so the consequence is visible before scrolling: **The perfect starting point** · **Brand prep from +750 SEK if pieces are missing** · **We build the brand first**.

---

## 9 · Product names

The two products had four different names across the site. Now:

| Where | Brand | Website |
|---|---|---|
| Home cards | *We build the brand tool kit your business needs.* | *We create websites that represent your business.* |
| Product pages | **Basic Brand Tool Kit** | **One Page Website** |
| Pricing, order summary, gate panel, enquiry dropdown | **Brand Tool Kit** | **Website** |

Cards are a pitch, not a label, so sentences are right there. **The product pages and everything else still disagree** — *Basic* and *One Page* against the plain forms. One decision left, and it should be made before this merges, because the plain form is what appears on the order summary and therefore on the receipt.

---

## 10 · Copy audit, tiers 1 and 2

Sixteen edits from `COPY-AUDIT.md`, all applied:

- **Footer said © 2025.** Now self-setting from `new Date().getFullYear()`
- **How it works step 01** taught a "both" the configurator refuses → *"Start with the brand, or go straight to a website if you already have one."*
- **Contact dropdown** sold *Brand and Website* → *Brand first, website after*
- **The dependency** was stated once, loosely enough to accept anything → now names all four assets
- **Pricing** said *"launch and host upon request"* — the agency dance, reopening a door the configurator closed
- **STANDARD WORK in caps mid-paragraph** — five instances, all now *Standard Work*. The audit's count was right and my recount was wrong; found by reading the source rather than trusting a regex
- Two label-headlines fixed: *Base package* and *Clearly defined before work begins* → **No surprises later.**

`COPY-AUDIT.md` ships alongside this. Tiers 3 to 5 are **not** applied — "clear" still appears 19 times, "professional" 6, and the two strategic questions are open.

---

## 11 · Case pages restructured

**Rubs was swapped for Harry da BBQ.** Simon did not build the Rubs brand — that case was marketing material for an existing identity, so it never demonstrated brand-building. Harry is a naming job and a brand from nothing, and his guidelines cover all six items plus naming, merchandise, signage and livery.

**Every case is now six numbered slides plus extras**, one per item in the Brand Tool Kit, in the package's own words. *Against the package* is gone as a separate block — the slide is the item, and the line that was in that list is now the slide's caption.

**41 slots across six cases.** Four are filled with existing Lex Energy artwork as a worked example; the rest show a dashed *Slide to be made* placeholder, so the prototype doubles as the production checklist.

Simon is producing the artwork. `CASE-SLIDES-SPEC.md` and `SLIDE-CHECKLIST.md` ship with this and carry the format, naming convention and per-case audit.

**Do not merge the case pages until the artwork exists.** Everything else in this task is independent of it.

---

## Verification

**126 automated assertions across eight test files**, all passing:

| File | Covers |
|---|---|
| `gate-test` | the brand gate, all states |
| `prep-test` | per-item brand prep, live totals, checkout |
| `price-test` | incremental pricing, rush date calculation |
| `seo-test` | the SEO add-on end to end |
| `cta-test` | no self-navigating CTAs, on any view |
| `deadend-test` | gate exits at 1440 and 390 |
| `nav-test` | nav structure, tap targets, both widths |
| `strip-test` | logo strip, optical sizing, click-through |

Plus a 390px audit on every view: no horizontal overflow anywhere.

**Still needs a human:** a real Stripe transaction with add-ons selected, confirming the charged amount matches the summary.

---

## Append to `aios/LOG.md`

> **"Order" is the verb, not "Build" or "Make".** (2026-08-22)
> The old CTAs were imperatives aimed at the reader and implied self-serve on a page that looks like a configurator. Trade-off: "order" is transactional. Intended — the business is transactional, and the site already said "your order" everywhere else.
>
> **A hero rail never points at its own page.** (2026-08-22)
> Two accent CTAs were no-ops. Asserted in tests so it cannot return.
>
> **Proof sits above process on the homepage.** (2026-08-22)
> Work moved to position three. Trade-off: pricing sits deeper. Acceptable for a company nobody has heard of.
>
> **Both product pages show their output as a wireframe anatomy.** (2026-08-22)
> Structure only — no colour, type or imagery. Trade-off: less seductive than a mockup, but a mockup is a promise repeated on every job.
>
> **Brand prep is priced per missing asset, reversing the flat fee in TASK 005.** (2026-08-24)
> A flat fee did not respond to input, which breaks the live-price principle. Trade-off: four numbers instead of one.
>
> **SEO setup is a real add-on with a stated scope.** (2026-08-24)
> It was already promised in *What's not included* and did not exist. Trade-off: a seventh addition on the Website package.
>
> **Case pages show six standard slides, one per package item.** (2026-08-24)
> Same six objects on the Brand page, in the anatomy diagram and on every case. Trade-off: 43 slides of production before the section can ship.

## Add to `docs/OPEN_QUESTIONS.md`

> **What is each product actually called?**
> Four names are in play. The product pages say *Basic Brand Tool Kit* and *One Page Website*; the pricing page, order summary and enquiry form say *Brand Tool Kit* and *Website*. The plain form reaches the customer's receipt. Blocking merge of TASK 008.

> **Orange is now structural, not rationed.**
> `DECISIONS.md` says the accent is "rationed to CTAs, step bars, and the brand dot" because it is loud. The homepage now has two full-bleed orange sections. It works, but it reverses a written rule — confirm or restore.

> **Tap targets are 40px site-wide, against a 44px minimum.**
> Carried over from TASK 006 and still open. About five lines of media-query CSS, but it touches every page.

---

## Next task

TASK 009 — upload case imagery to Cloudinary and swap the base64 sources.

---

## Appendix · every edit, in build order

Each is anchored on an exact existing string in `index.html`. TASK 004–007 edits are included so the order is unambiguous when applying them together.

```
  1  CSS block appended to <style>
  2  desktop nav link
  3  mobile nav link
  4  work page block
  5  PAGES array
  6  navigate() reset
  7  showCase / setCase
  8  init deep-link
  9  gate + mobile CSS
 10  mobile total bar markup
 11  mobile total bar logic
 12  brand summary feeds the bar
 13  website step 01 inserted
 14  renumber 02 / Build &amp; publi
 15  renumber 03 / Platform preferen
 16  renumber 04 / Content status
 17  renumber 05 / Optional addition
 18  copy-support nudge
 19  summary rows
 20  summary buy/route split
 21  summary buy close
 22  home website card
 23  website hero requirement
 24  website page addon table
 25  pricing page addon table
 26  thank-you upsell
 27  updateWebSummary() + startCheckout() replaced
 28  website foot CTA ids
 29  brand page hero rail
 30  website page hero rail
 31  "Configure your brand →" -> "Get a price →" (2x)
 32  "Configure your website →" -> "Get a price →" (3x)
 33  pricing constants + helpers
 34  W03 publishing is priced
 35  W03 design-only is not a discount
 36  W04 Shopify removed
 37  W04 platform note
 38  W05 copy priced
 39  W05 copy priced
 40  B05 rush fee
 41  B05 rush on a specific date
 42  website total includes step answers
 43  brand total includes rush
 44  checkout carries both
 45  logo strip CSS
 46  goCase helper
 47  work section after the orange panel
 48  nav CSS
 49  desktop nav
 50  mobile nav
 51  "Build a brand" -> "Order a brand" (23x)
 52  "Make a website" -> "Order a website" (15x)
 53  copy: "Start building your brand.…"
 54  copy: "Start building your website.…"
 55  home accent block
 56  footer nav
 57  section labels "Pricing" -> "Fixed pricing" (3x)
 58  hero simplified
 59  do / don't panel
 60  do / don't CSS
 61  process headline
 62  process button moves below the steps
 63  process button lands under the list, inside the right column
 64  services section on orange
 65  services section closes
 66  process two-col gets a class instead of an inline gap
 67  process spacing CSS
 68  footer year
 69  footer year script
 70  how it works step 01
 71  contact dropdown
 72  website included-item dependency
 73  pricing page website blurb
 74  caps: "STANDARD WORK is designed to be ca…" (1x)
 75  caps: "on scope</h2><p class="body muted"…" (1x)
 76  caps: "STANDARD WORK is designed to be se…" (1x)
 77  caps: "STANDARD WORK is for people who va…" (1x)
 78  website hero rebuilt
 79  cut the What this is section
 80  anatomy CSS
 81  included list restored to full width
 82  anatomy diagram below the list
 83  SEO add-on in the configurator
 84  SEO row added to both add-on tables (2x)
 85  not-included line stops promising a phantom add-on
 86  cut the duplicate Fixed pricing block from 2 product pages
 87  cancellation link added to both order summaries (2x)
 88  "Base package" -> "All six, every time." (page-brand)
 89  "Base package" -> "All five, every time." (page-website)
 90  "Clearly defined before work begins." -> "No surprises later." (2x)
 91  "continue to the enquiry" -> price-before-you-pay (3x)
 92  brand hero headline
 93  brand deliverable diagram
 94  cut Brand's What-this-is block so What's included follows the hero
 95  "All five, every time." -> "One Page Website"
 96  "All six, every time." -> "Basic Brand Tool Kit"
 97  brand card headline + body
 98  website card headline + body
 99  humans in the loop
100  behind-the-work first line names the system
101  brand caveat off the website card
102  "Brand for Your Business" -> "Brand Tool Kit" (4x)
103  "Website for Your Business" -> "Website" (4x)
```

103 edits total.
