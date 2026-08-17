"use client";

import { type CSSProperties, type ReactNode, useEffect, useRef, useState } from "react";

type ScrollRevealProps = {
  children: ReactNode;
  className?: string;
  delay?: number;
};

export function ScrollReveal({ children, className = "", delay = 0 }: ScrollRevealProps) {
  const ref = useRef<HTMLDivElement>(null);
  const [isVisible, setIsVisible] = useState(false);
  const [isReady, setIsReady] = useState(false);
  const [reduceMotion, setReduceMotion] = useState(false);

  useEffect(() => {
    const element = ref.current;
    if (!element) return;

    const prefersReducedMotion = window.matchMedia("(prefers-reduced-motion: reduce)").matches;
    if (prefersReducedMotion || !("IntersectionObserver" in window)) {
      const frame = window.requestAnimationFrame(() => {
        setReduceMotion(prefersReducedMotion);
        setIsVisible(true);
        setIsReady(true);
      });
      return () => window.cancelAnimationFrame(frame);
    }

    let observer: IntersectionObserver | null = null;
    let frame = 0;

    const reveal = () => {
      setIsVisible(true);
      observer?.disconnect();
      window.removeEventListener("scroll", checkViewport);
      window.removeEventListener("resize", checkViewport);
    };

    const checkViewport = () => {
      const bounds = element.getBoundingClientRect();
      const triggerLine = window.innerHeight * 0.9;

      if (bounds.top <= triggerLine && bounds.bottom >= 0) {
        reveal();
      }
    };

    observer = new IntersectionObserver(
      ([entry]) => {
        if (!entry?.isIntersecting) return;
        reveal();
      },
      { rootMargin: "0px 0px -12% 0px", threshold: 0.18 },
    );

    observer.observe(element);
    window.addEventListener("scroll", checkViewport, { passive: true });
    window.addEventListener("resize", checkViewport);
    frame = window.requestAnimationFrame(() => {
      checkViewport();
      setIsReady(true);
    });

    return () => {
      window.cancelAnimationFrame(frame);
      observer?.disconnect();
      window.removeEventListener("scroll", checkViewport);
      window.removeEventListener("resize", checkViewport);
    };
  }, []);

  const isRevealed = !isReady || isVisible;

  return (
    <div
      ref={ref}
      className={`transform-gpu ${className}`}
      style={
        {
          opacity: isRevealed ? 1 : 0,
          transform: isRevealed || reduceMotion ? "translateY(0)" : "translateY(0.9rem)",
          transitionProperty:
            reduceMotion || !isReady ? "none" : "opacity, transform",
          transitionDuration: reduceMotion || !isReady ? "0ms" : "560ms",
          transitionTimingFunction: "ease",
          transitionDelay:
            reduceMotion || !isReady ? "0ms" : `${delay}ms`,
          willChange: "opacity, transform",
        } as CSSProperties
      }
    >
      {children}
    </div>
  );
}
