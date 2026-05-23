"use client";

import React, { useRef, useEffect, useState } from "react";

interface RevealTitleProps {
  text: string;
  as?: "h1" | "h2" | "h3" | "h4" | "h5" | "h6" | "span" | "p";
  className?: string;
  immediate?: boolean;
}

export default function RevealTitle({ text, as: Tag = "h2", className, immediate = false }: RevealTitleProps) {
  const [isVisible, setIsVisible] = useState(false);
  const elementRef = useRef<HTMLElement>(null);

  useEffect(() => {
    // Solo en navegador
    if (typeof window === "undefined") return;

    if (immediate) {
      // Activar inmediatamente después del montaje con un ligero retraso para la animación
      const timer = setTimeout(() => setIsVisible(true), 300);
      return () => clearTimeout(timer);
    }

    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setIsVisible(true);
          observer.unobserve(entry.target);
        }
      },
      { 
        threshold: 0.15,
        rootMargin: "0px 0px -50px 0px"
      }
    );

    const currentElement = elementRef.current;
    if (currentElement) {
      observer.observe(currentElement);
    }

    return () => {
      if (currentElement) {
        observer.unobserve(currentElement);
      }
    };
  }, []);

  const words = text.split(" ");

  return (
    <Tag
      ref={elementRef as any}
      className={`${className ?? ""}`}
    >
      {words.map((word, i) => (
        <span
          key={i}
          className="inline-block overflow-hidden mr-[0.25em] py-[0.05em] align-bottom"
        >
          <span
            className="inline-block transition-transform duration-[1.8s] ease-[cubic-bezier(0.16,1,0.3,1)] transform-gpu"
            style={{
              transform: isVisible ? "translateY(0)" : "translateY(105%)",
              transitionDelay: `${0.35 + i * 0.12}s`,
            }}
          >
            {word}
          </span>
        </span>
      ))}
    </Tag>
  );
}
