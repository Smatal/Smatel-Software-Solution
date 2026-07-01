import { homepageData } from "@/content/homepage";

export function HowWeWork() {
  const { howWeWork } = homepageData;

  return (
    <section className="py-24 bg-muted/30 border-y border-border/50">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center max-w-3xl mx-auto mb-20">
          <h2 className="text-3xl lg:text-4xl font-bold tracking-tight mb-4 text-foreground">{howWeWork.heading}</h2>
          <p className="text-lg text-muted-foreground">{howWeWork.description}</p>
        </div>
        <div className="relative max-w-4xl mx-auto">
          {/* Vertical line */}
          <div className="absolute left-4 md:left-1/2 top-0 bottom-0 w-px bg-border -translate-x-1/2"></div>
          
          <div className="space-y-12">
            {howWeWork.steps.map((step, index) => (
              <div key={index} className={`relative flex items-center ${index % 2 === 0 ? 'md:flex-row-reverse' : ''}`}>
                <div className="absolute left-4 md:left-1/2 w-4 h-4 rounded-full bg-primary -translate-x-1/2 ring-4 ring-background"></div>
                
                <div className={`ml-12 md:ml-0 md:w-1/2 ${index % 2 === 0 ? 'md:pl-12' : 'md:pr-12 text-left md:text-right'}`}>
                  <div className="inline-block px-3 py-1 mb-2 text-xs font-mono font-medium rounded-full bg-muted text-muted-foreground border border-border/50">
                    Phase 0{index + 1}
                  </div>
                  <h3 className="text-xl font-bold mb-2 text-foreground">{step.title}</h3>
                  <p className="text-muted-foreground">{step.description}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
