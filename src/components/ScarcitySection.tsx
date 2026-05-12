"use client";

import { motion, useInView } from "framer-motion";
import { useRef, useEffect, useState } from "react";
import { Clock, AlertTriangle, Users } from "lucide-react";

export default function ScarcitySection() {
  const ref = useRef<HTMLDivElement>(null);
  const isInView = useInView(ref, { once: true, margin: "-100px" });
  const [spots, setSpots] = useState(2);

  return (
    <section className="relative py-20 sm:py-32 overflow-hidden" ref={ref}>
      <div className="absolute inset-0 bg-gradient-to-b from-charcoal via-black-matte to-charcoal" />
      <div className="absolute inset-0 radial-gradient-blue" />

      <div className="relative z-10 max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
        {/* Warning badge */}
        <motion.div
          initial={{ opacity: 0, scale: 0.8 }}
          animate={isInView ? { opacity: 1, scale: 1 } : {}}
          transition={{ duration: 0.5 }}
          className="inline-flex items-center gap-2 mb-8 px-4 py-2 rounded-full bg-warning-amber/10 border border-warning-amber/20"
        >
          <AlertTriangle className="w-4 h-4 text-warning-amber" />
          <span className="text-xs font-semibold text-warning-amber">Limited Availability</span>
        </motion.div>

        <motion.h2
          initial={{ opacity: 0, y: 30 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ delay: 0.2, duration: 0.6 }}
          className="text-2xl sm:text-4xl lg:text-5xl font-[family-name:var(--font-space)] font-bold leading-tight"
        >
          We Only Work With A{" "}
          <span className="text-warning-amber">Limited Number</span> of
          Businesses Per Industry
        </motion.h2>

        <motion.p
          initial={{ opacity: 0, y: 20 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ delay: 0.4, duration: 0.6 }}
          className="mt-5 text-base sm:text-lg text-soft-gray max-w-2xl mx-auto"
        >
          To guarantee exclusivity and results, we limit the number of clients we
          take per industry in Bahrain. Once your competitor takes your spot,
          it&apos;s gone.
        </motion.p>

        {/* Spots counter */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ delay: 0.6, duration: 0.6 }}
          className="mt-10 sm:mt-12 inline-flex flex-col sm:flex-row items-center gap-3 sm:gap-6 glass rounded-2xl p-5 sm:p-6 sm:px-10 glow-blue border border-electric-blue/10"
        >
          <div className="flex items-center gap-3">
            <div className="w-3 h-3 rounded-full bg-warning-amber animate-pulse" />
            <span className="text-soft-gray font-medium">Onboarding spots remaining</span>
          </div>
          <div className="text-4xl font-[family-name:var(--font-space)] font-bold text-white">
            {spots}
          </div>
          <span className="text-sm text-soft-gray">this month</span>
        </motion.div>

        {/* Industry slots */}
        <motion.div
          initial={{ opacity: 0 }}
          animate={isInView ? { opacity: 1 } : {}}
          transition={{ delay: 0.8, duration: 0.6 }}
          className="mt-6 sm:mt-8 grid grid-cols-3 sm:flex sm:flex-wrap justify-center gap-2 sm:gap-3"
        >
          {[
            { industry: "Healthcare", available: true },
            { industry: "Legal", available: false },
            { industry: "Restaurant", available: true },
            { industry: "Real Estate", available: false },
            { industry: "Automotive", available: true },
            { industry: "Finance", available: false },
          ].map((slot, i) => (
            <div
              key={i}
              className={`inline-flex items-center gap-2 px-4 py-2 rounded-full text-xs font-medium ${
                slot.available
                  ? "bg-success-green/10 text-success-green border border-success-green/20"
                  : "bg-white/[0.03] text-soft-gray/50 border border-white/[0.05] line-through"
              }`}
            >
              <span className={`w-1.5 h-1.5 rounded-full ${slot.available ? "bg-success-green" : "bg-soft-gray/30"}`} />
              {slot.industry}
              {!slot.available && <span className="text-[10px] no-underline">(Taken)</span>}
            </div>
          ))}
        </motion.div>
      </div>
    </section>
  );
}
