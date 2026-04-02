import { useEffect, useRef } from "react";
import gsap from "gsap";

const useHeroAnimation = () => {
  const containerRef = useRef(null);

  useEffect(() => {
    const ctx = gsap.context(() => {
      const tl = gsap.timeline({
        defaults: { ease: "power3.out" },
      });

      // ── Initial states ──────────────────
      gsap.set(
        [
          ".hero-title",
          ".hero-title2",
          ".hero-sub",
          ".hero-actions",
          ".hero-trust-row",
          ".hero-mouse-scroll",
          ".hero-label",
        ],
        {
          opacity: 0,
          y: 40,
        },
      );

      gsap.set(".hero-overlay", { opacity: 0 });
      gsap.set(".hero-video", { scale: 1.08 });

      // ── Timeline ────────────────────────

      // 1. Video scales down + overlay fades in
      tl.to(".hero-video", {
        scale: 1,
        duration: 1.8,
        ease: "power2.out",
      })
        .to(
          ".hero-overlay",
          {
            opacity: 1,
            duration: 1.2,
            ease: "power2.out",
          },
          "<",
        )

        // 2. Title 1 — slides up
        .to(
          ".hero-title",
          {
            opacity: 1,
            y: 0,
            duration: 0.9,
          },
          "-=0.6",
        )

        // 3. Title 2 — slides up with slight delay
        .to(
          ".hero-title2",
          {
            opacity: 1,
            y: 0,
            duration: 0.9,
          },
          "-=0.65",
        )

        // 4. Sub copy
        .to(
          ".hero-sub",
          {
            opacity: 1,
            y: 0,
            duration: 0.7,
          },
          "-=0.5",
        )

        // 5. CTAs
        .to(
          ".hero-actions",
          {
            opacity: 1,
            y: 0,
            duration: 0.7,
          },
          "-=0.5",
        )

        // 6. Trust row — stagger each item
        .to(
          ".hero-trust-item, .hero-trust-div",
          {
            opacity: 1,
            y: 0,
            duration: 0.5,
            stagger: 0.08,
          },
          "-=0.5",
        )

        // 7. Mouse scroll indicator
        .to(
          ".hero-mouse-scroll",
          {
            opacity: 1,
            y: 0,
            duration: 0.6,
          },
          "-=0.5",
        );
    }, containerRef);

    return () => ctx.revert();
  }, []);

  return { containerRef };
};

export default useHeroAnimation;
