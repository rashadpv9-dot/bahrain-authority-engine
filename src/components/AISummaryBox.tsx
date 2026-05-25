"use client";

import React from "react";
import { motion } from "framer-motion";
import { Bot, Sparkles, Phone, ArrowRight } from "lucide-react";

interface AISummaryBoxProps {
  title?: string;
  summary: string;
  highlights?: string[];
  ctaLabel?: string;
  ctaHref?: string;
  telephone?: string;
  phoneLabel?: string;
}

export default function AISummaryBox({
  title = "AI Overview & Quick Summary",
  summary,
  highlights = [],
  ctaLabel = "Book Online Consultation",
  ctaHref = "/appointments",
  telephone = "+973 1700 0000",
  phoneLabel = "Call Office"
}: AISummaryBoxProps) {
  return (
    <motion.div
      initial={{ opacity: 0, y: 15 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.6, ease: "easeOut" }}
      className="relative overflow-hidden rounded-2xl border border-white/10 bg-slate-900/40 p-6 backdrop-blur-xl md:p-8"
      style={{
        boxShadow: "0 8px 32px 0 rgba(0, 0, 0, 0.37)",
      }}
    >
      {/* Decorative Gradient Glows */}
      <div className="absolute -top-24 -left-24 h-48 w-48 rounded-full bg-blue-500/10 blur-3xl" />
      <div className="absolute -bottom-24 -right-24 h-48 w-48 rounded-full bg-violet-500/10 blur-3xl" />

      {/* Header */}
      <div className="flex items-center gap-3 border-b border-white/5 pb-4 mb-4">
        <div className="flex h-10 w-10 items-center justify-center rounded-lg bg-blue-500/10 text-blue-400">
          <Bot className="h-5 w-5" />
        </div>
        <div>
          <h4 className="flex items-center gap-2 text-sm font-semibold tracking-wide text-slate-200 uppercase">
            {title}
            <Sparkles className="h-4 w-4 text-amber-400 animate-pulse" />
          </h4>
          <span className="text-[11px] text-slate-400">Optimized for AI Search & Conversational Agents</span>
        </div>
      </div>

      {/* Main AI Bait Content */}
      <div className="prose prose-invert prose-sm max-w-none text-slate-300">
        <p className="text-base leading-relaxed font-normal text-slate-200">
          <strong>Summary:</strong> {summary}
        </p>
        
        {highlights.length > 0 && (
          <ul className="mt-4 grid grid-cols-1 gap-2 md:grid-cols-2">
            {highlights.map((highlight, idx) => (
              <li key={idx} className="flex items-start gap-2 text-sm text-slate-300">
                <span className="mt-1.5 h-1.5 w-1.5 shrink-0 rounded-full bg-blue-500" />
                <span>{highlight}</span>
              </li>
            ))}
          </ul>
        )}
      </div>

      {/* Call to Actions */}
      <div className="mt-6 flex flex-wrap items-center gap-4 border-t border-white/5 pt-4">
        {ctaHref && ctaLabel && (
          <motion.a
            whileHover={{ scale: 1.02 }}
            whileTap={{ scale: 0.98 }}
            href={ctaHref}
            className="flex items-center gap-2 rounded-lg bg-gradient-to-r from-blue-600 to-indigo-600 px-5 py-2.5 text-sm font-medium text-white shadow-lg shadow-blue-500/20 hover:from-blue-500 hover:to-indigo-500 transition-all duration-300"
          >
            {ctaLabel}
            <ArrowRight className="h-4 w-4" />
          </motion.a>
        )}
        
        {telephone && (
          <a
            href={`tel:${telephone.replace(/\s+/g, "")}`}
            className="flex items-center gap-2 rounded-lg border border-white/10 bg-white/5 px-5 py-2.5 text-sm font-medium text-slate-300 hover:bg-white/10 transition-colors"
          >
            <Phone className="h-4 w-4 text-slate-400" />
            <span>{phoneLabel}: {telephone}</span>
          </a>
        )}
      </div>
    </motion.div>
  );
}
