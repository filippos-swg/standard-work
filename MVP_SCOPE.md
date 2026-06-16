# MVP Scope — Standard Work™

---

## v0.1 — Prototype (current)

**Status: Complete**

A working prototype for internal review and first live test.

### What exists

- 7-page SPA: Home, How It Works, Brand, Website, Pricing, Contact, Thank You
- Brand package configurator (5 steps, radio + checkbox)
- Website package configurator (5 steps, radio + checkbox)
- Live order summary with real pricing and add-on calculation (values match `PRICING.md`)
- Enquiry form with success state
- Responsive layout (desktop + mobile)
- Footer with Silly Wizards guild link
- Deployed at: standardwork.design (pending)

### What is mocked

- Form submission (no backend)
- Payment processing
- Email confirmation
- Pricing values are static but accurate (no pricing engine — numbers come from `PRICING.md`)

---

## v1 — First Live Version

**Status: Next**

Make the prototype functional enough for real client enquiries.

### Must add for v1

- Working form submission (Netlify Forms or Formspree — see `docs/OPEN_QUESTIONS.md`)
- Email notification when enquiry is submitted
- Basic meta tags + Open Graph for sharing
- Favicon

### Nice to have for v1

- Actual Silly Wizards logo PNG in footer (replace font approximation)
- Privacy-friendly analytics or simple page-view tracking
- Polish pass on mobile spacing

### Out of scope for v1

- Payment processing
- Client login or account system
- CMS or editable content
- Booking system
- Multiple languages
- Backend automation

---

## v2 — Later

- Real payment (Stripe)
- Automated project intake flow
- Email sequence after enquiry
- Case studies / work examples
- Additional packages

---

## Scope Control Rule

If it does not help a client submit a clear, confident enquiry — it waits.
