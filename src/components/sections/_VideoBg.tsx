// src/components/sections/_VideoBg.tsx
"use client";

type Props = {
  src: string;
  poster?: string;
  className?: string;
};

export default function VideoBg({ src, poster, className = "" }: Props) {
  return (
    <video
      className={`h-full w-full object-cover object-center ${className}`}
      autoPlay
      muted
      loop
      playsInline
      preload="metadata"
      poster={poster}
    >
      <source src={src} type="video/mp4" />
    </video>
  );
}
