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
import { AnimatedHeroWrapper } from "@/components/ui/animated-hero-wrapper";

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

  return (
    <AnimatedHeroWrapper 
      className="py-32 lg:py-48 bg-[#FAFAFA]"
      initial="hidden"
      animate="visible"
      variants={orchestrator}
    >

      <div className="container mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="max-w-5xl mx-auto text-center">
          
          <motion.div variants={childVariant}>
            <Badge variant="secondary" className="mb-8 px-4 py-1.5 text-sm font-semibold tracking-widest uppercase border-gray-200">
              {hero.badge}
            </Badge>
          </motion.div>

          <motion.div variants={childVariant}>
            <h1 className="text-[clamp(2.5rem,6vw,5.2rem)] font-black tracking-tighter mb-8 text-foreground leading-[1.1]">
              {hero.heading}
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
    </AnimatedHeroWrapper>
  );
}
