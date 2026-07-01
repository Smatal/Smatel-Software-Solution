import { homepageData } from "@/content/homepage";

export function WhatWeDo() {
  const { whatWeDo } = homepageData;

  return (
    <section className="py-24 bg-muted/30 border-y border-border/50">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="max-w-3xl mb-16">
          <h2 className="text-3xl lg:text-4xl font-bold tracking-tight mb-4 text-foreground">{whatWeDo.heading}</h2>
          <p className="text-lg text-muted-foreground">{whatWeDo.description}</p>
        </div>
        <div className="grid md:grid-cols-3 gap-8">
          {whatWeDo.pillars.map((pillar, index) => (
            <div key={index} className="p-8 rounded-2xl bg-background border border-border/50 shadow-sm">
              <h3 className="text-xl font-semibold mb-3 text-foreground">{pillar.title}</h3>
              <p className="text-muted-foreground leading-relaxed">{pillar.description}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
