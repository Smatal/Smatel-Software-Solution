"use client";

import { homepageData } from "@/content/homepage";
import Link from "next/link";
import { ArrowRight } from "lucide-react";
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

export function Portfolio() {
  const { portfolio } = homepageData;

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
      className="py-32 bg-[#FAFAFA] relative overflow-hidden border-y border-border/10"
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
        
        <div className="absolute inset-0 bg-gradient-to-t from-[#FAFAFA] via-transparent to-[#FAFAFA] z-10" />
      </div>

      <div className="container mx-auto px-4 sm:px-6 lg:px-8 relative z-20">
        <div className="max-w-3xl mb-16">
          <h2 className="text-4xl lg:text-5xl font-black tracking-tighter mb-4 text-gray-900">{portfolio.heading}</h2>
          <p className="text-lg text-gray-600 font-medium">{portfolio.description}</p>
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
                    <div className="aspect-[4/3] rounded-xl bg-gray-100 border border-border/50 mb-6 overflow-hidden relative">
                      {/* Slow Panning Live Background */}
                      <motion.div 
                        className="absolute -inset-10 bg-[url('https://images.unsplash.com/photo-1550745165-9bc0b252726f?q=80&w=1000&auto=format&fit=crop')] bg-cover opacity-10"
                        animate={{ x: [-20, 20, -20], y: [-20, 20, -20] }}
                        transition={{ duration: 25 + index * 5, repeat: Infinity, ease: "linear" }}
                      />
                      <div className="absolute inset-0 bg-gray-100/50 group-hover:bg-transparent transition-colors duration-500" />
                    </div>
                    <span className="text-sm font-bold text-indigo-600 mb-2 block tracking-wide uppercase">{project.category}</span>
                  </div>
                  <h3 className="text-2xl font-bold text-gray-900 group-hover:text-indigo-600 transition-colors flex items-center justify-between mt-auto pt-4 tracking-tight">
                    {project.title}
                    <ArrowRight className="h-6 w-6 opacity-0 group-hover:opacity-100 transition-all -translate-x-4 group-hover:translate-x-0 transform duration-300" />
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
