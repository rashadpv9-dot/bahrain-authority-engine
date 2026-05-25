"use client";

import { motion, useInView } from "framer-motion";
import { useRef } from "react";
import { Linkedin, Mail, ShieldAlert, Cpu, Map, Zap } from "lucide-react";

const team = [
  {
    name: "Ali Al-Fardan",
    role: "Founder & Chief AI Strategist",
    focus: "AEO/GEO Engine Optimization & Core Systems",
    icon: Cpu,
    bio: "Ex-enterprise system architect who transitioned to algorithmic search optimization. Ali leads R&D on generative AI crawlers, developing systems that guarantee client placement in ChatGPT and Gemini databases.",
    linkedin: "https://linkedin.com",
    email: "ali@bahrainauthority.com",
    avatarBg: "from-blue-600/20 to-indigo-600/20",
  },
  {
    name: "Sarah Yusuf",
    role: "Head of Local Growth",
    focus: "Google Maps Domination & Schema Mapping",
    icon: Map,
    bio: "Specializing in the GCC geocoding matrix. Sarah reverse-engineers local map filters, managing custom schema nesting, citation velocity, and localized authority signals that capture Seef and Manama business centers.",
    linkedin: "https://linkedin.com",
    email: "sarah@bahrainauthority.com",
    avatarBg: "from-emerald-600/20 to-teal-600/20",
  },
  {
    name: "Marcus Chen",
    role: "Lead Systems Engineer",
    focus: "Headless Next.js & Edge Node Orchestration",
    icon: Zap,
    bio: "A strict performance engineer. Marcus ensures BAE clients operate on sub-500ms server response times. He is responsible for headless CMS configurations, edge API caching, and optimizing Web Vitals.",
    linkedin: "https://linkedin.com",
    email: "marcus@bahrainauthority.com",
    avatarBg: "from-amber-600/20 to-orange-600/20",
  },
];

export default function TeamSection() {
  const ref = useRef<HTMLDivElement>(null);
  const isInView = useInView(ref, { once: true, margin: "-100px" });

  return (
    <section id="team" className="relative py-20 sm:py-32 overflow-hidden" ref={ref}>
      {/* Background elements */}
      <div className="absolute inset-0 bg-gradient-to-b from-charcoal via-black-matte to-charcoal" />
      <div className="absolute inset-0 grid-bg opacity-20" />
      <div className="absolute inset-0 radial-gradient-blue" />
      
      {/* Light glow behind grid */}
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[500px] h-[500px] rounded-full bg-electric-blue/3 blur-[120px] pointer-events-none" />

      <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Header */}
        <div className="text-center max-w-3xl mx-auto mb-16 sm:mb-20">
          <span className="inline-block text-xs font-semibold text-electric-blue uppercase tracking-widest mb-4 px-3 py-1 rounded-full border border-electric-blue/20 bg-electric-blue/5">
            The Experts
          </span>
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-[family-name:var(--font-space)] font-bold mt-2 leading-tight">
            The Minds Behind Bahrain&apos;s <br className="hidden sm:inline" />
            <span className="gradient-text">Authority Engine</span>
          </h2>
          <p className="mt-4 text-soft-gray text-base sm:text-lg">
            We are systems architects, maps algorithm experts, and headless performance engineers. We don&apos;t write generic blogs — we build search authority.
          </p>
        </div>

        {/* Team Grid */}
        <div className="grid md:grid-cols-3 gap-6 sm:gap-8">
          {team.map((member, i) => (
            <motion.div
              key={i}
              initial={{ opacity: 0, y: 30 }}
              animate={isInView ? { opacity: 1, y: 0 } : {}}
              transition={{
                delay: i * 0.15,
                duration: 0.7,
                ease: [0.22, 1, 0.36, 1],
              }}
              className="group glass rounded-2xl p-6 sm:p-8 hover:glow-blue border border-white/[0.04] hover:border-electric-blue/20 transition-all duration-500 flex flex-col justify-between"
            >
              <div>
                {/* Visual Avatar Placeholder */}
                <div className={`w-16 h-16 rounded-2xl bg-gradient-to-br ${member.avatarBg} border border-white/10 flex items-center justify-center mb-6 group-hover:scale-105 transition-transform duration-300`}>
                  <member.icon className="w-8 h-8 text-electric-blue" />
                </div>

                <div className="space-y-1 mb-4">
                  <h3 className="text-xl font-[family-name:var(--font-space)] font-bold text-white group-hover:text-electric-blue transition-colors">
                    {member.name}
                  </h3>
                  <div className="text-xs font-semibold uppercase tracking-wider text-electric-blue-light">
                    {member.role}
                  </div>
                  <div className="text-[10px] text-soft-gray/80 italic">
                    Focus: {member.focus}
                  </div>
                </div>

                <p className="text-soft-gray text-sm leading-relaxed mb-6">
                  {member.bio}
                </p>
              </div>

              {/* Social links */}
              <div className="pt-4 border-t border-white/[0.04] flex items-center gap-3 mt-auto">
                <a
                  href={member.linkedin}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="w-8 h-8 rounded-lg bg-white/[0.03] hover:bg-electric-blue/20 flex items-center justify-center text-soft-gray hover:text-white transition-all"
                  aria-label={`${member.name} LinkedIn`}
                >
                  <Linkedin className="w-4 h-4" />
                </a>
                <a
                  href={`mailto:${member.email}`}
                  className="w-8 h-8 rounded-lg bg-white/[0.03] hover:bg-electric-blue/20 flex items-center justify-center text-soft-gray hover:text-white transition-all"
                  aria-label={`${member.name} Email`}
                >
                  <Mail className="w-4 h-4" />
                </a>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
