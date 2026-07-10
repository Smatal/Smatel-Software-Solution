"use client";

import { homepageData } from "@/content/homepage";
import { buttonVariants } from "@/components/ui/button";
import { cn } from "@/lib/utils";
import Link from "next/link";
import { ArrowRight } from "lucide-react";
import { AnimatedDarkWrapper } from "@/components/ui/animated-dark-wrapper";

export function ContactCTA() {
  const { contact } = homepageData;

  return (
    <section className="bg-gray-900 border-t border-gray-800">
      <AnimatedDarkWrapper className="py-24 relative overflow-hidden">
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
      </AnimatedDarkWrapper>
    </section>
  );
}
