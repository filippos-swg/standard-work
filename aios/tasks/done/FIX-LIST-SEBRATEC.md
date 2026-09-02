# Fix list — Sebratec

Seven slides in, all exactly 2400 × 1350, clean frames, correct filenames, kickers 01–07 in order. **271 KB.** Second clean batch running.

Wired in as case **05**. Five cases now live, no placeholders anywhere in the prototype.

---

## One fix

### `sebratec-04-colour` — Aubergine's hex has an extra zero

Reads **`#580003F`**. That is seven characters; a hex colour has six.

`R:88 G:0 B:63` is **`#58003F`**. One zero too many, and it will be rejected by every colour picker it is pasted into.

Everything else on that slide is correct — Cerise `#C6006B`, Moss `#929029`, Tea `#DAE468`, Mushroom `#FDF2C4`, Tang `#FF9202` all check out against their RGB.

---

## The colour slide is now five for five

| Case | What went wrong |
|---|---|
| 90110 | CG06 labelled `#2C2C2C`, should be `#ABABAB` — copied from CG08 |
| Eddy | Blurple and Cream carrying the wrong RGB columns |
| Eddy | Pitch hex typed with letter O's: `#OCOA09` |
| Lex Energy | First swatch labelled Black, values were White |
| Sebratec | Aubergine hex one character too long |

**Every other slide type has been clean.** Direction, logo, type, imagery, voice, merch, livery — thirty-eight slides, no errors.

It is not carelessness, it is the slide's shape: six columns of small numbers that all look alike, where the design reads as finished long before the values do. The eye checks the swatches and skips the digits.

Two things that would stop it happening a sixth time:

1. **Read the palette slide twice** — once for the design, once for the values only, ignoring everything else.
2. **Paste every hex back into Figma** before export. A wrong one either fails or comes back the wrong colour. Takes a minute for six.

---

## Copy updated to match the artwork

The case data said Typography was *"One family across everything"* with no name, and the palette was *"Plum, magenta and orange."* The slides name both properly, so:

> **Typography** — Il Vorkurs. Bold, Medium and Light. One family across everything, from a proposal to a phone screen.
>
> **Colour palette** — Six named colours from Aubergine to Tang, with a gradient built into the system.

And the merch slide was not in the plan, so it needed a caption:

> **Merchandise** — Outerwear in Aubergine and Cerise, with the s monogram. Cold-weather kit for consultants on someone else's site.

Change any of the three; one line each.

---

## Where this leaves the set

```
01  Harry da BBQ    9 slides   clean
02  90110           7 slides   clean
03  Eddy            7 slides   3 nits, parked by agreement
04  Lex Energy      8 slides   clean
05  Sebratec        7 slides   1 hex to fix
```

**Thirty-eight slides across five cases.** Plintle is the only case left unmade, and it is not in `SHIP`.
