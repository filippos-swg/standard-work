# TASK 009 — Verify checkout end to end with a real transaction

**Status: Open** · blocking the merge of `brand-dna-2026-08` · raised 2026-08-26

---

## Why this exists

`startCheckout` was **completely broken** by the 2026-08-25 handover: it built its payload with
`description`, whose definition the rewrite deleted while keeping the use. It threw a
`ReferenceError` before reaching `fetch` — the button disabled itself, said "Preparing
checkout…", and stayed dead. Both packages.

It is fixed. It has never been exercised against real Stripe.

Live `standardwork.design` still runs the pre-handover build, where checkout works. **Merging
this branch replaces a working checkout with an unverified one.** That is the whole risk, and
it is the only reason this task blocks the merge.

## What cannot be proved without doing it

`tests.html` asserts that the site hands Stripe the right number — 74 assertions, including
that the checkout payload matches the displayed total at every step of a full build-up. It
cannot see past the `fetch`. None of the following is provable in a browser:

- that the Stripe payment page opens at all
- that `STRIPE_SECRET_KEY` is still set in Netlify after the account is reconnected
- that Stripe Tax adds 25% MOMS correctly on top of the deposit
- that the deposit is half the quoted total and lands in the right account
- that the receipt reads **Brand Tool Kit** / **Website** — the names settled 2026-08-26

## Exit condition

One completed transaction and one refund, on an order **with add-ons selected**. Not a bare
base package: the arithmetic that can drift lives in the add-ons, and a clean 12,000 would pass
even if that were broken.

- [ ] Stripe account reconnected; `STRIPE_SECRET_KEY` present in Netlify
- [ ] Configure a Website order with at least: copy writing, SEO setup, and one prep item
      unticked so brand prep is charged
- [ ] Note the total the order summary shows
- [ ] Complete checkout with a real card
- [ ] Stripe charges exactly 50% of that total, plus VAT on top
- [ ] The receipt product name is `Website`
- [ ] Refund it
- [ ] Record the result as a dated entry in `aios/LOG.md`

## Then

Remove "A real Stripe transaction" from the open list in `aios/LOG.md`, and this task moves to
`aios/tasks/done/`.
