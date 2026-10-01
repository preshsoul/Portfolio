import { Link, useLocation } from "react-router-dom";

const footerLinks = [
  { label: "Work", to: "/work" },
  { label: "Research", to: "/research" },
  { label: "Writing", to: "/writing" },
  { label: "About", to: "/about" },
];

export default function Footer() {
  const { pathname } = useLocation();
  const quiet = pathname.startsWith("/work/") || pathname.startsWith("/writing/");
  return (
    <footer className={`site-footer ${quiet ? "site-footer--quiet" : ""}`}>
      <div className="footer-route footer-route-left" aria-hidden="true" />
      <div className="footer-route footer-route-right" aria-hidden="true" />
      <div className="footer-shell">
        <div className="footer-heading">
          <span className="footer-kicker">{quiet ? "Continue / when useful" : "Final frame"}</span>
          <h2>{quiet ? <>A quieter place<br />to continue.</> : <>Make the work<br />move.</>}</h2>
          <p>Research, strategy and editorial operations for decisions that need more than a surface answer.</p>
        </div>

        <div className="footer-actions">
          <Link className="footer-contact" to="/connect">
            Start a conversation <span aria-hidden="true">↗</span>
          </Link>
          <div className="footer-link-list" role="list" aria-label="Footer links">
            {footerLinks.map((link) => (
              <Link key={link.to} to={link.to} role="listitem">{link.label}</Link>
            ))}
          </div>
        </div>

        <div className="footer-base">
          <span>© 2026 Precious Ajayi</span>
          <span>Lagos, Nigeria</span>
          <span>All rights reserved.</span>
        </div>
      </div>
    </footer>
  );
}
