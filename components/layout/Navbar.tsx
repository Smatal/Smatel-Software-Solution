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
    <div className="fixed top-0 left-0 right-0 z-50 pt-4 px-4 pointer-events-none">
      <header className="mx-auto max-w-6xl w-full rounded-2xl border border-white/40 bg-white/60 backdrop-blur-xl shadow-[0_8px_30px_rgb(0,0,0,0.08)] pointer-events-auto transition-all duration-300">
        <div className="px-6 flex h-16 items-center justify-between">
          
          {/* Logo */}
          <div className="flex items-center gap-10">
            <Link href="/" className="flex items-center gap-2 group">
              <div className="w-6 h-6 rounded-md bg-gradient-to-tr from-indigo-600 to-purple-500 shadow-sm group-hover:shadow-indigo-500/25 group-hover:scale-105 transition-all" />
              <span className="font-black tracking-tight text-xl text-gray-900">SMATAL</span>
            </Link>

            {/* Links */}
            <nav className="hidden lg:flex gap-1">
              {links.map((link) => (
                <Link
                  key={link.name}
                  href={link.href}
                  className="relative px-3 py-1.5 text-sm font-semibold text-gray-500 hover:text-indigo-600 transition-colors rounded-lg hover:bg-indigo-500/5"
                >
                  {link.name}
                </Link>
              ))}
            </nav>
          </div>

          {/* CTA */}
          <div className="flex items-center gap-4">
            <Link href="/contact" className={cn(buttonVariants({ variant: "default", size: "sm", className: "px-6" }))}>
              Get Started
            </Link>
          </div>

        </div>
      </header>
    </div>
  );
}
