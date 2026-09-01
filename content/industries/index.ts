export interface IndustryChallenge {
  title: string;
  description: string;
}

export interface IndustrySolution {
  title: string;
  description: string;
  iconName: string;
}

export interface IndustryStat {
  value: string;
  label: string;
}

export interface IndustryFAQ {
  question: string;
  answer: string;
}

export interface IndustryDetail {
  slug: string;
  name: string;
  tagline: string;
  badge: string;
  heroDescription: string;
  stats: IndustryStat[];
  challenges: IndustryChallenge[];
  solutions: IndustrySolution[];
  techStack: string[];
  compliance: string[];
  faqs: IndustryFAQ[];
}

export const industryDetails: Record<string, IndustryDetail> = {
  startups: {
    slug: "startups",
    name: "Startups & High-Growth Scaleups",
    tagline: "Build, launch, and scale MVPs in weeks, not quarters",
    badge: "Startup Innovation",
    heroDescription: "We partner with visionary founders and venture-backed startups to engineer scalable MVPs, modern SaaS architectures, and cloud-native applications that attract users and investors.",
    stats: [
      { value: "4-6 Weeks", label: "Average MVP Delivery" },
      { value: "99.99%", label: "Cloud Uptime & Scale" },
      { value: "3x", label: "Faster Go-To-Market" },
      { value: "100%", label: "IP & Code Ownership" },
    ],
    challenges: [
      {
        title: "Fast Cash Burn & Time-To-Market Pressure",
        description: "Founders need to test product-market fit fast before seed capital runs dry. Slow development cycles kill startup momentum.",
      },
      {
        title: "Technical Debt vs Early Scalability",
        description: "Cutting corners on system architecture creates crippling tech debt when user growth spikes 10x overnight.",
      },
      {
        title: "Hiring Top Full-Stack Talent",
        description: "Recruiting, vetting, and onboarding specialized engineers takes months and costs a fortune in early-stage equity and cash.",
      },
    ],
    solutions: [
      {
        title: "Rapid MVP Engineering",
        description: "Production-ready, battle-tested MVPs delivered in 4 to 8 weeks with clean, modular TypeScript, Next.js, and cloud backend architecture.",
        iconName: "rocket",
      },
      {
        title: "Multi-Tenant SaaS Platforms",
        description: "Architectures with Stripe/Razorpay billing, tenant isolation, role-based access control (RBAC), and automated customer onboarding.",
        iconName: "layers",
      },
      {
        title: "AI & LLM Integration",
        description: "Embed OpenAI, Anthropic, or custom fine-tuned AI workflows directly into your core product workflow to give you a strong competitive moat.",
        iconName: "zap",
      },
      {
        title: "Serverless & Microservices Cloud",
        description: "Zero-maintenance AWS/Vercel/GCP infrastructure designed to scale from 10 to 1,000,000 active users automatically.",
        iconName: "cloud",
      },
    ],
    techStack: ["Next.js 15", "React Native", "TypeScript", "Node.js", "PostgreSQL", "Supabase", "AWS", "Stripe"],
    compliance: ["SOC 2 Ready Architecture", "GDPR Data Encryption", "OAuth2 & SSO"],
    faqs: [
      {
        question: "How fast can you build our startup MVP?",
        answer: "Our standard rapid MVP cycle takes 4 to 8 weeks depending on complexity. We focus on core high-impact features needed to validate product-market fit and secure investor funding.",
      },
      {
        question: "Do we retain 100% intellectual property (IP)?",
        answer: "Yes, absolutely. You retain complete ownership of all source code, repositories, design assets, and database schemas from day one.",
      },
      {
        question: "Can you scale with us after launch?",
        answer: "Yes. We offer continuous dedicated feature squads, DevOps monitoring, and growth engineering to scale your platform smoothly as your user base expands.",
      },
    ],
  },

  healthcare: {
    slug: "healthcare",
    name: "Healthcare & Life Sciences",
    tagline: "HIPAA-compliant, resilient digital health and clinical systems",
    badge: "Digital Health",
    heroDescription: "We engineer secure telemedicine portals, Electronic Health Record (EHR) integrations, patient engagement apps, and diagnostic workflows with bank-grade security.",
    stats: [
      { value: "100%", label: "HIPAA/DISHA Compliant" },
      { value: "300%", label: "Patient Booking Growth" },
      { value: "0ms", label: "Data Leak History" },
      { value: "24/7", label: "Critical Health Monitoring" },
    ],
    challenges: [
      {
        title: "Strict Regulatory & Data Privacy Mandates",
        description: "Healthcare software must adhere to strict HIPAA, DISHA, and GDPR standards with end-to-end data encryption and complete audit logging.",
      },
      {
        title: "Legacy EHR & Fragmented Systems",
        description: "Hospitals struggle with disconnected clinic software, making patient history synchronization slow and prone to human error.",
      },
      {
        title: "Poor Digital Patient Experience",
        description: "Outdated booking flows and clunky patient portals lead to high appointment no-shows and administrative overload.",
      },
    ],
    solutions: [
      {
        title: "Telemedicine & Video Consultation",
        description: "Encrypted WebRTC video calls, digital prescription generation, and automated patient appointment reminders via WhatsApp/SMS.",
        iconName: "activity",
      },
      {
        title: "EHR / EMR System Integrations",
        description: "FHIR and HL7 compliant data pipelines that connect lab results, clinic diagnostics, and doctor notes into one unified dashboard.",
        iconName: "file-text",
      },
      {
        title: "Multi-Clinic Patient Portals",
        description: "Self-service mobile and web portals for booking, payment processing, report downloads, and doctor communication.",
        iconName: "users",
      },
      {
        title: "Pharmacy & Lab Inventory ERP",
        description: "Real-time drug inventory tracking, expiry monitoring, automated PO creation, and supplier dispatch tracking.",
        iconName: "package",
      },
    ],
    techStack: ["React", "Next.js", "Node.js", "WebRTC", "PostgreSQL", "FHIR / HL7", "AWS HealthLake"],
    compliance: ["HIPAA Compliant", "DISHA (India)", "ISO 27001", "AES-256 Encryption"],
    faqs: [
      {
        question: "Are your healthcare solutions HIPAA and DISHA compliant?",
        answer: "Yes, all health systems we build adhere strictly to HIPAA (US) and DISHA/NABH (India) guidelines, featuring AES-256 encryption at rest and in transit, multi-factor authentication, and immutable audit logs.",
      },
      {
        question: "Can you integrate with existing hospital lab and billing software?",
        answer: "Yes, we build custom REST, GraphQL, and FHIR/HL7 middleware to bridge your existing diagnostic equipment, billing software, and third-party EHRs.",
      },
    ],
  },

  education: {
    slug: "education",
    name: "Education & EdTech",
    tagline: "Next-generation Learning Management Systems and School ERPs",
    badge: "EdTech Innovation",
    heroDescription: "We build intuitive LMS platforms, campus management ERPs, interactive quiz engines, and parent communication apps that digitize classrooms and educational operations.",
    stats: [
      { value: "85%", label: "Fee Collection Efficiency" },
      { value: "50k+", label: "Concurrent Students" },
      { value: "58%", label: "Admin Workload Reduction" },
      { value: "4.8/5", label: "Parent App Rating" },
    ],
    challenges: [
      {
        title: "Manual Paperwork & Delayed Fee Collections",
        description: "Schools lose hundreds of administrative hours reconciling paper registers, cash fee receipts, and manual report cards.",
      },
      {
        title: "Low Student & Parent Engagement",
        description: "Without real-time mobile push notifications, attendance alerts and academic notices frequently go unread.",
      },
    ],
    solutions: [
      {
        title: "Unified School & College ERP",
        description: "Digital attendance tracking, automated fee collection with Razorpay/Stripe, exam gradebooks, and timetable managers.",
        iconName: "graduation-cap",
      },
      {
        title: "Interactive LMS & Video Classes",
        description: "Course creation, video streaming, interactive assignments, auto-graded quizzes, and student certification engines.",
        iconName: "monitor",
      },
      {
        title: "Parent & Teacher Mobile App",
        description: "Real-time bus tracking, instant homework updates, fee payment reminders, and direct parent-teacher messaging.",
        iconName: "smartphone",
      },
    ],
    techStack: ["Next.js", "React Native", "PostgreSQL", "Node.js", "Razorpay", "AWS S3 Video Streaming"],
    compliance: ["FERPA Compliant", "GDPR for Minors", "Encrypted Student Data"],
    faqs: [
      {
        question: "Can our school collect fees online automatically?",
        answer: "Yes. Our school ERP integrates Razorpay, Stripe, and UPI payment gateways, providing automated WhatsApp payment links, instant digital receipts, and overdue reminders.",
      },
    ],
  },

  retail: {
    slug: "retail",
    name: "Retail & E-Commerce",
    tagline: "Omnichannel POS, lightning-fast storefronts, and automated inventory",
    badge: "Commerce Engineering",
    heroDescription: "We engineer high-converting digital storefronts, custom Point-of-Sale (POS) systems, and multi-warehouse inventory platforms that scale your retail business.",
    stats: [
      { value: "2.4x", label: "Conversion Rate Surge" },
      { value: "<1.2s", label: "Storefront Load Time" },
      { value: "100%", label: "Real-time Stock Accuracy" },
      { value: "35%", label: "Cart Abandonment Drop" },
    ],
    challenges: [
      {
        title: "Inventory Desync Between Stores & Online",
        description: "Selling out of stock items or understocking high-demand goods due to disjointed store and warehouse spreadsheets.",
      },
      {
        title: "Slow, Bloated E-Commerce Templates",
        description: "Generic Shopify or WooCommerce setups with too many plugins lead to high bounce rates and poor mobile conversion.",
      },
    ],
    solutions: [
      {
        title: "Headless E-Commerce Architecture",
        description: "Blazing-fast Next.js storefronts with sub-second page loads, custom checkout flows, and 1-click UPI/card payments.",
        iconName: "shopping-bag",
      },
      {
        title: "Cloud POS & Multi-Store Sync",
        description: "Real-time barcode scanning, offline-ready receipt printing, employee sales tracking, and synchronized store inventory.",
        iconName: "credit-card",
      },
      {
        title: "Smart Inventory & Reordering Engine",
        description: "Low-stock automated triggers, vendor purchase order management, and predictive reordering based on historical sales velocity.",
        iconName: "package",
      },
    ],
    techStack: ["Next.js", "Shopify Headless / Medusa", "Stripe", "PostgreSQL", "Tailwind CSS", "Redis"],
    compliance: ["PCI-DSS Level 1 Compliant", "SSL 256-bit", "GDPR/CCPA"],
    faqs: [
      {
        question: "Can you connect our physical store POS with our online website?",
        answer: "Yes! We build real-time two-way synchronization between your offline store POS and online inventory so you never oversell or misplace stock.",
      },
    ],
  },

  manufacturing: {
    slug: "manufacturing",
    name: "Manufacturing & Industrial Tech",
    tagline: "Smart factory ERP, IoT machine telemetry, and supply chain control",
    badge: "Industry 4.0",
    heroDescription: "We engineer custom ERPs, production scheduling pipelines, bill-of-materials (BOM) trackers, and quality assurance systems built for factory floor reliability.",
    stats: [
      { value: "40%", label: "Procurement Error Drop" },
      { value: "22%", label: "Inventory Cost Savings" },
      { value: "18%", label: "Production Output Gain" },
      { value: "4 Days → 2h", label: "Reporting Acceleration" },
    ],
    challenges: [
      {
        title: "Paper Job Cards & Data Silos",
        description: "Factory workers filling handwritten logs leads to delayed production tracking and inaccurate capacity estimates.",
      },
      {
        title: "Overstocking vs Stockout Bottlenecks",
        description: "Without automated material requirement planning (MRP), raw materials run out mid-shift, halting machinery.",
      },
    ],
    solutions: [
      {
        title: "Custom Manufacturing ERP",
        description: "End-to-end production planning, work order dispatch, machine uptime monitoring, and labor cost tracking.",
        iconName: "factory",
      },
      {
        title: "Supplier & Procurement Portal",
        description: "Automated RFQs, vendor price comparison, purchase order tracking, and delivery inspection logs.",
        iconName: "truck",
      },
      {
        title: "Quality Control (QC) & Compliance",
        description: "Digital batch testing checklists, defect rate tracking, and automated ISO compliance reporting.",
        iconName: "shield",
      },
    ],
    techStack: ["React", "Node.js", "PostgreSQL", "MQTT / IoT", "Docker", "AWS IoT Core"],
    compliance: ["ISO 9001 Auditing", "GMP Standards", "End-to-End Traceability"],
    faqs: [
      {
        question: "Can this ERP handle multi-stage assembly and BOM calculation?",
        answer: "Yes, our custom ERPs support complex multi-level Bill of Materials (BOM), scrap rate estimation, machine allocation, and real-time shop floor scheduling.",
      },
    ],
  },

  logistics: {
    slug: "logistics",
    name: "Logistics & Supply Chain",
    tagline: "GPS fleet tracking, dispatch automation, and automated warehouse routing",
    badge: "Supply Chain Tech",
    heroDescription: "We engineer fleet dispatch apps, warehouse barcode scanning systems, reverse logistics workflows, and predictive delivery platforms.",
    stats: [
      { value: "2h → 10min", label: "Job Reporting Speed" },
      { value: "+28 pts", label: "Customer NPS Boost" },
      { value: "100%", label: "Paperless Operations" },
      { value: "15%", label: "Fuel & Route Optimization" },
    ],
    challenges: [
      {
        title: "Zero Real-Time Visibility on Field Technicians",
        description: "Operations managers relying on phone calls and WhatsApp to track drivers and delivery milestones.",
      },
      {
        title: "Manual Proof of Delivery (POD) Errors",
        description: "Lost paper bills and disputed delivery timestamps delay client invoicing and cash flow.",
      },
    ],
    solutions: [
      {
        title: "Driver & Field Service Mobile App",
        description: "Turn-by-turn route optimization, digital customer e-signatures, photo proof of delivery, and offline sync.",
        iconName: "smartphone",
      },
      {
        title: "Fleet Dispatch & Live Tracking Dashboard",
        description: "Live GPS mapping, automated driver allocation, delay alerts, and vehicle maintenance schedules.",
        iconName: "map-pin",
      },
      {
        title: "Warehouse Management System (WMS)",
        description: "Bin-level inventory location mapping, barcode/RFID scanning, pick-and-pack optimization, and dispatch checks.",
        iconName: "package",
      },
    ],
    techStack: ["React Native", "Next.js", "Node.js", "PostgreSQL", "Google Maps API", "WebSockets"],
    compliance: ["Tamper-Proof Geofencing", "Audit Logged POD", "Data Redundancy"],
    faqs: [
      {
        question: "Does the driver app work in areas with no internet connection?",
        answer: "Yes, our mobile apps include an offline-first architecture that records GPS waypoints, signatures, and photos locally and automatically syncs when connectivity returns.",
      },
    ],
  },

  finance: {
    slug: "finance",
    name: "FinTech & Financial Services",
    tagline: "Bank-grade security, automated underwriting, and payment processing",
    badge: "FinTech Security",
    heroDescription: "We build secure customer investment portals, automated loan origination platforms, subscription billing engines, and compliance dashboards.",
    stats: [
      { value: "100%", label: "PCI-DSS Compliance" },
      { value: "48 Hours", label: "Claims Processing Cycle" },
      { value: "40%", label: "Failed Payment Recovery" },
      { value: "256-bit", label: "Hardware Encryption" },
    ],
    challenges: [
      {
        title: "Stringent Financial Regulatory Compliance",
        description: "KYC, AML, PCI-DSS, and RBI/SEC guidelines require faultless security architecture and audit trails.",
      },
      {
        title: "High Churn from Failed Recurring Payments",
        description: "Inadequate payment gateway retries and manual customer outreach leak substantial monthly recurring revenue.",
      },
    ],
    solutions: [
      {
        title: "Automated Subscription & Billing Engines",
        description: "Smart dunning sequences, multi-currency support, tax invoice generation, and automated gateway routing.",
        iconName: "credit-card",
      },
      {
        title: "Secure Client Portals & KYC Verification",
        description: "Instant Aadhaar/PAN/Document verification, biometric authentication, and encrypted document vaults.",
        iconName: "shield",
      },
      {
        title: "Real-Time Financial Analytics",
        description: "Executive dashboards for MRR, churn, cash runway, portfolio performance, and automated tax accounting.",
        iconName: "trending-up",
      },
    ],
    techStack: ["Next.js", "TypeScript", "Node.js", "PostgreSQL", "Stripe", "Razorpay", "AWS KMS"],
    compliance: ["PCI-DSS Level 1", "SOC 2 Type II Ready", "RBI Compliance", "AES-256"],
    faqs: [
      {
        question: "How do you ensure bank-grade security?",
        answer: "We implement zero-trust architecture, hardware-level encryption (AWS KMS), role-based access control, encrypted database fields for PII, and automated vulnerability scanning.",
      },
    ],
  },

  hospitality: {
    slug: "hospitality",
    name: "Hospitality, Travel & Leisure",
    tagline: "Direct booking engines, guest CRM, and automated property management",
    badge: "Hospitality Tech",
    heroDescription: "We build zero-commission direct booking engines, contactless guest check-in portals, and multi-property management ERPs.",
    stats: [
      { value: "0%", label: "OTA Commission on Direct Sales" },
      { value: "3.2x", label: "Direct Booking Growth" },
      { value: "15min", label: "Guest Check-in Speedup" },
      { value: "99.9%", label: "Room Availability Sync" },
    ],
    challenges: [
      {
        title: "High 15-25% OTA Commission Fees",
        description: "Relying purely on third-party aggregators strips hotel profitability and prevents direct guest relationships.",
      },
      {
        title: "Double-Booking & Manual Calendar Sync",
        description: "Managing room rates across Booking.com, Airbnb, and front desk manually causes pricing errors and overbooking.",
      },
    ],
    solutions: [
      {
        title: "Custom Direct Booking Engine",
        description: "Commission-free booking engine with dynamic pricing, room add-ons, promo codes, and multi-currency checkout.",
        iconName: "hotel",
      },
      {
        title: "Two-Way Channel Manager Sync",
        description: "Automated real-time rate and calendar synchronization across OTAs, booking engines, and property management systems.",
        iconName: "repeat",
      },
      {
        title: "Contactless Check-In & Guest Portal",
        description: "Digital ID upload, digital room keys, room service ordering, and instant concierge chat via WhatsApp.",
        iconName: "smartphone",
      },
    ],
    techStack: ["Next.js", "Node.js", "PostgreSQL", "Stripe / Razorpay", "Twilio WhatsApp API"],
    compliance: ["PCI-DSS Payment Gateways", "GDPR Guest Privacy", "Secure ID Vaults"],
    faqs: [
      {
        question: "Can our hotel avoid third-party OTA commissions?",
        answer: "Yes! Our direct booking engines are built to convert web traffic into direct bookings with zero commissions, saving thousands in monthly fees.",
      },
    ],
  },

  construction: {
    slug: "construction",
    name: "Construction & Real Estate",
    tagline: "Jobsite scheduling, lead CRM, and material procurement management",
    badge: "PropTech & Construction",
    heroDescription: "We engineer real estate sales CRMs, construction site daily logs, subcontractor bidding portals, and property inspection platforms.",
    stats: [
      { value: "4h → 8min", label: "Lead Response Speed" },
      { value: "28%", label: "Property Sales Conversion Boost" },
      { value: "₹50 Cr+", label: "Managed Real Estate Portfolio" },
      { value: "100%", label: "Jobsite Daily Log Accuracy" },
    ],
    challenges: [
      {
        title: "Lost Leads & Delayed Sales Follow-ups",
        description: "Real estate inquiries arriving across Facebook, Google, and property portals get buried in Excel sheets.",
      },
      {
        title: "Material Theft & Contractor Budget Overruns",
        description: "Without live material tracking on job sites, concrete, steel, and equipment costs consistently exceed initial bids.",
      },
    ],
    solutions: [
      {
        title: "Real Estate Sales & Lead CRM",
        description: "Automated lead capture from Meta/Google ads, rep auto-assignment, WhatsApp integration, and unit inventory tracking.",
        iconName: "building-2",
      },
      {
        title: "Jobsite Daily Log & Material Tracker",
        description: "Mobile app for project managers to record labor attendance, equipment usage, material deliveries, and site photos.",
        iconName: "clipboard-list",
      },
      {
        title: "Subcontractor Bidding & Milestones",
        description: "Digital contract signing, stage-wise milestone payment approvals, and contractor performance ratings.",
        iconName: "file-text",
      },
    ],
    techStack: ["React Native", "Next.js", "PostgreSQL", "Node.js", "Twilio", "AWS S3"],
    compliance: ["RERA Compliant Reporting", "Encrypted Contract Storage", "Audit Logging"],
    faqs: [
      {
        question: "Can the real estate CRM connect with our WhatsApp business account?",
        answer: "Yes, our CRM includes native WhatsApp Cloud API integration so sales reps can send project brochures, floor plans, and site visit invites in one click.",
      },
    ],
  },

  "small-medium-businesses": {
    slug: "small-medium-businesses",
    name: "Small & Medium Businesses",
    tagline: "Affordable, enterprise-grade business automation and custom web software",
    badge: "SMB Modernization",
    heroDescription: "We empower small and medium enterprises with custom automation, professional high-converting web apps, and streamlined operations tailored to their unique workflow.",
    stats: [
      { value: "60%", label: "Operational Time Saved" },
      { value: "10x", label: "ROI on Custom Systems" },
      { value: "0", label: "Unnecessary Software Bloat" },
      { value: "24/7", label: "Reliable Support" },
    ],
    challenges: [
      {
        title: "Paying for 10 Different SaaS Subscriptions",
        description: "SMBs juggle expensive, disconnected monthly subscriptions for invoicing, CRM, project tracking, and forms.",
      },
      {
        title: "Outgrowing Spreadsheets & WhatsApp",
        description: "As sales orders grow, spreadsheets break, orders get missed, and customer records get lost.",
      },
    ],
    solutions: [
      {
        title: "All-in-One Operations Portal",
        description: "One single customized system for client management, quotations, invoicing, order tracking, and staff assignments.",
        iconName: "store",
      },
      {
        title: "Modern Brand Web Platform",
        description: "High-performance website with automated booking forms, WhatsApp integration, and local SEO dominance.",
        iconName: "globe",
      },
      {
        title: "Automated Customer Follow-Up",
        description: "Automated payment reminder messages, quotation follow-up sequences, and feedback collection workflows.",
        iconName: "repeat",
      },
    ],
    techStack: ["Next.js", "TypeScript", "PostgreSQL", "Tailwind CSS", "Node.js", "Razorpay / Stripe"],
    compliance: ["SSL Encrypted", "Daily Database Backups", "Data Privacy"],
    faqs: [
      {
        question: "Is custom software affordable for small businesses?",
        answer: "Yes! By building only the exact features your business uses, custom software eliminates expensive recurring monthly subscription fees and saves hundreds of hours of manual labor.",
      },
    ],
  },
};

export function getIndustryBySlug(slug: string): IndustryDetail | undefined {
  return industryDetails[slug];
}

export const validIndustrySlugs = Object.keys(industryDetails);
