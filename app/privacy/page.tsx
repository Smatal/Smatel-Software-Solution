import { siteConfig } from "@/config/site";
import { AnimatedHeroWrapper } from "@/components/ui/animated-hero-wrapper";
import { ContactCTA } from "@/components/sections/ContactCTA";

export default function PrivacyPolicyPage() {
  const lastUpdated = "July 10, 2026"; // Or dynamically generate

  return (
    <div className="flex flex-col min-h-screen">
      <AnimatedHeroWrapper className="pt-32 pb-20 bg-[#FAFAFA] border-b border-gray-100">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8 text-center max-w-3xl relative z-10">
          <div className="inline-flex items-center rounded-full border border-teal-500/30 bg-teal-500/10 px-4 py-1.5 text-sm font-semibold text-teal-700 mb-6 tracking-widest uppercase shadow-[0_0_12px_rgba(33,189,188,0.12)]">
            Legal
          </div>
          <h1 className="text-4xl md:text-5xl font-bold tracking-tight mb-6 text-gray-900 leading-tight">
            Privacy Policy
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
              At {siteConfig.name}, we are committed to protecting your personal information and your right to privacy.
            </p>
            
            <h2 className="text-2xl font-bold text-gray-900 mt-12 mb-6">1. Information We Collect</h2>
            <p className="mb-6">
              We collect personal information that you voluntarily provide to us when you express an interest in obtaining information about us or our products and services, when you participate in activities on the Website, or otherwise when you contact us.
            </p>
            <ul className="list-disc pl-6 space-y-2 mb-8">
              <li><strong>Personal Information Provided by You.</strong> We collect names; phone numbers; email addresses; mailing addresses; job titles; contact preferences; contact or authentication data; billing addresses; and other similar information.</li>
              <li><strong>Information Automatically Collected.</strong> We automatically collect certain information when you visit, use or navigate the Website. This information does not reveal your specific identity (like your name or contact information) but may include device and usage information, such as your IP address, browser and device characteristics, operating system, language preferences, referring URLs, device name, country, location, information about how and when you use our Website and other technical information.</li>
            </ul>

            <h2 className="text-2xl font-bold text-gray-900 mt-12 mb-6">2. How We Use Your Information</h2>
            <p className="mb-6">
              We process your information for purposes based on legitimate business interests, the fulfillment of our contract with you, compliance with our legal obligations, and/or your consent. We use the information we collect or receive:
            </p>
            <ul className="list-disc pl-6 space-y-2 mb-8">
              <li>To facilitate account creation and logon process.</li>
              <li>To send you marketing and promotional communications.</li>
              <li>To fulfill and manage your orders, payments, and requests.</li>
              <li>To deliver and facilitate delivery of services to the user.</li>
              <li>To respond to user inquiries/offer support to users.</li>
            </ul>

            <h2 className="text-2xl font-bold text-gray-900 mt-12 mb-6">3. Will Your Information Be Shared With Anyone?</h2>
            <p className="mb-6">
              We only share information with your consent, to comply with laws, to provide you with services, to protect your rights, or to fulfill business obligations.
            </p>

            <h2 className="text-2xl font-bold text-gray-900 mt-12 mb-6">4. Contact Us</h2>
            <p className="mb-6">
              If you have questions or comments about this notice, you may email us at info@smatal.in or by post to:
            </p>
            <address className="not-italic bg-gray-50 p-6 rounded-xl border border-gray-100 leading-relaxed text-gray-700">
              {siteConfig.name} ({siteConfig.parentCompany})<br />
              108, 109, Hameedia Complex, 2nd Floor,<br />
              Triplicane High Road, Triplicane,<br />
              Chennai - 600005, Tamil Nadu, India
            </address>
          </div>
        </div>
      </section>

      <ContactCTA />
    </div>
  );
}
