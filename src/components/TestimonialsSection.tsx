"use client";

import { motion, useInView } from "framer-motion";
import { useRef, useEffect, useState } from "react";
import { Star, Quote, MessageCircle } from "lucide-react";

const testimonials = [
  {
    name: "Mohammed Al-Doseri",
    role: "CEO, Bahrain Agent",
    text: "We went from invisible to international clients contacting us daily for company formation in Bahrain. In 90 days, BAE turned our site into a lead machine for overseas entrepreneurs. We now rank #1 for every incorporation keyword that matters.",
    rating: 5,
    type: "review" as const,
  },
  {
    name: "Ali Hassan",
    role: "Managing Director, NEC",
    text: "BAE understood the B2B engineering space immediately. Our RFQ submissions increased 4.5x and we're now visible for every major contracting and procurement query in the GCC. The ROI speaks for itself.",
    rating: 5,
    type: "review" as const,
  },
  {
    name: "Yasser Al-Mahmood",
    role: "General Manager, Yasmico",
    text: "Our product category pages now outrank the aggregators. Online orders are up 5x and we're finally getting direct traffic instead of paying commissions. BAE's approach to e-commerce SEO is genuinely different.",
    rating: 5,
    type: "whatsapp" as const,
  },
  {
    name: "Sara Al-Fardan",
    role: "Operations Head, Bahrain Agent",
    text: "International clients from the UK, India, and Saudi Arabia are finding us directly on Google now. BAE set up our schema, local maps, and content system — we just focus on closing deals.",
    rating: 5,
    type: "whatsapp" as const,
  },
  {
    name: "Khalid Mahmood",
    role: "Projects Lead, NEC",
    text: "They showed up in our AI search audit before we even hired them. That's when we knew these guys understood the future of search. Our tender pipeline has never been stronger.",
    rating: 5,
    type: "review" as const,
  },
  {
    name: "Noor Al-Rashid",
    role: "Marketing Director, Yasmico",
    text: "425% visibility increase in 90 days. Our competitors are calling to ask what we did. The structured data and maps optimization completely changed our retail game in Bahrain.",
    rating: 5,
    type: "review" as const,
  },
];

export default function TestimonialsSection() {
  const ref = useRef<HTMLDivElement>(null);
  const isInView = useInView(ref, { once: true, margin: "-100px" });
  const scrollRef = useRef<HTMLDivElement>(null);
  const [isPaused, setIsPaused] = useState(false);

  useEffect(() => {
    const el = scrollRef.current;
    if (!el || isPaused) return;

    const interval = setInterval(() => {
      if (el.scrollLeft >= el.scrollWidth - el.clientWidth) {
        el.scrollLeft = 0;
      } else {
        el.scrollLeft += 1;
      }
    }, 30);

    return () => clearInterval(interval);
  }, [isPaused]);

  return (
    <section className="relative py-20 sm:py-32 overflow-hidden" ref={ref}>
      <div className="absolute inset-0 radial-gradient-top" />

      <div className="relative z-10">
        {/* Header */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6 }}
          className="text-center max-w-3xl mx-auto mb-10 sm:mb-16 px-4"
        >
          <span className="inline-block text-xs font-semibold text-electric-blue uppercase tracking-widest mb-4 px-3 py-1 rounded-full border border-electric-blue/20 bg-electric-blue/5">
            Client Stories
          </span>
          <h2 className="text-2xl sm:text-4xl lg:text-5xl font-[family-name:var(--font-space)] font-bold mt-4 leading-tight">
            Trusted by{" "}
            <span className="gradient-text">Bahrain&apos;s Best</span>
          </h2>
        </motion.div>

        {/* Scrolling Testimonials */}
        <div
          ref={scrollRef}
          onMouseEnter={() => setIsPaused(true)}
          onMouseLeave={() => setIsPaused(false)}
          className="flex gap-6 overflow-x-auto scrollbar-hide px-4 pb-4"
          style={{ scrollBehavior: "smooth", msOverflowStyle: "none", scrollbarWidth: "none" }}
        >
          {/* Double for infinite feel */}
          {[...testimonials, ...testimonials].map((testimonial, i) => (
            <motion.div
              key={i}
              initial={{ opacity: 0, y: 20 }}
              animate={isInView ? { opacity: 1, y: 0 } : {}}
              transition={{ delay: 0.2 + (i % 6) * 0.1 }}
              className="glass rounded-xl sm:rounded-2xl p-5 sm:p-6 min-w-[280px] sm:min-w-[320px] max-w-[320px] sm:max-w-[360px] flex-shrink-0 hover:glow-blue transition-all duration-500 border border-white/[0.04] hover:border-electric-blue/20 group"
            >
              {/* Type indicator */}
              <div className="flex items-center justify-between mb-4">
                <div className="flex gap-1">
                  {Array.from({ length: testimonial.rating }).map((_, j) => (
                    <Star key={j} className="w-3.5 h-3.5 text-warning-amber fill-warning-amber" />
                  ))}
                </div>
                {testimonial.type === "whatsapp" ? (
                  <MessageCircle className="w-4 h-4 text-success-green" />
                ) : (
                  <Quote className="w-4 h-4 text-electric-blue/40" />
                )}
              </div>

              {/* Text */}
              <p className="text-sm text-soft-gray leading-relaxed mb-6">
                &ldquo;{testimonial.text}&rdquo;
              </p>

              {/* Author */}
              <div className="flex items-center gap-3 pt-4 border-t border-white/[0.06]">
                <div className="w-10 h-10 rounded-full bg-gradient-to-br from-electric-blue/20 to-electric-blue/5 flex items-center justify-center">
                  <span className="text-sm font-bold text-electric-blue">
                    {testimonial.name.charAt(0)}
                  </span>
                </div>
                <div>
                  <p className="text-sm font-semibold text-white">{testimonial.name}</p>
                  <p className="text-xs text-soft-gray">{testimonial.role}</p>
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
