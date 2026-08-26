# Writing Framework

This portfolio can now hold published work, pitch-ready articles, drafts and permanent notes in one place. The main file is:

```text
src/data/writings.js
```

## The Mental Model

Think of each writing item as a small Obsidian-style card:

- `category` says the shelf it belongs on.
- `status` says where the piece is in its life.
- `tags` say the ideas it touches.
- `connections` say what else it should be read beside.
- `body` turns the item into an owned `/writing/:slug` page.
- `bodyPath` can point to a Markdown file in `public/writing` when the article is long.

## Statuses

Use these exact status keys:

```js
PUBLISHED
SEEKING_HOME
WORKING_NOTE
PITCH_READY
ARCHIVE
```

Suggested meanings:

- `WORKING_NOTE`: fragment, live thought, early sketch.
- `PITCH_READY`: polished enough to send out.
- `SEEKING_HOME`: actively looking for an editor or publication.
- `PUBLISHED`: already published on Substack, Selar, the portfolio or elsewhere.
- `ARCHIVE`: kept for record, but not something you are pushing.

## Categories

Use these exact category keys:

```js
ARTICLE_LAB
RESEARCH
INSTITUTIONAL
ESSAY
NOTES
```

## How To Paste A New Article

For long articles, the cleanest path is:

1. Create a Markdown file in `public/writing`, for example `public/writing/your-clean-url-slug.md`.
2. Paste the full article into that `.md` file.
3. Add a writing object in `src/data/writings.js`.
4. Set `bodyPath: "/writing/your-clean-url-slug.md"`.

That keeps the article body out of the data file and feels closest to an Obsidian vault.

## Inline Paste Option

Duplicate this shape inside the `WRITINGS` array:

```js
{
  slug: "your-clean-url-slug",
  title: "Your Article Title",
  subtitle: "One sentence that explains the article's promise.",
  date: "Aug 2026",
  publishedAt: "2026-08-26",
  category: "ARTICLE_LAB",
  status: "SEEKING_HOME",
  format: "Pitch-ready article",
  readingTime: "7 min",
  tags: ["Tag one", "Tag two", "Tag three"],
  connections: ["Related idea", "Another trail", "A case study or future essay"],
  url: "/writing/your-clean-url-slug",
  ctaLabel: "Read draft",
  startHere: false,
  featured: false,
  featuredReason: "Why this is worth reading, if you feature it later.",
  bodyPath: "/writing/your-clean-url-slug.md",
},
```

For shorter pieces, you can paste directly into the data object instead:

```js
{
  slug: "your-clean-url-slug",
  title: "Your Article Title",
  subtitle: "One sentence that explains the article's promise.",
  date: "Aug 2026",
  publishedAt: "2026-08-26",
  category: "ARTICLE_LAB",
  status: "SEEKING_HOME",
  format: "Pitch-ready article",
  readingTime: "7 min",
  tags: ["Tag one", "Tag two", "Tag three"],
  connections: ["Related idea", "Another trail", "A case study or future essay"],
  url: "/writing/your-clean-url-slug",
  ctaLabel: "Read draft",
  body: `
# Optional Internal Heading

Paste the article here.

Use normal paragraphs with blank lines between them.

## Section Heading

More article text.

- Bullet point one
- Bullet point two

> Pull quote or important line.
`,
},
```

## Pasting Rules

- For long pieces, paste into a `.md` file in `public/writing` and use `bodyPath`.
- For shorter pieces, paste the article between the backticks after `body:`.
- Keep a blank line between paragraphs.
- Use `#` for the article's internal title if you want one.
- Use `##` for section headings.
- Use `-` for bullets.
- Use `>` for blockquotes.
- Use `![Alt text](image-url)` for image references.
- Avoid raw HTML in the article body.
- If your article contains a backtick, replace it with an apostrophe or wrap that sentence differently.

## How It Appears On The Site

- Any item with `url: "/writing/your-slug"` opens as an owned article page.
- Any item with an external URL still opens outside the portfolio.
- Tags appear on the writing page and can be used as filters.
- `startHere: true` puts the piece in the guided starting rail.
- `featured: true` keeps it eligible for the large featured grid.

## Good Tag Practice

Tags should describe ideas, not only topics. Use:

- `Attention`
- `Masculinity`
- `Financial behaviour`
- `Editorial strategy`
- `Decision models`
- `Nigeria`
- `AI`
- `Pitch drafts`

Avoid making a new tag for every tiny variation. If two tags mean almost the same thing, pick one and keep using it.
