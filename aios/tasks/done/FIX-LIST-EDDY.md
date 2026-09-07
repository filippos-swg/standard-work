# Fix list — Eddy

**Re-measured 25 Aug, 12:53. Four of five closed. Three small things left.**

## Done ✅

- `eddy-03-type` — **`01 / 90110 / TYPE`** → **`03 / EDDY / TYPE`**
- `eddy-02-logo` — numbered **01** → **02**
- `eddy-04-colour` — Blurple RGB 232,160,170 → **43, 54, 234**
- `eddy-04-colour` — Cream RGB 44,44,44 → **255, 251, 219**
- `eddy-04-colour` — Pitch hex **`#OCOA09`** → **`#0C0A09`** (real zeros)
- `eddy-06-voice` and `eddy-07-merch` frames now fixed at 2400 x 1350

## Left over

**1 · `eddy-05-imagery` still exports at 2408 x 1350.** The extra 8px is a **pure black strip down the right edge** where the frame overhangs the artwork. Last hugging frame in the set. The build trims it, so the page is right, but it is the file that is wrong.

**2 · `eddy-04-colour` — Blurple's green is one out.** The slide reads **G:54**; `#2B35EA` is **43, 53, 234**. Hex `35` is 53 decimal.

Pedantic anywhere else. On the palette slide the hex and the RGB now contradict each other by a digit, and both are presented as the deliverable. Whichever is the true value, they should agree.

**3 · `eddy-02-logo` — missing a space.** The kicker reads `02/ EDDY / LOGO`; every other slide reads `01 / EDDY`, `03 / EDDY`. One space before the slash.

## Not a fix, an observation

`eddy-06-voice` — the six attributes are still cream on pink, and still the lowest-contrast text in the set. Legible now that I look at it at full size, gone at mobile width. The headline carries the slide either way, so this is a judgement call rather than a defect. Leaving it as noted, not as a task.

---

# Original list, for reference

## 1 · `eddy-03-type` — wrong brand name

Kicker reads **`01 / 90110 / TYPE`**.

Should be **`03 / EDDY / TYPE`**. Two errors in one line: the number, and 90110's name left behind from the frame it was duplicated off.

This is the worst error in either batch so far. A slide selling Eddy's brand with another client's name on it is not a typo, it is a credibility problem — and it is the sort of thing a client spots instantly in their own guidelines.

## 2 · `eddy-02-logo` — wrong number

Kicker reads **`01`**. Should be **`02`**.

Third time this exact error has appeared: Harry's first batch, 90110's logo slide, now Eddy's. Always the logo slide, always numbered 01. It is being duplicated off the direction frame.

## 3 · `eddy-04-colour` — Blurple's RGB is Peach's

| Swatch | Slide says | Actually is |
|---|---|---|
| **Blurple** | R:232 G:160 B:170 | **R:43 G:53 B:234** |
| Peach | R:232 G:160 B:170 | correct |
| **Cream** | R:44 G:44 B:44 | **R:255 G:251 B:219** |
| Pitch | R:12 G:10 B:9 | correct |

Blurple carries Peach's numbers. Cream carries something else entirely — 44,44,44 is a dark grey, not a cream. Both hex values are right; only the RGB triplets are wrong, so the error is in one column.

Sampled straight from the artwork, so the "actually is" column is what the swatches really are.

## 4 · `eddy-04-colour` — Pitch's hex has letter O's in it

Reads **`#OCOA09`**. Should be **`#0C0A09`** — zero, C, zero, A, zero, nine.

Two capital O's typed where zeros belong. Paste `#OCOA09` into Figma and it rejects it. Worth checking the other cases for the same slip, because in Urbanist the two glyphs are close enough to read past.

## 5 · Three frames hugging again

| File | Exports at |
|---|---|
| `eddy-05-imagery` | 2419 × 1362 — **black band along the top** |
| `eddy-06-voice` | 2408 × 1350 |
| `eddy-07-merch` | 2400 × 1353 |

Fixed in Harry and 90110, back again here. These frames were built before that fix, or built off a copy of the old ones. Same remedy: select the frame, set **W** and **H** to **Fixed**, type 2400 and 1350, tick **Clip content**.

---

## Worth saying

Every error in this batch is a **duplicate-and-forget**: a frame copied from a neighbour or from another case, with one field left unedited. None is a craft problem. All five would be caught by one pass that reads only the kicker line and only the numbers, ignoring the design entirely.

The colour slide has now produced an error in **all three cases** — 90110's CG06 hex, and two here. It is the densest slide in the set and the only one where the text is the deliverable rather than a label. It deserves its own check every time.

---

## Also worth a look, not errors

**`eddy-06-voice`** — the six attributes on the right are cream on pink at small size. It is the lowest-contrast text in any slide so far and it is gone at mobile width. The headline carries the slide, so nothing breaks, but that copy is currently decoration.
