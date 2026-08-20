import { useState } from "react";
import ScrollReveal from "../components/ScrollReveal";
import WritingRow from "../components/WritingRow";
import { WRITINGS, WRITING_CATEGORY_LABELS } from "../data/writings";

export default function WritingPage() {
  const [filter, setFilter] = useState("All");
  const items = filter === "All" ? WRITINGS : WRITINGS.filter((item) => item.category === filter);
  const featured = WRITINGS.filter((item) => item.featured).slice(0, 3);

  return (
    <section className="route-page route-page--writing">
      <ScrollReveal>
        <header className="route-page-heading">
          <p>03 / Writing tracks</p>
          <h1>Language keeps<br />the whole thing moving.</h1>
          <span>Research, institutions, people and culture in the same frame.</span>
        </header>
      </ScrollReveal>
      <section className="writing-featured">
        {featured.map((item, index) => (
          <a key={item.title} href={item.url} target={item.url?.startsWith("http") ? "_blank" : undefined} rel={item.url?.startsWith("http") ? "noopener noreferrer" : undefined}>
            <span>0{index + 1} / {item.category}</span>
            <h2>{item.title}</h2>
            <p>{item.subtitle}</p>
            <b>Read piece ↗</b>
          </a>
        ))}
      </section>
      <div className="route-filter route-filter--writing" aria-label="Filter writing">
        {Object.entries(WRITING_CATEGORY_LABELS).map(([key, label]) => (
          <button key={key} onClick={() => setFilter(key)} className={filter === key ? "active" : ""}>{label}</button>
        ))}
      </div>
      <div className="writing-index">
        {items.map((item, index) => <ScrollReveal key={`${item.title}-${index}`} delay={index * 35}><WritingRow item={item} /></ScrollReveal>)}
      </div>
      <a className="route-link" href="https://thermopresh.substack.com" target="_blank" rel="noopener noreferrer">Full Substack archive <span>↗</span></a>
    </section>
  );
}
