import "./Aboutpage.scss";

const FEATURES = [
  {
    title: "Personalised Care Plans",
    desc: "Every resident deserves care that is as unique as they are. Our healthcare professionals develop up to date care plans that go beyond clinical information, including medical history and medication charts, to capture the personal details that make each person who they are.",
  },
  {
    title: "Medication Monitoring",
    desc: "There comes a point in everyone's life when they may no longer be able to care for themselves. Families naturally want to care for their loved ones, just as they were cared for as children. Sycamore Cottage provides the support that retirees and their families need.",
  },
  {
    title: "Here For You",
    desc: "Throughout the year, we provide our residents with empathy and genuine support. Moving somewhere new can feel daunting, so we take pride in making every person's experience special. We are passionate about creating opportunities for our residents to make new memories and friends.",
  },
  {
    title: "Experienced Staff",
    desc: "Our Registered Manager Anna and the rest of the team at Sycamore Cottage are caring, joyous and dedicated. Our staff will treat your loved ones like family, setting us apart from the clinical environments found in some larger care homes.",
  },
];

const VALUES = [
  {
    number: "20+",
    label: "Years of Care",
    desc: "Decades of dedicated service to the Basingstoke community",
  },
  {
    number: "98%",
    label: "Family Satisfaction",
    desc: "Of families would recommend our care to others",
  },
  {
    number: "24/7",
    label: "On-Site Support",
    desc: "Round the clock care from our dedicated team",
  },
  {
    number: "CQC",
    label: "Outstanding",
    desc: "Rated Outstanding in all areas by Care Quality Commission",
  },
];

const About = () => {
  return (
    <section className="about" id="about">
      <div className="about-bg-text">Compassion</div>

      <div className="about-inner">
        {/* Label */}
        <div className="about-label">
          <span className="about-label-line" />
          <span className="about-label-text">Living & Thriving</span>
          <span className="about-label-line" />
        </div>

        {/* Heading */}
        <h2 className="about-heading">
          A little about <em>what we do</em>
          <br />
          at <span className="about-heading-accent">Sycamore Cottage.</span>
        </h2>

        {/* Sub copy */}
        <p className="about-sub">
          Our trained healthcare professionals ensure each resident has a
          personalised, clinically relevant care plan, treating everyone as an
          individual with a full life history.
        </p>

        {/* Features Grid */}
        <div className="about-features">
          {FEATURES.map(({ title, desc }) => (
            <div key={title} className="about-feature-card">
              <div className="about-feature-icon">
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
              </div>
              <div className="about-feature-content">
                <h4 className="about-feature-title">{title}</h4>
                <p className="about-feature-desc">{desc}</p>
              </div>
            </div>
          ))}
        </div>

        {/* Stats Section */}
        <div className="about-stats">
          <div className="about-stats-grid">
            {VALUES.map(({ number, label, desc }) => (
              <div key={label} className="about-stat-item">
                <strong>{number}</strong>
                <span className="about-stat-label">{label}</span>
                <span className="about-stat-desc">{desc}</span>
              </div>
            ))}
          </div>
        </div>

        {/* Quote Block */}
        <div className="about-quote">
          <svg
            className="about-quote-icon"
            viewBox="0 0 24 24"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
          >
            <path d="M10 11h-4v4h4v-4zM18 11h-4v4h4v-4z" fill="currentColor" />
          </svg>
          <p className="about-quote-text">
            We believe that as a residential home, our responsibility goes
            beyond providing a safe and caring environment. We must also create
            a joyful one.
          </p>
          <span className="about-quote-author">— Anna, Registered Manager</span>
        </div>
      </div>
    </section>
  );
};

export default About;
