"use client";

import { homepageData } from "@/content/homepage";
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
  Layers,
  Sparkles
} from "lucide-react";
import { ContactCTA } from "@/components/sections/ContactCTA";
import { AnimatedHeroWrapper } from "@/components/ui/animated-hero-wrapper";
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

export default function ServicesPage() {
  const { solutionCategories } = homepageData;

  return (
    <div className="flex flex-col min-h-screen">
      {/* Page Header */}
      <AnimatedHeroWrapper className="pt-32 pb-20 bg-[#FAFAFA] border-b border-gray-100">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8 text-center max-w-3xl relative z-10">
          <div className="inline-flex items-center rounded-full border border-teal-500/30 bg-teal-500/10 px-4 py-1.5 text-sm font-semibold text-teal-700 mb-6 tracking-widest uppercase shadow-[0_0_12px_rgba(33,189,188,0.12)]">
            <Sparkles className="w-3.5 h-3.5 mr-1.5" /> End-to-End Solutions
          </div>
          <h1 className="text-4xl md:text-6xl font-black tracking-tight mb-6 text-gray-900 leading-tight">
            {solutionCategories.heading}
          </h1>
          <p className="text-xl text-gray-600 leading-relaxed font-light">
            {solutionCategories.description}
          </p>
        </div>
      </AnimatedHeroWrapper>
      
      {/* Services Grid with Interactive Spotlight Cards */}
      <section className="py-24 bg-gradient-to-b from-white via-slate-50/40 to-white relative overflow-hidden">
        {/* Ambient background light */}
        <div className="absolute top-1/3 left-1/2 -translate-x-1/2 w-[900px] h-[500px] bg-teal-500/5 blur-[140px] rounded-full pointer-events-none" />

        <div className="container mx-auto px-4 sm:px-6 lg:px-8 max-w-7xl relative z-10">
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {solutionCategories.categories.map((category) => (
              <Link 
                href={`/services/${category.slug}`} 
                key={category.slug} 
                className="block h-full group"
              >
                <SpotlightCard className="h-full min-h-[380px] p-8 border-gray-200/80 bg-white/95">
                  <div>
                    {/* Top Header with Icon Tile & Status */}
                    <div className="flex items-center justify-between mb-6">
                      <div className="w-13 h-13 rounded-2xl bg-slate-50 border border-slate-100/80 flex items-center justify-center text-teal-700 group-hover:bg-teal-50/80 group-hover:border-teal-200/60 transition-colors duration-300">
                        {iconMap[category.icon] || <Layers className="w-7 h-7" />}
                      </div>
                      <Badge variant="outline" className="text-[11px] font-medium text-slate-500 bg-slate-50 border-slate-200/80 group-hover:text-teal-700 group-hover:border-teal-200/60 transition-colors">
                        Enterprise Ready
                      </Badge>
                    </div>

                    {/* Title & Tagline */}
                    <h3 className="text-2xl font-bold mb-2 text-gray-900 tracking-tight group-hover:text-teal-800 transition-colors">
                      {category.title}
                    </h3>
                    <p className="font-semibold text-teal-700 mb-4 text-sm">
                      {category.tagline}
                    </p>
                    
                    {/* Business Problem / Summary */}
                    <p className="text-gray-600 text-sm leading-relaxed mb-6 font-normal">
                      {category.businessProblem}
                    </p>
                  </div>

                  {/* Bottom Action Area */}
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
            ))}
          </div>
        </div>
      </section>

      <ContactCTA />
    </div>
  );
}
