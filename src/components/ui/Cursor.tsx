// src/components/ui/Cursor.tsx
"use client";
import { useEffect } from "react";

/**
 * Cursor magenta (solo punto).
 * - Activo solo en desktop (pointer:fine + hover:hover).
 * - Se oculta sobre inputs/selects/contentEditable o data-cursor="off".
 * - Respeta prefers-reduced-motion (sin animaciones si está activado).
 */
export default function Cursor() {
  useEffect(() => {
    const mqPointer = window.matchMedia("(pointer:fine)");
    const mqHover = window.matchMedia("(hover:hover)");
    const mqReduce = window.matchMedia("(prefers-reduced-motion: reduce)");
    if (!mqPointer.matches || !mqHover.matches) return;

    document.documentElement.classList.add("has-custom-cursor");

    // Crea nodo para el punto
    const dot = document.createElement("div");
    dot.className = "cursor-dot";
    document.body.appendChild(dot);

    let raf = 0;
    let x = -100,
      y = -100;
    let visible = false;

    const setVars = () => {
      dot.style.setProperty("--x", `${x}px`);
      dot.style.setProperty("--y", `${y}px`);
    };

    const show = () => {
      if (!visible) {
        dot.style.opacity = "1";
        visible = true;
      }
    };
    const hide = () => {
      if (visible) {
        dot.style.opacity = "0";
        visible = false;
      }
    };

    const move = (e: MouseEvent) => {
      x = e.clientX;
      y = e.clientY;
      cancelAnimationFrame(raf);
      raf = requestAnimationFrame(setVars);
      show();

      const el = e.target as HTMLElement | null;
      const tag = el?.tagName?.toLowerCase();
      const off =
        el?.closest?.("[data-cursor='off']") ||
        tag === "input" ||
        tag === "textarea" ||
        tag === "select" ||
        el?.isContentEditable;
      if (off) hide();
    };

    let inactivityTimer: number | undefined;
    const resetInactivity = () => {
      if (inactivityTimer) window.clearTimeout(inactivityTimer);
      inactivityTimer = window.setTimeout(() => hide(), 1500);
    };

    const down = () => {
      if (mqReduce.matches) return;
      dot.style.setProperty("--s", "0.75");
    };
    const up = () => {
      if (mqReduce.matches) return;
      dot.style.setProperty("--s", "1");
    };

    window.addEventListener("mousemove", move, { passive: true });
    window.addEventListener("mousedown", down, { passive: true });
    window.addEventListener("mouseup", up, { passive: true });
    window.addEventListener("mousemove", resetInactivity, { passive: true });
    window.addEventListener("scroll", resetInactivity, { passive: true });

    resetInactivity();

    return () => {
      document.documentElement.classList.remove("has-custom-cursor");
      window.removeEventListener("mousemove", move);
      window.removeEventListener("mousedown", down);
      window.removeEventListener("mouseup", up);
      window.removeEventListener("mousemove", resetInactivity);
      window.removeEventListener("scroll", resetInactivity);
      cancelAnimationFrame(raf);
      dot.remove();
    };
  }, []);

  return null;
}
