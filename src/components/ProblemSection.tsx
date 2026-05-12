"use client";

import { motion, useInView } from "framer-motion";
import { useRef } from "react";
import { EyeOff, TrendingDown, CircleDollarSign } from "lucide-react";

const painPoints = [
  {
    icon: EyeOff,
    title: "Invisible on Google",
    description:
      "Your ideal customers search for your service every day — but find your competitors instead. Every day you're invisible is money walking out the door.",
    stat: "75% of users never scroll past page 1",
  },
  {
    icon: TrendingDown,
    title: "Competitors Outrank You",
    description:
      "While you wait, competitors are actively investing in AI-powered SEO strategies. They're capturing your customers and building unshakeable authority.",
    stat: "Your competitors are investing 3x more in SEO",
  },
  {
    icon: CircleDollarSign,
    title: "Unpredictable Marketing ROI",
    description:
      "Throwing money at ads with no clear return. No tracking, no attribution, no predictable lead flow. It's like gambling with your business growth.",
    stat: "68% of businesses can't measure marketing ROI",
  },
];

export default function ProblemSection() {
  const ref = useRef<HTMLDivElement>(null);
  const isInView = useInView(ref, { once: true, margin: "-100px" });

  return (
    <section className="relative py-20 sm:py-32 overflow-hidden" ref={ref}>
      <div className="absolute inset-0 radial-gradient-blue" />

      <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6 }}
          className="text-center max-w-3xl mx-auto mb-10 sm:mb-16"
        >
          <span className="inline-block text-xs font-semibold text-danger-red uppercase tracking-widest mb-4 px-3 py-1 rounded-full border border-danger-red/20 bg-danger-red/5">
            ⚠️ The Problem
          </span>
          <h2 className="text-2xl sm:text-4xl lg:text-5xl font-[family-name:var(--font-space)] font-bold mt-4 leading-tight">
            Your Competitors Are Quietly{" "}
            <span className="text-danger-red">Stealing Customers</span> Online
          </h2>
        </motion.div>

        {/* Pain Cards */}
        <div className="grid md:grid-cols-3 gap-4 sm:gap-6">
          {painPoints.map((pain, i) => (
            <motion.div
              key={i}
              initial={{ opacity: 0, y: 40 }}
              animate={isInView ? { opacity: 1, y: 0 } : {}}
              transition={{
                delay: 0.2 + i * 0.15,
                duration: 0.6,
                ease: [0.22, 1, 0.36, 1],
              }}
              className="group glass rounded-xl sm:rounded-2xl p-6 sm:p-8 hover:glow-red transition-all duration-500 cursor-default border border-white/[0.04] hover:border-danger-red/20"
            >
              <div className="w-10 h-10 sm:w-12 sm:h-12 rounded-xl bg-danger-red/10 flex items-center justify-center mb-4 sm:mb-6 group-hover:bg-danger-red/20 transition-colors duration-300">
                <pain.icon className="w-5 h-5 sm:w-6 sm:h-6 text-danger-red" />
              </div>
              <h3 className="text-lg sm:text-xl font-[family-name:var(--font-space)] font-bold text-white mb-2 sm:mb-3">
                {pain.title}
              </h3>
              <p className="text-soft-gray text-sm leading-relaxed mb-6">
                {pain.description}
              </p>
              <div className="pt-4 border-t border-white/[0.06]">
                <p className="text-xs text-danger-red/80 font-medium">{pain.stat}</p>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
