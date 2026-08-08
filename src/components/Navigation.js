import { NavLink } from "react-router-dom";
import T from "../lib/tokens";

const NAV_ITEMS = [
  { path: "/work", label: "Work" },
  { path: "/research", label: "Research" },
  { path: "/writing", label: "Writing" },
  { path: "/about", label: "About" },
  { path: "/connect", label: "Contact" },
];

export default function Navigation() {
  return (
    <nav
      style={{
        position: "fixed",
        top: 0,
        left: 0,
        right: 0,
        zIndex: 1000,
        background: "rgba(250, 248, 245, 0.88)",
        backdropFilter: "blur(12px)",
        WebkitBackdropFilter: "blur(12px)",
        borderBottom: `1px solid ${T.accentLight}66`,
      }}
    >
      <div
        style={{
          maxWidth: 960,
          margin: "0 auto",
          padding: "0 max(16px, 3vw)",
          height: 60,
          display: "flex",
          justifyContent: "space-between",
          alignItems: "center",
        }}
      >
        {/* Brand — tap target ≥ 44px */}
        <NavLink
          to="/"
          style={{
            fontFamily: T.display,
            fontSize: "clamp(17px, 2.2vw, 20px)",
            fontWeight: 500,
            color: T.text,
            cursor: "pointer",
            padding: "8px 0",
            letterSpacing: "-0.01em",
            minHeight: 44,
            display: "inline-flex",
            alignItems: "center",
          }}
        >
          Precious Ajayi
        </NavLink>

        {/* Nav links — hidden on very small screens, visible from ~400px */}
        <div
          style={{
            display: "flex",
            gap: "clamp(12px, 2vw, 24px)",
            alignItems: "center",
          }}
        >
          {NAV_ITEMS.map((item) => (
            <NavLink
              key={item.path}
              to={item.path}
              style={({ isActive }) => ({
                fontFamily: T.mono,
                fontSize: "clamp(10px, 1.4vw, 12px)",
                fontWeight: 500,
                letterSpacing: "0.1em",
                textTransform: "uppercase",
                color: isActive ? T.link : T.textMuted,
                cursor: "pointer",
                padding: "8px 0",
                minHeight: 44,
                display: "inline-flex",
                alignItems: "center",
                borderBottom: isActive ? `1.5px solid ${T.accent}` : "1.5px solid transparent",
                transition: "color 0.2s, border-color 0.2s",
                whiteSpace: "nowrap",
              })}
            >
              {item.label}
            </NavLink>
          ))}
        </div>
      </div>
    </nav>
  );
}
