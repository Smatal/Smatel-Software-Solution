import { homepageData } from "@/content/homepage";
import Link from "next/link";
import { Card, CardTitle } from "@/components/ui/card";

export function Industries() {
  const { industries } = homepageData;

  return (
    <section className="py-24 bg-muted/30 border-y border-border/50">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="max-w-3xl mb-16">
          <h2 className="text-3xl lg:text-4xl font-bold tracking-tight mb-4 text-foreground">{industries.heading}</h2>
          <p className="text-lg text-muted-foreground">{industries.description}</p>
        </div>
        <div className="grid grid-cols-2 md:grid-cols-3 gap-4 lg:gap-6">
          {industries.sectors.map((sector, index) => (
            <Link key={index} href={sector.href} className="group">
              <Card className="h-full flex items-center justify-center p-6 text-center transition-all duration-200 hover:bg-background hover:border-primary/50 border-border/50">
                <CardTitle className="text-base md:text-lg font-medium text-foreground group-hover:text-primary transition-colors">
                  {sector.name}
                </CardTitle>
              </Card>
            </Link>
          ))}
        </div>
      </div>
    </section>
  );
}
