import { homepageData } from "@/content/homepage";
import { buttonVariants } from "@/components/ui/button";
import { cn } from "@/lib/utils";
import Link from "next/link";
import { ArrowRight } from "lucide-react";

export function ContactCTA() {
  const { contact } = homepageData;

  return (
    <section className="py-24 bg-primary text-primary-foreground border-y border-border/50">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="max-w-4xl mx-auto text-center">
          <h2 className="text-3xl lg:text-5xl font-bold tracking-tight mb-6">{contact.heading}</h2>
          <p className="text-lg md:text-xl opacity-90 mb-10 leading-relaxed">
            {contact.description}
          </p>
          <Link 
            href={contact.href}
            className={cn(buttonVariants({ size: "lg", variant: "secondary", className: "h-14 px-10 text-lg font-semibold" }))}
          >
            {contact.ctaText} <ArrowRight className="ml-2 h-5 w-5" />
          </Link>
        </div>
      </div>
    </section>
  );
}
