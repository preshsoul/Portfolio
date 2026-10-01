import { ArrowUpRight } from "lucide-react";
import { Link } from "react-router-dom";
import useInView from "../hooks/useInView";
import ProofBadge from "./ProofBadge";

export default function GatheringSituation({ study, title, fragments, headline, body, artifact, image, imageAlt }) {
  const [ref, visible] = useInView();

  return (
    <article ref={ref} className={`gathering-situation${visible ? " is-gathered" : ""}`}>
      <div className="gathering-situation__field" aria-hidden="true">
        {fragments.map((fragment, index) => (
          <span key={fragment} style={{ "--fragment-index": index }}>{fragment}</span>
        ))}
      </div>
      <div className="gathering-situation__resolved">
        {image && (
          <div className="gathering-situation__image">
            <img src={image} alt={imageAlt} width="720" height="520" loading="lazy" />
          </div>
        )}
        <div className="gathering-situation__copy">
          <div className="gathering-situation__meta">
            <span>{study.context}</span>
            <ProofBadge status={study.proof} />
          </div>
          <h3>{title || study.shortTitle || study.title}</h3>
          <p className="gathering-situation__headline">{headline}</p>
          <p>{body}</p>
          <p className="gathering-situation__artifact"><b>Working material</b>{artifact}</p>
          <Link to={`/work/${study.slug}`} aria-label={`Read case study: ${study.title}`}>
            See the work <ArrowUpRight size={17} aria-hidden="true" />
          </Link>
        </div>
      </div>
    </article>
  );
}
