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
      className={`group relative rounded-xl border border-border/50 bg-card shadow-sm overflow-hidden h-full ${className}`}
      onMouseMove={handleMouseMove}
      whileHover={{ y: -4 }}
      transition={{ type: "spring", stiffness: 300, damping: 20 }}
    >
      {/* The Animated Border Gradient Reveal */}
      <motion.div
        className="pointer-events-none absolute -inset-px rounded-xl opacity-0 transition-opacity duration-300 group-hover:opacity-100"
        style={{
          background: useMotionTemplate`
            radial-gradient(
              300px circle at ${mouseX}px ${mouseY}px,
              oklch(0.541 0.17 282 / 0.15),
              transparent 80%
            )
          `,
        }}
      />
      
      {/* Underlying Pre-rendered Lift Shadow */}
      <div className="pointer-events-none absolute inset-0 rounded-xl shadow-[0_10px_30px_rgba(79,70,229,0.08)] opacity-0 transition-opacity duration-300 group-hover:opacity-100" />
      
      {/* Content wrapper */}
      <div className="relative z-10 h-full w-full">
        {children}
      </div>
    </motion.div>
  );
}
