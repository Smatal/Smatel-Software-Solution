"use client";

import { homepageData } from "@/content/homepage";
import Link from "next/link";
import { ArrowRight } from "lucide-react";
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

export function Portfolio() {
  const { portfolio } = homepageData;

  return (
    <section className="py-24 bg-background border-y border-border/50">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="max-w-3xl mb-16">
          <h2 className="text-3xl lg:text-4xl font-bold tracking-tight mb-4 text-foreground">{portfolio.heading}</h2>
          <p className="text-lg text-muted-foreground">{portfolio.description}</p>
        </div>
        <motion.div 
          className="grid md:grid-cols-3 gap-8"
          variants={staggerContainer}
          initial="hidden"
          whileInView="show"
          viewport={{ once: true, margin: "-100px" }}
        >
          {portfolio.projects.map((project, index) => (
            <motion.div key={index} variants={cardVariant} className="h-full">
              <Link href={project.href} className="group block h-full">
                <PremiumWidgetCard className="flex flex-col justify-between p-6">
                  <div>
                    <div className="aspect-[4/3] rounded-xl bg-muted/20 border border-border/50 mb-6 overflow-hidden relative">
                      <div className="absolute inset-0 bg-muted/20 group-hover:bg-muted/40 transition-colors" />
                    </div>
                    <span className="text-sm font-medium text-primary mb-2 block">{project.category}</span>
                  </div>
                  <h3 className="text-xl font-semibold text-foreground group-hover:text-primary transition-colors flex items-center justify-between mt-auto pt-4">
                    {project.title}
                    <ArrowRight className="h-5 w-5 opacity-0 group-hover:opacity-100 transition-opacity -translate-x-2 group-hover:translate-x-0 transform duration-200" />
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
