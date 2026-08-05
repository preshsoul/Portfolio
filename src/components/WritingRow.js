import T from "../lib/tokens";

export default function WritingRow({ item }) {
  return (
    <a
      href="https://thermopresh.substack.com"
      target="_blank"
      rel="noopener noreferrer"
      style={{
        textDecoration: "none",
        padding: "18px 0",
        borderBottom: `1px solid ${T.border}`,
        display: "flex",
        justifyContent: "space-between",
        alignItems: "center",
        gap: 16,
      }}
    >
      <div style={{ flex: 1 }}>
        <h3 style={{ fontFamily: T.font, fontSize: 17, fontWeight: 600, color: T.text, marginBottom: 2 }}>
          {item.title}
        </h3>
        {item.subtitle && (
          <p style={{ fontFamily: T.font, fontSize: 14, color: T.textMuted, fontStyle: "italic" }}>
            {item.subtitle}
          </p>
        )}
      </div>
      <span style={{ fontFamily: T.sans, fontSize: 12, color: T.textMuted, whiteSpace: "nowrap" }}>
        {item.date}
      </span>
    </a>
  );
}
