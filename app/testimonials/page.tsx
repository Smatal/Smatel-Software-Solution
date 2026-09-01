"use client";

import { useState } from "react";
import { motion, AnimatePresence } from "motion/react";
import Link from "next/link";
import { Star, ShieldCheck, ArrowRight, TrendingUp, Sparkles, Building, CheckCircle2 } from "lucide-react";
import { Badge } from "@/components/ui/badge";
import { ContactCTA } from "@/components/sections/ContactCTA";
import { AnimatedHeroWrapper } from "@/components/ui/animated-hero-wrapper";
import { allTestimonials } from "@/content/testimonials";

const filterCategories = [
  { id: "all", label: "All Reviews" },
  { id: "custom-software", label: "Custom Software", slugs: ["custom-software-development", "billing-solutions"] },
  { id: "web-mobile", label: "Web & Mobile Apps", slugs: ["web-development", "mobile-app-development"] },
  { id: "erp-crm", label: "ERP & CRM Systems", slugs: ["erp-solutions", "crm-solutions"] },
  { id: "healthcare-education", label: "Healthcare & Education", slugs: ["school-management", "support-maintenance"] },
  { id: "marketing", label: "Digital Marketing", slugs: ["digital-marketing"] },
];

export default function TestimonialsPage() {
  const [selectedFilter, setSelectedFilter] = useState("all");

  const filteredTestimonials = allTestimonials.filter((item) => {
    if (selectedFilter === "all") return true;
    const category = filterCategories.find((c) => c.id === selectedFilter);
    return category?.slugs?.includes(item.solutionSlug);
  });

  return (
    <main className="flex flex-col min-h-screen">
      {/* 1. Page Header */}
      <AnimatedHeroWrapper className="pt-32 pb-20 bg-[#FAFAFA] border-b border-gray-100">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8 max-w-4xl text-center relative z-10">
          <div className="inline-flex items-center rounded-full border border-teal-500/30 bg-teal-500/10 px-4 py-1.5 text-sm font-semibold text-teal-700 mb-6 tracking-widest uppercase shadow-[0_0_12px_rgba(33,189,188,0.12)]">
            <Sparkles className="w-3.5 h-3.5 mr-1.5" /> Client Reviews & Outcomes
          </div>
          <h1 className="text-4xl sm:text-5xl lg:text-6xl font-black tracking-tight text-gray-900 mb-6 leading-tight">
            Measured by the Outcomes We Deliver
          </h1>
          <p className="text-xl text-gray-600 max-w-2xl mx-auto leading-relaxed font-light mb-10">
            Read verified feedback from founders, CTOs, and operations directors who partnered with Smatal to modernize their core digital systems.
          </p>

          {/* Trust Highlights Strip */}
          <div className="grid grid-cols-1 sm:grid-cols-3 gap-4 max-w-2xl mx-auto pt-6 border-t border-gray-200/60">
            <div className="flex items-center justify-center gap-2 text-sm text-gray-700 font-medium">
              <div className="flex text-amber-400">
                {[...Array(5)].map((_, i) => (
                  <Star key={i} className="w-4 h-4 fill-amber-400" />
                ))}
              </div>
              <span className="font-bold text-gray-900">4.9 / 5</span> Client Rating
            </div>
            <div className="flex items-center justify-center gap-2 text-sm text-gray-700 font-medium">
              <ShieldCheck className="w-4 h-4 text-teal-600" />
              <span className="font-bold text-gray-900">100%</span> Verified Reviews
            </div>
            <div className="flex items-center justify-center gap-2 text-sm text-gray-700 font-medium">
              <Building className="w-4 h-4 text-teal-600" />
              <span className="font-bold text-gray-900">40+</span> Enterprises Scaled
            </div>
          </div>
        </div>
      </AnimatedHeroWrapper>

      {/* 2. Filter Navigation Bar */}
      <section className="py-6 bg-white border-b border-gray-100 sticky top-16 z-30 backdrop-blur-md bg-white/90">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8 max-w-7xl">
          <div className="flex flex-wrap gap-2 justify-center">
            {filterCategories.map((tab) => (
              <button
                key={tab.id}
                onClick={() => setSelectedFilter(tab.id)}
                className={`px-4 py-2 rounded-full text-xs sm:text-sm font-medium transition-all cursor-pointer ${
                  selectedFilter === tab.id
                    ? "bg-slate-900 text-white shadow-sm font-semibold"
                    : "bg-gray-100 text-gray-600 hover:bg-gray-200/80 hover:text-gray-900"
                }`}
              >
                {tab.label}
              </button>
            ))}
          </div>
        </div>
      </section>

      {/* 3. Testimonials Grid */}
      <section className="py-20 bg-slate-50/60">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8 max-w-7xl">
          <motion.div 
            layout 
            className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8"
          >
            <AnimatePresence>
              {filteredTestimonials.map((testimonial, index) => (
                <motion.div
                  layout
                  key={testimonial.id}
                  initial={{ opacity: 0, scale: 0.96 }}
                  animate={{ opacity: 1, scale: 1 }}
                  exit={{ opacity: 0, scale: 0.96 }}
                  transition={{ duration: 0.35, delay: index * 0.04 }}
                  className="bg-white rounded-2xl p-8 border border-gray-200/70 shadow-sm hover:shadow-xl transition-all duration-300 flex flex-col justify-between h-full group"
                >
                  <div>
                    {/* Top Header: Rating + Metric Pill */}
                    <div className="flex items-center justify-between mb-4">
                      <div className="flex gap-1">
                        {[...Array(testimonial.rating)].map((_, i) => (
                          <Star
                            key={i}
                            className="w-4 h-4 fill-amber-400 text-amber-400"
                          />
                        ))}
                      </div>
                      <Badge 
                        variant="secondary" 
                        className="bg-teal-50 text-teal-700 border border-teal-200/50 text-[11px] font-semibold"
                      >
                        ✓ Verified Partner
                      </Badge>
                    </div>

                    {/* Authentic Review Text */}
                    <p className="text-gray-700 text-sm sm:text-base leading-relaxed mb-6 font-normal">
                      "{testimonial.review}"
                    </p>
                  </div>

                  {/* Client Author Information */}
                  <div className="pt-5 border-t border-gray-100 flex items-center gap-3 mt-auto">
                    {/* Organic Monogram Initial Avatar */}
                    <div className="w-11 h-11 rounded-full bg-gradient-to-tr from-slate-800 to-slate-900 text-white font-bold text-sm flex items-center justify-center shadow-xs border border-slate-700 shrink-0 tracking-wider">
                      {testimonial.initials}
                    </div>
                    <div>
                      <h4 className="font-bold text-gray-900 text-sm leading-tight">
                        {testimonial.name}
                      </h4>
                      <p className="text-xs text-gray-500 font-medium mt-0.5">
                        {testimonial.role}, <span className="text-gray-700 font-semibold">{testimonial.company}</span>
                      </p>
                    </div>
                  </div>
                </motion.div>
              ))}
            </AnimatePresence>
          </motion.div>
        </div>
      </section>

      {/* 4. Bottom Consultation CTA */}
      <ContactCTA />
    </main>
  );
}
