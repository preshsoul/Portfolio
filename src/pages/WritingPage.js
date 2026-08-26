import { useState } from "react";
import ScrollReveal from "../components/ScrollReveal";
import WritingRow from "../components/WritingRow";
import { getWritingTags, WRITINGS, WRITING_CATEGORY_LABELS } from "../data/writings";

export default function WritingPage() {
  const [filter, setFilter] = useState("All");
  const [activeTag, setActiveTag] = useState("All");
  const availableTags = getWritingTags();
  const items = WRITINGS.filter((item) => {
    const categoryMatch = filter === "All" || item.category === filter;
    const tagMatch = activeTag === "All" || item.tags?.includes(activeTag);

    return categoryMatch && tagMatch;
  });
  const featured = WRITINGS.filter((item) => item.featured).slice(0, 3);

  return (
    <section className="route-page route-page--writing">
      <ScrollReveal>
        <header className="route-page-heading">
          <p>03 / Writing tracks</p>
          <h1>Language keeps<br />the whole thing moving.</h1>
          <span>Research, institutions, people, culture and long-form essays in one reading room.</span>
        </header>
      </ScrollReveal>
      <ScrollReveal delay={60}>
        <section className="writing-notebook">
          <div>
            <span>Notebook / Zettelkasten</span>
            <h2>Read by trail, not just by date.</h2>
          </div>
          <p>
            Essays, research, notes and long-form pieces sit close enough for a reader to move from one idea to
            the next: sport into advertising, culture into behaviour, personal writing into public systems.
          </p>
        </section>
      </ScrollReveal>
      <section className="writing-featured" aria-labelledby="featured-writing-heading">
        <div className="writing-section-heading">
          <span>Featured route</span>
          <h2 id="featured-writing-heading">A first path through the room.</h2>
          <p>Three pieces that quickly show the range: sport and image-making, decision systems, and personal-cultural essaying.</p>
        </div>
        <div className="writing-featured-grid">
        {featured.map((item, index) => (
          <ScrollReveal key={item.slug || item.title} delay={index * 60}>
            <WritingRow item={item} variant={index === 0 ? "feature" : "feature-small"} priority={index === 0} />
          </ScrollReveal>
        ))}
        </div>
      </section>
      <section className="writing-browse" aria-labelledby="browse-writing-heading">
        <div className="writing-section-heading writing-section-heading--compact">
          <span>Browse the archive</span>
          <h2 id="browse-writing-heading">Choose a shelf, then follow a tag.</h2>
          <p>{items.length} piece{items.length === 1 ? "" : "s"} showing.</p>
        </div>
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
      </section>
      <a className="route-link" href="https://thermopresh.substack.com" target="_blank" rel="noopener noreferrer">Full Substack archive <span>↗</span></a>
    </section>
  );
}
