import { NavLink } from "react-router-dom";

const NAV_ITEMS = [
  { path: "/work", label: "Work", number: "01" },
  { path: "/research", label: "Research", number: "02" },
  { path: "/writing", label: "Writing", number: "03" },
  { path: "/products", label: "Products", number: "04" },
  { path: "/about", label: "About", number: "05" },
  { path: "/connect", label: "Connect", number: "06", featured: true },
];

export default function Navigation() {
  return (
    <nav className="site-nav" aria-label="Primary navigation">
      <div className="nav-shell">
        <NavLink to="/" className="brand-link" aria-label="Precious Ajayi">
          <span className="brand-mark" aria-hidden="true">00</span>
          <span className="brand-copy">
            <span className="brand-name">Precious Ajayi</span>
            <span className="brand-role">Lagos / NG</span>
          </span>
        </NavLink>

        <div className="nav-links" aria-label="Portfolio sections">
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
              <span aria-hidden="true" className="nav-link-number">{item.number}</span>
              <span className="nav-link-label">{item.label}</span>
            </NavLink>
          ))}
        </div>
      </div>
    </nav>
  );
}
