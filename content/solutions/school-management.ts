import type { SolutionPageData } from "./types";

const data: SolutionPageData = {
  slug: "school-management",
  hero: {
    badge: "School Management",
    title: "Automate Every Aspect of School Administration",
    description: "Replace paper-based processes, missed fee collections, and poor communication with a comprehensive school management system that runs your institution smoothly.",
    image: "https://images.unsplash.com/photo-1509062522246-3755977927d7?q=80&w=2000&auto=format&fit=crop",
    cta: { text: "Book a School Demo", href: "/contact" },
  },
  challenges: [
    {
      title: "Paper-Based Administration",
      description: "Manual registers, printed reports, and paper forms make data retrieval slow, error-prone, and impossible to scale.",
      icon: "file",
    },
    {
      title: "Fee Collection Delays",
      description: "Without automated reminders and online payment options, fee collection is inefficient and tracking outstanding fees is a constant struggle.",
      icon: "credit-card",
    },
    {
      title: "Poor Parent Communication",
      description: "Parents don't get timely updates on attendance, grades, or school notices — eroding trust and engagement.",
      icon: "message-square-off",
    },
    {
      title: "Staff Administration Burden",
      description: "Teachers and administrators spend more time on paperwork and manual tasks than on education and student outcomes.",
      icon: "clock",
    },
  ],
  solution: {
    heading: "A Complete Digital School — From Admissions to Results",
    description: "Our school management system digitises every administrative function — from student admissions and daily attendance to exam management, fee collection, and parent communication. Staff spend less time on admin and more time on education. Parents stay informed in real time. Management gets a bird's-eye view of the entire institution. All from one platform.",
    highlights: [
      "Complete student lifecycle — admission to alumni",
      "Automated fee collection with online payments",
      "Real-time parent app with attendance and grade updates",
      "Teacher timetable, attendance, and gradebook",
    ],
  },
  features: [
    { title: "Admissions Management", description: "Online application forms, document collection, interview scheduling, and admission confirmation.", icon: "user-plus" },
    { title: "Attendance System", description: "Digital daily attendance with automated parent SMS/WhatsApp notifications for absences.", icon: "calendar-check" },
    { title: "Fee Management", description: "Fee structure setup, online collection, receipt generation, and outstanding fee tracking.", icon: "indian-rupee" },
    { title: "Exam & Results", description: "Exam scheduling, mark entry, automatic report card generation, and progress tracking.", icon: "clipboard-list" },
    { title: "Parent App", description: "Mobile app for parents to view attendance, grades, homework, notices, and fees.", icon: "smartphone" },
    { title: "Timetable Management", description: "Automated timetable generation, teacher substitution management, and room allocation.", icon: "layout" },
  ],
  benefits: [
    { title: "Reduce Admin Time by 60%", description: "Automate attendance, fee reminders, report cards, and communication — freeing staff for education.", metric: "60% time saved" },
    { title: "Improve Fee Collection", description: "Online payments and automated reminders reduce outstanding fees significantly.", metric: "90%+ collection rate" },
    { title: "Better Parent Engagement", description: "Real-time updates via app build trust and keep parents actively involved in their child's education.", metric: "Higher engagement" },
    { title: "Paperless Operations", description: "Eliminate printing costs, physical storage, and paper-based record-keeping entirely.", metric: "100% paperless" },
    { title: "Data-Driven Decisions", description: "Management dashboards reveal attendance trends, academic performance, and operational metrics.", metric: "Complete visibility" },
  ],
  industries: ["K-12 Schools", "Colleges", "Coaching Institutes", "Training Centers", "Special Education", "International Schools"],
  portfolio: [
    {
      id: "k12-school-erp",
      name: "K-12 School ERP — 1,200 Students",
      industry: "Education",
      image: "https://images.unsplash.com/photo-1588072432836-e10032774350?q=80&w=2072&auto=format&fit=crop",
      challenge: "A private school with 1,200 students was managing attendance in physical registers, collecting fees via cash with manual receipts, and sending notices via paper circulars.",
      solution: "Implemented a full school ERP with digital attendance, online fee payment portal, automated parent app notifications, exam management, and a management dashboard.",
      result: "Fee collection efficiency improved by 85%. Staff admin time reduced by 58%. Parent satisfaction scores went from 3.2 to 4.7 out of 5.",
      technologies: ["React", "React Native", "Node.js", "PostgreSQL", "Razorpay"],
    },
    {
      id: "coaching-institute-platform",
      name: "Coaching Institute Management Platform",
      industry: "Education",
      image: "https://images.unsplash.com/photo-1523050854058-8df90110c9f1?q=80&w=2070&auto=format&fit=crop",
      challenge: "A competitive exam coaching institute with 3 centres and 800 students had no way to share study materials, track attendance across centres, or manage batch schedules efficiently.",
      solution: "Built a multi-centre management platform with batch scheduling, digital attendance, online test management, study material distribution, and student performance analytics.",
      result: "Student pass rates improved 22% within one academic year. Material distribution time reduced from days to seconds. Multi-centre management became seamless.",
      technologies: ["Next.js", "Python", "PostgreSQL", "AWS S3", "Firebase"],
    },
  ],
  achievements: [
    { value: 25, suffix: "+", label: "Schools Automated" },
    { value: 15000, suffix: "+", label: "Students Managed" },
    { value: 90, suffix: "%+", label: "Fee Collection Rate" },
    { value: 60, suffix: "%", label: "Admin Time Saved" },
  ],
  testimonials: [
    {
      name: "Sr. Margaret D'Souza",
      role: "Principal",
      company: "Holy Cross Academy",
      industry: "Education",
      rating: 5,
      review: "Our school went from paper registers and cash fee collection to a fully digital institution in just 8 weeks. Parents love the app. Our teachers love not spending evenings on paperwork. The transformation has been remarkable.",
      avatar: "https://images.unsplash.com/photo-1551836022-d5d88e9218df?q=80&w=256&h=256&auto=format&fit=crop",
    },
    {
      name: "Ravi Shankar",
      role: "Director",
      company: "Apex Coaching Institute",
      industry: "Education",
      rating: 5,
      review: "Managing 3 centres was a nightmare before. Now everything is in one platform — attendance, tests, materials, and fees. Our student pass rates improved 22% and I can run the institute from anywhere.",
      avatar: "https://images.unsplash.com/photo-1542178243-bc20204b769f?q=80&w=256&h=256&auto=format&fit=crop",
    },
  ],
  faqs: [
    { question: "Does the system support multiple branches?", answer: "Yes. Our school management system is built for multi-campus institutions. Each branch has its own data, but management gets a consolidated view across all locations." },
    { question: "Is there a parent mobile app?", answer: "Yes. Parents get a dedicated mobile app (iOS and Android) to track their child's attendance, grades, homework, fee status, and school notices in real time." },
    { question: "Can we collect fees online?", answer: "Yes. We integrate with Razorpay and PayU to accept fees via UPI, cards, and net banking. Automatic receipt generation and accounting entries are included." },
    { question: "How long does implementation take?", answer: "A typical school implementation takes 6–10 weeks including data migration (student records, fee structures) and staff training." },
    { question: "Can it generate progress reports and report cards?", answer: "Yes. The system automates report card generation based on exam scores, with custom grading scales, teacher remarks, and school branding." },
    { question: "Is training provided for teachers and staff?", answer: "Yes. We provide comprehensive on-site training for all staff roles — administrators, teachers, and management — plus video guides and ongoing support." },
  ],
  relatedSolutions: ["custom-software-development", "mobile-app-development", "support-maintenance"],
};

export default data;
