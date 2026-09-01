import { siteConfig } from "@/config/site";
import { AnimatedHeroWrapper } from "@/components/ui/animated-hero-wrapper";
import { ContactCTA } from "@/components/sections/ContactCTA";
import Link from "next/link";

export default function TermsOfServicePage() {
  const lastUpdated = "July 10, 2026"; // Or dynamically generate

  return (
    <div className="flex flex-col min-h-screen">
      <AnimatedHeroWrapper className="pt-32 pb-20 bg-[#FAFAFA] border-b border-gray-100">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8 text-center max-w-3xl relative z-10">
          <div className="inline-flex items-center rounded-full border border-teal-500/30 bg-teal-500/10 px-4 py-1.5 text-sm font-semibold text-teal-700 mb-6 tracking-widest uppercase shadow-[0_0_12px_rgba(33,189,188,0.12)]">
            Legal
          </div>
          <h1 className="text-4xl md:text-5xl font-bold tracking-tight mb-6 text-gray-900 leading-tight">
            Terms of Service
          </h1>
          <p className="text-xl text-gray-600 leading-relaxed">
            Last updated: {lastUpdated}
          </p>
        </div>
      </AnimatedHeroWrapper>

      <section className="py-24 bg-white">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8 max-w-4xl">
          <div className="prose prose-lg prose-teal max-w-none text-gray-600">
            <p className="lead text-xl text-gray-900 font-medium mb-8">
              Welcome to {siteConfig.name}! These terms and conditions outline the rules and regulations for the use of our Website and Services.
            </p>
            
            <h2 className="text-2xl font-bold text-gray-900 mt-12 mb-6">1. Agreement to Terms</h2>
            <p className="mb-6">
              By accessing this website, we assume you accept these terms and conditions. Do not continue to use {siteConfig.name} if you do not agree to take all of the terms and conditions stated on this page.
            </p>

            <h2 className="text-2xl font-bold text-gray-900 mt-12 mb-6">2. Intellectual Property Rights</h2>
            <p className="mb-6">
              Other than the content you own, under these Terms, {siteConfig.name} and/or its licensors own all the intellectual property rights and materials contained in this Website. You are granted limited license only for purposes of viewing the material contained on this Website.
            </p>

            <h2 className="text-2xl font-bold text-gray-900 mt-12 mb-6">3. Restrictions</h2>
            <p className="mb-4">You are specifically restricted from all of the following:</p>
            <ul className="list-disc pl-6 space-y-2 mb-8">
              <li>Publishing any Website material in any other media.</li>
              <li>Selling, sublicensing and/or otherwise commercializing any Website material.</li>
              <li>Publicly performing and/or showing any Website material.</li>
              <li>Using this Website in any way that is or may be damaging to this Website.</li>
              <li>Using this Website in any way that impacts user access to this Website.</li>
              <li>Using this Website contrary to applicable laws and regulations.</li>
            </ul>

            <h2 className="text-2xl font-bold text-gray-900 mt-12 mb-6">4. Limitation of Liability</h2>
            <p className="mb-6">
              In no event shall {siteConfig.name}, nor any of its officers, directors, and employees, be held liable for anything arising out of or in any way connected with your use of this Website whether such liability is under contract. {siteConfig.name}, including its officers, directors, and employees shall not be held liable for any indirect, consequential, or special liability arising out of or in any way related to your use of this Website.
            </p>

            <h2 className="text-2xl font-bold text-gray-900 mt-12 mb-6">5. Indemnification</h2>
            <p className="mb-6">
              You hereby indemnify to the fullest extent {siteConfig.name} from and against any and/or all liabilities, costs, demands, causes of action, damages and expenses arising in any way related to your breach of any of the provisions of these Terms.
            </p>

            <h2 className="text-2xl font-bold text-gray-900 mt-12 mb-6">6. Changes to Terms</h2>
            <p className="mb-6">
              {siteConfig.name} is permitted to revise these Terms at any time as it sees fit, and by using this Website you are expected to review these Terms on a regular basis.
            </p>

            <h2 className="text-2xl font-bold text-gray-900 mt-12 mb-6">7. Contact Us</h2>
            <p className="mb-6">
              If you have any questions about these Terms, please <Link href="/contact" className="text-teal-700 hover:text-teal-900 font-medium">contact us</Link>.
            </p>
          </div>
        </div>
      </section>

      <ContactCTA />
    </div>
  );
}
