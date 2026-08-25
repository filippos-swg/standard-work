# TASK 004 — Add the Work view (case studies)

**Status: Proposed** · raised by Simon, prepared 2026-08-20
**Answers:** `docs/OPEN_QUESTIONS.md` → *"Show work / case studies? … When and what do we show?"*

---

## Goal

Put proof on the site. Five brand projects, presented as evidence of what the Brand and Website packages produce — not as an agency portfolio.

A prototype of the finished result is attached: `standard-work-CASES-prototype.html`. It is the live `index.html` with the nine edits below already applied. Open it, click through, then apply the edits to the real file.

---

## Files that change

`index.html` — only. No new files, no dependencies, no build step.

## What must not change

- `PRICING.md` values, or the configurator that reads them
- The `:root` token set — the Work view adds no colours and no fonts
- Any existing page, section, or copy, with one exception: one button is added to the Home page's "Behind the work" section (edit 9)
- The single-file, no-framework architecture

---

## The five cases

| # | Case | Proves | Source |
|---|---|---|---|
| 01 | Lex Energy | Brand + Website | attelje.com/work/lex-energy |
| 02 | Plintle | Brand + Website + Naming | attelje.com/work/plintle |
| 03 | Sebratec | Brand | attelje.com/work/sebratec |
| 04 | Eddy | Brand | attelje.com/work/eddy |
| 05 | 90110 | Brand | attelje.com/work/90110 |

Taxi Göteborg, S&N Live Tour, Harry da BBQ and Rubs were considered and left out. The first two are campaign and art direction — they answer *what did we do*, not *what do I get*, and they set an expectation a 12,000 SEK package cannot meet.

**Rights:** all nine are Simon Attwater's work, published on attelje.com. Reuse here is his to grant, and he has.

---

## The central idea, and why it should survive review

Every case page ends with a block titled **"Against the package."** It lists exactly the six items in the Brand base package, in the package's own words:

> Brand direction · Logo · Typography · Colour palette · Imagery direction · Tone of voice

Same six titles as the Brand page's "What's included". Same `included-item` component. A visitor reads the package on one page and sees it delivered on another, item for item.

Anything outside the base scope — Naming on Plintle, Website on Lex and Plintle — is marked in accent with the tag "Beyond the base package". Scope stays honest and the add-ons sell themselves.

If a later edit turns those six into loose portfolio captions, the section stops doing its job.

---

## The honesty guard

The Work index carries a section headed **"These were not 12,000 SEK projects."** It states that each was commissioned individually with its own budget, and that what is being bought is the judgement, not the project size.

This is deliberate and it should not be softened. Without it, the section overpromises, and the first client who expects a Lex Energy budget for 12,000 SEK is a refund and a bad review.

---

## Structure

```
#work                 index — hero · five case rows · note on scope · CTA
#work-lex-energy      case detail
#work-plintle
#work-sebratec
#work-eddy
#work-90110
```

One entry added to `PAGES`. The five cases are states inside `#page-work`, not separate pages, switched by `showCase()`.

**Why not five pages:** `DECISIONS.md` sets the review trigger for the single-file architecture at roughly ten views. The site has seven. Five case pages would take it to thirteen and force that conversation now. As states, it goes to eight. Each case still has its own hash and is still deep-linkable and shareable.

---

## The nine edits

Each is anchored on an exact existing string. Applied in this order.

### 1 — CSS
**ADD** the contents of `work.css` immediately before the closing `</style>` in `<head>`.
Uses `:root` tokens only. Verified: no hardcoded colour or font.

### 2 — Desktop nav
**ADD** after the "How it works" nav link:
```html
      <a class="nav-link" onclick="navigate('work')">Work</a>
```

### 3 — Mobile nav
**ADD** after the "How it works" link inside `.nav-mobile`:
```html
  <a class="nav-link" onclick="navigate('work');toggleMenu()">Work</a>
```

### 4 — The page
**ADD** the whole `<!-- WORK -->` block immediately before `<!-- PRICING -->`.
Copy it from the prototype. It is self-contained.

### 5 — `PAGES`
**REPLACE**
```js
const PAGES=['home','how-it-works','brand','website','pricing','contact','thank-you'];
```
**WITH**
```js
const PAGES=['home','how-it-works','brand','website','work','pricing','contact','thank-you'];
const CASES=['lex-energy','plintle','sebratec','eddy','90110'];
```

### 6 — Reset the view on entry
Inside `navigate()`, **ADD** one line before `window.scrollTo(0,0);window.location.hash=page;`
```js
  if(page==='work')setCase(null);
```
Without it, clicking "Work" in the nav while a case is open leaves the case showing.

### 7 — Case switching
**ADD** immediately before `function toggleMenu(){`
```js
function setCase(slug){
  const idx=document.getElementById('work-index');if(idx)idx.style.display=slug?'none':'block';
  CASES.forEach(c=>{const el=document.getElementById('case-'+c);if(el)el.classList.toggle('active',c===slug)});
}
function showCase(slug){setCase(slug);window.scrollTo(0,0);window.location.hash=slug?('work-'+slug):'work';}
```

### 8 — Deep links
**REPLACE** the init IIFE at the end of the script
**WITH**
```js
(function(){const hash=window.location.hash.replace('#','');
  if(hash.indexOf('work-')===0&&CASES.indexOf(hash.slice(5))>-1){navigate('work');showCase(hash.slice(5));return;}
  navigate(PAGES.includes(hash)?hash:'home');})();
```

### 9 — A way in from Home
In the "Behind the work / Not automated" section, **ADD** a button after the last paragraph:
```html
          <button class="btn btn-outline" onclick="navigate('work')">See the work &rarr;</button>
```
That section already claims experienced people stand behind the system. This is where a reader can go and check.

---

## Images

The prototype has 29 images inlined as base64 so it opens with no assets folder. **Do not ship it that way.** The production build points at Cloudinary.

Cloudinary account `de5knrq1a` (Simon's — it already serves the Attelje video). Optimised WebP files are supplied in `work-images/`.

Upload to `standard-work/work/<slug>/`, then swap each `src` for:

```
https://res.cloudinary.com/de5knrq1a/image/upload/f_auto,q_auto,w_1400/standard-work/work/<slug>/<name>
```

Thumbnails use `w_640` instead. `f_auto` serves AVIF or WebP by browser.

Total payload once swapped: about 840 KB across all five cases, and only the index thumbnails load on first paint. `index.html` returns to roughly 100 KB.

**Add `loading="lazy"` to every `.case-shot`** when you make the swap. The prototype omits it because inlined images make it pointless.

---

## Verification

1. Nav shows Work between "How it works" and "Brand". Clicking it lands on the index.
2. All five rows open their case. Back link and the prev/next pair at the foot of each case both work.
3. Paste `standardwork.design/#work-plintle` into a fresh tab — it opens Plintle directly.
4. Open a case, then click "Work" in the nav — the index shows, not the case. (This is what edit 6 fixes.)
5. 640px and 960px: rows stack, thumbnail goes full width, arrow column drops, nothing overflows.
6. Configurator and pricing untouched — check Brand and Website still total correctly.
7. Any price on a case page matches `PRICING.md`.

Checked in the prototype: no JS errors, no broken images, no banned language from `CREATIVE_DIRECTION.md`, no first-person copy, no em-dash padding, no hardcoded tokens in the new CSS.

---

## Append to `aios/DECISIONS.md`

Under **Product**:

> **Case studies shown as package evidence, not as a portfolio.** (2026-08-20)
> Five projects, each listing the six base-package items in the package's own words. The section answers "what do I get for 12,000" rather than "what have you done". Trade-off: the more spectacular campaign work is left out, because it sets an expectation the price cannot meet.
>
> **Work presented with an explicit scope disclaimer.** (2026-08-20)
> The index states that these were individually commissioned projects with their own budgets. Trade-off: it deflates the proof slightly. Accepted — overpromising costs more than it wins, and honesty about scope is already a stated UX principle.
>
> **No client logo wall.** (2026-08-20)
> Simon's career credits (Coca-Cola, Mercedes, Visa and the rest) belong to the Silly Wizards guild, not to Standard Work. Superbrand logos over a productised local service read as a bluff. Trade-off: loses an easy credibility signal.

Under **Technical**:

> **Case studies are states inside a single `#work` view, not separate pages.** (2026-08-20)
> Keeps the site at eight views, under the ~10 threshold set for revisiting the single-file architecture. Each case keeps its own hash and stays deep-linkable. Trade-off: `#page-work` is the largest block in the file.
>
> **Case imagery served from Cloudinary, not committed to the repo.** (2026-08-20)
> The repo has held no binary assets until now and should not start. Cloudinary gives `f_auto` format negotiation for free. Trade-off: a second vendor, and images live outside version control.

## Remove from `docs/OPEN_QUESTIONS.md`

The item **"Show work / case studies?"** under *Later / strategic*. Answered by this task.

## Add to `docs/OPEN_QUESTIONS.md`

> **No way to buy brand and website together.**
> The homepage headline is "Build a brand **and** website for your business", but the configurator sells them as two separate transactions with two separate checkouts. A visitor who wants both has to buy twice. `PRICING.md` has no combined price. Is that intended, or is a bundle missing? Noticed while building the Work view — two of the five cases used both packages and there was no single CTA to point them at.

---

## Next task

TASK 005 — the brand dependency gate (Simon's sequencing rule).
TASK 006 — mobile fixes and two dead CTAs.
TASK 007 — incremental pricing on scope-changing answers.
TASK 008 — copy, structure and the two anatomy diagrams.
TASK 009 — upload case imagery to Cloudinary and swap the base64 sources.
