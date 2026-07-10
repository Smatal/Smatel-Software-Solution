"use client";

import { motion } from "motion/react";
import Link from "next/link";
import { ArrowRight } from "lucide-react";
import { buttonVariants } from "@/components/ui/button";
import { cn } from "@/lib/utils";
import type { SolutionHero } from "@/content/solutions/types";
import { AnimatedHeroWrapper } from "@/components/ui/animated-hero-wrapper";

interface SolutionHeroProps {
  data: SolutionHero;
  badge?: string;
}

export function SolutionHero({ data, badge }: SolutionHeroProps) {
  return (
    <AnimatedHeroWrapper className="py-28 lg:py-36 bg-[#FAFAFA]">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8 relative z-20">
        <div className="max-w-4xl mx-auto text-center">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
          >
            <span className="inline-flex items-center rounded-full border border-indigo-500/30 bg-indigo-500/10 px-4 py-1.5 text-sm font-semibold text-indigo-600 mb-8 tracking-widest uppercase">
              {badge || data.badge}
            </span>
          </motion.div>

          <motion.h1
            className="text-[clamp(2.2rem,5vw,4.5rem)] font-black tracking-tighter mb-6 text-foreground leading-[1.1]"
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.1 }}
          >
            {data.title}
          </motion.h1>

          <motion.p
            className="text-lg sm:text-xl text-muted-foreground mb-10 max-w-2xl mx-auto leading-relaxed font-light"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.2 }}
          >
            {data.description}
          </motion.p>

          <motion.div
            className="flex flex-col sm:flex-row justify-center gap-4"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.3 }}
          >
            <motion.div whileHover={{ scale: 1.03 }} whileTap={{ scale: 0.97 }} transition={{ type: "spring", stiffness: 400, damping: 15 }}>
              <Link
                href={data.cta.href}
                className={cn(buttonVariants({ size: "lg", className: "h-12 px-8 font-medium shadow-[0_4px_14px_0_rgba(79,70,229,0.25)] hover:shadow-[0_6px_20px_rgba(79,70,229,0.4)] transition-shadow w-full" }))}
              >
                {data.cta.text} <ArrowRight className="ml-2 h-4 w-4" />
              </Link>
            </motion.div>
            <motion.div whileHover={{ scale: 1.03 }} whileTap={{ scale: 0.97 }} transition={{ type: "spring", stiffness: 400, damping: 15 }}>
              <Link
                href="/contact"
                className={cn(buttonVariants({ variant: "outline", size: "lg", className: "h-12 px-8 font-medium bg-background w-full" }))}
              >
                Talk to Our Team
              </Link>
            </motion.div>
          </motion.div>
        </div>
      </div>
    </AnimatedHeroWrapper>
  );
}
