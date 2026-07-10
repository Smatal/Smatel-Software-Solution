import type { SolutionPageData } from "./types";

const data: SolutionPageData = {
  slug: "billing-solutions",
  hero: {
    badge: "Billing Solutions",
    title: "Get Paid Faster, with Zero Manual Effort",
    description: "Eliminate manual invoicing, reduce payment delays, and gain real-time financial clarity with an automated billing platform built for your business model.",
    image: "https://images.unsplash.com/photo-1554224155-6726b3ff858f?q=80&w=2072&auto=format&fit=crop",
    cta: { text: "See Billing Demo", href: "/contact" },
  },
  challenges: [
    {
      title: "Manual Invoicing is Error-Prone",
      description: "Creating invoices manually in Excel or Word leads to calculation errors, forgotten line items, and inconsistent formatting.",
      icon: "alert-triangle",
    },
    {
      title: "Payment Delays Hurt Cash Flow",
      description: "Without automated reminders, late payments pile up and cash flow becomes unpredictable — making it difficult to plan operations.",
      icon: "clock",
    },
    {
      title: "No Financial Visibility",
      description: "You can't see outstanding balances, revenue by client, or monthly trends without spending hours compiling spreadsheets.",
      icon: "eye-off",
    },
    {
      title: "Recurring Billing is a Headache",
      description: "Managing monthly subscriptions, renewals, and pro-rated billing manually is time-consuming and prone to missed collections.",
      icon: "refresh-cw",
    },
  ],
  solution: {
    heading: "Billing That Runs Itself",
    description: "Our billing solutions automate the entire revenue collection cycle — from generating professional invoices to sending automated payment reminders, processing online payments, and reconciling your accounts. Whether you have simple one-time invoicing or complex recurring subscription billing, we build a system that ensures you get paid on time, every time, with complete financial visibility.",
    highlights: [
      "Automated invoicing and recurring billing",
      "Online payment collection (UPI, card, bank transfer)",
      "Automated overdue reminders and follow-ups",
      "Real-time revenue dashboard and financial reports",
    ],
  },
  features: [
    { title: "Automated Invoicing", description: "Generate branded, GST-compliant invoices automatically with zero manual effort.", icon: "file-text" },
    { title: "Recurring Billing", description: "Set up subscription plans, auto-renewals, and pro-rated billing logic.", icon: "repeat" },
    { title: "Online Payments", description: "Accept payments via UPI, cards, net banking, and international gateways.", icon: "credit-card" },
    { title: "Payment Reminders", description: "Automated email and SMS reminders at custom intervals before and after due dates.", icon: "bell" },
    { title: "Financial Reports", description: "Revenue by client, outstanding ageing, collection efficiency, and GST reports.", icon: "bar-chart" },
    { title: "Multi-Currency Support", description: "Bill international clients in their local currency with automatic conversion.", icon: "globe" },
  ],
  benefits: [
    { title: "Get Paid 15 Days Faster", description: "Automated reminders and online payment options dramatically reduce payment cycles.", metric: "15 days faster" },
    { title: "Eliminate Billing Errors", description: "Automated calculations and tax computation remove human error from invoicing.", metric: "0 billing errors" },
    { title: "Save 10+ Hours Per Week", description: "Automate invoice creation, reminder sending, and reconciliation entirely.", metric: "10+ hrs/week" },
    { title: "Real-Time Cash Flow Visibility", description: "Always know what's been invoiced, what's collected, and what's outstanding.", metric: "100% visibility" },
    { title: "Improve Client Relationships", description: "Professional, timely invoicing with easy payment options improves the client experience.", metric: "Better experience" },
  ],
  industries: ["Professional Services", "Healthcare", "Education", "SaaS & Tech", "Retail", "Logistics", "Consulting", "Real Estate"],
  portfolio: [
    {
      id: "subscription-billing-platform",
      name: "SaaS Subscription Billing Platform",
      industry: "SaaS & Tech",
      image: "https://images.unsplash.com/photo-1563013544-824ae1b704d3?q=80&w=2070&auto=format&fit=crop",
      challenge: "A SaaS company with 500 subscribers was manually creating invoices each month and chasing payments via email. Churn from billing failures was a significant revenue leak.",
      solution: "Built a complete subscription billing engine with plan management, automated invoice generation, Stripe integration, dunning management for failed payments, and a customer billing portal.",
      result: "Billing-related churn reduced by 40%. 100% of invoices now automated. Finance team saved 3 days of work per month.",
      technologies: ["React", "Node.js", "Stripe", "PostgreSQL", "AWS"],
    },
    {
      id: "clinic-billing-system",
      name: "Multi-Clinic Billing & Collections System",
      industry: "Healthcare",
      image: "https://images.unsplash.com/photo-1576091160399-112ba8d25d1d?q=80&w=2070&auto=format&fit=crop",
      challenge: "A healthcare group with 5 clinics had no centralised billing system. Each clinic used a different method, leading to audit failures, GST non-compliance, and unpaid balances.",
      solution: "Deployed a centralised billing system covering patient invoicing, insurance claim billing, GST compliance, automated payment reminders, and a collections dashboard.",
      result: "Outstanding collections reduced by 55%. GST compliance audit passed with zero issues. All 5 clinics unified on one platform.",
      technologies: ["React", "Python", "PostgreSQL", "Razorpay", "AWS"],
    },
  ],
  achievements: [
    { value: 30, suffix: "+", label: "Billing Systems Deployed" },
    { value: 15, suffix: " days", label: "Avg. Payment Cycle Reduction" },
    { value: 100, suffix: "%", label: "Invoices Automated" },
    { value: 10, suffix: "+", label: "Hours Saved Weekly" },
  ],
  testimonials: [
    {
      name: "Ashwin Pillai",
      role: "Finance Head",
      company: "CloudWorks SaaS",
      industry: "SaaS & Tech",
      rating: 5,
      review: "We had 500 subscribers and we were manually invoicing all of them. Smatel's billing platform automated everything overnight. Churn from billing failures dropped 40% and our finance team finally has time to do real finance work.",
      avatar: "https://images.unsplash.com/photo-1506794778202-cad84cf45f1d?q=80&w=256&h=256&auto=format&fit=crop",
    },
    {
      name: "Dr. Vijay Ramesh",
      role: "Medical Director",
      company: "LifeCare Clinics",
      industry: "Healthcare",
      rating: 5,
      review: "Our clinics had a billing mess — different systems, GST issues, and unpaid balances everywhere. Smatel centralised everything and our outstanding collections dropped by more than half.",
      avatar: "https://images.unsplash.com/photo-1612349317150-e413f6a5b16d?q=80&w=256&h=256&auto=format&fit=crop",
    },
  ],
  faqs: [
    { question: "Is the billing system GST-compliant?", answer: "Yes. Our billing systems are fully GST-compliant with automatic CGST/SGST/IGST calculation, HSN/SAC codes, and GSTR-ready export formats." },
    { question: "Which payment gateways do you support?", answer: "We integrate with Razorpay, Stripe, PayU, PayPal, and most major Indian and international payment gateways. We can also set up bank transfer and UPI QR code payments." },
    { question: "Can it handle both one-time and recurring billing?", answer: "Yes. The system supports one-time invoices, recurring subscriptions (weekly/monthly/annual), milestone-based billing, and retainer billing models." },
    { question: "Can we send invoices via WhatsApp?", answer: "Yes. We can integrate WhatsApp Business API to deliver invoices and payment reminders directly via WhatsApp in addition to email and SMS." },
    { question: "How does it handle failed payments?", answer: "We implement automated dunning — a retry sequence with configurable reminders, grace periods, and escalation logic to maximise collection without manual intervention." },
    { question: "Can it connect to our accounting software?", answer: "Yes. We build integrations with Tally, QuickBooks, Zoho Books, and custom ERP systems so billing data flows automatically to your accounting records." },
  ],
  relatedSolutions: ["erp-solutions", "crm-solutions", "support-maintenance"],
};

export default data;
