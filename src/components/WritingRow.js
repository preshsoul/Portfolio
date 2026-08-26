import { Link } from "react-router-dom";
import { WRITING_CATEGORY_LABELS, WRITING_STATUS_LABELS } from "../data/writings";

export default function WritingRow({ item }) {
  const content = (
    <>
      <div>
        <p>
          {WRITING_CATEGORY_LABELS[item.category] || item.category}
          {item.status ? ` / ${WRITING_STATUS_LABELS[item.status] || item.status}` : ""}
        </p>
        <h3>{item.title}</h3>
        {item.subtitle && <span>{item.subtitle}</span>}
        <small>
          {[item.date, item.format, item.readingTime].filter(Boolean).join(" / ")}
        </small>
      </div>
      <b>{item.ctaLabel || (item.url ? "Read ↗" : item.date)}</b>
    </>
  );

  if (!item.url) return <article className="writing-row">{content}</article>;
  if (item.url.startsWith("/")) return <Link className="writing-row" to={item.url}>{content}</Link>;
  return <a className="writing-row" href={item.url} target="_blank" rel="noopener noreferrer">{content}</a>;
}
