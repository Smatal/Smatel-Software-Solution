"use client";

import { homepageData } from "@/content/homepage";
import { buttonVariants } from "@/components/ui/button";
import { cn } from "@/lib/utils";
import Link from "next/link";
import { ArrowRight } from "lucide-react";

export function ContactCTA() {
  const { contact } = homepageData;

  return (
    <section className="py-24 bg-gray-900 relative overflow-hidden">
      <div className="absolute inset-0 bg-[url('https://images.unsplash.com/photo-1451187580459-43490279c0fa?q=80&w=2072&auto=format&fit=crop')] bg-cover bg-center opacity-10" />
      <div className="absolute inset-0 bg-gradient-to-t from-gray-900 via-gray-900/80 to-transparent" />
      
      <div className="container mx-auto px-4 sm:px-6 lg:px-8 relative z-10 max-w-4xl text-center">
        <h2 className="text-3xl md:text-5xl font-bold tracking-tight text-white mb-6">
          {contact.heading}
        </h2>
        <p className="text-xl text-gray-300 mb-10 max-w-2xl mx-auto leading-relaxed">
          {contact.description}
        </p>
        <Link 
          href={contact.href}
          className={cn(buttonVariants({ size: "lg", className: "h-14 px-8 text-lg bg-indigo-600 hover:bg-indigo-700 text-white shadow-lg hover:shadow-xl transition-all" }))}
        >
          {contact.ctaText} <ArrowRight className="ml-2 h-5 w-5" />
        </Link>
      </div>
    </section>
  );
}
