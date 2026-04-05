import useTestimonialsAnimation from "../hooks/useTestimonialsAnimation";
import "./Testimonials.scss";

const MINI_TESTIMONIALS = [
  {
    source: "carehome.co.uk",
    quote:
      "Very happy, warm and welcoming. Staff are very attentive, loving and caring.",
    author: "Family member",
  },
  {
    source: "carehome.co.uk",
    quote:
      "As a doctor I see many care homes — Sycamore Cottage is different. That personal touch matters.",
    author: "Visiting GP",
  },
];

const Testimonials = () => {
  const {
    sectionRef,
    labelRef,
    headingRef,
    ratingsRef,
    featuredRef,
    cardsRef,
  } = useTestimonialsAnimation();

  return (
    <section className="testimonials" id="testimonials" ref={sectionRef}>
      <div className="testimonials-header">
        <div className="testimonials-header-left">
          <div className="testimonials-label" ref={labelRef}>
            <span className="testimonials-label-line" />
            <span className="testimonials-label-text">What people say</span>
          </div>
          <h2 className="testimonials-heading" ref={headingRef}>
            <em>Trusted</em> by families across Hampshire.
          </h2>
        </div>
        <div className="testimonials-rating-row" ref={ratingsRef}>
          <div className="testimonials-rating">
            <strong>9.8</strong>
            <span>carehome.co.uk</span>
          </div>
        </div>
      </div>

      <div className="testimonials-grid">
        <div className="testimonials-featured-card" ref={featuredRef}>
          <div className="testimonials-featured-pill">
            <span className="testimonials-featured-pill-dot" />
            CQC Report
          </div>
          <p className="testimonials-featured-quote">
            "Outstanding in all areas — the warmth and professionalism of every
            member of staff is clearly evident throughout the home."
          </p>
          <div className="testimonials-featured-footer">
            <span className="testimonials-featured-source">
              Care Quality Commission · CQC Inspection Report
            </span>
          </div>
        </div>

        <div className="testimonials-cards-stack">
          {MINI_TESTIMONIALS.map(({ source, quote, author }, index) => (
            <div
              key={author}
              className="testimonials-card"
              ref={(el) => (cardsRef.current[index] = el)}
            >
              <span className="testimonials-card-source">
                {source} · {author}
              </span>
              <p className="testimonials-card-quote">{quote}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Testimonials;
