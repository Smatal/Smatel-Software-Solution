import type { SolutionPageData } from "./types";

const data: SolutionPageData = {
  slug: "custom-software-development",
  hero: {
    badge: "Custom Development",
    title: "Software Built Exactly for How You Work",
    description: "Stop forcing your business into off-the-shelf software. We engineer bespoke applications, portals, and SaaS products designed from the ground up around your unique workflows.",
    image: "https://images.unsplash.com/photo-1555066931-4365d14bab8c?q=80&w=2070&auto=format&fit=crop",
    cta: { text: "Start Your Project", href: "/contact" },
  },
  challenges: [
    {
      title: "Generic Software Doesn't Fit",
      description: "Off-the-shelf tools require your team to adapt to the software instead of the other way around, creating workarounds and inefficiency.",
      icon: "puzzle",
    },
    {
      title: "Data Trapped in Silos",
      description: "Multiple disconnected tools mean no single source of truth, forcing manual data entry and reconciliation across platforms.",
      icon: "database",
    },
    {
      title: "Paying for Features You Never Use",
      description: "Enterprise software subscriptions are expensive and bloated with features irrelevant to your business model.",
      icon: "credit-card",
    },
    {
      title: "Can't Scale with Your Growth",
      description: "As your business evolves, rigid software becomes a bottleneck rather than an enabler of growth.",
      icon: "trending-up",
    },
  ],
  solution: {
    heading: "Software That Fits Like a Glove",
    description: "We take time to deeply understand your business before writing a single line of code. Our engineers build custom systems that match your exact processes — from complex enterprise applications to lightweight internal tools. The result is software your team actually wants to use, that grows with your business, and that gives you a competitive edge.",
    highlights: [
      "Full ownership — no vendor lock-in",
      "Built on your exact workflows",
      "Scales as your business grows",
      "Integrates with your existing stack",
    ],
  },
  features: [
    { title: "Custom Dashboards", description: "Role-based dashboards giving each user exactly the data they need.", icon: "layout-dashboard" },
    { title: "API Integrations", description: "Connect with third-party tools, payment gateways, and data providers.", icon: "plug" },
    { title: "Workflow Automation", description: "Automate repetitive tasks and approvals to free up your team.", icon: "zap" },
    { title: "User Management", description: "Granular roles, permissions, and audit trails for enterprise security.", icon: "shield" },
    { title: "Real-Time Analytics", description: "Live reporting and business intelligence built directly into your app.", icon: "bar-chart" },
    { title: "Cloud-Native Architecture", description: "Scalable, reliable infrastructure built for high availability.", icon: "cloud" },
  ],
  benefits: [
    { title: "Save 20+ Hours Per Week", description: "Automate manual processes that drain your team's time and focus.", metric: "20+ hrs/week" },
    { title: "Eliminate Data Entry Errors", description: "Single source of truth removes reconciliation and human error.", metric: "99.9% accuracy" },
    { title: "No More Software Subscriptions", description: "Own your software outright — no recurring per-seat licensing fees.", metric: "Full ownership" },
    { title: "Launch Faster", description: "Agile delivery means you start seeing value within weeks, not months.", metric: "6–12 week sprints" },
    { title: "Competitive Differentiation", description: "Software that competitors can't buy off the shelf becomes a moat.", metric: "Unique advantage" },
  ],
  industries: ["Manufacturing", "Healthcare", "Finance", "Logistics", "Education", "Retail", "Startups", "Professional Services"],
  portfolio: [
    {
      id: "supply-chain-portal",
      name: "Supply Chain Management Portal",
      industry: "Manufacturing",
      image: "https://images.unsplash.com/photo-1586528116311-ad8dd3c8310d?q=80&w=2070&auto=format&fit=crop",
      challenge: "A mid-size manufacturer was managing supplier relationships, purchase orders, and inventory across 3 disconnected spreadsheets with no real-time visibility.",
      solution: "We built a centralised web portal with supplier onboarding, PO management, real-time inventory sync, and automated reorder alerts.",
      result: "40% reduction in procurement errors, 2-day faster order turnaround, full inventory visibility.",
      technologies: ["Next.js", "PostgreSQL", "Node.js", "AWS"],
    },
    {
      id: "insurance-claims-platform",
      name: "Insurance Claims Processing Platform",
      industry: "Finance",
      image: "https://images.unsplash.com/photo-1554224155-6726b3ff858f?q=80&w=2072&auto=format&fit=crop",
      challenge: "Manual claims processing took 7–10 days and was prone to errors, leading to customer dissatisfaction and regulatory risk.",
      solution: "Custom workflow engine with document upload, AI-assisted validation, adjuster assignment, and automated status notifications.",
      result: "Claims processing time reduced from 10 days to 48 hours. Customer satisfaction scores up 35%.",
      technologies: ["React", "Python", "FastAPI", "GCP"],
    },
  ],
  achievements: [
    { value: 80, suffix: "+", label: "Custom Apps Delivered" },
    { value: 40, suffix: "%", label: "Avg. Efficiency Gain" },
    { value: 100, suffix: "%", label: "Client Ownership" },
    { value: 12, suffix: " wk", label: "Avg. First Delivery" },
  ],
  testimonials: [
    {
      name: "Rajesh Kumar",
      role: "Operations Director",
      company: "PrecisionMfg Industries",
      industry: "Manufacturing",
      rating: 5,
      review: "Smatel built us a supply chain portal that replaced 3 different tools. Our procurement team's efficiency has improved dramatically and errors are virtually eliminated.",
      avatar: "https://images.unsplash.com/photo-1560250097-0b93528c311a?q=80&w=256&h=256&auto=format&fit=crop",
    },
    {
      name: "Priya Sharma",
      role: "CTO",
      company: "FinClaim Solutions",
      industry: "Finance",
      rating: 5,
      review: "We went from a 10-day claims cycle to 48 hours. The team truly understood our domain and delivered beyond expectations.",
      avatar: "https://images.unsplash.com/photo-1573497019940-1c28c88b4f3e?q=80&w=256&h=256&auto=format&fit=crop",
    },
  ],
  faqs: [
    { question: "How long does custom software development take?", answer: "Typical projects range from 8–24 weeks depending on complexity. We use agile sprints so you see working software within weeks, not months." },
    { question: "Do we own the source code?", answer: "Yes, 100%. You own all code, IP, and infrastructure from day one. No vendor lock-in." },
    { question: "What technologies do you use?", answer: "We select the best technology for your needs — typically React/Next.js, Node.js, Python, PostgreSQL, and AWS or GCP. We don't force a stack." },
    { question: "Can you integrate with our existing systems?", answer: "Yes. We have experience integrating with CRMs, ERPs, payment gateways, and virtually any system with an API." },
    { question: "What's your pricing model?", answer: "We work on fixed-price milestones for well-scoped projects, and time-and-material for iterative development. We'll recommend the right model after our discovery session." },
    { question: "Do you provide support after launch?", answer: "Yes. We offer tiered support plans covering bug fixes, performance monitoring, security patches, and feature enhancements." },
  ],
  relatedSolutions: ["web-development", "mobile-app-development", "erp-solutions"],
};

export default data;
