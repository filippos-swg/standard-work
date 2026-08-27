# Fix list — Harry and 90110

**Closed 25 Aug. All eight fixes verified in the exported files.**

All sixteen frames now export at exactly 2400 × 1350. The hug is solved — nothing needed cropping on the way into the build for the first time.

## Still outstanding

**Nothing. All eight done, verified 25 Aug.**

## Done

- All four hugging frames now fixed at 2400 × 1350 ✅
- `90110-02-logo` kicker 01 → **02** ✅
- `90110-04-colour` CG06 `#2C2C2C` → **`#ABABAB`** ✅
- `90110-05-imagery` white block filled — the snow and tram shot ✅
- `harry-06-voice` *"cheeky & tasty and"* → *"cheeky and tasty, so"* ✅
- `harry-06-voice` *"thats"* → **"that's"** ✅
- `90110-05-imagery` kicker `COLOUR` → **IMAGERY** ✅

Sixteen frames, all at exactly 2400 x 1350, all kickers correct, no content errors outstanding.

**One note for the next four cases.** `90110-05` was corrected in Figma before I flagged it, but the export had not been written out — the file on disk was still yesterday's. Worth knowing the failure mode: the fix looks done on screen and is not done in the folder. Checking the file's timestamp after export catches it.

---

# Original list, for reference

Measured from the files in `case-slides/` on 24 Aug. One row per frame. Blank means nothing to do.

**Eight real fixes across sixteen frames.** Four of them are the same fix.

---

## Do this once, first

Four frames are set to **hug contents** instead of a fixed size. A hugging frame resizes itself whenever you move something inside it, which is why the same slide exported at three different sizes across three exports — and why one of them grew past its own artwork and left a black band.

Per frame:

1. Select the **frame** — click its name in the layers panel, not the photo inside it
2. Right-hand panel: the **W** and **H** fields each have a small dropdown beside them
3. Set both to **Fixed**
4. Type **2400** and **1350**
5. Tick **Clip content** just below

All four are photo collages. Whatever those layouts share is what's carrying the auto-layout — worth finding, because the remaining four cases will inherit it.

Fastest route: fix one, make it a component, build the rest from that.

---

## Harry da BBQ

| Frame | Fix |
|---|---|
| `harry-01-direction` | — |
| `harry-02-logo` | *(mark — parked)* |
| `harry-03-type` | — |
| `harry-04-colour` | *(mark — parked)* |
| `harry-05-imagery` | **1 · Frame hugging.** Exports at 2442 × 1397. It has grown past its artwork and left a **24px black band along the top edge**. Set fixed 2400 × 1350, tick Clip content. *(mark — parked)* |
| `harry-06-voice` | **2 · Typo.** *"into conversation thats O-fuckin'-K"* → **that's**.<br>**3 · Same sentence:** *"cheeky & tasty and if you feel like"* — an ampersand and an "and" three words apart. Lose one. |
| `harry-07-naming` | **4 · Frame hugging.** Exports at 2416 × 1371. Set fixed 2400 × 1350, tick Clip content. *(mark — parked)* |
| `harry-08-merch` | *(mark — parked)* |
| `harry-09-signage` | *(mark — parked)* |

---

## 90110

| Frame | Fix |
|---|---|
| `90110-01-direction` | — |
| `90110-02-logo` | **5 · Kicker is numbered `01`.** Should be **02**. |
| `90110-03-type` | — |
| `90110-04-colour` | **6 · CG06 is labelled `#2C2C2C`.** R:171 G:171 B:171 is **`#ABABAB`**. `#2C2C2C` is CG08's value, copied down a column. *(mark — parked)* |
| `90110-05-imagery` | **7 · Kicker label reads `COLOUR`.** Should be **IMAGERY**.<br>**8 · Empty white block** filling the bottom-right quarter — the same gap Harry's first draft had before the brisket went in.<br>**Frame hugging** — exports at 2400 × 1474. *(mark — parked)* |
| `90110-06-voice` | *(mark — parked)* |
| `90110-07-merch` | **Frame hugging** — exports at 2419 × 1437. *(mark — parked)* |

---

## Ranked, if you only do some

**Fix regardless:** `90110-04-colour`. Everywhere else a wrong label is embarrassing. On the palette slide the label *is* the deliverable — someone pastes `#2C2C2C` expecting mid-grey and gets charcoal.

**Then the two kicker errors** on `90110-02` and `90110-05`. Cheap, and they are the kind of error a proofread slides past because the eye reads the word it expects.

**Then the four frames.** Not visible on the page today — the build detects the black band, trims it and centre-crops — but that is the build covering for the files, and it will not always guess correctly.

**Then Harry's typo.** Small anywhere else. On the slide selling the copywriting, it is the one place it can't be.

---

## The SW mark — parked, listed for completeness

Not a task. Logged so the state is known.

**Harry:** absent from 02, 04, 05 and 07. Present but black-on-black on 08 and 09 — only the orange dot survives.

**90110:** simply absent from 04, 05, 06 and 07. Different problem from Harry's — nothing to reverse, it just isn't on those frames.

When it is picked up: white files are at `2. Brand ID / sw-logo / sw-logo-white.svg` and `sw-logo-reversed.svg`. Settle at the same time whether the mark belongs on full-bleed photography at all — on Harry 05 and 07 there is nowhere clean to put it.

---

## Watch for these on the next four cases

Both errors so far were **numbering and labelling**, not craft:

- Harry's first batch had every slide numbered `02`
- 90110 has `02` numbered `01`, and `05` labelled `COLOUR`

Every one came from duplicating a frame and not finishing the edit. Worth a deliberate pass reading only the kickers, left to right, before each export.
