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
  const [reduceMotion, setReduceMotion] = useState(false);

  useEffect(() => {
    const element = ref.current;
    if (!element) return;

    const prefersReducedMotion = window.matchMedia("(prefers-reduced-motion: reduce)").matches;
    if (prefersReducedMotion || !("IntersectionObserver" in window)) {
      const frame = window.requestAnimationFrame(() => {
        setReduceMotion(prefersReducedMotion);
        setIsVisible(true);
      });
      return () => window.cancelAnimationFrame(frame);
    }

    const observer = new IntersectionObserver(
      ([entry]) => {
        if (!entry?.isIntersecting) return;
        setIsVisible(true);
        observer.disconnect();
      },
      { rootMargin: "0px 0px -12% 0px", threshold: 0.18 },
    );

    observer.observe(element);

    return () => observer.disconnect();
  }, []);

  return (
    <div
      ref={ref}
      className={`transform-gpu ${className}`}
      style={
        {
          opacity: isVisible ? 1 : 0,
          transform: isVisible || reduceMotion ? "translateY(0)" : "translateY(0.9rem)",
          transition: reduceMotion
            ? "none"
            : "opacity 560ms ease, transform 560ms ease",
          transitionDelay: `${delay}ms`,
          willChange: "opacity, transform",
        } as CSSProperties
      }
    >
      {children}
    </div>
  );
}
