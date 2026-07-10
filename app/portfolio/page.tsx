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
                className={`px-4 py-2 rounded-full text-sm font-medium transition-colors ${
                  currentCategory === cat 
                    ? "bg-indigo-600 text-white" 
                    : "bg-gray-50 text-gray-600 hover:bg-gray-100"
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
                <Link href={`/portfolio/${project.id}`} className="block relative aspect-[16/9] overflow-hidden">
                  <Image
                    src={project.image}
                    alt={project.title || "Portfolio Project"}
                    fill
                    className="object-cover transition-transform duration-700 group-hover:scale-105"
                    sizes="(max-width: 1024px) 100vw, 50vw"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent opacity-60" />
                  <div className="absolute bottom-4 left-6 flex items-center gap-2">
                    <Badge variant="secondary" className="bg-white/90 text-gray-900 hover:bg-white border-none">
                      {project.industry}
                    </Badge>
                  </div>
                </Link>
                
                <div className="p-8 flex flex-col flex-1">
                  <h3 className="text-2xl font-bold text-gray-900 mb-4">
                    <Link href={`/portfolio/${project.id}`} className="hover:text-indigo-600 transition-colors">
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
                      <h4 className="text-xs font-semibold text-indigo-600 uppercase tracking-wider mb-1">The Result</h4>
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
                      className="text-sm font-semibold text-indigo-600 hover:text-indigo-800 transition-colors flex items-center shrink-0"
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
