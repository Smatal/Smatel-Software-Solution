"use client";

import { motion } from "motion/react";
import Image from "next/image";
import Link from "next/link";
import { ArrowRight, Quote, Star } from "lucide-react";
import { Badge } from "@/components/ui/badge";
import { buttonVariants } from "@/components/ui/button";
import { cn } from "@/lib/utils";
import type { Testimonial } from "@/content/solutions/types";

interface SolutionTestimonialsProps {
  testimonials: Testimonial[];
}

export function SolutionTestimonials({ testimonials }: SolutionTestimonialsProps) {
  if (!testimonials || testimonials.length === 0) return null;

  return (
    <section className="py-24 bg-white border-b border-gray-100">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8 max-w-7xl">
        <div className="flex flex-col md:flex-row md:items-end justify-between mb-16 gap-6">
          <div className="max-w-2xl">
            <Badge variant="outline" className="mb-4">Client Success</Badge>
            <h2 className="text-3xl md:text-5xl font-bold tracking-tight text-gray-900 mb-4">
              Don't Just Take Our Word For It
            </h2>
            <p className="text-lg text-gray-600">
              Hear directly from the business leaders who have transformed their operations with us.
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

        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          {testimonials.map((testimonial, index) => (
            <motion.div
              key={testimonial.name}
              initial={{ opacity: 0, scale: 0.95 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true, margin: "-50px" }}
              transition={{ delay: index * 0.1, duration: 0.5 }}
              className="bg-gray-50 rounded-2xl p-8 relative border border-gray-100 shadow-sm"
            >
              <Quote className="absolute top-8 right-8 w-12 h-12 text-teal-100 rotate-180" />
              
              <div className="flex gap-1 mb-6">
                {[...Array(5)].map((_, i) => (
                  <Star 
                    key={i} 
                    className={`w-5 h-5 ${i < testimonial.rating ? 'fill-yellow-400 text-yellow-400' : 'fill-gray-200 text-gray-200'}`} 
                  />
                ))}
              </div>
              
              <p className="text-gray-700 text-lg leading-relaxed mb-8 relative z-10 font-medium">
                "{testimonial.review}"
              </p>
              
              <div className="flex items-center gap-4 mt-auto">
                <div className="relative w-14 h-14 rounded-full overflow-hidden border-2 border-white shadow-sm shrink-0">
                  <Image
                    src={testimonial.avatar}
                    alt={testimonial.name}
                    fill
                    className="object-cover"
                    sizes="56px"
                  />
                </div>
                <div>
                  <h4 className="font-bold text-gray-900">{testimonial.name}</h4>
                  <p className="text-sm text-gray-600">{testimonial.role}, {testimonial.company}</p>
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
