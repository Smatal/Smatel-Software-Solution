// Shared TypeScript types for all solution page data files

export interface SolutionHero {
  badge: string;
  title: string;
  description: string;
  image: string;
  cta: { text: string; href: string };
}

export interface Challenge {
  title: string;
  description: string;
  icon: string;
}

export interface SolutionNarrative {
  heading: string;
  description: string;
  highlights: string[];
}

export interface Feature {
  title: string;
  description: string;
  icon: string;
}

export interface Benefit {
  title: string;
  description: string;
  metric: string;
}

export interface PortfolioProject {
  id: string;
  name: string;
  industry: string;
  image: string;
  challenge: string;
  solution: string;
  result: string;
  technologies: string[];
}

export interface Achievement {
  value: number;
  suffix: string;
  label: string;
}

export interface Testimonial {
  name: string;
  role: string;
  company: string;
  industry: string;
  rating: number;
  review: string;
  avatar: string;
}

export interface FAQ {
  question: string;
  answer: string;
}

export interface SolutionPageData {
  slug: string;
  hero: SolutionHero;
  challenges: Challenge[];
  solution: SolutionNarrative;
  features: Feature[];
  benefits: Benefit[];
  industries: string[];
  portfolio: PortfolioProject[];
  achievements: Achievement[];
  testimonials: Testimonial[];
  faqs: FAQ[];
  relatedSolutions: string[];
}
