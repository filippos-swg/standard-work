# TASK 006 — Mobile fixes and two dead CTAs

**Status: Proposed** · found on a phone, 2026-08-20
**Trigger:** Simon reviewing on mobile. Working assumption: that is where most traffic will be.

Everything here is a bug that exists on `main` today. None of it was introduced by TASK 004 or TASK 005 — the gate work just put a spotlight on it. Merge independently of either.

---

## 1 · Two CTAs navigate to the page they are already on

The loudest button on the Brand page does nothing.

```
#brand    btn-accent  → navigate('brand')    "→ Build a brand"    ← no-op
#website  btn-accent  → navigate('website')  "→ Make a website"   ← no-op
```

Both live in `.hero-cta-box`. On desktop the box sits off to the right and reads as a persistent rail, so it goes unnoticed. On mobile `.hero-cta-box` becomes a wrapping row directly under the real CTA, and the result is two accent buttons stacked inches apart, one of which is dead.

**Fix:** delete the no-op from each page and give the rail a job that is actually true now the gate exists.

Brand page:
```html
<p class="hero-cta-label">Need a site too?</p>
<button class="btn btn-outline" onclick="navigate('website')">→ Make a website</button>
```

Website page:
```html
<p class="hero-cta-label">No brand yet?</p>
<button class="btn btn-outline" onclick="navigate('brand')">→ Build a brand</button>
```

The Website one now does real work — it is the gate, stated in the hero, before anyone reaches the configurator.

Nothing changes on Home, How it works, Pricing or Contact. Their rails point away from themselves and are correct.

---

## 2 · "Configure your brand" reads as "Build a brand"

Simon's note, and he is right. Sitting together on a phone they look like the same button:

> Get a price → · → Build a brand · → Make a website

"Build a brand" and "Make a website" are the product names and appear in that form site-wide. They should not move. The scroll-to-configurator button is the one that is wrong, because it is a different action — it moves you down the page to start choosing.

**Changed to `Get a price →`** — five occurrences, both packages, hero and page-foot.

It is a distinct verb, it promises the one thing the whole positioning is built on, and on a phone it tells you exactly what tapping does. If you would rather, `Start your order →` works the same way. One string either way.

---

## 3 · On mobile, the live price is invisible while you choose

The biggest of the three, and it undercuts a stated principle:

> `docs/UX_PRINCIPLES.md` — **Price is always visible and always current.** The order summary updates live with every choice. The user never has to ask, calculate, or wait to find out the cost.

At 960px and below, `.order-summary-wrap` drops to `position:static` and the whole rail moves below the configurator. Measured on a 390px viewport: **the summary sits 2,576px below the point of decision.** Someone ticking Brand prep on a phone gets no feedback at all — the number they are being told is always visible is two and a half screens away.

**Fix:** a mobile-only running total, fixed to the bottom of the viewport, visible only while a configurator is on screen and the real summary is not.

- Below 960px only. Desktop is untouched — the sticky rail already does this job.
- Slides in when the configurator scrolls into view, slides out when the real order summary reaches 25% visible, so the two never show at once.
- Respects `env(safe-area-inset-bottom)` for the iPhone home indicator.
- Two `IntersectionObserver`s. No scroll handler, no layout thrash.
- Serves both packages from one element.
- Under the gate it changes with everything else: *Brand first · 12 000 SEK · → Build a brand*.

Its button reads **Review →** and scrolls to the real summary rather than starting checkout. Checkout stays a single primary action in one place, per `UX_PRINCIPLES.md`.

---

## 4 · Tap targets

Measured at 390px against the 44px minimum:

| Element | Height | |
|---|---|---|
| `.case-back`, `.case-pair a` | 18px | **Fixed** — mine, from TASK 004 |
| `.btn` (every button) | 40px | Pre-existing, site-wide |
| `.footer-nav-link` | 18px | Pre-existing |
| `.nav-hamburger` | 23px | Pre-existing |

Only the first row is fixed here, because the rest are yours and changing them touches every page. Worth doing, and it is a handful of lines:

```css
@media(max-width:960px){
  .btn{min-height:44px}
  .footer-nav-link,.footer-email{display:inline-flex;align-items:center;min-height:44px}
  .nav-hamburger{padding:11px 4px}
}
```

Not applied in the prototype — it is your call, not a bug I introduced.

---

## What was checked

At 390px, iPhone user agent, touch enabled:

- **No horizontal overflow** on any view — home, work index, case detail, both configurators, all three gate states. `scrollWidth` equals `clientWidth` everywhere.
- Hamburger opens, contains Work in the right position, and navigates.
- Case rows stack, thumbnails go full width, the arrow column drops.
- The running total appears near the gate, disappears at the real summary, and does not follow you onto other pages.
- No CTA anywhere on the site navigates to its own page — asserted across all eight views, so this cannot come back.
- Both "Get a price" buttons still scroll to their configurator.
- Every CTA on the Brand hero is now a distinct string.

70 assertions across four test files. No JS errors.

---

## Append to `aios/LOG.md`

Under **Brand / Design**:

> **"Get a price" is the configurator CTA. "Build a brand" and "Make a website" are the products.** (2026-08-20)
> Three near-identical CTAs stacked on a phone, one of which was a no-op. Different action, different verb. Trade-off: "Get a price" frames the configurator as a quote tool rather than the product. Acceptable — price transparency is the positioning, and on a phone it says what tapping does.
>
> **A hero rail never points at its own page.** (2026-08-20)
> `.hero-cta-box` on Brand and Website each carried an accent button navigating to the page it sat on. Now one outline button pointing at the other package. Trade-off: one less button. It did nothing.

Under **Technical**:

> **Mobile running total, below 960px only.** (2026-08-20)
> The order summary drops below the configurator on mobile, putting the live price ~2,600px from the decision. A fixed bar restores the "price is always visible" principle. Two IntersectionObservers, no scroll handler. Trade-off: one more fixed element competing for the bottom of a small screen — mitigated by hiding it whenever the real summary is in view.

## Add to `docs/OPEN_QUESTIONS.md`

> **Tap targets are 40px site-wide, against a 44px minimum.**
> Every `.btn`, plus footer links at 18px and the hamburger at 23px. Fixable in about five lines of media-query CSS, but it touches every page, so it wants a deliberate yes. See TASK 006 §4.

---

## Next task

TASK 007 — upload case imagery to Cloudinary and swap the base64 sources.
