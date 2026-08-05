import { useNavigate, useLocation } from "react-router-dom";
import T from "../lib/tokens";

const NAV_ITEMS = [
  { path: "/work", label: "Work" },
  { path: "/research", label: "Research" },
  { path: "/writing", label: "Writing" },
  { path: "/about", label: "About" },
];

export default function Navigation() {
  const navigate = useNavigate();
  const { pathname } = useLocation();

  const isActive = (path) => pathname === path || (path === "/work" && pathname.startsWith("/work"));

  return (
    <nav
      style={{
        position: "fixed",
        top: 0,
        left: 0,
        right: 0,
        zIndex: 1000,
        background: "rgba(250, 248, 245, 0.85)",
        backdropFilter: "blur(12px)",
        WebkitBackdropFilter: "blur(12px)",
        borderBottom: `1px solid ${T.accentLight}4D`,
      }}
    >
      <div
        style={{
          maxWidth: 960,
          margin: "0 auto",
          padding: "0 28px",
          height: 64,
          display: "flex",
          justifyContent: "space-between",
          alignItems: "center",
        }}
      >
        <button
          onClick={() => { navigate("/"); window.scrollTo(0, 0); }}
          style={{
            fontFamily: T.display,
            fontSize: 20,
            fontWeight: 500,
            color: T.text,
            background: "none",
            border: "none",
            cursor: "pointer",
            padding: 0,
            letterSpacing: "-0.01em",
          }}
        >
          Precious Ajayi
        </button>

        <div style={{ display: "flex", gap: 24, alignItems: "center" }}>
          {NAV_ITEMS.map((item) => {
            const active = isActive(item.path);
            return (
              <button
                key={item.path}
                onClick={() => { navigate(item.path); window.scrollTo(0, 0); }}
                style={{
                  fontFamily: T.mono,
                  fontSize: 12,
                  fontWeight: 500,
                  letterSpacing: "0.1em",
                  textTransform: "uppercase",
                  color: active ? T.link : T.textMuted,
                  background: "none",
                  border: "none",
                  cursor: "pointer",
                  padding: "4px 0",
                  borderBottom: active ? `1.5px solid ${T.accent}` : "1.5px solid transparent",
                  transition: "color 0.2s, border-color 0.2s",
                }}
                onMouseEnter={(e) => {
                  if (!active) e.target.style.color = T.link;
                }}
                onMouseLeave={(e) => {
                  if (!active) e.target.style.color = T.textMuted;
                }}
              >
                {item.label}
              </button>
            );
          })}
          <img
            src="/my-photo.jpg"
            alt="Precious Ajayi"
            style={{
              width: 32,
              height: 32,
              borderRadius: "50%",
              objectFit: "cover",
              border: `1.5px solid ${T.accentLight}`,
            }}
          />
        </div>
      </div>
    </nav>
  );
}
