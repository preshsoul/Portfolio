import { useNavigate, useLocation } from "react-router-dom";
import T from "../lib/tokens";

const NAV_ITEMS = [
  { path: "/work", label: "Work" },
  { path: "/writing", label: "Writing" },
  { path: "/products", label: "Products" },
  { path: "/about", label: "About" },
  { path: "/connect", label: "Connect" },
];

export default function Navigation() {
  const navigate = useNavigate();
  const { pathname } = useLocation();

  return (
    <nav
      style={{
        position: "fixed",
        top: 0,
        left: 0,
        right: 0,
        zIndex: 1000,
        background: T.bg + "f0",
        backdropFilter: "blur(16px)",
        borderBottom: `1px solid ${T.border}`,
      }}
    >
      <div
        style={{
          maxWidth: 1100,
          margin: "0 auto",
          padding: "13px 28px",
          display: "flex",
          justifyContent: "space-between",
          alignItems: "center",
        }}
      >
        <button
          onClick={() => { navigate("/"); window.scrollTo(0, 0); }}
          style={{
            fontFamily: T.font,
            fontSize: 19,
            fontWeight: 700,
            color: T.text,
            background: "none",
            border: "none",
            cursor: "pointer",
            padding: 0,
          }}
        >
          Precious Ajayi
        </button>

        <div style={{ display: "flex", gap: 24 }}>
          {NAV_ITEMS.map((item) => (
            <button
              key={item.path}
              onClick={() => { navigate(item.path); window.scrollTo(0, 0); }}
              style={{
                fontFamily: T.sans,
                fontSize: 13,
                color: pathname === item.path ? T.accent : T.textMuted,
                background: "none",
                border: "none",
                cursor: "pointer",
                padding: "4px 0",
                borderBottom:
                  pathname === item.path ? `1.5px solid ${T.accent}` : "1.5px solid transparent",
                transition: "all 0.2s",
              }}
            >
              {item.label}
            </button>
          ))}
        </div>
      </div>
    </nav>
  );
}
