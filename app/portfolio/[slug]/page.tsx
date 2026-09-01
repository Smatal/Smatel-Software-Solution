import { notFound } from "next/navigation";
import Image from "next/image";
import Link from "next/link";
import { ArrowLeft, ArrowRight, Quote } from "lucide-react";
import { getPortfolioById, portfolioProjects } from "@/content/portfolio";
import { Badge } from "@/components/ui/badge";
import { buttonVariants } from "@/components/ui/button";
import { cn } from "@/lib/utils";
import { ContactCTA } from "@/components/sections/ContactCTA";
import { ArrowLeft as ArrowLeftIcon, ExternalLink, Calendar, User, Tag } from "lucide-react";
import { AnimatedHeroWrapper } from "@/components/ui/animated-hero-wrapper";

export async function generateStaticParams() {
  return portfolioProjects.map((p) => ({ slug: p.id }));
}

export default async function PortfolioDetailPage({ params }: { params: Promise<{ slug: string }> }) {
  const slug = (await params).slug;
  const project = getPortfolioById(slug);

  if (!project) {
    notFound();
  }

  return (
    <div className="flex flex-col min-h-screen">
      <AnimatedHeroWrapper className="pt-32 pb-20 bg-[#FAFAFA] border-b border-gray-100">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8 text-center max-w-4xl relative z-10">
          <Link href="/portfolio" className="inline-flex items-center text-sm font-medium text-teal-700 hover:text-teal-900 mb-8 transition-colors">
            <ArrowLeftIcon className="mr-2 w-4 h-4" /> Back to Portfolio
          </Link>
          
          <div className="flex flex-wrap gap-2 justify-center mb-6">
            <Badge variant="secondary" className="bg-teal-50 text-teal-700 hover:bg-teal-100 border-none">
              {project.industry}
            </Badge>
            <Badge variant="outline" className="border-gray-200 text-gray-600">
              {project.category}
            </Badge>
          </div>
          
          <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold tracking-tight text-gray-900 mb-6 leading-tight">
            {project.title}
          </h1>
          
          <p className="text-xl text-gray-600 leading-relaxed mb-8">
            {project.overview}
          </p>
          
          <div className="flex items-center gap-4 text-sm">
            <div className="flex flex-col">
              <span className="text-gray-500 font-semibold uppercase tracking-wider text-xs mb-1">Client</span>
              <span className="font-bold text-gray-900">{project.client}</span>
            </div>
            <div className="w-px h-8 bg-gray-200 mx-2" />
            <div className="flex flex-col">
              <span className="text-gray-500 font-semibold uppercase tracking-wider text-xs mb-1">Technologies</span>
              <span className="font-medium text-gray-700">{project.technologies.join(", ")}</span>
            </div>
          </div>
        </div>
      </AnimatedHeroWrapper>

      <section className="py-20 bg-white">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8 max-w-5xl">
          <div className="rounded-2xl overflow-hidden mb-20 shadow-2xl border border-slate-800 bg-slate-950">
            {/* Window Chrome */}
            <div className="bg-slate-900 px-4 py-3 flex items-center justify-between border-b border-slate-800">
              <div className="flex gap-2">
                <div className="w-3 h-3 rounded-full bg-red-500/80" />
                <div className="w-3 h-3 rounded-full bg-yellow-500/80" />
                <div className="w-3 h-3 rounded-full bg-green-500/80" />
              </div>
              <span className="text-xs font-mono text-slate-400 bg-slate-950/80 px-4 py-1 rounded-full border border-slate-800">
                https://smatal.cloud/products/{project.id}
              </span>
              <div className="w-12 text-right">
                <span className="inline-block w-2 h-2 rounded-full bg-emerald-400 animate-pulse" />
              </div>
            </div>
            
            <div className="relative aspect-video overflow-hidden">
              <Image
                src={project.image}
                alt={project.title}
                fill
                className="object-cover opacity-95"
                priority
                sizes="(max-width: 1024px) 100vw, 1024px"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-slate-950/60 via-transparent to-transparent pointer-events-none" />
            </div>
          </div>

          <div className="grid md:grid-cols-3 gap-12 lg:gap-20">
            <div className="md:col-span-2 space-y-16">
              <div>
                <h2 className="text-2xl font-bold text-gray-900 mb-6 flex items-center">
                  <span className="w-8 h-8 rounded-full bg-red-50 text-red-600 flex items-center justify-center text-sm mr-3">01</span>
                  The Challenge
                </h2>
                <p className="text-lg text-gray-600 leading-relaxed">
                  {project.challenge}
                </p>
              </div>

              <div>
                <h2 className="text-2xl font-bold text-gray-900 mb-6 flex items-center">
                  <span className="w-8 h-8 rounded-full bg-teal-50 text-teal-700 flex items-center justify-center text-sm mr-3 font-semibold">02</span>
                  Our Solution
                </h2>
                <p className="text-lg text-gray-600 leading-relaxed">
                  {project.solution}
                </p>
              </div>

              <div>
                <h2 className="text-2xl font-bold text-gray-900 mb-6 flex items-center">
                  <span className="w-8 h-8 rounded-full bg-emerald-50 text-emerald-600 flex items-center justify-center text-sm mr-3">03</span>
                  The Result
                </h2>
                <div className="bg-emerald-50/50 rounded-2xl p-8 border border-emerald-100">
                  <p className="text-xl font-medium text-gray-900 leading-relaxed">
                    {project.result}
                  </p>
                </div>
              </div>
            </div>

            <div className="space-y-10">
              <div className="bg-gray-50 rounded-2xl p-6 border border-gray-100">
                <h3 className="text-sm font-bold text-gray-900 uppercase tracking-wider mb-4">Tech Stack</h3>
                <div className="flex flex-wrap gap-2">
                  {project.technologies.map(tech => (
                    <span key={tech} className="px-3 py-1.5 bg-white border border-gray-200 rounded-lg text-sm font-medium text-gray-700 shadow-sm">
                      {tech}
                    </span>
                  ))}
                </div>
              </div>

              {project.testimonial && (
                <div className="bg-slate-900 rounded-2xl p-8 relative overflow-hidden shadow-lg border border-slate-800">
                  <div className="absolute top-0 right-0 w-32 h-32 bg-teal-500/10 rounded-full blur-[40px] -mr-10 -mt-10" />
                  <Quote className="w-8 h-8 text-teal-400 mb-6" />
                  <p className="text-slate-100 text-lg font-medium leading-relaxed mb-6 relative z-10">
                    "{project.testimonial.quote}"
                  </p>
                  <div>
                    <h4 className="font-bold text-white">{project.testimonial.name}</h4>
                    <p className="text-slate-400 text-sm">{project.testimonial.role}</p>
                  </div>
                </div>
              )}
            </div>
          </div>
        </div>
      </section>

      <section className="py-20 bg-gray-50 border-t border-gray-100">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8 max-w-4xl text-center">
          <h2 className="text-3xl font-bold text-gray-900 mb-6">Ready to achieve similar results?</h2>
          <Link href="/contact" className={cn(buttonVariants({ size: "lg" }))}>
            Start Your Project <ArrowRight className="ml-2 w-4 h-4" />
          </Link>
        </div>
      </section>
    </div>
  );
}
