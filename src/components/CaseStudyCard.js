import { Link } from "react-router-dom";
import T from "../lib/tokens";
import Tag from "./Tag";
import ProofBadge from "./ProofBadge";

export default function CaseStudyCard({ study, compact = false }) {
  return (
    <Link
      to={`/work/${study.slug}`}
      style={{
        display: "block",
        textDecoration: "none",
        padding: compact ? 24 : 30,
        borderRadius: 20,
        background: T.card,
        border: `1px solid ${T.border}`,
        transition: "transform 180ms ease, border-color 180ms ease, background 180ms ease",
      }}
      className="lift-card"
    >
      <div
        style={{
          display: "flex",
          justifyContent: "space-between",
          gap: 12,
          alignItems: "flex-start",
          marginBottom: 14,
          flexWrap: "wrap",
        }}
      >
        <p
          style={{
            fontFamily: T.mono,
            fontSize: 11,
            color: T.link,
            letterSpacing: "0.08em",
            textTransform: "uppercase",
          }}
        >
          {study.context}
        </p>
        <ProofBadge status={study.proof} />
      </div>
      <h3
        style={{
          fontFamily: T.display,
          fontSize: compact ? 24 : "clamp(26px, 3vw, 34px)",
          lineHeight: 1.08,
          color: T.text,
          marginBottom: 12,
          fontWeight: 600,
        }}
      >
        {study.title}
      </h3>
      <p style={{ fontFamily: T.body, fontSize: 15, color: T.textMuted, lineHeight: 1.75, marginBottom: 18 }}>
        {study.summary}
      </p>
      <div style={{ display: "flex", gap: 6, flexWrap: "wrap", marginBottom: 18 }}>
        {study.tags.slice(0, 4).map((tag) => (
          <Tag key={tag}>{tag}</Tag>
        ))}
      </div>
      <span
        style={{
          fontFamily: T.mono,
          fontSize: 12,
          color: T.link,
          letterSpacing: "0.06em",
          textTransform: "uppercase",
        }}
      >
        Examine case study &rarr;
      </span>
    </Link>
  );
}
