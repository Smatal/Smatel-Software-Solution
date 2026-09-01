"use client";

import { homepageData } from "@/content/homepage";
import { motion } from "motion/react";
import Image from "next/image";
import { Badge } from "@/components/ui/badge";

export function FeaturedSolutions() {
  const { featuredSolutions } = homepageData;

  return (
    <section className="py-24 bg-gray-50">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8 max-w-7xl">
        <div className="text-center max-w-3xl mx-auto mb-16">
          <Badge variant="outline" className="mb-4">Proven Systems</Badge>
          <h2 className="text-3xl md:text-5xl font-bold tracking-tight text-gray-900 mb-6">
            {featuredSolutions.heading}
          </h2>
          <p className="text-lg text-gray-600">
            {featuredSolutions.description}
          </p>
        </div>

        <div className="space-y-24">
          {featuredSolutions.systems.map((system, index) => (
            <div 
              key={system.title}
              className={`flex flex-col gap-12 lg:items-center ${
                index % 2 === 0 ? "lg:flex-row" : "lg:flex-row-reverse"
              }`}
            >
              <motion.div 
                className="lg:w-1/2"
                initial={{ opacity: 0, x: index % 2 === 0 ? -40 : 40 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true, margin: "-100px" }}
                transition={{ duration: 0.6 }}
              >
                <div className="relative rounded-2xl overflow-hidden aspect-[4/3] shadow-xl">
                  <Image
                    src={system.image}
                    alt={system.title}
                    fill
                    className="object-cover"
                    sizes="(max-width: 768px) 100vw, 50vw"
                  />
                  <div className="absolute inset-0 ring-1 ring-inset ring-black/10 rounded-2xl" />
                </div>
              </motion.div>
              
              <motion.div 
                className="lg:w-1/2 lg:px-8"
                initial={{ opacity: 0, x: index % 2 === 0 ? 40 : -40 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true, margin: "-100px" }}
                transition={{ duration: 0.6, delay: 0.2 }}
              >
                <h3 className="text-3xl font-bold text-gray-900 mb-6">{system.title}</h3>
                <p className="text-xl text-gray-600 leading-relaxed mb-8">
                  {system.description}
                </p>
                <ul className="space-y-4">
                  <li className="flex items-center text-gray-700 font-medium">
                    <div className="w-2.5 h-2.5 rounded-full bg-teal-500 mr-3 shrink-0" />
                    Customized for your workflows
                  </li>
                  <li className="flex items-center text-gray-700 font-medium">
                    <div className="w-2.5 h-2.5 rounded-full bg-teal-500 mr-3 shrink-0" />
                    Secure and scalable architecture
                  </li>
                  <li className="flex items-center text-gray-700 font-medium">
                    <div className="w-2.5 h-2.5 rounded-full bg-teal-500 mr-3 shrink-0" />
                    Seamless integrations
                  </li>
                </ul>
              </motion.div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
