import { Hero } from "@/components/sections/Hero";
import { WhatWeDo } from "@/components/sections/WhatWeDo";
import { ServicesOverview } from "@/components/sections/ServicesOverview";
import { HowWeWork } from "@/components/sections/HowWeWork";

export default function Home() {
  return (
    <div className="flex flex-col min-h-screen">
      <Hero />
      <WhatWeDo />
      <ServicesOverview />
      <HowWeWork />
    </div>
  );
}
