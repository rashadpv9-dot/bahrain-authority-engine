"use client";

import { motion, useInView } from "framer-motion";
import { useRef } from "react";
import { Shield, ArrowRight } from "lucide-react";

export default function GuaranteeSection() {
  const ref = useRef<HTMLDivElement>(null);
  const isInView = useInView(ref, { once: true, margin: "-100px" });

  return (
    <section className="relative py-20 sm:py-32 overflow-hidden" ref={ref}>
      <div className="absolute inset-0 bg-gradient-to-b from-black-matte via-charcoal to-black-matte" />
      <div className="absolute inset-0 grid-bg-blue opacity-20" />

      <div className="relative z-10 max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
        {/* Shield Icon */}
        <motion.div
          initial={{ opacity: 0, scale: 0.5 }}
          animate={isInView ? { opacity: 1, scale: 1 } : {}}
          transition={{ duration: 0.6, ease: [0.22, 1, 0.36, 1] }}
          className="inline-flex mb-6 sm:mb-8"
        >
          <div className="w-16 h-16 sm:w-20 sm:h-20 rounded-2xl bg-gradient-to-br from-electric-blue/20 to-electric-blue/5 flex items-center justify-center glow-blue-strong">
            <Shield className="w-8 h-8 sm:w-10 sm:h-10 text-electric-blue" />
          </div>
        </motion.div>

        <motion.h2
          initial={{ opacity: 0, y: 30 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ delay: 0.2, duration: 0.6 }}
          className="text-2xl sm:text-4xl lg:text-5xl font-[family-name:var(--font-space)] font-bold leading-tight"
        >
          Zero-Risk{" "}
          <span className="gradient-text">Growth Partnership</span>
        </motion.h2>

        <motion.p
          initial={{ opacity: 0, y: 20 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ delay: 0.4, duration: 0.6 }}
          className="mt-5 sm:mt-6 text-base sm:text-xl text-soft-gray max-w-2xl mx-auto leading-relaxed"
        >
          If we don&apos;t improve your visibility, rankings, or qualified leads within{" "}
          <span className="text-white font-semibold">90 days</span>, we continue working{" "}
          <span className="text-electric-blue font-semibold">free</span> until we do.
        </motion.p>

        <motion.p
          initial={{ opacity: 0 }}
          animate={isInView ? { opacity: 1 } : {}}
          transition={{ delay: 0.6, duration: 0.6 }}
          className="mt-4 text-sm text-soft-gray/60"
        >
          No hidden clauses. No fine print. Just results or we don&apos;t get paid.
        </motion.p>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ delay: 0.8, duration: 0.6 }}
          className="mt-8 sm:mt-10"
        >
          <a
            href="#book"
            className="group inline-flex items-center gap-2 px-6 py-3.5 sm:px-8 sm:py-4 bg-electric-blue hover:bg-electric-blue-dark text-white font-semibold rounded-full transition-all duration-300 hover:shadow-[0_0_30px_rgba(59,130,246,0.4)] text-base sm:text-lg"
          >
            Start Risk-Free
            <ArrowRight className="w-5 h-5 group-hover:translate-x-1 transition-transform" />
          </a>
        </motion.div>
      </div>
    </section>
  );
}
