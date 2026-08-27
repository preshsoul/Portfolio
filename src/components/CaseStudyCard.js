import { Link } from "react-router-dom";
import { ArrowUpRight } from "lucide-react";
import Tag from "./Tag";
import ProofBadge from "./ProofBadge";

export default function CaseStudyCard({ study, compact = false, index }) {
  const displayIndex = String(index || 1).padStart(2, "0");
  const coverImage = study.image || study.gallery?.[0]?.src;
  const coverAlt = study.imageAlt || study.gallery?.[0]?.alt || `${study.title} visual reference`;

  return (
    <Link
      to={`/work/${study.slug}`}
      className={`case-card ${compact ? "case-card--compact" : ""} ${coverImage ? "case-card--has-image" : "case-card--generated"}`}
    >
      <div className="case-card-media" aria-hidden={coverImage ? undefined : "true"}>
        {coverImage ? (
          <img src={coverImage} alt={coverAlt} loading="lazy" />
        ) : (
          <div className="case-card-generated-visual">
            <span>{displayIndex}</span>
            <strong>{study.shortTitle || study.title}</strong>
          </div>
        )}
        <div className="case-card-media-scrim" />
        <div className="case-card-topline">
          <span className="case-card-index">{displayIndex}</span>
          <ProofBadge status={study.proof} />
        </div>
      </div>

      <div className="case-card-content">
        <p className="case-card-context">{study.context}</p>
        <h3>{study.title}</h3>
        <p className="case-card-summary">{study.summary}</p>
        <div className="case-card-tags">
          {study.tags.slice(0, 4).map((tag) => <Tag key={tag}>{tag}</Tag>)}
        </div>
        <span className="case-card-link">
          Read the case
          <b aria-hidden="true"><ArrowUpRight size={18} strokeWidth={1.8} /></b>
        </span>
      </div>
    </Link>
  );
}
