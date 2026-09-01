import Link from "next/link";
import { siteConfig } from "@/config/site";
import { Mail, MapPin, Phone, Globe } from "lucide-react";
import { AnimatedDarkWrapper } from "@/components/ui/animated-dark-wrapper";
import { SmatalLogo } from "@/components/ui/smatal-logo";

export function Footer() {
  return (
    <footer className="bg-slate-950 border-t border-slate-800">
      <AnimatedDarkWrapper className="text-gray-300 py-16 lg:py-24">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8 max-w-7xl relative z-10">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-12 lg:gap-8 mb-16">
            {/* Brand & Intro */}
            <div className="space-y-6">
              <Link href="/" className="inline-block">
                <SmatalLogo size="md" textColor="text-white" />
              </Link>
              <p className="text-sm leading-relaxed text-gray-400 max-w-xs">
                {siteConfig.description}
              </p>
              <div className="flex items-center gap-3 pt-2">
                <a
                  href={siteConfig.links.website}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="w-9 h-9 rounded-lg bg-slate-900 border border-slate-800 flex items-center justify-center text-gray-400 hover:text-teal-400 hover:border-teal-500/40 transition-colors"
                  aria-label="Parent Website"
                >
                  <Globe className="w-4 h-4" />
                </a>
              </div>
            </div>

            {/* Solutions Links */}
            <div>
              <h3 className="font-semibold text-white mb-6 tracking-wide uppercase text-sm">Solutions</h3>
              <ul className="space-y-4">
                <li><Link href="/services/custom-software-development" className="text-sm hover:text-teal-400 transition-colors">Custom Software</Link></li>
                <li><Link href="/services/web-development" className="text-sm hover:text-teal-400 transition-colors">Web Development</Link></li>
                <li><Link href="/services/mobile-app-development" className="text-sm hover:text-teal-400 transition-colors">Mobile Apps</Link></li>
                <li><Link href="/services/erp-solutions" className="text-sm hover:text-teal-400 transition-colors">ERP Systems</Link></li>
                <li><Link href="/services/digital-marketing" className="text-sm hover:text-teal-400 transition-colors">Digital Marketing</Link></li>
              </ul>
            </div>

            {/* Company Links */}
            <div>
              <h3 className="font-semibold text-white mb-6 tracking-wide uppercase text-sm">Company</h3>
              <ul className="space-y-4">
                <li><Link href="/about" className="text-sm hover:text-teal-400 transition-colors">About Us</Link></li>
                <li><Link href="/portfolio" className="text-sm hover:text-teal-400 transition-colors">Portfolio</Link></li>
                <li><Link href="/testimonials" className="text-sm hover:text-teal-400 transition-colors">Testimonials</Link></li>
                <li><Link href="/contact" className="text-sm hover:text-teal-400 transition-colors">Contact</Link></li>
              </ul>
            </div>

            {/* Contact Details */}
            <div>
              <h3 className="font-semibold text-white mb-6 tracking-wide uppercase text-sm">Headquarters</h3>
              <ul className="space-y-4">
                <li className="flex items-start gap-3">
                  <MapPin className="w-5 h-5 text-teal-400 shrink-0 mt-0.5" />
                  <span className="text-sm text-gray-400 leading-relaxed">
                    108, 109, Hameedia Complex, 2nd Floor,<br />
                    Triplicane High Road, Triplicane,<br />
                    Chennai - 600005, Tamil Nadu, India
                  </span>
                </li>
                <li className="flex items-start gap-3">
                  <Phone className="w-5 h-5 text-teal-400 shrink-0 mt-0.5" />
                  <div className="flex flex-col space-y-1">
                    <a href="tel:+919649964912" className="text-sm text-gray-400 hover:text-white transition-colors">+91 96499 64912</a>
                    <a href="tel:+919342217586" className="text-sm text-gray-400 hover:text-white transition-colors">+91 93422 17586</a>
                  </div>
                </li>
                <li className="flex items-center gap-3">
                  <Mail className="w-5 h-5 text-teal-400 shrink-0" />
                  <a href="mailto:info@smatal.in" className="text-sm text-gray-400 hover:text-white transition-colors">info@smatal.in</a>
                </li>
              </ul>
            </div>
          </div>

          {/* Bottom Bar */}
          <div className="pt-8 border-t border-slate-800 flex flex-col md:flex-row items-center justify-between gap-4">
            <p className="text-sm text-gray-500">
              &copy; {new Date().getFullYear()} {siteConfig.name}. All rights reserved. Part of {siteConfig.parentCompany}.
            </p>
            <div className="flex gap-6">
              <Link href="/privacy" className="text-sm text-gray-500 hover:text-gray-300 transition-colors">Privacy Policy</Link>
              <Link href="/terms" className="text-sm text-gray-500 hover:text-gray-300 transition-colors">Terms of Service</Link>
            </div>
          </div>
        </div>
      </AnimatedDarkWrapper>
    </footer>
  );
}
