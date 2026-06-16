# UX Principles — Standard Work™

How the site should behave. `CREATIVE_DIRECTION.md` covers how it looks; this covers how it works. When the two conflict, behaviour wins — the site has to be easy to buy from before it is nice to look at.

The job of the site: take someone from "what is this" to "here is my defined enquiry" with as few unclear moments as possible.

---

## Principles

**Sell clarity, not exploration.**
Every screen reduces uncertainty. We are not inviting the user to wander; we are walking them to a confident decision. No open-ended "let's discover together" framing anywhere.

**One question per page.**
Each view answers a single thing: what is this, how does it work, what do I get, what does it cost, how do I start. If a page is answering two questions, split it.

**The configurator is the product.**
It is where the service becomes real and buyable. It must always show what is selected, what it costs, and what happens next. Selection state is never ambiguous — selected options are visibly, unmistakably selected.

**Price is always visible and always current.**
The order summary updates live with every choice. The user never has to ask, calculate, or wait to find out the cost. A surprise price is a broken promise.

**One primary action per screen.**
There is a single obvious next step at any point. Secondary actions are visibly secondary. Never two competing primary buttons.

**Defined choices, not open fields.**
Offer a small, deliberate set of options rather than a blank canvas. Constraint is the value. Where free input is needed (enquiry details), keep it minimal and clearly optional vs required.

**Honest about scope.**
Show what is included and what is not, before the user asks. In/out of scope is part of the pitch, not fine print.

**Mobile is the same logic, stacked.**
No feature is dropped on mobile. The order summary moves inline instead of sticky; the configurator stacks. Test every change at the 640px and 960px breakpoints. If a flow only works on desktop, it is not done.

**Confirm every action.**
Form submission shows a clear success state. The user is never left wondering whether something worked.

**Speed is a feature.**
No build step, minimal assets, no blocking scripts. The site should feel instant. Do not add anything that makes the first paint slower without a strong reason.

---

## Anti-patterns (do not do)

- Hiding price behind "contact us" or "request a quote."
- Multi-step wizards that hide the total until the end.
- More than one primary CTA competing on a screen.
- Free-text where a defined option would do.
- Decorative motion or elements that add load without adding clarity.
- Desktop-only interactions.

---

## Test before shipping any change

1. Can a first-time visitor tell what this is within one screen?
2. Is the price visible and correct at every step of the configurator?
3. Is there exactly one obvious next action?
4. Does it work at 640px and 960px?
5. Does every action confirm itself?
