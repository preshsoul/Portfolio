import { useEffect, useRef, useState } from "react";
import { NavLink, useLocation } from "react-router-dom";

const NAV_ITEMS = [
  { path: "/work", label: "Work", number: "01" },
  { path: "/research", label: "Research", number: "02" },
  { path: "/writing", label: "Writing", number: "03" },
  { path: "/products", label: "Products", number: "04" },
  { path: "/about", label: "About", number: "05" },
  { path: "/connect", label: "Connect", number: "06", featured: true },
];

export default function Navigation() {
  const [open, setOpen] = useState(false);
  const location = useLocation();
  const menuRef = useRef(null);
  const toggleRef = useRef(null);
  const restoreFocus = useRef(false);

  useEffect(() => setOpen(false), [location.pathname]);

  useEffect(() => {
    document.body.classList.toggle("menu-open", open);
    if (open) {
      restoreFocus.current = true;
      window.requestAnimationFrame(() => menuRef.current?.querySelector("a")?.focus());
    } else if (restoreFocus.current) {
      restoreFocus.current = false;
      window.requestAnimationFrame(() => toggleRef.current?.focus());
    }

    const handleMenuKeys = (event) => {
      if (!open) return;
      if (event.key === "Escape") {
        event.preventDefault();
        setOpen(false);
        return;
      }
      if (event.key !== "Tab") return;
      const focusable = [toggleRef.current, ...menuRef.current.querySelectorAll("a")].filter(Boolean);
      const first = focusable[0];
      const last = focusable[focusable.length - 1];
      if (event.shiftKey && document.activeElement === first) {
        event.preventDefault();
        last.focus();
      } else if (!event.shiftKey && document.activeElement === last) {
        event.preventDefault();
        first.focus();
      }
    };
    window.addEventListener("keydown", handleMenuKeys);
    return () => {
      document.body.classList.remove("menu-open");
      window.removeEventListener("keydown", handleMenuKeys);
    };
  }, [open]);

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

        <button
          ref={toggleRef}
          className="nav-menu-toggle"
          type="button"
          aria-expanded={open}
          aria-controls="primary-nav-links"
          onClick={() => setOpen((value) => !value)}
        >
          <span>Index</span>
          <span aria-hidden="true">{open ? "Close" : "Open"}</span>
        </button>

        <div
          ref={menuRef}
          id="primary-nav-links"
          className={`nav-links ${open ? "is-open" : ""}`}
          role={open ? "dialog" : undefined}
          aria-label={open ? "Site index" : undefined}
          aria-modal={open ? "true" : undefined}
        >
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
