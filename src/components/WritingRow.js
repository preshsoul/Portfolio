import { Link } from "react-router-dom";
import { WRITING_CATEGORY_LABELS, WRITING_STATUS_LABELS } from "../data/writings";

export default function WritingRow({ item, variant = "index", priority = false }) {
  const content = (
    <>
      {item.backdropImage && (
        <img
          className="writing-row-image"
          src={item.backdropImage}
          alt=""
          aria-hidden="true"
          loading={priority ? "eager" : "lazy"}
        />
      )}
      <span className="writing-row-scrim" aria-hidden="true" />
      <div className="writing-row-content">
        <p className="writing-row-kicker">
          {WRITING_CATEGORY_LABELS[item.category] || item.category}
          {item.status ? ` / ${WRITING_STATUS_LABELS[item.status] || item.status}` : ""}
        </p>
        <h3>{item.title}</h3>
        {item.subtitle && <span>{item.subtitle}</span>}
        <small>
          {[item.date, item.format, item.readingTime].filter(Boolean).join(" / ")}
        </small>
        {item.tags?.length > 0 && (
          <ul className="writing-row-tags" aria-label={`Tags for ${item.title}`}>
            {item.tags.slice(0, 3).map((tag) => (
              <li key={tag}>{tag}</li>
            ))}
          </ul>
        )}
      </div>
      <b>{item.ctaLabel || (item.url ? "Read" : item.date)} <span aria-hidden="true">↗</span></b>
    </>
  );
  const className = `writing-row writing-row--${variant}${item.backdropImage ? "" : " writing-row--empty"}`;

  if (!item.url) return <article className={className}>{content}</article>;
  if (item.url.startsWith("/")) return <Link className={className} to={item.url}>{content}</Link>;
  return <a className={className} href={item.url} target="_blank" rel="noopener noreferrer">{content}</a>;
}
