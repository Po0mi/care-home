import "./Contact.scss";

const Contact = () => {
  return (
    <section className="contact" id="contact">
      <div className="contact-bg-text">Hello</div>

      <div className="contact-inner">
        {/* Label */}
        <div className="contact-label">
          <span className="contact-label-line" />
          <span className="contact-label-text">Get In Touch</span>
          <span className="contact-label-line" />
        </div>

        {/* Heading */}
        <h2 className="contact-heading">
          Let's talk about <em>your loved one.</em>
        </h2>

        {/* Sub */}
        <p className="contact-sub">
          We'd love to hear from you. Reach out to us anytime.
        </p>

        {/* Contact Information */}
        <div className="contact-info">
          <div className="contact-info-item">
            <span className="contact-info-icon">
              <svg
                viewBox="0 0 20 20"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path
                  d="M10 10c1.105 0 2-.895 2-2s-.895-2-2-2-2 .895-2 2 .895 2 2 2z"
                  stroke="currentColor"
                  strokeWidth="1.5"
                />
                <path
                  d="M10 18c3-2.5 7-5.5 7-9.5C17 5 13.9 2 10 2S3 5 3 8.5c0 4 4 7 7 9.5z"
                  stroke="currentColor"
                  strokeWidth="1.5"
                />
              </svg>
            </span>
            <div className="contact-info-content">
              <strong>Address</strong>
              <span>Sycamore Cottage</span>
              <span>Skippetts Lane West</span>
              <span>Basingstoke</span>
              <span>RG21 3HP</span>
            </div>
          </div>

          <div className="contact-info-item">
            <span className="contact-info-icon">
              <svg
                viewBox="0 0 20 20"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path
                  d="M3 5h14a1 1 0 011 1v8a1 1 0 01-1 1H3a1 1 0 01-1-1V6a1 1 0 011-1z"
                  stroke="currentColor"
                  strokeWidth="1.5"
                />
                <path
                  d="M3 6l7 5 7-5"
                  stroke="currentColor"
                  strokeWidth="1.5"
                  strokeLinecap="round"
                />
              </svg>
            </span>
            <div className="contact-info-content">
              <strong>Email</strong>
              <a href="mailto:enquiries@sycamorecottageresthome.com">
                g.vanderslott@hotmail.co.uk
              </a>
            </div>
          </div>

          <div className="contact-info-item">
            <span className="contact-info-icon">
              <svg
                viewBox="0 0 20 20"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path
                  d="M17 14c-.7 1.3-2 2-3.5 2-3.5 0-6.5-3-6.5-6.5 0-1.5.7-2.8 2-3.5l1 2-1.5 1.5c.5 1.5 2 3 3.5 3.5l1.5-1.5 2 1z"
                  stroke="currentColor"
                  strokeWidth="1.5"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                />
              </svg>
            </span>
            <div className="contact-info-content">
              <strong>Phone</strong>
              <a href="tel:01256478952">01256 478952</a>
            </div>
          </div>
        </div>

        {/* Stats */}
        <div className="contact-stats">
          <div className="contact-stat">
            <strong>24hr</strong>
            <span>Response time</span>
          </div>
          <span className="contact-stat-div" />
          <div className="contact-stat">
            <strong>9.8</strong>
            <span>carehome.co.uk</span>
          </div>
          <span className="contact-stat-div" />
          <div className="contact-stat">
            <strong>CQC</strong>
            <span>Outstanding</span>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Contact;
