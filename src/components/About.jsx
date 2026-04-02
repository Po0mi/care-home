import { Link } from "react-router-dom";
import Elder from "../assets/old-person.png";
import "./About.scss";

const FEATURES = [
  {
    title: "Personalised Care Plans",
    desc: "Every resident deserves care that is as unique as they are. Our healthcare professionals develop up to date care plans that go beyond clinical information, including medical history and medication charts, to capture the personal details that make each person who they are. This approach ensures genuine, individualised care rooted in our core belief that every person matters.",
  },
  {
    title: "Medication Monitoring",
    desc: "There comes a point in everyone's life when they may no longer be able to care for themselves. Families naturally want to care for their loved ones, just as they were cared for as children. However, careers and the demands of modern life can often make this difficult. Sycamore Cottage provides the support that retirees and their families need, including Medication Monitoring services which we are more than happy to offer.",
  },
  {
    title: "Here For You",
    desc: "Throughout the year, we provide our residents with empathy and genuine support. Moving somewhere new can feel daunting, so we take pride in making every person's experience special. We always ensure there is something exciting to look forward to at Sycamore Cottage. This is just one of the things that sets our Home apart. We are passionate about creating opportunities for our residents to make new memories and friends.",
  },
  {
    title: "Experienced Staff",
    desc: "Our Registered Manager Anna and the rest of the team at Sycamore Cottage are caring, joyous and dedicated. We believe that as a residential home, our responsibility goes beyond providing a safe and caring environment. We must also create a joyful one. Our staff will treat your loved ones like family, setting us apart from the clinical environments found in some larger care homes.",
  },
];

const About = () => (
  <section className="about" id="about">
    {/* Image bleeds out right */}
    <div className="about-image-bleed">
      <div className="about-image-inner">
        <img src={Elder} alt="Elderly person" />
      </div>
    </div>

    {/* Label */}
    <div className="about-label">
      <span className="about-label-text">Living & Thriving</span>
    </div>

    {/* Heading */}
    <div className="about-heading-wrap">
      <h2 className="about-heading">
        A little about
        <span className="about-heading-faded"> what we do</span> at
        <br />
        <em>Sycamore</em> <span className="about-heading-ghost">Cottage </span>
        <span className="about-heading-faded">care that feels like</span>{" "}
        <em>home.</em>
      </h2>
    </div>

    {/* Sub copy */}
    <p className="about-sub">
      Our trained healthcare professionals ensure each resident has a
      personalised, clinically relevant care plan, treating everyone as an
      individual with a full life history.
    </p>

    {/* Features */}
    <div className="about-features">
      {FEATURES.map(({ title, desc }) => (
        <div key={title} className="about-feature-item">
          <h4 className="about-feature-title">{title}</h4>
          <p className="about-feature-desc">{desc}</p>
        </div>
      ))}
    </div>
  </section>
);

export default About;
