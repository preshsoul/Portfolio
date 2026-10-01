import { ArrowUpRight } from "lucide-react";
import { Link } from "react-router-dom";
import useInView from "../hooks/useInView";

const MATERIALS = [
  "26,000+ savings responses",
  "731 public Cowrywise posts",
  "13 funding opportunities",
  "one salary balance",
  "audience language",
  "evidence boundaries",
  "competing futures",
  "a recommendation that can fail",
];

const TRANSFORMATIONS = [
  ["26,000+ savings responses", "model changing states", "/work/piggyvest-decision-model"],
  ["731 Cowrywise posts", "close-reading corpus → evidence-controlled recommendation", "/work/cowrywise-editorial-audit"],
  ["13 funding opportunities", "13 tailored arguments", "/work/limpiar-grant-proposals"],
  ["One salary balance", "competing futures in All At Once", "/work/all-at-once"],
];

export default function ThinkingField() {
  const [ref, visible] = useInView(0.18);

  return (
    <div ref={ref} className={`thinking-field${visible ? " is-resolved" : ""}`}>
      <div className="thinking-field__materials" aria-hidden="true">
        {MATERIALS.map((material, index) => (
          <span key={material} style={{ "--material-index": index }}>{material}</span>
        ))}
      </div>
      <p className="thinking-field__principle">I am usually trying to find what matters, what can actually be supported, and what form will make it useful.</p>
      <div className="thinking-field__transformations" aria-label="Examples of material becoming useful">
        {TRANSFORMATIONS.map(([source, result, link]) => (
          <Link to={link} key={source}>
            <span>{source}</span><i aria-hidden="true">→</i><strong>{result}</strong><ArrowUpRight size={16} aria-hidden="true" />
          </Link>
        ))}
      </div>
    </div>
  );
}
