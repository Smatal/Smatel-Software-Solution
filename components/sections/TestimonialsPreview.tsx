"use client";

import { motion } from "motion/react";
import Image from "next/image";
import Link from "next/link";
import { ArrowRight, Quote, Star } from "lucide-react";
import { Badge } from "@/components/ui/badge";
import { buttonVariants } from "@/components/ui/button";
import { cn } from "@/lib/utils";
import { getFeaturedTestimonials } from "@/content/testimonials";

export function TestimonialsPreview() {
  const testimonials = getFeaturedTestimonials(3);

  return (
    <section className="py-24 bg-white">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8 max-w-7xl">
        <div className="flex flex-col md:flex-row md:items-end justify-between mb-16 gap-6">
          <div className="max-w-2xl">
            <Badge variant="outline" className="mb-4">Client Success</Badge>
            <h2 className="text-3xl md:text-5xl font-bold tracking-tight text-gray-900 mb-4">
              Don't Just Take Our Word For It
            </h2>
            <p className="text-lg text-gray-600">
              See what our partners say about the impact of our solutions.
            </p>
          </div>
          <div>
            <Link 
              href="/testimonials" 
              className={cn(buttonVariants({ variant: "outline" }), "bg-white group")}
            >
              Read All Reviews 
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
            transition={{ ease: "linear", duration: 40, repeat: Infinity }}
          >
            {[...testimonials, ...testimonials].map((testimonial, index) => (
              <div
                key={`${testimonial.id}-${index}`}
                className="bg-gray-50 rounded-2xl p-8 relative border border-gray-100 shadow-sm flex flex-col h-full shrink-0 w-[320px] md:w-[420px] hover:shadow-md transition-shadow"
              >
                <Quote className="absolute top-8 right-8 w-10 h-10 text-indigo-100 rotate-180" />
                
                <div className="flex gap-1 mb-6">
                  {[...Array(5)].map((_, i) => (
                    <Star 
                      key={i} 
                      className={`w-4 h-4 ${i < testimonial.rating ? 'fill-yellow-400 text-yellow-400' : 'fill-gray-200 text-gray-200'}`} 
                    />
                  ))}
                </div>
                
                <p className="text-gray-700 text-base leading-relaxed mb-8 relative z-10 font-medium flex-1">
                  "{testimonial.review}"
                </p>
                
                <div className="flex items-center gap-4 mt-auto pt-6 border-t border-gray-200/60">
                  <div className="relative w-12 h-12 rounded-full overflow-hidden shrink-0">
                    <Image
                      src={testimonial.avatar}
                      alt={testimonial.name}
                      fill
                      className="object-cover"
                      sizes="48px"
                    />
                  </div>
                  <div>
                    <h4 className="font-bold text-gray-900 text-sm">{testimonial.name}</h4>
                    <p className="text-xs text-gray-600">{testimonial.role}, {testimonial.company}</p>
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
