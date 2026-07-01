"use client";

import { homepageData } from "@/content/homepage";
import { Separator } from "@/components/ui/separator";
import { motion, useMotionValue, useSpring, useTransform, useMotionTemplate } from "motion/react";

export function Technology() {
  const { technology } = homepageData;

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
      className="py-32 bg-[#FAFAFA] relative overflow-hidden"
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
        <motion.div 
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="max-w-3xl mb-16"
        >
          <h2 className="text-4xl lg:text-5xl font-black tracking-tighter mb-4 text-gray-900">{technology.heading}</h2>
          <p className="text-lg text-gray-600 font-medium">{technology.description}</p>
        </motion.div>
        
        <div className="grid md:grid-cols-2 gap-12 lg:gap-16">
          {technology.categories.map((category, index) => (
            <motion.div 
              key={index}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: index * 0.1, type: "spring", stiffness: 300, damping: 24 }}
              className="space-y-6 relative group"
            >
              {/* Floating Highlight Orb */}
              <motion.div 
                animate={{ y: [0, -10, 0], scale: [1, 1.05, 1] }}
                transition={{ duration: 5 + index, repeat: Infinity, ease: "easeInOut" }}
                className="absolute -top-10 -left-10 w-32 h-32 bg-blue-100/30 rounded-full blur-2xl opacity-0 group-hover:opacity-100 transition-opacity duration-500 pointer-events-none" 
              />
              
              <h3 className="text-2xl font-bold text-gray-900 tracking-tight relative z-10">{category.name}</h3>
              <Separator className="bg-gray-200" />
              <p className="text-gray-500 font-mono text-sm leading-loose relative z-10">
                {category.stack.split(',').map((tech, i) => (
                  <span key={i} className="inline-block bg-gray-50 border border-gray-100 rounded-md px-3 py-1 mr-2 mb-2 text-gray-600 shadow-sm hover:shadow-md hover:bg-white transition-all cursor-default">
                    {tech.trim()}
                  </span>
                ))}
              </p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
