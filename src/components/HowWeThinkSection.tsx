"use client";

import { motion, useInView } from "framer-motion";
import { useRef } from "react";
import { Bot, Target, ShieldCheck, Zap, ArrowUpRight } from "lucide-react";

const philosophyItems = [
  {
    icon: Bot,
    title: "AEO-First Architecture",
    tagline: "Answer Engine Optimization",
    description: "The next wave of traffic isn't clicking links; they are reading answers. We structure your content to be the top citation inside ChatGPT, Gemini, Claude, and Perplexity searches.",
    stat: "AI Citation Bait"
  },
  {
    icon: Target,
    title: "Revenue Over Vanity Traffic",
    tagline: "High-Intent Keyword Engineering",
    description: "We ignore vanity search metrics. We target specific, high-intent transactional keywords that bring customers ready to buy, book, or sign in Bahrain and the GCC.",
    stat: "Intent-Mapped"
  },
  {
    icon: ShieldCheck,
    title: "Hyper-Local Geo-Authority",
    tagline: "Precision Schema Mapping",
    description: "Google treats local relevance with absolute authority. We construct geo-targeted landing page hubs (Seef, Manama, Riffa) bound by nested LocalBusiness schema markups.",
    stat: "Bahrain-Centric"
  },
  {
    icon: Zap,
    title: "Sub-500ms Next.js Speed",
    tagline: "Headless Performance Standards",
    description: "Millisecond delays cost rankings and conversions. Our headless systems render pages instantly, hitting perfect 100/100 Core Web Vitals to satisfy Google's page speed algorithm.",
    stat: "Core Web Vitals 100"
  }
];

export default function HowWeThinkSection() {
  const ref = useRef<HTMLDivElement>(null);
  const isInView = useInView(ref, { once: true, margin: "-100px" });

  return (
    <section id="how-we-think" className="relative py-20 sm:py-32 overflow-hidden">
      <div className="absolute inset-0 bg-gradient-to-b from-charcoal via-black-matte to-charcoal" />
      <div className="absolute inset-0 radial-gradient-top opacity-70" />
      
      <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Header Block */}
        <div className="flex flex-col md:flex-row md:items-end justify-between mb-16 gap-6">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={isInView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.6 }}
            className="max-w-2xl"
          >
            <span className="inline-block text-xs font-semibold text-electric-blue uppercase tracking-widest mb-4 px-3 py-1 rounded-full border border-electric-blue/20 bg-electric-blue/5">
              Our Creed
            </span>
            <h2 className="text-3xl sm:text-4xl lg:text-5xl font-[family-name:var(--font-space)] font-bold mt-2 leading-tight">
              How We Think: <br className="hidden sm:inline" />
              <span className="gradient-text">Our Core Search Philosophy</span>
            </h2>
          </motion.div>
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={isInView ? { opacity: 1, y: 0 } : {}}
            transition={{ delay: 0.2, duration: 0.6 }}
            className="text-soft-gray text-base sm:text-lg max-w-md leading-relaxed"
          >
            SEO is no longer just about repeating keywords on a page. It is about systems engineering, performance, and understanding how AI engines consume information.
          </motion.p>
        </div>

        {/* Philosophy Grid */}
        <div className="grid md:grid-cols-2 gap-6" ref={ref}>
          {philosophyItems.map((item, i) => (
            <motion.div
              key={i}
              initial={{ opacity: 0, y: 40 }}
              animate={isInView ? { opacity: 1, y: 0 } : {}}
              transition={{
                delay: i * 0.15,
                duration: 0.7,
                ease: [0.22, 1, 0.36, 1],
              }}
              className="group glass rounded-2xl p-6 sm:p-8 hover:glow-blue border border-white/[0.04] hover:border-electric-blue/20 transition-all duration-500 relative flex flex-col justify-between overflow-hidden"
            >
              {/* Background accent */}
              <div className="absolute top-0 right-0 w-24 h-24 bg-electric-blue/5 rounded-bl-full opacity-0 group-hover:opacity-100 transition-all duration-500 blur-xl" />
              
              <div>
                <div className="flex items-start justify-between mb-6">
                  <div className="w-12 h-12 rounded-xl bg-electric-blue/10 flex items-center justify-center group-hover:bg-electric-blue/20 group-hover:scale-110 transition-all duration-300">
                    <item.icon className="w-6 h-6 text-electric-blue" />
                  </div>
                  <span className="text-[10px] sm:text-xs font-semibold tracking-wider text-electric-blue/60 uppercase border border-electric-blue/10 rounded-full px-2.5 py-1 bg-electric-blue/5">
                    {item.stat}
                  </span>
                </div>

                <div className="text-[11px] font-semibold uppercase tracking-wider text-soft-gray/50 mb-1">
                  {item.tagline}
                </div>
                <h3 className="text-xl sm:text-2xl font-[family-name:var(--font-space)] font-bold text-white mb-3">
                  {item.title}
                </h3>
                <p className="text-soft-gray text-sm sm:text-base leading-relaxed mb-6">
                  {item.description}
                </p>
              </div>

              <div className="pt-4 border-t border-white/[0.04] flex items-center text-xs font-semibold text-soft-gray group-hover:text-electric-blue transition-colors mt-auto">
                <span>View Integration Method</span>
                <ArrowUpRight className="w-4 h-4 ml-1 transform group-hover:translate-x-0.5 group-hover:-translate-y-0.5 transition-transform" />
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
