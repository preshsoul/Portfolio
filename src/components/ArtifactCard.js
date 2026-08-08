import T from "../lib/tokens";
import ProofBadge from "./ProofBadge";

export default function ArtifactCard({ artifact, compact = false }) {
  return (
    <article
      className="artifact-card"
      style={{
        padding: compact ? 20 : "clamp(22px, 3vw, 28px)",
        borderRadius: compact ? 18 : 22,
        border: `1px solid ${T.border}`,
        background: compact ? T.card : T.cardAlt,
      }}
    >
      <div style={{ display: "flex", gap: 8, alignItems: "center", flexWrap: "wrap", marginBottom: 14 }}>
        <ProofBadge status={artifact.proof} />
        <span
          style={{
            fontFamily: T.mono,
            fontSize: 11,
            letterSpacing: "0.06em",
            textTransform: "uppercase",
            color: T.textMuted,
          }}
        >
          {artifact.type}
        </span>
      </div>
      <h3
        style={{
          fontFamily: T.display,
          fontSize: compact ? 22 : "clamp(24px, 3vw, 32px)",
          lineHeight: 1.08,
          color: T.text,
          marginBottom: 10,
        }}
      >
        {artifact.title}
      </h3>
      <p style={{ fontFamily: T.body, fontSize: 14, color: T.textMuted, lineHeight: 1.7, marginBottom: 14 }}>
        {artifact.summary}
      </p>
      <p
        style={{
          fontFamily: T.mono,
          fontSize: 11,
          lineHeight: 1.6,
          letterSpacing: "0.04em",
          textTransform: "uppercase",
          color: T.link,
        }}
      >
        Boundary: {artifact.boundary}
      </p>
    </article>
  );
}
