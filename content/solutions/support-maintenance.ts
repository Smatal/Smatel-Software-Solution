import type { SolutionPageData } from "./types";

const data: SolutionPageData = {
  slug: "support-maintenance",
  hero: {
    badge: "Support & Maintenance",
    title: "Keep Your Systems Running at Peak Performance",
    description: "Your technology investment deserves dedicated care. We provide proactive support, security monitoring, and maintenance that keeps your systems secure, fast, and reliable — before problems become crises.",
    image: "https://images.unsplash.com/photo-1558494949-ef010cbdcc31?q=80&w=2034&auto=format&fit=crop",
    cta: { text: "Get a Support Plan", href: "/contact" },
  },
  challenges: [
    {
      title: "Unexpected Downtime Is Costly",
      description: "Every hour your system is down, you're losing revenue, customer trust, and employee productivity — often more than a year of maintenance would cost.",
      icon: "alert-octagon",
    },
    {
      title: "Security Vulnerabilities",
      description: "Unpatched software and outdated dependencies are open doors for attackers. Most breaches target known vulnerabilities that go unpatched for months.",
      icon: "shield-off",
    },
    {
      title: "Performance Degradation Over Time",
      description: "Systems slow down as data grows, traffic increases, and infrastructure ages — but without monitoring, you don't know until users are already frustrated.",
      icon: "trending-down",
    },
    {
      title: "No Dedicated Technical Partner",
      description: "When things go wrong at 11pm on a Friday, you need a team that knows your system and responds fast — not a helpdesk ticket that takes 3 days.",
      icon: "phone-off",
    },
  ],
  solution: {
    heading: "Proactive Care, Not Just Reactive Fixes",
    description: "We don't wait for systems to break — we prevent it. Our support and maintenance service combines 24/7 monitoring, regular security audits, dependency updates, database optimisation, and rapid-response incident management. Your dedicated Smatel team knows your system inside and out, ensuring you always have a technical partner who responds fast and fixes effectively.",
    highlights: [
      "24/7 uptime monitoring with instant alerts",
      "Monthly security patches and dependency updates",
      "Performance optimisation and database tuning",
      "SLA-backed response times — not helpdesk tickets",
    ],
  },
  features: [
    { title: "24/7 Uptime Monitoring", description: "Continuous monitoring of all services with SMS/call alerts and automated failover.", icon: "activity" },
    { title: "Security Patch Management", description: "Regular updates for all dependencies, OS patches, and security vulnerability fixes.", icon: "shield" },
    { title: "Performance Optimisation", description: "Database query optimisation, caching, CDN management, and load testing.", icon: "zap" },
    { title: "Backup & Disaster Recovery", description: "Automated daily backups, tested restore procedures, and multi-region redundancy.", icon: "hard-drive" },
    { title: "Bug Fixes & Enhancements", description: "Priority bug fixing with SLA response times and optional minor feature additions.", icon: "tool" },
    { title: "Monthly Health Reports", description: "Detailed report covering uptime, incidents, performance metrics, and recommendations.", icon: "file-text" },
  ],
  benefits: [
    { title: "99.9% Uptime Guarantee", description: "Proactive monitoring and rapid response ensure your system is always available when customers need it.", metric: "99.9% uptime" },
    { title: "Zero Security Breaches", description: "Regular patching and security audits eliminate the vulnerabilities that attackers exploit.", metric: "Proactive security" },
    { title: "50% Faster Issue Resolution", description: "A dedicated team that knows your system resolves issues 50% faster than any generic support provider.", metric: "50% faster fix" },
    { title: "Systems That Stay Fast", description: "Ongoing performance tuning ensures your system runs as well in year 3 as it did on launch day.", metric: "Sustained performance" },
    { title: "Peace of Mind", description: "Focus on your business knowing that experienced engineers are watching your systems around the clock.", metric: "Always covered" },
  ],
  industries: ["Healthcare", "Finance", "Education", "Retail", "Manufacturing", "Logistics", "Professional Services", "SaaS"],
  portfolio: [
    {
      id: "hospital-system-support",
      name: "Hospital Management System Support",
      industry: "Healthcare",
      image: "https://images.unsplash.com/photo-1576091160399-112ba8d25d1d?q=80&w=2070&auto=format&fit=crop",
      challenge: "A hospital's critical patient management system had experienced 3 major outages in 6 months, one resulting in a 4-hour shutdown during peak OPD hours.",
      solution: "Took over full support and maintenance: implemented comprehensive monitoring, identified and fixed the root cause of recurring failures, applied security patches, and established a 2-hour SLA for critical incidents.",
      result: "Zero critical outages in 18 months since handover. System uptime improved from 96.2% to 99.8%. 3 security vulnerabilities proactively discovered and patched before exploitation.",
      technologies: ["AWS CloudWatch", "PagerDuty", "PostgreSQL", "Node.js"],
    },
    {
      id: "erp-maintenance",
      name: "Manufacturing ERP Ongoing Maintenance",
      industry: "Manufacturing",
      image: "https://images.unsplash.com/photo-1581091226825-a6a2a5aee158?q=80&w=2070&auto=format&fit=crop",
      challenge: "After a custom ERP went live, the client had no technical team to handle bugs, user requests, or performance issues. The system began slowing as data volume grew.",
      solution: "Established a monthly retainer covering bug fixes, database optimisation, user training for new features, quarterly security audits, and minor enhancements as the business evolved.",
      result: "ERP performance 40% faster after database tuning. 12 user-requested enhancements delivered in 6 months. Client's internal team freed from all technical concerns.",
      technologies: ["PostgreSQL", "Node.js", "React", "AWS RDS", "CloudWatch"],
    },
  ],
  achievements: [
    { value: 99.9, suffix: "%", label: "SLA Uptime Delivered" },
    { value: 50, suffix: "+", label: "Systems Under Care" },
    { value: 0, suffix: "", label: "SLA Breaches" },
    { value: 24, suffix: "/7", label: "Monitoring Coverage" },
  ],
  testimonials: [
    {
      name: "Dr. Ramesh Iyer",
      role: "IT Director",
      company: "CityHealth Hospitals",
      industry: "Healthcare",
      rating: 5,
      review: "We had 3 major outages before Smatel took over. In 18 months since, we've had zero. They proactively caught and fixed vulnerabilities we didn't even know existed. Absolute peace of mind for a healthcare system where uptime is literally life-critical.",
      avatar: "https://images.unsplash.com/photo-1500648767791-00dcc994a43e?q=80&w=256&h=256&auto=format&fit=crop",
    },
    {
      name: "Kiran Desai",
      role: "Plant Manager",
      company: "MetalWorks Industries",
      industry: "Manufacturing",
      rating: 5,
      review: "Our ERP was getting slower as we grew. Smatel's maintenance team tuned the database and now it's faster than ever. They also delivered 12 improvements our team requested over 6 months. Exactly what a long-term partner should be.",
      avatar: "https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?q=80&w=256&h=256&auto=format&fit=crop",
    },
  ],
  faqs: [
    { question: "What response times do you guarantee?", answer: "Critical incidents (system down): 1-hour response, 4-hour resolution SLA. High-priority bugs: 4-hour response. Standard requests: 1 business day response." },
    { question: "Do you support systems you didn't build?", answer: "Yes. We take over support for systems built by other vendors after a codebase audit and knowledge transfer period (typically 2–4 weeks)." },
    { question: "What's included in a monthly maintenance retainer?", answer: "Security patches, dependency updates, uptime monitoring, performance reviews, bug fixes within your SLA hours, and a monthly health report." },
    { question: "How do you handle emergency support outside business hours?", answer: "Critical incidents trigger automated alerts to our on-call engineer regardless of time. We guarantee a 1-hour response 24/7 for critical severity." },
    { question: "Can we add new features under a maintenance contract?", answer: "Minor enhancements (under 4 hours) are typically included in retainer hours. Larger features are quoted separately or added to a dedicated development sprint." },
    { question: "How do you manage data backups?", answer: "We implement automated daily encrypted backups with 30-day retention, tested monthly restore procedures, and optionally multi-region replication for critical systems." },
  ],
  relatedSolutions: ["custom-software-development", "erp-solutions", "mobile-app-development"],
};

export default data;
