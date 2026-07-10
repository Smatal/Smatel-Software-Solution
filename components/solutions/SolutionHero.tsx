"use client";

import { motion } from "motion/react";
import Link from "next/link";
import { ArrowRight } from "lucide-react";
import { buttonVariants } from "@/components/ui/button";
import { cn } from "@/lib/utils";
import type { SolutionHero } from "@/content/solutions/types";

interface SolutionHeroProps {
  data: SolutionHero;
  badge?: string;
}

export function SolutionHero({ data, badge }: SolutionHeroProps) {
  return (
    <section className="relative overflow-hidden py-28 lg:py-36 bg-[#FAFAFA]">
      {/* Grid background */}
      <div className="absolute inset-0 z-0 opacity-[0.35] pointer-events-none"
        style={{
          backgroundImage: `linear-gradient(to right, rgba(99,102,241,0.5) 1px, transparent 1px), linear-gradient(to bottom, rgba(99,102,241,0.5) 1px, transparent 1px)`,
          backgroundSize: "64px 64px",
        }}
      />
      {/* Ambient glows */}
      <div className="absolute top-0 right-1/4 w-[500px] h-[500px] bg-indigo-500/10 rounded-full blur-[120px] pointer-events-none" />
      <div className="absolute bottom-0 left-1/4 w-[500px] h-[500px] bg-purple-500/10 rounded-full blur-[120px] pointer-events-none" />
      {/* Edge fade */}
      <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_center,transparent_0%,#FAFAFA_90%)] z-10 pointer-events-none" />
      <div className="absolute inset-0 bg-gradient-to-b from-transparent via-transparent to-[#FAFAFA] z-10 pointer-events-none" />

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
    </section>
  );
}
