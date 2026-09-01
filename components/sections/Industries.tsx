"use client";

import { motion } from "motion/react";
import Link from "next/link";
import { 
  GraduationCap, 
  Activity, 
  ShoppingBag, 
  Factory, 
  Truck, 
  TrendingUp, 
  Hotel, 
  Building2, 
  Rocket, 
  Store,
  ArrowRight
} from "lucide-react";
import { Badge } from "@/components/ui/badge";

interface IndustryItem {
  name: string;
  description: string;
  icon: React.ReactNode;
  slug: string;
}

const industrySectors: IndustryItem[] = [
  {
    name: "Education",
    description: "E-learning, Campus ERP & Student Portals",
    icon: <GraduationCap className="w-6 h-6" />,
    slug: "education"
  },
  {
    name: "Healthcare",
    description: "Telehealth, EHR & Compliant Infrastructure",
    icon: <Activity className="w-6 h-6" />,
    slug: "healthcare"
  },
  {
    name: "Retail",
    description: "Omnichannel POS, E-Commerce & Inventory",
    icon: <ShoppingBag className="w-6 h-6" />,
    slug: "retail"
  },
  {
    name: "Manufacturing",
    description: "Smart Factory, Supply Chain & IoT Systems",
    icon: <Factory className="w-6 h-6" />,
    slug: "manufacturing"
  },
  {
    name: "Logistics",
    description: "Fleet Tracking, Dispatch & Warehousing",
    icon: <Truck className="w-6 h-6" />,
    slug: "logistics"
  },
  {
    name: "Finance",
    description: "Fintech Portals, Analytics & Compliance",
    icon: <TrendingUp className="w-6 h-6" />,
    slug: "finance"
  },
  {
    name: "Hospitality",
    description: "Booking Engines, Property Mgmt & CRM",
    icon: <Hotel className="w-6 h-6" />,
    slug: "hospitality"
  },
  {
    name: "Construction",
    description: "Jobsite Scheduling, Estimating & Bidding",
    icon: <Building2 className="w-6 h-6" />,
    slug: "construction"
  },
  {
    name: "Startups",
    description: "Rapid MVP Prototyping & Scalable Cloud",
    icon: <Rocket className="w-6 h-6" />,
    slug: "startups"
  },
  {
    name: "Small & Medium Businesses",
    description: "Workflow Automation & Custom Software",
    icon: <Store className="w-6 h-6" />,
    slug: "small-medium-businesses"
  },
];

export function Industries() {
  return (
    <section id="industries" className="py-24 bg-gradient-to-b from-white via-slate-50/50 to-white relative overflow-hidden">
      {/* Background ambient lighting */}
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[800px] h-[400px] bg-teal-500/5 blur-[120px] rounded-full pointer-events-none" />
      
      <div className="container mx-auto px-4 sm:px-6 lg:px-8 max-w-7xl relative z-10">
        <div className="text-center max-w-3xl mx-auto mb-16">
          <Badge variant="outline" className="mb-4 border-teal-500/30 bg-teal-500/10 text-teal-700">
            Sector Expertise
          </Badge>
          <h2 className="text-3xl md:text-5xl font-bold tracking-tight text-gray-900 mb-6">
            Industries We Serve
          </h2>
          <p className="text-lg text-gray-600 leading-relaxed">
            Purpose-built software architectures tailored to the operational demands and compliance requirements of your sector.
          </p>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-5 gap-5">
          {industrySectors.map((sector, index) => (
            <motion.div
              key={sector.name}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-40px" }}
              transition={{ delay: index * 0.05, duration: 0.4 }}
            >
              <Link
                href={`/industries/${sector.slug}`}
                className="group relative flex flex-col justify-between h-full p-6 rounded-2xl border border-gray-200/70 bg-white shadow-sm hover:shadow-md hover:border-gray-300 hover:-translate-y-1 transition-all duration-300 overflow-hidden block"
              >
                {/* Subtle top hover accent */}
                <div className="absolute top-0 left-0 right-0 h-[2px] bg-gradient-to-r from-teal-400/30 via-cyan-400/30 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
                
                <div>
                  {/* Organic Icon Tile */}
                  <div className="w-12 h-12 rounded-xl bg-slate-50 border border-slate-100 flex items-center justify-center text-teal-700 mb-4 group-hover:bg-teal-50/80 group-hover:border-teal-200/60 transition-colors duration-300">
                    {sector.icon}
                  </div>
                  
                  <h3 className="text-base font-bold text-gray-900 mb-2 group-hover:text-teal-800 transition-colors">
                    {sector.name}
                  </h3>
                  
                  <p className="text-xs text-gray-500 leading-relaxed font-medium">
                    {sector.description}
                  </p>
                </div>

                <div className="mt-4 pt-3 border-t border-gray-100 flex items-center text-xs font-semibold text-teal-700 opacity-80 group-hover:opacity-100 transition-opacity">
                  Explore Solutions <ArrowRight className="ml-1 w-3 h-3 transition-transform group-hover:translate-x-1" />
                </div>
              </Link>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
