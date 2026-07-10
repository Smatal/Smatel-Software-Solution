import { notFound } from "next/navigation";
import { getSolutionPageData, validSlugs } from "@/content/solutions/loader";
import { SolutionHero } from "@/components/solutions/SolutionHero";
import { BusinessChallenges } from "@/components/solutions/BusinessChallenges";
import { OurSolution } from "@/components/solutions/OurSolution";
import { SolutionFeatures } from "@/components/solutions/SolutionFeatures";
import { SolutionBenefits } from "@/components/solutions/SolutionBenefits";
import { SolutionIndustries } from "@/components/solutions/SolutionIndustries";
import { SolutionPortfolio } from "@/components/solutions/SolutionPortfolio";
import { SolutionAchievements } from "@/components/solutions/SolutionAchievements";
import { SolutionTestimonials } from "@/components/solutions/SolutionTestimonials";
import { SolutionFAQ } from "@/components/solutions/SolutionFAQ";
import { SolutionCTA } from "@/components/solutions/SolutionCTA";
import { RelatedSolutions } from "@/components/solutions/RelatedSolutions";

export async function generateStaticParams() {
  return validSlugs.map((slug) => ({ slug }));
}

export default async function ServiceDetailPage({ params }: { params: Promise<{ slug: string }> }) {
  const slug = (await params).slug;
  const data = await getSolutionPageData(slug);

  if (!data) {
    notFound();
  }

  return (
    <main className="flex flex-col min-h-screen">
      <SolutionHero data={data.hero} badge={data.hero.badge} />
      
      {data.challenges && data.challenges.length > 0 && (
        <BusinessChallenges challenges={data.challenges} />
      )}
      
      {data.solution && (
        <OurSolution data={data.solution} />
      )}
      
      {data.features && data.features.length > 0 && (
        <SolutionFeatures features={data.features} />
      )}
      
      {data.benefits && data.benefits.length > 0 && (
        <SolutionBenefits benefits={data.benefits} />
      )}
      
      {data.industries && data.industries.length > 0 && (
        <SolutionIndustries industries={data.industries} />
      )}
      
      {data.portfolio && data.portfolio.length > 0 && (
        <SolutionPortfolio portfolio={data.portfolio} />
      )}
      
      {data.achievements && data.achievements.length > 0 && (
        <SolutionAchievements achievements={data.achievements} />
      )}
      
      {data.testimonials && data.testimonials.length > 0 && (
        <SolutionTestimonials testimonials={data.testimonials} />
      )}
      
      {data.faqs && data.faqs.length > 0 && (
        <SolutionFAQ faqs={data.faqs} />
      )}
      
      {data.relatedSolutions && data.relatedSolutions.length > 0 && (
        <RelatedSolutions relatedSlugs={data.relatedSolutions} />
      )}
      
      <SolutionCTA />
    </main>
  );
}
