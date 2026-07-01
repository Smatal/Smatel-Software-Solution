"use client";

import { Badge } from "@/components/ui/badge";
import { buttonVariants } from "@/components/ui/button";
import { cn } from "@/lib/utils";
import Link from "next/link";
import { homepageData } from "@/content/homepage";
import { motion, Variants, useMotionValue, useSpring, useMotionTemplate, useTransform } from "motion/react";
import Image from "next/image";
import { useEffect, useState } from "react";
import { ArrowRight } from "lucide-react";

const orchestrator: Variants = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: {
      staggerChildren: 0.15,
      delayChildren: 0.1,
    },
  },
};

const childVariant: Variants = {
  hidden: { opacity: 0, y: 30 },
  visible: {
    opacity: 1,
    y: 0,
    transition: {
      type: "spring",
      stiffness: 400,
      damping: 30,
      mass: 1,
    },
  },
};

export function Hero() {
  const { hero } = homepageData;

  const mouseX = useMotionValue(0);
  const mouseY = useMotionValue(0);

  const springX = useSpring(mouseX, { stiffness: 50, damping: 20 });
  const springY = useSpring(mouseY, { stiffness: 50, damping: 20 });

  // Map mouse movement to subtle grid parallax (opposite direction)
  const gridX = useTransform(springX, [0, 2000], [0, -60]);
  const gridY = useTransform(springY, [0, 1000], [0, -60]);

  function handleMouseMove({ currentTarget, clientX, clientY }: React.MouseEvent) {
    const { left, top } = currentTarget.getBoundingClientRect();
    mouseX.set(clientX - left);
    mouseY.set(clientY - top);
  }

  return (
    <motion.section 
      className="relative overflow-hidden py-32 lg:py-48 bg-[#FAFAFA]"
      initial="hidden"
      animate="visible"
      variants={orchestrator}
      onMouseMove={handleMouseMove}
    >
      {/* Sharp Interactive Matrix Grid Background */}
      <div className="absolute inset-0 z-0 overflow-hidden pointer-events-none bg-[#FAFAFA]">
        
        {/* Parallax Grid Layer */}
        <motion.div
          className="absolute -inset-[10%] z-0 opacity-[0.35]"
          style={{
            backgroundImage: `linear-gradient(to right, rgba(99,102,241,0.5) 1px, transparent 1px), linear-gradient(to bottom, rgba(99,102,241,0.5) 1px, transparent 1px)`,
            backgroundSize: "64px 64px",
            x: gridX,
            y: gridY,
          }}
        />

        {/* Ambient Moving Color Glows (Parallax) */}
        <motion.div 
          className="absolute top-0 right-1/4 w-[600px] h-[600px] bg-indigo-500/10 rounded-full blur-[120px]" 
          style={{ x: useTransform(springX, [0, 2000], [0, -120]), y: useTransform(springY, [0, 1000], [0, -120]) }}
        />
        <motion.div 
          className="absolute bottom-0 left-1/4 w-[600px] h-[600px] bg-blue-500/10 rounded-full blur-[120px]" 
          style={{ x: useTransform(springX, [0, 2000], [0, 120]), y: useTransform(springY, [0, 1000], [0, 120]) }}
        />

        {/* Interactive Mouse Spotlight illuminating the grid */}
        <motion.div
          className="absolute inset-0 z-20 mix-blend-overlay"
          style={{
            background: useMotionTemplate`radial-gradient(500px circle at ${springX}px ${springY}px, rgba(99,102,241,0.5), transparent 80%)`,
          }}
        />

        {/* Fade Out Edges */}
        <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_center,transparent_0%,#FAFAFA_90%)] z-20" />
        <div className="absolute inset-0 bg-gradient-to-b from-transparent via-transparent to-[#FAFAFA] z-20" />
      </div>

      <div className="container mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="max-w-5xl mx-auto text-center">
          
          <motion.div variants={childVariant}>
            <Badge variant="secondary" className="mb-8 px-4 py-1.5 text-sm font-semibold tracking-widest uppercase border-gray-200">
              {hero.badge}
            </Badge>
          </motion.div>

          <motion.div variants={childVariant}>
            <h1 className="text-[clamp(2.5rem,6vw,5.2rem)] font-black tracking-tighter mb-8 text-foreground leading-[1.1]">
              Your Search for <br />
              <span className="text-indigo-600 drop-shadow-[0_0_20px_rgba(79,70,229,0.15)]">Innovation Starts Here.</span>
            </h1>
          </motion.div>
          
          <motion.div variants={childVariant}>
            <p className="text-lg sm:text-xl md:text-2xl text-muted-foreground mb-12 max-w-3xl mx-auto leading-relaxed font-light">
              {hero.description}
            </p>
          </motion.div>
          
          <motion.div variants={childVariant} className="flex flex-col sm:flex-row justify-center gap-4">
            <motion.div
              whileHover={{ scale: 1.03 }}
              whileTap={{ scale: 0.97 }}
              transition={{ type: "spring", stiffness: 400, damping: 15 }}
            >
              <Link 
                href={hero.primaryCta.href}
                className={cn(buttonVariants({ size: "lg", className: "h-12 px-8 font-medium shadow-[0_4px_14px_0_rgba(79,70,229,0.25)] transition-shadow hover:shadow-[0_6px_20px_rgba(79,70,229,0.4)] w-full" }))}
              >
                {hero.primaryCta.text} <ArrowRight className="ml-2 h-4 w-4" />
              </Link>
            </motion.div>

            <motion.div
              whileHover={{ scale: 1.03 }}
              whileTap={{ scale: 0.97 }}
              transition={{ type: "spring", stiffness: 400, damping: 15 }}
            >
              <Link 
                href={hero.secondaryCta.href}
                className={cn(buttonVariants({ variant: "outline", size: "lg", className: "h-12 px-8 font-medium bg-background w-full" }))}
              >
                {hero.secondaryCta.text}
              </Link>
            </motion.div>
          </motion.div>
        </div>
      </div>
    </motion.section>
  );
}
