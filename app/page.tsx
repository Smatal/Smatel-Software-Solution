import { Hero } from "@/components/sections/Hero";
import { StatsSection } from "@/components/sections/StatsSection";
import { SolutionCategories } from "@/components/sections/SolutionCategories";
import { Industries } from "@/components/sections/Industries";
import { Process } from "@/components/sections/Process";
import { TestimonialsPreview } from "@/components/sections/TestimonialsPreview";
import { ContactCTA } from "@/components/sections/ContactCTA";

export default function Home() {
  return (
    <div className="flex flex-col min-h-screen">
      <Hero />
      <StatsSection />
      <SolutionCategories />
      <Industries />
      <Process />
      <TestimonialsPreview />
      <ContactCTA />
    </div>
  );
}
