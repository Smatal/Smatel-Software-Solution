import { homepageData } from "@/content/homepage";
import Link from "next/link";
import { ArrowRight } from "lucide-react";
import { Card } from "@/components/ui/card";

export function Portfolio() {
  const { portfolio } = homepageData;

  return (
    <section className="py-24 bg-background border-y border-border/50">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="max-w-3xl mb-16">
          <h2 className="text-3xl lg:text-4xl font-bold tracking-tight mb-4 text-foreground">{portfolio.heading}</h2>
          <p className="text-lg text-muted-foreground">{portfolio.description}</p>
        </div>
        <div className="grid md:grid-cols-3 gap-8">
          {portfolio.projects.map((project, index) => (
            <Link key={index} href={project.href} className="group block h-full">
              <Card className="h-full p-6 flex flex-col justify-between">
                <div>
                  <div className="aspect-[4/3] rounded-xl bg-muted/20 border border-border/50 mb-6 overflow-hidden relative">
                    {/* Placeholder for project image */}
                    <div className="absolute inset-0 bg-muted/20 group-hover:bg-muted/40 transition-colors" />
                  </div>
                  <span className="text-sm font-medium text-primary mb-2 block">{project.category}</span>
                </div>
                <h3 className="text-xl font-semibold text-foreground group-hover:text-primary transition-colors flex items-center justify-between mt-auto pt-4">
                  {project.title}
                  <ArrowRight className="h-5 w-5 opacity-0 group-hover:opacity-100 transition-opacity -translate-x-2 group-hover:translate-x-0 transform duration-200" />
                </h3>
              </Card>
            </Link>
          ))}
        </div>
      </div>
    </section>
  );
}
