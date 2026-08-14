import { ArrowUpRight, Mail } from "lucide-react";
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
      <div className="footer-tape footer-tape-left" aria-hidden="true" />
      <div className="footer-tape footer-tape-right" aria-hidden="true" />
      <div className="footer-shell">
        <div className="footer-heading">
          <span className="footer-kicker">Let’s make useful things</span>
          <h2>Curiosity, with a point of view.</h2>
          <p>Researcher, strategist and writer based in Lagos.</p>
        </div>

        <div className="footer-actions">
          <Link className="footer-contact" to="/connect">
            <Mail aria-hidden="true" size={17} />
            Start a conversation
            <ArrowUpRight aria-hidden="true" size={16} />
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
