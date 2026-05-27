"use client";

import { useState, useEffect, useCallback } from "react";
import { motion, AnimatePresence } from "framer-motion";
import {
  Menu, X, Zap, ChevronDown, Calendar, Sparkles,
  Stethoscope, Scale, Utensils, ShoppingBag,
  MapPin, ArrowRight, Users, TrendingUp, Bot,
  Briefcase, HardHat, Package, Home, GraduationCap, Car
} from "lucide-react";

const servicesLinks = [
  {
    label: "Healthcare SEO",
    href: "/industries/healthcare",
    desc: "NHRA-compliant patient acquisition & YMYL medical authority",
    icon: Stethoscope,
    color: "from-blue-500/20 to-cyan-500/20",
  },
  {
    label: "Legal Firm SEO",
    href: "/industries/legal",
    desc: "High-value corporate & practice area lead generation",
    icon: Scale,
    color: "from-indigo-500/20 to-violet-500/20",
  },
  {
    label: "F&B Local SEO",
    href: "/industries/food-and-beverage",
    desc: "Google Maps domination & review velocity engineering",
    icon: Utensils,
    color: "from-emerald-500/20 to-teal-500/20",
  },
  {
    label: "E-commerce SEO",
    href: "/industries/ecommerce",
    desc: "Multilingual catalog scaling & product rich snippets",
    icon: ShoppingBag,
    color: "from-rose-500/20 to-pink-500/20",
  },
  {
    label: "Company Formation",
    href: "/industries/company-formation",
    desc: "International founders & Sijilat portal setup scaling",
    icon: Briefcase,
    color: "from-amber-500/20 to-orange-500/20",
  },
  {
    label: "Engineering & Contracting",
    href: "/industries/engineering",
    desc: "B2B tender discovery & government procurement visibility",
    icon: HardHat,
    color: "from-slate-500/20 to-neutral-500/20",
  },
  {
    label: "Retail & Distribution",
    href: "/industries/retail-distribution",
    desc: "FMCG supply chain authority & product category search",
    icon: Package,
    color: "from-teal-500/20 to-cyan-500/20",
  },
  {
    label: "Real Estate & Property",
    href: "/industries/real-estate",
    desc: "RERA-compliant luxury listings & project search loops",
    icon: Home,
    color: "from-violet-500/20 to-purple-500/20",
  },
  {
    label: "Education & Training",
    href: "/industries/education",
    desc: "BQA & academic search setup for private schools/unis",
    icon: GraduationCap,
    color: "from-sky-500/20 to-blue-500/20",
  },
  {
    label: "Automotive SEO",
    href: "/industries/automotive",
    desc: "Luxury dealer systems, EV queries & showroom maps",
    icon: Car,
    color: "from-red-500/20 to-rose-500/20",
  },
];

const locationsLinks = [
  { label: "SEO Manama", href: "/locations/seo-manama", area: "Capital Governorate", coords: "26.22° N" },
  { label: "SEO Seef", href: "/locations/seo-seef", area: "Financial District", coords: "26.23° N" },
  { label: "SEO Riffa", href: "/locations/seo-riffa", area: "Southern Governorate", coords: "26.13° N" },
  { label: "SEO Muharraq", href: "/locations/seo-muharraq", area: "Muharraq Governorate", coords: "26.25° N" },
];

const mainLinks = [
  { label: "How We Think", href: "/#how-we-think" },
  { label: "Our Team", href: "/#team" },
  { label: "Results", href: "/#results" },
  { label: "FAQ", href: "/#faq" },
];

export default function Navbar() {
  const [scrolled, setScrolled] = useState(false);
  const [mobileOpen, setMobileOpen] = useState(false);
  const [activeDropdown, setActiveDropdown] = useState<"services" | "locations" | null>(null);
  const [mobileServicesOpen, setMobileServicesOpen] = useState(false);
  const [mobileLocationsOpen, setMobileLocationsOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => setScrolled(window.scrollY > 50);
    window.addEventListener("scroll", handleScroll, { passive: true });
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const closeMega = useCallback(() => setActiveDropdown(null), []);

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
          <a href="/" className="flex items-center gap-2 group shrink-0">
            <div className="w-8 h-8 rounded-lg bg-gradient-to-br from-electric-blue to-electric-blue-light flex items-center justify-center group-hover:shadow-[0_0_15px_rgba(59,130,246,0.5)] transition-shadow">
              <Zap className="w-4 h-4 text-white" />
            </div>
            <span className="font-[family-name:var(--font-space)] font-bold text-lg text-white tracking-tight">
              BAE<span className="text-electric-blue">™</span>
            </span>
          </a>

          {/* Desktop Nav */}
          <div className="hidden lg:flex items-center gap-1 xl:gap-2">
            {/* Services Mega Trigger */}
            <div
              className="relative"
              onMouseEnter={() => setActiveDropdown("services")}
              onMouseLeave={closeMega}
            >
              <button
                className={`text-sm flex items-center gap-1 px-3 py-2 rounded-lg transition-all duration-300 font-medium cursor-pointer ${
                  activeDropdown === "services"
                    ? "text-white bg-white/[0.04]"
                    : "text-soft-gray hover:text-white"
                }`}
              >
                Services
                <ChevronDown
                  className={`w-3.5 h-3.5 transition-transform duration-300 ${
                    activeDropdown === "services" ? "rotate-180 text-electric-blue" : ""
                  }`}
                />
              </button>
            </div>

            {/* Locations Mega Trigger */}
            <div
              className="relative"
              onMouseEnter={() => setActiveDropdown("locations")}
              onMouseLeave={closeMega}
            >
              <button
                className={`text-sm flex items-center gap-1 px-3 py-2 rounded-lg transition-all duration-300 font-medium cursor-pointer ${
                  activeDropdown === "locations"
                    ? "text-white bg-white/[0.04]"
                    : "text-soft-gray hover:text-white"
                }`}
              >
                Locations
                <ChevronDown
                  className={`w-3.5 h-3.5 transition-transform duration-300 ${
                    activeDropdown === "locations" ? "rotate-180 text-electric-blue" : ""
                  }`}
                />
              </button>
            </div>

            {/* Standard Links */}
            {mainLinks.map((link) => (
              <a
                key={link.label}
                href={link.href}
                className="text-sm text-soft-gray hover:text-white px-3 py-2 rounded-lg transition-colors duration-300 font-medium hover:bg-white/[0.02]"
              >
                {link.label}
              </a>
            ))}
          </div>

          {/* CTA */}
          <div className="hidden lg:flex items-center gap-3 shrink-0">
            <a
              href="/#contact"
              className="text-sm text-soft-gray hover:text-white transition-colors duration-300 font-medium flex items-center gap-1.5 px-3 py-2 rounded-lg hover:bg-white/[0.02]"
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

          {/* Mobile Toggle */}
          <button
            onClick={() => setMobileOpen(!mobileOpen)}
            className="lg:hidden text-white p-2 cursor-pointer"
            aria-label="Toggle menu"
          >
            {mobileOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
          </button>
        </div>
      </motion.nav>

      {/* ═══════════════════════════════ MEGA MENU PANELS ═══════════════════════════════ */}
      <AnimatePresence>
        {activeDropdown && (
          <motion.div
            initial={{ opacity: 0, y: -8 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -8 }}
            transition={{ duration: 0.25, ease: [0.22, 1, 0.36, 1] }}
            className="fixed top-[60px] left-0 right-0 z-[9997]"
            onMouseEnter={() => setActiveDropdown(activeDropdown)}
            onMouseLeave={closeMega}
          >
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 pt-2">
              <div className="glass rounded-2xl border border-white/[0.06] shadow-2xl overflow-hidden">
                {/* ─── Services Mega Panel ─── */}
                {activeDropdown === "services" && (
                  <div className="p-6 lg:p-8">
                    <div className="grid lg:grid-cols-12 gap-8">
                      {/* Left — Industry Cards (8 cols) */}
                      <div className="lg:col-span-8">
                        <div className="flex items-center gap-2 mb-5">
                          <Bot className="w-4 h-4 text-electric-blue" />
                          <span className="text-[11px] uppercase font-bold text-electric-blue tracking-widest">
                            Industry Solutions
                          </span>
                        </div>
                        <div className="grid sm:grid-cols-2 gap-3">
                          {servicesLinks.map((link) => (
                            <a
                              key={link.label}
                              href={link.href}
                              className="group flex items-start gap-4 p-4 rounded-xl border border-white/[0.03] hover:border-electric-blue/20 hover:bg-white/[0.02] transition-all duration-300"
                            >
                              <div className={`w-10 h-10 rounded-xl bg-gradient-to-br ${link.color} border border-white/[0.06] flex items-center justify-center shrink-0 group-hover:scale-110 transition-transform duration-300`}>
                                <link.icon className="w-5 h-5 text-electric-blue" />
                              </div>
                              <div className="min-w-0">
                                <div className="text-sm font-semibold text-white group-hover:text-electric-blue transition-colors flex items-center gap-1.5">
                                  {link.label}
                                  <ArrowRight className="w-3 h-3 opacity-0 -translate-x-2 group-hover:opacity-100 group-hover:translate-x-0 transition-all duration-300 text-electric-blue" />
                                </div>
                                <p className="text-[11px] text-soft-gray mt-1 leading-relaxed line-clamp-2">
                                  {link.desc}
                                </p>
                              </div>
                            </a>
                          ))}
                        </div>
                      </div>

                      {/* Right — Featured CTA (4 cols) */}
                      <div className="lg:col-span-4 lg:border-l lg:border-white/[0.04] lg:pl-8">
                        <div className="flex items-center gap-2 mb-5">
                          <TrendingUp className="w-4 h-4 text-success-green" />
                          <span className="text-[11px] uppercase font-bold text-success-green tracking-widest">
                            Featured Result
                          </span>
                        </div>
                        <div className="rounded-xl border border-white/[0.04] bg-white/[0.01] p-5">
                          <div className="text-xs text-soft-gray/70 mb-1 uppercase tracking-wider">Bahrain Agent</div>
                          <div className="text-2xl font-[family-name:var(--font-space)] font-bold text-white mb-1">+480%</div>
                          <div className="text-xs text-soft-gray mb-3">International leads in 90 days</div>
                          <div className="flex items-center gap-3 mb-5">
                            <div className="flex-1 bg-white/[0.03] rounded-lg p-2 text-center">
                              <div className="text-sm font-bold text-success-green">6x</div>
                              <div className="text-[9px] text-soft-gray mt-0.5">New Clients</div>
                            </div>
                            <div className="flex-1 bg-white/[0.03] rounded-lg p-2 text-center">
                              <div className="text-sm font-bold text-electric-blue">#1</div>
                              <div className="text-[9px] text-soft-gray mt-0.5">Google Rank</div>
                            </div>
                          </div>
                          <a
                            href="/#results"
                            className="w-full inline-flex items-center justify-center gap-1.5 text-xs font-semibold text-electric-blue hover:text-white bg-electric-blue/5 hover:bg-electric-blue/10 border border-electric-blue/10 rounded-lg py-2.5 transition-all"
                          >
                            View All Case Studies
                            <ArrowRight className="w-3 h-3" />
                          </a>
                        </div>

                        {/* Trust Logos */}
                        <div className="mt-5 pt-4 border-t border-white/[0.04]">
                          <div className="text-[9px] text-soft-gray/50 uppercase tracking-widest mb-3">Trusted By</div>
                          <div className="flex flex-wrap gap-x-4 gap-y-1 text-xs text-soft-gray/40 font-[family-name:var(--font-space)] font-semibold">
                            <span>Bahrain Agent</span>
                            <span>NEC</span>
                            <span>Yasmico</span>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                )}

                {/* ─── Locations Mega Panel ─── */}
                {activeDropdown === "locations" && (
                  <div className="p-6 lg:p-8">
                    <div className="grid lg:grid-cols-12 gap-8">
                      {/* Left — Location Cards (8 cols) */}
                      <div className="lg:col-span-8">
                        <div className="flex items-center gap-2 mb-5">
                          <MapPin className="w-4 h-4 text-electric-blue" />
                          <span className="text-[11px] uppercase font-bold text-electric-blue tracking-widest">
                            Bahrain Coverage Map
                          </span>
                        </div>
                        <div className="grid sm:grid-cols-2 gap-3">
                          {locationsLinks.map((link) => (
                            <a
                              key={link.label}
                              href={link.href}
                              className="group flex items-center gap-4 p-4 rounded-xl border border-white/[0.03] hover:border-electric-blue/20 hover:bg-white/[0.02] transition-all duration-300"
                            >
                              <div className="w-10 h-10 rounded-xl bg-gradient-to-br from-electric-blue/10 to-electric-blue/5 border border-electric-blue/10 flex items-center justify-center shrink-0 group-hover:scale-110 transition-transform duration-300">
                                <MapPin className="w-5 h-5 text-electric-blue" />
                              </div>
                              <div className="min-w-0 flex-1">
                                <div className="text-sm font-semibold text-white group-hover:text-electric-blue transition-colors flex items-center gap-1.5">
                                  {link.label}
                                  <ArrowRight className="w-3 h-3 opacity-0 -translate-x-2 group-hover:opacity-100 group-hover:translate-x-0 transition-all duration-300 text-electric-blue" />
                                </div>
                                <p className="text-[11px] text-soft-gray mt-0.5">
                                  {link.area}
                                </p>
                              </div>
                              <span className="text-[10px] text-soft-gray/40 font-mono shrink-0">
                                {link.coords}
                              </span>
                            </a>
                          ))}
                        </div>
                      </div>

                      {/* Right — Map Visual + CTA (4 cols) */}
                      <div className="lg:col-span-4 lg:border-l lg:border-white/[0.04] lg:pl-8">
                        <div className="flex items-center gap-2 mb-5">
                          <Users className="w-4 h-4 text-electric-blue" />
                          <span className="text-[11px] uppercase font-bold text-electric-blue tracking-widest">
                            Local Authority
                          </span>
                        </div>

                        {/* Visual Map Indicator */}
                        <div className="rounded-xl border border-white/[0.04] bg-white/[0.01] p-5 mb-4">
                          <div className="relative w-full aspect-square max-w-[140px] mx-auto mb-4">
                            <svg viewBox="0 0 100 140" className="w-full h-full">
                              <defs>
                                <radialGradient id="megaHeatGrad" cx="50%" cy="40%" r="60%">
                                  <stop offset="0%" stopColor="#3B82F6" stopOpacity="0.6" />
                                  <stop offset="50%" stopColor="#3B82F6" stopOpacity="0.2" />
                                  <stop offset="100%" stopColor="#3B82F6" stopOpacity="0.02" />
                                </radialGradient>
                              </defs>
                              <path
                                d="M45,10 C55,8 65,12 70,20 C75,30 78,45 76,60 C74,75 70,90 65,105 C60,115 55,125 50,130 C45,125 40,115 35,105 C30,90 26,75 24,60 C22,45 25,30 30,20 C35,12 40,10 45,10 Z"
                                fill="url(#megaHeatGrad)"
                                stroke="#3B82F6"
                                strokeWidth="0.5"
                                strokeOpacity="0.4"
                              />
                              {[
                                { cx: 50, cy: 35, r: 4 },
                                { cx: 45, cy: 55, r: 3 },
                                { cx: 55, cy: 75, r: 3 },
                                { cx: 48, cy: 95, r: 2 },
                              ].map((dot, i) => (
                                <g key={i}>
                                  <circle cx={dot.cx} cy={dot.cy} r={dot.r + 3} fill="#3B82F6" opacity="0.15" />
                                  <circle cx={dot.cx} cy={dot.cy} r={dot.r} fill="#3B82F6" opacity="0.8" />
                                </g>
                              ))}
                            </svg>
                          </div>
                          <div className="text-center">
                            <div className="text-xs text-soft-gray/60 mb-1">Active Geo-Coverage</div>
                            <div className="text-lg font-[family-name:var(--font-space)] font-bold text-white">4 Governorates</div>
                          </div>
                        </div>

                        <a
                          href="/#contact"
                          className="w-full inline-flex items-center justify-center gap-1.5 text-xs font-semibold text-electric-blue hover:text-white bg-electric-blue/5 hover:bg-electric-blue/10 border border-electric-blue/10 rounded-lg py-2.5 transition-all"
                        >
                          Check Your Local Ranking
                          <ArrowRight className="w-3 h-3" />
                        </a>
                      </div>
                    </div>
                  </div>
                )}
              </div>
            </div>
          </motion.div>
        )}
      </AnimatePresence>

      {/* ═══════════════════════════════ MOBILE MENU ═══════════════════════════════ */}
      <AnimatePresence>
        {mobileOpen && (
          <motion.div
            initial={{ opacity: 0, y: -20 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -20 }}
            transition={{ duration: 0.3 }}
            className="fixed inset-0 z-[9997] bg-black-matte/98 backdrop-blur-xl pt-24 px-6 overflow-y-auto lg:hidden"
          >
            <div className="flex flex-col gap-4 pb-12">

              {/* Mobile Services Accordion */}
              <div className="border-b border-white/[0.06] pb-3">
                <button
                  onClick={() => setMobileServicesOpen(!mobileServicesOpen)}
                  className="w-full flex items-center justify-between text-xl font-[family-name:var(--font-space)] font-bold text-white py-2 cursor-pointer"
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
                      className="overflow-hidden"
                    >
                      <div className="pt-2 pb-3 space-y-1.5">
                        {servicesLinks.map((link) => (
                          <a
                            key={link.label}
                            href={link.href}
                            onClick={() => setMobileOpen(false)}
                            className="flex items-center gap-3 p-3 rounded-xl hover:bg-white/[0.03] transition-colors"
                          >
                            <div className={`w-9 h-9 rounded-lg bg-gradient-to-br ${link.color} border border-white/[0.06] flex items-center justify-center`}>
                              <link.icon className="w-4 h-4 text-electric-blue" />
                            </div>
                            <div>
                              <div className="text-sm font-semibold text-white">{link.label}</div>
                              <div className="text-[11px] text-soft-gray line-clamp-1">{link.desc}</div>
                            </div>
                          </a>
                        ))}
                      </div>
                    </motion.div>
                  )}
                </AnimatePresence>
              </div>

              {/* Mobile Locations Accordion */}
              <div className="border-b border-white/[0.06] pb-3">
                <button
                  onClick={() => setMobileLocationsOpen(!mobileLocationsOpen)}
                  className="w-full flex items-center justify-between text-xl font-[family-name:var(--font-space)] font-bold text-white py-2 cursor-pointer"
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
                      className="overflow-hidden"
                    >
                      <div className="pt-2 pb-3 space-y-1.5">
                        {locationsLinks.map((link) => (
                          <a
                            key={link.label}
                            href={link.href}
                            onClick={() => setMobileOpen(false)}
                            className="flex items-center gap-3 p-3 rounded-xl hover:bg-white/[0.03] transition-colors"
                          >
                            <div className="w-9 h-9 rounded-lg bg-electric-blue/10 border border-electric-blue/10 flex items-center justify-center">
                              <MapPin className="w-4 h-4 text-electric-blue" />
                            </div>
                            <div className="flex-1">
                              <div className="text-sm font-semibold text-white">{link.label}</div>
                              <div className="text-[11px] text-soft-gray">{link.area}</div>
                            </div>
                            <span className="text-[10px] text-soft-gray/40 font-mono">{link.coords}</span>
                          </a>
                        ))}
                      </div>
                    </motion.div>
                  )}
                </AnimatePresence>
              </div>

              {/* Standard Links */}
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

              {/* Mobile CTAs */}
              <div className="pt-4 flex flex-col gap-3">
                <a
                  href="/#contact"
                  onClick={() => setMobileOpen(false)}
                  className="w-full py-3.5 border border-white/10 text-white text-center rounded-full font-semibold hover:border-electric-blue/50 transition-colors flex items-center justify-center gap-1.5"
                >
                  <Sparkles className="w-4 h-4 text-electric-blue" />
                  Get Free AI Audit
                </a>
                <a
                  href="/#contact"
                  onClick={() => setMobileOpen(false)}
                  className="w-full py-3.5 bg-electric-blue text-white text-center rounded-full font-semibold flex items-center justify-center gap-1.5 shadow-[0_0_20px_rgba(59,130,246,0.25)]"
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
