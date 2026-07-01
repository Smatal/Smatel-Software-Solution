"use client";

import { homepageData } from "@/content/homepage";
import Link from "next/link";
import { ArrowUpRight } from "lucide-react";
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

export function ServicesOverview() {
  const { servicesOverview } = homepageData;

  return (
    <section className="py-24 bg-background">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="max-w-3xl mb-16">
          <h2 className="text-3xl lg:text-4xl font-bold tracking-tight mb-4 text-foreground">{servicesOverview.heading}</h2>
          <p className="text-lg text-muted-foreground">{servicesOverview.description}</p>
        </div>
        <motion.div 
          className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6"
          variants={staggerContainer}
          initial="hidden"
          whileInView="show"
          viewport={{ once: true, margin: "-100px" }}
        >
          {servicesOverview.services.map((service, index) => (
            <motion.div key={index} variants={cardVariant} className="h-full">
              <Link href={service.href} className="group block h-full">
                <PremiumWidgetCard className="p-6 flex flex-row items-center justify-between">
                  <h3 className="text-lg font-medium text-foreground">{service.title}</h3>
                  <ArrowUpRight className="h-5 w-5 text-muted-foreground group-hover:text-primary transition-colors" />
                </PremiumWidgetCard>
              </Link>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  );
}
