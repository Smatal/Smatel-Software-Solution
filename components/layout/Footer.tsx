import Link from "next/link";
import { siteConfig } from "@/config/site";

export function Footer() {
  return (
    <footer className="border-t bg-background">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8 flex flex-col items-center justify-between gap-4 py-10 md:h-24 md:flex-row md:py-0">
        <div className="flex flex-col items-center gap-4 md:flex-row md:gap-2">
          <p className="text-center text-sm leading-loose md:text-left text-muted-foreground">
            &copy; {new Date().getFullYear()} <span className="font-medium text-foreground">{siteConfig.name}</span>. All rights reserved.
          </p>
        </div>
        <div className="flex gap-4">
          <Link href="/privacy" className="text-sm text-muted-foreground hover:text-foreground">
            Privacy
          </Link>
          <Link href="/terms" className="text-sm text-muted-foreground hover:text-foreground">
            Terms
          </Link>
          <Link href={siteConfig.links.twitter} target="_blank" rel="noreferrer" className="text-sm text-muted-foreground hover:text-foreground">
            Twitter
          </Link>
        </div>
      </div>
    </footer>
  );
}
