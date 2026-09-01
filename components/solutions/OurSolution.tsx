"use client";

import { motion } from "motion/react";
import { CheckCircle2 } from "lucide-react";
import { Badge } from "@/components/ui/badge";
import type { SolutionNarrative } from "@/content/solutions/types";

interface OurSolutionProps {
  data: SolutionNarrative;
}

export function OurSolution({ data }: OurSolutionProps) {
  return (
    <section className="py-24 bg-gray-50 border-y border-gray-100">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8 max-w-7xl">
        <div className="grid lg:grid-cols-2 gap-16 items-center">
          <motion.div
            initial={{ opacity: 0, x: -40 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true, margin: "-80px" }}
            transition={{ duration: 0.6 }}
          >
            <Badge variant="outline" className="mb-4">Our Solution</Badge>
            <h2 className="text-3xl md:text-4xl font-bold tracking-tight text-gray-900 mb-6">
              {data.heading}
            </h2>
            <p className="text-lg text-gray-600 leading-relaxed">
              {data.description}
            </p>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, x: 40 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true, margin: "-80px" }}
            transition={{ duration: 0.6, delay: 0.15 }}
          >
            <div className="bg-white rounded-2xl p-8 shadow-sm border border-gray-100">
              <p className="text-sm font-semibold text-teal-700 uppercase tracking-widest mb-6">
                What You Get
              </p>
              <ul className="space-y-4">
                {data.highlights.map((highlight, index) => (
                  <motion.li
                    key={highlight}
                    initial={{ opacity: 0, x: 20 }}
                    whileInView={{ opacity: 1, x: 0 }}
                    viewport={{ once: true }}
                    transition={{ delay: index * 0.1 + 0.2, duration: 0.4 }}
                    className="flex items-start gap-3"
                  >
                    <CheckCircle2 className="w-5 h-5 text-teal-700 shrink-0 mt-0.5" />
                    <span className="text-gray-800 font-medium">{highlight}</span>
                  </motion.li>
                ))}
              </ul>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
