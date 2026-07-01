import { homepageData } from "@/content/homepage";
import { HowWeWork } from "@/components/sections/HowWeWork";
import { WhyChooseUs } from "@/components/sections/WhyChooseUs";

export default function AboutPage() {
  const { about } = homepageData;
  return (
    <div className="flex flex-col min-h-screen">
      <section className="py-24 lg:py-32 bg-muted/30 border-b border-border/50">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8 text-center max-w-4xl">
          <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold tracking-tight mb-6 text-foreground">{about.heading}</h1>
          <p className="text-xl text-muted-foreground leading-relaxed">{about.description}</p>
        </div>
      </section>
      <WhyChooseUs />
      <HowWeWork />
    </div>
  );
}
