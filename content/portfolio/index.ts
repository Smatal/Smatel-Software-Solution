export interface PortfolioProject {
  id: string;
  title: string;
  client: string;
  industry: string;
  category: string;
  image: string;
  tags: string[];
  overview: string;
  challenge: string;
  solution: string;
  result: string;
  technologies: string[];
  testimonial?: {
    quote: string;
    name: string;
    role: string;
  };
}

export const portfolioProjects: PortfolioProject[] = [
  {
    id: "supply-chain-portal",
    title: "Supply Chain Management Portal",
    client: "PrecisionMfg Industries",
    industry: "Manufacturing",
    category: "Custom Software",
    image: "https://images.unsplash.com/photo-1586528116311-ad8dd3c8310d?q=80&w=2070&auto=format&fit=crop",
    tags: ["Custom Software", "Web Apps"],
    overview: "A centralised web portal for managing supplier relationships, purchase orders, and real-time inventory across multiple warehouses.",
    challenge: "Managing supplier relationships, purchase orders, and inventory across 3 disconnected spreadsheets with no real-time visibility or audit trail.",
    solution: "Centralised web portal with supplier onboarding, PO management, real-time inventory sync, and automated reorder alerts.",
    result: "40% reduction in procurement errors, 2-day faster order turnaround, full inventory visibility across 4 warehouses.",
    technologies: ["Next.js", "PostgreSQL", "Node.js", "AWS"],
    testimonial: {
      quote: "Our procurement team's efficiency has improved dramatically and errors are virtually eliminated.",
      name: "Rajesh Kumar",
      role: "Operations Director, PrecisionMfg",
    },
  },
  {
    id: "healthcare-clinic-website",
    title: "Multi-Clinic Healthcare Group Website",
    client: "CareFirst Clinics",
    industry: "Healthcare",
    category: "Web Development",
    image: "https://images.unsplash.com/photo-1576091160399-112ba8d25d1d?q=80&w=2070&auto=format&fit=crop",
    tags: ["Web Apps"],
    overview: "A fully responsive multi-location website with online appointment booking, doctor profiles, and patient resources for a group of 8 clinics.",
    challenge: "An outdated website that wasn't mobile-friendly and generated almost no online appointment bookings for any of the 8 clinic locations.",
    solution: "SEO-optimised multi-location website with appointment booking, doctor profiles, patient resource library, and Google Maps integration for all locations.",
    result: "Online bookings increased by 300% in 3 months. Organic traffic grew 180% within 6 months. First-page ranking for 18 medical search terms.",
    technologies: ["Next.js", "Sanity CMS", "Vercel", "Google Maps API"],
  },
  {
    id: "field-service-app",
    title: "Field Service Management App",
    client: "SwiftLogix",
    industry: "Logistics",
    category: "Mobile Apps",
    image: "https://images.unsplash.com/photo-1526374965328-7f61d4dc18c5?q=80&w=2070&auto=format&fit=crop",
    tags: ["Mobile Apps"],
    overview: "A cross-platform mobile app for field technicians with job assignment, GPS tracking, digital forms, photo capture, and real-time status updates.",
    challenge: "Field technicians using paper forms and phone calls to report job status — causing delays, lost data, and poor customer communication.",
    solution: "React Native app with job assignment, GPS tracking, digital forms, photo capture, customer signature, and real-time status updates via push notification.",
    result: "Job reporting time from 2 hours to 10 minutes. Customer satisfaction NPS improved 28 points. Zero paper forms since launch.",
    technologies: ["React Native", "Node.js", "PostgreSQL", "AWS"],
    testimonial: {
      quote: "Our customers love the real-time updates and our operations team finally has visibility into what's happening in the field.",
      name: "Arjun Mehta",
      role: "Head of Operations, SwiftLogix",
    },
  },
  {
    id: "manufacturing-erp",
    title: "Manufacturing ERP Implementation",
    client: "PrimeCraft Manufacturing",
    industry: "Manufacturing",
    category: "ERP",
    image: "https://images.unsplash.com/photo-1581091226825-a6a2a5aee158?q=80&w=2070&auto=format&fit=crop",
    tags: ["ERP"],
    overview: "Fully integrated ERP covering production planning, inventory, procurement, quality control, finance, and HR for a 200-person manufacturer.",
    challenge: "Running operations across 6 different software tools with no integration. Monthly reports took 4 days to compile manually.",
    solution: "Integrated ERP with production planning, inventory, procurement, QC, finance, and HR modules — all with real-time dashboards.",
    result: "Monthly reporting: 4 days → 2 hours. Inventory costs down 22%. Production efficiency improved 18%.",
    technologies: ["React", "PostgreSQL", "Node.js", "AWS"],
    testimonial: {
      quote: "We went from 6 disconnected tools to one ERP. The ROI was clear within the first quarter.",
      name: "Mohammed Farhan",
      role: "Managing Director, PrimeCraft",
    },
  },
  {
    id: "real-estate-crm",
    title: "Real Estate Sales CRM",
    client: "PrimeRealty Developers",
    industry: "Real Estate",
    category: "CRM",
    image: "https://images.unsplash.com/photo-1560518883-ce09059eeffa?q=80&w=2073&auto=format&fit=crop",
    tags: ["CRM"],
    overview: "Custom CRM with lead capture, automatic assignment, property matching, follow-up automation, and a real-time pipeline dashboard for a ₹50 Cr+ sales operation.",
    challenge: "Managing 500+ leads across Excel sheets and WhatsApp groups. Follow-ups missed. No visibility into which projects were selling.",
    solution: "Custom CRM with automated lead capture from website and ads, rep assignment, WhatsApp integration, follow-up automation, and sales director dashboard.",
    result: "Lead response time: 4 hours → 8 minutes. Conversion rate up 28%. Real-time pipeline visibility for ₹50 Cr+ portfolio.",
    technologies: ["React", "Node.js", "PostgreSQL", "Twilio", "AWS"],
  },
  {
    id: "subscription-billing-platform",
    title: "SaaS Subscription Billing Platform",
    client: "CloudWorks SaaS",
    industry: "Technology",
    category: "Billing",
    image: "https://images.unsplash.com/photo-1563013544-824ae1b704d3?q=80&w=2070&auto=format&fit=crop",
    tags: ["Billing", "Custom Software"],
    overview: "Complete subscription billing engine with plan management, automated invoicing, Stripe integration, dunning management, and a customer billing portal.",
    challenge: "Manually creating invoices for 500 subscribers each month. Billing-related churn from failed payments was a significant revenue leak.",
    solution: "Subscription billing engine with automated invoice generation, Stripe integration, failed payment dunning sequences, and a self-service customer portal.",
    result: "Billing-related churn reduced 40%. All invoices automated. Finance team saves 3 days of work per month.",
    technologies: ["React", "Node.js", "Stripe", "PostgreSQL", "AWS"],
    testimonial: {
      quote: "Smatel's billing platform automated everything overnight. Our finance team finally has time to do real finance work.",
      name: "Ashwin Pillai",
      role: "Finance Head, CloudWorks SaaS",
    },
  },
  {
    id: "k12-school-erp",
    title: "K-12 School Management System",
    client: "Holy Cross Academy",
    industry: "Education",
    category: "Education",
    image: "https://images.unsplash.com/photo-1588072432836-e10032774350?q=80&w=2072&auto=format&fit=crop",
    tags: ["Education", "Mobile Apps"],
    overview: "Full school ERP with digital attendance, online fee collection, parent app, exam management, and management dashboard for a 1,200-student institution.",
    challenge: "Paper attendance registers, cash fee collection with manual receipts, and paper circulars for a 1,200-student school.",
    solution: "School ERP with digital attendance, online fee payment, automated parent app notifications (iOS + Android), exam management, and report card generation.",
    result: "Fee collection efficiency up 85%. Admin time reduced 58%. Parent satisfaction scores: 3.2 → 4.7 out of 5.",
    technologies: ["React", "React Native", "Node.js", "PostgreSQL", "Razorpay"],
    testimonial: {
      quote: "Our school went from paper registers to a fully digital institution in 8 weeks. The transformation has been remarkable.",
      name: "Sr. Margaret D'Souza",
      role: "Principal, Holy Cross Academy",
    },
  },
  {
    id: "healthcare-seo",
    title: "Hospital Digital Marketing Campaign",
    client: "MedCity Hospitals",
    industry: "Healthcare",
    category: "Digital Marketing",
    image: "https://images.unsplash.com/photo-1432888622747-4eb9a8f5a70d?q=80&w=2074&auto=format&fit=crop",
    tags: ["Digital Marketing"],
    overview: "Full digital marketing overhaul including technical SEO, local SEO for 8 specialties, Google Ads, and a conversion-optimised patient acquisition system.",
    challenge: "No measurable online patient acquisition despite heavy spending on print and TV. Zero organic search visibility for medical specialties.",
    solution: "Technical SEO, local SEO for all 8 specialties, Google Search Ads targeting high-intent queries, and a consultation tracking system.",
    result: "Organic traffic +280% in 6 months. Cost-per-consultation: ₹850 → ₹220. Monthly online appointments: 40 → 380.",
    technologies: ["Google Ads", "GA4", "SEMrush", "Search Console"],
  },
  {
    id: "retail-chain-erp",
    title: "Multi-Location Retail Chain ERP",
    client: "StyleSelect Retail",
    industry: "Retail",
    category: "ERP",
    image: "https://images.unsplash.com/photo-1441986300917-64674bd600d8?q=80&w=2070&auto=format&fit=crop",
    tags: ["ERP", "Retail"],
    overview: "Multi-location ERP with centralised inventory, inter-branch transfers, automated reordering, POS integration, and executive dashboard across 15 retail locations.",
    challenge: "No centralised inventory across 15 stores. Stockouts at one store while another had excess, with no way to transfer or plan.",
    solution: "Multi-location ERP with real-time inventory, inter-branch transfer management, automated reordering triggers, POS integration, and executive dashboard.",
    result: "Stockouts reduced 65%. Annual inventory holding cost reduced by ₹18 lakhs. All 15 locations on one platform.",
    technologies: ["React", "Python", "MySQL", "GCP"],
    testimonial: {
      quote: "After the Smatel ERP, we have complete visibility and stockouts are down 65%. The system paid for itself in 4 months.",
      name: "Kavitha Suresh",
      role: "Operations Head, StyleSelect",
    },
  },
  {
    id: "insurance-claims-platform",
    title: "Insurance Claims Processing Platform",
    client: "GlobalSure Insurance",
    industry: "Finance",
    category: "Custom Software",
    image: "https://images.unsplash.com/photo-1554224155-6726b3ff858f?q=80&w=2072&auto=format&fit=crop",
    tags: ["Custom Software", "Finance"],
    overview: "A custom workflow engine to modernize manual claims processing, significantly reducing turnaround times and improving customer satisfaction.",
    challenge: "Manual claims processing took 7–10 days and was prone to errors, leading to customer dissatisfaction and regulatory risk.",
    solution: "Custom workflow engine with document upload, AI-assisted validation, adjuster assignment, and automated status notifications.",
    result: "Claims processing time reduced from 10 days to 48 hours. Customer satisfaction scores up 35%.",
    technologies: ["React", "Python", "FastAPI", "GCP"],
    testimonial: {
      quote: "We went from a 10-day claims cycle to 48 hours. The team truly understood our domain and delivered beyond expectations.",
      name: "Priya Sharma",
      role: "CTO, FinClaim Solutions"
    }
  },
  {
    id: "clinic-billing-system",
    title: "Multi-Clinic Billing & Revenue System",
    client: "CareFirst Clinics",
    industry: "Healthcare",
    category: "Billing",
    image: "https://images.unsplash.com/photo-1576091160399-112ba8d25d1d?q=80&w=2070&auto=format&fit=crop",
    tags: ["Billing", "Web Apps"],
    overview: "A consolidated billing and insurance claim management system spanning multiple healthcare clinic locations.",
    challenge: "Managing billing, insurance claims, and patient payments across 8 clinic locations with disconnected legacy systems.",
    solution: "Unified billing system with integrated insurance claim generation, automated payment reminders, and central dashboard.",
    result: "Reduced accounts receivable days by 25%. Insurance claim rejection rate dropped from 12% to 2%.",
    technologies: ["React", "Node.js", "PostgreSQL", "AWS"]
  },
  {
    id: "hospital-system-support",
    title: "Hospital Management System Support",
    client: "MedCity Hospitals",
    industry: "Healthcare",
    category: "Support & Maintenance",
    image: "https://images.unsplash.com/photo-1519494026892-80bbd2d6fd0d?q=80&w=2053&auto=format&fit=crop",
    tags: ["Support"],
    overview: "24/7 dedicated support, SLA monitoring, and continuous maintenance for a mission-critical hospital management system.",
    challenge: "Frequent system downtimes and slow bug fixes were affecting patient care and causing staff frustration.",
    solution: "Dedicated 24/7 support team, proactive monitoring, and a structured SLA-driven maintenance protocol.",
    result: "System uptime improved to 99.99%. Support ticket resolution time decreased by 75%.",
    technologies: ["Java", "Oracle", "AWS", "Datadog"]
  },
  {
    id: "erp-maintenance",
    title: "Legacy ERP Maintenance & Upgrade",
    client: "PrimeCraft Manufacturing",
    industry: "Manufacturing",
    category: "Support & Maintenance",
    image: "https://images.unsplash.com/photo-1581091226825-a6a2a5aee158?q=80&w=2070&auto=format&fit=crop",
    tags: ["Support", "ERP"],
    overview: "Ongoing maintenance, optimization, and gradual modernization of a complex legacy manufacturing ERP system.",
    challenge: "An aging custom ERP that was slow, insecure, and increasingly difficult to modify for new business rules.",
    solution: "Comprehensive code audit, performance optimization, security patching, and gradual migration to modern architecture.",
    result: "System performance improved by 300%. Zero security incidents. Smooth transition to new modules without downtime.",
    technologies: ["C#", "SQL Server", "Azure", "React"]
  },
  {
    id: "retail-loyalty-app",
    title: "Retail Customer Loyalty App",
    client: "StyleSelect Retail",
    industry: "Retail",
    category: "Mobile Apps",
    image: "https://images.unsplash.com/photo-1441986300917-64674bd600d8?q=80&w=2070&auto=format&fit=crop",
    tags: ["Mobile Apps", "Retail"],
    overview: "A native mobile application for customer loyalty, personalized offers, and in-store navigation.",
    challenge: "Low customer retention and no direct channel to send personalized promotions based on purchase history.",
    solution: "iOS and Android loyalty app with point tracking, personalized push notifications, and POS integration.",
    result: "Customer retention increased by 40%. App users spend 2.5x more than non-app users.",
    technologies: ["React Native", "Node.js", "MongoDB", "Firebase"]
  },
  {
    id: "law-firm-website",
    title: "Corporate Law Firm Portal",
    client: "Sterling & Partners",
    industry: "Legal",
    category: "Web Development",
    image: "https://images.unsplash.com/photo-1589829085413-56de8ae18c73?q=80&w=2070&auto=format&fit=crop",
    tags: ["Web Apps"],
    overview: "A professional, highly secure corporate website and client portal for a top-tier law firm.",
    challenge: "An outdated website that didn't reflect their premium brand, with no secure way to share documents with clients.",
    solution: "Modern, high-performance website with a secure, encrypted client portal for document sharing and case tracking.",
    result: "Brand perception significantly improved. Client onboarding time reduced by 50% via the secure portal.",
    technologies: ["Next.js", "Vercel", "AWS S3", "Tailwind CSS"]
  },
  {
    id: "ecommerce-growth",
    title: "E-commerce Growth Campaign",
    client: "StyleSelect Retail",
    industry: "Retail",
    category: "Digital Marketing",
    image: "https://images.unsplash.com/photo-1460925895917-afdab827c52f?q=80&w=2015&auto=format&fit=crop",
    tags: ["Digital Marketing"],
    overview: "A comprehensive digital marketing and conversion rate optimization campaign for an online fashion retailer.",
    challenge: "High cart abandonment rate and increasing customer acquisition costs on paid social channels.",
    solution: "Conversion rate optimization (CRO), retargeting campaigns, and an overhauled email marketing automation flow.",
    result: "Cart abandonment reduced by 22%. ROAS (Return on Ad Spend) increased from 2.1x to 4.5x.",
    technologies: ["Shopify", "Google Analytics", "Klaviyo", "Meta Ads"]
  },
  {
    id: "insurance-crm",
    title: "Insurance Broker CRM",
    client: "GlobalSure Insurance",
    industry: "Finance",
    category: "CRM",
    image: "https://images.unsplash.com/photo-1450101499163-c8848c66ca85?q=80&w=2070&auto=format&fit=crop",
    tags: ["CRM", "Finance"],
    overview: "A specialized CRM designed for insurance brokers to manage policies, renewals, and client communications.",
    challenge: "Brokers missing policy renewal dates and losing clients due to scattered data across emails and spreadsheets.",
    solution: "Custom CRM with automated renewal reminders, policy document management, and integrated communication logs.",
    result: "Policy retention rate increased to 94%. Broker productivity increased by 35%.",
    technologies: ["React", "Node.js", "PostgreSQL", "Twilio"]
  },
  {
    id: "coaching-institute-platform",
    title: "Coaching Institute Learning Platform",
    client: "Achievers Academy",
    industry: "Education",
    category: "Education",
    image: "https://images.unsplash.com/photo-1509062522246-3755977927d7?q=80&w=2032&auto=format&fit=crop",
    tags: ["Education", "Web Apps"],
    overview: "An online learning and assessment platform for a competitive exam coaching institute.",
    challenge: "Transitioning 5,000+ students from offline classes to online learning during a sudden lockdown without losing engagement.",
    solution: "Custom Learning Management System (LMS) with live classes, recorded lectures, and timed mock tests.",
    result: "Successfully migrated 100% of students online. Student test scores improved due to advanced analytics.",
    technologies: ["Next.js", "Node.js", "AWS MediaLive", "MongoDB"]
  }
];

export const portfolioCategories = ["All", "Web Apps", "Mobile Apps", "ERP", "CRM", "Billing", "Education", "Digital Marketing", "Custom Software"];

export function getPortfolioByCategory(category: string): PortfolioProject[] {
  if (category === "All") return portfolioProjects;
  return portfolioProjects.filter((p) => p.tags.includes(category));
}

export function getPortfolioById(id: string): PortfolioProject | undefined {
  return portfolioProjects.find((p) => p.id === id);
}
