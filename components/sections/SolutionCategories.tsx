"use client";

import { homepageData } from "@/content/homepage";
import { motion } from "motion/react";
import Link from "next/link";
import { ArrowRight, Laptop, Building2, Factory, TrendingUp, LifeBuoy, Globe, Smartphone, Users, Receipt, GraduationCap } from "lucide-react";
import { Card, CardContent, CardDescription, CardHeader, CardTitle, CardFooter } from "@/components/ui/card";

const iconMap: Record<string, React.ReactNode> = {
  laptop: <Laptop className="w-8 h-8 text-indigo-600" />,
  building: <Building2 className="w-8 h-8 text-indigo-600" />,
  factory: <Factory className="w-8 h-8 text-indigo-600" />,
  "trending-up": <TrendingUp className="w-8 h-8 text-indigo-600" />,
  "life-buoy": <LifeBuoy className="w-8 h-8 text-indigo-600" />,
  globe: <Globe className="w-8 h-8 text-indigo-600" />,
  smartphone: <Smartphone className="w-8 h-8 text-indigo-600" />,
  users: <Users className="w-8 h-8 text-indigo-600" />,
  receipt: <Receipt className="w-8 h-8 text-indigo-600" />,
  "graduation-cap": <GraduationCap className="w-8 h-8 text-indigo-600" />,
};

export function SolutionCategories() {
  const { solutionCategories } = homepageData;

  return (
    <section id="solutions" className="py-24 bg-white">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8 max-w-7xl">
        <div className="text-center max-w-3xl mx-auto mb-16">
          <h2 className="text-3xl md:text-5xl font-bold tracking-tight text-gray-900 mb-6">
            {solutionCategories.heading}
          </h2>
          <p className="text-lg text-gray-600">
            {solutionCategories.description}
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {solutionCategories.categories.map((category, index) => (
            <motion.div
              key={category.slug}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-50px" }}
              transition={{ delay: index * 0.1, duration: 0.5 }}
              className="h-full"
            >
              <Card className="h-full flex flex-col border-gray-100 shadow-sm hover:shadow-xl hover:-translate-y-1 transition-all duration-300 group">
                <CardHeader>
                  <div className="w-14 h-14 rounded-xl bg-indigo-50 flex items-center justify-center mb-4 group-hover:bg-indigo-600 group-hover:text-white transition-colors duration-300">
                    <div className="group-hover:text-white [&>svg]:transition-colors [&>svg]:duration-300">
                      {iconMap[category.icon] || <Laptop className="w-8 h-8 text-indigo-600" />}
                    </div>
                  </div>
                  <CardTitle className="text-xl mb-1">{category.title}</CardTitle>
                  <p className="text-sm font-medium text-indigo-600">{category.tagline}</p>
                </CardHeader>
                <CardContent className="flex-1">
                  <div className="mb-4">
                    <span className="text-xs font-semibold text-gray-500 uppercase tracking-wider">The Problem</span>
                    <CardDescription className="text-sm text-gray-700 leading-relaxed mt-1">
                      {category.businessProblem}
                    </CardDescription>
                  </div>
                </CardContent>
                <CardFooter className="pt-0 pb-6 border-t border-gray-50 mt-auto px-6">
                  <Link 
                    href={`/services/${category.slug}`}
                    className="flex items-center text-sm font-semibold text-indigo-600 hover:text-indigo-800 transition-colors pt-4 w-full"
                  >
                    Learn More <ArrowRight className="ml-1 w-4 h-4 transition-transform group-hover:translate-x-1" />
                  </Link>
                </CardFooter>
              </Card>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
