import { Link } from "react-router-dom";
import heroBg from "../assets/heroBg.webm";
import mouseSvg from "../assets/mouse.svg";
import useHeroAnimation from "../hooks/useHeroAnimation";
import "./Hero.scss";

const Hero = () => {
  const { containerRef } = useHeroAnimation();

  const handleScrollClick = () => {
    window.scrollTo({ top: window.innerHeight, behavior: "smooth" });
  };

  return (
    <section className="hero" id="home">
      <div className="hero-container" ref={containerRef}>
        <video autoPlay muted loop playsInline className="hero-video">
          <source src={heroBg} type="video/webm" />
        </video>

        <div className="hero-overlay" />
        <h2 className="hero-label">Sycamore</h2>
        <h1 className="hero-title">
          Care that
          <br />
        </h1>

        <h1 className="hero-title2">
          feels <em>like home.</em>
        </h1>

        <p className="hero-sub">Exceptional care. Real comfort. True home.</p>

        <div className="hero-actions">
          <Link to="/book-tour" className="hero-cta-primary">
            Book A Tour
          </Link>
          <Link to="/about" className="hero-cta-ghost">
            Our Approach
          </Link>
        </div>

        <div className="hero-trust-row">
          <div className="hero-trust-item">
            <span className="hero-trust-icon">
              <svg
                viewBox="0 0 20 20"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path
                  d="M10 2L4 5v5c0 3.5 2.5 6.5 6 7.5 3.5-1 6-4 6-7.5V5l-6-3z"
                  stroke="currentColor"
                  strokeWidth="1.5"
                  strokeLinejoin="round"
                />
              </svg>
            </span>
            <span className="hero-trust-label">CQC Regulated</span>
          </div>
          <span className="hero-trust-div" />
          <div className="hero-trust-item">
            <span className="hero-trust-icon">
              <svg
                viewBox="0 0 20 20"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
              >
                <circle
                  cx="10"
                  cy="10"
                  r="8"
                  stroke="currentColor"
                  strokeWidth="1.5"
                />
                <path
                  d="M10 6v4l2.5 2.5"
                  stroke="currentColor"
                  strokeWidth="1.5"
                  strokeLinecap="round"
                />
              </svg>
            </span>
            <span className="hero-trust-label">24/7 On-Site Support</span>
          </div>
          <span className="hero-trust-div" />
          <div className="hero-trust-item">
            <span className="hero-trust-icon">
              <svg
                viewBox="0 0 20 20"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path
                  d="M10 16s-7-4.5-7-9a4 4 0 018 0 4 4 0 018 0c0 4.5-7 9-7 9z"
                  stroke="currentColor"
                  strokeWidth="1.5"
                  strokeLinejoin="round"
                />
              </svg>
            </span>
            <span className="hero-trust-label">Person-Centred Care</span>
          </div>
          <span className="hero-trust-div" />
          <div className="hero-trust-item">
            <span className="hero-trust-icon">
              <svg
                viewBox="0 0 20 20"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
              >
                <rect
                  x="3"
                  y="4"
                  width="14"
                  height="13"
                  rx="2"
                  stroke="currentColor"
                  strokeWidth="1.5"
                />
                <path
                  d="M7 2v4M13 2v4M3 9h14"
                  stroke="currentColor"
                  strokeWidth="1.5"
                  strokeLinecap="round"
                />
              </svg>
            </span>
            <span className="hero-trust-label">Family Portal Access</span>
          </div>
        </div>

        <div className="hero-mouse-scroll" onClick={handleScrollClick}>
          <img
            src={mouseSvg}
            alt="Scroll down"
            className="hero-mouse-scroll-icon"
          />
        </div>
      </div>
    </section>
  );
};

export default Hero;
