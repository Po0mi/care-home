import { useRef, useEffect } from "react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";

// Register ScrollTrigger plugin
gsap.registerPlugin(ScrollTrigger);

const useTestimonialsAnimation = () => {
  const sectionRef = useRef(null);
  const labelRef = useRef(null);
  const headingRef = useRef(null);
  const ratingsRef = useRef(null);
  const bigQuoteRef = useRef(null);
  const cardsRef = useRef([]);

  useEffect(() => {
    const section = sectionRef.current;
    const label = labelRef.current;
    const heading = headingRef.current;
    const ratings = ratingsRef.current;
    const bigQuote = bigQuoteRef.current;
    const cards = cardsRef.current;

    if (!section) return;

    // Set initial states
    gsap.set([label, heading, ratings, bigQuote], {
      opacity: 0,
      y: 30,
    });

    gsap.set(cards, {
      opacity: 0,
      y: 40,
    });

    // Create main timeline
    const tl = gsap.timeline({
      scrollTrigger: {
        trigger: section,
        start: "top 80%",
        end: "bottom 20%",
        toggleActions: "play none none none",
      },
    });

    // Animate label first
    tl.to(label, {
      opacity: 1,
      y: 0,
      duration: 0.5,
      ease: "power2.out",
    })
      // Animate heading
      .to(
        heading,
        {
          opacity: 1,
          y: 0,
          duration: 0.6,
          ease: "back.out(0.6)",
        },
        "-=0.5",
      )
      // Animate ratings
      .to(
        ratings,
        {
          opacity: 1,
          y: 0,
          duration: 0.5,
          ease: "power2.out",
        },
        "-=0.5",
      )
      // Animate big quote
      .to(
        bigQuote,
        {
          opacity: 1,
          y: 0,
          duration: 0.7,
          ease: "power2.out",
        },
        "-=0.5",
      )
      // Animate cards with stagger
      .to(
        cards,
        {
          opacity: 1,
          y: 0,
          duration: 0.6,
          stagger: 0.15,
          ease: "back.out(0.5)",
        },
        "-=0.5",
      );

    return () => {
      ScrollTrigger.getAll().forEach((trigger) => trigger.kill());
    };
  }, []);

  return {
    sectionRef,
    labelRef,
    headingRef,
    ratingsRef,
    bigQuoteRef,
    cardsRef,
  };
};

export default useTestimonialsAnimation;
