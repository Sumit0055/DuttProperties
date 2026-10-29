"use client";

import { useEffect } from "react";

/**
 * Lenis smooth scrolling wired into GSAP ScrollTrigger, plus an optional
 * lightweight parallax for elements marked with `data-gsap-parallax`.
 * Everything is loaded lazily on the client so the server bundle stays small,
 * and it is skipped entirely for visitors who prefer reduced motion.
 */
export default function SmoothScroll() {
  useEffect(() => {
    if (typeof window === "undefined") return;
    if (window.matchMedia("(prefers-reduced-motion: reduce)").matches) return;

    let lenis = null;
    let frameId = 0;
    let cancelled = false;
    const tweens = [];

    const init = async () => {
      try {
        const [LenisModule, gsapModule, scrollTriggerModule] = await Promise.all([
          import("lenis"),
          import("gsap"),
          import("gsap/ScrollTrigger"),
        ]);

        if (cancelled) return;

        const Lenis = LenisModule.default;
        const gsap = gsapModule.gsap || gsapModule.default;
        const ScrollTrigger =
          scrollTriggerModule.ScrollTrigger || scrollTriggerModule.default;

        gsap.registerPlugin(ScrollTrigger);

        lenis = new Lenis({
          duration: 1.05,
          smoothWheel: true,
          wheelMultiplier: 0.9,
          touchMultiplier: 1.5,
          easing: (t) => Math.min(1, 1.001 - Math.pow(2, -10 * t)),
        });

        lenis.on("scroll", ScrollTrigger.update);

        const raf = (time) => {
          lenis.raf(time);
          frameId = requestAnimationFrame(raf);
        };
        frameId = requestAnimationFrame(raf);

        const parallaxItems = document.querySelectorAll("[data-gsap-parallax]");
        parallaxItems.forEach((item) => {
          const depth = Number(item.dataset.gsapParallax) || 40;
          tweens.push(
            gsap.to(item, {
              y: depth,
              ease: "none",
              scrollTrigger: {
                trigger: item,
                start: "top bottom",
                end: "bottom top",
                scrub: 0.6,
              },
            })
          );
        });
      } catch {
        // Smooth scrolling is a progressive enhancement — fail silently.
      }
    };

    init();

    return () => {
      cancelled = true;
      cancelAnimationFrame(frameId);
      tweens.forEach((tween) => tween.kill?.());
      lenis?.destroy?.();
    };
  }, []);

  return null;
}
