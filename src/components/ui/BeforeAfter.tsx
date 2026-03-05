"use client";

import * as React from "react";
import { motion, useMotionValue, useSpring, useTransform } from "framer-motion";
import { cn } from "@/lib/utils";
import Image from "next/image";

interface BeforeAfterProps {
  beforeSrc: string;
  afterSrc: string;
  beforeAlt: string;
  afterAlt: string;
  className?: string;
}

export default function BeforeAfter({
  beforeSrc,
  afterSrc,
  beforeAlt,
  afterAlt,
  className,
}: BeforeAfterProps) {
  const x = useMotionValue(0);
  const xPercent = useTransform(x, (val) => `${val}%`);
  const sliderWidth = useSpring(x, { stiffness: 100, damping: 20 });

  const handleDrag = (event: MouseEvent | TouchEvent | PointerEvent) => {
    const rect = (
      event.currentTarget as HTMLElement
    ).getBoundingClientRect();
    const clientX =
      "touches" in event ? event.touches[0].clientX : event.clientX;
    const percentage = ((clientX - rect.left) / rect.width) * 100;
    
    // Clamp between 0 and 100
    const clamped = Math.max(0, Math.min(100, percentage));
    x.set(clamped);
  };

  return (
    <div
      className={cn("relative w-full overflow-hidden rounded-xl cursor-ew-resize select-none", className)}
      onPointerMove={handleDrag}
      onPointerDown={handleDrag}
      onPointerUp={() => x.set(x.get())}
      onPointerLeave={() => x.set(x.get())}
    >
      {/* Before Image (Background) */}
      <div className="relative aspect-[16/9] w-full">
        <Image
          src={beforeSrc}
          alt={beforeAlt}
          fill
          className="object-cover"
          draggable={false}
        />
        <span className="absolute top-4 left-4 bg-black/60 text-white px-3 py-1 text-xs font-bold rounded-full uppercase tracking-wider pointer-events-none">
          Before
        </span>
      </div>

      {/* After Image (Clipped) */}
      <motion.div
        className="absolute inset-0 bg-primary"
        style={{
          width: xPercent,
        }}
      >
        <div className="relative w-full h-full overflow-hidden aspect-[16/9]">
           <Image
            src={afterSrc}
            alt={afterAlt}
            fill
            className="object-cover"
            draggable={false}
            style={{ width: "100vw", maxWidth: "800px" }} // Hack to keep aspect ratio while clipping
          />
        </div>
        <span className="absolute top-4 right-4 bg-black/60 text-white px-3 py-1 text-xs font-bold rounded-full uppercase tracking-wider pointer-events-none">
          After
        </span>
      </motion.div>

      {/* Slider Handle */}
      <motion.div
        className="absolute top-0 bottom-0 w-1 bg-white shadow-lg pointer-events-none"
        style={{ left: xPercent }}
      >
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-10 h-10 bg-white rounded-full shadow-md flex items-center justify-center text-primary">
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
            <path d="m18 16 4-4-4-4" />
            <path d="m6 8-4 4 4 4" />
          </svg>
        </div>
      </motion.div>
    </div>
  );
}