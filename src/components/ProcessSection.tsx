"use client";

import { motion, useInView } from "framer-motion";
import { useRef } from "react";
import { Search, Settings, Rocket, TrendingUp } from "lucide-react";

const steps = [
  {
    number: "01",
    icon: Search,
    title: "Audit & Intelligence",
    description:
      "We perform a deep-dive AI audit of your online presence, competitors, and market opportunity. This intelligence shapes your entire strategy.",
    detail: "Competitor analysis • Keyword mapping • AI visibility audit",
  },
  {
    number: "02",
    icon: Settings,
    title: "System Setup",
    description:
      "We build the technical foundation — optimizing your site, Google Business Profile, and setting up tracking systems for maximum performance.",
    detail: "Technical SEO • Schema markup • Tracking setup",
  },
  {
    number: "03",
    icon: Rocket,
    title: "AI SEO Expansion",
    description:
      "We activate the AI Content Engine, build authoritative backlinks, and optimize for both Google and AI search platforms.",
    detail: "Content production • Link building • GEO optimization",
  },
  {
    number: "04",
    icon: TrendingUp,
    title: "Lead Growth Optimization",
    description:
      "We continuously optimize for conversions, refine your lead funnels, and scale what's working to maximize your growth.",
    detail: "CRO • Lead funnel • Scaling strategy",
  },
];

export default function ProcessSection() {
  const ref = useRef<HTMLDivElement>(null);
  const isInView = useInView(ref, { once: true, margin: "-100px" });

  return (
    <section id="process" className="relative py-20 sm:py-32 overflow-hidden" ref={ref}>
      <div className="absolute inset-0 bg-gradient-to-b from-black-matte via-charcoal/30 to-black-matte" />

      <div className="relative z-10 max-w-5xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6 }}
          className="text-center max-w-3xl mx-auto mb-12 sm:mb-20"
        >
          <span className="inline-block text-xs font-semibold text-electric-blue uppercase tracking-widest mb-4 px-3 py-1 rounded-full border border-electric-blue/20 bg-electric-blue/5">
            The Process
          </span>
          <h2 className="text-2xl sm:text-4xl lg:text-5xl font-[family-name:var(--font-space)] font-bold mt-4 leading-tight">
            Your Path to{" "}
            <span className="gradient-text">Search Dominance</span>
          </h2>
        </motion.div>

        {/* Timeline */}
        <div className="relative">
          {/* Animated connecting line */}
          <div className="absolute left-6 sm:left-8 lg:left-1/2 top-0 bottom-0 w-px lg:-translate-x-1/2">
            <motion.div
              initial={{ height: 0 }}
              animate={isInView ? { height: "100%" } : {}}
              transition={{ duration: 2, ease: "easeInOut", delay: 0.5 }}
              className="w-full bg-gradient-to-b from-electric-blue via-electric-blue/40 to-transparent"
            />
          </div>

          <div className="space-y-10 sm:space-y-16">
            {steps.map((step, i) => (
              <motion.div
                key={i}
                initial={{ opacity: 0, y: 30 }}
                animate={isInView ? { opacity: 1, y: 0 } : {}}
                transition={{
                  delay: 0.3 + i * 0.2,
                  duration: 0.6,
                  ease: [0.22, 1, 0.36, 1],
                }}
                className={`relative flex items-start gap-8 lg:gap-16 ${
                  i % 2 === 0 ? "lg:flex-row" : "lg:flex-row-reverse"
                }`}
              >
                {/* Number dot */}
                <div className="absolute left-6 sm:left-8 lg:left-1/2 -translate-x-1/2 z-10">
                  <motion.div
                    initial={{ scale: 0 }}
                    animate={isInView ? { scale: 1 } : {}}
                    transition={{ delay: 0.5 + i * 0.2, duration: 0.4 }}
                    className="w-12 h-12 sm:w-16 sm:h-16 rounded-full bg-charcoal border-2 border-electric-blue/30 flex items-center justify-center glow-blue"
                  >
                    <step.icon className="w-5 h-5 sm:w-6 sm:h-6 text-electric-blue" />
                  </motion.div>
                </div>

                {/* Content card */}
                <div className={`ml-16 sm:ml-24 lg:ml-0 lg:w-[calc(50%-4rem)] ${i % 2 === 0 ? "" : "lg:text-right"}`}>
                  <div className="glass rounded-xl sm:rounded-2xl p-4 sm:p-6 hover:glow-blue transition-all duration-500 border border-white/[0.04] hover:border-electric-blue/20">
                    <span className="text-electric-blue/40 text-xs font-[family-name:var(--font-space)] font-bold tracking-widest">
                      STEP {step.number}
                    </span>
                    <h3 className="text-base sm:text-xl font-[family-name:var(--font-space)] font-bold text-white mt-2 mb-2 sm:mb-3">
                      {step.title}
                    </h3>
                    <p className="text-soft-gray text-sm leading-relaxed mb-4">
                      {step.description}
                    </p>
                    <div className="pt-3 border-t border-white/[0.06]">
                      <p className="text-xs text-electric-blue/70 font-medium">{step.detail}</p>
                    </div>
                  </div>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
