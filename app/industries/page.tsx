import { homepageData } from "@/content/homepage";
import { Card, CardHeader, CardTitle, CardContent } from "@/components/ui/card";
import Link from "next/link";

export default function IndustriesPage() {
  const { industries } = homepageData;
  return (
    <div className="flex flex-col min-h-screen">
      <section className="py-24 bg-muted/30 border-b border-border/50">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8 text-center max-w-3xl">
          <h1 className="text-4xl md:text-5xl font-bold tracking-tight mb-6 text-foreground">Industries We Serve</h1>
          <p className="text-xl text-muted-foreground">{industries.description}</p>
        </div>
      </section>
      
      <section className="py-24 bg-background">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {industries.sectors.map((sector, index) => (
              <Link key={index} href={sector.href} className="group">
                <Card className="h-full transition-all duration-200 hover:bg-muted/50 hover:border-primary/50 border-border/50">
                  <CardHeader>
                    <CardTitle className="text-xl font-semibold text-foreground group-hover:text-primary transition-colors">{sector.name}</CardTitle>
                  </CardHeader>
                  <CardContent>
                    <p className="text-muted-foreground">Specialized software solutions and domain expertise tailored for the {sector.name.toLowerCase()} sector.</p>
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
