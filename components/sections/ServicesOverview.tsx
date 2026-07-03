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
          {servicesOverview.services.map((service, index) => {
            const gradients = [
              "from-blue-500/20 via-indigo-500/20 to-purple-500/20",
              "from-emerald-500/20 via-teal-500/20 to-cyan-500/20",
              "from-orange-500/20 via-amber-500/20 to-yellow-500/20",
              "from-pink-500/20 via-rose-500/20 to-red-500/20",
              "from-violet-500/20 via-fuchsia-500/20 to-purple-500/20",
              "from-cyan-500/20 via-sky-500/20 to-blue-500/20"
            ];
            const bgGradient = gradients[index % gradients.length];
            
            return (
            <motion.div key={index} variants={cardVariant} className="h-full">
              <Link href={service.href} className="group relative block h-[320px] w-full overflow-hidden rounded-[2rem] shadow-sm transition-all duration-500 hover:shadow-2xl hover:-translate-y-2 border border-slate-200/50 bg-white">
                
                {/* Organic Abstract CSS Mesh Gradient Background */}
                <div className={`absolute inset-0 bg-gradient-to-br ${bgGradient} opacity-50 group-hover:opacity-100 transition-opacity duration-700`} />
                
                {/* Subtle Tech Pattern Overlay */}
                <div className="absolute inset-0 opacity-[0.15]" style={{ backgroundImage: 'radial-gradient(circle at 2px 2px, rgba(0,0,0,0.8) 1px, transparent 0)', backgroundSize: '16px 16px' }} />
                
                {/* Animated Glowing Orb */}
                <div className="absolute -top-20 -right-20 w-40 h-40 bg-white/40 blur-3xl rounded-full group-hover:scale-150 transition-transform duration-1000" />
                
                {/* Content */}
                <div className="absolute inset-0 p-8 flex flex-col justify-end z-20">
                  <h3 className="text-2xl font-bold mb-3 text-slate-900 tracking-tight group-hover:text-indigo-600 transition-colors">{service.title}</h3>
                  <p className="text-slate-600 text-sm mb-6 opacity-0 translate-y-4 group-hover:opacity-100 group-hover:translate-y-0 transition-all duration-500 font-medium">
                    {service.description}
                  </p>
                  
                  <div className="flex items-center text-sm font-semibold text-indigo-600 group-hover:text-indigo-800 transition-colors">
                    Learn more <ArrowUpRight className="ml-1 w-4 h-4 transition-transform group-hover:-translate-y-1 group-hover:translate-x-1" />
                  </div>
                </div>
              </Link>
            </motion.div>
            );
          })}
        </motion.div>
      </div>
    </section>
  );
}
