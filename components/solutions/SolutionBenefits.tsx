"use client";

import { motion } from "motion/react";
import { Badge } from "@/components/ui/badge";
import type { Benefit } from "@/content/solutions/types";

interface SolutionBenefitsProps {
  benefits: Benefit[];
}

export function SolutionBenefits({ benefits }: SolutionBenefitsProps) {
  return (
    <section className="py-24 bg-indigo-900 relative overflow-hidden">
      {/* Background decorations */}
      <div className="absolute inset-0 bg-[url('https://images.unsplash.com/photo-1557683316-973673baf926?q=80&w=2029&auto=format&fit=crop')] bg-cover bg-center opacity-5" />
      <div className="absolute inset-0 bg-gradient-to-tr from-indigo-950 via-indigo-900 to-indigo-800 opacity-90" />
      <div className="absolute top-0 right-0 -translate-y-12 translate-x-1/3 w-96 h-96 bg-purple-500/20 rounded-full blur-[100px] pointer-events-none" />
      <div className="absolute bottom-0 left-0 translate-y-1/3 -translate-x-1/3 w-96 h-96 bg-blue-500/20 rounded-full blur-[100px] pointer-events-none" />

      <div className="container mx-auto px-4 sm:px-6 lg:px-8 max-w-7xl relative z-10">
        <div className="text-center max-w-3xl mx-auto mb-16">
          <Badge variant="secondary" className="mb-4 bg-white/10 text-white hover:bg-white/20 border-white/20">Measurable Outcomes</Badge>
          <h2 className="text-3xl md:text-5xl font-bold tracking-tight text-white mb-6">
            The Results You Can Expect
          </h2>
          <p className="text-lg text-indigo-100">
            We don't just build software; we deliver business outcomes. Here's what you gain.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {benefits.map((benefit, index) => (
            <motion.div
              key={benefit.title}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-60px" }}
              transition={{ delay: index * 0.1, duration: 0.5 }}
              className="bg-white/5 border border-white/10 backdrop-blur-md p-8 rounded-2xl hover:bg-white/10 transition-colors duration-300"
            >
              <div className="text-3xl font-black text-white mb-4 tracking-tight drop-shadow-sm">
                {benefit.metric}
              </div>
              <h3 className="text-xl font-bold text-indigo-50 mb-3">{benefit.title}</h3>
              <p className="text-indigo-200/80 leading-relaxed text-sm">
                {benefit.description}
              </p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
