export interface Solution {
  slug: string;
  title: string;
  tagline: string;
  shortDescription: string;
  icon: string;
  category: string;
}

export const allSolutions: Solution[] = [
  {
    slug: "custom-software-development",
    title: "Custom Software Development",
    tagline: "Software built exactly for how you work",
    shortDescription: "Bespoke applications, portals, and SaaS products designed around your workflows.",
    icon: "laptop",
    category: "Development",
  },
  {
    slug: "web-development",
    title: "Web Development",
    tagline: "High-performance websites that convert",
    shortDescription: "Corporate sites, e-commerce, and web applications optimised for speed and conversions.",
    icon: "globe",
    category: "Development",
  },
  {
    slug: "mobile-app-development",
    title: "Mobile App Development",
    tagline: "Apps your customers will actually use",
    shortDescription: "Native and cross-platform iOS & Android apps built for engagement and retention.",
    icon: "smartphone",
    category: "Development",
  },
  {
    slug: "erp-solutions",
    title: "ERP Solutions",
    tagline: "One system for your entire business",
    shortDescription: "Integrated ERP covering finance, HR, inventory, procurement, and operations.",
    icon: "building",
    category: "Business Management",
  },
  {
    slug: "crm-solutions",
    title: "CRM Solutions",
    tagline: "Never lose a lead again",
    shortDescription: "Centralised CRM to track leads, manage pipelines, and grow revenue.",
    icon: "users",
    category: "Business Management",
  },
  {
    slug: "billing-solutions",
    title: "Billing Solutions",
    tagline: "Get paid faster, with zero manual effort",
    shortDescription: "Automated invoicing, payment tracking, and financial reporting in one platform.",
    icon: "receipt",
    category: "Business Management",
  },
  {
    slug: "school-management",
    title: "School Management",
    tagline: "Automate every aspect of school administration",
    shortDescription: "Comprehensive school ERP for admissions, attendance, exams, fees, and communication.",
    icon: "graduation-cap",
    category: "Industry Solutions",
  },
  {
    slug: "digital-marketing",
    title: "Digital Marketing",
    tagline: "Reach more customers, grow your brand",
    shortDescription: "SEO, Google Ads, social media, and lead generation strategies that deliver ROI.",
    icon: "trending-up",
    category: "Business Growth",
  },
  {
    slug: "support-maintenance",
    title: "Support & Maintenance",
    tagline: "Keep your systems running at peak performance",
    shortDescription: "24/7 technical support, security updates, performance monitoring, and cloud management.",
    icon: "life-buoy",
    category: "Support",
  },
];

export function getSolutionBySlug(slug: string): Solution | undefined {
  return allSolutions.find((s) => s.slug === slug);
}

export function getRelatedSolutions(currentSlug: string, slugs: string[]): Solution[] {
  return slugs
    .filter((s) => s !== currentSlug)
    .map((s) => allSolutions.find((sol) => sol.slug === s))
    .filter(Boolean) as Solution[];
}

export function generateSolutionStaticParams() {
  return allSolutions.map((s) => ({ slug: s.slug }));
}
