import T from "../lib/tokens";

export default function Footer() {
  return (
    <footer
      style={{
        padding: "clamp(40px, 7vw, 64px) max(16px, 5vw) clamp(32px, 5vw, 48px)",
        borderTop: `1px solid ${T.accentLight}66`,
        background: T.bg,
        textAlign: "center",
      }}
    >
      <div
        style={{
          maxWidth: 720,
          margin: "0 auto",
          display: "flex",
          flexDirection: "column",
          alignItems: "center",
          gap: "clamp(8px, 1.2vw, 12px)",
        }}
      >
        {/* Brand */}

        {/* Divider */}
        <div
          style={{
            width: "clamp(32px, 5vw, 48px)",
            height: 1,
            background: T.accent,
            marginBottom: 4,
          }}
        />

        {/* Tagline */}
        <p
          style={{
            fontFamily: T.body,
            fontSize: "clamp(13px, 1.5vw, 14px)",
            color: T.textMuted,
            lineHeight: 1.6,
            maxWidth: 340,
          }}
        >
          Researcher, strategist and writer based in Lagos.
        </p>

        {/* Copyright */}
        <p
          style={{
            fontFamily: T.mono,
            fontSize: "clamp(10px, 1.1vw, 11px)",
            color: T.textMuted,
            letterSpacing: "0.06em",
          }}
        >
          © 2026 Precious Ajayi. Lagos, Nigeria. All rights reserved.
        </p>
      </div>
    </footer>
  );
}
