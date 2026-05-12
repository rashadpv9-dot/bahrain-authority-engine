"use client";

import { motion, useInView } from "framer-motion";
import { useRef } from "react";
import { TrendingUp, Users, MapPin, ArrowUpRight } from "lucide-react";

const caseStudies = [
  {
    title: "Bahrain Premium Clinic",
    industry: "Healthcare",
    results: [
      { label: "Traffic Increase", value: "+312%", icon: TrendingUp },
      { label: "Maps Ranking", value: "#1", icon: MapPin },
      { label: "Consultation Inquiries", value: "4x", icon: Users },
    ],
    beforeAfter: {
      before: { traffic: 1200, leads: 8, ranking: 47 },
      after: { traffic: 4944, leads: 32, ranking: 1 },
    },
    period: "90 Days",
    chartData: [15, 22, 28, 35, 42, 55, 68, 74, 85, 92, 96, 100],
  },
  {
    title: "Manama Law Partners",
    industry: "Legal",
    results: [
      { label: "Organic Traffic", value: "+287%", icon: TrendingUp },
      { label: "Local Ranking", value: "#2", icon: MapPin },
      { label: "Case Inquiries", value: "3.5x", icon: Users },
    ],
    beforeAfter: {
      before: { traffic: 800, leads: 5, ranking: 38 },
      after: { traffic: 3096, leads: 18, ranking: 2 },
    },
    period: "120 Days",
    chartData: [10, 15, 20, 28, 38, 48, 55, 65, 72, 80, 88, 95],
  },
  {
    title: "Luxury Dining Bahrain",
    industry: "Restaurant",
    results: [
      { label: "Search Visibility", value: "+425%", icon: TrendingUp },
      { label: "Google Maps", value: "#1", icon: MapPin },
      { label: "Reservations", value: "5x", icon: Users },
    ],
    beforeAfter: {
      before: { traffic: 600, leads: 12, ranking: 52 },
      after: { traffic: 3150, leads: 60, ranking: 1 },
    },
    period: "60 Days",
    chartData: [12, 25, 38, 50, 62, 70, 78, 85, 90, 94, 97, 100],
  },
];

function MiniChart({ data, inView }: { data: number[]; inView: boolean }) {
  const width = 200;
  const height = 60;
  const points = data.map((v, i) => ({
    x: (i / (data.length - 1)) * width,
    y: height - (v / 100) * height,
  }));

  const pathD = points
    .map((p, i) => `${i === 0 ? "M" : "L"} ${p.x} ${p.y}`)
    .join(" ");

  const areaD = `${pathD} L ${width} ${height} L 0 ${height} Z`;

  return (
    <svg viewBox={`0 0 ${width} ${height}`} className="w-full h-full">
      <defs>
        <linearGradient id="chartGradient" x1="0" y1="0" x2="0" y2="1">
          <stop offset="0%" stopColor="#3B82F6" stopOpacity="0.3" />
          <stop offset="100%" stopColor="#3B82F6" stopOpacity="0" />
        </linearGradient>
      </defs>
      {inView && (
        <>
          <path d={areaD} fill="url(#chartGradient)" />
          <path
            d={pathD}
            fill="none"
            stroke="#3B82F6"
            strokeWidth="2"
            strokeLinecap="round"
            strokeLinejoin="round"
            strokeDasharray="400"
            strokeDashoffset="400"
            style={{
              animation: "dash 2s ease forwards",
              animationDelay: "0.5s",
            }}
          />
        </>
      )}
    </svg>
  );
}

export default function CaseStudiesSection() {
  const ref = useRef<HTMLDivElement>(null);
  const isInView = useInView(ref, { once: true, margin: "-100px" });

  return (
    <section id="results" className="relative py-20 sm:py-32 overflow-hidden" ref={ref}>
      <div className="absolute inset-0 bg-gradient-to-b from-black-matte via-charcoal/30 to-black-matte" />

      <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6 }}
          className="text-center max-w-3xl mx-auto mb-10 sm:mb-16"
        >
          <span className="inline-block text-xs font-semibold text-electric-blue uppercase tracking-widest mb-4 px-3 py-1 rounded-full border border-electric-blue/20 bg-electric-blue/5">
            Proven Results
          </span>
          <h2 className="text-2xl sm:text-4xl lg:text-5xl font-[family-name:var(--font-space)] font-bold mt-4 leading-tight">
            Real Businesses.{" "}
            <span className="gradient-text">Real Growth.</span>
          </h2>
        </motion.div>

        {/* Case Study Cards */}
        <div className="grid lg:grid-cols-3 gap-4 sm:gap-6">
          {caseStudies.map((study, i) => (
            <motion.div
              key={i}
              initial={{ opacity: 0, y: 40 }}
              animate={isInView ? { opacity: 1, y: 0 } : {}}
              transition={{
                delay: 0.2 + i * 0.15,
                duration: 0.6,
                ease: [0.22, 1, 0.36, 1],
              }}
              className="group glass rounded-xl sm:rounded-2xl overflow-hidden hover:glow-blue transition-all duration-500 border border-white/[0.04] hover:border-electric-blue/20"
            >
              {/* Chart Area */}
              <div className="h-24 px-5 pt-5 relative">
                <MiniChart data={study.chartData} inView={isInView} />
              </div>

              <div className="p-5 sm:p-6 pt-2">
                {/* Title */}
                <div className="flex items-center justify-between mb-1">
                  <h3 className="text-lg font-[family-name:var(--font-space)] font-bold text-white">
                    {study.title}
                  </h3>
                  <ArrowUpRight className="w-4 h-4 text-electric-blue opacity-0 group-hover:opacity-100 transition-opacity" />
                </div>
                <div className="flex items-center gap-2 mb-6">
                  <span className="text-xs text-electric-blue font-medium">{study.industry}</span>
                  <span className="text-xs text-soft-gray">• {study.period}</span>
                </div>

                {/* Results */}
                <div className="space-y-3 mb-6">
                  {study.results.map((result, j) => (
                    <div key={j} className="flex items-center justify-between">
                      <div className="flex items-center gap-2">
                        <result.icon className="w-4 h-4 text-soft-gray" />
                        <span className="text-sm text-soft-gray">{result.label}</span>
                      </div>
                      <span className="text-sm font-bold text-success-green">{result.value}</span>
                    </div>
                  ))}
                </div>

                {/* Before / After */}
                <div className="grid grid-cols-2 gap-3 pt-4 border-t border-white/[0.06]">
                  <div className="bg-white/[0.02] rounded-lg p-3">
                    <span className="text-[10px] text-soft-gray/60 uppercase tracking-wider">Before</span>
                    <div className="mt-1 text-lg font-bold text-soft-gray">
                      {study.beforeAfter.before.traffic.toLocaleString()}
                    </div>
                    <span className="text-[10px] text-soft-gray/60">monthly visits</span>
                  </div>
                  <div className="bg-electric-blue/[0.05] rounded-lg p-3 border border-electric-blue/10">
                    <span className="text-[10px] text-electric-blue/80 uppercase tracking-wider">After</span>
                    <div className="mt-1 text-lg font-bold text-white">
                      {study.beforeAfter.after.traffic.toLocaleString()}
                    </div>
                    <span className="text-[10px] text-soft-gray/60">monthly visits</span>
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
