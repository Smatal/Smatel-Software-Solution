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
        <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {whyChooseUs.reasons.map((reason, index) => {
            const icons = [
              <div key="ic1" className="w-10 h-10 rounded-full bg-indigo-100 text-indigo-600 flex items-center justify-center shrink-0"><CheckCircle2 className="h-5 w-5" /></div>,
              <div key="ic2" className="w-10 h-10 rounded-full bg-blue-100 text-blue-600 flex items-center justify-center shrink-0"><svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M12 22s8-4 8-10V5l-8-3-8 3v7c0 6 8 10 8 10"></path></svg></div>,
              <div key="ic3" className="w-10 h-10 rounded-full bg-purple-100 text-purple-600 flex items-center justify-center shrink-0"><svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><circle cx="12" cy="12" r="10"></circle><polyline points="12 6 12 12 16 14"></polyline></svg></div>
            ];
            return (
              <div key={index} className="bg-white rounded-2xl border border-border/50 p-6 shadow-sm hover:shadow-md transition-shadow">
                <div className="flex flex-col gap-4">
                  {icons[index % icons.length]}
                  <div>
                    <h3 className="text-xl font-bold mb-2 text-foreground">{reason.title}</h3>
                    <p className="text-muted-foreground leading-relaxed text-sm">{reason.description}</p>
                  </div>
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
