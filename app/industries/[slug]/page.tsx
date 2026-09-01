import { notFound } from "next/navigation";
import Link from "next/link";
import { 
  ArrowLeft, 
  ArrowRight, 
  CheckCircle2, 
  ShieldCheck, 
  Zap, 
  Layers, 
  Cloud, 
  Activity, 
  FileText, 
  Users, 
  Package, 
  GraduationCap, 
  Monitor, 
  Smartphone, 
  ShoppingBag, 
  CreditCard, 
  Factory, 
  Truck, 
  Shield, 
  MapPin, 
  TrendingUp, 
  Hotel, 
  Repeat, 
  Building2, 
  ClipboardList, 
  Store, 
  Globe, 
  Rocket, 
  AlertTriangle 
} from "lucide-react";
import { getIndustryBySlug, validIndustrySlugs } from "@/content/industries";
import { portfolioProjects } from "@/content/portfolio";
import { AnimatedHeroWrapper } from "@/components/ui/animated-hero-wrapper";
import { Badge } from "@/components/ui/badge";
import { buttonVariants } from "@/components/ui/button";
import { cn } from "@/lib/utils";
import { ContactCTA } from "@/components/sections/ContactCTA";
import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";
import Image from "next/image";

export async function generateStaticParams() {
  return validIndustrySlugs.map((slug) => ({ slug }));
}

const iconMap: Record<string, React.ReactNode> = {
  rocket: <Rocket className="w-6 h-6" />,
  layers: <Layers className="w-6 h-6" />,
  zap: <Zap className="w-6 h-6" />,
  cloud: <Cloud className="w-6 h-6" />,
  activity: <Activity className="w-6 h-6" />,
  "file-text": <FileText className="w-6 h-6" />,
  users: <Users className="w-6 h-6" />,
  package: <Package className="w-6 h-6" />,
  "graduation-cap": <GraduationCap className="w-6 h-6" />,
  monitor: <Monitor className="w-6 h-6" />,
  smartphone: <Smartphone className="w-6 h-6" />,
  "shopping-bag": <ShoppingBag className="w-6 h-6" />,
  "credit-card": <CreditCard className="w-6 h-6" />,
  factory: <Factory className="w-6 h-6" />,
  truck: <Truck className="w-6 h-6" />,
  shield: <Shield className="w-6 h-6" />,
  "map-pin": <MapPin className="w-6 h-6" />,
  "trending-up": <TrendingUp className="w-6 h-6" />,
  hotel: <Hotel className="w-6 h-6" />,
  repeat: <Repeat className="w-6 h-6" />,
  "building-2": <Building2 className="w-6 h-6" />,
  "clipboard-list": <ClipboardList className="w-6 h-6" />,
  store: <Store className="w-6 h-6" />,
  globe: <Globe className="w-6 h-6" />,
};

export default async function IndustryDetailPage({ params }: { params: Promise<{ slug: string }> }) {
  const slug = (await params).slug;
  const industry = getIndustryBySlug(slug);

  if (!industry) {
    notFound();
  }

  // Find matching portfolio projects
  const matchingProjects = portfolioProjects.filter((p) => 
    p.industry.toLowerCase().includes(industry.slug.replace(/-/g, ' ')) ||
    industry.name.toLowerCase().includes(p.industry.toLowerCase())
  );

  return (
    <main className="flex flex-col min-h-screen">
      {/* 1. Hero Section */}
      <AnimatedHeroWrapper className="pt-32 pb-20 bg-[#FAFAFA] border-b border-gray-100">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8 max-w-5xl relative z-10 text-center">
          <Link
            href="/#industries"
            className="inline-flex items-center text-sm font-medium text-teal-700 hover:text-teal-900 mb-8 transition-colors"
          >
            <ArrowLeft className="mr-2 w-4 h-4" /> Back to Industries
          </Link>

          <div className="flex justify-center mb-6">
            <span className="inline-flex items-center rounded-full border border-teal-500/30 bg-teal-500/10 px-4 py-1.5 text-sm font-semibold text-teal-700 tracking-widest uppercase shadow-[0_0_12px_rgba(33,189,188,0.12)]">
              {industry.badge}
            </span>
          </div>

          <h1 className="text-4xl sm:text-5xl lg:text-6xl font-black tracking-tight text-gray-900 mb-6 leading-[1.15]">
            Software Solutions for{" "}
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-teal-700 via-[#21BDBC] to-sky-600">
              {industry.name}
            </span>
          </h1>

          <p className="text-xl text-gray-600 max-w-3xl mx-auto leading-relaxed mb-10">
            {industry.heroDescription}
          </p>

          <div className="flex flex-col sm:flex-row justify-center gap-4">
            <Link
              href="/contact"
              className={cn(buttonVariants({ size: "lg", className: "h-12 px-8 font-semibold shadow-[0_4px_14px_0_rgba(33,189,188,0.35)]" }))}
            >
              Consult Sector Specialists <ArrowRight className="ml-2 h-4 w-4" />
            </Link>
            <Link
              href="/portfolio"
              className={cn(buttonVariants({ variant: "outline", size: "lg", className: "h-12 px-8 font-medium bg-white" }))}
            >
              View Proven Case Studies
            </Link>
          </div>
        </div>
      </AnimatedHeroWrapper>

      {/* 2. Key Metrics Bar */}
      <section className="py-12 bg-slate-950 text-white border-y border-slate-800">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8 max-w-7xl">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-6 text-center">
            {industry.stats.map((stat) => (
              <div key={stat.label} className="p-4 rounded-xl bg-slate-900/50 border border-slate-800/80">
                <div className="text-3xl lg:text-4xl font-black text-[#21BDBC] mb-1">
                  {stat.value}
                </div>
                <div className="text-xs sm:text-sm text-slate-400 font-medium">
                  {stat.label}
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* 3. Industry Challenges */}
      <section className="py-24 bg-white">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8 max-w-7xl">
          <div className="text-center max-w-3xl mx-auto mb-16">
            <Badge variant="outline" className="mb-4">Industry Bottlenecks</Badge>
            <h2 className="text-3xl md:text-4xl font-bold tracking-tight text-gray-900 mb-4">
              Challenges Holding {industry.name} Back
            </h2>
            <p className="text-lg text-gray-600">
              We specialize in removing these operational bottlenecks with reliable custom software.
            </p>
          </div>

          <div className="grid md:grid-cols-3 gap-8 max-w-6xl mx-auto">
            {industry.challenges.map((challenge, index) => (
              <div
                key={challenge.title}
                className="p-8 rounded-2xl border border-gray-100 bg-gray-50/80 hover:bg-white hover:border-teal-200 hover:shadow-xl transition-all duration-300 flex flex-col"
              >
                <div className="w-10 h-10 rounded-xl bg-red-50 text-red-500 flex items-center justify-center mb-6 shrink-0">
                  <AlertTriangle className="w-5 h-5" />
                </div>
                <h3 className="text-lg font-bold text-gray-900 mb-3">
                  {challenge.title}
                </h3>
                <p className="text-sm text-gray-600 leading-relaxed">
                  {challenge.description}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* 4. Purpose-Built Solutions */}
      <section className="py-24 bg-slate-50 border-t border-gray-100">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8 max-w-7xl">
          <div className="text-center max-w-3xl mx-auto mb-16">
            <Badge variant="outline" className="mb-4 border-teal-500/30 bg-teal-500/10 text-teal-700">
              Tailored Architecture
            </Badge>
            <h2 className="text-3xl md:text-5xl font-bold tracking-tight text-gray-900 mb-6">
              Our Core Solutions for {industry.name}
            </h2>
            <p className="text-lg text-gray-600">
              Modular, battle-tested software designed specifically for your operational workflow.
            </p>
          </div>

          <div className="grid sm:grid-cols-2 lg:grid-cols-2 gap-8 max-w-5xl mx-auto">
            {industry.solutions.map((sol) => (
              <div
                key={sol.title}
                className="p-8 rounded-2xl border border-gray-200/80 bg-white shadow-sm hover:shadow-xl hover:border-teal-300 transition-all duration-300 flex flex-col justify-between"
              >
                <div>
                  <div className="w-12 h-12 rounded-xl bg-teal-50 text-teal-700 flex items-center justify-center mb-6 shadow-sm">
                    {iconMap[sol.iconName] || <Zap className="w-6 h-6" />}
                  </div>
                  <h3 className="text-xl font-bold text-gray-900 mb-3">
                    {sol.title}
                  </h3>
                  <p className="text-gray-600 text-sm leading-relaxed mb-6">
                    {sol.description}
                  </p>
                </div>
                <div className="pt-4 border-t border-gray-100 flex items-center text-sm font-semibold text-teal-700">
                  <CheckCircle2 className="w-4 h-4 mr-2 text-teal-600" /> Production-Ready Architecture
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* 5. Tech Stack & Compliance */}
      <section className="py-20 bg-white border-t border-gray-100">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8 max-w-5xl">
          <div className="bg-gradient-to-r from-slate-900 to-slate-950 rounded-3xl p-8 sm:p-12 text-white shadow-2xl relative overflow-hidden">
            <div className="absolute top-0 right-0 w-80 h-80 bg-teal-500/10 rounded-full blur-[100px] pointer-events-none" />
            
            <div className="relative z-10 grid md:grid-cols-2 gap-10 items-center">
              <div>
                <span className="inline-flex items-center text-xs font-semibold uppercase tracking-widest text-[#21BDBC] mb-4">
                  <ShieldCheck className="w-4 h-4 mr-1.5" /> Security & Compliance
                </span>
                <h3 className="text-2xl sm:text-3xl font-bold mb-4">
                  Enterprise-Grade Standards
                </h3>
                <p className="text-slate-300 text-sm leading-relaxed mb-6">
                  Every solution is engineered with strict regulatory frameworks, audit trails, and bank-grade data security.
                </p>
                <div className="flex flex-wrap gap-2">
                  {industry.compliance.map((item) => (
                    <span key={item} className="px-3 py-1 rounded-full bg-teal-500/10 border border-teal-500/20 text-teal-300 text-xs font-medium">
                      ✓ {item}
                    </span>
                  ))}
                </div>
              </div>

              <div className="bg-slate-900/80 p-6 rounded-2xl border border-slate-800">
                <div className="text-xs font-mono text-slate-400 mb-4 uppercase tracking-wider">
                  Technology Ecosystem
                </div>
                <div className="flex flex-wrap gap-2">
                  {industry.techStack.map((tech) => (
                    <span key={tech} className="px-3 py-1.5 rounded-lg bg-slate-950 border border-slate-800 text-slate-200 text-xs font-semibold">
                      {tech}
                    </span>
                  ))}
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* 6. Matching Portfolio Projects (if any) */}
      {matchingProjects.length > 0 && (
        <section className="py-24 bg-gray-50 border-t border-gray-100">
          <div className="container mx-auto px-4 sm:px-6 lg:px-8 max-w-7xl">
            <div className="flex flex-col md:flex-row md:items-end justify-between mb-16 gap-6">
              <div>
                <Badge variant="outline" className="mb-4">Proven Results</Badge>
                <h2 className="text-3xl md:text-4xl font-bold tracking-tight text-gray-900 mb-2">
                  Featured {industry.name} Case Studies
                </h2>
                <p className="text-gray-600 text-base">
                  Real implementations that delivered measurable business growth.
                </p>
              </div>
              <Link
                href="/portfolio"
                className="text-sm font-semibold text-teal-700 hover:text-teal-900 flex items-center shrink-0"
              >
                View All Case Studies <ArrowRight className="ml-1.5 w-4 h-4" />
              </Link>
            </div>

            <div className="grid md:grid-cols-2 gap-8">
              {matchingProjects.slice(0, 2).map((project) => (
                <div
                  key={project.id}
                  className="bg-white rounded-2xl overflow-hidden shadow-sm hover:shadow-xl transition-all duration-300 border border-gray-100 flex flex-col"
                >
                  <div className="relative overflow-hidden bg-slate-950 border-b border-gray-100">
                    <div className="bg-slate-900/90 px-3 py-2 flex items-center justify-between border-b border-slate-800">
                      <div className="flex gap-1.5">
                        <div className="w-2 h-2 rounded-full bg-red-400/80" />
                        <div className="w-2 h-2 rounded-full bg-yellow-400/80" />
                        <div className="w-2 h-2 rounded-full bg-green-400/80" />
                      </div>
                      <span className="text-[10px] font-mono text-slate-400">
                        smatal.cloud/{project.id}
                      </span>
                      <Badge variant="secondary" className="bg-teal-500/10 text-teal-400 text-[10px]">
                        {project.industry}
                      </Badge>
                    </div>
                    <div className="relative aspect-[16/9] overflow-hidden">
                      <Image
                        src={project.image}
                        alt={project.title}
                        fill
                        className="object-cover opacity-90"
                        sizes="(max-width: 768px) 100vw, 50vw"
                      />
                    </div>
                  </div>

                  <div className="p-8 flex flex-col flex-1">
                    <h3 className="text-xl font-bold text-gray-900 mb-3">{project.title}</h3>
                    <p className="text-sm text-gray-600 mb-6 line-clamp-2">{project.solution}</p>
                    <div className="mt-auto pt-4 border-t border-gray-100 flex items-center justify-between">
                      <span className="text-xs font-semibold text-teal-700">
                        Result: {project.result.split(',')[0]}
                      </span>
                      <Link
                        href={`/portfolio/${project.id}`}
                        className="text-xs font-bold text-teal-700 hover:text-teal-900 flex items-center"
                      >
                        Read Story <ArrowRight className="ml-1 w-3.5 h-3.5" />
                      </Link>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </section>
      )}

      {/* 7. Industry FAQs */}
      {industry.faqs.length > 0 && (
        <section className="py-24 bg-white border-t border-gray-100">
          <div className="container mx-auto px-4 sm:px-6 lg:px-8 max-w-4xl">
            <div className="text-center mb-12">
              <Badge variant="outline" className="mb-4">Sector Insights</Badge>
              <h2 className="text-3xl md:text-4xl font-bold tracking-tight text-gray-900 mb-4">
                Frequently Asked Questions
              </h2>
            </div>

            <div className="bg-white rounded-2xl border border-gray-100 p-4 sm:p-8 shadow-sm">
              <Accordion className="w-full">
                {industry.faqs.map((faq, index) => (
                  <AccordionItem key={index} value={`faq-${index}`} className="border-b-gray-100 last:border-0">
                    <AccordionTrigger className="text-left font-semibold text-gray-900 hover:text-teal-700 transition-colors">
                      {faq.question}
                    </AccordionTrigger>
                    <AccordionContent className="text-gray-600 leading-relaxed text-base pb-6">
                      {faq.answer}
                    </AccordionContent>
                  </AccordionItem>
                ))}
              </Accordion>
            </div>
          </div>
        </section>
      )}

      {/* 8. Bottom CTA */}
      <ContactCTA />
    </main>
  );
}
