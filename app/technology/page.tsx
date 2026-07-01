import { homepageData } from "@/content/homepage";
import { Separator } from "@/components/ui/separator";

export default function TechnologyPage() {
  const { technology } = homepageData;
  return (
    <div className="flex flex-col min-h-screen">
      <section className="py-24 bg-muted/30 border-b border-border/50">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8 text-center max-w-3xl">
          <h1 className="text-4xl md:text-5xl font-bold tracking-tight mb-6 text-foreground">Enterprise Tech Stack</h1>
          <p className="text-xl text-muted-foreground">{technology.description}</p>
        </div>
      </section>
      
      <section className="py-24 bg-background">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8 max-w-4xl">
          <div className="space-y-16">
            {technology.categories.map((category, index) => (
              <div key={index} className="space-y-6">
                <h3 className="text-2xl font-bold text-foreground">{category.name}</h3>
                <Separator className="bg-border/50" />
                <div className="grid sm:grid-cols-2 gap-4">
                  {category.stack.split(", ").map((tech, i) => (
                    <div key={i} className="p-4 rounded-lg border border-border/50 bg-muted/20 font-mono text-foreground flex items-center">
                      <div className="w-2 h-2 rounded-full bg-primary mr-3" />
                      {tech}
                    </div>
                  ))}
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>
    </div>
  );
}
