import { Link } from "react-router-dom";
import Tag from "./Tag";
import ProofBadge from "./ProofBadge";

export default function CaseStudyCard({ study, compact = false, index }) {
  return (
    <Link to={`/work/${study.slug}`} className={`case-card ${compact ? "case-card--compact" : ""}`}>
      <div className="case-card-topline">
        <span className="case-card-index">{String(index || 1).padStart(2, "0")}</span>
        <ProofBadge status={study.proof} />
      </div>
      <p className="case-card-context">{study.context}</p>
      {study.image && <img className="case-card-image" src={study.image} alt={study.imageAlt || "Project cover"} />}
      <h3>{study.title}</h3>
      <p className="case-card-summary">{study.summary}</p>
      <div className="case-card-tags">
        {study.tags.slice(0, 4).map((tag) => <Tag key={tag}>{tag}</Tag>)}
      </div>
      <span className="case-card-link">Open case <b aria-hidden="true">↗</b></span>
    </Link>
  );
}
