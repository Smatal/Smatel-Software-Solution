"use client";

import { motion, useMotionValue, useSpring, useTransform, useMotionTemplate } from "motion/react";
import React from "react";

interface DarkWrapperProps extends React.ComponentPropsWithoutRef<typeof motion.div> {
  children: React.ReactNode;
}

export function AnimatedDarkWrapper({ children, className, ...props }: DarkWrapperProps) {
  const mouseX = useMotionValue(0);
  const mouseY = useMotionValue(0);

  const springX = useSpring(mouseX, { stiffness: 50, damping: 20 });
  const springY = useSpring(mouseY, { stiffness: 50, damping: 20 });

  const gridX = useTransform(springX, [0, 2000], [0, -40]);
  const gridY = useTransform(springY, [0, 1000], [0, -40]);

  function handleMouseMove({ currentTarget, clientX, clientY }: React.MouseEvent) {
    const { left, top } = currentTarget.getBoundingClientRect();
    mouseX.set(clientX - left);
    mouseY.set(clientY - top);
  }

  return (
    <motion.div 
      className={`relative overflow-hidden ${className || ''}`}
      onMouseMove={handleMouseMove}
      {...props}
    >
      <div className="absolute inset-0 z-0 overflow-hidden pointer-events-none bg-gray-900">
        <motion.div
          className="absolute -inset-[10%] z-0 opacity-[0.25]"
          style={{
            backgroundImage: `linear-gradient(to right, rgba(99,102,241,0.4) 1px, transparent 1px), linear-gradient(to bottom, rgba(99,102,241,0.4) 1px, transparent 1px)`,
            backgroundSize: "64px 64px",
            x: gridX,
            y: gridY,
          }}
        />
        <motion.div 
          className="absolute top-0 right-1/4 w-[600px] h-[600px] bg-indigo-500/10 rounded-full blur-[120px]" 
          style={{ x: useTransform(springX, [0, 2000], [0, -80]), y: useTransform(springY, [0, 1000], [0, -80]) }}
        />
        <motion.div 
          className="absolute bottom-0 left-1/4 w-[600px] h-[600px] bg-blue-500/10 rounded-full blur-[120px]" 
          style={{ x: useTransform(springX, [0, 2000], [0, 80]), y: useTransform(springY, [0, 1000], [0, 80]) }}
        />
        <motion.div
          className="absolute inset-0 z-20 mix-blend-screen"
          style={{
            background: useMotionTemplate`radial-gradient(600px circle at ${springX}px ${springY}px, rgba(99,102,241,0.15), transparent 80%)`,
          }}
        />
        <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_center,transparent_0%,#111827_100%)] z-20" />
        <div className="absolute inset-0 bg-gradient-to-b from-transparent via-transparent to-gray-900 z-20" />
      </div>

      <div className="relative z-10 h-full w-full">
        {children}
      </div>
    </motion.div>
  );
}
