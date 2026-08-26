# Portfolio Blog Section Recommendations

Date: August 26, 2026

## Core Direction

The writing section should stop behaving like a neat archive and start behaving like editorial proof. The strongest blog sections on sites like [Notion](https://www.notion.com/blog), [Figma](https://www.figma.com/blog/), [Vercel](https://vercel.com/blog), [Shopify](https://www.shopify.com/blog), and [Mailchimp Resources](https://mailchimp.com/resources/) all do one thing especially well: they help different visitors find the right entry point fast.

For this portfolio, the page should answer:

1. What kind of writing lives here?
2. What should I read first?
3. How does this connect to the work I might hire you for?

## What To Change First

### 1. Add a `Start here` layer

Right under the page intro, add 3 to 4 hand-picked pieces with clear framing such as:

- Best first read for research-led strategy
- Best proof of editorial systems thinking
- Best personal essay for voice and range
- Best long-form piece

This is the highest-leverage change because it gives busy visitors a guided route instead of making them browse the whole archive.

### 2. Make the featured section intentional, not just prominent

The current featured grid in [src/pages/WritingPage.js](C:/Users/Preshsoul/my-portfolio/src/pages/WritingPage.js:20) is visually strong, but it should explain why each piece is there.

Add:

- date
- format or type
- one-line reason it matters
- better CTA copy than only `Read piece ↗`

Good examples:

- `Read the research brief`
- `Read the essay`
- `Read the book excerpt`
- `View the case-linked analysis`

### 3. Enrich every writing row

The current row component in [src/components/WritingRow.js](C:/Users/Preshsoul/my-portfolio/src/components/WritingRow.js:1) is too minimal for fast evaluation. Each row should show:

- date
- category
- short summary
- optional reading time
- optional source badge like `Substack`, `Book`, `Case study`, `External`

This improves scan speed and gives the archive more editorial texture.

### 4. Rework the taxonomy around audience intent

The current filters are workable, but they are still mostly content-type labels. Use a more decision-friendly structure.

Recommended direction:

- `Start here`
- `Research`
- `Institutional`
- `Essays`
- `Notes`

Alternative, more client-facing direction:

- `Strategy`
- `Editorial systems`
- `Culture writing`
- `Books & reports`

Pick one and keep it consistent everywhere.

### 5. Add a second discovery layer before the archive list

Borrow the "multiple paths into the corpus" pattern from the best resource hubs.

Add one strip such as:

- `For clients and collaborators`
- `Books, reports, and deep dives`
- `Essays on people and culture`

This makes the page feel curated, not dumped.

### 6. Build owned pages for your best pieces

Do not rely only on external Substack links for your highest-value work. Keep Substack for the full archive, but create on-site pages for flagship writing.

Priority candidates:

- research-led pieces
- book or report excerpts
- writing that directly supports your consulting or editorial positioning

Benefits:

- better SEO and share previews
- stronger internal linking
- room for related-reading modules
- room for richer proof framing

### 7. Add related-reading modules

Every strong blog section keeps people moving. Add a `Read next` area that links writing to:

- another essay
- a relevant case study
- a research artifact
- the contact page

This turns writing into a conversion surface instead of a dead end.

### 8. Add a subscription or follow CTA earlier

The current bottom CTA in [src/pages/WritingPage.js](C:/Users/Preshsoul/my-portfolio/src/pages/WritingPage.js:38) is too late and too generic. Add a mid-page prompt that explains the value of following:

- essays on people, culture, and attention
- research notes and books
- occasional institutional and strategy thinking

Even if Substack stays the backend, the portfolio should frame the invite.

## Recommended Page Blueprint

### Writing landing page

- Intro
- `Start here` picks
- Featured trio
- Intent-based topic navigation
- Curated discovery strip
- Archive list with richer rows
- Subscribe or inquiry CTA
- Full archive link

### Flagship article page

- Title, dek, date, reading time, category
- Hero image if the piece benefits from one
- Optional `On this page` navigation for long reads
- Body
- Related reading
- CTA to subscribe, inquire, or view adjacent work

## Content Model To Add

Extend [src/data/writings.js](C:/Users/Preshsoul/my-portfolio/src/data/writings.js:1) with fields like:

- `slug`
- `publishedAt`
- `readingTime`
- `coverImage`
- `format`
- `series`
- `featuredReason`
- `externalSource`
- `ctaLabel`
- `relatedCaseStudySlugs`

## Technical Recommendations

If you build owned article pages, implement:

- semantic HTML using `article`, `main`, and clear headings
- `BlogPosting` or `Article` schema
- Open Graph and social card metadata
- responsive images
- no lazy loading on the hero image if it becomes the LCP image
- descriptive link text

## Suggested Build Order

### Phase 1

- add `Start here`
- enrich row metadata
- improve featured logic and CTA labels
- revise filter labels
- add a mid-page subscribe or contact prompt

### Phase 2

- create owned flagship article pages
- add related-reading modules
- add structured data and share metadata

### Phase 3

- add search if the archive grows significantly
- add series or topic pages
- add analytics for clicks on featured items, filters, and outbound archive links

## Bottom Line

The current writing section already looks distinct. What it needs now is stronger editorial architecture: clearer entry points, richer metadata, better next-step logic, and a tighter connection between writing and the work you want to attract.
