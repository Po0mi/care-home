import { useRef, useEffect } from "react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";

// Register ScrollTrigger plugin
gsap.registerPlugin(ScrollTrigger);

const useAboutPageAnimation = () => {
  // Hero section refs
  const heroRef = useRef(null);
  const heroBgTextRef = useRef(null);
  const heroLabelRef = useRef(null);
  const heroHeadingRef = useRef(null);
  const heroSubRef = useRef(null);
  const heroStatsRef = useRef(null);
  const heroStatsItemsRef = useRef([]);
  const heroImageRef = useRef(null);
  const heroCqcRef = useRef(null);

  // Content section refs
  const contentRef = useRef(null);
  const storyRef = useRef(null);
  const storyTextRef = useRef([]);
  const teamRef = useRef(null);
  const teamCardsRef = useRef([]);
  const valuesRef = useRef(null);
  const valuesItemsRef = useRef([]);
  const ctaStripRef = useRef(null);
  const ctaQuoteRef = useRef(null);
  const ctaBtnRef = useRef(null);

  useEffect(() => {
    // ── Hero Animations ──────────────────────────
    const hero = heroRef.current;
    const heroBgText = heroBgTextRef.current;
    const heroLabel = heroLabelRef.current;
    const heroHeading = heroHeadingRef.current;
    const heroSub = heroSubRef.current;
    const heroStats = heroStatsRef.current;
    const heroStatsItems = heroStatsItemsRef.current;
    const heroImage = heroImageRef.current;
    const heroCqc = heroCqcRef.current;

    if (hero) {
      // Set initial states
      gsap.set(heroBgText, { opacity: 0, scale: 0.95 });
      gsap.set([heroLabel, heroHeading, heroSub, heroStats], {
        opacity: 0,
        y: 20,
      });
      gsap.set(heroStatsItems, { opacity: 0, y: 15 });
      gsap.set(heroImage, { opacity: 0, x: 40, scale: 0.98 });
      gsap.set(heroCqc, { opacity: 0, y: 15 });

      // Hero timeline - faster durations
      const heroTl = gsap.timeline({
        scrollTrigger: {
          trigger: hero,
          start: "top 80%",
          once: true,
        },
      });

      heroTl
        .to(heroBgText, {
          opacity: 0.06,
          scale: 1,
          duration: 0.7,
          ease: "power2.out",
        })
        .to(
          [heroLabel, heroHeading],
          {
            opacity: 1,
            y: 0,
            duration: 0.4,
            stagger: 0.1,
            ease: "back.out(0.5)",
          },
          "-=0.3",
        )
        .to(
          heroSub,
          { opacity: 1, y: 0, duration: 0.4, ease: "power2.out" },
          "-=0.2",
        )
        .to(
          heroStats,
          { opacity: 1, y: 0, duration: 0.35, ease: "power2.out" },
          "-=0.15",
        )
        .to(
          heroStatsItems,
          {
            opacity: 1,
            y: 0,
            duration: 0.3,
            stagger: 0.08,
            ease: "power2.out",
          },
          "-=0.2",
        )
        .to(
          heroImage,
          { opacity: 1, x: 0, scale: 1, duration: 0.5, ease: "back.out(0.1)" },
          "-=0.9",
        )
        .to(
          heroCqc,
          { opacity: 1, y: 0, duration: 0.35, ease: "power2.out" },
          "-=0.2",
        );
    }

    // ── Story Section Animations ──────────────────
    const story = storyRef.current;
    const storyTexts = storyTextRef.current;

    if (story) {
      gsap.set(storyTexts, { opacity: 0, y: 20 });

      ScrollTrigger.create({
        trigger: story,
        start: "top 80%",
        once: true,
        onEnter: () => {
          gsap.to(storyTexts, {
            opacity: 1,
            y: 0,
            duration: 0.4,
            stagger: 0.12,
            ease: "power2.out",
          });
        },
      });
    }

    // ── Team Section Animations ───────────────────
    const team = teamRef.current;
    const teamCards = teamCardsRef.current;

    if (team) {
      gsap.set(teamCards, { opacity: 0, y: 30 });

      ScrollTrigger.create({
        trigger: team,
        start: "top 80%",
        once: true,
        onEnter: () => {
          gsap.to(teamCards, {
            opacity: 1,
            y: 0,
            duration: 0.4,
            stagger: 0.1,
            ease: "back.out(0.4)",
          });
        },
      });
    }

    // ── Values Section Animations ─────────────────
    const values = valuesRef.current;
    const valuesItems = valuesItemsRef.current;

    if (values) {
      gsap.set(valuesItems, { opacity: 0, x: -30 });

      ScrollTrigger.create({
        trigger: values,
        start: "top 80%",
        once: true,
        onEnter: () => {
          gsap.to(valuesItems, {
            opacity: 1,
            x: 0,
            duration: 0.4,
            stagger: 0.1,
            ease: "back.out(0.4)",
          });
        },
      });
    }

    // ── CTA Strip Animations ──────────────────────
    const ctaStrip = ctaStripRef.current;
    const ctaQuote = ctaQuoteRef.current;
    const ctaBtn = ctaBtnRef.current;

    if (ctaStrip) {
      gsap.set([ctaQuote, ctaBtn], { opacity: 0, y: 20 });

      ScrollTrigger.create({
        trigger: ctaStrip,
        start: "top 80%",
        once: true,
        onEnter: () => {
          const tl = gsap.timeline();
          tl.to(ctaQuote, {
            opacity: 1,
            y: 0,
            duration: 0.4,
            ease: "back.out(0.5)",
          }).to(
            ctaBtn,
            { opacity: 1, y: 0, duration: 0.35, ease: "power2.out" },
            "-=0.2",
          );
        },
      });
    }

    // ── Cleanup ───────────────────────────────────
    return () => {
      ScrollTrigger.getAll().forEach((trigger) => trigger.kill());
    };
  }, []);

  return {
    // Hero refs
    heroRef,
    heroBgTextRef,
    heroLabelRef,
    heroHeadingRef,
    heroSubRef,
    heroStatsRef,
    heroStatsItemsRef,
    heroImageRef,
    heroCqcRef,
    // Content refs
    contentRef,
    storyRef,
    storyTextRef,
    teamRef,
    teamCardsRef,
    valuesRef,
    valuesItemsRef,
    ctaStripRef,
    ctaQuoteRef,
    ctaBtnRef,
  };
};

export default useAboutPageAnimation;
