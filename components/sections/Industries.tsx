"use client";

import { homepageData } from "@/content/homepage";
import Link from "next/link";
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

export function Industries() {
  const { industries } = homepageData;

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
      className="py-32 bg-white relative overflow-hidden"
      onMouseMove={handleMouseMove}
    >
      
      {/* Animated Live Grid Background */}
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
        
        {/* Scanning Line Animation */}
        <motion.div
          animate={{ y: ["-100%", "100%"] }}
          transition={{ duration: 8, repeat: Infinity, ease: "linear" }}
          className="absolute inset-x-0 top-0 h-32 bg-gradient-to-b from-transparent via-indigo-500/10 to-transparent z-10"
        />
        
        <div className="absolute inset-0 bg-gradient-to-t from-white via-transparent to-white z-10"></div>
      </div>

      <div className="container mx-auto px-4 sm:px-6 lg:px-8 relative z-20">
        <div className="max-w-3xl mb-16">
          <h2 className="text-4xl lg:text-5xl font-black tracking-tighter mb-4 text-gray-900">{industries.heading}</h2>
          <p className="text-lg text-gray-600 font-medium">{industries.description}</p>
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
