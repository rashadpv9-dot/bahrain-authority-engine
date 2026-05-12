"use client";

import { motion, useInView } from "framer-motion";
import { useRef, useEffect, useState } from "react";
import { Target, Eye, TrendingUp, Calendar } from "lucide-react";

interface StatItem {
  icon: React.ComponentType<{ className?: string }>;
  value: number;
  suffix: string;
  label: string;
}

const stats: StatItem[] = [
  { icon: Target, value: 1200, suffix: "+", label: "Keywords Ranked" },
  { icon: Eye, value: 4.2, suffix: "M", label: "Search Impressions" },
  { icon: TrendingUp, value: 300, suffix: "%", label: "Avg Visibility Growth" },
  { icon: Calendar, value: 90, suffix: "-Day", label: "Growth Framework" },
];

function AnimatedCounter({ value, suffix, inView }: { value: number; suffix: string; inView: boolean }) {
  const [count, setCount] = useState(0);

  useEffect(() => {
    if (!inView) return;
    const isDecimal = value % 1 !== 0;
    const duration = 2000;
    const steps = 60;
    const increment = value / steps;
    let current = 0;
    const timer = setInterval(() => {
      current += increment;
      if (current >= value) {
        setCount(value);
        clearInterval(timer);
      } else {
        setCount(isDecimal ? parseFloat(current.toFixed(1)) : Math.floor(current));
      }
    }, duration / steps);
    return () => clearInterval(timer);
  }, [inView, value]);

  return (
    <span className="text-2xl sm:text-4xl font-[family-name:var(--font-space)] font-bold text-white">
      {count % 1 !== 0 ? count.toFixed(1) : count}
      <span className="text-electric-blue">{suffix}</span>
    </span>
  );
}

export default function TrustBar() {
  const ref = useRef<HTMLDivElement>(null);
  const isInView = useInView(ref, { once: true, margin: "-100px" });

  return (
    <section className="relative py-14 sm:py-20 overflow-hidden" ref={ref}>
      <div className="absolute inset-0 bg-gradient-to-b from-black-matte via-charcoal/50 to-black-matte" />

      <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Stats Grid */}
        <div className="grid grid-cols-2 lg:grid-cols-4 gap-3 sm:gap-6">
          {stats.map((stat, i) => (
            <motion.div
              key={i}
              initial={{ opacity: 0, y: 30 }}
              animate={isInView ? { opacity: 1, y: 0 } : {}}
              transition={{ delay: i * 0.15, duration: 0.6, ease: [0.22, 1, 0.36, 1] }}
              className="glass rounded-xl sm:rounded-2xl p-4 sm:p-6 text-center group hover:glow-blue transition-all duration-500"
            >
              <div className="w-8 h-8 sm:w-10 sm:h-10 mx-auto mb-3 sm:mb-4 rounded-xl bg-electric-blue/10 flex items-center justify-center group-hover:bg-electric-blue/20 transition-colors">
                <stat.icon className="w-4 h-4 sm:w-5 sm:h-5 text-electric-blue" />
              </div>
              <AnimatedCounter value={stat.value} suffix={stat.suffix} inView={isInView} />
              <p className="mt-1.5 sm:mt-2 text-xs sm:text-sm text-soft-gray font-medium">{stat.label}</p>
            </motion.div>
          ))}
        </div>

        {/* Client logos placeholder */}
        <motion.div
          initial={{ opacity: 0 }}
          animate={isInView ? { opacity: 1 } : {}}
          transition={{ delay: 0.8, duration: 0.8 }}
          className="mt-10 sm:mt-16 text-center"
        >
          <p className="text-xs text-soft-gray/60 uppercase tracking-widest mb-6 font-medium">
            Trusted by leading Bahrain businesses
          </p>
          <div className="flex flex-wrap justify-center items-center gap-4 sm:gap-8 opacity-40">
            {["Healthcare Co.", "Legal Partners", "Luxury Dining", "Premium RE", "Auto Group", "Finance Hub"].map((name, i) => (
              <motion.div
                key={i}
                initial={{ opacity: 0 }}
                animate={isInView ? { opacity: 1 } : {}}
                transition={{ delay: 1.0 + i * 0.1 }}
                className="text-sm font-[family-name:var(--font-space)] font-semibold text-soft-gray/80 tracking-wider"
              >
                {name}
              </motion.div>
            ))}
          </div>
        </motion.div>
      </div>
    </section>
  );
}
