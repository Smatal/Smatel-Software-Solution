import { homepageData } from "@/content/homepage";
import { Card, CardHeader, CardTitle } from "@/components/ui/card";
import Link from "next/link";
import { ArrowUpRight } from "lucide-react";

export function ServicesOverview() {
  const { servicesOverview } = homepageData;

  return (
    <section className="py-24 bg-background">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="max-w-3xl mb-16">
          <h2 className="text-3xl lg:text-4xl font-bold tracking-tight mb-4 text-foreground">{servicesOverview.heading}</h2>
          <p className="text-lg text-muted-foreground">{servicesOverview.description}</p>
        </div>
        <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {servicesOverview.services.map((service, index) => (
            <Link key={index} href={service.href} className="group">
              <Card className="h-full transition-all duration-200 hover:bg-muted/50 hover:border-primary/50 border-border/50">
                <CardHeader className="flex flex-row items-center justify-between p-6">
                  <CardTitle className="text-lg font-medium text-foreground">{service.title}</CardTitle>
                  <ArrowUpRight className="h-5 w-5 text-muted-foreground group-hover:text-primary transition-colors" />
                </CardHeader>
              </Card>
            </Link>
          ))}
        </div>
      </div>
    </section>
  );
}
