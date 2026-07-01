"use client";

import { homepageData } from "@/content/homepage";
import { useRef, useState } from "react";
import { motion, useScroll, useTransform, useMotionValueEvent } from "motion/react";

export function HowWeWork() {
  const { howWeWork } = homepageData;
  const containerRef = useRef<HTMLDivElement>(null);
  const [activePhaseIndex, setActivePhaseIndex] = useState<number>(-1);

  const { scrollYProgress } = useScroll({
    target: containerRef,
    offset: ["start center", "end center"],
  });

  const pathLength = useTransform(scrollYProgress, [0, 1], [0, 1]);

  useMotionValueEvent(scrollYProgress, "change", (latest) => {
    const threshold = 1 / howWeWork.steps.length;
    const currentPhase = Math.floor(latest / threshold);
    setActivePhaseIndex(Math.min(currentPhase, howWeWork.steps.length - 1));
  });

  return (
    <section className="py-24 bg-background border-y border-border/50">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center max-w-3xl mx-auto mb-20">
          <h2 className="text-3xl lg:text-4xl font-bold tracking-tight mb-4 text-foreground">{howWeWork.heading}</h2>
          <p className="text-lg text-muted-foreground">{howWeWork.description}</p>
        </div>
        
        <div ref={containerRef} className="relative w-full max-w-4xl mx-auto">
          {/* Background Track Line */}
          <div className="absolute left-[20px] md:left-1/2 top-4 bottom-0 w-[2px] bg-gray-200 -translate-x-[1px]" />

          {/* Animated Fill Line */}
          <svg className="absolute left-[20px] md:left-1/2 top-4 bottom-0 w-[2px] h-full overflow-visible -translate-x-[1px]">
            <motion.line
              x1="0"
              y1="0"
              x2="0"
              y2="100%"
              stroke="oklch(0.541 0.17 282)"
              strokeWidth="2"
              style={{ pathLength }}
            />
          </svg>

          {/* Timeline Nodes */}
          <div className="flex flex-col gap-16 relative z-10">
            {howWeWork.steps.map((step, index) => {
              const isActive = activePhaseIndex >= index;
              const isEven = index % 2 === 0;
              return (
                <div key={index} className={`flex relative md:gap-0 ${isEven ? 'md:flex-row-reverse' : 'md:flex-row'}`}>
                  
                  {/* Content (Desktop Left/Right, Mobile Right) */}
                  <div className={`w-full pl-16 md:pl-0 md:w-1/2 ${isEven ? 'md:pl-12 text-left' : 'md:pr-12 md:text-right'} pt-1 md:pt-2`}>
                    <div className="inline-block px-3 py-1 mb-2 text-xs font-mono font-medium rounded-full bg-muted text-muted-foreground border border-border/50">
                      Phase 0{index + 1}
                    </div>
                    <h3 className="text-xl font-bold mb-2 text-foreground">{step.title}</h3>
                    <p className="text-muted-foreground">{step.description}</p>
                  </div>

                  {/* Central Animated Dot */}
                  <div className="absolute left-[20px] md:static md:left-auto md:w-20 shrink-0 flex justify-center items-start md:items-center -translate-x-1/2 md:translate-x-0">
                    <motion.div
                      className={`w-10 h-10 md:w-12 md:h-12 rounded-full flex items-center justify-center border-2 bg-background transition-colors duration-300 ${
                        isActive ? "border-[oklch(0.541_0.17_282)]" : "border-gray-300"
                      }`}
                      animate={{
                        scale: isActive ? 1.1 : 1,
                        boxShadow: isActive ? "0 0 20px oklch(0.541 0.17 282 / 0.2)" : "none",
                      }}
                      transition={{ type: "spring", stiffness: 300, damping: 20 }}
                    >
                      <div className={`w-2 h-2 md:w-3 md:h-3 rounded-full transition-colors duration-300 ${
                        isActive ? "bg-[oklch(0.541_0.17_282)]" : "bg-transparent"
                      }`} />
                    </motion.div>
                  </div>

                  {/* Spacer for Desktop symmetry */}
                  <div className="hidden md:block md:w-1/2" />
                </div>
              );
            })}
          </div>
        </div>
      </div>
    </section>
  );
}
