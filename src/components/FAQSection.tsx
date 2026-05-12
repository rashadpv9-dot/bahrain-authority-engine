"use client";

import { motion, useInView, AnimatePresence } from "framer-motion";
import { useRef, useState } from "react";
import { ChevronDown, Plus, Minus } from "lucide-react";

const faqs = [
  {
    question: "How long does SEO take to show results?",
    answer:
      "Most clients see measurable improvements within 30-60 days, with significant results by 90 days. Our AI-first approach accelerates timelines compared to traditional SEO. Google Maps results often come faster — sometimes within 2-4 weeks.",
  },
  {
    question: "What makes AI SEO different from regular SEO?",
    answer:
      "AI SEO goes beyond traditional search rankings. We optimize for AI search engines like ChatGPT, Gemini, and Perplexity — where more and more people are discovering businesses. We also use AI to create content at scale, analyze competitors in real-time, and predict market opportunities before they emerge.",
  },
  {
    question: "Are there long-term contracts?",
    answer:
      "No. We believe in earning your business every month with results, not trapping you in contracts. Our agreements are month-to-month with a recommended 90-day initial commitment to allow the system to fully activate and deliver results.",
  },
  {
    question: "Do you work with all industries?",
    answer:
      "We specialize in high-value service businesses in Bahrain — clinics, law firms, restaurants, real estate, luxury services, and more. If your business relies on local customers finding you through search, we can help.",
  },
  {
    question: "How fast can we start?",
    answer:
      "After your strategy session, we can begin the audit within 48 hours. The full system setup typically takes 7-14 days, and active optimization begins immediately after. Most clients are fully onboarded within 2 weeks.",
  },
  {
    question: "What do I need to provide?",
    answer:
      "Access to your Google Business Profile, website, and any existing analytics. We handle everything else — strategy, content, technical optimization, and reporting. You focus on running your business while we build your visibility.",
  },
];

function FAQItem({ faq, isOpen, onClick }: { faq: typeof faqs[0]; isOpen: boolean; onClick: () => void }) {
  return (
    <div
      className={`glass rounded-xl overflow-hidden transition-all duration-500 border ${
        isOpen ? "border-electric-blue/20 glow-blue" : "border-white/[0.04] hover:border-white/[0.08]"
      }`}
    >
      <button
        onClick={onClick}
        className="w-full flex items-center justify-between p-4 sm:p-6 text-left group"
        aria-expanded={isOpen}
      >
        <span className={`text-sm sm:text-base font-semibold transition-colors duration-300 pr-4 ${
          isOpen ? "text-white" : "text-soft-gray group-hover:text-white"
        }`}>
          {faq.question}
        </span>
        <div className={`w-7 h-7 sm:w-8 sm:h-8 rounded-full flex items-center justify-center flex-shrink-0 transition-all duration-300 ${
          isOpen ? "bg-electric-blue/20 rotate-0" : "bg-white/[0.05] group-hover:bg-white/[0.08]"
        }`}>
          {isOpen ? (
            <Minus className="w-4 h-4 text-electric-blue" />
          ) : (
            <Plus className="w-4 h-4 text-soft-gray" />
          )}
        </div>
      </button>

      <AnimatePresence>
        {isOpen && (
          <motion.div
            initial={{ height: 0, opacity: 0 }}
            animate={{ height: "auto", opacity: 1 }}
            exit={{ height: 0, opacity: 0 }}
            transition={{ duration: 0.4, ease: [0.22, 1, 0.36, 1] }}
            className="overflow-hidden"
          >
            <div className="px-4 sm:px-6 pb-4 sm:pb-6">
              <p className="text-soft-gray text-sm leading-relaxed">{faq.answer}</p>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </div>
  );
}

export default function FAQSection() {
  const ref = useRef<HTMLDivElement>(null);
  const isInView = useInView(ref, { once: true, margin: "-100px" });
  const [openIndex, setOpenIndex] = useState<number | null>(0);

  return (
    <section id="faq" className="relative py-20 sm:py-32 overflow-hidden" ref={ref}>
      <div className="absolute inset-0 bg-gradient-to-b from-black-matte via-charcoal/30 to-black-matte" />

      <div className="relative z-10 max-w-3xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6 }}
          className="text-center max-w-2xl mx-auto mb-10 sm:mb-16"
        >
          <span className="inline-block text-xs font-semibold text-electric-blue uppercase tracking-widest mb-4 px-3 py-1 rounded-full border border-electric-blue/20 bg-electric-blue/5">
            FAQ
          </span>
          <h2 className="text-2xl sm:text-4xl lg:text-5xl font-[family-name:var(--font-space)] font-bold mt-4 leading-tight">
            Questions?{" "}
            <span className="gradient-text">Answers.</span>
          </h2>
        </motion.div>

        {/* FAQ Items */}
        <div className="space-y-3 sm:space-y-4">
          {faqs.map((faq, i) => (
            <motion.div
              key={i}
              initial={{ opacity: 0, y: 20 }}
              animate={isInView ? { opacity: 1, y: 0 } : {}}
              transition={{ delay: 0.2 + i * 0.1 }}
            >
              <FAQItem
                faq={faq}
                isOpen={openIndex === i}
                onClick={() => setOpenIndex(openIndex === i ? null : i)}
              />
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
