import { homepageData } from "@/content/homepage";
import { Badge } from "@/components/ui/badge";
import { buttonVariants } from "@/components/ui/button";
import { cn } from "@/lib/utils";
import Link from "next/link";
import { ArrowRight } from "lucide-react";

export function Hero() {
  const { hero } = homepageData;

  return (
    <section className="relative overflow-hidden py-24 lg:py-32 bg-background">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="max-w-4xl mx-auto text-center">
          <Badge variant="secondary" className="mb-6">
            {hero.badge}
          </Badge>
          <h1 className="text-4xl sm:text-5xl lg:text-7xl font-extrabold tracking-tight mb-8 text-foreground">
            {hero.heading}
          </h1>
          <p className="text-lg sm:text-xl text-muted-foreground mb-10 max-w-2xl mx-auto leading-relaxed">
            {hero.description}
          </p>
          <div className="flex flex-col sm:flex-row justify-center gap-4">
            <Link 
              href={hero.primaryCta.href}
              className={cn(buttonVariants({ size: "lg", className: "h-12 px-8 font-medium" }))}
            >
              {hero.primaryCta.text} <ArrowRight className="ml-2 h-4 w-4" />
            </Link>
            <Link 
              href={hero.secondaryCta.href}
              className={cn(buttonVariants({ variant: "outline", size: "lg", className: "h-12 px-8 font-medium" }))}
            >
              {hero.secondaryCta.text}
            </Link>
          </div>
        </div>
      </div>
    </section>
  );
}
