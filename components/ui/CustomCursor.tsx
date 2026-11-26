"use client";

import { useEffect, useRef } from "react";

export const CustomCursor = () => {
  const dotRef = useRef<HTMLDivElement>(null);
  const ringRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const dot = dotRef.current;
    const ring = ringRef.current;
    if (!dot || !ring) return;

    let mouseX = 0;
    let mouseY = 0;
    let ringX = 0;
    let ringY = 0;
    let animationId: number;

    const handleMouseMove = (e: MouseEvent) => {
      mouseX = e.clientX;
      mouseY = e.clientY;
      dot.style.left = `${mouseX}px`;
      dot.style.top = `${mouseY}px`;
    };

    const animateRing = () => {
      ringX += (mouseX - ringX) * 0.12;
      ringY += (mouseY - ringY) * 0.12;
      ring.style.left = `${ringX}px`;
      ring.style.top = `${ringY}px`;
      animationId = requestAnimationFrame(animateRing);
    };

    const handleMouseEnterLink = () => {
      dot.classList.add("cursor-hover");
      ring.classList.add("cursor-hover");
    };

    const handleMouseLeaveLink = () => {
      dot.classList.remove("cursor-hover");
      ring.classList.remove("cursor-hover");
    };

    const handleMouseDown = () => {
      dot.classList.add("cursor-click");
      ring.style.transform = "translate(-50%, -50%) scale(0.8)";
    };

    const handleMouseUp = () => {
      dot.classList.remove("cursor-click");
      ring.style.transform = "translate(-50%, -50%) scale(1)";
    };

    const addLinkListeners = () => {
      const interactives = document.querySelectorAll("a, button, [role='button'], input, textarea, select, .magnetic");
      interactives.forEach((el) => {
        el.addEventListener("mouseenter", handleMouseEnterLink);
        el.addEventListener("mouseleave", handleMouseLeaveLink);
      });
    };

    window.addEventListener("mousemove", handleMouseMove);
    window.addEventListener("mousedown", handleMouseDown);
    window.addEventListener("mouseup", handleMouseUp);
    animationId = requestAnimationFrame(animateRing);

    // Add interactive listeners after slight delay so DOM is fully rendered
    const timer = setTimeout(addLinkListeners, 500);

    // Re-add on DOM changes
    const observer = new MutationObserver(addLinkListeners);
    observer.observe(document.body, { childList: true, subtree: true });

    return () => {
      window.removeEventListener("mousemove", handleMouseMove);
      window.removeEventListener("mousedown", handleMouseDown);
      window.removeEventListener("mouseup", handleMouseUp);
      cancelAnimationFrame(animationId);
      clearTimeout(timer);
      observer.disconnect();
    };
  }, []);

  return (
    <>
      <div ref={dotRef} className="cursor-dot" />
      <div ref={ringRef} className="cursor-ring" />
    </>
  );
};
