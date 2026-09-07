# TASK 007 — Incremental pricing on scope-changing answers

**Status: Proposed** · Simon's call, prepared 2026-08-20
**Depends on:** TASK 005 (the gate) — shares the same configurator logic.

---

## The problem

Four answers in the configurators change how much work the job is, and all four are currently free.

| Where | Answer | What it actually costs us |
|---|---|---|
| Website 03 | Design, build **and publish** | Domain, hosting, DNS, deploy, and the support call when it breaks |
| Website 05 | Rough copy | Someone edits it |
| Website 05 | Need help writing | Someone writes it — this is the +2,000 Copy support add-on, given away |
| Brand 05 | Within 2 weeks | Reordering the queue |

The last one is the sharpest. **"Need help writing" in step 05 is the same work as the "Copy support" add-on two steps later**, so a client can have it free by answering a question instead of ticking a box. That is not a pricing gap, it is a contradiction inside one form.

---

## What was added

```
PUBLISH     = 1,000    Website 03 · design, build and publish
ROUGH_COPY  = 1,000    Website 05 · copy exists, needs editing
WRITE_COPY  = 2,000    Website 05 · written from scratch
RUSH        = 1,000    Brand 05 · delivery inside 14 days
```

### ⚠ Every number is a placeholder

**None of these are in `PRICING.md`. They are Simon's "even if each addition only puts 1,000 on for now" — deliberately flat, to be argued with once you can both see it working.**

They live in one JS constant line at the top of the configurator script, plus the static pricing tables. `RUSH_DAYS = 14` is there too, and is a policy decision as much as a price.

### The one that is not flat

`WRITE_COPY = 2,000`, not 1,000 — because Copy support already costs 2,000 in `PRICING.md`. Anything lower and the same work has two prices on one page. If you move it, move both.

---

## Behaviour

**Publishing** — the option card carries `+1,000 SEK` and a note reading *Domain, hosting, deploy*. It itemises in the summary as "Publishing".

**Design only is deliberately not a discount.** It gained the note *"Same price. You get the files and a build spec."* Without it, adding a fee to publish reads as though the cheaper option should be cheaper. It should not — design is the work, publishing is the extra.

**Copy** — Rough copy adds 1,000, Need help writing adds 2,000, All copy ready adds nothing. "Not sure yet" also adds nothing and is the honest default; it gets priced at the enquiry.

**Rush** — Brand step 05. "Within 2 weeks" applies it. **"Specific date" calculates it** — if the chosen date is inside 14 days it applies automatically, and it un-applies if the client moves the date out. No hidden surcharge appearing after checkout.

Everything itemises in the order summary alongside the add-ons, feeds the mobile running total, and is carried into `startCheckout()`.

---

## The edits

Six, anchored, all in `index.html`:

1. **Constants + two helpers** — `sumPriced()` walks any set of named inputs and totals their `data-price`; `rushDue()` handles the date maths. Added above `updateBrandSummary()`.
2. **Website 03** — `data-price` and a price tag on "Design, build, publish"; the "Same price" note on "Design only".
3. **Website 05** — `data-price` on "Rough copy" and "Need help writing".
4. **`updateWebSummary()`** — totals the priced radios alongside the checkboxes.
5. **`updateBrandSummary()`** — same, plus the rush calculation.
6. **Both pricing tables and the Pricing page** — the four items listed openly, because a price the client only discovers inside the configurator is exactly the thing this business exists not to do.

---

## Verification

16 assertions in `price-test.js`, all passing:

- Publishing adds 1,000; design-only and design-and-build add nothing.
- Rough copy 1,000, writing 2,000, copy-ready nothing.
- Both itemise in the summary as separate lines.
- `startCheckout()` totals match the summary on both packages.
- Brand rush: no deadline and "within 1 month" add nothing, "within 2 weeks" adds 1,000.
- **A specific date 5 days out applies rush automatically. A date 60 days out does not.**
- Rush appears as its own line in the summary.

---

## Append to `aios/LOG.md`

Under **Product**:

> **Answers that change scope now carry a price.** (2026-08-20)
> Publishing, copy help and rush delivery were free inside the configurator while equivalent work was sold as add-ons. Trade-off: four more numbers on screen. Mitigated by showing all of them in the public pricing tables.
>
> **Design-only is not cheaper than design-and-build.** (2026-08-20)
> The design is the work. Stated on the option card so the publishing fee does not imply a discount that is not there. Trade-off: some clients will feel design-only should cost less. Better argued on the card than in an email.
>
> **Rush is 14 days, calculated from the date the client picks.** (2026-08-20)
> Not a manual judgement after the order lands. Trade-off: a client one day the wrong side of the line pays 1,000 more, and will notice.

## Add to `docs/OPEN_QUESTIONS.md`

> **The four incremental prices are placeholders.**
> Publishing, rough copy, writing and rush are all set flat at 1,000 (writing at 2,000, to match the existing Copy support add-on). None are in `PRICING.md`. They exist so the shape can be reviewed, not because the numbers are right. Blocking merge of TASK 007.

> **Is 14 days the right rush window, and is 1,000 the right fee?**
> Fourteen days is a guess. So is the fee. Both are one constant each.

---

## Next task

TASK 008 — upload case imagery to Cloudinary and swap the base64 sources.
