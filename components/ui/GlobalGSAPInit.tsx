"use client";

import { useEffect } from "react";

/**
 * GlobalGSAPInit — registers GSAP ScrollTrigger and applies
 * scroll-reveal animations to all .gsap-reveal* elements sitewide.
 * Mount this once at the layout level.
 */
export const GlobalGSAPInit = () => {
  useEffect(() => {
    const init = async () => {
      try {
        const { gsap } = await import("gsap");
        const { ScrollTrigger } = await import("gsap/ScrollTrigger");
        gsap.registerPlugin(ScrollTrigger);

        // Generic reveal for any element with data-gsap attribute
        const reveals = document.querySelectorAll("[data-gsap='reveal']");
        reveals.forEach((el, i) => {
          const delay = parseFloat((el as HTMLElement).dataset.delay || "0");
          gsap.fromTo(
            el,
            { opacity: 0, y: 50 },
            {
              opacity: 1,
              y: 0,
              duration: 0.9,
              delay,
              ease: "power3.out",
              scrollTrigger: {
                trigger: el,
                start: "top 88%",
                once: true,
              },
            }
          );
        });

        ScrollTrigger.refresh();
      } catch (e) {
        // GSAP not critical — page works without animations
        console.warn("GSAP init warning:", e);
      }
    };

    // Slight delay to let page fully hydrate
    const timer = setTimeout(init, 300);
    return () => clearTimeout(timer);
  }, []);

  return null;
};
