Standard: AiOS v2.0 · canon: `AIOS/Framework/project-aios/aios/CANON.md` · **Profile:** build · **Visibility:** private
State: read `aios/STATE.md` first. If its HEAD stamp ≠ `git rev-parse HEAD`, or the tree is dirty, regenerate before acting.
Truth: git history and `aios/`. Not chat. Not this file.
Depends on: nothing. `~/Projects/silly-wizards-guild` and `~/Projects/seriously-wow` are siblings in the same network — read-only from here, and never edited from this repo.
Do not create AiOS core files at project root. Commit as filippos@southnorth.se.

## What this repo is

standardwork.design — a fixed-scope design service sold from a single page. Two packages,
transparent pricing, a configurator that quotes live and hands the total to Stripe. Plain HTML,
CSS and vanilla JS in one file; no framework, no build step, no dependencies.

## Entry points

| You want | Read |
|---|---|
| What is true right now | `aios/STATE.md` — generated, never hand-edited |
| The rules that outlive the build | `aios/CANON.md` |
| What was decided, and what is still open | `aios/LOG.md` |
| The live unit of work | `aios/tasks/` |
| Prices — the only place they are canonical | `PRICING.md` |
| Whether the build still agrees with them | `tests.html`, served over http |

## Two things that will bite

**Prices live in three places and must agree:** `PRICING.md`, the constants and markup in
`index.html`, and the `EXPECTED` block at the top of `tests.html`. Change one, change all
three — the suite exists to catch exactly that drift, and it is the only thing that does.

**`tests.html` cannot see past the fetch to Stripe.** VAT, the deposit landing, the wording on
a receipt — none of that is provable in a browser. A real transaction is still the only proof,
and it is the one path where being wrong costs money.

## Asset storage rule (universal)
Original heavy assets (full-res PNGs, PSDs, video, audio masters) are NEVER committed to this repo.
They live on the Mac at ~/Pictures/projects-images/standard-work/ — create the folder on first use.
The repo only carries web-optimized delivery copies. Before committing any image, put the original in the vault first.
