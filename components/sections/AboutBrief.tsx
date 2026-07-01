import { homepageData } from "@/content/homepage";
import { buttonVariants } from "@/components/ui/button";
import { cn } from "@/lib/utils";
import Link from "next/link";

export function AboutBrief() {
  const { about } = homepageData;

  return (
    <section className="py-24 bg-background">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="max-w-4xl mx-auto text-center">
          <h2 className="text-3xl lg:text-4xl font-bold tracking-tight mb-6 text-foreground">{about.heading}</h2>
          <p className="text-lg md:text-xl text-muted-foreground mb-10 leading-relaxed">
            {about.description}
          </p>
          <Link 
            href={about.href}
            className={cn(buttonVariants({ variant: "outline", size: "lg", className: "h-12 px-8 font-medium" }))}
          >
            {about.ctaText}
          </Link>
        </div>
      </div>
    </section>
  );
}
