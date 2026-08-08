import T from "../lib/tokens";

export default function EngagementGrid({ items }) {
  return (
    <div
      style={{
        display: "grid",
        gridTemplateColumns: "repeat(auto-fit, minmax(230px, 1fr))",
        gap: 14,
      }}
    >
      {items.map((item) => (
        <article
          key={item.title}
          style={{
            padding: 24,
            borderRadius: 18,
            background: T.card,
            border: `1px solid ${T.border}`,
          }}
        >
          <h3 style={{ fontFamily: T.display, fontSize: 21, color: T.text, marginBottom: 8 }}>
            {item.title}
          </h3>
          <p style={{ fontFamily: T.body, fontSize: 14, color: T.textMuted, lineHeight: 1.7 }}>
            {item.body}
          </p>
        </article>
      ))}
    </div>
  );
}
