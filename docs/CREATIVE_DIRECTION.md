# Creative Direction — Standard Work™

---

## Design Philosophy

The site should behave like the service: no clutter, no confusion, no theatre, no false complexity.

It should feel like a precise productized design service: stark, useful, confident, and easy to buy from.

Not a generic SaaS landing page. Not a polished agency portfolio. Not a decorative brand moodboard.

---

## Visual System

### Colours

| Token | Value | Use |
|---|---|---|
| `--bg` | `#E8E6E1` | Page background (warm grey) |
| `--surface` | `#FFFFFF` | Panels, cards, nav |
| `--surface-alt` | `#F2F0EB` | Alternating sections |
| `--text` | `#1A1918` | Primary text, borders, dark sections |
| `--text-dim` | `#6E6C69` | Secondary text, labels |
| `--text-faint` | `#AEADA9` | Metadata, counters |
| `--accent` | `#E84500` | Orange-red — CTAs, step bars, highlights |
| `--accent-dark` | `#C03800` | Hover state for accent |
| `--border` | `#1A1918` | Strong borders (nav, panels, service cards) |
| `--border-light` | `#CCC9C4` | Dividers, subtle separators |

### Typography

| Use | Font | Weight |
|---|---|---|
| Display / hero | Outfit | 900 |
| Headings | Outfit | 700–800 |
| Body | Outfit | 400–500 |
| Labels / metadata | JetBrains Mono | 500–600 |
| Guild logo | UnifrakturMaguntia | 400 |

### Layout Rules

- Left-aligned always. Centre bias is banned.
- Strong grid. Large type. Restrained lines.
- White panels float on warm grey ground.
- Dark sections (#1A1918 bg) used for CTAs and footer.
- Orange sections used for value blocks and step bars.
- No decorative elements unless they improve clarity.
- Cards only where elevation communicates hierarchy.

---

## Component Behaviour

### Buttons
- Primary: dark fill (#1A1918), white text, pill-shaped
- CTA: orange fill (#E84500), white text, pill-shaped
- Secondary: transparent, dark border, dark text

### Option Cards (configurator)
- Unselected: warm grey fill (#F2F0EB), no border
- Hover: slightly darker fill, 1px lift
- Selected: dark fill (#1A1918), white text, orange counter + status dot
- Counter: CSS-generated (01, 02, 03...), top-left, JetBrains Mono
- Status dot: top-right, hollow → solid orange when selected

### Step Bars
- Orange background (#E84500), white text
- 25px horizontal padding inside bar
- Number and title: same font, same size (Outfit 700)

### Order Summary
- Dark header bar, white body, warm grey price section
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
