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
    <section className="py-24 lg:py-32 bg-zinc-50 border-y border-border/50 relative">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8 max-w-7xl relative z-10">
        
        <div className="text-center md:text-left mb-16">
          <h2 className="text-4xl md:text-5xl lg:text-6xl font-black tracking-tighter mb-4 text-gray-900">{howWeWork.heading}</h2>
          <p className="text-lg text-gray-600 font-medium max-w-xl">{howWeWork.description}</p>
        </div>
        
        <div ref={containerRef} className="grid grid-cols-1 lg:grid-cols-2 gap-16 relative">
          
          {/* Left Column: Vertical Tracking Timeline */}
          <div className="relative pl-8 md:pl-12 py-10 flex flex-col gap-16">
            {/* Background Line */}
            <div className="absolute left-0 top-0 bottom-0 w-1 bg-gray-200 rounded-full" />
            
            {/* Animated Stroke Line */}
            <svg className="absolute left-0 top-0 bottom-0 w-1 h-full overflow-visible">
              <motion.line
                x1="2" y1="0" x2="2" y2="100%"
                stroke="oklch(0.541 0.17 282)"
                strokeWidth="4"
                strokeLinecap="round"
                style={{ pathLength }}
              />
            </svg>

            {howWeWork.steps.map((step, index) => {
              const isActive = activePhaseIndex >= index;
              return (
                <div key={index} className="relative">
                  {/* Indicator Dot */}
                  <motion.div
                    className={`absolute -left-8 md:-left-12 w-4 h-4 -translate-x-1/2 rounded-full border-4 border-zinc-50 transition-colors duration-500 z-10 ${
                      isActive ? "bg-indigo-600" : "bg-gray-300"
                    }`}
                    animate={{
                      scale: isActive ? 1.5 : 1,
                      boxShadow: isActive ? "0 0 15px rgba(79,70,229,0.5)" : "none",
                    }}
                  />
                  
                  <span className="block text-xs font-bold uppercase tracking-widest text-indigo-600 mb-2">Step 0{index + 1}</span>
                  <h3 className={`text-2xl md:text-3xl font-black tracking-tight mb-4 transition-colors duration-500 ${
                    isActive ? "text-gray-900" : "text-gray-400"
                  }`}>
                    {step.title}
                  </h3>
                  <div className={`overflow-hidden transition-all duration-500 ${isActive ? "max-h-40 opacity-100" : "max-h-0 opacity-0 lg:max-h-40 lg:opacity-60"}`}>
                    <p className="text-gray-600 leading-relaxed max-w-md">
                      {step.description}
                    </p>
                  </div>
                </div>
              );
            })}
          </div>

          {/* Right Column: Sticky Floating Widgets (Genexlyf Style) */}
          <div className="hidden lg:block relative">
            <div className="sticky top-32 w-full aspect-square max-w-[500px] mx-auto bg-white rounded-[2.5rem] border border-gray-100 shadow-2xl p-8 flex flex-col justify-center items-center">
              
              {/* Central Widget */}
              <motion.div 
                className="w-full bg-zinc-50 rounded-2xl border border-gray-100 p-6 shadow-sm mb-6"
                animate={{ y: [0, -10, 0] }}
                transition={{ duration: 5, repeat: Infinity, ease: "easeInOut" }}
              >
                <div className="flex justify-between items-center mb-4">
                  <div className="w-10 h-10 rounded-full bg-indigo-100 flex items-center justify-center">
                    <div className="w-5 h-5 bg-indigo-600 rounded-sm rotate-45" />
                  </div>
                  <div className="px-3 py-1 bg-green-100 text-green-700 text-xs font-bold rounded-full">ACTIVE</div>
                </div>
                <div className="flex flex-col gap-2 mt-4">
                  <div className="flex justify-between items-center text-sm font-semibold text-gray-700">
                    <span>Systems Operational</span>
                    <span className="text-indigo-600">100%</span>
                  </div>
                  <div className="h-2 w-full bg-gray-100 rounded-full overflow-hidden">
                    <div className="h-full bg-indigo-600 w-full rounded-full" />
                  </div>
                  <div className="flex justify-between items-center text-sm font-semibold text-gray-700 mt-2">
                    <span>Code Deployed</span>
                    <span className="text-emerald-600">Success</span>
                  </div>
                </div>
              </motion.div>

              {/* Smaller Floating Widget */}
              <motion.div 
                className="absolute -right-8 top-1/4 bg-white p-4 rounded-xl border border-gray-100 shadow-xl"
                animate={{ y: [0, 15, 0] }}
                transition={{ duration: 6, repeat: Infinity, ease: "easeInOut", delay: 1 }}
              >
                <div className="text-xs font-bold text-gray-400 uppercase tracking-widest mb-1">Velocity</div>
                <div className="text-2xl font-black text-gray-900 tracking-tighter">98.5%</div>
              </motion.div>
              
              {/* Bottom Floating Widget */}
              <motion.div 
                className="absolute -left-8 bottom-1/4 bg-white p-4 rounded-xl border border-gray-100 shadow-xl flex items-center gap-3"
                animate={{ y: [0, -12, 0] }}
                transition={{ duration: 4.5, repeat: Infinity, ease: "easeInOut", delay: 2 }}
              >
                <div className="w-8 h-8 rounded-full bg-blue-100" />
                <div className="w-8 h-8 rounded-full bg-red-100 -ml-4 border-2 border-white" />
                <div className="w-8 h-8 rounded-full bg-green-100 -ml-4 border-2 border-white" />
                <span className="text-xs font-bold ml-2">Team Setup</span>
              </motion.div>
            </div>
          </div>

        </div>
      </div>
    </section>
  );
}
