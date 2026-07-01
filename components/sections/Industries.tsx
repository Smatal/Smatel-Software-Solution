"use client";

import { homepageData } from "@/content/homepage";
import Link from "next/link";
import { motion, Variants } from "motion/react";
import { PremiumWidgetCard } from "@/components/ui/PremiumWidgetCard";

const staggerContainer: Variants = {
  hidden: { opacity: 0 },
  show: {
    opacity: 1,
    transition: {
      staggerChildren: 0.1
    }
  }
};

const cardVariant: Variants = {
  hidden: { opacity: 0, y: 20 },
  show: { opacity: 1, y: 0, transition: { type: "spring" as const, stiffness: 300, damping: 24 } }
};

export function Industries() {
  const { industries } = homepageData;

  return (
    <section className="py-24 bg-background">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="max-w-3xl mb-16">
          <h2 className="text-3xl lg:text-4xl font-bold tracking-tight mb-4 text-foreground">{industries.heading}</h2>
          <p className="text-lg text-muted-foreground">{industries.description}</p>
        </div>
        <motion.div 
          className="grid grid-cols-2 md:grid-cols-3 gap-4 lg:gap-6"
          variants={staggerContainer}
          initial="hidden"
          whileInView="show"
          viewport={{ once: true, margin: "-100px" }}
        >
          {industries.sectors.map((sector, index) => (
            <motion.div key={index} variants={cardVariant} className="h-full">
              <Link href={sector.href} className="group block h-full">
                <PremiumWidgetCard className="flex items-center justify-center text-center p-6 min-h-[120px]">
                  <h3 className="text-base md:text-lg font-medium text-foreground group-hover:text-primary transition-colors">
                    {sector.name}
                  </h3>
                </PremiumWidgetCard>
              </Link>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  );
}
