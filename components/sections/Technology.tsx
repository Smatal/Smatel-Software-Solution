import { homepageData } from "@/content/homepage";
import { Separator } from "@/components/ui/separator";

export function Technology() {
  const { technology } = homepageData;

  return (
    <section className="py-24 bg-background">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="max-w-3xl mb-16">
          <h2 className="text-3xl lg:text-4xl font-bold tracking-tight mb-4 text-foreground">{technology.heading}</h2>
          <p className="text-lg text-muted-foreground">{technology.description}</p>
        </div>
        <div className="grid md:grid-cols-2 gap-8 lg:gap-12">
          {technology.categories.map((category, index) => (
            <div key={index} className="space-y-4">
              <h3 className="text-lg font-semibold text-foreground">{category.name}</h3>
              <Separator className="bg-border/50" />
              <p className="text-muted-foreground font-mono text-sm leading-relaxed">
                {category.stack}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
