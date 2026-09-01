"use client";

import React, { useRef, useState, useCallback } from "react";
import { motion } from "motion/react";
import { cn } from "@/lib/utils";

interface SpotlightCardProps extends React.HTMLAttributes<HTMLDivElement> {
  children: React.ReactNode;
  className?: string;
  spotlightColor?: string;
}

export function SpotlightCard({
  children,
  className,
  spotlightColor = "rgba(33, 189, 188, 0.06)",
  ...props
}: SpotlightCardProps) {
  const cardRef = useRef<HTMLDivElement>(null);
  const [position, setPosition] = useState<{ x: number; y: number }>({ x: 0, y: 0 });
  const [isHovered, setIsHovered] = useState(false);

  const handleMouseMove = useCallback((e: React.MouseEvent<HTMLDivElement>) => {
    if (!cardRef.current) return;
    const rect = cardRef.current.getBoundingClientRect();
    setPosition({
      x: e.clientX - rect.left,
      y: e.clientY - rect.top,
    });
  }, []);

  return (
    <div
      ref={cardRef}
      onMouseMove={handleMouseMove}
      onMouseEnter={() => setIsHovered(true)}
      onMouseLeave={() => setIsHovered(false)}
      className={cn(
        "relative rounded-3xl border border-gray-200/70 bg-white p-8 shadow-sm transition-all duration-300 hover:shadow-md hover:border-gray-300 hover:-translate-y-1 overflow-hidden flex flex-col justify-between group",
        className
      )}
      {...props}
    >
      {/* Soft Ambient Mouse Spotlight */}
      <div
        className="pointer-events-none absolute -inset-px rounded-3xl opacity-0 transition-opacity duration-300 group-hover:opacity-100 z-10"
        style={{
          background: `radial-gradient(350px circle at ${position.x}px ${position.y}px, ${spotlightColor}, transparent 75%)`,
        }}
      />

      {/* Cyber Grid Texture */}
      <div 
        className="absolute inset-0 opacity-[0.03] pointer-events-none" 
        style={{ 
          backgroundImage: "radial-gradient(circle at 2px 2px, rgba(0,0,0,0.8) 1px, transparent 0)", 
          backgroundSize: "20px 20px" 
        }} 
      />

      {/* Subtle Top Accent */}
      <div className="absolute top-0 left-0 right-0 h-[2px] bg-gradient-to-r from-teal-400/30 via-cyan-400/30 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300" />

      {/* Content wrapper with relative z-index above spotlight */}
      <div className="relative z-20 flex flex-col h-full justify-between">
        {children}
      </div>
    </div>
  );
}
