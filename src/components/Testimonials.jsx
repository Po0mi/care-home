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

const Testimonials = () => (
  <section className="testimonials" id="testimonials">
    {/* Label */}
    <div className="testimonials-label">
      <span className="testimonials-label-text">What people say</span>
    </div>

    {/* Featured block */}
    <div className="testimonials-featured">
      {/* Left — heading + ratings */}
      <div className="testimonials-featured-left">
        <h2 className="testimonials-heading">
          Trusted by families
          <br />
          across <em>England.</em>
        </h2>
        <div className="testimonials-rating-row">
          <div className="testimonials-rating">
            <strong>9.8</strong>
            <span>carehome.co.uk</span>
          </div>
          <div className="testimonials-rating">
            <strong>CQC</strong>
            <span>Outstanding</span>
          </div>
        </div>
      </div>

      {/* Right — big pull quote */}
      <div className="testimonials-featured-right">
        <p className="testimonials-big-quote">
          Outstanding in all areas — the warmth and professionalism of every
          member of staff is clearly evident throughout the home.
        </p>
        <p className="testimonials-big-source">
          Care Quality Commission · CQC Inspection Report
        </p>
      </div>
    </div>

    {/* Mini cards */}
    <div className="testimonials-cards">
      {MINI_TESTIMONIALS.map(({ source, quote, author }) => (
        <div key={author} className="testimonials-card">
          <span className="testimonials-card-source">{source}</span>
          <p className="testimonials-card-quote">{quote}</p>
          <span className="testimonials-card-author">{author}</span>
        </div>
      ))}
    </div>
  </section>
);

export default Testimonials;
