import T from "../lib/tokens";

export default function WritingRow({ item }) {
  const style = {
    textDecoration: "none",
    padding: "22px 0",
    borderBottom: `1px solid ${T.accentLight}66`,
    display: "flex",
    justifyContent: "space-between",
    alignItems: "flex-start",
    gap: 18,
    transition: "background 0.15s",
  };

  const body = (
    <>
      <div style={{ flex: 1 }}>
        <div style={{ display: "flex", gap: 10, alignItems: "center", marginBottom: 7, flexWrap: "wrap" }}>
          <span
            style={{
              fontFamily: T.mono,
              fontSize: 10,
              color: T.link,
              letterSpacing: "0.08em",
              textTransform: "uppercase",
            }}
          >
            {item.category}
          </span>
          {item.featured && (
            <span
              style={{
                fontFamily: T.mono,
                fontSize: 10,
                color: T.accent,
                letterSpacing: "0.08em",
                textTransform: "uppercase",
              }}
            >
              Featured
            </span>
          )}
        </div>
        <h3
          style={{
            fontFamily: T.display,
            fontSize: 22,
            fontWeight: 600,
            color: T.text,
            marginBottom: 5,
            lineHeight: 1.22,
          }}
        >
          {item.title}
        </h3>
        {item.subtitle && (
          <p style={{ fontFamily: T.body, fontSize: 14, color: T.textMuted, lineHeight: 1.65 }}>
            {item.subtitle}
          </p>
        )}
      </div>
      <span
        style={{
          fontFamily: T.mono,
          fontSize: 12,
          color: item.url ? T.link : T.textMuted,
          whiteSpace: "nowrap",
          paddingTop: 4,
        }}
      >
        {item.url ? "Read →" : item.date}
      </span>
    </>
  );

  if (!item.url) {
    return <div style={style}>{body}</div>;
  }

  return (
    <a
      href={item.url}
      target={item.url.startsWith("http") ? "_blank" : undefined}
      rel={item.url.startsWith("http") ? "noopener noreferrer" : undefined}
      style={style}
      onMouseEnter={(e) => {
        e.currentTarget.style.background = `${T.bgAlt}66`;
      }}
      onMouseLeave={(e) => {
        e.currentTarget.style.background = "transparent";
      }}
    >
      {body}
    </a>
  );
}
