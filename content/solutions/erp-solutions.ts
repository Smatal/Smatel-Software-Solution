import type { SolutionPageData } from "./types";

const data: SolutionPageData = {
  slug: "erp-solutions",
  hero: {
    badge: "ERP Solutions",
    title: "One System for Your Entire Business",
    description: "Replace disconnected spreadsheets, siloed departments, and manual reports with a single integrated ERP platform that gives you real-time visibility and control over your entire operation.",
    image: "https://images.unsplash.com/photo-1551434678-e076c223a692?q=80&w=2070&auto=format&fit=crop",
    cta: { text: "Get an ERP Demo", href: "/contact" },
  },
  challenges: [
    {
      title: "Disconnected Business Operations",
      description: "Finance doesn't talk to inventory, HR doesn't connect to payroll, and sales data lives in a different system from production — creating constant data reconciliation headaches.",
      icon: "unlink",
    },
    {
      title: "No Real-Time Visibility",
      description: "Managers make decisions based on last week's spreadsheet rather than live data, leading to costly mistakes and missed opportunities.",
      icon: "eye-off",
    },
    {
      title: "Manual Reporting Takes Days",
      description: "Your team spends 20+ hours per month manually compiling reports from multiple systems when the data should be available in one click.",
      icon: "clock",
    },
    {
      title: "Growth Bottlenecks",
      description: "Your current systems can't scale — adding new locations, products, or staff creates exponential complexity rather than manageable growth.",
      icon: "trending-down",
    },
  ],
  solution: {
    heading: "Connect Every Part of Your Business",
    description: "Our ERP solutions unify all your business functions — from procurement and inventory to HR, payroll, finance, and sales — into a single platform with one source of truth. We don't force you into a generic template. We map your actual workflows, configure modules to match your processes, and deliver an ERP that your team adopts quickly because it works the way they work.",
    highlights: [
      "Fully integrated modules — finance, HR, inventory, CRM",
      "Real-time dashboards and business intelligence",
      "Role-based access with complete audit trails",
      "Configurable to match your exact workflows",
    ],
  },
  features: [
    { title: "Financial Management", description: "General ledger, accounts payable/receivable, budgeting, and financial reporting.", icon: "landmark" },
    { title: "Inventory & Procurement", description: "Real-time stock tracking, automated reordering, and supplier management.", icon: "package" },
    { title: "HR & Payroll", description: "Employee records, attendance, leave management, and automated payroll processing.", icon: "users" },
    { title: "Sales & CRM", description: "Lead tracking, sales pipeline, quotations, and customer management integrated with operations.", icon: "briefcase" },
    { title: "Real-Time Reports", description: "Executive dashboards and drill-down reports available on demand, across all departments.", icon: "bar-chart" },
    { title: "Multi-Location Support", description: "Manage multiple branches, warehouses, and entities from a single platform.", icon: "map-pin" },
  ],
  benefits: [
    { title: "Save 30+ Hours Per Week", description: "Eliminate manual data entry, report compilation, and cross-system reconciliation.", metric: "30+ hrs/week" },
    { title: "Real-Time Decision Making", description: "Live dashboards mean executives make decisions on current data, not last week's report.", metric: "100% real-time" },
    { title: "Reduce Operational Costs", description: "Automation and efficiency gains typically reduce operational overhead by 15–25%.", metric: "15–25% cost reduction" },
    { title: "Scale Without Chaos", description: "Add locations, staff, and product lines without exponential system complexity.", metric: "Unlimited scale" },
    { title: "Full Compliance & Audit Trail", description: "Every transaction is logged — critical for audits, compliance, and financial governance.", metric: "100% traceable" },
  ],
  industries: ["Manufacturing", "Retail", "Healthcare", "Construction", "Logistics", "Education", "Hospitality", "Professional Services"],
  portfolio: [
    {
      id: "manufacturing-erp",
      name: "Manufacturing ERP Implementation",
      industry: "Manufacturing",
      image: "https://images.unsplash.com/photo-1581091226825-a6a2a5aee158?q=80&w=2070&auto=format&fit=crop",
      challenge: "A 200-person manufacturing company was running operations across 6 different software tools with no integration. Monthly reports took 4 days to compile.",
      solution: "Implemented a fully integrated ERP covering production planning, inventory, procurement, quality control, finance, and HR with real-time dashboards for all department heads.",
      result: "Monthly reporting time reduced from 4 days to 2 hours. Inventory holding costs reduced by 22%. Production efficiency improved 18%.",
      technologies: ["Custom ERP", "React", "PostgreSQL", "Node.js", "AWS"],
    },
    {
      id: "retail-chain-erp",
      name: "Multi-Location Retail Chain ERP",
      industry: "Retail",
      image: "https://images.unsplash.com/photo-1441986300917-64674bd600d8?q=80&w=2070&auto=format&fit=crop",
      challenge: "A retail chain with 15 stores had no centralised inventory visibility. Stockouts at one store while another had excess — and no way to transfer or plan effectively.",
      solution: "Built a multi-location ERP with centralised inventory, inter-branch transfer management, automated reordering, POS integration, and a live executive dashboard.",
      result: "Stockouts reduced by 65%. Inter-branch transfers automated. Annual inventory holding cost reduced by ₹18 lakhs.",
      technologies: ["Custom ERP", "React", "MySQL", "Python", "GCP"],
    },
  ],
  achievements: [
    { value: 35, suffix: "+", label: "ERP Systems Deployed" },
    { value: 22, suffix: "%", label: "Avg. Cost Reduction" },
    { value: 30, suffix: "+", label: "Hours Saved Weekly" },
    { value: 100, suffix: "%", label: "Adoption Rate" },
  ],
  testimonials: [
    {
      name: "Mohammed Farhan",
      role: "Managing Director",
      company: "PrimeCraft Manufacturing",
      industry: "Manufacturing",
      rating: 5,
      review: "We went from 6 disconnected tools to one ERP that our entire team actually uses. Our monthly reporting that used to take 4 days now takes 2 hours. The ROI was clear within the first quarter.",
      avatar: "https://images.unsplash.com/photo-1500648767791-00dcc994a43e?q=80&w=256&h=256&auto=format&fit=crop",
    },
    {
      name: "Kavitha Suresh",
      role: "Operations Head",
      company: "StyleSelect Retail",
      industry: "Retail",
      rating: 5,
      review: "Inventory stockouts used to cost us lakhs every month. After the Smatel ERP, we have complete visibility and stockouts are down 65%. The system paid for itself in 4 months.",
      avatar: "https://images.unsplash.com/photo-1580489944761-15a19d654956?q=80&w=256&h=256&auto=format&fit=crop",
    },
  ],
  faqs: [
    { question: "Do you build custom ERP or implement existing platforms?", answer: "We build fully custom ERP systems tailored to your exact workflows. We don't force you into a Salesforce or SAP mould that requires expensive customisation to work for you." },
    { question: "How long does an ERP implementation take?", answer: "A mid-size implementation typically takes 12–20 weeks, including discovery, development, data migration, training, and go-live. We use phased rollouts to minimise disruption." },
    { question: "Can you migrate data from our existing systems?", answer: "Yes. Data migration is a core part of our implementation process. We clean, transform, and import your existing data so you don't lose history." },
    { question: "What about staff training?", answer: "We provide comprehensive training documentation, video guides, and live training sessions for all user roles. Adoption support is included in the implementation." },
    { question: "Can the ERP be accessed on mobile?", answer: "Yes. All our ERP systems are responsive web applications accessible from any device, with optional dedicated mobile apps for field operations." },
    { question: "What happens if our business processes change?", answer: "ERP systems need to evolve. We offer ongoing enhancement services to modify workflows, add modules, and adapt the system as your business grows." },
  ],
  relatedSolutions: ["crm-solutions", "billing-solutions", "support-maintenance"],
};

export default data;
