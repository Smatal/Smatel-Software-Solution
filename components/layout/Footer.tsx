import Link from "next/link";
import { siteConfig } from "@/config/site";
import { Mail, MapPin, Phone } from "lucide-react";

export function Footer() {
  return (
    <footer className="bg-gray-900 text-gray-300 py-16 lg:py-24 border-t border-gray-800">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8 max-w-7xl">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-12 lg:gap-8 mb-16">
          {/* Brand & Intro */}
          <div className="space-y-6">
            <Link href="/" className="flex items-center gap-2">
              <div className="w-6 h-6 rounded-md bg-gradient-to-tr from-indigo-500 to-purple-400" />
              <span className="font-black tracking-tight text-xl text-white">SMATAL</span>
            </Link>
            <p className="text-sm leading-relaxed text-gray-400 max-w-xs">
              End-to-end digital solutions for growing businesses. We plan, build, automate, and scale your technology infrastructure.
            </p>
          </div>

          {/* Solutions Links */}
          <div>
            <h3 className="font-semibold text-white mb-6 tracking-wide uppercase text-sm">Solutions</h3>
            <ul className="space-y-4">
              <li><Link href="/services/custom-software-development" className="text-sm hover:text-indigo-400 transition-colors">Custom Software</Link></li>
              <li><Link href="/services/web-development" className="text-sm hover:text-indigo-400 transition-colors">Web Development</Link></li>
              <li><Link href="/services/mobile-app-development" className="text-sm hover:text-indigo-400 transition-colors">Mobile Apps</Link></li>
              <li><Link href="/services/erp-solutions" className="text-sm hover:text-indigo-400 transition-colors">ERP Systems</Link></li>
              <li><Link href="/services/digital-marketing" className="text-sm hover:text-indigo-400 transition-colors">Digital Marketing</Link></li>
            </ul>
          </div>

          {/* Company Links */}
          <div>
            <h3 className="font-semibold text-white mb-6 tracking-wide uppercase text-sm">Company</h3>
            <ul className="space-y-4">
              <li><Link href="/about" className="text-sm hover:text-indigo-400 transition-colors">About Us</Link></li>
              <li><Link href="/portfolio" className="text-sm hover:text-indigo-400 transition-colors">Portfolio</Link></li>
              <li><Link href="/testimonials" className="text-sm hover:text-indigo-400 transition-colors">Testimonials</Link></li>
              <li><Link href="/contact" className="text-sm hover:text-indigo-400 transition-colors">Contact</Link></li>
              <li><Link href="/careers" className="text-sm hover:text-indigo-400 transition-colors">Careers</Link></li>
            </ul>
          </div>

          {/* Contact Details */}
          <div>
            <h3 className="font-semibold text-white mb-6 tracking-wide uppercase text-sm">Contact Us</h3>
            <ul className="space-y-4">
              <li className="flex items-start gap-3">
                <MapPin className="w-5 h-5 text-indigo-400 shrink-0 mt-0.5" />
                <span className="text-sm text-gray-400 leading-relaxed">123 Tech Park, Phase 2<br />Bangalore, India 560001</span>
              </li>
              <li className="flex items-center gap-3">
                <Phone className="w-5 h-5 text-indigo-400 shrink-0" />
                <span className="text-sm text-gray-400">+91 98765 43210</span>
              </li>
              <li className="flex items-center gap-3">
                <Mail className="w-5 h-5 text-indigo-400 shrink-0" />
                <span className="text-sm text-gray-400">hello@smatal.com</span>
              </li>
            </ul>
          </div>
        </div>

        {/* Bottom Bar */}
        <div className="pt-8 border-t border-gray-800 flex flex-col md:flex-row items-center justify-between gap-4">
          <p className="text-sm text-gray-500">
            &copy; {new Date().getFullYear()} {siteConfig.name}. All rights reserved.
          </p>
          <div className="flex gap-6">
            <Link href="/privacy" className="text-sm text-gray-500 hover:text-gray-300 transition-colors">Privacy Policy</Link>
            <Link href="/terms" className="text-sm text-gray-500 hover:text-gray-300 transition-colors">Terms of Service</Link>
          </div>
        </div>
      </div>
    </footer>
  );
}
