import {
  BookOpen,
  BriefcaseBusiness,
  Mail,
  PenLine,
  Sparkles,
  UserRound,
} from "lucide-react";
import { NavLink } from "react-router-dom";

const NAV_ITEMS = [
  { path: "/work", label: "Work", icon: BriefcaseBusiness },
  { path: "/research", label: "Research", icon: Sparkles },
  { path: "/writing", label: "Writing", icon: PenLine },
  { path: "/products", label: "Products", icon: BookOpen },
  { path: "/about", label: "About", icon: UserRound },
  { path: "/connect", label: "Contact", icon: Mail, featured: true },
];

export default function Navigation() {
  return (
    <nav className="site-nav" aria-label="Primary navigation">
      <div className="nav-shell">
        <NavLink to="/" className="brand-link" aria-label="Precious Ajayi">
          <span className="brand-mark" aria-hidden="true">PA</span>
          <span className="brand-copy">
            <span className="brand-name">Precious Ajayi</span>
            <span className="brand-role">Research & editorial operations</span>
          </span>
        </NavLink>

        <div className="nav-links" aria-label="Portfolio sections">
          {NAV_ITEMS.map(({ icon: Icon, ...item }) => (
            <NavLink
              key={item.path}
              to={item.path}
              className={({ isActive }) =>
                ["nav-link", item.featured ? "contact-link" : "", isActive ? "active" : ""]
                  .filter(Boolean)
                  .join(" ")
              }
            >
              <Icon aria-hidden="true" size={16} strokeWidth={1.8} />
              <span className="nav-link-label">{item.label}</span>
            </NavLink>
          ))}
        </div>
      </div>
    </nav>
  );
}
