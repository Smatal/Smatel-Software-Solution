"use client";

import { homepageData } from "@/content/homepage";
import { motion } from "motion/react";
import Image from "next/image";

export function Industries() {
  const { industries } = homepageData;

  return (
    <section id="industries" className="py-24 bg-white">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8 max-w-7xl">
        <div className="text-center max-w-3xl mx-auto mb-16">
          <h2 className="text-3xl md:text-5xl font-bold tracking-tight text-gray-900 mb-6">
            {industries.heading}
          </h2>
          <p className="text-lg text-gray-600">
            {industries.description}
          </p>
        </div>

        <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-5 gap-4">
          {industries.sectors.map((sector, index) => (
            <motion.div
              key={sector.name}
              initial={{ opacity: 0, scale: 0.95 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true }}
              transition={{ delay: index * 0.05, duration: 0.4 }}
              className="group relative rounded-xl overflow-hidden aspect-square flex flex-col justify-end p-4 shadow-sm hover:shadow-lg transition-all duration-300"
            >
              <Image
                src={sector.image}
                alt={sector.name}
                fill
                className="object-cover transition-transform duration-700 group-hover:scale-110"
                sizes="(max-width: 768px) 50vw, (max-width: 1024px) 33vw, 20vw"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/20 to-transparent" />
              <h3 className="relative z-10 text-white font-semibold text-lg drop-shadow-md">
                {sector.name}
              </h3>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
