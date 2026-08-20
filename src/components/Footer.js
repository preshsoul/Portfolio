import { Link } from "react-router-dom";

const footerLinks = [
  { label: "Work", to: "/work" },
  { label: "Research", to: "/research" },
  { label: "Writing", to: "/writing" },
  { label: "About", to: "/about" },
];

export default function Footer() {
  return (
    <footer className="site-footer">
      <div className="footer-route footer-route-left" aria-hidden="true" />
      <div className="footer-route footer-route-right" aria-hidden="true" />
      <div className="footer-shell">
        <div className="footer-heading">
          <span className="footer-kicker">Final frame / 06</span>
          <h2>Make the work<br />move.</h2>
          <p>Research, strategy and editorial operations for decisions that need more than a surface answer.</p>
        </div>

        <div className="footer-actions">
          <Link className="footer-contact" to="/connect">
            Start a conversation <span aria-hidden="true">↗</span>
          </Link>
          <div className="footer-link-list" aria-label="Footer navigation">
            {footerLinks.map((link) => (
              <Link key={link.to} to={link.to}>{link.label}</Link>
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
