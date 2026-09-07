# Fix list — Lex Energy

Eight slides in, all at exactly 2400 × 1350, all frames clean. **300 KB for the set.** No hugging, no bands, nothing needed cropping — first case to arrive with zero geometry problems.

Wired in as case **04**, appended after Harry, 90110 and Eddy so nothing Filippos already has gets renumbered.

---

## Three things to fix

### 1 · Two slides are both numbered 07

`lex-07-merch` and `lex-07-stripe` both carry `07 / LEX ENERGY /` in the kicker. The second should be **08**.

The build maps them to slots 7 and 8 by filename order, so the page is right — but the numeral inside the artwork is wrong on the second one, and that is the version a client sees in the PDF.

### 2 · `lex-04-colour` — the first swatch is labelled Black and is White

| Swatch | Label says | Values say |
|---|---|---|
| 1 | **Black** | R:255 G:255 B:255 · `#FFFFFF` — that is **White** |
| 2 | Lex Lime | R:219 G:254 B:107 · `#DBFE6B` ✓ |
| 3 | Grey | R:193 G:196 B:198 · `#C1C4C6` ✓ |
| 4 | Black | R:30 G:30 B:30 · `#1E1E1E` ✓ |

Black appears twice, and the first one is white. The numbers are right; only the name is wrong.

**This is the fourth colour slide in a row with an error** — 90110's CG06 hex, Eddy's two scrambled RGB columns and the letter-O hex, now this. Every other slide type has been clean. Worth a rule: the palette slide gets read twice, once for design and once for the values, before it leaves Figma.

### 3 · Filenames are `lex-` not `lex-energy-`

Every other case matches its slug. The build maps by position so nothing broke, but it will confuse anyone matching files to cases by name later. Rename when convenient — nothing depends on it today.

---

## One decision, not a fault

**There is no Website slide.** The checklist had Lex at seven slides with the website marked *exists*; what arrived is Merchandise and Vehicle livery instead, which are both good and neither was planned.

That matters because **Lex was the case that proved the Website package.** Harry, 90110 and Eddy are all brand-only. Sebratec now counts too, but its slides are not made. So as it stands the site sells two products and shows finished evidence for one.

The claim itself survives — the case meta still reads *Brand · Website* and the intro says the two were built together — but there is nothing to look at.

Three options:

1. **Make the website slide.** One slide, and it closes the gap on its own.
2. **Do it on Sebratec instead** when that batch comes, since that case now carries a website too.
3. **Drop the Website extra from Lex** and let the meta carry the claim. Cheapest, weakest.

The prototype currently has the Website extra listed as slot 09 with a *Slide to be made* placeholder, so the gap is visible rather than hidden. That cannot ship to Filippos as it stands — pick one of the three first.

---

## Copy changed to match the artwork

The case said Typography was **"A mono family."** The slide specifies **Future Thin, Future Medium and Urbanist Extra Light** — two families, neither described as mono. Rewritten to:

> Future for headlines and subheads, Urbanist for everything else. Technical, even, readable at distance.

Two new captions written for the extras, both in the Standard Work register:

- **Merchandise** — A tee and a shell jacket. The dot-matrix mark at chest size and at cuff size.
- **Vehicle livery** — The mark run as a dot field down the flank. Lex Lime doing the work at forty metres.

Change either if they are not right; one line each.
