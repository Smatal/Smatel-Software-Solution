"use client";

import { homepageData } from "@/content/homepage";
import { motion } from "motion/react";
import Link from "next/link";
import { 
  ArrowRight, 
  Laptop, 
  Building2, 
  Factory, 
  TrendingUp, 
  LifeBuoy, 
  Globe, 
  Smartphone, 
  Users, 
  Receipt, 
  GraduationCap,
  Layers
} from "lucide-react";
import { SpotlightCard } from "@/components/ui/spotlight-card";
import { Badge } from "@/components/ui/badge";

const iconMap: Record<string, React.ReactNode> = {
  laptop: <Laptop className="w-7 h-7" />,
  building: <Building2 className="w-7 h-7" />,
  factory: <Factory className="w-7 h-7" />,
  "trending-up": <TrendingUp className="w-7 h-7" />,
  "life-buoy": <LifeBuoy className="w-7 h-7" />,
  globe: <Globe className="w-7 h-7" />,
  smartphone: <Smartphone className="w-7 h-7" />,
  users: <Users className="w-7 h-7" />,
  receipt: <Receipt className="w-7 h-7" />,
  "graduation-cap": <GraduationCap className="w-7 h-7" />,
};

export function SolutionCategories() {
  const { solutionCategories } = homepageData;

  return (
    <section id="solutions" className="py-24 bg-white relative overflow-hidden">
      {/* Ambient background light */}
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[800px] h-[500px] bg-teal-500/5 blur-[140px] rounded-full pointer-events-none" />

      <div className="container mx-auto px-4 sm:px-6 lg:px-8 max-w-7xl relative z-10">
        <div className="text-center max-w-3xl mx-auto mb-16">
          <Badge variant="outline" className="mb-4 border-teal-500/30 bg-teal-500/10 text-teal-700">
            Engineered For Scale
          </Badge>
          <h2 className="text-3xl md:text-5xl font-bold tracking-tight text-gray-900 mb-6">
            {solutionCategories.heading}
          </h2>
          <p className="text-lg text-gray-600 leading-relaxed">
            {solutionCategories.description}
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {solutionCategories.categories.map((category, index) => (
            <motion.div
              key={category.slug}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-40px" }}
              transition={{ delay: index * 0.08, duration: 0.4 }}
              className="h-full"
            >
              <Link href={`/services/${category.slug}`} className="block h-full group">
                <SpotlightCard className="h-full min-h-[380px] p-8 border-gray-200/80 bg-white/95">
                  <div>
                    {/* Header Icon Tile */}
                    <div className="flex items-center justify-between mb-6">
                      <div className="w-13 h-13 rounded-2xl bg-slate-50 border border-slate-100/80 flex items-center justify-center text-teal-700 group-hover:bg-teal-50/80 group-hover:border-teal-200/60 transition-colors duration-300">
                        {iconMap[category.icon] || <Layers className="w-7 h-7" />}
                      </div>
                      <Badge variant="outline" className="text-[11px] font-medium text-slate-500 bg-slate-50 border-slate-200/80 group-hover:text-teal-700 group-hover:border-teal-200/60 transition-colors">
                        Modular Architecture
                      </Badge>
                    </div>

                    <h3 className="text-2xl font-bold mb-2 text-gray-900 tracking-tight group-hover:text-teal-800 transition-colors">
                      {category.title}
                    </h3>
                    <p className="font-semibold text-teal-700 mb-4 text-sm">
                      {category.tagline}
                    </p>

                    <div className="mb-6">
                      <span className="text-[11px] font-semibold text-gray-400 uppercase tracking-wider block mb-1">
                        Operational Problem Solved
                      </span>
                      <p className="text-sm text-gray-600 leading-relaxed font-normal">
                        {category.businessProblem}
                      </p>
                    </div>
                  </div>

                  {/* Bottom Action Link */}
                  <div className="pt-4 border-t border-gray-100/80 flex items-center justify-between mt-auto">
                    <span className="text-xs font-mono text-gray-400">
                      smatal.cloud/{category.slug}
                    </span>
                    <div className="flex items-center text-sm font-semibold text-teal-700 group-hover:text-teal-900 transition-colors">
                      Explore Solution <ArrowRight className="ml-1.5 w-4 h-4 transition-transform group-hover:translate-x-1.5" />
                    </div>
                  </div>
                </SpotlightCard>
              </Link>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
