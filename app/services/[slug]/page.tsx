import Link from "next/link";
import { ArrowLeft } from "lucide-react";
import { buttonVariants } from "@/components/ui/button";
import { cn } from "@/lib/utils";

export default async function ServiceDetailPage({ params }: { params: Promise<{ slug: string }> }) {
  const slug = (await params).slug;
  const title = slug.split('-').map(word => word.charAt(0).toUpperCase() + word.slice(1)).join(' ');

  return (
    <div className="flex flex-col min-h-screen">
      <section className="py-24 bg-muted/30 border-b border-border/50">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8 text-center max-w-3xl">
          <div className="inline-block px-3 py-1 mb-6 text-xs font-mono font-medium rounded-full bg-primary/10 text-primary border border-primary/20">
            Service Detail
          </div>
          <h1 className="text-4xl md:text-5xl font-bold tracking-tight mb-6 text-foreground">{title}</h1>
          <p className="text-xl text-muted-foreground">
            This detailed service page is currently under construction.
          </p>
          <div className="mt-8">
            <Link href="/services" className={cn(buttonVariants({ variant: "outline" }))}>
              <ArrowLeft className="mr-2 h-4 w-4" /> Back to Services
            </Link>
          </div>
        </div>
      </section>
    </div>
  );
}
