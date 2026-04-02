import { useRef, useEffect } from "react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";

// Register ScrollTrigger plugin
gsap.registerPlugin(ScrollTrigger);

const useMapAnimation = () => {
  const sectionRef = useRef(null);
  const cardRef = useRef(null);
  const labelRef = useRef(null);
  const headingRef = useRef(null);
  const detailsRef = useRef([]);
  const ctaRef = useRef(null);

  useEffect(() => {
    const section = sectionRef.current;
    const card = cardRef.current;
    const label = labelRef.current;
    const heading = headingRef.current;
    const details = detailsRef.current;
    const cta = ctaRef.current;

    if (!section || !card) return;

    // Set initial states
    gsap.set(card, {
      opacity: 0,
      x: -60,
    });

    gsap.set([label, heading], {
      opacity: 0,
      y: 20,
    });

    gsap.set(details, {
      opacity: 0,
      x: -30,
    });

    gsap.set(cta, {
      opacity: 0,
      y: 20,
    });

    // Create main timeline
    const tl = gsap.timeline({
      scrollTrigger: {
        trigger: section,
        start: "top 70%",
        end: "bottom 30%",
        toggleActions: "play none none none",
      },
    });

    // Animate card sliding in
    tl.to(card, {
      opacity: 1,
      x: 0,
      duration: 0.8,
      ease: "back.out(0.6)",
    })
      // Animate label
      .to(
        label,
        {
          opacity: 1,
          y: 0,
          duration: 0.5,
          ease: "power2.out",
        },
        "-=0.5",
      )
      // Animate heading
      .to(
        heading,
        {
          opacity: 1,
          y: 0,
          duration: 0.6,
          ease: "power2.out",
        },
        "-=0.5",
      )
      // Animate details with stagger
      .to(
        details,
        {
          opacity: 1,
          x: 0,
          duration: 0.5,
          stagger: 0.1,
          ease: "power2.out",
        },
        "-=0.5",
      )
      // Animate CTA button
      .to(
        cta,
        {
          opacity: 1,
          y: 0,
          duration: 0.5,
          ease: "back.out(0.5)",
        },
        "-=0.5",
      );

    // Optional: Add hover animation for CTA
    if (cta) {
      cta.addEventListener("mouseenter", () => {
        gsap.to(cta, {
          scale: 1.02,
          duration: 0.2,
          ease: "power2.out",
        });
      });

      cta.addEventListener("mouseleave", () => {
        gsap.to(cta, {
          scale: 1,
          duration: 0.2,
          ease: "power2.out",
        });
      });
    }

    return () => {
      if (cta) {
        cta.removeEventListener("mouseenter", () => {});
        cta.removeEventListener("mouseleave", () => {});
      }
      ScrollTrigger.getAll().forEach((trigger) => trigger.kill());
    };
  }, []);

  return {
    sectionRef,
    cardRef,
    labelRef,
    headingRef,
    detailsRef,
    ctaRef,
  };
};

export default useMapAnimation;
