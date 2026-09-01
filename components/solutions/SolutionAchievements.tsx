"use client";

import { useEffect, useRef, useState } from "react";
import { motion, useInView } from "motion/react";
import type { Achievement } from "@/content/solutions/types";

interface SolutionAchievementsProps {
  achievements: Achievement[];
}

function Counter({ value, suffix }: { value: number; suffix: string }) {
  const ref = useRef<HTMLSpanElement>(null);
  const inView = useInView(ref, { once: true, margin: "-50px" });
  const [count, setCount] = useState(0);

  useEffect(() => {
    if (inView) {
      let start = 0;
      const duration = 2000; // 2 seconds
      const increment = value / (duration / 16); // 60fps

      const timer = setInterval(() => {
        start += increment;
        if (start >= value) {
          setCount(value);
          clearInterval(timer);
        } else {
          setCount(Math.floor(start));
        }
      }, 16);

      return () => clearInterval(timer);
    }
  }, [inView, value]);

  return (
    <span ref={ref}>
      {count}
      {suffix}
    </span>
  );
}

export function SolutionAchievements({ achievements }: SolutionAchievementsProps) {
  if (!achievements || achievements.length === 0) return null;

  return (
    <section className="py-20 bg-slate-950 relative overflow-hidden border-y border-slate-800/80">
      {/* Ambient Cyber Lighting */}
      <div className="absolute top-0 right-1/4 w-80 h-80 bg-teal-500/10 rounded-full blur-[100px] pointer-events-none" />
      <div className="absolute bottom-0 left-1/4 w-80 h-80 bg-cyan-500/10 rounded-full blur-[100px] pointer-events-none" />
      <div className="absolute inset-0 opacity-15" style={{ backgroundImage: 'radial-gradient(circle at 2px 2px, rgba(33,189,188,0.4) 1px, transparent 0)', backgroundSize: '32px 32px' }} />
      
      <div className="container mx-auto px-4 sm:px-6 lg:px-8 max-w-7xl relative z-10">
        <div className="grid grid-cols-2 lg:grid-cols-4 gap-8 md:gap-12 text-center divide-x divide-slate-800">
          {achievements.map((achievement, index) => (
            <motion.div
              key={achievement.label}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: index * 0.1, duration: 0.5 }}
              className={`flex flex-col items-center ${index !== 0 ? 'pl-8 md:pl-12' : ''} ${index % 2 !== 0 ? 'border-l border-slate-800' : 'border-l-0 lg:border-l lg:border-slate-800'} ${index === 2 ? 'border-l-0 lg:border-l lg:border-slate-800' : ''}`}
            >
              <div className="text-4xl md:text-5xl lg:text-6xl font-black bg-gradient-to-r from-[#21BDBC] via-white to-[#FCB814] bg-clip-text text-transparent mb-2 tracking-tighter drop-shadow-md">
                <Counter value={achievement.value} suffix={achievement.suffix} />
              </div>
              <p className="text-slate-400 font-medium text-sm md:text-base uppercase tracking-wider">
                {achievement.label}
              </p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
