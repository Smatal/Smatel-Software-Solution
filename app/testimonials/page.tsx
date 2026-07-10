"use client";

import { motion } from "motion/react";
import Image from "next/image";
import Link from "next/link";
import { ArrowRight, Quote, Star } from "lucide-react";
import { Badge } from "@/components/ui/badge";
import { ContactCTA } from "@/components/sections/ContactCTA";
import { allTestimonials } from "@/content/testimonials";

export default function TestimonialsPage() {
  return (
    <main className="flex flex-col min-h-screen">
      <section className="pt-32 pb-20 bg-[#FAFAFA] border-b border-gray-100">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8 max-w-7xl text-center">
          <Badge variant="outline" className="mb-6">Client Success</Badge>
          <h1 className="text-4xl md:text-6xl font-bold tracking-tight text-gray-900 mb-6">
            Hear From Our Partners
          </h1>
          <p className="text-xl text-gray-600 max-w-2xl mx-auto">
            We measure our success by the outcomes we deliver. Here's what business leaders say about working with Smatel.
          </p>
        </div>
      </section>

      <section className="py-24 bg-white">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8 max-w-7xl">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {allTestimonials.map((testimonial, index) => (
              <motion.div
                key={testimonial.id}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, margin: "-50px" }}
                transition={{ delay: (index % 3) * 0.1, duration: 0.5 }}
                className="bg-gray-50 rounded-2xl p-8 relative border border-gray-100 shadow-sm flex flex-col h-full hover:shadow-md transition-shadow"
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
                
                <div className="mt-auto">
                  <Link 
                    href={`/services/${testimonial.solutionSlug}`}
                    className="inline-block text-xs font-semibold text-indigo-600 bg-indigo-50 px-2 py-1 rounded mb-6 hover:bg-indigo-100 transition-colors"
                  >
                    {testimonial.solutionLabel}
                  </Link>

                  <div className="flex items-center gap-4 pt-6 border-t border-gray-200/60">
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
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      <ContactCTA />
    </main>
  );
}
