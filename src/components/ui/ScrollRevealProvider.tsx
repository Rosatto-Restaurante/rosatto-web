"use client";

import { useEffect } from "react";

export default function ScrollRevealProvider() {
  useEffect(() => {
    // Solo se ejecuta en el navegador (cliente)
    if (typeof window === "undefined") return;

    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            entry.target.classList.add("is-visible");
            // Deja de observar una vez visible para evitar re-animaciones molestas
            observer.unobserve(entry.target);
          }
        });
      },
      {
        threshold: 0,
        rootMargin: "50px", // Trigger slightly before it enters, or immediately when it does, ensuring bottom elements don't fail
      }
    );

    const selectAndObserve = () => {
      document.querySelectorAll(".reveal-text, .reveal-title-simple").forEach((el) => {
        observer.observe(el);
      });
    };

    // Escaneo inicial
    selectAndObserve();

    // Como Next.js tiene renderizado dinámico, observamos cualquier cambio en el DOM
    const mutationObserver = new MutationObserver(() => {
      selectAndObserve();
    });

    mutationObserver.observe(document.body, { childList: true, subtree: true });

    return () => {
      observer.disconnect();
      mutationObserver.disconnect();
    };
  }, []);

  return null;
}
