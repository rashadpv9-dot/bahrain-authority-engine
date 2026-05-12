"use client";

import { motion, useInView } from "framer-motion";
import { useRef } from "react";
import { Check, ArrowRight, Sparkles } from "lucide-react";

const valueItems = [
  { service: "AI SEO Strategy & Intelligence", value: "1,500" },
  { service: "Technical SEO Foundation", value: "800" },
  { service: "Google Maps SEO Domination", value: "700" },
  { service: "AI Content Engine (Monthly)", value: "2,000" },
  { service: "Lead Funnel Optimization", value: "1,200" },
  { service: "AI Search (GEO) Optimization", value: "1,000" },
  { service: "Monthly Analytics & Reporting", value: "500" },
  { service: "Dedicated Strategy Manager", value: "1,000" },
];

export default function ValueStackSection() {
  const ref = useRef<HTMLDivElement>(null);
  const isInView = useInView(ref, { once: true, margin: "-100px" });

  const totalValue = 8700;

  return (
    <section id="pricing" className="relative py-20 sm:py-32 overflow-hidden" ref={ref}>
      <div className="absolute inset-0 radial-gradient-blue" />
      <div className="absolute inset-0 grid-bg opacity-20" />

      <div className="relative z-10 max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6 }}
          className="text-center max-w-3xl mx-auto mb-10 sm:mb-16"
        >
          <span className="inline-block text-xs font-semibold text-electric-blue uppercase tracking-widest mb-4 px-3 py-1 rounded-full border border-electric-blue/20 bg-electric-blue/5">
            The Investment
          </span>
          <h2 className="text-2xl sm:text-4xl lg:text-5xl font-[family-name:var(--font-space)] font-bold mt-4 leading-tight">
            Everything You Get With{" "}
            <span className="gradient-text">Authority Engine™</span>
          </h2>
        </motion.div>

        {/* Value Stack Card */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ delay: 0.3, duration: 0.6 }}
          className="glass rounded-2xl sm:rounded-3xl overflow-hidden glow-blue border border-electric-blue/10"
        >
          {/* Items */}
          <div className="p-5 sm:p-8 space-y-0">
            {valueItems.map((item, i) => (
              <motion.div
                key={i}
                initial={{ opacity: 0, x: -20 }}
                animate={isInView ? { opacity: 1, x: 0 } : {}}
                transition={{ delay: 0.4 + i * 0.08 }}
                className="flex items-center justify-between py-4 border-b border-white/[0.06] last:border-0"
              >
                <div className="flex items-center gap-2 sm:gap-3">
                  <Check className="w-5 h-5 text-electric-blue flex-shrink-0" />
                  <span className="text-white font-medium text-sm sm:text-base">{item.service}</span>
                </div>
                <span className="text-soft-gray text-sm font-medium whitespace-nowrap ml-4">
                  BHD <span className="line-through">{item.value}</span>
                </span>
              </motion.div>
            ))}
          </div>

          {/* Total & Price */}
          <div className="bg-gradient-to-r from-electric-blue/10 via-electric-blue/5 to-transparent p-5 sm:p-8 border-t border-electric-blue/10">
            <div className="flex flex-col sm:flex-row items-center justify-between gap-6">
              <div>
                <p className="text-soft-gray text-sm mb-1">Total Value</p>
                <p className="text-2xl font-[family-name:var(--font-space)] font-bold text-soft-gray line-through">
                  BHD {totalValue.toLocaleString()}+
                </p>
              </div>
              <div className="text-center sm:text-right">
                <p className="text-soft-gray text-sm mb-1">Your Investment</p>
                <div className="flex items-baseline gap-1">
                  <span className="text-xs text-soft-gray">Starting from</span>
                  <motion.span
                    initial={{ opacity: 0, scale: 0.8 }}
                    animate={isInView ? { opacity: 1, scale: 1 } : {}}
                    transition={{ delay: 1.2, duration: 0.5 }}
                    className="text-3xl sm:text-5xl font-[family-name:var(--font-space)] font-bold text-white"
                  >
                    BHD 997
                  </motion.span>
                  <span className="text-soft-gray text-sm">/month</span>
                </div>
              </div>
            </div>

            <motion.a
              href="#book"
              initial={{ opacity: 0, y: 10 }}
              animate={isInView ? { opacity: 1, y: 0 } : {}}
              transition={{ delay: 1.4, duration: 0.5 }}
              className="mt-6 sm:mt-8 w-full group flex items-center justify-center gap-2 px-6 py-3.5 sm:px-8 sm:py-4 bg-electric-blue hover:bg-electric-blue-dark text-white font-semibold rounded-full transition-all duration-300 hover:shadow-[0_0_30px_rgba(59,130,246,0.4)] text-base sm:text-lg"
            >
              <Sparkles className="w-5 h-5" />
              Book Your Strategy Session
              <ArrowRight className="w-5 h-5 group-hover:translate-x-1 transition-transform" />
            </motion.a>
          </div>
        </motion.div>
      </div>
    </section>
  );
}
