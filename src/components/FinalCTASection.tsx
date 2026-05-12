"use client";

import { motion, useInView } from "framer-motion";
import { useRef } from "react";
import { ArrowRight, Sparkles, Play } from "lucide-react";

export default function FinalCTASection() {
  const ref = useRef<HTMLDivElement>(null);
  const isInView = useInView(ref, { once: true, margin: "-100px" });

  return (
    <section
      id="book"
      className="relative py-24 sm:py-40 overflow-hidden"
      ref={ref}
    >
      {/* Background */}
      <div className="absolute inset-0 bg-gradient-to-b from-black-matte via-charcoal to-black-matte" />
      <div className="absolute inset-0 grid-bg-blue opacity-30" />
      <div className="absolute inset-0 radial-gradient-blue" />

      {/* Animated gradient orbs */}
      <div className="absolute top-1/3 left-1/3 w-[250px] sm:w-[500px] h-[250px] sm:h-[500px] rounded-full bg-electric-blue/5 blur-[80px] sm:blur-[120px] animate-pulse-glow" />
      <div
        className="absolute bottom-1/3 right-1/3 w-[300px] h-[300px] rounded-full bg-electric-blue/3 blur-[80px] animate-pulse-glow"
        style={{ animationDelay: "2s" }}
      />

      <div className="relative z-10 max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6 }}
          className="inline-flex items-center gap-2 mb-6 sm:mb-8 px-4 py-2 rounded-full border border-electric-blue/20 bg-electric-blue/5"
        >
          <Sparkles className="w-3.5 h-3.5 text-electric-blue" />
          <span className="text-xs font-semibold text-electric-blue">The Future Is Now</span>
        </motion.div>

        <motion.h2
          initial={{ opacity: 0, y: 30 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ delay: 0.2, duration: 0.6 }}
          className="text-2xl sm:text-4xl lg:text-6xl font-[family-name:var(--font-space)] font-bold leading-tight"
        >
          The Businesses That Adapt First Will{" "}
          <span className="gradient-text">Dominate Bahrain Search</span>{" "}
          For Years
        </motion.h2>

        <motion.p
          initial={{ opacity: 0, y: 20 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ delay: 0.4, duration: 0.6 }}
          className="mt-6 sm:mt-8 text-base sm:text-xl text-soft-gray max-w-2xl mx-auto leading-relaxed"
        >
          The question isn&apos;t whether AI will change search. It&apos;s whether
          you&apos;ll be positioned to win when it does.
        </motion.p>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ delay: 0.6, duration: 0.6 }}
          className="mt-8 sm:mt-12 flex flex-col sm:flex-row items-center justify-center gap-3 sm:gap-4"
        >
          <a
            href="#book"
            id="final-cta-book"
            className="group w-full sm:w-auto inline-flex items-center justify-center gap-2 px-8 py-4 sm:px-10 sm:py-5 bg-electric-blue hover:bg-electric-blue-dark text-white font-bold rounded-full transition-all duration-300 hover:shadow-[0_0_40px_rgba(59,130,246,0.5)] text-base sm:text-lg"
          >
            <Sparkles className="w-5 h-5" />
            Book Your AI Visibility Strategy Session
            <ArrowRight className="w-5 h-5 group-hover:translate-x-1 transition-transform" />
          </a>
          <a
            href="#audit"
            id="final-cta-audit"
            className="group w-full sm:w-auto inline-flex items-center justify-center gap-2 px-8 py-4 sm:px-8 sm:py-5 border border-white/10 hover:border-electric-blue/50 text-white font-semibold rounded-full transition-all duration-300 hover:bg-white/[0.03] text-base sm:text-lg"
          >
            <Play className="w-4 h-4 text-electric-blue" />
            Get Free AI SEO Audit
          </a>
        </motion.div>

        <motion.p
          initial={{ opacity: 0 }}
          animate={isInView ? { opacity: 1 } : {}}
          transition={{ delay: 0.8, duration: 0.6 }}
          className="mt-6 text-sm text-soft-gray/60"
        >
          Free strategy session • No obligation • 100% confidential
        </motion.p>
      </div>
    </section>
  );
}
