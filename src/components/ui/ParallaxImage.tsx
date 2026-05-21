// src/components/ui/ParallaxImage.tsx
"use client";
import { useEffect, useRef } from "react";
import Image, { ImageProps } from "next/image";

interface ParallaxImageProps extends Omit<ImageProps, "className" | "style"> {
  containerClassName?: string;
  imageClassName?: string;
  speed?: number;
  style?: React.CSSProperties;
}

export default function ParallaxImage({ 
  speed = 0.15, 
  containerClassName = "", 
  imageClassName = "", 
  alt, 
  style,
  ...props 
}: ParallaxImageProps) {
  const containerRef = useRef<HTMLDivElement>(null);
  const imageRef = useRef<HTMLImageElement>(null);

  useEffect(() => {
    if (typeof window === "undefined" || window.matchMedia("(prefers-reduced-motion: reduce)").matches) {
      return;
    }

    const container = containerRef.current;
    const image = imageRef.current;
    if (!container || !image) return;

    let ticking = false;

    const updatePosition = () => {
      const rect = container.getBoundingClientRect();
      const viewHeight = window.innerHeight;
      
      if (rect.top <= viewHeight && rect.bottom >= 0) {
        const totalDistance = viewHeight + rect.height;
        const scrolled = viewHeight - rect.top;
        const progress = scrolled / totalDistance;
        const yPos = (progress - 0.5) * (speed * 100);
        image.style.transform = `translate3d(0, ${yPos}%, 0) scale(${1 + Math.abs(speed)})`;
      }
      ticking = false;
    };

    const onScroll = () => {
      if (!ticking) {
        requestAnimationFrame(updatePosition);
        ticking = true;
      }
    };

    window.addEventListener("scroll", onScroll, { passive: true });
    window.addEventListener("resize", onScroll, { passive: true });
    updatePosition();

    return () => {
      window.removeEventListener("scroll", onScroll);
      window.removeEventListener("resize", onScroll);
    };
  }, [speed]);

  return (
    <div ref={containerRef} className={`relative overflow-hidden block ${containerClassName}`} style={style}>
      <Image
        ref={imageRef as any}
        alt={alt}
        className={`absolute inset-0 w-full h-full object-cover transform-gpu transition-transform duration-0 ease-linear ${imageClassName}`}
        {...props}
      />
    </div>
  );
}
