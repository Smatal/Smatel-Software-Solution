"use client";

import { homepageData } from "@/content/homepage";
import { CheckCircle2 } from "lucide-react";
import { motion } from "motion/react";

export function WhyChooseUs() {
  const { whyChooseUs } = homepageData;

  return (
    <section className="py-24 bg-white">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8 max-w-7xl">
        <div className="text-center max-w-3xl mx-auto mb-16">
          <h2 className="text-3xl md:text-5xl font-bold tracking-tight text-gray-900 mb-6">
            {whyChooseUs.heading}
          </h2>
          <p className="text-lg text-gray-600">
            {whyChooseUs.description}
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {whyChooseUs.reasons.map((reason, index) => (
            <motion.div
              key={reason.title}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: index * 0.1, duration: 0.5 }}
              className="flex items-start"
            >
              <CheckCircle2 className="w-6 h-6 text-indigo-600 mt-1 shrink-0" />
              <div className="ml-4">
                <h3 className="text-xl font-bold text-gray-900 mb-2">{reason.title}</h3>
                <p className="text-gray-600 leading-relaxed">{reason.description}</p>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
