import React from "react";
import { Link } from "react-router-dom";
import useNavMenu from "../hooks/useNavMenu";
import useScrolled from "../hooks/useScrolled";
import useActiveLink from "../hooks/useActiveLink";
import "./Navbar.scss";

const NAV_LINKS = [
  { label: "Home", href: "/" },
  { label: "About Us", href: "/about" },
  { label: "Online Community", href: "/community" },
  { label: "Join The Team", href: "/careers" },
  { label: "Contact", href: "/contact" },
];

const CTA = { label: "Book A Tour", href: "/book-tour" };

const Navbar = () => {
  const { isOpen, toggle, close } = useNavMenu();
  const scrolled = useScrolled(60);
  const { isActive } = useActiveLink();

  return (
    <>
      <nav className={`navbar${scrolled ? " scrolled" : ""}`}>
        <div className="navbar-inner">
          {/* Logo */}
          <Link to="/" className="navbar-logo" onClick={close}>
            <span className="navbar-logo-mark">Sycamore</span>
            <span className="navbar-logo-sub">Cottage</span>
          </Link>

          {/* Desktop Links */}
          <ul className="navbar-links">
            {NAV_LINKS.map(({ label, href }) => (
              <li key={href} className="navbar-link">
                <Link to={href} className={isActive(href) ? "active" : ""}>
                  {label}
                </Link>
              </li>
            ))}
          </ul>

          {/* Desktop CTA */}
          <div className="navbar-cta">
            <Link to={CTA.href}>{CTA.label}</Link>
          </div>

          {/* Hamburger */}
          <button
            className={`navbar-hamburger${isOpen ? " open" : ""}`}
            onClick={toggle}
            aria-label={isOpen ? "Close menu" : "Open menu"}
            aria-expanded={isOpen}
          >
            <span />
            <span />
            <span />
          </button>
        </div>
      </nav>

      {/* Mobile Menu */}
      <div
        className={`navbar-mobile${isOpen ? " open" : ""}`}
        aria-hidden={!isOpen}
      >
        <ul className="navbar-mobile-links">
          {NAV_LINKS.map(({ label, href }) => (
            <li key={href} className="navbar-mobile-link">
              <Link
                to={href}
                className={isActive(href) ? "active" : ""}
                onClick={close}
              >
                {label}
              </Link>
            </li>
          ))}
        </ul>

        <div className="navbar-mobile-cta">
          <Link to={CTA.href} onClick={close}>
            {CTA.label}
          </Link>
        </div>

        <span className="navbar-mobile-footer">© 2025 Sycamore Cottage</span>
      </div>
    </>
  );
};

export default Navbar;
