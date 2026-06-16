# TASK 001 — Deploy Standard Work v0.1

**Status: In progress**

---

## Goal

Get the prototype live at standardwork.design so it can be reviewed and tested by real people.

---

## Files in the repo (flat root)

```
index.html
README.md
PRICING.md
PROJECT_BRIEF.md
MVP_SCOPE.md
ARCHITECTURE.md
.gitignore
docs/AI_HANDOFF.md
docs/CREATIVE_DIRECTION.md
docs/UX_PRINCIPLES.md
docs/DECISIONS.md
docs/OPEN_QUESTIONS.md
tasks/TASK_001.md
```

---

## Steps

### 1. Push repo to GitHub — done
Repo live at `github.com/filippos-swg/standard-work` on `main`.

### 2. Connect Netlify to GitHub — current step
In Netlify: Import from Git → GitHub → select `standard-work` repo → deploy.

Deploy settings:
- Build command: leave empty
- Publish directory: leave empty (or `/`)
- Branch: `main`

### 3. Verify Netlify preview URL
Confirm the site loads and all 7 pages work on the Netlify preview URL before connecting the domain.

### 4. Connect domain
In Netlify: Site configuration → Domain management → Add `standardwork.design`.

In Namecheap: switch nameservers to Netlify's provided nameservers.

Wait for DNS propagation (minutes to a few hours).

### 5. Verify live site
Check:
- Homepage loads at standardwork.design
- All 7 pages navigate correctly
- Configurator works and updates price (values match `PRICING.md`)
- Form submits (currently shows success state)
- Mobile layout works (640px, 960px)
- HTTPS is active (Netlify auto-provisions)

---

## Success Condition

standardwork.design is live, loads correctly, and is ready to share for review.

---

## Known Issues Going Live

- Form submission is mocked (no real email sent)
- Silly Wizards footer logo is font approximation, not actual PNG
- No favicon, no OG tags, no analytics

These are acceptable for v0.1 review. See `MVP_SCOPE.md` for v1 additions.

---

## Next Task

TASK 002 — Add working form submission (Netlify Forms or Formspree — see `docs/OPEN_QUESTIONS.md`)
