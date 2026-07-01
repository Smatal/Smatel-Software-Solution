import { homepageData } from "@/content/homepage";
import { Card, CardHeader, CardTitle, CardContent } from "@/components/ui/card";
import { ArrowUpRight } from "lucide-react";
import Link from "next/link";

export default function ServicesPage() {
  const { servicesOverview } = homepageData;
  return (
    <div className="flex flex-col min-h-screen">
      {/* Page Header */}
      <section className="py-24 bg-muted/30 border-b border-border/50">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8 text-center max-w-3xl">
          <h1 className="text-4xl md:text-5xl font-bold tracking-tight mb-6 text-foreground">Our Services</h1>
          <p className="text-xl text-muted-foreground">{servicesOverview.description}</p>
        </div>
      </section>
      
      {/* Services Grid */}
      <section className="py-24 bg-background">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {servicesOverview.services.map((service, index) => (
              <Link key={index} href={service.href} className="group">
                <Card className="h-full transition-all duration-200 hover:bg-muted/50 hover:border-primary/50 border-border/50">
                  <CardHeader>
                    <div className="flex items-center justify-between mb-4">
                      <CardTitle className="text-xl font-semibold text-foreground">{service.title}</CardTitle>
                      <ArrowUpRight className="h-5 w-5 text-muted-foreground group-hover:text-primary transition-colors" />
                    </div>
                  </CardHeader>
                  <CardContent>
                    <p className="text-muted-foreground">Comprehensive enterprise solutions for {service.title.toLowerCase()} designed to scale with your business.</p>
                  </CardContent>
                </Card>
              </Link>
            ))}
          </div>
        </div>
      </section>
    </div>
  );
}
