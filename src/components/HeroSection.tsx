"use client";

import { motion, cubicBezier } from "framer-motion";
import { ArrowRight, Play, CheckCircle2, TrendingUp, MapPin, BarChart3, Search, Bot, Globe, Sparkles } from "lucide-react";
import { useEffect, useRef, useState } from "react";

const trustItems = [
  "Bahrain-focused",
  "AI-first systems",
  "Lead-driven SEO",
  "No long-term contracts",
];

const customEase = cubicBezier(0.22, 1, 0.36, 1);

const fadeUp = {
  hidden: { opacity: 0, y: 30 },
  visible: (i: number) => ({
    opacity: 1,
    y: 0,
    transition: {
      delay: 0.3 + i * 0.1,
      duration: 0.6,
      ease: customEase,
    },
  }),
};

/* Mini animated ranking chart */
function RankingChart() {
  const bars = [65, 78, 52, 89, 94, 72, 98, 85, 91];

  return (
    <motion.div
      initial={{ opacity: 0, scale: 0.9 }}
      animate={{ opacity: 1, scale: 1 }}
      transition={{ delay: 1.2, duration: 0.8, ease: customEase }}
      className="glass rounded-2xl p-5 animate-float-slow"
    >
      <div className="flex items-center gap-2 mb-3">
        <TrendingUp className="w-4 h-4 text-electric-blue" />
        <span className="text-xs text-soft-gray font-medium">Ranking Growth</span>
        <span className="ml-auto text-xs text-success-green font-bold">+312%</span>
      </div>
      <div className="flex items-end gap-1.5 h-16">
        {bars.map((height, i) => (
          <motion.div
            key={i}
            initial={{ height: 0 }}
            animate={{ height: `${height}%` }}
            transition={{ delay: 1.4 + i * 0.08, duration: 0.6, ease: "easeOut" }}
            className="flex-1 rounded-sm bg-gradient-to-t from-electric-blue/40 to-electric-blue"
          />
        ))}
      </div>
    </motion.div>
  );
}

/* Mini search analytics card */
function SearchAnalytics() {
  return (
    <motion.div
      initial={{ opacity: 0, x: 20 }}
      animate={{ opacity: 1, x: 0 }}
      transition={{ delay: 1.0, duration: 0.8, ease: customEase }}
      className="glass rounded-2xl p-5 animate-float"
    >
      <div className="flex items-center gap-2 mb-3">
        <Search className="w-4 h-4 text-electric-blue" />
        <span className="text-xs text-soft-gray font-medium">AI Search Visibility</span>
      </div>
      <div className="space-y-2">
        {[
          { query: "best clinic Bahrain", rank: "#1", change: "+5" },
          { query: "law firm Manama", rank: "#2", change: "+8" },
          { query: "luxury restaurant", rank: "#1", change: "+12" },
        ].map((item, i) => (
          <motion.div
            key={i}
            initial={{ opacity: 0, x: 10 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ delay: 1.3 + i * 0.15 }}
            className="flex items-center justify-between text-xs"
          >
            <span className="text-soft-gray truncate flex-1">{item.query}</span>
            <span className="text-white font-bold mx-2">{item.rank}</span>
            <span className="text-success-green font-medium">↑{item.change}</span>
          </motion.div>
        ))}
      </div>
    </motion.div>
  );
}

/* AI Dashboard Preview Card */
function AIDashboard() {
  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ delay: 0.8, duration: 0.8, ease: customEase }}
      className="glass rounded-2xl p-5 glow-blue"
    >
      <div className="flex items-center gap-2 mb-4">
        <Bot className="w-4 h-4 text-electric-blue" />
        <span className="text-xs text-soft-gray font-medium">AI Authority Score</span>
        <div className="ml-auto flex items-center gap-1">
          <span className="w-2 h-2 rounded-full bg-success-green animate-pulse" />
          <span className="text-xs text-success-green">Live</span>
        </div>
      </div>
      <div className="flex items-end gap-4">
        <div>
          <motion.span
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 1.0 }}
            className="text-3xl font-[family-name:var(--font-space)] font-bold text-white"
          >
            94
          </motion.span>
          <span className="text-sm text-soft-gray">/100</span>
        </div>
        <div className="flex-1">
          <div className="w-full bg-white/5 rounded-full h-2 overflow-hidden">
            <motion.div
              initial={{ width: 0 }}
              animate={{ width: "94%" }}
              transition={{ delay: 1.2, duration: 1.5, ease: "easeOut" }}
              className="h-full bg-gradient-to-r from-electric-blue to-electric-blue-light rounded-full"
            />
          </div>
        </div>
      </div>
      <div className="mt-4 grid grid-cols-3 gap-2">
        {[
          { label: "Google", value: "97", icon: Globe },
          { label: "AI Search", value: "91", icon: Sparkles },
          { label: "Local", value: "94", icon: MapPin },
        ].map((item, i) => (
          <motion.div
            key={i}
            initial={{ opacity: 0, y: 10 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 1.4 + i * 0.1 }}
            className="bg-white/[0.03] rounded-lg p-2 text-center"
          >
            <item.icon className="w-3 h-3 text-electric-blue mx-auto mb-1" />
            <div className="text-sm font-bold text-white">{item.value}</div>
            <div className="text-[10px] text-soft-gray">{item.label}</div>
          </motion.div>
        ))}
      </div>
    </motion.div>
  );
}

/* Bahrain Map Heat */
function BahrainHeatMap() {
  return (
    <motion.div
      initial={{ opacity: 0, scale: 0.95 }}
      animate={{ opacity: 1, scale: 1 }}
      transition={{ delay: 1.5, duration: 0.8 }}
      className="glass rounded-2xl p-5 animate-float-slow"
      style={{ animationDelay: "2s" }}
    >
      <div className="flex items-center gap-2 mb-3">
        <MapPin className="w-4 h-4 text-electric-blue" />
        <span className="text-xs text-soft-gray font-medium">Bahrain Coverage</span>
      </div>
      <div className="relative w-full aspect-square max-w-[120px] mx-auto">
        {/* Simplified Bahrain shape */}
        <svg viewBox="0 0 100 140" className="w-full h-full">
          <defs>
            <radialGradient id="heatGrad" cx="50%" cy="40%" r="60%">
              <stop offset="0%" stopColor="#3B82F6" stopOpacity="0.8" />
              <stop offset="50%" stopColor="#3B82F6" stopOpacity="0.3" />
              <stop offset="100%" stopColor="#3B82F6" stopOpacity="0.05" />
            </radialGradient>
          </defs>
          {/* Simplified Bahrain island outline */}
          <path
            d="M45,10 C55,8 65,12 70,20 C75,30 78,45 76,60 C74,75 70,90 65,105 C60,115 55,125 50,130 C45,125 40,115 35,105 C30,90 26,75 24,60 C22,45 25,30 30,20 C35,12 40,10 45,10 Z"
            fill="url(#heatGrad)"
            stroke="#3B82F6"
            strokeWidth="0.5"
            strokeOpacity="0.5"
          />
          {/* Hot spots */}
          {[
            { cx: 50, cy: 35, r: 4 },
            { cx: 45, cy: 55, r: 3 },
            { cx: 55, cy: 75, r: 3 },
            { cx: 50, cy: 95, r: 2 },
          ].map((dot, i) => (
            <g key={i}>
              <circle
                cx={dot.cx}
                cy={dot.cy}
                r={dot.r + 3}
                fill="#3B82F6"
                opacity="0.2"
                className="animate-pulse-glow"
              />
              <circle
                cx={dot.cx}
                cy={dot.cy}
                r={dot.r}
                fill="#3B82F6"
                opacity="0.9"
              />
            </g>
          ))}
        </svg>
      </div>
      <div className="mt-2 flex justify-between text-[10px] text-soft-gray">
        <span>Low</span>
        <div className="flex-1 mx-2 h-1.5 rounded-full bg-gradient-to-r from-electric-blue/10 via-electric-blue/50 to-electric-blue" />
        <span>High</span>
      </div>
    </motion.div>
  );
}

export default function HeroSection() {
  const [typedText, setTypedText] = useState("");
  const fullText = "AI-Powered Visibility Engine";
  const typeRef = useRef(0);

  useEffect(() => {
    const interval = setInterval(() => {
      if (typeRef.current < fullText.length) {
        setTypedText(fullText.slice(0, typeRef.current + 1));
        typeRef.current++;
      } else {
        clearInterval(interval);
      }
    }, 60);
    return () => clearInterval(interval);
  }, []);

  return (
    <section
      id="hero"
      className="relative min-h-screen flex items-center overflow-hidden pt-24 pb-16 lg:pt-0 lg:pb-0"
    >
      {/* Background effects */}
      <div className="absolute inset-0 grid-bg animate-grid opacity-40" />
      <div className="absolute inset-0 radial-gradient-top" />

      {/* Animated gradient orbs */}
      <div className="absolute top-1/4 left-1/4 w-[600px] h-[600px] rounded-full bg-electric-blue/5 blur-[120px] animate-pulse-glow" />
      <div
        className="absolute bottom-1/4 right-1/4 w-[400px] h-[400px] rounded-full bg-electric-blue/3 blur-[100px] animate-pulse-glow"
        style={{ animationDelay: "1.5s" }}
      />

      <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 w-full">
        <div className="grid lg:grid-cols-2 gap-12 lg:gap-16 items-center">
          {/* Left Content */}
          <div className="space-y-5 sm:space-y-8">
            {/* Badge */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6 }}
              className="inline-flex items-center gap-2 glass-blue rounded-full px-4 py-2"
            >
              <Sparkles className="w-3.5 h-3.5 text-electric-blue" />
              <span className="text-xs font-medium text-electric-blue-light">
                {typedText}
                <span className="animate-blink text-electric-blue">|</span>
              </span>
            </motion.div>

            {/* Headline */}
            <motion.h1
              custom={1}
              variants={fadeUp}
              initial="hidden"
              animate="visible"
              className="text-[2rem] sm:text-5xl lg:text-6xl xl:text-7xl font-[family-name:var(--font-space)] font-bold leading-[1.1] tracking-tight"
            >
              Become Bahrain&apos;s Most Visible Business on{" "}
              <span className="gradient-text">Google + AI</span>
            </motion.h1>

            {/* Subheadline */}
            <motion.p
              custom={2}
              variants={fadeUp}
              initial="hidden"
              animate="visible"
              className="text-base sm:text-xl text-soft-gray leading-relaxed max-w-xl"
            >
              We help Bahrain businesses dominate search rankings, AI visibility,
              and inbound lead generation using AI-first SEO systems.
            </motion.p>

            {/* CTA Buttons */}
            <motion.div
              custom={3}
              variants={fadeUp}
              initial="hidden"
              animate="visible"
              className="flex flex-col sm:flex-row gap-4"
            >
              <a
                href="#book"
                id="hero-cta-book"
                className="group inline-flex items-center justify-center gap-2 px-6 py-3.5 sm:px-8 sm:py-4 bg-electric-blue hover:bg-electric-blue-dark text-white font-semibold rounded-full transition-all duration-300 hover:shadow-[0_0_30px_rgba(59,130,246,0.4)] text-sm sm:text-base"
              >
                Book Strategy Session
                <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
              </a>
              <a
                href="#audit"
                id="hero-cta-audit"
                className="group inline-flex items-center justify-center gap-2 px-6 py-3.5 sm:px-8 sm:py-4 border border-white/10 hover:border-electric-blue/50 text-white font-semibold rounded-full transition-all duration-300 hover:bg-white/[0.03] text-sm sm:text-base"
              >
                <Play className="w-4 h-4 text-electric-blue" />
                Get Free AI Audit
              </a>
            </motion.div>

            {/* Trust Indicators */}
            <motion.div
              custom={4}
              variants={fadeUp}
              initial="hidden"
              animate="visible"
              className="grid grid-cols-2 gap-3"
            >
              {trustItems.map((item, i) => (
                <div key={i} className="flex items-center gap-2">
                  <CheckCircle2 className="w-4 h-4 text-electric-blue flex-shrink-0" />
                  <span className="text-xs sm:text-sm text-soft-gray">{item}</span>
                </div>
              ))}
            </motion.div>

            {/* Mobile dashboard preview — 2 compact cards */}
            <motion.div
              custom={5}
              variants={fadeUp}
              initial="hidden"
              animate="visible"
              className="grid grid-cols-2 gap-3 lg:hidden"
            >
              <div className="glass rounded-xl p-4">
                <div className="flex items-center gap-1.5 mb-2">
                  <Bot className="w-3.5 h-3.5 text-electric-blue" />
                  <span className="text-[10px] text-soft-gray">Authority Score</span>
                </div>
                <div className="text-2xl font-[family-name:var(--font-space)] font-bold text-white">94<span className="text-xs text-soft-gray font-normal">/100</span></div>
                <div className="mt-2 w-full bg-white/5 rounded-full h-1.5 overflow-hidden">
                  <div className="h-full w-[94%] bg-gradient-to-r from-electric-blue to-electric-blue-light rounded-full" />
                </div>
              </div>
              <div className="glass rounded-xl p-4">
                <div className="flex items-center gap-1.5 mb-2">
                  <TrendingUp className="w-3.5 h-3.5 text-electric-blue" />
                  <span className="text-[10px] text-soft-gray">Ranking Growth</span>
                </div>
                <div className="text-2xl font-[family-name:var(--font-space)] font-bold text-success-green">+312%</div>
                <div className="mt-2 flex items-end gap-0.5 h-6">
                  {[40, 55, 45, 65, 72, 60, 80, 70, 78].map((h, i) => (
                    <div key={i} className="flex-1 rounded-sm bg-gradient-to-t from-electric-blue/30 to-electric-blue" style={{ height: `${h}%` }} />
                  ))}
                </div>
              </div>
            </motion.div>
          </div>

          {/* Right - Dashboard Visuals */}
          <div className="hidden lg:block relative">
            <div className="grid grid-cols-2 gap-4">
              <div className="space-y-4">
                <AIDashboard />
                <BahrainHeatMap />
              </div>
              <div className="space-y-4 pt-8">
                <SearchAnalytics />
                <RankingChart />
              </div>
            </div>

            {/* Floating stat */}
            <motion.div
              initial={{ opacity: 0, scale: 0.8 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ delay: 2.0, duration: 0.5 }}
              className="absolute -left-4 top-1/2 glass rounded-xl px-4 py-3 glow-blue animate-float"
              style={{ animationDelay: "3s" }}
            >
              <div className="flex items-center gap-2">
                <BarChart3 className="w-4 h-4 text-electric-blue" />
                <div>
                  <div className="text-sm font-bold text-white">4.2M+</div>
                  <div className="text-[10px] text-soft-gray">Impressions</div>
                </div>
              </div>
            </motion.div>
          </div>
        </div>
      </div>

      {/* Bottom gradient fade */}
      <div className="absolute bottom-0 left-0 right-0 h-32 bg-gradient-to-t from-black-matte to-transparent" />
    </section>
  );
}
