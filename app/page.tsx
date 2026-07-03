import { Hero } from "@/components/sections/Hero";
import { WhatWeDo } from "@/components/sections/WhatWeDo";
import { ServicesOverview } from "@/components/sections/ServicesOverview";
import { HowWeWork } from "@/components/sections/HowWeWork";
import { WhyChooseUs } from "@/components/sections/WhyChooseUs";
import { Industries } from "@/components/sections/Industries";
import { AboutBrief } from "@/components/sections/AboutBrief";
import { ContactCTA } from "@/components/sections/ContactCTA";

export default function Home() {
  return (
    <div className="flex flex-col min-h-screen">
      <Hero />
      <WhatWeDo />
      <ServicesOverview />
      <HowWeWork />
      <WhyChooseUs />
      <Industries />
      <AboutBrief />
      <ContactCTA />
    </div>
  );
}
