"use client";

import { useState } from "react";
import Link from "next/link";
import { buttonVariants } from "@/components/ui/button";
import { cn } from "@/lib/utils";
import { Menu, X, ChevronDown, Monitor, Smartphone, Building, Users, Receipt, GraduationCap, TrendingUp, LifeBuoy } from "lucide-react";
import { motion, AnimatePresence } from "motion/react";

const serviceCategories = [
  { name: "Custom Software", href: "/services/custom-software-development", icon: <Monitor className="w-5 h-5" /> },
  { name: "Web Development", href: "/services/web-development", icon: <Monitor className="w-5 h-5" /> },
  { name: "Mobile Apps", href: "/services/mobile-app-development", icon: <Smartphone className="w-5 h-5" /> },
  { name: "ERP Solutions", href: "/services/erp-solutions", icon: <Building className="w-5 h-5" /> },
  { name: "CRM Solutions", href: "/services/crm-solutions", icon: <Users className="w-5 h-5" /> },
  { name: "Billing Systems", href: "/services/billing-solutions", icon: <Receipt className="w-5 h-5" /> },
  { name: "School Management", href: "/services/school-management", icon: <GraduationCap className="w-5 h-5" /> },
  { name: "Digital Marketing", href: "/services/digital-marketing", icon: <TrendingUp className="w-5 h-5" /> },
  { name: "Support & Maintenance", href: "/services/support-maintenance", icon: <LifeBuoy className="w-5 h-5" /> },
];

export function Navbar() {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  return (
    <div className="fixed top-0 left-0 right-0 z-50 pt-4 px-4 pointer-events-none">
      <header className="mx-auto max-w-6xl w-full rounded-2xl border border-white/40 bg-white/80 backdrop-blur-xl shadow-[0_8px_30px_rgb(0,0,0,0.08)] pointer-events-auto transition-all duration-300">
        <div className="px-6 flex h-16 items-center justify-between relative">
          
          {/* Logo */}
          <Link href="/" className="flex items-center gap-2 group z-10 relative">
            <div className="w-6 h-6 rounded-md bg-gradient-to-tr from-indigo-600 to-purple-500 shadow-sm group-hover:shadow-indigo-500/25 group-hover:scale-105 transition-all" />
            <span className="font-black tracking-tight text-xl text-gray-900">SMATAL</span>
          </Link>

          {/* Desktop Links */}
          <nav className="hidden lg:flex items-center gap-1 absolute left-1/2 -translate-x-1/2">
            <Link href="/" className="px-3 py-1.5 text-sm font-semibold text-gray-600 hover:text-indigo-600 rounded-lg hover:bg-indigo-50 transition-colors">
              Home
            </Link>

            {/* Services Dropdown */}
            <div className="relative group px-1">
              <Link href="/services" className="flex items-center px-3 py-1.5 text-sm font-semibold text-gray-600 hover:text-indigo-600 rounded-lg hover:bg-indigo-50 transition-colors cursor-pointer">
                Services <ChevronDown className="ml-1 w-4 h-4 transition-transform group-hover:rotate-180" />
              </Link>
              
              {/* Dropdown Menu */}
              <div className="absolute top-full left-1/2 -translate-x-1/2 pt-2 opacity-0 translate-y-2 pointer-events-none group-hover:opacity-100 group-hover:translate-y-0 group-hover:pointer-events-auto transition-all duration-200 w-[600px]">
                <div className="bg-white rounded-2xl shadow-xl border border-gray-100 p-6 grid grid-cols-2 gap-x-8 gap-y-4 relative overflow-hidden">
                  <div className="absolute top-0 right-0 w-32 h-32 bg-indigo-500/5 rounded-full blur-3xl" />
                  {serviceCategories.map((service) => (
                    <Link 
                      key={service.name} 
                      href={service.href}
                      className="flex items-center gap-3 p-2 rounded-xl hover:bg-gray-50 group/item transition-colors"
                    >
                      <div className="w-10 h-10 rounded-lg bg-indigo-50 flex items-center justify-center text-indigo-600 group-hover/item:bg-indigo-600 group-hover/item:text-white transition-colors">
                        {service.icon}
                      </div>
                      <span className="font-medium text-gray-900 text-sm group-hover/item:text-indigo-600 transition-colors">{service.name}</span>
                    </Link>
                  ))}
                </div>
              </div>
            </div>

            <Link href="/portfolio" className="px-3 py-1.5 text-sm font-semibold text-gray-600 hover:text-indigo-600 rounded-lg hover:bg-indigo-50 transition-colors">
              Portfolio
            </Link>
            <Link href="/testimonials" className="px-3 py-1.5 text-sm font-semibold text-gray-600 hover:text-indigo-600 rounded-lg hover:bg-indigo-50 transition-colors">
              Testimonials
            </Link>
          </nav>

          {/* Desktop CTA */}
          <div className="hidden lg:flex items-center gap-4 z-10">
            <Link href="/contact" className={cn(buttonVariants({ variant: "default", size: "sm", className: "px-6 bg-indigo-600 hover:bg-indigo-500" }))}>
              Start a Project
            </Link>
          </div>

          {/* Mobile Menu Toggle */}
          <button 
            className="lg:hidden p-2 text-gray-600 hover:text-gray-900 focus:outline-none"
            onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
            aria-label="Toggle menu"
          >
            {mobileMenuOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
          </button>
        </div>
      </header>

      {/* Mobile Menu */}
      <AnimatePresence>
        {mobileMenuOpen && (
          <motion.div
            initial={{ opacity: 0, y: -20 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -20 }}
            transition={{ duration: 0.2 }}
            className="absolute top-24 left-4 right-4 bg-white rounded-2xl shadow-xl border border-gray-100 p-6 pointer-events-auto lg:hidden max-h-[calc(100vh-120px)] overflow-y-auto"
          >
            <nav className="flex flex-col gap-4">
              <Link href="/" onClick={() => setMobileMenuOpen(false)} className="text-lg font-bold text-gray-900 border-b border-gray-100 pb-2">
                Home
              </Link>
              
              <div className="py-2">
                <Link href="/services" onClick={() => setMobileMenuOpen(false)} className="text-lg font-bold text-gray-900 mb-4 block">
                  Services
                </Link>
                <div className="grid grid-cols-1 gap-2 pl-4 border-l-2 border-indigo-50">
                  {serviceCategories.map((service) => (
                    <Link 
                      key={service.name} 
                      href={service.href}
                      onClick={() => setMobileMenuOpen(false)}
                      className="text-gray-600 hover:text-indigo-600 py-2 font-medium"
                    >
                      {service.name}
                    </Link>
                  ))}
                </div>
              </div>

              <Link href="/portfolio" onClick={() => setMobileMenuOpen(false)} className="text-lg font-bold text-gray-900 border-b border-gray-100 pb-2 pt-2">
                Portfolio
              </Link>
              
              <Link href="/testimonials" onClick={() => setMobileMenuOpen(false)} className="text-lg font-bold text-gray-900 border-b border-gray-100 pb-2 pt-2">
                Testimonials
              </Link>

              <Link 
                href="/contact" 
                onClick={() => setMobileMenuOpen(false)}
                className={cn(buttonVariants({ size: "lg", className: "w-full mt-4 bg-indigo-600 hover:bg-indigo-500" }))}
              >
                Start a Project
              </Link>
            </nav>
          </motion.div>
        )}
      </AnimatePresence>
    </div>
  );
}
