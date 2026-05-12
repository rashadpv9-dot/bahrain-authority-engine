"use client";

import { motion, useInView } from "framer-motion";
import { useRef } from "react";
import { X, Check, Zap } from "lucide-react";

const traditionalSEO = [
  "Blogs only — no real strategy",
  "Slow results — months of waiting",
  "Outdated tactics from 2018",
  "Rankings only — no lead generation",
  "Manual processes — no automation",
  "Generic approach for all industries",
];

const aiFirstSEO = [
  "AI visibility across all platforms",
  "GEO optimization for AI search engines",
  "Automated authority building systems",
  "Lead generation as the core metric",
  "AI-powered content at scale",
  "Industry-specific intelligence systems",
];

export default function AIOpportunitySection() {
  const ref = useRef<HTMLDivElement>(null);
  const isInView = useInView(ref, { once: true, margin: "-100px" });

  return (
    <section className="relative py-20 sm:py-32 overflow-hidden" ref={ref}>
      <div className="absolute inset-0 bg-gradient-to-b from-black-matte via-charcoal to-black-matte" />
      <div className="absolute inset-0 grid-bg-blue opacity-30" />

      <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6 }}
          className="text-center max-w-3xl mx-auto mb-10 sm:mb-16"
        >
          <span className="inline-block text-xs font-semibold text-electric-blue uppercase tracking-widest mb-4 px-3 py-1 rounded-full border border-electric-blue/20 bg-electric-blue/5">
            The Shift
          </span>
          <h2 className="text-2xl sm:text-4xl lg:text-5xl font-[family-name:var(--font-space)] font-bold mt-4 leading-tight">
            SEO Has Changed{" "}
            <span className="gradient-text">Forever</span>
          </h2>
          <p className="mt-4 sm:mt-6 text-base sm:text-lg text-soft-gray max-w-2xl mx-auto">
            The businesses that understand this shift will dominate. The ones that don&apos;t will become invisible.
          </p>
        </motion.div>

        {/* Comparison */}
        <div className="grid md:grid-cols-2 gap-4 sm:gap-6 lg:gap-0 relative">
          {/* Animated divider */}
          <div className="hidden lg:block absolute left-1/2 top-0 bottom-0 w-px">
            <motion.div
              initial={{ height: 0 }}
              animate={isInView ? { height: "100%" } : {}}
              transition={{ delay: 0.5, duration: 1, ease: "easeInOut" }}
              className="w-full bg-gradient-to-b from-transparent via-electric-blue/40 to-transparent"
            />
            <motion.div
              initial={{ opacity: 0, scale: 0 }}
              animate={isInView ? { opacity: 1, scale: 1 } : {}}
              transition={{ delay: 1.0, duration: 0.5 }}
              className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-12 h-12 rounded-full bg-electric-blue flex items-center justify-center glow-blue-strong z-10"
            >
              <Zap className="w-5 h-5 text-white" />
            </motion.div>
          </div>

          {/* Traditional SEO */}
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            animate={isInView ? { opacity: 1, x: 0 } : {}}
            transition={{ delay: 0.3, duration: 0.6 }}
            className="glass rounded-xl sm:rounded-2xl p-6 sm:p-8 lg:rounded-r-none lg:mr-0 border-danger-red/10"
          >
            <div className="flex items-center gap-3 mb-5 sm:mb-8">
              <div className="w-3 h-3 rounded-full bg-danger-red/50" />
              <h3 className="text-base sm:text-xl font-[family-name:var(--font-space)] font-bold text-soft-gray">
                Traditional SEO
              </h3>
              <span className="ml-auto text-xs px-2 py-1 rounded-full bg-danger-red/10 text-danger-red font-medium">
                Outdated
              </span>
            </div>
            <div className="space-y-4">
              {traditionalSEO.map((item, i) => (
                <motion.div
                  key={i}
                  initial={{ opacity: 0, x: -10 }}
                  animate={isInView ? { opacity: 1, x: 0 } : {}}
                  transition={{ delay: 0.5 + i * 0.1 }}
                  className="flex items-start gap-3"
                >
                  <X className="w-5 h-5 text-danger-red/60 flex-shrink-0 mt-0.5" />
                  <span className="text-soft-gray/80 text-sm">{item}</span>
                </motion.div>
              ))}
            </div>
          </motion.div>

          {/* AI-First SEO */}
          <motion.div
            initial={{ opacity: 0, x: 30 }}
            animate={isInView ? { opacity: 1, x: 0 } : {}}
            transition={{ delay: 0.3, duration: 0.6 }}
            className="glass rounded-xl sm:rounded-2xl p-6 sm:p-8 lg:rounded-l-none lg:ml-0 border-electric-blue/10 glow-blue"
          >
            <div className="flex items-center gap-3 mb-5 sm:mb-8">
              <div className="w-3 h-3 rounded-full bg-electric-blue animate-pulse" />
              <h3 className="text-base sm:text-xl font-[family-name:var(--font-space)] font-bold text-white">
                AI-First SEO
              </h3>
              <span className="ml-auto text-xs px-2 py-1 rounded-full bg-electric-blue/10 text-electric-blue font-medium">
                The Future
              </span>
            </div>
            <div className="space-y-4">
              {aiFirstSEO.map((item, i) => (
                <motion.div
                  key={i}
                  initial={{ opacity: 0, x: 10 }}
                  animate={isInView ? { opacity: 1, x: 0 } : {}}
                  transition={{ delay: 0.5 + i * 0.1 }}
                  className="flex items-start gap-3"
                >
                  <Check className="w-5 h-5 text-electric-blue flex-shrink-0 mt-0.5" />
                  <span className="text-white/90 text-sm">{item}</span>
                </motion.div>
              ))}
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
