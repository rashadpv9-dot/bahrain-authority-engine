"use client";

import { motion, useInView } from "framer-motion";
import { useRef } from "react";
import { Check, X } from "lucide-react";

const comparisonItems = [
  { feature: "AI-Powered Strategy", traditional: false, aifirst: true },
  { feature: "AI Search (GEO) Optimization", traditional: false, aifirst: true },
  { feature: "Automated Content Systems", traditional: false, aifirst: true },
  { feature: "Lead Generation Focus", traditional: false, aifirst: true },
  { feature: "Real-Time Analytics Dashboard", traditional: false, aifirst: true },
  { feature: "Google Maps Domination", traditional: false, aifirst: true },
  { feature: "Bahrain Market Intelligence", traditional: false, aifirst: true },
  { feature: "90-Day Growth Framework", traditional: false, aifirst: true },
  { feature: "Performance Guarantee", traditional: false, aifirst: true },
  { feature: "Blog-Only Strategy", traditional: true, aifirst: false },
  { feature: "Long-Term Lock-In Contracts", traditional: true, aifirst: false },
  { feature: "Generic Global Approach", traditional: true, aifirst: false },
];

export default function DifferentiatorSection() {
  const ref = useRef<HTMLDivElement>(null);
  const isInView = useInView(ref, { once: true, margin: "-100px" });

  return (
    <section className="relative py-20 sm:py-32 overflow-hidden" ref={ref}>
      <div className="absolute inset-0 radial-gradient-blue" />

      <div className="relative z-10 max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6 }}
          className="text-center max-w-3xl mx-auto mb-12 sm:mb-16"
        >
          <span className="inline-block text-xs font-semibold text-electric-blue uppercase tracking-widest mb-4 px-3 py-1 rounded-full border border-electric-blue/20 bg-electric-blue/5">
            The Difference
          </span>
          <h2 className="text-2xl sm:text-4xl lg:text-5xl font-[family-name:var(--font-space)] font-bold mt-4 leading-tight">
            Most SEO Agencies Are{" "}
            <span className="text-danger-red">Already Outdated</span>
          </h2>
        </motion.div>

        {/* Desktop: Table layout */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ delay: 0.3, duration: 0.6 }}
          className="hidden sm:block glass rounded-2xl overflow-hidden border border-white/[0.04]"
        >
          {/* Table Header */}
          <div className="grid grid-cols-3 gap-4 p-6 border-b border-white/[0.06]">
            <div className="text-sm font-medium text-soft-gray">Feature</div>
            <div className="text-center text-sm font-medium text-soft-gray/60">
              Traditional
            </div>
            <div className="text-center text-sm font-bold text-electric-blue">
              Authority Engine™
            </div>
          </div>

          {/* Rows */}
          {comparisonItems.map((item, i) => (
            <motion.div
              key={i}
              initial={{ opacity: 0, x: -10 }}
              animate={isInView ? { opacity: 1, x: 0 } : {}}
              transition={{ delay: 0.4 + i * 0.05 }}
              className={`grid grid-cols-3 gap-4 p-4 px-6 border-b border-white/[0.03] last:border-0 hover:bg-white/[0.02] transition-colors ${
                i >= 9 ? "opacity-60" : ""
              }`}
            >
              <div className="text-sm text-white/80">{item.feature}</div>
              <div className="text-center">
                {item.traditional ? (
                  <Check className="w-4 h-4 text-soft-gray/40 mx-auto" />
                ) : (
                  <X className="w-4 h-4 text-danger-red/50 mx-auto" />
                )}
              </div>
              <div className="text-center">
                {item.aifirst ? (
                  <Check className="w-4 h-4 text-success-green mx-auto" />
                ) : (
                  <X className="w-4 h-4 text-soft-gray/30 mx-auto" />
                )}
              </div>
            </motion.div>
          ))}
        </motion.div>

        {/* Mobile: Card layout */}
        <div className="sm:hidden space-y-3">
          {comparisonItems.map((item, i) => (
            <motion.div
              key={i}
              initial={{ opacity: 0, y: 15 }}
              animate={isInView ? { opacity: 1, y: 0 } : {}}
              transition={{ delay: 0.3 + i * 0.04 }}
              className={`glass rounded-xl p-4 border ${
                item.aifirst
                  ? "border-electric-blue/10"
                  : "border-white/[0.04] opacity-60"
              }`}
            >
              <div className="flex items-center justify-between">
                <span className="text-sm text-white/90 font-medium flex-1 pr-4">
                  {item.feature}
                </span>
                <div className="flex items-center gap-4 flex-shrink-0">
                  <div className="text-center">
                    <div className="text-[9px] text-soft-gray/40 mb-1">Old</div>
                    {item.traditional ? (
                      <Check className="w-4 h-4 text-soft-gray/40 mx-auto" />
                    ) : (
                      <X className="w-4 h-4 text-danger-red/40 mx-auto" />
                    )}
                  </div>
                  <div className="text-center">
                    <div className="text-[9px] text-electric-blue/60 mb-1">AI</div>
                    {item.aifirst ? (
                      <Check className="w-4 h-4 text-success-green mx-auto" />
                    ) : (
                      <X className="w-4 h-4 text-soft-gray/30 mx-auto" />
                    )}
                  </div>
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
