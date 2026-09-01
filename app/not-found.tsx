import Link from "next/link";
import { buttonVariants } from "@/components/ui/button";
import { cn } from "@/lib/utils";
import { AnimatedHeroWrapper } from "@/components/ui/animated-hero-wrapper";
import { Home, ArrowLeft } from "lucide-react";

export default function NotFound() {
  return (
    <div className="flex flex-col min-h-[70vh] items-center justify-center">
      <AnimatedHeroWrapper className="w-full py-28 bg-[#FAFAFA] text-center">
        <div className="container mx-auto px-4 max-w-2xl relative z-10">
          <div className="inline-flex items-center rounded-full border border-teal-500/30 bg-teal-500/10 px-4 py-1.5 text-sm font-semibold text-teal-700 mb-6 tracking-widest uppercase shadow-[0_0_12px_rgba(33,189,188,0.12)]">
            404 Error
          </div>
          <h1 className="text-5xl md:text-7xl font-black tracking-tight text-gray-900 mb-4">
            Page Not Found
          </h1>
          <p className="text-lg text-gray-600 mb-8 max-w-md mx-auto leading-relaxed">
            The page you are looking for might have been removed, had its name changed, or is temporarily unavailable.
          </p>
          <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
            <Link
              href="/"
              className={cn(buttonVariants({ size: "lg", className: "h-12 px-8 font-semibold" }))}
            >
              <Home className="mr-2 h-4 w-4" /> Return Home
            </Link>
            <Link
              href="/services"
              className={cn(buttonVariants({ variant: "outline", size: "lg", className: "h-12 px-8 font-medium bg-white" }))}
            >
              <ArrowLeft className="mr-2 h-4 w-4" /> Explore Services
            </Link>
          </div>
        </div>
      </AnimatedHeroWrapper>
    </div>
  );
}
