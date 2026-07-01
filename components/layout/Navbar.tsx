import Link from "next/link";
import { buttonVariants } from "@/components/ui/button";
import { cn } from "@/lib/utils";

export function Navbar() {
  const links = [
    { name: "Home", href: "/" },
    { name: "Services", href: "/services" },
    { name: "Industries", href: "/industries" },
    { name: "Portfolio", href: "/portfolio" },
    { name: "Technology", href: "/technology" },
    { name: "About", href: "/about" },
    { name: "Contact", href: "/contact" },
  ];

  return (
    <header className="sticky top-0 z-50 w-full border-b bg-background/95 backdrop-blur supports-[backdrop-filter]:bg-background/60">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8 flex h-16 items-center justify-between">
        <div className="flex gap-6 md:gap-10">
          <Link href="/" className="flex items-center space-x-2">
            <span className="inline-block font-bold tracking-tight text-xl">SMATEL</span>
          </Link>
          <nav className="hidden md:flex gap-6">
            {links.map((link) => (
              <Link
                key={link.name}
                href={link.href}
                className="flex items-center text-sm font-medium text-muted-foreground hover:text-foreground transition-colors"
              >
                {link.name}
              </Link>
            ))}
          </nav>
        </div>
        <div className="flex items-center gap-4">
           <Link href="/contact" className={cn(buttonVariants({ variant: "default" }))}>
             Get Started
           </Link>
        </div>
      </div>
    </header>
  );
}
