import { useRef, useEffect } from "react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";

// Register ScrollTrigger plugin
gsap.registerPlugin(ScrollTrigger);

const useContactAnimation = () => {
  const sectionRef = useRef(null);
  const bgTextRef = useRef(null);
  const labelRef = useRef(null);
  const labelLinesRef = useRef([]);
  const headingRef = useRef(null);
  const detailsRef = useRef([]);
  const statsRef = useRef(null);
  const statItemsRef = useRef([]);

  useEffect(() => {
    const section = sectionRef.current;
    const bgText = bgTextRef.current;
    const label = labelRef.current;
    const labelLines = labelLinesRef.current;
    const heading = headingRef.current;
    const details = detailsRef.current;
    const stats = statsRef.current;
    const statItems = statItemsRef.current;

    if (!section) return;

    // Set initial states
    gsap.set(bgText, {
      opacity: 0,
      scale: 0.9,
    });

    gsap.set(labelLines, {
      scaleX: 0,
      transformOrigin: "center",
    });

    gsap.set([label, heading], {
      opacity: 0,
      y: 30,
    });

    gsap.set(details, {
      opacity: 0,
      x: -40,
    });

    gsap.set(stats, {
      opacity: 0,
      y: 30,
    });

    gsap.set(statItems, {
      opacity: 0,
      y: 20,
    });

    // Create main timeline
    const tl = gsap.timeline({
      scrollTrigger: {
        trigger: section,
        start: "top 100%",
        end: "bottom 25%",
        toggleActions: "play none none none",
      },
    });

    // Animate background text
    tl.to(bgText, {
      opacity: 0.06,
      scale: 1,
      duration: 1.2,
      ease: "power2.out",
    })
      // Animate label lines
      .to(
        labelLines,
        {
          scaleX: 1,
          duration: 0.5,
          stagger: 0.15,
          ease: "power2.out",
        },
        "-=0.8",
      )
      // Animate label text
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
          duration: 0.7,
          ease: "back.out(0.6)",
        },
        "-=0.5",
      )
      // Animate details with stagger
      .to(
        details,
        {
          opacity: 1,
          x: 0,
          duration: 0.6,
          stagger: 0.15,
          ease: "back.out(0.5)",
        },
        "-=0.5",
      )
      // Animate stats container
      .to(
        stats,
        {
          opacity: 1,
          y: 0,
          duration: 0.5,
          ease: "power2.out",
        },
        "-=0.5",
      )
      // Animate stat items with stagger
      .to(
        statItems,
        {
          opacity: 1,
          y: 0,
          duration: 0.4,
          stagger: 0.1,
          ease: "power2.out",
        },
        "-=0.5",
      );

    // Add hover animations for detail items
    details.forEach((detail) => {
      if (detail) {
        detail.addEventListener("mouseenter", () => {
          gsap.to(detail, {
            x: 5,
            duration: 0.3,
            ease: "power2.out",
          });
        });

        detail.addEventListener("mouseleave", () => {
          gsap.to(detail, {
            x: 0,
            duration: 0.3,
            ease: "power2.out",
          });
        });
      }
    });

    return () => {
      details.forEach((detail) => {
        if (detail) {
          detail.removeEventListener("mouseenter", () => {});
          detail.removeEventListener("mouseleave", () => {});
        }
      });
      ScrollTrigger.getAll().forEach((trigger) => trigger.kill());
    };
  }, []);

  return {
    sectionRef,
    bgTextRef,
    labelRef,
    labelLinesRef,
    headingRef,
    detailsRef,
    statsRef,
    statItemsRef,
  };
};

export default useContactAnimation;
