"use client";

import { useState, useRef, MouseEvent } from "react";
import Image from "next/image";
import { images } from "@/config/images";
import { cn } from "@/lib/utils";

interface BeforeAfterProps {
  beforeKey: keyof typeof images;
  afterKey: keyof typeof images;
  className?: string;
}

export default function BeforeAfter({
  beforeKey,
  afterKey,
  className,
}: BeforeAfterProps) {
  const [sliderPosition, setSliderPosition] = useState(50);
  const containerRef = useRef<HTMLDivElement>(null);

  const handleMouseMove = (e: MouseEvent<HTMLDivElement>) => {
    if (!containerRef.current) return;
    const rect = containerRef.current.getBoundingClientRect();
    const x = e.clientX - rect.left;
    const percentage = (x / rect.width) * 100;
    setSliderPercentage(percentage);
  };

  const handleTouchMove = (e: React.TouchEvent<HTMLDivElement>) => {
    if (!containerRef.current) return;
    const rect = containerRef.current.getBoundingClientRect();
    const x = e.touches[0].clientX - rect.left;
    const percentage = (x / rect.width) * 100;
    setSliderPercentage(percentage);
  };

  const setSliderPercentage = (percentage: number) => {
    if (percentage < 0) setSliderPosition(0);
    else if (percentage > 100) setSliderPosition(100);
    else setSliderPosition(percentage);
  };

  return (
    <div
      ref={containerRef}
      className={cn(
        "relative w-full h-[400px] overflow-hidden rounded-xl cursor-col-resize select-none group",
        className
      )}
      onMouseMove={handleMouseMove}
      onTouchMove={handleTouchMove}
    >
      {/* After Image (Background) */}
      <div className="absolute inset-0 w-full h-full">
        <Image
          src={images[afterKey].src}
          alt={images[afterKey].alt}
          fill
          className="object-cover"
          sizes="(max-width: 768px) 100vw, 1200px"
        />
        <span className="absolute bottom-4 right-4 bg-white/90 px-3 py-1 rounded text-sm font-bold text-primary shadow-sm">
          After
        </span>
      </div>

      {/* Before Image (Overlay) */}
      <div
        className="absolute inset-0 h-full border-r-4 border-accent overflow-hidden"
        style={{ width: `${sliderPosition}%` }}
      >
        <div className="absolute inset-0 w-[1280px] max-w-none h-full">
          <Image
            src={images[beforeKey].src}
            alt={images[beforeKey].alt}
            fill
            className="object-cover"
            sizes="(max-width: 768px) 100vw, 1200px"
            style={{ objectPosition: "left center" }}
          />
        </div>
        <span className="absolute bottom-4 left-4 bg-black/70 text-white px-3 py-1 rounded text-sm font-bold shadow-sm">
          Before
        </span>
      </div>

      {/* Slider Handle */}
      <div
        className="absolute top-1/2 -translate-y-1/2 w-10 h-10 bg-accent rounded-full shadow-lg flex items-center justify-center text-primary border-4 border-white pointer-events-none"
        style={{ left: `calc(${sliderPosition}% - 20px)` }}
      >
        <svg
          xmlns="http://www.w3.org/2000/svg"
          width="20"
          height="20"
          viewBox="0 0 24 24"
          fill="none"
          stroke="currentColor"
          strokeWidth="2"
          strokeLinecap="round"
          strokeLinejoin="round"
        >
          <polyline points="15 18 9 12 15 6"></polyline>
          <polyline points="9 18 3 12 9 6"></polyline>
          <polyline points="21 18 15 12 21 6"></polyline>
        </svg>
      </div>
    </div>
  );
}