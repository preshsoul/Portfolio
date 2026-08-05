import { useNavigate } from "react-router-dom";
import T from "../lib/tokens";

const NAV_ITEMS = [
  { path: "/work", label: "Work" },
  { path: "/writing", label: "Writing" },
  { path: "/products", label: "Products" },
  { path: "/about", label: "About" },
  { path: "/connect", label: "Connect" },
];

export default function Footer() {
  const navigate = useNavigate();

  return (
    <footer style={{ padding: "40px 28px 32px", borderTop: `1px solid ${T.border}`, background: T.bg }}>
      <div
        style={{
          maxWidth: 1100,
          margin: "0 auto",
          display: "flex",
          justifyContent: "space-between",
          alignItems: "center",
          flexWrap: "wrap",
          gap: 16,
        }}
      >
        <div>
          <p style={{ fontFamily: T.font, fontSize: 15, fontWeight: 600, color: T.text, marginBottom: 4 }}>
            Precious Ajayi
          </p>
          <p style={{ fontFamily: T.font, fontSize: 13, color: T.textMuted, fontStyle: "italic" }}>
            Structure is everywhere. Language is how we find it.
          </p>
        </div>
        <div style={{ display: "flex", gap: 20 }}>
          {NAV_ITEMS.map((item) => (
            <button
              key={item.path}
              onClick={() => { navigate(item.path); window.scrollTo(0, 0); }}
              style={{
                fontFamily: T.sans,
                fontSize: 12,
                color: T.textMuted,
                background: "none",
                border: "none",
                cursor: "pointer",
              }}
            >
              {item.label}
            </button>
          ))}
        </div>
      </div>

      <div
        style={{
          maxWidth: 1100,
          margin: "16px auto 0",
          paddingTop: 16,
          borderTop: `1px solid ${T.border}`,
          display: "flex",
          justifyContent: "space-between",
          flexWrap: "wrap",
          gap: 8,
        }}
      >
        <span style={{ fontFamily: T.sans, fontSize: 11, color: T.textMuted }}>
          © 2026 Precious Ajayi. Lagos, Nigeria.
        </span>
        <div style={{ display: "flex", gap: 14 }}>
          <a
            href="https://thermopresh.substack.com"
            target="_blank"
            rel="noopener noreferrer"
            style={{ fontFamily: T.sans, fontSize: 11, color: T.textMuted, textDecoration: "none" }}
          >
            Substack
          </a>
          <a
            href="https://www.linkedin.com/in/precious-ajayi-bb96b51b4/"
            target="_blank"
            rel="noopener noreferrer"
            style={{ fontFamily: T.sans, fontSize: 11, color: T.textMuted, textDecoration: "none" }}
          >
            LinkedIn
          </a>
        </div>
      </div>
    </footer>
  );
}
