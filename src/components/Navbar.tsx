"use client";

import { useState, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { Menu, X, Zap, ChevronDown, Calendar, Sparkles } from "lucide-react";

const servicesLinks = [
  { label: "Healthcare SEO", href: "/industries/healthcare", desc: "Patient acquisition & YMYL medical compliance" },
  { label: "Legal Firm SEO", href: "/industries/legal", desc: "High-value corporate & practice area leads" },
  { label: "F&B Local SEO", href: "/industries/food-and-beverage", desc: "Foot traffic and search-to-table visibility" },
  { label: "E-commerce SEO", href: "/industries/ecommerce", desc: "Scale checkout volume and index products" },
];

const locationsLinks = [
  { label: "SEO Manama", href: "/locations/seo-manama", desc: "Capital area business visibility hub" },
  { label: "SEO Seef", href: "/locations/seo-seef", desc: "Financial district & premium clinic coverage" },
  { label: "SEO Riffa", href: "/locations/seo-riffa", desc: "Residential market & localized growth" },
  { label: "SEO Muharraq", href: "/locations/seo-muharraq", desc: "Cultural & commercial district optimization" },
];

const mainLinks = [
  { label: "How We Think", href: "/#how-we-think" },
  { label: "Our Team", href: "/#team" },
  { label: "Results", href: "/#results" },
  { label: "Process", href: "/#process" },
  { label: "Pricing", href: "/#pricing" },
  { label: "FAQ", href: "/#faq" },
];

export default function Navbar() {
  const [scrolled, setScrolled] = useState(false);
  const [mobileOpen, setMobileOpen] = useState(false);
  const [activeDropdown, setActiveDropdown] = useState<"services" | "locations" | null>(null);
  
  // Mobile accordion state
  const [mobileServicesOpen, setMobileServicesOpen] = useState(false);
  const [mobileLocationsOpen, setMobileLocationsOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 50);
    };
    window.addEventListener("scroll", handleScroll, { passive: true });
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <>
      <motion.nav
        initial={{ y: -100 }}
        animate={{ y: 0 }}
        transition={{ duration: 0.6, ease: [0.22, 1, 0.36, 1] }}
        className={`fixed top-0 left-0 right-0 z-[9998] transition-all duration-500 ${
          scrolled || activeDropdown ? "glass py-3" : "bg-transparent py-5"
        }`}
      >
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 flex items-center justify-between">
          {/* Logo */}
          <a href="/" className="flex items-center gap-2 group">
            <div className="w-8 h-8 rounded-lg bg-gradient-to-br from-electric-blue to-electric-blue-light flex items-center justify-center">
              <Zap className="w-4 h-4 text-white" />
            </div>
            <span className="font-[family-name:var(--font-space)] font-bold text-lg text-white tracking-tight">
              BAE<span className="text-electric-blue">™</span>
            </span>
          </a>

          {/* Desktop Nav */}
          <div className="hidden md:flex items-center gap-6 lg:gap-8">
            {/* Services Dropdown Trigger */}
            <div
              className="relative py-2"
              onMouseEnter={() => setActiveDropdown("services")}
              onMouseLeave={() => setActiveDropdown(null)}
            >
              <button
                className={`text-sm flex items-center gap-1 transition-colors duration-300 font-medium cursor-pointer ${
                  activeDropdown === "services" ? "text-white" : "text-soft-gray hover:text-white"
                }`}
              >
                Services
                <ChevronDown className={`w-3.5 h-3.5 transition-transform duration-300 ${
                  activeDropdown === "services" ? "rotate-180 text-electric-blue" : ""
                }`} />
              </button>

              <AnimatePresence>
                {activeDropdown === "services" && (
                  <motion.div
                    initial={{ opacity: 0, y: 15 }}
                    animate={{ opacity: 1, y: 0 }}
                    exit={{ opacity: 0, y: 15 }}
                    transition={{ duration: 0.2 }}
                    className="absolute top-full left-1/2 -translate-x-1/2 w-[320px] pt-4"
                  >
                    <div className="glass rounded-xl p-3 border border-white/[0.08] shadow-xl grid gap-1">
                      <div className="text-[10px] uppercase font-bold text-electric-blue tracking-wider px-3 pb-2 border-b border-white/[0.04] mb-1">
                        Industry Solutions
                      </div>
                      {servicesLinks.map((link) => (
                        <a
                          key={link.label}
                          href={link.href}
                          className="flex flex-col p-2.5 rounded-lg hover:bg-white/[0.03] transition-colors group/item"
                        >
                          <span className="text-sm font-semibold text-white group-hover/item:text-electric-blue transition-colors">
                            {link.label}
                          </span>
                          <span className="text-[11px] text-soft-gray mt-0.5 line-clamp-1">
                            {link.desc}
                          </span>
                        </a>
                      ))}
                    </div>
                  </motion.div>
                )}
              </AnimatePresence>
            </div>

            {/* Locations Dropdown Trigger */}
            <div
              className="relative py-2"
              onMouseEnter={() => setActiveDropdown("locations")}
              onMouseLeave={() => setActiveDropdown(null)}
            >
              <button
                className={`text-sm flex items-center gap-1 transition-colors duration-300 font-medium cursor-pointer ${
                  activeDropdown === "locations" ? "text-white" : "text-soft-gray hover:text-white"
                }`}
              >
                Locations
                <ChevronDown className={`w-3.5 h-3.5 transition-transform duration-300 ${
                  activeDropdown === "locations" ? "rotate-180 text-electric-blue" : ""
                }`} />
              </button>

              <AnimatePresence>
                {activeDropdown === "locations" && (
                  <motion.div
                    initial={{ opacity: 0, y: 15 }}
                    animate={{ opacity: 1, y: 0 }}
                    exit={{ opacity: 0, y: 15 }}
                    transition={{ duration: 0.2 }}
                    className="absolute top-full left-1/2 -translate-x-1/2 w-[320px] pt-4"
                  >
                    <div className="glass rounded-xl p-3 border border-white/[0.08] shadow-xl grid gap-1">
                      <div className="text-[10px] uppercase font-bold text-electric-blue tracking-wider px-3 pb-2 border-b border-white/[0.04] mb-1">
                        Bahrain Coverage
                      </div>
                      {locationsLinks.map((link) => (
                        <a
                          key={link.label}
                          href={link.href}
                          className="flex flex-col p-2.5 rounded-lg hover:bg-white/[0.03] transition-colors group/item"
                        >
                          <span className="text-sm font-semibold text-white group-hover/item:text-electric-blue transition-colors">
                            {link.label}
                          </span>
                          <span className="text-[11px] text-soft-gray mt-0.5 line-clamp-1">
                            {link.desc}
                          </span>
                        </a>
                      ))}
                    </div>
                  </motion.div>
                )}
              </AnimatePresence>
            </div>

            {/* Main Links */}
            {mainLinks.map((link) => (
              <a
                key={link.label}
                href={link.href}
                className="text-sm text-soft-gray hover:text-white transition-colors duration-300 font-medium"
              >
                {link.label}
              </a>
            ))}
          </div>

          {/* CTA */}
          <div className="hidden md:flex items-center gap-3">
            <a
              href="/#contact"
              className="text-sm text-soft-gray hover:text-white transition-colors duration-300 font-medium flex items-center gap-1.5"
            >
              <Sparkles className="w-3.5 h-3.5 text-electric-blue" />
              Free Audit
            </a>
            <a
              href="/#contact"
              className="px-5 py-2.5 bg-electric-blue hover:bg-electric-blue-dark text-white text-sm font-semibold rounded-full transition-all duration-300 hover:shadow-[0_0_20px_rgba(59,130,246,0.4)] flex items-center gap-1.5"
            >
              <Calendar className="w-3.5 h-3.5" />
              Book Strategy Call
            </a>
          </div>

          {/* Mobile Menu Button */}
          <button
            onClick={() => setMobileOpen(!mobileOpen)}
            className="md:hidden text-white p-2 cursor-pointer"
            aria-label="Toggle menu"
          >
            {mobileOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
          </button>
        </div>
      </motion.nav>

      {/* Mobile Menu */}
      <AnimatePresence>
        {mobileOpen && (
          <motion.div
            initial={{ opacity: 0, y: -20 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -20 }}
            transition={{ duration: 0.3 }}
            className="fixed inset-0 z-[9997] bg-black-matte/98 backdrop-blur-xl pt-24 px-6 overflow-y-auto"
          >
            <div className="flex flex-col gap-5 pb-12">
              
              {/* Mobile Services Accordion */}
              <div className="border-b border-white/[0.06] pb-2">
                <button
                  onClick={() => setMobileServicesOpen(!mobileServicesOpen)}
                  className="w-full flex items-center justify-between text-xl font-[family-name:var(--font-space)] font-bold text-white py-2"
                >
                  <span>Services</span>
                  <ChevronDown className={`w-5 h-5 transition-transform duration-300 ${mobileServicesOpen ? "rotate-180 text-electric-blue" : "text-soft-gray"}`} />
                </button>
                <AnimatePresence>
                  {mobileServicesOpen && (
                    <motion.div
                      initial={{ height: 0, opacity: 0 }}
                      animate={{ height: "auto", opacity: 1 }}
                      exit={{ height: 0, opacity: 0 }}
                      className="overflow-hidden pl-4 flex flex-col gap-2 pt-2 pb-4"
                    >
                      {servicesLinks.map((link) => (
                        <a
                          key={link.label}
                          href={link.href}
                          onClick={() => setMobileOpen(false)}
                          className="text-base text-soft-gray hover:text-white py-1"
                        >
                          {link.label}
                        </a>
                      ))}
                    </motion.div>
                  )}
                </AnimatePresence>
              </div>

              {/* Mobile Locations Accordion */}
              <div className="border-b border-white/[0.06] pb-2">
                <button
                  onClick={() => setMobileLocationsOpen(!mobileLocationsOpen)}
                  className="w-full flex items-center justify-between text-xl font-[family-name:var(--font-space)] font-bold text-white py-2"
                >
                  <span>Locations</span>
                  <ChevronDown className={`w-5 h-5 transition-transform duration-300 ${mobileLocationsOpen ? "rotate-180 text-electric-blue" : "text-soft-gray"}`} />
                </button>
                <AnimatePresence>
                  {mobileLocationsOpen && (
                    <motion.div
                      initial={{ height: 0, opacity: 0 }}
                      animate={{ height: "auto", opacity: 1 }}
                      exit={{ height: 0, opacity: 0 }}
                      className="overflow-hidden pl-4 flex flex-col gap-2 pt-2 pb-4"
                    >
                      {locationsLinks.map((link) => (
                        <a
                          key={link.label}
                          href={link.href}
                          onClick={() => setMobileOpen(false)}
                          className="text-base text-soft-gray hover:text-white py-1"
                        >
                          {link.label}
                        </a>
                      ))}
                    </motion.div>
                  )}
                </AnimatePresence>
              </div>

              {/* Main Links */}
              {mainLinks.map((link) => (
                <a
                  key={link.label}
                  href={link.href}
                  onClick={() => setMobileOpen(false)}
                  className="text-xl font-[family-name:var(--font-space)] font-bold text-white hover:text-electric-blue transition-colors border-b border-white/[0.06] pb-3"
                >
                  {link.label}
                </a>
              ))}

              {/* CTAs */}
              <div className="pt-4 flex flex-col gap-3">
                <a
                  href="/#contact"
                  onClick={() => setMobileOpen(false)}
                  className="w-full py-3 border border-white/10 text-white text-center rounded-full font-semibold hover:border-electric-blue/50 transition-colors flex items-center justify-center gap-1.5"
                >
                  <Sparkles className="w-4 h-4 text-electric-blue" />
                  Get Free AI Audit
                </a>
                <a
                  href="/#contact"
                  onClick={() => setMobileOpen(false)}
                  className="w-full py-3 bg-electric-blue text-white text-center rounded-full font-semibold flex items-center justify-center gap-1.5"
                >
                  <Calendar className="w-4 h-4" />
                  Book Strategy Call
                </a>
              </div>

            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  );
}
