import T from "../lib/tokens";

export default function MetricStrip({ metrics }) {
  return (
    <div
      style={{
        display: "grid",
        gridTemplateColumns: "repeat(auto-fit, minmax(170px, 1fr))",
        gap: 12,
      }}
    >
      {metrics.map((metric) => (
        <article
          key={`${metric.value}-${metric.label}`}
          style={{
            padding: "22px",
            background: T.cardAlt,
            border: `1px solid ${T.border}`,
            borderRadius: 18,
          }}
        >
          <p
            style={{
              fontFamily: T.display,
              fontSize: "clamp(26px, 4vw, 40px)",
              lineHeight: 1,
              color: T.text,
              marginBottom: 8,
            }}
          >
            {metric.value}
          </p>
          <h3
            style={{
              fontFamily: T.body,
              fontSize: 14,
              color: T.text,
              marginBottom: 8,
              lineHeight: 1.35,
            }}
          >
            {metric.label}
          </h3>
          <p style={{ fontFamily: T.body, fontSize: 12, color: T.textMuted, lineHeight: 1.55 }}>
            {metric.qualification}
          </p>
        </article>
      ))}
    </div>
  );
}
