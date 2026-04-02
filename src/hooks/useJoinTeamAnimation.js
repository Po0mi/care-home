import { useRef, useEffect } from "react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";

// Register ScrollTrigger plugin
gsap.registerPlugin(ScrollTrigger);

const useJoinTeamAnimation = () => {
  // Hero section refs
  const heroRef = useRef(null);
  const heroImgRef = useRef(null);
  const heroOverlayRef = useRef(null);
  const labelRef = useRef(null);
  const headingRef = useRef(null);
  const subRef = useRef(null);
  const perksRef = useRef([]);
  const cardRef = useRef(null);
  const cardPillRef = useRef(null);
  const cardHeadingRef = useRef(null);
  const cardBodyRef = useRef(null);
  const cardNoteRef = useRef(null);
  const cardCtaRef = useRef(null);

  useEffect(() => {
    // ── Hero Background Image & Overlay ──────────
    const hero = heroRef.current;
    const heroImg = heroImgRef.current;
    const heroOverlay = heroOverlayRef.current;

    if (hero) {
      // Set initial states
      gsap.set(heroImg, { scale: 1.1 });
      gsap.set(heroOverlay, { opacity: 0 });
      gsap.set([labelRef.current, headingRef.current, subRef.current], {
        opacity: 0,
        y: 20,
      });
      gsap.set(perksRef.current, { opacity: 0, y: 15 });
      gsap.set(cardRef.current, { opacity: 0, y: 30 });
      gsap.set(
        [
          cardPillRef.current,
          cardHeadingRef.current,
          cardBodyRef.current,
          cardNoteRef.current,
          cardCtaRef.current,
        ],
        {
          opacity: 0,
          y: 15,
        },
      );

      // Hero timeline - 0.5s durations
      const heroTl = gsap.timeline({
        scrollTrigger: {
          trigger: hero,
          start: "top 80%",
          once: true,
        },
      });

      heroTl
        // Scale image
        .to(heroImg, {
          scale: 1,
          duration: 0.5,
          ease: "power2.out",
        })
        // Fade in overlay
        .to(
          heroOverlay,
          {
            opacity: 1,
            duration: 0.5,
            ease: "power2.out",
          },
          "-=0.5",
        )
        // Label and heading
        .to(
          [labelRef.current, headingRef.current],
          {
            opacity: 1,
            y: 0,
            duration: 0.5,
            stagger: 0.1,
            ease: "back.out(0.5)",
          },
          "-=0.5",
        )
        // Sub text
        .to(
          subRef.current,
          {
            opacity: 1,
            y: 0,
            duration: 0.5,
            ease: "power2.out",
          },
          "-=0.2",
        )
        // Perks with stagger
        .to(
          perksRef.current,
          {
            opacity: 1,
            y: 0,
            duration: 0.5,
            stagger: 0.08,
            ease: "power2.out",
          },
          "-=0.5",
        )
        // Card slide up
        .to(
          cardRef.current,
          {
            opacity: 1,
            y: 0,
            duration: 0.5,
            ease: "back.out(0.5)",
          },
          "-=0.5",
        )
        // Card inner elements
        .to(
          [cardPillRef.current, cardHeadingRef.current],
          {
            opacity: 1,
            y: 0,
            duration: 0.5,
            stagger: 0.08,
            ease: "power2.out",
          },
          "-=0.5",
        )
        .to(
          [cardBodyRef.current, cardNoteRef.current],
          {
            opacity: 1,
            y: 0,
            duration: 0.5,
            stagger: 0.08,
            ease: "power2.out",
          },
          "-=0.5",
        )
        .to(
          cardCtaRef.current,
          {
            opacity: 1,
            y: 0,
            duration: 0.5,
            ease: "back.out(0.5)",
          },
          "-=0.5",
        );
    }

    // ── Hover animations for CTA button ──────────
    const cta = cardCtaRef.current;
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

    // ── Perk item hover animations ───────────────
    perksRef.current.forEach((perk) => {
      if (perk) {
        perk.addEventListener("mouseenter", () => {
          gsap.to(perk, {
            x: 5,
            duration: 0.2,
            ease: "power2.out",
          });
        });

        perk.addEventListener("mouseleave", () => {
          gsap.to(perk, {
            x: 0,
            duration: 0.2,
            ease: "power2.out",
          });
        });
      }
    });

    // ── Cleanup ───────────────────────────────────
    return () => {
      if (cta) {
        cta.removeEventListener("mouseenter", () => {});
        cta.removeEventListener("mouseleave", () => {});
      }
      perksRef.current.forEach((perk) => {
        if (perk) {
          perk.removeEventListener("mouseenter", () => {});
          perk.removeEventListener("mouseleave", () => {});
        }
      });
      ScrollTrigger.getAll().forEach((trigger) => trigger.kill());
    };
  }, []);

  return {
    heroRef,
    heroImgRef,
    heroOverlayRef,
    labelRef,
    headingRef,
    subRef,
    perksRef,
    cardRef,
    cardPillRef,
    cardHeadingRef,
    cardBodyRef,
    cardNoteRef,
    cardCtaRef,
  };
};

export default useJoinTeamAnimation;
