import type { SolutionPageData } from "./types";

const data: SolutionPageData = {
  slug: "crm-solutions",
  hero: {
    badge: "CRM Solutions",
    title: "Never Lose a Lead Again",
    description: "Centralise your customer data, track every interaction, and close more deals with a CRM built around your sales process — not the other way around.",
    image: "https://images.unsplash.com/photo-1552664730-d307ca884978?q=80&w=2070&auto=format&fit=crop",
    cta: { text: "Get a CRM Demo", href: "/contact" },
  },
  challenges: [
    {
      title: "Leads Falling Through the Cracks",
      description: "Without a centralised system, leads get lost in email threads, WhatsApp, and sticky notes — and customers feel ignored.",
      icon: "alert-triangle",
    },
    {
      title: "No Sales Visibility",
      description: "Your sales manager has no idea which deals are at risk, which reps are performing, or how much revenue is in the pipeline.",
      icon: "eye-off",
    },
    {
      title: "Inconsistent Customer Experience",
      description: "When customer history isn't visible to every team member, every interaction starts from scratch — frustrating customers and slowing resolution.",
      icon: "refresh-cw",
    },
    {
      title: "Manual Follow-Up Processes",
      description: "Your team manually tracks follow-up dates in spreadsheets, missing opportunities and wasting time on admin instead of selling.",
      icon: "clock",
    },
  ],
  solution: {
    heading: "Your Entire Customer Relationship in One Place",
    description: "Our CRM solutions give your team a 360° view of every customer — from the first touchpoint to ongoing support. We build CRMs configured to your sales process, with automation that eliminates manual follow-ups, dashboards that give management real pipeline visibility, and integrations that connect your CRM to your website, email, and communication tools.",
    highlights: [
      "360° customer profile — every interaction captured",
      "Automated follow-ups and drip sequences",
      "Real-time pipeline and revenue forecasting",
      "Integrates with email, WhatsApp, and website",
    ],
  },
  features: [
    { title: "Lead Management", description: "Capture, assign, and track leads from all sources in one centralised pipeline.", icon: "filter" },
    { title: "Sales Pipeline", description: "Visual Kanban pipeline with deal stages, probabilities, and revenue forecasting.", icon: "git-merge" },
    { title: "Automated Follow-Ups", description: "Schedule and automate follow-up emails, SMS, and task reminders.", icon: "send" },
    { title: "Customer 360° View", description: "Complete history of every call, email, meeting, and purchase for each customer.", icon: "user-check" },
    { title: "Reports & Analytics", description: "Sales rep performance, conversion rates, pipeline health, and revenue forecasts.", icon: "bar-chart" },
    { title: "Team Collaboration", description: "Internal notes, @mentions, task assignments, and shared deal management.", icon: "users" },
  ],
  benefits: [
    { title: "Increase Conversion Rates", description: "Structured follow-ups and pipeline visibility help reps close more deals faster.", metric: "20–35% more conversions" },
    { title: "No More Lost Leads", description: "Every lead captured from any source and assigned automatically to the right rep.", metric: "0 leads lost" },
    { title: "Better Customer Retention", description: "Proactive service based on customer history reduces churn significantly.", metric: "Higher retention" },
    { title: "Sales Forecast Accuracy", description: "Pipeline data gives management accurate revenue projections month-over-month.", metric: "90%+ accuracy" },
    { title: "Faster Onboarding", description: "New sales reps get up to speed in days, not months, with full customer context.", metric: "Faster ramp-up" },
  ],
  industries: ["Professional Services", "Real Estate", "Healthcare", "Finance", "Retail", "Manufacturing", "Education", "Startups"],
  portfolio: [
    {
      id: "real-estate-crm",
      name: "Real Estate Sales CRM",
      industry: "Real Estate",
      image: "https://images.unsplash.com/photo-1560518883-ce09059eeffa?q=80&w=2073&auto=format&fit=crop",
      challenge: "A real estate developer was managing 500+ leads across Excel sheets and WhatsApp groups. Follow-ups were missed, and there was no visibility into which projects were selling.",
      solution: "Built a custom CRM with lead capture from website/ads, automatic assignment, property matching, follow-up automation, and a sales director dashboard with real-time pipeline data.",
      result: "Lead response time dropped from 4 hours to 8 minutes. Conversion rate improved by 28%. Sales manager now has real-time visibility into a ₹50 Cr+ pipeline.",
      technologies: ["React", "Node.js", "PostgreSQL", "Twilio", "AWS"],
    },
    {
      id: "insurance-crm",
      name: "Insurance Agency CRM",
      industry: "Finance",
      image: "https://images.unsplash.com/photo-1454165804606-c3d57bc86b40?q=80&w=2070&auto=format&fit=crop",
      challenge: "An insurance agency with 50 agents had no system to track policy renewals, customer follow-ups, or agent performance, leading to high lapse rates.",
      solution: "Deployed a CRM with policy lifecycle tracking, automated renewal reminders, agent performance dashboards, and a customer portal for policy documents.",
      result: "Policy renewal rate improved from 68% to 87%. Agent productivity increased 40%. Customer complaints about missed renewals reduced to near zero.",
      technologies: ["React", "Python", "PostgreSQL", "SendGrid", "GCP"],
    },
  ],
  achievements: [
    { value: 40, suffix: "+", label: "CRM Systems Deployed" },
    { value: 28, suffix: "%", label: "Avg. Conversion Lift" },
    { value: 0, suffix: "", label: "Leads Lost Post-CRM" },
    { value: 90, suffix: "%+", label: "Forecast Accuracy" },
  ],
  testimonials: [
    {
      name: "Rahul Joshi",
      role: "Sales Director",
      company: "PrimeRealty Developers",
      industry: "Real Estate",
      rating: 5,
      review: "We went from Excel chaos to a CRM that gives me real-time visibility into a ₹50 Cr pipeline. Lead response time is now under 10 minutes. The conversion improvement alone paid for the CRM in one month.",
      avatar: "https://images.unsplash.com/photo-1519085360753-af0119f7cbe7?q=80&w=256&h=256&auto=format&fit=crop",
    },
    {
      name: "Deepa Krishnan",
      role: "Branch Manager",
      company: "SecureLife Insurance",
      industry: "Finance",
      rating: 5,
      review: "Policy renewal was our biggest pain point. Smatel's CRM automated the entire renewal follow-up sequence and our lapse rate dropped dramatically within the first quarter.",
      avatar: "https://images.unsplash.com/photo-1544005313-94ddf0286df2?q=80&w=256&h=256&auto=format&fit=crop",
    },
  ],
  faqs: [
    { question: "Do you build custom CRM or configure existing ones like Salesforce?", answer: "We build fully custom CRMs tailored to your sales process. This gives you better fit, lower long-term cost, and full ownership — no per-seat licensing forever." },
    { question: "Can the CRM capture leads from our website and ads?", answer: "Yes. We integrate with your website forms, Facebook Lead Ads, Google Lead Forms, WhatsApp Business, and any other lead source automatically." },
    { question: "How long does CRM implementation take?", answer: "A standard CRM takes 8–12 weeks to build, configure, and launch including data migration from spreadsheets or existing systems." },
    { question: "Can we import our existing customer data?", answer: "Yes. We handle full data migration from Excel, Google Sheets, or other CRM platforms. Historical data, contacts, and deal history are all migrated." },
    { question: "Does the CRM work on mobile?", answer: "Yes. All our CRMs are fully responsive. We can also build a dedicated mobile app for field sales teams if needed." },
    { question: "Can it integrate with our billing or ERP system?", answer: "Absolutely. Our CRM solutions are designed to connect with your existing tools — including our own ERP and Billing solutions for a fully integrated business system." },
  ],
  relatedSolutions: ["erp-solutions", "billing-solutions", "digital-marketing"],
};

export default data;
