"use client";

import { homepageData } from "@/content/homepage";
import Link from "next/link";
import { ArrowUpRight } from "lucide-react";
import { motion, Variants, useMotionValue, useSpring, useTransform, useMotionTemplate } from "motion/react";
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

  const mouseX = useMotionValue(0);
  const mouseY = useMotionValue(0);

  const springX = useSpring(mouseX, { stiffness: 50, damping: 20 });
  const springY = useSpring(mouseY, { stiffness: 50, damping: 20 });

  const gridX = useTransform(springX, [0, 2000], [0, -60]);
  const gridY = useTransform(springY, [0, 1000], [0, -60]);

  function handleMouseMove({ currentTarget, clientX, clientY }: React.MouseEvent) {
    const { left, top } = currentTarget.getBoundingClientRect();
    mouseX.set(clientX - left);
    mouseY.set(clientY - top);
  }

  return (
    <section 
      className="py-24 bg-[#FAFAFA] relative overflow-hidden"
      onMouseMove={handleMouseMove}
    >
      {/* Universal Interactive Parallax Grid */}
      <div className="absolute inset-0 z-0 pointer-events-none overflow-hidden">
        <motion.div 
          className="absolute -inset-[10%] opacity-[0.3]"
          style={{
            backgroundImage: `linear-gradient(to right, rgba(99,102,241,0.5) 1px, transparent 1px), linear-gradient(to bottom, rgba(99,102,241,0.5) 1px, transparent 1px)`,
            backgroundSize: "64px 64px",
            x: gridX,
            y: gridY,
          }}
        />
        
        {/* Interactive Mouse Spotlight */}
        <motion.div
          className="absolute inset-0 mix-blend-overlay z-10"
          style={{
            background: useMotionTemplate`radial-gradient(600px circle at ${springX}px ${springY}px, rgba(99,102,241,0.3), transparent 80%)`,
          }}
        />
        
        <div className="absolute inset-0 bg-gradient-to-b from-[#FAFAFA] via-transparent to-[#FAFAFA] z-10" />
      </div>

      <div className="container mx-auto px-4 sm:px-6 lg:px-8 relative z-20">
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
