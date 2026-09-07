# The speculative one-pagers — where they sit, and what they claim

Simon's call, 26 Aug: **every case gets a speculative Standard Work one-pager instead of a website slide.** The Website slide is gone from Lex; the mock replaces it. Four cases, four mocks, three of them already built.

This note is about the one thing that decision leaves open: what the mock is allowed to say it is.

---

## The mock means different things on different cases

That is the trap, and it is worth catching before four of these go on the site.

| Case | Did the client get a real website? | So the mock is… |
|---|---|---|
| Harry da BBQ | No | the only website in the story |
| 90110 | Has a site, brand not applied to it | what theirs could become |
| Eddy | Has a site, someone else built it | a version that never existed |
| Lex Energy | **Yes — Simon built it** | *not* the site he built |
| Sebratec | **Yes — Simon built it** | *not* the site he built |

On Lex and Sebratec a mock sitting under a list headed *what we delivered* reads as **the website they were delivered**. It isn't. It's a speculative Basic Website made from their guidelines two years later.

---

## So it is not an extra

`Beyond the base package` is the tag for real work outside the base scope — Harry's naming, Lex's livery, Plintle's website. Putting the mock in that list makes it a claim of delivery, and on two of five cases that claim is false.

**It belongs below the delivered slides, under its own heading, with its own framing.** Something like:

> **The same brand as a Standard Work website**
> Not what this client was delivered. This is their brand book run through the Basic Website structure — the same six sections every Standard Work site gets, wearing their identity.
> **Open the mock →**

That framing is true on all five cases, needs no per-case wording, and turns the awkwardness into the actual sales argument: *this is what your brand becomes*.

The orange bar already on each mock says the same thing again once you are inside it. Keep both — the label on the case page sets the expectation, the bar confirms it.

---

## Where they live

Settled 26 Aug: **one page per brand, two doors into it.**

- **The Website product page** — all four as a set, directly under the anatomy diagram. Wireframe, then the same skeleton wearing four brands, then the price. This is where the argument lands, because it only works in the plural.
- **Each case page** — a link to its own, below the delivered slides, framed as above.

Same URL both times. Nothing to keep in sync.

Four new views (`#site-harry`, `#site-90110`, `#site-eddy`, `#site-lex-energy`) on top of the eight the site has. `DECISIONS.md` sets the single-file review trigger at roughly ten. **Twelve views crosses it** — so this is the moment that conversation happens, not a surprise later. Two honest options: split the mocks into their own file, or accept the threshold has moved and log why.

---

## Weight

Each mock is 420–720 KB with the artwork inlined, because they were built to open from a Desktop with no server. Four of them is roughly **2 MB** against a production `index.html` of 131 KB.

They cannot be inlined into the main file. Options, cheapest first:

1. **Separate pages, images in the shared `work/` folder.** Same treatment the case slides already get — 1400px webp, lazy loaded. Each mock drops to well under 100 KB of HTML.
2. Same, but images on Cloudinary, if Filippos prefers the repo stay binary-free.

Either way the conversion is the same job already running for the case slides, so it is minutes, not a task.

---

## Still to build

- **Lex Energy** — the mock does not exist yet. Simon and Claude, next session.
- **Sebratec** — needs its slides first.
- **Plintle** — not in `SHIP`, no slides, no mock.

---

## Update — 26 Aug

**Plintle is retired.** Simon's call: *"plintle is dead. 5 cases is plenty and that one is old and just okay."* Removed from `cases.py` and from the homepage logo strip; its copy is preserved in `cases-retired.py` in case it is ever wanted back. No slides were ever made for it.

**Five cases, five mocks, all built:**

| Case | Mock | Ground order | The argument |
|---|---|---|---|
| Harry da BBQ | ✅ | pink · smoke · black · pink | sticker, loud, Shrikhand |
| 90110 | ✅ | dark throughout | photographic, blunt |
| Eddy | ✅ | cream · blurple · peach | geometric, calm, the loop |
| Lex Energy | ✅ | black · white · split · LIME | graphic, the dot matrix, one shout |
| Sebratec | ✅ | aubergine · mushroom · cerise · tea | warm, round, six colours, generated spheres |

Nothing left to build. What remains is Simon's redline pass on all five, then the placement decisions in this document.
