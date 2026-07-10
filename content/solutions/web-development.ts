import type { SolutionPageData } from "./types";

const data: SolutionPageData = {
  slug: "web-development",
  hero: {
    badge: "Web Development",
    title: "High-Performance Websites That Convert",
    description: "Your website is your most powerful sales tool. We build fast, beautiful, and SEO-optimised websites and web applications that turn visitors into customers.",
    image: "https://images.unsplash.com/photo-1467232004584-a241de8bcf5d?q=80&w=2069&auto=format&fit=crop",
    cta: { text: "Build Your Website", href: "/contact" },
  },
  challenges: [
    {
      title: "Poor First Impressions",
      description: "An outdated or slow website signals low credibility to potential customers before they've read a single word.",
      icon: "eye-off",
    },
    {
      title: "Low Organic Traffic",
      description: "Without technical SEO built into the foundation, your site remains invisible to search engines and your target audience.",
      icon: "search",
    },
    {
      title: "Low Conversion Rates",
      description: "Visitors land on your site but don't contact you — unclear CTAs, poor UX, and slow load times are silently killing conversions.",
      icon: "bar-chart-2",
    },
    {
      title: "Not Mobile-Friendly",
      description: "Over 60% of web traffic is mobile. A non-responsive site loses more than half your potential customers immediately.",
      icon: "smartphone",
    },
  ],
  solution: {
    heading: "Websites That Work as Hard as You Do",
    description: "We build websites that combine stunning design with technical performance. Every project starts with your business goals — lead generation, sales, brand authority — and we engineer backward from there. Fast load times, mobile-first layouts, SEO-ready structure, and conversion-optimised UX come standard on every project.",
    highlights: [
      "Core Web Vitals optimised (LCP < 2.5s)",
      "Mobile-first, fully responsive",
      "Technical SEO built into the foundation",
      "Conversion-optimised design patterns",
    ],
  },
  features: [
    { title: "Responsive Design", description: "Flawless experience across all devices — desktop, tablet, and mobile.", icon: "monitor" },
    { title: "SEO Architecture", description: "Semantic HTML, structured data, sitemaps, and meta optimisation from day one.", icon: "search" },
    { title: "CMS Integration", description: "Easy content management so your team can update the site without a developer.", icon: "edit" },
    { title: "Performance Optimisation", description: "Image compression, lazy loading, CDN delivery, and code splitting.", icon: "zap" },
    { title: "Analytics & Tracking", description: "GA4, conversion tracking, heatmaps, and A/B testing setup.", icon: "bar-chart" },
    { title: "Security & Compliance", description: "SSL, GDPR compliance, firewall protection, and regular security audits.", icon: "shield" },
  ],
  benefits: [
    { title: "More Qualified Leads", description: "Conversion-optimised pages and clear CTAs drive more enquiries from your ideal customers.", metric: "2–5× more leads" },
    { title: "Better Search Rankings", description: "Technical SEO and fast load times help you rank higher on Google organically.", metric: "Higher rankings" },
    { title: "Stronger Brand Authority", description: "A professional, premium website instantly signals trust and credibility.", metric: "5× trust increase" },
    { title: "Lower Bounce Rates", description: "Faster load times and better UX keep visitors engaged longer.", metric: "< 40% bounce rate" },
    { title: "Mobile Revenue", description: "Capture the 60%+ of traffic coming from mobile devices that you're currently losing.", metric: "60%+ more reach" },
  ],
  industries: ["Professional Services", "Healthcare", "Education", "Retail", "Hospitality", "Startups", "Manufacturing", "Finance"],
  portfolio: [
    {
      id: "healthcare-clinic-website",
      name: "Multi-Clinic Healthcare Group Website",
      industry: "Healthcare",
      image: "https://images.unsplash.com/photo-1576091160399-112ba8d25d1d?q=80&w=2070&auto=format&fit=crop",
      challenge: "A healthcare group with 8 clinics had an outdated website that wasn't mobile-friendly and generated almost no online appointment bookings.",
      solution: "Built a fully responsive, SEO-optimised multi-location website with online appointment booking, doctor profiles, and patient resources.",
      result: "Online bookings increased by 300% in the first 3 months. Organic traffic grew 180% within 6 months.",
      technologies: ["Next.js", "Sanity CMS", "Tailwind CSS", "Vercel"],
    },
    {
      id: "law-firm-website",
      name: "Corporate Law Firm Website",
      industry: "Professional Services",
      image: "https://images.unsplash.com/photo-1589829545856-d10d557cf95f?q=80&w=2070&auto=format&fit=crop",
      challenge: "A law firm with strong reputation had no online presence. They relied entirely on referrals and were missing younger, digitally-native clients.",
      solution: "Designed and built a premium corporate website with practice area pages, attorney profiles, a case study blog, and a consultation booking flow.",
      result: "First page Google rankings for 12 local search terms. 45 consultation requests in the first month.",
      technologies: ["Next.js", "WordPress headless", "AWS"],
    },
  ],
  achievements: [
    { value: 60, suffix: "+", label: "Websites Delivered" },
    { value: 98, suffix: "%", label: "Avg. PageSpeed Score" },
    { value: 180, suffix: "%", label: "Avg. Traffic Growth" },
    { value: 3, suffix: "×", label: "Avg. Lead Increase" },
  ],
  testimonials: [
    {
      name: "Dr. Anita Menon",
      role: "Managing Director",
      company: "CareFirst Clinics",
      industry: "Healthcare",
      rating: 5,
      review: "Our new website transformed our patient acquisition. Online bookings tripled in just 3 months and we now rank on the first page for all our key search terms.",
      avatar: "https://images.unsplash.com/photo-1559839734-2b71ea197ec2?q=80&w=256&h=256&auto=format&fit=crop",
    },
    {
      name: "Vikram Nair",
      role: "Partner",
      company: "Nair & Associates Law",
      industry: "Professional Services",
      rating: 5,
      review: "Smatel understood that our website needed to communicate trust. The result was beyond our expectations — elegant, fast, and converting from week one.",
      avatar: "https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?q=80&w=256&h=256&auto=format&fit=crop",
    },
  ],
  faqs: [
    { question: "How long does it take to build a website?", answer: "A typical corporate website takes 4–8 weeks. E-commerce and complex web applications take 8–16 weeks." },
    { question: "Will I be able to update the site myself?", answer: "Yes. We integrate a user-friendly CMS (like Sanity or WordPress headless) so your team can edit content without a developer." },
    { question: "Do you handle hosting?", answer: "Yes. We set up and manage hosting on Vercel, AWS, or GCP. We can also deploy to your existing infrastructure." },
    { question: "Is SEO included?", answer: "Technical SEO (site structure, meta tags, schema markup, sitemaps, Core Web Vitals) is included in every project. Ongoing content SEO is available as an add-on." },
    { question: "Can you redesign our existing website?", answer: "Absolutely. We can redesign with content migration, performance upgrades, and SEO preservation." },
    { question: "What happens after launch?", answer: "We offer ongoing support plans covering security updates, content changes, performance monitoring, and feature additions." },
  ],
  relatedSolutions: ["custom-software-development", "digital-marketing", "mobile-app-development"],
};

export default data;
