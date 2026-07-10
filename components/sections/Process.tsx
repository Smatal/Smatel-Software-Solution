"use client";

import { homepageData } from "@/content/homepage";
import { motion } from "motion/react";
import { GitCommit, GitPullRequest } from "lucide-react";
import { ParticleBackground } from "@/components/ui/particle-background";

export function Process() {
  const { process } = homepageData;

  return (
    <section id="process" className="py-24 bg-slate-950 overflow-hidden relative">
      <ParticleBackground className="absolute inset-0" />
      <div className="container mx-auto px-4 sm:px-6 lg:px-8 max-w-7xl relative z-10">
        <div className="text-center max-w-3xl mx-auto mb-24">
          <div className="inline-flex items-center justify-center rounded-full border border-indigo-500/30 bg-indigo-500/10 px-4 py-1.5 text-sm font-semibold text-indigo-400 mb-6 tracking-widest uppercase">
            <GitPullRequest className="w-4 h-4 mr-2" /> Our Methodology
          </div>
          <h2 className="text-3xl md:text-5xl font-bold tracking-tight text-white mb-6">
            {process.heading}
          </h2>
          <p className="text-lg text-slate-400">
            {process.description}
          </p>
        </div>

        {/* Vertical Timeline Flow */}
        <div className="relative max-w-4xl mx-auto px-4">
          {/* Vertical Connecting Line */}
          <div className="absolute top-0 bottom-0 left-[28px] md:left-1/2 w-[2px] bg-slate-800 md:-ml-[1px]" />
          
          {/* Progress Line (Animated) */}
          <motion.div 
            className="absolute top-0 bottom-0 left-[28px] md:left-1/2 w-[2px] bg-gradient-to-b from-indigo-600 to-purple-500 md:-ml-[1px] origin-top"
            initial={{ scaleY: 0 }}
            whileInView={{ scaleY: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 2, ease: "easeInOut" }}
          />

          <div className="space-y-4 relative py-6">
            {process.steps.map((step, index) => {
              const isEven = index % 2 === 0;
              return (
                <motion.div
                  key={step.title}
                  initial={{ opacity: 0, x: -30 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  viewport={{ once: true, margin: "-50px" }}
                  transition={{ delay: index * 0.1, duration: 0.4 }}
                  className={`relative flex flex-col md:flex-row items-start md:items-center ${isEven ? 'md:flex-row' : 'md:flex-row-reverse'}`}
                >
                  {/* Node */}
                  <div className="absolute left-[14px] md:left-1/2 md:-ml-[16px] top-6 md:top-1/2 md:-mt-[16px] w-8 h-8 rounded-full bg-slate-950 border-[3px] border-slate-800 flex items-center justify-center text-slate-500 font-bold z-10 group-hover:border-indigo-500 group-hover:text-indigo-400 transition-colors shadow-lg">
                    <GitCommit className="w-4 h-4" />
                  </div>

                  {/* Card Container */}
                  <div className={`w-full md:w-1/2 pl-14 md:px-8 ${isEven ? 'md:pr-8 md:pl-0 md:text-right flex md:justify-end' : 'md:pl-8 md:pr-0 md:text-left flex md:justify-start'}`}>
                    <div className="bg-slate-900/80 rounded-xl p-5 shadow-sm border border-slate-800 hover:border-indigo-500/50 hover:bg-slate-800 transition-all w-full max-w-sm group">
                      <span className={`text-indigo-400 font-bold text-[10px] mb-2 tracking-[0.2em] uppercase flex items-center gap-2 ${isEven ? 'md:justify-end' : ''}`}>
                        <span className="w-1.5 h-1.5 rounded-full bg-indigo-500 animate-pulse" />
                        Phase 0{index + 1}
                      </span>
                      <h3 className="font-bold text-lg text-white mb-2 group-hover:text-indigo-400 transition-colors">{step.title}</h3>
                      <p className="text-sm text-slate-400 leading-relaxed">{step.description}</p>
                    </div>
                  </div>
                </motion.div>
              );
            })}
          </div>
        </div>
      </div>
    </section>
  );
}
