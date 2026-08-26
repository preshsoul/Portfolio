import { useState } from "react";
import { Link } from "react-router-dom";
import ScrollReveal from "../components/ScrollReveal";
import WritingRow from "../components/WritingRow";
import { getWritingTags, WRITINGS, WRITING_CATEGORY_LABELS, WRITING_STATUS_LABELS } from "../data/writings";

export default function WritingPage() {
  const [filter, setFilter] = useState("All");
  const [activeTag, setActiveTag] = useState("All");
  const availableTags = getWritingTags();
  const items = WRITINGS.filter((item) => {
    const categoryMatch = filter === "All" || item.category === filter;
    const tagMatch = activeTag === "All" || item.tags?.includes(activeTag);

    return categoryMatch && tagMatch;
  });
  const startHere = WRITINGS.filter((item) => item.startHere).slice(0, 4);
  const featured = WRITINGS.filter((item) => item.featured).slice(0, 3);
  const labCount = WRITINGS.filter((item) => item.status && item.status !== "PUBLISHED").length;

  return (
    <section className="route-page route-page--writing">
      <ScrollReveal>
        <header className="route-page-heading">
          <p>03 / Writing tracks</p>
          <h1>Language keeps<br />the whole thing moving.</h1>
          <span>Research, institutions, people, culture and pieces still looking for a home.</span>
        </header>
      </ScrollReveal>
      <ScrollReveal delay={60}>
        <section className="writing-notebook">
          <div>
            <span>Notebook / Zettelkasten</span>
            <h2>Drafts do not have to disappear while they wait for permission.</h2>
          </div>
          <p>
            This section can hold pitch-ready articles, permanent notes, fragments and published work in the same
            system. Every piece gets a status, tags and connections so the archive behaves more like a thinking map
            than a drawer.
          </p>
          <b>{labCount} working note{labCount === 1 ? "" : "s"} currently inside the article lab.</b>
        </section>
      </ScrollReveal>
      <section className="writing-start-here" aria-label="Start here">
        {startHere.map((item, index) => {
          const card = (
            <>
              <span>0{index + 1} / {WRITING_STATUS_LABELS[item.status] || item.status}</span>
              <h2>{item.title}</h2>
              <p>{item.featuredReason || item.subtitle}</p>
              <b>{item.ctaLabel || "Start here"} ↗</b>
            </>
          );

          if (item.url?.startsWith("/")) return <Link key={item.slug || item.title} to={item.url}>{card}</Link>;
          return <a key={item.slug || item.title} href={item.url} target="_blank" rel="noopener noreferrer">{card}</a>;
        })}
      </section>
      <section className="writing-featured">
        {featured.map((item, index) => (
          item.url?.startsWith("/") ? (
            <Link key={item.title} to={item.url}>
              <span>0{index + 1} / {WRITING_CATEGORY_LABELS[item.category]}</span>
              <h2>{item.title}</h2>
              <p>{item.featuredReason || item.subtitle}</p>
              <b>{item.ctaLabel || "Read piece"} ↗</b>
            </Link>
          ) : (
            <a key={item.title} href={item.url} target="_blank" rel="noopener noreferrer">
              <span>0{index + 1} / {WRITING_CATEGORY_LABELS[item.category]}</span>
              <h2>{item.title}</h2>
              <p>{item.featuredReason || item.subtitle}</p>
              <b>{item.ctaLabel || "Read piece"} ↗</b>
            </a>
          )
        ))}
      </section>
      <div className="route-filter route-filter--writing" aria-label="Filter writing">
        {Object.entries(WRITING_CATEGORY_LABELS).map(([key, label]) => (
          <button key={key} onClick={() => setFilter(key)} className={filter === key ? "active" : ""} aria-pressed={filter === key}>{label}</button>
        ))}
      </div>
      <div className="writing-tag-filter" aria-label="Filter writing by tag">
        <button onClick={() => setActiveTag("All")} className={activeTag === "All" ? "active" : ""} aria-pressed={activeTag === "All"}>All tags</button>
        {availableTags.map((tag) => (
          <button key={tag} onClick={() => setActiveTag(tag)} className={activeTag === tag ? "active" : ""} aria-pressed={activeTag === tag}>{tag}</button>
        ))}
      </div>
      <div className="writing-index">
        {items.map((item, index) => <ScrollReveal key={`${item.title}-${index}`} delay={index * 35}><WritingRow item={item} /></ScrollReveal>)}
      </div>
      <section className="writing-paste-guide">
        <p>How new articles enter the system</p>
        <ol>
          <li>Create a Markdown file in `public/writing`, using a clean slug for the filename.</li>
          <li>Add the metadata object in `src/data/writings.js` and point `url` to `/writing/your-slug`.</li>
          <li>Set `bodyPath` to `/writing/your-slug.md` so the article opens as an owned page.</li>
          <li>Use `tags`, `connections` and `status` to place the piece inside the notebook system.</li>
        </ol>
      </section>
      <a className="route-link" href="https://thermopresh.substack.com" target="_blank" rel="noopener noreferrer">Full Substack archive <span>↗</span></a>
    </section>
  );
}
