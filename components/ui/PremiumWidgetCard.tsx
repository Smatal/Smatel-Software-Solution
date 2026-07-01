"use client";

import { MouseEvent } from "react";
import { motion, useMotionTemplate, useMotionValue } from "motion/react";

export function PremiumWidgetCard({ children, className = "" }: { children: React.ReactNode, className?: string }) {
  const mouseX = useMotionValue(0);
  const mouseY = useMotionValue(0);

  function handleMouseMove({ currentTarget, clientX, clientY }: MouseEvent) {
    const { left, top } = currentTarget.getBoundingClientRect();
    mouseX.set(clientX - left);
    mouseY.set(clientY - top);
  }

  return (
    <motion.div
      className={`group relative rounded-[2rem] border border-border/50 bg-card shadow-sm overflow-hidden h-full ${className}`}
      onMouseMove={handleMouseMove}
      whileHover={{ y: -8, scale: 1.02 }}
      transition={{ type: "spring", stiffness: 300, damping: 20 }}
    >
      {/* The Animated Border Gradient Reveal */}
      <motion.div
        className="pointer-events-none absolute -inset-px rounded-[2rem] opacity-0 transition-opacity duration-300 group-hover:opacity-100"
        style={{
          background: useMotionTemplate`
            radial-gradient(
              400px circle at ${mouseX}px ${mouseY}px,
              rgba(79, 70, 229, 0.15),
              transparent 80%
            )
          `,
        }}
      />
      
      {/* Underlying Pre-rendered Lift Shadow */}
      <div className="pointer-events-none absolute inset-0 rounded-[2rem] shadow-[0_20px_40px_rgba(79,70,229,0.12)] opacity-0 transition-opacity duration-300 group-hover:opacity-100" />
      
      {/* Glass Shimmer Effect */}
      <div className="pointer-events-none absolute inset-0 rounded-[2rem] opacity-0 group-hover:opacity-100 overflow-hidden">
         <div className="absolute inset-0 -translate-x-full bg-gradient-to-r from-transparent via-white/40 to-transparent group-hover:animate-[shimmer_1.5s_infinite]" />
      </div>

      {/* Content wrapper */}
      <div className="relative z-10 h-full w-full">
        {children}
      </div>
    </motion.div>
  );
}
