import { useEffect } from "react";
import { useLocation } from "react-router-dom";
import Hero from "../components/Hero";
import About from "../components/About";
import QuoteBanner from "../components/QuoteBanner";
import Testimonials from "../components/Testimonials";
import Map from "../components/MapSection";
import Contact from "../components/Contact";

const Home = () => {
  const location = useLocation();

  useEffect(() => {
    if (location.hash === "#contact") {
      document.getElementById("contact")?.scrollIntoView();
    }
  }, [location]);

  return (
    <>
      <Hero />
      <About />
      <QuoteBanner />
      <Testimonials />
      <Map />
      <Contact />
    </>
  );
};

export default Home;
