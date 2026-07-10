import type { SolutionPageData } from "./types";

const data: SolutionPageData = {
  slug: "mobile-app-development",
  hero: {
    badge: "Mobile App Development",
    title: "Apps Your Customers Will Actually Use",
    description: "We build native and cross-platform mobile applications for iOS and Android that are fast, intuitive, and designed to retain users — not just acquire them.",
    image: "https://images.unsplash.com/photo-1512941937669-90a1b58e7e9c?q=80&w=2070&auto=format&fit=crop",
    cta: { text: "Build Your App", href: "/contact" },
  },
  challenges: [
    {
      title: "No Mobile Presence",
      description: "Your competitors have apps and you don't — your customers have no convenient way to engage with your business on the go.",
      icon: "smartphone-off",
    },
    {
      title: "Poor User Retention",
      description: "Your existing app is clunky, slow, or confusing — users download it once and never return.",
      icon: "users",
    },
    {
      title: "Separate iOS & Android Codebases",
      description: "Maintaining two separate codebases doubles development cost, time, and the risk of inconsistent experiences.",
      icon: "split",
    },
    {
      title: "Offline Functionality Gaps",
      description: "Field workers and customers in low-connectivity areas can't rely on your app, reducing its real-world utility.",
      icon: "wifi-off",
    },
  ],
  solution: {
    heading: "Mobile Apps That Drive Real Business Results",
    description: "We take a user-first approach to mobile development — starting with your customer journey before a single line of code is written. Our cross-platform approach (React Native / Flutter) means you get one high-quality codebase that runs natively on both iOS and Android, reducing cost without sacrificing performance. From MVP to enterprise-grade app, we deliver mobile software that your users love.",
    highlights: [
      "Single codebase — iOS & Android",
      "Native performance & animations",
      "Offline-first architecture where needed",
      "App Store & Play Store submission included",
    ],
  },
  features: [
    { title: "Cross-Platform Development", description: "One codebase for iOS and Android using React Native or Flutter.", icon: "layers" },
    { title: "Push Notifications", description: "Engage users with smart, personalised push notification systems.", icon: "bell" },
    { title: "Offline Mode", description: "Local data sync so the app works without an internet connection.", icon: "wifi-off" },
    { title: "In-App Payments", description: "Stripe, Razorpay, and Apple/Google Pay integration.", icon: "credit-card" },
    { title: "Real-Time Features", description: "Live chat, notifications, and data sync powered by WebSockets.", icon: "activity" },
    { title: "Analytics & Crash Reporting", description: "Firebase Analytics and Crashlytics for insight and reliability.", icon: "bar-chart" },
  ],
  benefits: [
    { title: "Reach Customers Anywhere", description: "A mobile app puts your business in your customer's pocket 24/7.", metric: "Always accessible" },
    { title: "Higher Engagement", description: "App users engage 3× more frequently than mobile web users.", metric: "3× engagement" },
    { title: "Half the Development Cost", description: "Cross-platform development means one team, one codebase, lower cost.", metric: "50% cost saving" },
    { title: "Faster Time to Market", description: "Our agile process gets your MVP to the App Store in 10–14 weeks.", metric: "10–14 weeks" },
    { title: "Better Customer Loyalty", description: "Push notifications and personalised experiences drive repeat business.", metric: "Higher retention" },
  ],
  industries: ["Retail & E-commerce", "Healthcare", "Education", "Logistics", "Hospitality", "Finance", "Startups", "Field Services"],
  portfolio: [
    {
      id: "field-service-app",
      name: "Field Service Management App",
      industry: "Logistics",
      image: "https://images.unsplash.com/photo-1526374965328-7f61d4dc18c5?q=80&w=2070&auto=format&fit=crop",
      challenge: "A logistics company had field technicians using paper forms and phone calls to report job status — leading to delays, lost data, and poor customer communication.",
      solution: "Built a cross-platform mobile app with job assignment, GPS tracking, digital forms, photo capture, customer signature, and real-time status updates.",
      result: "Job completion reporting time reduced from 2 hours to 10 minutes. Customer satisfaction NPS improved by 28 points.",
      technologies: ["React Native", "Node.js", "PostgreSQL", "AWS"],
    },
    {
      id: "retail-loyalty-app",
      name: "Retail Loyalty & Shopping App",
      industry: "Retail",
      image: "https://images.unsplash.com/photo-1607082348824-0a96f2a4b9da?q=80&w=2070&auto=format&fit=crop",
      challenge: "A retail chain wanted a loyalty programme but their existing POS had no mobile component. Customers were leaving for competitors with better digital experiences.",
      solution: "Developed an iOS and Android app with loyalty points, QR-code redemption, product browsing, personalised offers, and push notifications.",
      result: "12,000 app downloads in the first month. 22% increase in repeat customer visits. Average basket size up 18%.",
      technologies: ["Flutter", "Firebase", "Stripe", "GCP"],
    },
  ],
  achievements: [
    { value: 45, suffix: "+", label: "Apps Launched" },
    { value: 500, suffix: "K+", label: "Total App Users" },
    { value: 4.7, suffix: "★", label: "Avg. App Store Rating" },
    { value: 10, suffix: " wk", label: "Avg. MVP Delivery" },
  ],
  testimonials: [
    {
      name: "Arjun Mehta",
      role: "Head of Operations",
      company: "SwiftLogix",
      industry: "Logistics",
      rating: 5,
      review: "Our field technicians went from paper forms to a slick mobile app in 12 weeks. The difference in operational efficiency has been remarkable — our customers love the real-time updates.",
      avatar: "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?q=80&w=256&h=256&auto=format&fit=crop",
    },
    {
      name: "Sunita Reddy",
      role: "CEO",
      company: "FreshMart Retail",
      industry: "Retail",
      rating: 5,
      review: "The loyalty app Smatel built for us was a game-changer. 12,000 downloads in the first month and our repeat customer numbers are up significantly.",
      avatar: "https://images.unsplash.com/photo-1438761681033-6461ffad8d80?q=80&w=256&h=256&auto=format&fit=crop",
    },
  ],
  faqs: [
    { question: "Should I build native or cross-platform?", answer: "For most businesses, cross-platform (React Native or Flutter) is the right choice — it delivers near-native performance at 40–50% lower cost. We'll recommend the best approach for your specific needs." },
    { question: "Do you handle App Store submission?", answer: "Yes. We handle the full submission process for both Apple App Store and Google Play Store, including screenshots, descriptions, and compliance review." },
    { question: "How long does it take to build a mobile app?", answer: "An MVP typically takes 10–14 weeks. Full-featured apps take 16–24 weeks. We use sprints so you see working builds throughout." },
    { question: "Can you build on top of our existing backend?", answer: "Yes. If you already have an API or backend, we can build a mobile front-end that connects to it. We're comfortable with REST, GraphQL, and WebSocket APIs." },
    { question: "What about app updates and maintenance?", answer: "We provide ongoing maintenance plans covering OS updates, bug fixes, performance improvements, and new feature development." },
    { question: "Can the app work offline?", answer: "Yes. We can implement offline-first architecture with local storage and background sync so the app remains functional without internet." },
  ],
  relatedSolutions: ["custom-software-development", "web-development", "crm-solutions"],
};

export default data;
