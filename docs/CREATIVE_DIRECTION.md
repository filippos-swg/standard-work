# Creative Direction — Standard Work™

---

## Design Philosophy

The site should behave like the service: no clutter, no confusion, no theatre, no false complexity.

It should feel like a precise productized design service: stark, useful, confident, and easy to buy from.

Not a generic SaaS landing page. Not a polished agency portfolio. Not a decorative brand moodboard.

---

## Visual System

### Colours

Every ratio below is measured against `--bg`, not estimated. Where two values
exist for one colour, the split is arithmetic and not taste — see the note under
the table.

| Token | Value | On `--bg` | Use |
|---|---|---|---|
| `--bg` | `#F2F0EA` | — | Page ground. **Shared with sillywizardsguild.com and seriouslywow.com by decision.** Never the thing that changes to tell the three sites apart |
| `--surface` | `#FFFFFF` | 1.14 | Panels and cards — they carry a 1.5px ink border, so the separation is the border, not the fill |
| `--surface-alt` | `#FEFAEC` | — | Alternating full-bleed sections. A *lift* off the ground, not a sink below it — the network's `--paper-lift` |
| `--greige` | `#D6CEC2` | 1.37 | Option chips, image placeholders, the summary price band. The network's warm secondary block |
| `--greige-deep` | `#C9C0B2` | — | The same block, hovered |
| `--text` | `#141414` | 16.17 | Primary text and strong borders |
| `--text-dim` | `#6E6C69` | 4.59 | Secondary text and mono labels |
| `--text-faint` | `#6E6C69` | 4.59 | **Collapsed into `--text-dim`.** It was `#AEADA9` at 1.97 — under even the 3.0 floor for non-text marks, on a token that only ever coloured 9–11px type. It was not a tier, it was invisible |
| `--ink-dim` | `rgba(20,20,20,.72)` | 5.84 *(on greige)* | Small type on `--greige`, where `--text-dim` is only 3.36 and fails |
| `--accent` | `#E84500` | 3.49 | The brand dot, the bands, and text **24px and above only** |
| `--accent-dark` | `#C03800` | 4.84 | The same orange, for text **below 24px** — every mono label, counter and tag |
| `--on-accent` | `#141414` | 4.63 *(on accent)* | Type that sits on the orange |
| `--on-ink` | `#F2F0EA` | 16.17 *(on ink)* | Type on the near-black surfaces. The paper, never `#FFFFFF` — nothing in the network is pure white, and white type on a dark band reads colder than the rest of the page |
| `--on-ink-dim` | `rgba(242,240,234,.62)` | 6.62 *(on ink)* | Subordinate lines on those surfaces |
| `--border` | `#141414` | — | Strong borders |
| `--border-light` | `rgba(20,20,20,.14)` | — | Dividers. Alpha rather than a flat hex so it inverts for free inside a token swap |

**One accent, two values.** `--accent` is 3.49 on the ground. AA wants 3.0 for
large text and non-text marks, which it passes, and 4.5 for small text, which it
does not. So `--accent` carries the mark and anything ≥24px; `--accent-dark`
carries everything below. Do not set `--accent` on small type, and do not use
`--accent-dark` as a ground. The Guild's `--red` / `--red-text` runs the same
rule at 3.11 / 4.81 — the same decision, reached from the same arithmetic.

**Type on the orange is black.** On `#E84500`: white 3.98, white@.75 2.80,
paper 3.49, ink 4.63. Ink is the only value that passes at any size, and the
bands are where the offer is stated. There is also **no dim tier on that
ground** — ink@.78 is 3.66 and ink@.72 is 3.37, both illegal. Where a second
voice is genuinely needed it is `--accent`, which the swap turns into paper.
Two polarities, both measured. Never an opacity.

### Typography

One display face per site, one body grotesk across the network — the same split
sillywizardsguild.com (Archivo) and seriouslywow.com (Source Serif 4) run on.
Outfit is Standard Work's, and it is the site's signature alongside the orange
and the radii.

| Use | Font | Weight | Token |
|---|---|---|---|
| Display / hero | Outfit | 900 | `--font-display` |
| Headings, prices, numerals, wordmark | Outfit | 700–800 | `--font-display` |
| Body, buttons, form controls | Inter | 400–700 | `--font` |
| Labels / metadata | JetBrains Mono | 500–600 | `--font-mono` |

Mono labels track at `--track-mono` (`.14em`), the network's value. **One
documented exception:** `.nav-link` stays at `.08em`, because the handover ships
an automated assertion that the nav does not overflow at three widths and
opening the tracking is exactly what would break it.

When the PP Neue Montreal licence lands it replaces `--font` on one line, as it
will on the other two sites.

**UnifrakturMaguntia is retired.** The blackletter stood in for a Guild
reference that had no lockup; it has one now, and seriouslywow.com dropped its
own blackletter for the same reason. Standard Work was the last site in the
network still setting the Guild's name in a face the Guild does not use.

### Layout Rules

- Left-aligned always. Centre bias is banned.
- Strong grid. Large type. Restrained lines.
- White panels float on the paper ground.
- `--max-w` is `1280px`, matching both sibling sites.
- **Rounded corners and pill CTAs stay.** The Guild and Seriously, Wow. are both
  square. Standard Work is the one you buy from, and it is the soft one — the
  radii are a signature, not a leftover. `--radius` / `--radius-sm`.
- Coloured full-bleed surfaces are **token swaps**, never forked rules:
  `.accent-block` and `.ink-block` redefine what the tokens mean and every child
  inherits. Nothing below them restyles a component. Same mechanism as the
  Guild's `.page-red` and Seriously Wow's `.band`.
- Dark sections (`.ink-block`) are for CTAs. **Not the footer** — see below.
- Orange sections for value blocks and step bars.
- No decorative elements unless they improve clarity.
- Cards only where elevation communicates hierarchy.

### The footer

The footer sits on the paper with a single hairline above it, the same as both
siblings. It ran on a near-black ground with white type at .35, .45 and .55 —
values that read as grey noise and that neither sibling has anywhere. A footer
is on every page of every site, so making it the same component across all three
is the cheapest family resemblance available.

It carries the network line: the Guild, and Seriously, Wow. as the sister
studio. Standard Work was the only one of the three that never linked its own
network.

---

## Component Behaviour

### Buttons
- Primary: ink fill, paper text, pill-shaped. Hover deepens to `--accent-dark`
- CTA: orange fill, **`--on-accent` (ink) text**, pill-shaped. `.btn` tops out at
  17px/700, under the 18.66px-bold threshold, so it is small text — white on the
  orange is 3.98 and fails. Hover **inverts** to an ink fill with orange type
  (4.63) rather than deepening the fill, which would drop the label to 3.34
- Secondary: transparent, dark border, dark text

### Option Cards (configurator)
- Unselected: `--greige` fill, no border, `--ink-dim` type
- Hover: `--greige-deep` fill, full ink type, 1px lift
- Selected: ink fill, `--on-ink` text, orange counter + status dot
- Counter: CSS-generated (01, 02, 03...), top-left, JetBrains Mono
- Status dot: top-right, hollow → solid orange when selected

### Step Bars
- Orange background, **`--on-accent` (ink) text** — 20px at the cap and 15px at
  the floor, small text either way, so white at 3.98 was never legal here
- 25px horizontal padding inside bar
- Number and title: same font, same size (Outfit 700)

### Order Summary
- Dark header bar (`--on-ink` type), white body, `--greige` price section whose
  rows take `--ink-dim`
- Live-updating via JS state
- Sticky on desktop, inline on mobile

---

## Copy Rules

### Use this kind of language
- Build a brand.
- Make a website.
- Choose what you need.
- Know what you want? Start now.
- Clear scope. Clear price. Clear output.
- Everything is defined before work begins.
- We don't sell exploration. We sell clearly defined outcomes.

### Never use
- Unlock / Elevate / Leverage / Empower / Seamless / Game-changing
- "In today's fast-paced world"
- Em-dash padding for rhythm
- Tri-colon flourishes
- Any generic agency or SaaS tone

### Voice
Direct. Plainspoken. Senior. Slightly sharp. Confident but not rude.

Sounds like a senior creative person who knows how to get useful work done.

---

## Brand Mark

- Nav logo: `SW.` with orange period dot
- Footer: `Standard Work.` with orange period dot
- Display: `STANDARD WORK™` uppercase in hero
- The orange period/dot is the consistent brand mark across sizes
