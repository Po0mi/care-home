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
  {
    source: "Family review",
    quote:
      "My mother has been a resident since December 2014 and from that first day, has been very happy.",
    author: "Resident's daughter",
  },
];

const Testimonials = () => {
  const { sectionRef, labelRef, ratingsRef, featuredRef, cardsRef } =
    useTestimonialsAnimation();

  return (
    <section className="testimonials" id="testimonials" ref={sectionRef}>
      {/* Header row */}
      <div className="testimonials-header">
        <div className="testimonials-label" ref={labelRef}>
          <span className="testimonials-label-line" />
          <span className="testimonials-label-text">What people say</span>
        </div>
        <div className="testimonials-rating-row" ref={ratingsRef}>
          <div className="testimonials-rating">
            <strong>9.8</strong>
            <span>carehome.co.uk</span>
          </div>
          <div className="testimonials-rating">
            <strong>CQC</strong>
            <span>Regulated</span>
          </div>
        </div>
      </div>

      {/* Masonry grid */}
      <div className="testimonials-grid">
        {/* Featured CQC card — spans 2 rows */}
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

        {/* Top two mini cards */}
        {MINI_TESTIMONIALS.slice(0, 2).map(
          ({ source, quote, author }, index) => (
            <div
              key={author}
              className="testimonials-card"
              ref={(el) => (cardsRef.current[index] = el)}
            >
              <span className="testimonials-card-source">{source}</span>
              <p className="testimonials-card-quote">{quote}</p>
              <span className="testimonials-card-author">{author}</span>
            </div>
          ),
        )}

        {/* Wide bottom card */}
        <div
          className="testimonials-card testimonials-card--wide"
          ref={(el) => (cardsRef.current[2] = el)}
        >
          <span className="testimonials-card-source">
            {MINI_TESTIMONIALS[2].source}
          </span>
          <p className="testimonials-card-quote">
            {MINI_TESTIMONIALS[2].quote}
          </p>
          <span className="testimonials-card-author">
            {MINI_TESTIMONIALS[2].author}
          </span>
        </div>
      </div>
    </section>
  );
};

export default Testimonials;
