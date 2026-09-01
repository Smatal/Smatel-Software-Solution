"use client";

import { motion } from "motion/react";
import Link from "next/link";
import { ArrowRight, ArrowUpRight } from "lucide-react";
import { Badge } from "@/components/ui/badge";
import { homepageData } from "@/content/homepage";

interface RelatedSolutionsProps {
  relatedSlugs: string[];
}

export function RelatedSolutions({ relatedSlugs }: RelatedSolutionsProps) {
  const { solutionCategories } = homepageData;
  if (!relatedSlugs || relatedSlugs.length === 0) return null;

  const related = solutionCategories.categories.filter(cat => relatedSlugs.includes(cat.slug));

  if (related.length === 0) return null;

  return (
    <section className="py-24 bg-white border-t border-gray-100">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8 max-w-7xl">
        <div className="flex flex-col md:flex-row md:items-end justify-between mb-12 gap-6">
          <div>
            <Badge variant="outline" className="mb-4">Ecosystem</Badge>
            <h2 className="text-3xl md:text-4xl font-bold tracking-tight text-gray-900 mb-2">
              Explore Related Solutions
            </h2>
          </div>
          <div>
            <Link 
              href="/services" 
              className="text-teal-700 hover:text-teal-900 font-semibold flex items-center group"
            >
              View All Services 
              <ArrowRight className="ml-2 w-4 h-4 transition-transform group-hover:translate-x-1" />
            </Link>
          </div>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {related.map((solution, index) => (
            <Link href={`/services/${solution.slug}`} key={solution.slug}>
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.1, duration: 0.5 }}
                className="group p-8 rounded-2xl border border-gray-100 bg-gray-50 hover:bg-white hover:border-teal-200 hover:shadow-lg transition-all duration-300 h-full flex flex-col"
              >
                <div className="flex justify-between items-start mb-6">
                  <span className="text-4xl">{solution.icon}</span>
                  <div className="w-8 h-8 rounded-full bg-white border border-gray-100 flex items-center justify-center text-gray-400 group-hover:text-teal-700 group-hover:border-teal-200 transition-colors">
                    <ArrowUpRight className="w-4 h-4" />
                  </div>
                </div>
                
                <h3 className="text-xl font-bold text-gray-900 mb-2 group-hover:text-teal-700 transition-colors">{solution.title}</h3>
                <p className="text-gray-600 text-sm leading-relaxed mb-6 flex-1">
                  {solution.tagline}
                </p>
                
                <div className="text-sm font-semibold text-teal-700 group-hover:text-teal-900 mt-auto flex items-center">
                  Learn more <ArrowRight className="ml-1 w-4 h-4 transition-transform group-hover:translate-x-1" />
                </div>
              </motion.div>
            </Link>
          ))}
        </div>
      </div>
    </section>
  );
}
