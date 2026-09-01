"use client";

import { Badge } from "@/components/ui/badge";
import { motion, Variants } from "motion/react";
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

export function PortfolioHero() {
  return (
    <AnimatedHeroWrapper 
      className="pt-40 pb-28 lg:pt-48 lg:pb-32 bg-[#FAFAFA]"
      initial="hidden"
      animate="visible"
      variants={orchestrator}
    >
        
      <div className="container mx-auto px-4 sm:px-6 lg:px-8 relative z-10 text-center">
        <div className="max-w-4xl mx-auto">
          <motion.div variants={childVariant}>
            <Badge variant="secondary" className="mb-6 px-4 py-1.5 text-sm font-semibold tracking-widest uppercase border border-teal-500/30 bg-teal-500/10 text-teal-700 shadow-[0_0_12px_rgba(33,189,188,0.12)]">
              Our Work
            </Badge>
          </motion.div>

          <motion.div variants={childVariant}>
            <h1 className="text-[clamp(2.5rem,5vw,4.5rem)] font-black tracking-tighter mb-6 text-gray-900 leading-[1.1]">
              Proven Results Across Industries
            </h1>
          </motion.div>
          
          <motion.div variants={childVariant}>
            <p className="text-xl text-gray-600 max-w-2xl mx-auto leading-relaxed font-light">
              Explore our portfolio of digital transformations, custom software, and performance-driven campaigns.
            </p>
          </motion.div>
        </div>
      </div>
    </AnimatedHeroWrapper>
  );
}
