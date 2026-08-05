import T from "../lib/tokens";
import Tag from "./Tag";
import Badge from "./Badge";
import ProofBadge from "./ProofBadge";
import { REGISTER_LABELS } from "../data/works";

export default function WorkCard({ work }) {
  return (
    <div
      style={{
        padding: "28px 30px",
        background: T.card,
        borderRadius: 8,
        border: `1px solid ${T.accentLight}66`,
        marginBottom: 14,
      }}
    >
      <div
        style={{
          display: "flex",
          justifyContent: "space-between",
          alignItems: "flex-start",
          marginBottom: 10,
          flexWrap: "wrap",
          gap: 8,
        }}
      >
        <span
          style={{
            fontFamily: T.mono,
            fontSize: 10,
            fontWeight: 600,
            color: T.accent,
            letterSpacing: "0.1em",
            textTransform: "uppercase",
          }}
        >
          {REGISTER_LABELS[work.register]}
        </span>
        <div style={{ display: "flex", gap: 8, alignItems: "center", flexWrap: "wrap" }}>
          {work.stat && (
            <span style={{ fontFamily: T.mono, fontSize: 12, color: T.textMuted }}>{work.stat}</span>
          )}
          {work.status === "COMING_SOON" && (
            <Badge color={T.textMuted} bg={T.accentLight}>Coming Soon</Badge>
          )}
          <span style={{ fontFamily: T.mono, fontSize: 12, color: T.textMuted }}>{work.year}</span>
        </div>
      </div>

      <h3
        style={{
          fontFamily: T.display,
          fontSize: 22,
          fontWeight: 600,
          color: T.text,
          marginBottom: 6,
          lineHeight: 1.3,
        }}
      >
        {work.title}
      </h3>

      {work.client && (
        <p style={{ fontFamily: T.body, fontSize: 13, color: T.textMuted, marginBottom: 10 }}>
          {work.client}
        </p>
      )}

      <p
        style={{
          fontFamily: T.body,
          fontSize: 15,
          color: T.textMuted,
          lineHeight: 1.7,
          marginBottom: 12,
        }}
      >
        {work.description}
      </p>

      {work.proofNote && (
        <p
          style={{
            fontFamily: T.body,
            fontSize: 13,
            color: T.textMuted,
            fontStyle: "italic",
            lineHeight: 1.6,
            marginBottom: 14,
          }}
        >
          {work.proofNote}
        </p>
      )}

      <div style={{ display: "flex", gap: 6, flexWrap: "wrap", alignItems: "center" }}>
        {work.proof && <ProofBadge status={work.proof} />}
        {work.tags && work.tags.map((tag, i) => <Tag key={i}>{tag}</Tag>)}
      </div>
    </div>
  );
}
