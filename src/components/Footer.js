import T from "../lib/tokens";

export default function Footer() {
  return (
    <footer
      style={{
        padding: "48px 28px 32px",
        borderTop: `1px solid ${T.accentLight}4D`,
        background: T.bgAlt,
      }}
    >
      <div
        style={{
          maxWidth: 960,
          margin: "0 auto",
          display: "flex",
          justifyContent: "space-between",
          alignItems: "flex-start",
          flexWrap: "wrap",
          gap: 24,
        }}
      >
        <div>
          <p
            style={{
              fontFamily: T.display,
              fontSize: 16,
              fontWeight: 600,
              color: T.text,
              marginBottom: 4,
            }}
          >
            Precious Ajayi
          </p>
          <p
            style={{
              fontFamily: T.body,
              fontSize: 13,
              color: T.textMuted,
              maxWidth: 280,
              lineHeight: 1.6,
            }}
          >
            Writer, researcher, and strategic operator based in Lagos, Nigeria.
          </p>
        </div>

        <div style={{ display: "flex", flexDirection: "column", gap: 8 }}>
          <span
            style={{
              fontFamily: T.mono,
              fontSize: 11,
              fontWeight: 500,
              color: T.textMuted,
              letterSpacing: "0.1em",
              textTransform: "uppercase",
              marginBottom: 4,
            }}
          >
            Connect
          </span>
          <a
            href="mailto:ajayithewriter@gmail.com"
            style={{
              fontFamily: T.body,
              fontSize: 14,
              color: T.link,
              textDecoration: "none",
            }}
          >
            Email
          </a>
          <a
            href="https://www.linkedin.com/in/precious-ajayi-soul"
            target="_blank"
            rel="noopener noreferrer"
            style={{
              fontFamily: T.body,
              fontSize: 14,
              color: T.link,
              textDecoration: "none",
            }}
          >
            LinkedIn
          </a>
          <a
            href="https://thermopresh.substack.com"
            target="_blank"
            rel="noopener noreferrer"
            style={{
              fontFamily: T.body,
              fontSize: 14,
              color: T.link,
              textDecoration: "none",
            }}
          >
            Substack
          </a>
        </div>
      </div>

      <div
        style={{
          maxWidth: 960,
          margin: "24px auto 0",
          paddingTop: 16,
          borderTop: `1px solid ${T.accentLight}66`,
          display: "flex",
          justifyContent: "space-between",
          flexWrap: "wrap",
          gap: 8,
        }}
      >
        <span style={{ fontFamily: T.mono, fontSize: 11, color: T.textMuted }}>
          © 2026 Precious Ajayi. All rights reserved.
        </span>
        <span style={{ fontFamily: T.mono, fontSize: 11, color: T.textMuted }}>
          Lagos, Nigeria
        </span>
      </div>
    </footer>
  );
}
