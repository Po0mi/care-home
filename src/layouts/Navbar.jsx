import React from "react";
import { Link } from "react-router-dom";
import logo from "../assets/tree-svgrepo-com.svg";
import useNavMenu from "../hooks/useNavMenu";
import useScrolled from "../hooks/useScrolled";
import useActiveLink from "../hooks/useActiveLink";
import useNavbarAnimation from "../hooks/useNavbarAnimation";
import "./Navbar.scss";

const NAV_LINKS = [
  { label: "Home", href: "/" },
  { label: "About Us", href: "/about" },
  { label: "Join The Team", href: "/careers" },
];

const CTA = { label: "Book A Tour", href: "/book-tour" };

const Navbar = () => {
  const { isOpen, toggle, close } = useNavMenu();
  const scrolled = useScrolled(60);
  const { isActive } = useActiveLink();
  const { navRef } = useNavbarAnimation();

  return (
    <>
      <nav
        ref={navRef}
        className={`navbar${scrolled ? " scrolled" : ""}${isOpen ? " menu-open" : ""}`}
      >
        <div className="navbar-inner">
          <Link to="/" className="navbar-logo" onClick={close}>
            <img
              src={logo}
              alt="Sycamore Cottage logo"
              className="navbar-logo-img"
            />
            <div className="navbar-logo-text">
              <span className="navbar-logo-mark">Sycamore</span>
              <span className="navbar-logo-sub">Cottage</span>
            </div>
          </Link>

          <ul className="navbar-links">
            {NAV_LINKS.map(({ label, href }) => (
              <li key={href} className="navbar-link">
                <Link to={href} className={isActive(href) ? "active" : ""}>
                  {label}
                </Link>
              </li>
            ))}
          </ul>

          <div className="navbar-cta">
            <Link to={CTA.href}>{CTA.label}</Link>
          </div>

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

        <span className="navbar-mobile-footer">© 2026 Sycamore Cottage</span>
      </div>
    </>
  );
};

export default Navbar;
