# Research Report: Best-in-Class Blog Section Patterns for This Portfolio

- Audience: Precious Ajayi
- Date: August 26, 2026
- Scope: Research how strong modern blog and resource sections are structured, then translate those patterns into recommendations for the writing section in this portfolio.
- Assumptions:
  - The portfolio is meant to win research, strategy, editorial, and institutional writing opportunities.
  - The current writing surface is the React route in [src/pages/WritingPage.js](C:/Users/Preshsoul/my-portfolio/src/pages/WritingPage.js:1), supported by [src/components/WritingRow.js](C:/Users/Preshsoul/my-portfolio/src/components/WritingRow.js:1), [src/data/writings.js](C:/Users/Preshsoul/my-portfolio/src/data/writings.js:1), and [src/index.css](C:/Users/Preshsoul/my-portfolio/src/index.css:159).
  - The site can continue linking to Substack, but the portfolio should own the framing, discovery, and conversion around its strongest pieces.

## Executive Answer

The best blog sections are not built as simple archives. They are built as editorial systems with multiple entry paths: featured stories, topic navigation, search or filtering, clear metadata, strong summaries, related-reading loops, and a subscription or contact conversion layer. The strongest examples also treat the blog as part of a wider knowledge surface, not a dead-end list of posts.

For this portfolio, the main shift should be from "writing index" to "editorial proof surface." The writing section should help visitors answer three questions quickly:

1. What kind of thinking do you publish?
2. Which pieces should I start with?
3. How does this writing connect to the work you want to be hired for?

## Current State Audit

The current writing route does several things well:

- It already has a strong visual identity and clear hierarchy.
- It has a featured area, category filters, and a complete archive link.
- It keeps the tone aligned with the rest of the portfolio.

The biggest gaps are structural rather than stylistic:

- The featured grid is visually bold, but it does not explain why those pieces matter or who they are for.
- Rows do not surface date in the visible link treatment for linked items, even though the data model includes it.
- Cards rely almost entirely on title and subtitle; there is no reading time, format, audience cue, cover art, or proof signal.
- The page offers only one discovery model: featured items plus a flat archive.
- The page ends in a single outbound archive CTA instead of continuing the reading journey.
- The current taxonomy is content-type oriented, but not audience- or decision-oriented.

## What the Best Blog Sections Actually Do

### 1. They create several ways into the same corpus

Current examples consistently provide multiple entry points:

- [Notion’s blog](https://www.notion.com/blog) leads with top-level topic paths such as `Latest`, `Notion HQ`, `For Teams`, `Inspiration`, `Pioneers`, `Tech`, and `First Block`.
- [Figma’s blog](https://www.figma.com/blog/) combines category navigation, featured topics, a prominent story rail, and newsletter CTAs.
- [Vercel’s blog](https://vercel.com/blog) combines category tabs, search, featured articles, and the main post feed.
- [Mailchimp Resources](https://mailchimp.com/resources/) behaves more like a knowledge hub, organizing content by business stage, tactic, format, and learning mode.
- [Shopify’s blog](https://www.shopify.com/blog) mixes featured stories, latest content, topic paths, and subscription capture.

The shared pattern: strong blog sections do not assume every visitor wants to browse chronologically.

### 2. They make scanning easy with strong information scent

Nielsen Norman Group’s research on [information scent](https://www.nngroup.com/articles/information-scent/) and [link writing](https://www.nngroup.com/articles/writing-links/) reinforces what these examples do in practice:

- titles clearly signal the destination
- summaries explain the angle
- images support meaning rather than decoration
- categories and labels help the user predict what they will get next

This matters for your portfolio because many visitors will land here evaluating fit in a hurry. Better cues increase the odds that they click the right piece.

### 3. They expose useful metadata early

The best examples visibly attach context to each card:

- date
- author
- topic or category
- short dek or summary
- sometimes a format or series label

On [Figma’s blog](https://www.figma.com/blog/), posts visibly surface category/topic clusters, date, author, and a concise description. On [Vercel’s blog](https://vercel.com/blog), the cards visibly show date, category, title, summary, and author names. This reduces decision friction.

### 4. They treat long-form pieces as navigable objects

NN/g’s guidance on [tables of contents](https://www.nngroup.com/articles/table-of-contents/) and [in-page links](https://www.nngroup.com/articles/in-page-links-content-navigation/) shows that long pages benefit from a scannable outline and direct jumps when the page is truly information-dense. That pattern appears widely in strong research and thought-leadership publishing.

Important nuance from the same source: a table of contents helps when content is long and logically chunked; it adds clutter on short pages.

### 5. They continue the reading journey after the click

NN/g’s research on [related content](https://www.nngroup.com/articles/related-content-pageviews/) shows that relevant follow-up links reduce dead ends and increase exploration when they are clearly tied to the current interest. The best blog systems do this naturally:

- topic collections
- "read next" modules
- series pages
- adjacent case studies
- newsletter signup after demonstrated interest

This is especially relevant for a portfolio. A visitor who reads one strong essay should immediately see the next most useful proof item.

### 6. They convert attention into subscription, inquiry, or trust

Current best examples repeatedly place subscription CTAs in context:

- [Figma](https://www.figma.com/blog/) includes newsletter signup around the editorial surface.
- [Shopify](https://www.shopify.com/blog) places email subscription near the main resource flow.
- [Mailchimp Resources](https://mailchimp.com/resources/) uses a "stay informed and inspired" signup layer after organizing the archive.

For a portfolio, the equivalent conversion can be one of:

- subscribe for new essays or research notes
- book a project inquiry
- view relevant case studies
- download a flagship paper

### 7. They are technically prepared for search, sharing, and performance

Authoritative technical guidance points to a clear baseline:

- [Google’s Article structured data documentation](https://developers.google.com/search/docs/appearance/structured-data/article) recommends `Article`, `NewsArticle`, or `BlogPosting` markup so Search can better understand article title, image, and date.
- [Google’s page experience guidance](https://developers.google.com/search/docs/appearance/page-experience) emphasizes mobile usability, clear main content, and good Core Web Vitals.
- [web.dev on LCP](https://web.dev/articles/optimize-lcp) warns against lazy-loading the LCP image.
- [web.dev on responsive images](https://web.dev/articles/responsive-images) supports lazy loading for below-the-fold images and responsive image delivery.
- [web.dev on social discovery](https://web.dev/articles/social-discovery) documents Open Graph and card metadata for richer sharing.
- [MDN on `<article>`](https://developer.mozilla.org/en-US/docs/Web/HTML/Reference/Elements/article) and [semantic accessibility](https://developer.mozilla.org/en-US/docs/Learn_web_development/Core/Accessibility/HTML) reinforces that semantic structure improves reuse, accessibility, and browser support.

## What This Means for This Portfolio

This portfolio should not copy a SaaS blog wholesale. It should borrow the strongest mechanics and adapt them to a credibility-driven writing surface.

### Recommendation 1: Reframe the page as an editorial proof surface

Change the job of the page from "here is my writing archive" to "here is the writing that proves how I think."

Implications:

- Add a short "start here" strip near the top.
- Group featured work by purpose, not only chronology.
- Connect essays to adjacent work and research.

### Recommendation 2: Replace one flat archive with multiple entry paths

Keep the featured grid, but add at least three navigational paths:

- `Start here`
- `Research & strategy`
- `Essays & culture`
- `Institutional writing`

The labels should reflect how a hiring manager or collaborator thinks, not just how the content was produced.

### Recommendation 3: Upgrade card anatomy

Every visible entry should expose more context:

- date
- type
- short promise
- destination label
- optional reading time
- optional proof cue such as `Case-linked`, `Book excerpt`, `Published externally`

Right now [src/components/WritingRow.js](C:/Users/Preshsoul/my-portfolio/src/components/WritingRow.js:1) only shows category, title, subtitle, and a generic `Read ↗` for linked items. That is elegant, but weaker for fast scanning.

### Recommendation 4: Make the featured area editorial, not just visual

The current featured block in [src/pages/WritingPage.js](C:/Users/Preshsoul/my-portfolio/src/pages/WritingPage.js:20) is strong art direction, but the content logic is opaque. Improve it by giving each featured story one of these roles:

- flagship research piece
- sharp cultural essay
- institutional writing sample

Then add one line of why it is featured, for example:

- "Best starting point for research-led strategy work"
- "Shows narrative voice and audience range"
- "Demonstrates institutional editorial judgment"

### Recommendation 5: Add a second discovery layer below the featured section

Do not go straight from hero to filters to a flat list. Add one curated layer such as:

- `Start with these 4`
- `If you hire me for research, read this`
- `If you care about voice, read this`
- `Books, papers, and long-form work`

This is one of the biggest differences between ordinary archives and high-performing resource sections.

### Recommendation 6: Use filters more intentionally

The current filter is functional, but it inherits the weaknesses of the taxonomy. NN/g’s [filter guidance](https://www.nngroup.com/articles/filter-categories-values/) recommends values that are appropriate, predictable, jargon-light, and prioritized.

For this portfolio, a stronger filter set could be:

- `Start here`
- `Research`
- `Institutional`
- `Essays`
- `Notes`

Or, if you want a more client-facing system:

- `Strategy`
- `Editorial systems`
- `Culture writing`
- `Books & reports`

### Recommendation 7: Build owned article pages for the highest-value pieces

For the best 4 to 8 pieces, create on-site article detail pages instead of linking only outward. Keep the full Substack archive, but own the key pieces that matter most for:

- SEO
- internal linking
- related-content loops
- case-study crosslinks
- richer metadata
- branded share previews

Those pages should include:

- hero title, dek, date, reading time
- strong intro summary
- optional "On this page" table of contents for long pieces
- related case studies or companion essays
- bottom CTA to contact, subscribe, or keep reading

### Recommendation 8: Add related-reading and cross-sell modules

Every article or writing cluster should point to the next relevant object:

- another essay
- a case study
- a research artifact
- a project inquiry CTA

This is the cleanest way to turn writing into portfolio conversion.

### Recommendation 9: Add a subscription or follow mechanism inside the portfolio

The current archive CTA at the bottom of [src/pages/WritingPage.js](C:/Users/Preshsoul/my-portfolio/src/pages/WritingPage.js:38) sends users off-site, but too late and without much framing. A better model is:

- contextual inline CTA after the first cluster
- softer newsletter or Substack prompt mid-page
- final CTA at the bottom

Even if Substack remains the backend, the portfolio should explain what subscribing gets the reader.

### Recommendation 10: Treat article metadata and semantics as product work

If you build owned article pages, implement:

- semantic `article`, `header`, `main`, and `section` structure
- `BlogPosting` or `Article` JSON-LD
- strong Open Graph and social card images
- responsive images
- no lazy loading for the hero image if it is the LCP image
- descriptive CTA labels instead of repeated generic `Read more`

## Suggested Information Architecture for This Portfolio

### Writing landing page

- Hero: what the writing is for
- Start here rail: 3 to 4 best first clicks
- Featured trio: one research, one institutional, one essay
- Topic or intent navigation
- Archive list with richer cards
- Subscription or inquiry CTA
- Full archive link

### High-value article page

- Kicker, title, dek, date, reading time, category
- Optional proof badge such as `Published essay`, `Independent research`, `Book excerpt`
- Body
- Table of contents if long enough
- Pull quote or summary box if useful
- Related reading
- CTA to hire, subscribe, or read adjacent work

## Data Model Changes Needed

The current items in [src/data/writings.js](C:/Users/Preshsoul/my-portfolio/src/data/writings.js:1) should likely grow to include:

- `slug`
- `publishedAt`
- `readingTime`
- `coverImage`
- `audience`
- `format`
- `series`
- `featuredReason`
- `externalSource`
- `ctaLabel`
- `relatedCaseStudySlugs`

## Priority Order

### Phase 1: Highest value

- improve taxonomy
- enrich card metadata
- add a `Start here` layer
- rework featured logic by intent
- add contextual CTA before the archive ends

### Phase 2: Strategic lift

- build owned article pages for flagship pieces
- add related reading modules
- add share-ready metadata and article schema

### Phase 3: Scale features

- add search if archive size keeps growing
- add series pages or topic pages
- add newsletter segmentation or richer analytics

## Limitations and Open Questions

- I did not inspect live analytics, so recommendations about search and subscription are based on pattern fit rather than measured behavior on this site.
- I did not inspect live page-speed traces for the deployed site, so performance guidance is based on implementation best practices rather than real-user metrics.
- I treated the current writing route as the main blog surface; if there is a separate CMS or publishing pipeline planned, the implementation details may shift.

## Searches Performed

- official examples of modern blog and resource hubs
- UX research on table of contents, filters, links, related content, and information scent
- Google and web platform guidance for structured data, page experience, images, and semantics

## Reason for Stopping

The evidence converged. Another discovery wave was unlikely to materially change the answer because the same core patterns appeared across independent product blogs, UX research, and technical guidance.

## Source Ledger

- Tools & Craft – Notion Blog. Notion. Accessed August 26, 2026. https://www.notion.com/blog
- Figma Blog | Shortcut. Figma. Accessed August 26, 2026. https://www.figma.com/blog/
- Blog. Vercel. Accessed August 26, 2026. https://vercel.com/blog
- Ecommerce Marketing Blog. Shopify. Accessed August 26, 2026. https://www.shopify.com/blog
- Marketing Resources. Mailchimp. Accessed August 26, 2026. https://mailchimp.com/resources/
- Table of Contents: The Ultimate Design Guide. Nielsen Norman Group. October 6, 2023. https://www.nngroup.com/articles/table-of-contents/
- In-Page Links for Content Navigation. Nielsen Norman Group. October 1, 2023. https://www.nngroup.com/articles/in-page-links-content-navigation/
- Related Content Boosts Pageviews, When Done Right. Nielsen Norman Group. October 5, 2014. https://www.nngroup.com/articles/related-content-pageviews/
- Writing Hyperlinks: Salient, Descriptive, Start with Keyword. Nielsen Norman Group. March 9, 2014. https://www.nngroup.com/articles/writing-links/
- Information Scent: How Users Decide Where to Go Next. Nielsen Norman Group. February 2, 2020. https://www.nngroup.com/articles/information-scent/
- Defining Helpful Filter Categories and Values for Better UX. Nielsen Norman Group. July 15, 2018. https://www.nngroup.com/articles/filter-categories-values/
- Learn About Article Schema Markup. Google Search Central. Accessed August 26, 2026. https://developers.google.com/search/docs/appearance/structured-data/article
- Understanding page experience in Google Search results. Google Search Central. Accessed August 26, 2026. https://developers.google.com/search/docs/appearance/page-experience
- Optimize Largest Contentful Paint. web.dev. Accessed August 26, 2026. https://web.dev/articles/optimize-lcp
- Responsive images. web.dev. Accessed August 26, 2026. https://web.dev/articles/responsive-images
- Social discovery. web.dev. Accessed August 26, 2026. https://web.dev/articles/social-discovery
- `<article>`: The Article Contents element. MDN Web Docs. Updated April 24, 2026. https://developer.mozilla.org/en-US/docs/Web/HTML/Reference/Elements/article
- HTML: A good basis for accessibility. MDN Web Docs. Accessed August 26, 2026. https://developer.mozilla.org/en-US/docs/Learn_web_development/Core/Accessibility/HTML
