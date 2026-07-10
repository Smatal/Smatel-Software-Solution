"use client";

import { homepageData } from "@/content/homepage";
import { motion } from "motion/react";
import { GitCommit, GitPullRequest } from "lucide-react";

export function Process() {
  const { process } = homepageData;

  return (
    <section id="process" className="py-24 bg-slate-950 overflow-hidden">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8 max-w-7xl">
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

        {/* Git-like Horizontal Flow */}
        <div className="relative">
          <div className="flex overflow-x-auto pb-12 snap-x snap-mandatory [&::-webkit-scrollbar]:hidden [-ms-overflow-style:none] [scrollbar-width:none] px-4 md:px-8 -mx-4 md:-mx-8">
            <div className="flex gap-4 md:gap-8 relative min-w-max pr-8">
              
              {/* Connecting Line Track */}
              <div className="absolute top-[24px] left-[40px] right-[40px] h-1 bg-slate-800 rounded-full" />
              
              {/* Progress Line (Animated) */}
              <motion.div 
                className="absolute top-[24px] left-[40px] h-1 bg-gradient-to-r from-indigo-600 to-purple-500 rounded-full"
                initial={{ width: "0%" }}
                whileInView={{ width: "calc(100% - 80px)" }}
                viewport={{ once: true }}
                transition={{ duration: 2, ease: "easeInOut" }}
              />

              {process.steps.map((step, index) => (
                <motion.div
                  key={step.title}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: index * 0.15, duration: 0.5 }}
                  className="relative snap-center shrink-0 w-[280px] md:w-[340px] flex flex-col group"
                >
                  {/* Node */}
                  <div className="relative mb-8 px-4 flex justify-start">
                    <div className="w-12 h-12 rounded-full bg-slate-950 border-4 border-slate-800 flex items-center justify-center text-slate-500 font-bold z-10 relative group-hover:border-indigo-500 group-hover:text-indigo-400 transition-colors shadow-lg">
                      <GitCommit className="w-6 h-6" />
                    </div>
                  </div>

                  {/* Card */}
                  <div className="bg-slate-900/80 rounded-2xl p-8 shadow-sm border border-slate-800 flex flex-col hover:border-indigo-500/50 hover:bg-slate-800 transition-all h-full mx-4">
                    <span className="text-indigo-400 font-bold text-xs mb-3 tracking-[0.2em] uppercase flex items-center gap-2">
                      <span className="w-2 h-2 rounded-full bg-indigo-500 animate-pulse" />
                      Phase 0{index + 1}
                    </span>
                    <h3 className="font-bold text-2xl text-white mb-4">{step.title}</h3>
                    <p className="text-base text-slate-400 leading-relaxed">{step.description}</p>
                  </div>
                </motion.div>
              ))}
            </div>
          </div>
          
          {/* Scroll Hint */}
          <div className="flex justify-center mt-8 md:hidden">
            <span className="text-sm text-slate-500 animate-pulse">Swipe to explore workflow ➔</span>
          </div>
        </div>
      </div>
    </section>
  );
}
