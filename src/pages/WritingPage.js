import { useMemo, useState } from "react";
import ScrollReveal from "../components/ScrollReveal";
import WritingRow from "../components/WritingRow";
import { getWritingTags, WRITINGS, WRITING_CATEGORY_LABELS } from "../data/writings";

const TRAILS = [
  { id: "money", title: "Money and behaviour", note: "Saving, wealth, appetite and the architecture around choice.", terms: ["Financial behaviour", "Decision models", "Choice architecture", "Wealth", "Consumption"] },
  { id: "tenderness", title: "Tenderness and masculinity", note: "Care, devotion, friendship and the language around men who feel.", terms: ["Masculinity", "Tenderness", "Devotion", "Care", "Love", "Friendship"] },
  { id: "nigeria", title: "Nigeria and everyday systems", note: "Formal structures, ordinary survival and the arrangements between them.", terms: ["Nigeria", "NYSC", "Community", "Survival", "Everyday life"] },
  { id: "sport", title: "Sport and image-making", note: "Athlete mythology, advertising, neighbourhoods and remembered images.", terms: ["Adidas", "Anthony Edwards", "Sports marketing", "Football", "Advertising", "Neighbourhoods"] },
  { id: "institutions", title: "Work and institutional language", note: "Editorial systems, infrastructure, proposals and defensible claims.", terms: ["Editorial strategy", "Infrastructure", "Executive writing", "Editorial systems", "Grant writing", "Proposal strategy"] },
  { id: "attention", title: "Choice, attention and AI", note: "Decision spaces, companionship, technology and the quality of attention.", terms: ["AI", "Attention", "Companionship", "Decision theory", "State transitions"] },
];

export default function WritingPage() {
  const [category, setCategory] = useState("All");
  const [activeTag, setActiveTag] = useState("All");
  const [trail, setTrail] = useState(null);
  const [query, setQuery] = useState("");
  const availableTags = getWritingTags();

  const items = useMemo(() => WRITINGS.filter((item) => {
    const categoryMatch = category === "All" || item.category === category;
    const tagMatch = activeTag === "All" || item.tags?.includes(activeTag);
    const activeTrail = TRAILS.find((candidate) => candidate.id === trail);
    const trailMatch = !activeTrail || item.tags?.some((tag) => activeTrail.terms.includes(tag));
    const haystack = `${item.title} ${item.subtitle || ""} ${(item.tags || []).join(" ")}`.toLowerCase();
    return categoryMatch && tagMatch && trailMatch && haystack.includes(query.trim().toLowerCase());
  }), [activeTag, category, query, trail]);

  const selectTrail = (id) => {
    setTrail((current) => current === id ? null : id);
    setActiveTag("All");
  };

  return (
    <section className="route-page route-page--writing">
      <ScrollReveal><header className="route-page-heading"><p>03 / Writing room</p><h1>Follow what<br />makes you curious.</h1><span>Research, culture, institutions and personal essays—arranged as paths rather than a wall of tags.</span></header></ScrollReveal>

      <section className="writing-trails" aria-labelledby="writing-trails-heading">
        <div className="writing-section-heading"><span>Curated trails</span><h2 id="writing-trails-heading">Read by trail, not just by date.</h2><p>A first path through the room can begin with a question, then cross between professional research and cultural writing where the connection is real.</p></div>
        <h3 className="trail-subheading">A first path through the room.</h3>
        <div className="trail-grid">
          {TRAILS.map((item, index) => (
            <button key={item.id} type="button" onClick={() => selectTrail(item.id)} aria-pressed={trail === item.id}>
              <span>0{index + 1}</span><h3>{item.title}</h3><p>{item.note}</p>
            </button>
          ))}
        </div>
      </section>

      <section className="writing-browse" aria-labelledby="browse-writing-heading">
        <div className="writing-section-heading writing-section-heading--compact"><span>Browse the archive</span><h2 id="browse-writing-heading">Choose a shelf, then follow a tag.</h2><p id="writing-result-count" aria-live="polite">{items.length} piece{items.length === 1 ? "" : "s"} showing.</p></div>
        <label className="writing-search" htmlFor="writing-search"><span>Search by title, idea or tag</span><input id="writing-search" type="search" value={query} onChange={(event) => setQuery(event.target.value)} placeholder="Try “attention” or “Nigeria”" /></label>
        <div className="route-filter route-filter--writing" role="group" aria-label="Filter writing by shelf">
          {Object.entries(WRITING_CATEGORY_LABELS).map(([key, label]) => <button key={key} type="button" onClick={() => setCategory(key)} className={category === key ? "active" : ""} aria-pressed={category === key}>{label}</button>)}
        </div>
        <details className="writing-all-tags">
          <summary>All tags <span>{availableTags.length}</span></summary>
          <div className="writing-tag-filter" role="group" aria-label="Filter writing by tag">
            <button type="button" onClick={() => setActiveTag("All")} className={activeTag === "All" ? "active" : ""} aria-pressed={activeTag === "All"}>All tags</button>
            {availableTags.map((tag) => <button type="button" key={tag} onClick={() => { setActiveTag(tag); setTrail(null); }} className={activeTag === tag ? "active" : ""} aria-pressed={activeTag === tag}>{tag}</button>)}
          </div>
        </details>
        {(trail || activeTag !== "All" || category !== "All" || query) && <button className="clear-writing-filters" type="button" onClick={() => { setTrail(null); setActiveTag("All"); setCategory("All"); setQuery(""); }}>Clear filters</button>}
        {items.length ? <div className="writing-index">{items.map((item, index) => <ScrollReveal key={`${item.title}-${index}`} delay={index * 25}><WritingRow item={item} /></ScrollReveal>)}</div> : <p className="empty-writing-state">No pieces match this path yet. Clear the filters and try another question.</p>}
      </section>
      <a className="route-link" href="https://thermopresh.substack.com" target="_blank" rel="noopener noreferrer">Full Substack archive <span>↗</span></a>
    </section>
  );
}
