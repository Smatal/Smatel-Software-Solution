"use client";

import { motion } from "motion/react";
import { Badge } from "@/components/ui/badge";

interface SolutionIndustriesProps {
  industries: string[];
}

export function SolutionIndustries({ industries }: SolutionIndustriesProps) {
  return (
    <section className="py-24 bg-white border-y border-gray-100">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8 max-w-5xl text-center">
        <Badge variant="outline" className="mb-6">Industries We Serve</Badge>
        <h2 className="text-2xl md:text-3xl font-bold tracking-tight text-gray-900 mb-10">
          Built for the demands of your specific sector
        </h2>
        
        <div className="flex flex-wrap justify-center gap-3">
          {industries.map((industry, index) => (
            <motion.div
              key={industry}
              initial={{ opacity: 0, scale: 0.9 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true }}
              transition={{ delay: index * 0.05, duration: 0.4 }}
              className="px-6 py-3 rounded-full bg-gray-50 border border-gray-200 text-gray-700 font-medium text-sm hover:bg-teal-50 hover:text-teal-700 hover:border-teal-300 transition-colors cursor-default"
            >
              {industry}
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
