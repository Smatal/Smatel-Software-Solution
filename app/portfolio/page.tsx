import { homepageData } from "@/content/homepage";
import Link from "next/link";
import { ArrowRight } from "lucide-react";

export default function PortfolioPage() {
  const { portfolio } = homepageData;
  return (
    <div className="flex flex-col min-h-screen">
      <section className="py-24 bg-muted/30 border-b border-border/50">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8 text-center max-w-3xl">
          <h1 className="text-4xl md:text-5xl font-bold tracking-tight mb-6 text-foreground">Our Portfolio</h1>
          <p className="text-xl text-muted-foreground">{portfolio.description}</p>
        </div>
      </section>
      
      <section className="py-24 bg-background">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid md:grid-cols-2 gap-12">
            {portfolio.projects.map((project, index) => (
              <Link key={index} href={project.href} className="group block">
                <div className="aspect-video rounded-xl bg-muted/30 border border-border/50 mb-6 overflow-hidden relative">
                  <div className="absolute inset-0 group-hover:bg-muted/50 transition-colors" />
                </div>
                <div className="flex flex-col">
                  <span className="text-sm font-medium text-primary mb-2">{project.category}</span>
                  <h3 className="text-2xl font-semibold text-foreground group-hover:text-primary transition-colors flex items-center">
                    {project.title}
                    <ArrowRight className="ml-2 h-5 w-5 opacity-0 group-hover:opacity-100 transition-opacity transform duration-200" />
                  </h3>
                  <p className="mt-2 text-muted-foreground">A comprehensive case study detailing our approach, architecture, and business impact.</p>
                </div>
              </Link>
            ))}
          </div>
        </div>
      </section>
    </div>
  );
}
