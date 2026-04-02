import { useRef, useEffect } from "react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";

// Register ScrollTrigger plugin
gsap.registerPlugin(ScrollTrigger);

const useBookTourAnimation = () => {
  // Section refs
  const sectionRef = useRef(null);
  const bgTextRef = useRef(null);
  const labelRef = useRef(null);
  const labelLinesRef = useRef([]);
  const headingRef = useRef(null);
  const subRef = useRef(null);
  const formRef = useRef(null);
  const formFieldsRef = useRef([]);
  const footerRef = useRef(null);
  const noteRef = useRef(null);
  const buttonRef = useRef(null);
  const successRef = useRef(null);

  useEffect(() => {
    const section = sectionRef.current;
    const bgText = bgTextRef.current;
    const label = labelRef.current;
    const labelLines = labelLinesRef.current;
    const heading = headingRef.current;
    const sub = subRef.current;
    const form = formRef.current;
    const formFields = formFieldsRef.current;
    const footer = footerRef.current;
    const note = noteRef.current;
    const button = buttonRef.current;
    const success = successRef.current;

    if (!section) return;

    // Set initial states
    gsap.set(bgText, { opacity: 0, scale: 0.95 });
    gsap.set(labelLines, { scaleX: 0, transformOrigin: "center" });
    gsap.set([label, heading, sub], { opacity: 0, y: 20 });
    gsap.set(form, { opacity: 0, y: 30 });
    gsap.set(formFields, { opacity: 0, x: -20 });
    gsap.set([footer, note, button], { opacity: 1, y: 15 });
    gsap.set(success, { opacity: 0, scale: 0.95, y: 20 });

    // Main timeline - all 0.5s durations
    const tl = gsap.timeline({
      scrollTrigger: {
        trigger: section,
        start: "top 80%",
        once: true,
      },
    });

    tl
      // Background text
      .to(bgText, {
        opacity: 0.06,
        scale: 1,
        duration: 0.5,
        ease: "power2.out",
      })
      // Label lines
      .to(
        labelLines,
        {
          scaleX: 1,
          duration: 0.5,
          stagger: 0.1,
          ease: "power2.out",
        },
        "-=0.5",
      )
      // Label text
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
      // Heading
      .to(
        heading,
        {
          opacity: 1,
          y: 0,
          duration: 0.5,
          ease: "back.out(0.5)",
        },
        "-=0.2",
      )
      // Sub text
      .to(
        sub,
        {
          opacity: 1,
          y: 0,
          duration: 0.5,
          ease: "power2.out",
        },
        "-=0.5",
      )
      // Form container
      .to(
        form,
        {
          opacity: 1,
          y: 0,
          duration: 0.5,
          ease: "power2.out",
        },
        "-=0.5",
      )
      // Form fields with stagger
      .to(
        formFields,
        {
          opacity: 1,
          x: 0,
          duration: 0.5,
          stagger: 0.08,
          ease: "power2.out",
        },
        "-=0.5",
      )
      // Footer elements
      .to(
        [note, button],
        {
          opacity: 1,
          y: 0,
          duration: 0.5,
          stagger: 0.08,
          ease: "power2.out",
        },
        "-=0.5",
      );

    // ── Button hover animation ──────────────
    if (button) {
      button.addEventListener("mouseenter", () => {
        gsap.to(button, {
          scale: 1.02,
          duration: 0.2,
          ease: "power2.out",
        });
      });

      button.addEventListener("mouseleave", () => {
        gsap.to(button, {
          scale: 1,
          duration: 0.2,
          ease: "power2.out",
        });
      });
    }

    // ── Input focus animations ──────────────
    formFields.forEach((field) => {
      if (field) {
        const input = field.querySelector("input, textarea");
        if (input) {
          input.addEventListener("focus", () => {
            gsap.to(field, {
              scale: 1.01,
              duration: 0.2,
              ease: "power2.out",
            });
          });

          input.addEventListener("blur", () => {
            gsap.to(field, {
              scale: 1,
              duration: 0.2,
              ease: "power2.out",
            });
          });
        }
      }
    });

    // ── Success animation handler ──────────
    const animateSuccess = () => {
      gsap.fromTo(
        success,
        { opacity: 0, scale: 0.95, y: 20 },
        { opacity: 1, scale: 1, y: 0, duration: 0.5, ease: "back.out(0.5)" },
      );
    };

    // Expose success animation globally for component use
    window.animateBookTourSuccess = animateSuccess;

    // ── Cleanup ─────────────────────────────
    return () => {
      if (button) {
        button.removeEventListener("mouseenter", () => {});
        button.removeEventListener("mouseleave", () => {});
      }
      formFields.forEach((field) => {
        if (field) {
          const input = field.querySelector("input, textarea");
          if (input) {
            input.removeEventListener("focus", () => {});
            input.removeEventListener("blur", () => {});
          }
        }
      });
      delete window.animateBookTourSuccess;
      ScrollTrigger.getAll().forEach((trigger) => trigger.kill());
    };
  }, []);

  return {
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
  };
};

export default useBookTourAnimation;
