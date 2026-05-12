"use client";

import { motion, useInView } from "framer-motion";
import { useRef } from "react";
import {
  Brain,
  MapPin,
  Sparkles,
  Target,
  BarChart3,
  FileText,
} from "lucide-react";

const features = [
  {
    icon: Brain,
    title: "AI SEO Strategy",
    description:
      "Custom AI-powered strategies built around your market, competitors, and growth goals. Not templates — intelligence.",
  },
  {
    icon: MapPin,
    title: "Google Maps Domination",
    description:
      "Become the #1 result on Google Maps in your area. Drive foot traffic and phone calls from high-intent local searches.",
  },
  {
    icon: Sparkles,
    title: "AI Search Optimization",
    description:
      "Get featured in ChatGPT, Gemini, and Perplexity results. The future of search is AI — and we put you there first.",
  },
  {
    icon: Target,
    title: "Lead Funnels",
    description:
      "Turn visibility into booked appointments. We build automated lead capture systems that convert visitors into paying clients.",
  },
  {
    icon: BarChart3,
    title: "Conversion Systems",
    description:
      "Track every call, form, and lead back to its source. Know exactly what's working and what's not — in real time.",
  },
  {
    icon: FileText,
    title: "AI Content Engine",
    description:
      "Produce authority-building content at scale using AI systems that write, optimize, and publish for maximum visibility.",
  },
];

export default function OfferSection() {
  const ref = useRef<HTMLDivElement>(null);
  const isInView = useInView(ref, { once: true, margin: "-100px" });

  return (
    <section id="services" className="relative py-20 sm:py-32 overflow-hidden" ref={ref}>
      <div className="absolute inset-0 radial-gradient-top" />

      <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6 }}
          className="text-center max-w-3xl mx-auto mb-10 sm:mb-16"
        >
          <span className="inline-block text-xs font-semibold text-electric-blue uppercase tracking-widest mb-4 px-3 py-1 rounded-full border border-electric-blue/20 bg-electric-blue/5">
            The System
          </span>
          <h2 className="text-2xl sm:text-4xl lg:text-5xl font-[family-name:var(--font-space)] font-bold mt-4 leading-tight">
            Introducing{" "}
            <span className="gradient-text">Bahrain Authority Engine™</span>
          </h2>
          <p className="mt-4 sm:mt-6 text-base sm:text-lg text-soft-gray max-w-2xl mx-auto">
            A complete AI-first SEO system designed exclusively for Bahrain businesses
            that want to dominate their market.
          </p>
        </motion.div>

        {/* Feature Cards Grid */}
        <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-4 sm:gap-6">
          {features.map((feature, i) => (
            <motion.div
              key={i}
              initial={{ opacity: 0, y: 30 }}
              animate={isInView ? { opacity: 1, y: 0 } : {}}
              transition={{
                delay: 0.2 + i * 0.1,
                duration: 0.6,
                ease: [0.22, 1, 0.36, 1],
              }}
              className="group glass rounded-xl sm:rounded-2xl p-6 sm:p-8 hover:glow-blue transition-all duration-500 cursor-default border border-white/[0.04] hover:border-electric-blue/20 relative overflow-hidden"
            >
              {/* Hover gradient */}
              <div className="absolute inset-0 bg-gradient-to-br from-electric-blue/5 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500" />

              <div className="relative z-10">
                <div className="w-10 h-10 sm:w-12 sm:h-12 rounded-xl bg-electric-blue/10 flex items-center justify-center mb-4 sm:mb-6 group-hover:bg-electric-blue/20 group-hover:scale-110 transition-all duration-300">
                  <feature.icon className="w-5 h-5 sm:w-6 sm:h-6 text-electric-blue" />
                </div>
                <h3 className="text-base sm:text-lg font-[family-name:var(--font-space)] font-bold text-white mb-2 sm:mb-3">
                  {feature.title}
                </h3>
                <p className="text-soft-gray text-sm leading-relaxed">
                  {feature.description}
                </p>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
