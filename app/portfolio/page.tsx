import { PortfolioProject, portfolioProjects, portfolioCategories } from "@/content/portfolio";
import Link from "next/link";
import Image from "next/image";
import { ArrowRight } from "lucide-react";
import { Badge } from "@/components/ui/badge";
import { PortfolioHero } from "@/components/sections/PortfolioHero";
import { ContactCTA } from "@/components/sections/ContactCTA";

export default async function PortfolioPage({ searchParams }: { searchParams: Promise<{ category?: string }> }) {
  const resolvedParams = await searchParams;
  const currentCategory = resolvedParams.category || "All";
  const projects = currentCategory === "All" 
    ? portfolioProjects 
    : portfolioProjects.filter(p => p.tags.includes(currentCategory));

  return (
    <main className="flex flex-col min-h-screen">
      <PortfolioHero />

      <section className="py-6 bg-white border-b border-gray-100">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8 max-w-7xl">
          <div className="flex flex-wrap gap-2 justify-center">
            {portfolioCategories.map(cat => (
              <Link 
                key={cat} 
                href={cat === "All" ? "/portfolio" : `/portfolio?category=${cat}`}
                className={`px-4 py-2 rounded-full text-sm font-medium transition-all ${
                  currentCategory === cat 
                    ? "bg-gradient-to-r from-[#21BDBC] to-[#38BDF8] text-white font-semibold shadow-sm" 
                    : "bg-gray-50 text-gray-600 hover:bg-teal-50 hover:text-teal-700"
                }`}
              >
                {cat}
              </Link>
            ))}
          </div>
        </div>
      </section>

      <section className="py-24 bg-gray-50">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8 max-w-7xl">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-10">
            {projects.map((project) => (
              <div
                key={project.id}
                className="group bg-white rounded-2xl overflow-hidden shadow-sm hover:shadow-xl transition-all duration-500 border border-gray-100 flex flex-col h-full"
              >
                <Link href={`/portfolio/${project.id}`} className="block relative overflow-hidden bg-slate-950 border-b border-gray-100">
                  {/* Browser Header Bar */}
                  <div className="bg-slate-900/90 px-3 py-2 flex items-center justify-between border-b border-slate-800">
                    <div className="flex gap-1.5">
                      <div className="w-2 h-2 rounded-full bg-red-400/80" />
                      <div className="w-2 h-2 rounded-full bg-yellow-400/80" />
                      <div className="w-2 h-2 rounded-full bg-green-400/80" />
                    </div>
                    <span className="text-[10px] font-mono text-slate-400 bg-slate-950/80 px-2.5 py-0.5 rounded border border-slate-800">
                      smatal.cloud/{project.id}
                    </span>
                    <Badge variant="secondary" className="bg-teal-500/10 text-teal-400 border border-teal-500/20 text-[10px] px-1.5 py-0">
                      {project.industry}
                    </Badge>
                  </div>
                  
                  <div className="relative aspect-[16/9] overflow-hidden">
                    <Image
                      src={project.image}
                      alt={project.title || "Portfolio Project"}
                      fill
                      className="object-cover transition-transform duration-700 group-hover:scale-105 opacity-90 group-hover:opacity-100"
                      sizes="(max-width: 1024px) 100vw, 50vw"
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-slate-950/80 via-transparent to-transparent" />
                  </div>
                </Link>
                
                <div className="p-8 flex flex-col flex-1">
                  <h3 className="text-2xl font-bold text-gray-900 mb-4">
                    <Link href={`/portfolio/${project.id}`} className="hover:text-teal-700 transition-colors">
                      {project.title}
                    </Link>
                  </h3>
                  
                  <div className="space-y-4 mb-8 flex-1">
                    <div>
                      <h4 className="text-xs font-semibold text-gray-500 uppercase tracking-wider mb-1">The Challenge</h4>
                      <p className="text-sm text-gray-700 leading-relaxed line-clamp-2">{project.challenge}</p>
                    </div>
                    <div>
                      <h4 className="text-xs font-semibold text-gray-500 uppercase tracking-wider mb-1">The Solution</h4>
                      <p className="text-sm text-gray-700 leading-relaxed line-clamp-2">{project.solution}</p>
                    </div>
                    <div>
                      <h4 className="text-xs font-semibold text-teal-700 uppercase tracking-wider mb-1">The Result</h4>
                      <p className="text-sm font-medium text-gray-900 leading-relaxed line-clamp-2">{project.result}</p>
                    </div>
                  </div>

                  <div className="mt-auto pt-6 border-t border-gray-100 flex items-center justify-between">
                    <div className="flex flex-wrap gap-2">
                      {project.technologies.slice(0, 3).map(tech => (
                        <span key={tech} className="text-xs text-gray-500 bg-gray-100 px-2 py-1 rounded-md">
                          {tech}
                        </span>
                      ))}
                      {project.technologies.length > 3 && (
                        <span className="text-xs text-gray-500 bg-gray-100 px-2 py-1 rounded-md">
                          +{project.technologies.length - 3}
                        </span>
                      )}
                    </div>
                    <Link 
                      href={`/portfolio/${project.id}`}
                      className="text-sm font-semibold text-teal-700 hover:text-teal-900 transition-colors flex items-center shrink-0"
                    >
                      Case Study <ArrowRight className="ml-1.5 w-3.5 h-3.5" />
                    </Link>
                  </div>
                </div>
              </div>
            ))}
          </div>
          {projects.length === 0 && (
            <div className="text-center py-20">
              <p className="text-gray-500 text-lg">No projects found in this category.</p>
            </div>
          )}
        </div>
      </section>

      <ContactCTA />
    </main>
  );
}
