"use client";

import { Zap, MessageCircle, MapPin, Mail, Phone } from "lucide-react";

const footerLinks = {
  Services: [
    { label: "AI SEO Strategy", href: "#services" },
    { label: "Google Maps SEO", href: "#services" },
    { label: "AI Content Engine", href: "#services" },
    { label: "Lead Funnels", href: "#services" },
  ],
  Company: [
    { label: "About Us", href: "#" },
    { label: "Case Studies", href: "#results" },
    { label: "Process", href: "#process" },
    { label: "FAQ", href: "#faq" },
  ],
  Legal: [
    { label: "Privacy Policy", href: "#" },
    { label: "Terms of Service", href: "#" },
    { label: "Cookie Policy", href: "#" },
  ],
};

export default function Footer() {
  return (
    <footer className="relative bg-charcoal border-t border-white/[0.06] pb-20 md:pb-0">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Main footer */}
        <div className="py-12 sm:py-16 grid grid-cols-2 sm:grid-cols-2 lg:grid-cols-5 gap-8 sm:gap-10">
          {/* Brand */}
          <div className="col-span-2">
            <a href="#" className="flex items-center gap-2 mb-4 sm:mb-6">
              <div className="w-8 h-8 rounded-lg bg-gradient-to-br from-electric-blue to-electric-blue-light flex items-center justify-center">
                <Zap className="w-4 h-4 text-white" />
              </div>
              <span className="font-[family-name:var(--font-space)] font-bold text-base sm:text-lg text-white tracking-tight">
                Bahrain Authority Engine<span className="text-electric-blue">™</span>
              </span>
            </a>
            <p className="text-sm text-soft-gray leading-relaxed max-w-sm mb-5">
              AI-first SEO agency helping Bahrain businesses dominate Google and AI
              search. Built for businesses that want to be found first.
            </p>
            <div className="flex items-center gap-3">
              <a
                href="https://linkedin.com"
                target="_blank"
                rel="noopener noreferrer"
                className="w-10 h-10 rounded-lg bg-white/[0.05] flex items-center justify-center hover:bg-electric-blue/20 transition-colors"
                aria-label="LinkedIn"
              >
                <Zap className="w-4 h-4 text-soft-gray" />
              </a>
              <a
                href="https://wa.me/97312345678"
                target="_blank"
                rel="noopener noreferrer"
                className="w-10 h-10 rounded-lg bg-white/[0.05] flex items-center justify-center hover:bg-success-green/20 transition-colors"
                aria-label="WhatsApp"
              >
                <MessageCircle className="w-4 h-4 text-soft-gray" />
              </a>
            </div>
          </div>

          {/* Links — on mobile, 3 cols in the second row */}
          {Object.entries(footerLinks).map(([category, links]) => (
            <div key={category}>
              <h3 className="text-sm font-semibold text-white mb-3 sm:mb-4">{category}</h3>
              <ul className="space-y-2.5">
                {links.map((link) => (
                  <li key={link.label}>
                    <a
                      href={link.href}
                      className="text-sm text-soft-gray hover:text-white transition-colors"
                    >
                      {link.label}
                    </a>
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>

        {/* Contact bar */}
        <div className="py-5 border-t border-white/[0.06] flex flex-col gap-3 sm:flex-row sm:items-center sm:justify-between sm:gap-4">
          <div className="flex flex-col sm:flex-row sm:flex-wrap sm:items-center gap-3 sm:gap-6 text-sm text-soft-gray">
            <div className="flex items-center gap-2">
              <MapPin className="w-4 h-4 text-electric-blue flex-shrink-0" />
              <span>Manama, Kingdom of Bahrain</span>
            </div>
            <div className="flex items-center gap-2">
              <Mail className="w-4 h-4 text-electric-blue flex-shrink-0" />
              <a href="mailto:hello@bahrainauthority.com" className="hover:text-white transition-colors">
                hello@bahrainauthority.com
              </a>
            </div>
            <div className="flex items-center gap-2">
              <Phone className="w-4 h-4 text-electric-blue flex-shrink-0" />
              <a href="tel:+97312345678" className="hover:text-white transition-colors">
                +973 1234 5678
              </a>
            </div>
          </div>
        </div>

        {/* Copyright */}
        <div className="py-5 border-t border-white/[0.06] text-center">
          <p className="text-xs text-soft-gray/50">
            © 2025 Bahrain Authority Engine™. All rights reserved.
          </p>
        </div>
      </div>
    </footer>
  );
}
