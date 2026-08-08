import { NavLink } from "react-router-dom";

const NAV_ITEMS = [
  { path: "/work", label: "Work" },
  { path: "/research", label: "Research" },
  { path: "/writing", label: "Writing" },
  { path: "/about", label: "About" },
  { path: "/connect", label: "Contact", featured: true },
];

export default function Navigation() {
  return (
    <nav className="site-nav" aria-label="Primary navigation">
      <div className="nav-shell">
        <NavLink to="/" className="brand-link" aria-label="Precious Ajayi">
          <span className="brand-mark" aria-hidden="true">
            PA
          </span>
          <span className="brand-copy">
            <span className="brand-name">Precious Ajayi</span>
            <span className="brand-role">Research & editorial operations</span>
          </span>
        </NavLink>

        <div className="nav-links">
          {NAV_ITEMS.map((item) => (
            <NavLink
              key={item.path}
              to={item.path}
              className={({ isActive }) =>
                ["nav-link", item.featured ? "contact-link" : "", isActive ? "active" : ""]
                  .filter(Boolean)
                  .join(" ")
              }
            >
              {item.label}
            </NavLink>
          ))}
        </div>
      </div>
    </nav>
  );
}
