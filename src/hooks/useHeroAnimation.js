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
          ".hero-label",
          ".hero-title",
          ".hero-title2",
          ".hero-sub",
          ".hero-actions",
          ".hero-mouse-scroll",
        ],
        { opacity: 0, y: 40 },
      );

      // Trust items set individually — fixes opacity 0 persisting bug
      gsap.set(".hero-trust-item", { opacity: 0, y: 20 });
      gsap.set(".hero-trust-div", { opacity: 0 });
      gsap.set(".hero-trust-row", { opacity: 1 }); // row visible, children hidden

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
          { opacity: 1, duration: 1.2, ease: "power2.out" },
          "<",
        )

        // 2. Label — italic "Sycamore" slides up
        .to(".hero-label", { opacity: 1, y: 0, duration: 0.7 }, "-=0.6")

        // 3. Title 1 — "Care that"
        .to(".hero-title", { opacity: 1, y: 0, duration: 0.9 }, "-=0.5")

        // 4. Title 2 — "feels like home."
        .to(".hero-title2", { opacity: 1, y: 0, duration: 0.9 }, "-=0.65")

        // 5. Sub copy
        .to(".hero-sub", { opacity: 1, y: 0, duration: 0.7 }, "-=0.5")

        // 6. CTAs
        .to(".hero-actions", { opacity: 1, y: 0, duration: 0.7 }, "-=0.5")

        // 7. Trust items — stagger individually
        .to(
          ".hero-trust-item",
          { opacity: 1, y: 0, duration: 0.5, stagger: 0.1 },
          "-=0.3",
        )
        .to(".hero-trust-div", { opacity: 1, duration: 0.4, stagger: 0.1 }, "<")

        // 8. Mouse scroll indicator
        .to(".hero-mouse-scroll", { opacity: 1, y: 0, duration: 0.6 }, "-=0.2");
    }, containerRef);

    return () => ctx.revert();
  }, []);

  return { containerRef };
};

export default useHeroAnimation;
