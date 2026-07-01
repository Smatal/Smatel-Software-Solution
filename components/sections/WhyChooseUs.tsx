import { homepageData } from "@/content/homepage";
import { CheckCircle2 } from "lucide-react";

export function WhyChooseUs() {
  const { whyChooseUs } = homepageData;

  return (
    <section className="py-24 bg-background">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="max-w-3xl mb-16">
          <h2 className="text-3xl lg:text-4xl font-bold tracking-tight mb-4 text-foreground">{whyChooseUs.heading}</h2>
          <p className="text-lg text-muted-foreground">{whyChooseUs.description}</p>
        </div>
        <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-8">
          {whyChooseUs.reasons.map((reason, index) => (
            <div key={index} className="flex gap-4">
              <CheckCircle2 className="h-6 w-6 text-primary shrink-0" />
              <div>
                <h3 className="text-lg font-semibold mb-2 text-foreground">{reason.title}</h3>
                <p className="text-muted-foreground leading-relaxed">{reason.description}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
