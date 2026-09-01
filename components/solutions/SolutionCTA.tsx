"use client";

import { motion } from "motion/react";
import Link from "next/link";
import { ArrowRight } from "lucide-react";
import { buttonVariants } from "@/components/ui/button";
import { cn } from "@/lib/utils";

export function SolutionCTA() {
  return (
    <section className="py-24 relative overflow-hidden bg-slate-950">
      <div className="absolute inset-0 z-0 opacity-20 pointer-events-none"
        style={{
          backgroundImage: `linear-gradient(to right, rgba(33,189,188,0.25) 1px, transparent 1px), linear-gradient(to bottom, rgba(33,189,188,0.25) 1px, transparent 1px)`,
          backgroundSize: "64px 64px",
        }}
      />
      
      <div className="absolute inset-0 bg-gradient-to-t from-slate-950 via-slate-950/80 to-transparent z-10 pointer-events-none" />
      
      <div className="absolute top-1/2 left-1/3 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[600px] bg-teal-500/15 rounded-full blur-[160px] pointer-events-none" />
      <div className="absolute top-1/2 right-1/4 -translate-y-1/2 w-[500px] h-[500px] bg-sky-500/12 rounded-full blur-[140px] pointer-events-none" />

      <div className="container mx-auto px-4 sm:px-6 lg:px-8 relative z-20 text-center max-w-3xl">
        <motion.h2 
          className="text-4xl md:text-5xl font-bold tracking-tight text-white mb-6"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
        >
          Ready to Transform Your Business?
        </motion.h2>
        
        <motion.p 
          className="text-xl text-gray-300 mb-10 leading-relaxed font-light"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5, delay: 0.1 }}
        >
          Let's discuss your challenges and see how our tailored solutions can drive growth and efficiency for your organisation.
        </motion.p>
        
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5, delay: 0.2 }}
          className="flex flex-col sm:flex-row justify-center gap-4"
        >
          <Link
            href="/contact"
            className={cn(buttonVariants({ size: "lg", className: "h-14 px-8 text-base font-semibold shadow-[0_0_30px_-5px_rgba(243,110,33,0.5)] border-none w-full sm:w-auto" }))}
          >
            Schedule a Consultation <ArrowRight className="ml-2 w-5 h-5" />
          </Link>
        </motion.div>
      </div>
    </section>
  );
}
