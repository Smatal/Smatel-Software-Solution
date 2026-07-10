import type { SolutionPageData } from "./types";

const data: SolutionPageData = {
  slug: "digital-marketing",
  hero: {
    badge: "Digital Marketing",
    title: "Reach More Customers, Grow Your Brand",
    description: "While you're building great products, your competitors are ranking above you online and capturing the customers that should be yours. We change that.",
    image: "https://images.unsplash.com/photo-1432888622747-4eb9a8f5a70d?q=80&w=2074&auto=format&fit=crop",
    cta: { text: "Get a Free Audit", href: "/contact" },
  },
  challenges: [
    {
      title: "Invisible to Search Engines",
      description: "Your ideal customers search for your services daily, but your website doesn't appear in the results — and your competitors take those leads instead.",
      icon: "search-x",
    },
    {
      title: "Ad Spend with No ROI",
      description: "You're running Google or Facebook ads but the return is unclear, the targeting is off, and you're burning budget without consistent results.",
      icon: "trending-down",
    },
    {
      title: "No Consistent Social Presence",
      description: "Inconsistent posting, generic content, and no strategy mean your social media presence isn't building brand authority or generating leads.",
      icon: "instagram",
    },
    {
      title: "No Lead Generation System",
      description: "Your marketing activities are disconnected — each campaign is a one-off with no systematic approach to capturing and nurturing leads.",
      icon: "filter-x",
    },
  ],
  solution: {
    heading: "Data-Driven Marketing That Delivers Measurable ROI",
    description: "We combine technical SEO, targeted paid advertising, and social media strategy into an integrated digital marketing system designed to generate consistent, trackable leads for your business. We're not an agency that sends monthly reports — we're a growth partner that ties every rupee spent to revenue generated.",
    highlights: [
      "Full-funnel strategy — from visibility to conversion",
      "Data-driven campaigns with transparent ROI reporting",
      "SEO, Google Ads, Meta Ads, and LinkedIn under one roof",
      "Monthly strategy sessions and live dashboards",
    ],
  },
  features: [
    { title: "Search Engine Optimisation", description: "Technical SEO, content strategy, backlink building, and local SEO for organic growth.", icon: "search" },
    { title: "Google Ads Management", description: "Search, Display, Shopping, and YouTube campaigns optimised for maximum ROI.", icon: "google" },
    { title: "Social Media Marketing", description: "Content creation, scheduling, community management, and growth strategy.", icon: "share-2" },
    { title: "Meta & LinkedIn Ads", description: "Targeted B2B and B2C ad campaigns with precise audience segmentation.", icon: "target" },
    { title: "Lead Generation", description: "Landing pages, lead magnets, and nurture sequences that convert traffic into customers.", icon: "filter" },
    { title: "Analytics & Reporting", description: "Live dashboards showing traffic, leads, cost-per-acquisition, and revenue attribution.", icon: "bar-chart" },
  ],
  benefits: [
    { title: "More Organic Traffic", description: "SEO improvements drive a steady stream of high-intent visitors without ongoing ad spend.", metric: "150–300% traffic growth" },
    { title: "Lower Cost Per Lead", description: "Targeted campaigns and optimised landing pages reduce your cost of customer acquisition.", metric: "40% lower CPL" },
    { title: "Measurable ROI", description: "Every campaign is tracked end-to-end — you know exactly what your marketing spend generates.", metric: "Full attribution" },
    { title: "Stronger Brand Presence", description: "Consistent, high-quality content builds authority and recognition in your target market.", metric: "Brand authority" },
    { title: "Predictable Lead Flow", description: "A systematic marketing engine delivers consistent leads month after month, not just campaign spikes.", metric: "Consistent pipeline" },
  ],
  industries: ["Professional Services", "Healthcare", "Education", "Retail & E-commerce", "Real Estate", "Hospitality", "Manufacturing", "Startups"],
  portfolio: [
    {
      id: "healthcare-seo",
      name: "Healthcare Group SEO & Google Ads",
      industry: "Healthcare",
      image: "https://images.unsplash.com/photo-1576091160399-112ba8d25d1d?q=80&w=2070&auto=format&fit=crop",
      challenge: "A multi-specialty hospital had no online presence and was spending heavily on print and TV ads with no measurable patient acquisition from those channels.",
      solution: "Full digital marketing overhaul: technical SEO, local SEO for all 8 specialties, Google Search Ads targeting high-intent medical queries, and a lead tracking system tied to actual consultations.",
      result: "Organic traffic grew 280% in 6 months. Google Ads cost-per-consultation dropped from ₹850 to ₹220. Monthly online appointments increased from 40 to 380.",
      technologies: ["Google Ads", "GA4", "SEMrush", "Hotjar", "Search Console"],
    },
    {
      id: "ecommerce-growth",
      name: "E-Commerce Brand Growth Campaign",
      industry: "Retail",
      image: "https://images.unsplash.com/photo-1607082348824-0a96f2a4b9da?q=80&w=2070&auto=format&fit=crop",
      challenge: "An online fashion brand was entirely dependent on Instagram organic posts. Sales were stagnant and they had no paid acquisition strategy.",
      solution: "Launched an integrated campaign: Meta Shopping Ads with product catalogue, Google Shopping campaigns, and Instagram Reels content series. Built a Klaviyo email nurture sequence for abandoned carts.",
      result: "ROAS of 4.2× on Meta Ads. Revenue increased 210% month-over-month within 90 days. Email recovery sequences generating 18% of total revenue.",
      technologies: ["Meta Ads", "Google Shopping", "Klaviyo", "Shopify Analytics"],
    },
  ],
  achievements: [
    { value: 280, suffix: "%", label: "Avg. Traffic Growth" },
    { value: 40, suffix: "+", label: "Brands Grown" },
    { value: 4.2, suffix: "×", label: "Avg. Ad ROAS" },
    { value: 40, suffix: "%", label: "Avg. CPL Reduction" },
  ],
  testimonials: [
    {
      name: "Dr. Suresh Natarajan",
      role: "CEO",
      company: "MedCity Hospitals",
      industry: "Healthcare",
      rating: 5,
      review: "We went from 40 online appointments per month to 380 in 6 months. The ROI clarity that Smatel provides is what separates them from every other agency — we know exactly what every rupee generates.",
      avatar: "https://images.unsplash.com/photo-1612349317150-e413f6a5b16d?q=80&w=256&h=256&auto=format&fit=crop",
    },
    {
      name: "Meera Kapoor",
      role: "Founder",
      company: "StyleBox Fashion",
      industry: "Retail",
      rating: 5,
      review: "Our Instagram organic strategy had plateaued. Smatel launched a proper paid acquisition strategy and within 3 months our monthly revenue had tripled. The ROAS numbers are consistently strong.",
      avatar: "https://images.unsplash.com/photo-1494790108377-be9c29b29330?q=80&w=256&h=256&auto=format&fit=crop",
    },
  ],
  faqs: [
    { question: "How long before we see results from SEO?", answer: "SEO results typically become visible in 3–6 months as Google indexes and ranks your optimised content. Paid campaigns show results within the first 2–4 weeks." },
    { question: "Do you manage both SEO and paid ads?", answer: "Yes. We offer integrated digital marketing where SEO, Google Ads, and social media work together as a coordinated strategy — not separate siloed efforts." },
    { question: "What's the minimum marketing budget you work with?", answer: "For paid advertising, we recommend a minimum ad spend of ₹30,000–50,000/month to generate meaningful data. SEO and content services have no minimum." },
    { question: "How do we know what's working?", answer: "You get a live Google Data Studio dashboard showing traffic, leads, cost-per-acquisition, and revenue attribution updated daily. Monthly strategy calls included." },
    { question: "Do you create content (blogs, social posts, ads)?", answer: "Yes. Our team handles copywriting, graphic design, video scripts, ad creatives, and blog content as part of our managed marketing packages." },
    { question: "Can you work with our existing website?", answer: "Yes. We optimise existing websites for SEO and conversion. If significant improvements are needed, we'll recommend targeted updates." },
  ],
  relatedSolutions: ["web-development", "crm-solutions", "custom-software-development"],
};

export default data;
