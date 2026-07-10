import { homepageData } from "@/content/homepage";
import Link from "next/link";
import { ArrowRight } from "lucide-react";
import { ContactCTA } from "@/components/sections/ContactCTA";

export default function ServicesPage() {
  const { solutionCategories } = homepageData;
  return (
    <div className="flex flex-col min-h-screen">
      {/* Page Header */}
      <section className="pt-32 pb-20 bg-[#FAFAFA] relative overflow-hidden border-b border-gray-100">
        {/* Abstract Parallax Background */}
        <div className="absolute inset-0 z-0 opacity-[0.35]" style={{ backgroundImage: 'linear-gradient(to right, rgba(99,102,241,0.5) 1px, transparent 1px), linear-gradient(to bottom, rgba(99,102,241,0.5) 1px, transparent 1px)', backgroundSize: '64px 64px' }} />
        
        <div className="container mx-auto px-4 sm:px-6 lg:px-8 text-center max-w-3xl relative z-10">
          <div className="inline-flex items-center rounded-full border border-indigo-500/30 bg-indigo-500/10 px-4 py-1.5 text-sm font-semibold text-indigo-600 mb-6 tracking-widest uppercase">
            End-to-End Solutions
          </div>
          <h1 className="text-4xl md:text-6xl font-bold tracking-tight mb-6 text-gray-900 leading-tight">
            {solutionCategories.heading}
          </h1>
          <p className="text-xl text-gray-600 leading-relaxed">
            {solutionCategories.description}
          </p>
        </div>
      </section>
      
      {/* Services Grid */}
      <section className="py-24 bg-white">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8 max-w-7xl">
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {solutionCategories.categories.map((category, index) => {
              const gradients = [
                "from-blue-500/20 via-indigo-500/20 to-purple-500/20",
                "from-emerald-500/20 via-teal-500/20 to-cyan-500/20",
                "from-orange-500/20 via-amber-500/20 to-yellow-500/20",
                "from-pink-500/20 via-rose-500/20 to-red-500/20",
                "from-violet-500/20 via-fuchsia-500/20 to-purple-500/20",
                "from-cyan-500/20 via-sky-500/20 to-blue-500/20"
              ];
              const bgGradient = gradients[index % gradients.length];
              
              return (
                <Link href={`/services/${category.slug}`} key={category.slug} className="group relative h-96 w-full overflow-hidden rounded-3xl shadow-sm hover:shadow-xl transition-all duration-500 hover:-translate-y-2 border border-gray-100 bg-white block flex flex-col justify-end p-8">
                  
                  {/* Organic Abstract CSS Mesh Gradient Background */}
                  <div className={`absolute inset-0 bg-gradient-to-br ${bgGradient} opacity-30 group-hover:opacity-100 transition-opacity duration-700`} />
                  
                  {/* Subtle Tech Pattern Overlay */}
                  <div className="absolute inset-0 opacity-[0.1]" style={{ backgroundImage: 'radial-gradient(circle at 2px 2px, rgba(0,0,0,0.8) 1px, transparent 0)', backgroundSize: '16px 16px' }} />
                  
                  {/* Animated Glowing Orb */}
                  <div className="absolute -top-20 -right-20 w-40 h-40 bg-white/60 blur-3xl rounded-full group-hover:scale-150 transition-transform duration-1000" />
                  
                  {/* Content */}
                  <div className="relative z-20 mt-auto">
                    <h3 className="text-2xl font-bold mb-2 text-gray-900 tracking-tight group-hover:text-indigo-700 transition-colors">{category.title}</h3>
                    <p className="font-medium text-indigo-600 mb-4 text-sm">{category.tagline}</p>
                    
                    <p className="text-gray-700 text-sm leading-relaxed mb-6 opacity-0 translate-y-4 group-hover:opacity-100 group-hover:translate-y-0 transition-all duration-500">
                      {category.businessProblem}
                    </p>
                    
                    <div className="flex items-center text-sm font-semibold text-indigo-600 group-hover:text-indigo-800 transition-colors">
                      Explore Solution <ArrowRight className="ml-2 w-4 h-4 transition-transform group-hover:translate-x-2" />
                    </div>
                  </div>
                </Link>
              );
            })}
          </div>
        </div>
      </section>

      <ContactCTA />
    </div>
  );
}
