# Open Questions — Standard Work™

Unresolved questions that shape future work. An item stays here until it is decided, then it moves to `DECISIONS.md` and is removed from this list.

Each item: the question · why it matters · current lean (if any).

---

## Blocking v1

**Form backend: Netlify Forms or Formspree?**
The form is mocked. Real enquiries need capture + notification. Netlify Forms is zero-config on current hosting; Formspree is portable if we ever leave Netlify. Lean: Netlify Forms for v1, revisit only if we outgrow it. (TASK_002)

**VAT (MOMS) display on prices.**
Prices are currently shown as plain SEK. Swedish B2B buyers expect to know if a number is ex- or inc-VAT. Showing the wrong basis is a trust and legal issue. Needs a decision before real quotes go out. Lean: show "ex. moms" next to prices.

---

## Affects v1 polish

**Analytics: which tool?**
No tracking exists. Options: Plausible/Fathom (privacy-friendly, paid), GA4 (free, heavier, consent burden under GDPR). Lean: privacy-friendly to avoid a cookie banner.

**Silly Wizards footer mark.**
Currently a font approximation, not the real logo. Need the actual PNG/SVG from the guild. Cosmetic but visible.

**Site language.**
Site is English; audience is largely Swedish. Is English correct for positioning, or is a Swedish version needed? Multilingual is an add-on for client sites but undecided for our own. Lean: English-only for v0.1/v1.

---

## Later / strategic

**Payment: when does Stripe enter?**
50/50 split is currently handled manually (invoice). At what volume does automated payment earn its complexity? Out of scope until enquiry flow is proven.

**Show work / case studies?**
No proof on the site yet. Strong for conversion, but we have limited public examples and the brand is new. When and what do we show?

**Lead handling after enquiry.**
Where does an enquiry go — inbox only, or a light CRM / pipeline? Matters once real volume starts.

**Project intake automation.**
The pitch is "everything defined before work begins." Should intake become a structured flow (brief form, scope confirmation) rather than a freeform enquiry? Candidate for v2.

---

## How to use this file

When a question is answered: write the decision (with its trade-off) into `DECISIONS.md`, then delete the item here. Keep this list short — if it is growing without items leaving, decisions are being avoided.
