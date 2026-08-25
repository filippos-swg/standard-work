# Copy audit — standardwork.design

Every visible string on the live site, 445 of them, read against `docs/CREATIVE_DIRECTION.md` — the site's own copy rules — and against what the site now does since TASK 005.

Findings and exact edits. Nothing pushed.

Ordered by consequence, not by page.

---

## Tier 1 · Wrong, not just weak

### 1. The footer says © 2025

It is 2026. One character. It is also the single loudest "nobody is minding this" signal on the site, and it sits on every page.

```
REPLACE  © 2025 Standard Work™
WITH     © 2026 Standard Work™
```

Better: `<span id="yr"></span>` and `document.getElementById('yr').textContent=new Date().getFullYear()`. Never wrong again.

### 2. How it works step 01 contradicts the gate

> *"Select the service that fits your situation: a brand, a website, or both."*

There is no "both". There is a sequence. This is the first substantive sentence a considered reader hits, and it teaches them something the configurator then refuses.

```
REPLACE  Select the service that fits your situation: a brand, a website, or both.
         You'll see the full price and scope immediately.
WITH     Start with the brand, or go straight to a website if you already have one.
         You'll see the full price and scope immediately.
```

### 3. The contact form sells a package that does not exist

The service dropdown offers **Brand and Website** as a single option. It is the same error as above, sitting on the form where an enquiry gets classified.

```
REPLACE  <option>Brand and Website</option>
WITH     <option>Brand first, website after</option>
```

### 4. The dependency is stated once, and far too loosely

> *"Brand-aligned visuals — Visual design aligned with your existing brand or Standard Work brand package."*

Buried in an included-item description, and "your existing brand" accepts anything. It was the only place on the site the requirement appeared at all.

```
REPLACE  Visual design aligned with your existing brand or Standard Work brand package.
WITH     Built from your brand: logo, typeface, colour palette, imagery direction.
         Yours, or from a Standard Work brand package.
```

### 5. Pricing contradicts the configurator

> *"We design and build — and can launch and host upon request."*

The configurator sells **Design, build, publish** as a defined choice with a price. "Upon request" is the agency dance the whole business exists to avoid, and it reopens a door the product closed.

```
REPLACE  A simple, scrollable website that presents your business clearly.
         We design and build — and can launch and host upon request.
WITH     A simple, scrollable website that presents your business.
         Design, build and publish are all defined options in the configurator.
```

---

## Tier 2 · Against the site's own rules

`CREATIVE_DIRECTION.md` says: **Direct. Plainspoken. Senior. Slightly sharp. Confident but not rude.** It also bans em-dash padding by name.

### 6. Fifteen em-dashes

The rules ban them "for rhythm". Most of these are exactly that. The worst offender is the Brand hero, where one is doing the work a full stop should:

```
REPLACE  This service helps you define and create a complete, usable brand — without
         workshops, long briefs, or agency processes.
WITH     Define and create a complete, usable brand. No workshops, no long briefs,
         no agency process.
```

Also gone: "This service helps you", which is four words of throat-clearing.

### 7. "Designed to be" — twice

> *"Standard Work is designed to be calm and predictable."*
> *"Standard Work is designed to be self-serve."*

The difference between claiming a thing and hoping it. Delete three words in each and both sentences get their spine back.

```
REPLACE  STANDARD WORK is designed to be calm and predictable.
WITH     Standard Work is calm and predictable.

REPLACE  STANDARD WORK is designed to be self-serve.
WITH     Standard Work is self-serve.
```

### 8. The one place sharpness belongs, and it flinches

> *"If you're looking for workshops or ongoing collaboration, this may not be the right approach."*

This closes a section called **A note on fit**, whose entire job is to turn the wrong client away. "May not be" turns it away politely enough that they might stay.

```
REPLACE  If you're looking for workshops or ongoing collaboration, this may not be
         the right approach.
WITH     If you want workshops or an ongoing relationship, this isn't for you.
         That's not a criticism of either of us.
```

### 9. A tautology, and a corporate passive

> *"No meetings required unless needed."* — "unless needed" is doing nothing at all.
> *"Quality is ensured by people who have done this work for years."* — "ensured" is a compliance word, and "for years" is vague when the honest number is twenty-five.

```
REPLACE  No meetings required unless needed.
WITH     No meetings unless you want one.

REPLACE  Quality is ensured by people who have done this work for years.
WITH     The work is checked by people who have been doing it for twenty-five years.
```

### 10. STANDARD WORK shouting in body copy — five times

`CREATIVE_DIRECTION.md` reserves uppercase for the hero display. Mid-paragraph it reads as a legal document. Five instances, all should be **Standard Work**.

---

## Tier 3 · The crutch words

### 11. "Clear" appears twenty-one times

Twenty-one. Clear scope, clear price, clear output, clear decisions, clear thinking, clearly defined, clear delivery, clear online presence, clear presentation, clear content sections, clear business website, clear, functional contact section.

It is the right word. That is the problem — it has been used until it carries nothing, and it is doing duty for at least four different ideas: *fixed*, *legible*, *honest* and *finished*.

No single edit fixes this. The instruction is: **pick the eight places where "clear" is load-bearing and let it stay. Everywhere else, say the specific thing.**

| Instead of | Try |
|---|---|
| Clear scope. Clear price. Clear output. | Fixed scope. Fixed price. Finished work. |
| a clear online presence | somewhere to send people |
| Clear content sections | Sections for your offer, your story, your contact details |
| Clear, functional contact section | An email link that works |
| a clear, professional website | a website that explains what you do |

### 12. "Professional" — seven times

Professional results, professionally designed logo, present themselves professionally, professional website, professional, finished work, execute the work professionally.

It is the word people use when they cannot name the quality they mean. Every one of these can say the actual thing — *finished*, *considered*, *credible*, *made by someone who has done it before* — or be cut with nothing lost. "We guide them and execute the work professionally" loses nothing at all by ending after "execute the work".

---

## Tier 4 · Two strategic ones

### 13. "Not automated." plants the doubt it then rebuts

Nobody arrives wondering whether the site is a template mill until the headline raises it. Defining yourself by the negative hands the frame to the objection.

It also does not survive contact with the family. Across one guild there are now three postures on AI:

| | Says |
|---|---|
| Seriously Wow | sells AI image-making as the product |
| Attelje | "Human-made. AI-assisted. Never the other way around." |
| Standard Work | "Not automated." |

Attelje's line is the best of the three because it claims a position instead of denying an accusation. Standard Work does not need to copy it, but it needs its own version of it.

```
REPLACE  Not automated.
WITH     People, every time.
   or    Who actually does it.
   or    The system is fixed. The judgement isn't.
```

The last one is the most Standard Work, because it explains the whole business in eight words.

### 14. The one line on the site that overclaims

> *"Behind the system is a small group of experienced art directors, designers, writers, and developers who review and refine the work before it's delivered."*

Four plural job titles. It is two people wearing four hats each. Nothing here is a lie, and it will still read as a team of eight to anyone who is counting.

On a site whose entire commercial proposition is that it does not do the agency dance, this is the one sentence performing the agency dance. And a client who has been picturing a studio meets two people.

The honest version is stronger anyway, because scarcity is the product:

```
REPLACE  Behind the system is a small group of experienced art directors, designers,
         writers, and developers who review and refine the work before it's delivered.
WITH     Two people do the work. Between them: art direction, design, writing, and
         build. Nothing leaves without both of them looking at it.
```

That is worth more than "a small group" precisely because you can count it. **Your call — it is a positioning decision, not a copy fix.**

---

## Tier 5 · Housekeeping

### 15. Fifteen CTA variants for four actions

Currently in use: *Build a brand · Make a website · Get a price · Configure and start · Get started · Get to work · Start building your brand · Start building your website · Start with the brand · Review · Ask us about it · Submit project request.*

Three of those say the same thing in three ways. Proposed vocabulary — four verbs, no more:

| Action | Always |
|---|---|
| Go to a package page | → Build a brand · → Make a website |
| Scroll to the configurator | Get a price → |
| Submit | Get started → |
| Ask a human | Ask us about it → |

Retire **Configure and start**, **Start building your brand**, **Start building your website**, **Get to work** as a button, and **Submit project request**.

### 16. Two near-identical success states

The contact form success and the thank-you page say almost the same thing in almost the same words. Pick one and use it in both.

---

## Applying this

Tiers 1 and 2 are unambiguous — sixteen edits, all anchored, all safe. I can apply them to the prototype on a word.

Tier 3 is a rewrite pass, not a find-and-replace. It wants your ear on it, not mine.

Tiers 4.13 and 4.14 are positioning calls and belong to you and Filippos, not to a copy audit.

## Add to `docs/OPEN_QUESTIONS.md`

> **What is Standard Work's line on AI?**
> The site currently says "Not automated", which denies rather than claims. Seriously Wow sells AI as the product and Attelje says "Human-made. AI-assisted." Three ventures, three postures, one guild. Standard Work needs a stated position, not a rebuttal.

> **Do we say there are two of us?**
> "A small group of experienced art directors, designers, writers, and developers" describes two people with four skills each. Defensible, and it reads as eight. The honest version may sell better. See COPY-AUDIT §14.

---

# Addendum · The headlines

Added after Simon flagged "A clear business website" as not making sense. He was pulling one thread on a structural problem.

## The pattern the site uses everywhere

Every section is built the same way:

```
LABEL          mono, uppercase — what this section is
Headline.      what the point is
Body           the detail
```

The label does the naming. The headline is supposed to do the arguing. On Home and How it works it works — *Calm and predictable.* *This is for people who value clarity.* Those are claims.

**On Brand and Website — the two pages that have to sell — the headline stops arguing and starts naming again.** You get a label, then a second label set in 52px, then the body. The page never makes its case.

| Page | Label | Headline | What it should be doing |
|---|---|---|---|
| Website | What this is | *A clear business website.* | Saying why this one is different |
| Brand | What this is | *Practical brand definition.* | Same |
| Both | What's included | *Base package.* | Saying the scope never shrinks |
| Both | What's not included | *Clearly defined before work begins.* | Owning the exclusions |

Four headlines, two pages, none of them arguing. Simon caught the worst one, but it is not alone.

---

## The rewrites

### Website · "What this is"

**Now:** A clear business website.
A noun phrase wearing a headline's clothes. It has no verb, makes no claim, and burns one of the twenty-one "clear"s. The body underneath already says it better: *"Founders who want something finished, not ongoing."*

**Proposed:** **It gets finished.**

Three words, and it names the thing every founder has actually been burned by — the site that was nearly done for nine months. It is the real competitor, and no agency can say it.

*Alternative:* **One page. Properly finished.** — safer, echoes "executed properly", slightly less brave.

### Brand · "What this is"

**Now:** Practical brand definition.
Same failure, and "definition" is not a thing anyone wants to buy. The body says *"This is not brand strategy consulting. It is practical brand definition"* — so the headline is a straight lift from the body, which means one of them is doing nothing.

**Proposed:** **Six decisions, made properly.**

Ties directly to the six items listed forty pixels below, echoes the core line, and turns an abstraction into a countable object. It also sets up the case studies, which list the same six.

### Both · "What's included"

**Now:** Base package.
Label, then the same label again in 52px.

**Proposed:** Brand → **All six, every time.** · Website → **All five, every time.**

Says the thing the section exists to say: the scope does not shrink to hit the price. And it matches "Against the package" on the case pages, so the same idea carries the whole site.

### Both · "What's not included"

**Now:** Clearly defined before work begins.
The section lists exclusions. The headline is a generic reassurance that does not mention them, contains a "clearly", and is identical on both pages.

**Proposed:** **No surprises later.**

Names the benefit of showing exclusions at all. Short, plain, and it is the actual promise.

---

## Two more worth your eye

**Home · "Choose what fits."** — was true, now is not. The Website card directly beneath it says *"Requires a brand. Yours or ours."* So the page offers a free choice and then withdraws it one line down. **Two packages, in order.** is honest. Lower confidence than the four above — it may over-correct, since a client who already holds the four assets genuinely can choose either.

**Brand and Website pricing blocks** repeat the page's own h1 as an h2 further down — *Brand for Your Business* appears twice on the Brand page. Harmless, but it is a headline slot spending itself on a name the reader already has.

---

## Summary

| Where | From | To |
|---|---|---|
| Website · what this is | A clear business website. | **It gets finished.** |
| Brand · what this is | Practical brand definition. | **Six decisions, made properly.** |
| Brand · included | Base package | **All six, every time.** |
| Website · included | Base package | **All five, every time.** |
| Both · not included | Clearly defined before work begins. | **No surprises later.** |
| Home · services | Choose what fits. | **Two packages, in order.** *(your call)* |

Five confident, one flagged. All are single-string swaps in `index.html`, no structure moves.
