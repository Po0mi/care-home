import { useState, useEffect } from "react";
import useBookTourAnimation from "../hooks/useBookTourAnimation";
import "./BookTourPage.scss";

const BookTourPage = () => {
  const [form, setForm] = useState({
    name: "",
    phone: "",
    date: "",
    message: "",
  });
  const [sent, setSent] = useState(false);

  const {
    sectionRef,
    bgTextRef,
    labelRef,
    labelLinesRef,
    headingRef,
    subRef,
    formRef,
    formFieldsRef,
    footerRef,
    noteRef,
    buttonRef,
    successRef,
  } = useBookTourAnimation();

  const handleChange = (e) =>
    setForm((prev) => ({ ...prev, [e.target.name]: e.target.value }));

  const handleSubmit = (e) => {
    e.preventDefault();
    // Wire up to EmailJS here:
    // emailjs.send("SERVICE_ID", "TEMPLATE_ID", form, "PUBLIC_KEY")
    setSent(true);
  };

  // Trigger success animation when sent becomes true
  useEffect(() => {
    if (sent && window.animateBookTourSuccess) {
      window.animateBookTourSuccess();
    }
  }, [sent]);

  return (
    <div className="book-tour" ref={sectionRef}>
      <section className="book-tour-section">
        {/* Ghost watermark */}
        <div className="book-tour-bg-text" ref={bgTextRef}>
          Tour
        </div>

        <div className="book-tour-inner">
          {/* Label */}
          <div className="book-tour-label" ref={labelRef}>
            <span
              className="book-tour-label-line"
              ref={(el) => (labelLinesRef.current[0] = el)}
            />
            <span className="book-tour-label-text">Book A Tour</span>
            <span
              className="book-tour-label-line"
              ref={(el) => (labelLinesRef.current[1] = el)}
            />
          </div>

          {/* Heading */}
          <h1 className="book-tour-heading" ref={headingRef}>
            Come see us <em>in person.</em>
          </h1>

          {/* Sub */}
          <p className="book-tour-sub" ref={subRef}>
            Fill in your details and we'll be in touch to confirm a time that
            works for you and your family.
          </p>

          {/* Form */}
          {sent ? (
            <div className="book-tour-success" ref={successRef}>
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
                  d="M6.5 10l2.5 2.5 4-4"
                  stroke="currentColor"
                  strokeWidth="1.5"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                />
              </svg>
              <div>
                <strong>Request received!</strong>
                <p>We'll be in touch within 24 hours to confirm your visit.</p>
              </div>
            </div>
          ) : (
            <form
              className="book-tour-form"
              ref={formRef}
              onSubmit={handleSubmit}
            >
              <div className="book-tour-row">
                <div
                  className="book-tour-field"
                  ref={(el) => (formFieldsRef.current[0] = el)}
                >
                  <span className="book-tour-field-label">Your name</span>
                  <input
                    name="name"
                    value={form.name}
                    onChange={handleChange}
                    placeholder="Full name"
                    required
                  />
                </div>
                <div
                  className="book-tour-field"
                  ref={(el) => (formFieldsRef.current[1] = el)}
                >
                  <span className="book-tour-field-label">Phone number</span>
                  <input
                    name="phone"
                    value={form.phone}
                    onChange={handleChange}
                    placeholder="+44..."
                    required
                  />
                </div>
              </div>

              <div
                className="book-tour-field"
                ref={(el) => (formFieldsRef.current[2] = el)}
              >
                <span className="book-tour-field-label">
                  Preferred visit date
                </span>
                <input
                  name="date"
                  type="date"
                  value={form.date}
                  onChange={handleChange}
                  required
                />
              </div>

              <div
                className="book-tour-field"
                ref={(el) => (formFieldsRef.current[3] = el)}
              >
                <span className="book-tour-field-label">
                  Message (optional)
                </span>
                <textarea
                  name="message"
                  value={form.message}
                  onChange={handleChange}
                  placeholder="Anything we should know?"
                  rows="3"
                />
              </div>

              <div className="book-tour-footer" ref={footerRef}>
                <p className="book-tour-note" ref={noteRef}>
                  We aim to respond within 24 hours.
                </p>
                <button type="submit" className="book-tour-btn" ref={buttonRef}>
                  Request A Tour
                  <svg
                    viewBox="0 0 16 16"
                    fill="none"
                    xmlns="http://www.w3.org/2000/svg"
                  >
                    <path
                      d="M3 8h10M9 4l4 4-4 4"
                      stroke="currentColor"
                      strokeWidth="1.5"
                      strokeLinecap="round"
                      strokeLinejoin="round"
                    />
                  </svg>
                </button>
              </div>
            </form>
          )}
        </div>
      </section>
    </div>
  );
};

export default BookTourPage;
