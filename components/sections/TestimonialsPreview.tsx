"use client";

import { motion } from "motion/react";
import Link from "next/link";
import { ArrowRight, Star, TrendingUp, ShieldCheck } from "lucide-react";
import { Badge } from "@/components/ui/badge";
import { buttonVariants } from "@/components/ui/button";
import { cn } from "@/lib/utils";
import { getFeaturedTestimonials } from "@/content/testimonials";

export function TestimonialsPreview() {
  const testimonials = getFeaturedTestimonials(6);

  return (
    <section className="py-24 bg-white relative overflow-hidden">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8 max-w-7xl">
        <div className="flex flex-col md:flex-row md:items-end justify-between mb-16 gap-6">
          <div className="max-w-2xl">
            <Badge variant="outline" className="mb-4 border-teal-500/30 bg-teal-500/10 text-teal-700">
              Verified Client Outcomes
            </Badge>
            <h2 className="text-3xl md:text-5xl font-bold tracking-tight text-gray-900 mb-4">
              Don't Just Take Our Word For It
            </h2>
            <p className="text-lg text-gray-600">
              See what business leaders achieve after partnering with Smatal.
            </p>
          </div>
          <div>
            <Link 
              href="/testimonials" 
              className={cn(buttonVariants({ variant: "outline" }), "bg-white group hover:border-teal-300")}
            >
              Read All Verified Reviews 
              <ArrowRight className="ml-2 w-4 h-4 transition-transform group-hover:translate-x-1" />
            </Link>
          </div>
        </div>

        <div className="relative -mx-4 sm:-mx-6 lg:-mx-8 overflow-hidden">
          {/* Edge Gradients for smooth fade out */}
          <div className="absolute inset-y-0 left-0 w-16 md:w-48 bg-gradient-to-r from-white to-transparent z-10 pointer-events-none" />
          <div className="absolute inset-y-0 right-0 w-16 md:w-48 bg-gradient-to-l from-white to-transparent z-10 pointer-events-none" />

          <motion.div 
            className="flex gap-6 md:gap-8 w-max py-4 px-8"
            animate={{ x: ["0%", "-50%"] }}
            transition={{ ease: "linear", duration: 45, repeat: Infinity }}
          >
            {[...testimonials, ...testimonials].map((testimonial, index) => (
              <div
                key={`${testimonial.id}-${index}`}
                className="bg-white rounded-2xl p-8 relative border border-gray-200/70 shadow-sm flex flex-col justify-between h-full shrink-0 w-[340px] md:w-[420px] hover:shadow-xl hover:border-gray-300 transition-all duration-300"
              >
                <div>
                  <div className="flex items-center justify-between mb-4">
                    <div className="flex gap-1">
                      {[...Array(5)].map((_, i) => (
                        <Star 
                          key={i} 
                          className="w-4 h-4 fill-amber-400 text-amber-400" 
                        />
                      ))}
                    </div>
                    <span className="inline-flex items-center text-[10px] font-semibold text-teal-700 bg-teal-50 px-2 py-0.5 rounded-full border border-teal-100">
                      ✓ Verified Partner
                    </span>
                  </div>

                  <p className="text-gray-700 text-sm leading-relaxed mb-6 font-normal">
                    "{testimonial.review}"
                  </p>
                </div>
                
                <div className="flex items-center gap-3.5 mt-auto pt-5 border-t border-gray-100">
                  <div className="w-10 h-10 rounded-full bg-slate-900 text-white font-bold text-xs flex items-center justify-center shrink-0 border border-slate-700 tracking-wider">
                    {testimonial.initials}
                  </div>
                  <div>
                    <h4 className="font-bold text-gray-900 text-sm">{testimonial.name}</h4>
                    <p className="text-xs text-gray-500 font-medium">
                      {testimonial.role}, <span className="text-gray-700 font-semibold">{testimonial.company}</span>
                    </p>
                  </div>
                </div>
              </div>
            ))}
          </motion.div>
        </div>
      </div>
    </section>
  );
}
