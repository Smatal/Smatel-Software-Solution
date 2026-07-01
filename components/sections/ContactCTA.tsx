"use client";

import { homepageData } from "@/content/homepage";
import { buttonVariants } from "@/components/ui/button";
import { cn } from "@/lib/utils";
import Link from "next/link";
import { ArrowRight } from "lucide-react";
import { motion, useMotionValue, useSpring, useTransform, useMotionTemplate } from "motion/react";

export function ContactCTA() {
  const { contact } = homepageData;

  const mouseX = useMotionValue(0);
  const mouseY = useMotionValue(0);

  const springX = useSpring(mouseX, { stiffness: 50, damping: 20 });
  const springY = useSpring(mouseY, { stiffness: 50, damping: 20 });

  const gridX = useTransform(springX, [0, 1500], [0, -40]);
  const gridY = useTransform(springY, [0, 800], [0, -40]);

  function handleMouseMove({ currentTarget, clientX, clientY }: React.MouseEvent) {
    const { left, top } = currentTarget.getBoundingClientRect();
    mouseX.set(clientX - left);
    mouseY.set(clientY - top);
  }

  return (
    <section className="py-32 bg-background relative overflow-hidden">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="max-w-6xl mx-auto">
          {/* Premium Rounded Container */}
          <div 
            className="relative rounded-[3rem] overflow-hidden bg-zinc-50 border border-gray-200 shadow-xl px-6 py-24 md:py-32 text-center"
            onMouseMove={handleMouseMove}
          >
            
            {/* Interactive Grid Background inside the container */}
            <div className="absolute inset-0 pointer-events-none overflow-hidden">
              <motion.div 
                className="absolute -inset-[10%] opacity-[0.35]"
                style={{
                  backgroundImage: `linear-gradient(to right, rgba(99,102,241,0.5) 1px, transparent 1px), linear-gradient(to bottom, rgba(99,102,241,0.5) 1px, transparent 1px)`,
                  backgroundSize: "64px 64px",
                  x: gridX,
                  y: gridY,
                }}
              />
              
              {/* Interactive Mouse Spotlight illuminating the grid */}
              <motion.div
                className="absolute inset-0 mix-blend-overlay z-10"
                style={{
                  background: useMotionTemplate`radial-gradient(400px circle at ${springX}px ${springY}px, rgba(99,102,241,0.5), transparent 80%)`,
                }}
              />
              
              <div className="absolute inset-0 bg-gradient-to-t from-zinc-50 via-transparent to-transparent z-10"></div>
              
              {/* Subtle Glowing Orb */}
              <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[600px] bg-indigo-500/10 blur-[120px] rounded-full pointer-events-none z-10"></div>
            </div>

            <div className="relative z-10 max-w-4xl mx-auto">
              <h2 className="text-4xl md:text-5xl lg:text-7xl font-black tracking-tighter mb-8 text-gray-900 leading-[1.1]">
                {contact.heading}
              </h2>
              <p className="text-xl text-gray-600 mb-12 max-w-2xl mx-auto font-medium">
                {contact.description}
              </p>
              
              <Link 
                href={contact.href}
                className={cn(buttonVariants({ size: "lg", className: "h-14 px-10 text-lg font-semibold shadow-[0_4px_14px_0_rgba(79,70,229,0.25)] hover:shadow-[0_6px_20px_rgba(79,70,229,0.4)] transition-shadow w-full sm:w-auto" }))}
              >
                {contact.ctaText} <ArrowRight className="ml-2 h-5 w-5" />
              </Link>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
