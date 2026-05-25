"use client";

import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { 
  User, 
  Mail, 
  Phone, 
  Globe, 
  Building2, 
  MessageSquare, 
  Sparkles, 
  Calendar, 
  ArrowRight, 
  CheckCircle2, 
  Loader2 
} from "lucide-react";

export default function ContactSection() {
  const [activeTab, setActiveTab] = useState<"book" | "audit">("book");
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    whatsapp: "",
    website: "",
    industry: "",
    message: "",
  });
  
  const [status, setStatus] = useState<"idle" | "loading" | "success" | "error">("idle");
  const [errors, setErrors] = useState<Record<string, string>>({});

  const validate = () => {
    const newErrors: Record<string, string> = {};
    if (!formData.name.trim()) newErrors.name = "Name is required";
    
    if (!formData.email.trim()) {
      newErrors.email = "Email is required";
    } else if (!/\S+@\S+\.\S+/.test(formData.email)) {
      newErrors.email = "Please enter a valid email address";
    }
    
    if (!formData.whatsapp.trim()) {
      newErrors.whatsapp = "WhatsApp number is required";
    }
    
    if (activeTab === "audit" && !formData.website.trim()) {
      newErrors.website = "Website URL is required for audit";
    } else if (formData.website.trim() && !/^(https?:\/\/)?([\da-z.-]+)\.([a-z.]{2,6})([/\w .-]*)*\/?$/.test(formData.website)) {
      newErrors.website = "Please enter a valid URL (e.g. company.com)";
    }

    if (!formData.industry) {
      newErrors.industry = "Please select your industry";
    }

    setErrors(newErrors);
    return Object.keys(newErrors).length === 0;
  };

  const handleInputChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>
  ) => {
    const { name, value } = e.target;
    setFormData((prev) => ({ ...prev, [name]: value }));
    // Clear error on change
    if (errors[name]) {
      setErrors((prev) => {
        const copy = { ...prev };
        delete copy[name];
        return copy;
      });
    }
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    if (!validate()) return;

    setStatus("loading");

    // Simulate API request
    try {
      await new Promise((resolve) => setTimeout(resolve, 2000));
      setStatus("success");
    } catch {
      setStatus("error");
    }
  };

  return (
    <section id="contact" className="relative py-20 sm:py-32 overflow-hidden">
      {/* Background Gradients */}
      <div className="absolute inset-0 bg-gradient-to-b from-black-matte via-charcoal to-black-matte" />
      <div className="absolute inset-0 grid-bg-blue opacity-20" />
      <div className="absolute inset-0 radial-gradient-blue" />
      
      {/* Glow Orbs */}
      <div className="absolute top-1/4 right-1/4 w-[300px] sm:w-[500px] h-[300px] sm:h-[500px] rounded-full bg-electric-blue/5 blur-[100px] sm:blur-[130px] animate-pulse-glow" />
      <div className="absolute bottom-1/4 left-1/4 w-[250px] h-[250px] rounded-full bg-electric-blue/3 blur-[80px] animate-pulse-glow" style={{ animationDelay: "2s" }} />

      <div className="relative z-10 max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Title Block */}
        <div className="text-center max-w-3xl mx-auto mb-12 sm:mb-16">
          <span className="inline-block text-xs font-semibold text-electric-blue uppercase tracking-widest mb-4 px-3 py-1 rounded-full border border-electric-blue/20 bg-electric-blue/5">
            Take Action
          </span>
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-[family-name:var(--font-space)] font-bold mt-2 leading-tight">
            Ready to Rule <span className="gradient-text">Bahrain Search?</span>
          </h2>
          <p className="mt-4 text-soft-gray text-base sm:text-lg">
            Choose whether to book a detailed growth strategy call with our team or request a comprehensive AI search audit of your current site.
          </p>
        </div>

        {/* Form Container */}
        <div className="glass rounded-2xl sm:rounded-3xl border border-white/[0.06] overflow-hidden shadow-2xl relative">
          
          {/* Tab Headers */}
          <div className="flex border-b border-white/[0.06] bg-white/[0.01]">
            <button
              onClick={() => {
                setActiveTab("book");
                setStatus("idle");
              }}
              className={`flex-1 py-5 px-4 text-center font-[family-name:var(--font-space)] font-bold text-sm sm:text-base transition-all duration-300 flex items-center justify-center gap-2 border-r border-white/[0.04] ${
                activeTab === "book"
                  ? "text-electric-blue bg-electric-blue/[0.03] border-b-2 border-b-electric-blue"
                  : "text-soft-gray hover:text-white hover:bg-white/[0.02]"
              }`}
            >
              <Calendar className="w-4 h-4" />
              Book Strategy Session
            </button>
            <button
              onClick={() => {
                setActiveTab("audit");
                setStatus("idle");
              }}
              className={`flex-1 py-5 px-4 text-center font-[family-name:var(--font-space)] font-bold text-sm sm:text-base transition-all duration-300 flex items-center justify-center gap-2 ${
                activeTab === "audit"
                  ? "text-electric-blue bg-electric-blue/[0.03] border-b-2 border-b-electric-blue"
                  : "text-soft-gray hover:text-white hover:bg-white/[0.02]"
              }`}
            >
              <Sparkles className="w-4 h-4" />
              Get Free AI SEO Audit
            </button>
          </div>

          <div className="p-6 sm:p-10">
            <AnimatePresence mode="wait">
              {status === "success" ? (
                <motion.div
                  key="success"
                  initial={{ opacity: 0, scale: 0.95 }}
                  animate={{ opacity: 1, scale: 1 }}
                  exit={{ opacity: 0, scale: 0.95 }}
                  transition={{ duration: 0.4 }}
                  className="text-center py-12"
                >
                  <div className="w-16 h-16 rounded-full bg-success-green/10 flex items-center justify-center mx-auto mb-6">
                    <CheckCircle2 className="w-10 h-10 text-success-green" />
                  </div>
                  <h3 className="text-2xl font-[family-name:var(--font-space)] font-bold text-white mb-3">
                    Intake Submitted Successfully!
                  </h3>
                  <p className="text-soft-gray text-base max-w-lg mx-auto mb-8">
                    Your details have been locked into the engine. Let&apos;s fast-track this: click below to choose a time slot on our calendar directly.
                  </p>
                  
                  <a
                    href="https://calendly.com" 
                    target="_blank"
                    rel="noopener noreferrer"
                    className="inline-flex items-center gap-2 px-8 py-4 bg-electric-blue hover:bg-electric-blue-dark text-white font-bold rounded-full transition-all duration-300 hover:shadow-[0_0_25px_rgba(59,130,246,0.4)]"
                  >
                    <Calendar className="w-5 h-5" />
                    Schedule via Google Calendar / Calendly
                    <ArrowRight className="w-5 h-5" />
                  </a>
                </motion.div>
              ) : (
                <motion.form
                  key="form"
                  onSubmit={handleSubmit}
                  initial={{ opacity: 0 }}
                  animate={{ opacity: 1 }}
                  exit={{ opacity: 0 }}
                  className="space-y-6"
                >
                  <div className="grid sm:grid-cols-2 gap-6">
                    {/* Name */}
                    <div className="space-y-2">
                      <label className="text-xs font-semibold text-soft-gray uppercase tracking-wider block">
                        Full Name
                      </label>
                      <div className="relative">
                        <User className="absolute left-4 top-1/2 -translate-y-1/2 w-4 h-4 text-white/20" />
                        <input
                          type="text"
                          name="name"
                          value={formData.name}
                          onChange={handleInputChange}
                          disabled={status === "loading"}
                          placeholder="e.g. Ahmed Al-Mansoori"
                          className={`w-full bg-white/[0.03] border rounded-xl py-3.5 pl-11 pr-4 text-white text-sm outline-none transition-all duration-300 focus:bg-white/[0.06] ${
                            errors.name ? "border-danger-red/50 focus:border-danger-red" : "border-white/10 focus:border-electric-blue/50"
                          }`}
                        />
                      </div>
                      {errors.name && (
                        <p className="text-xs text-danger-red/80">{errors.name}</p>
                      )}
                    </div>

                    {/* Email */}
                    <div className="space-y-2">
                      <label className="text-xs font-semibold text-soft-gray uppercase tracking-wider block">
                        Business Email
                      </label>
                      <div className="relative">
                        <Mail className="absolute left-4 top-1/2 -translate-y-1/2 w-4 h-4 text-white/20" />
                        <input
                          type="email"
                          name="email"
                          value={formData.email}
                          onChange={handleInputChange}
                          disabled={status === "loading"}
                          placeholder="e.g. ahmed@company.bh"
                          className={`w-full bg-white/[0.03] border rounded-xl py-3.5 pl-11 pr-4 text-white text-sm outline-none transition-all duration-300 focus:bg-white/[0.06] ${
                            errors.email ? "border-danger-red/50 focus:border-danger-red" : "border-white/10 focus:border-electric-blue/50"
                          }`}
                        />
                      </div>
                      {errors.email && (
                        <p className="text-xs text-danger-red/80">{errors.email}</p>
                      )}
                    </div>
                  </div>

                  <div className="grid sm:grid-cols-2 gap-6">
                    {/* WhatsApp */}
                    <div className="space-y-2">
                      <label className="text-xs font-semibold text-soft-gray uppercase tracking-wider block">
                        WhatsApp Number
                      </label>
                      <div className="relative">
                        <Phone className="absolute left-4 top-1/2 -translate-y-1/2 w-4 h-4 text-white/20" />
                        <input
                          type="tel"
                          name="whatsapp"
                          value={formData.whatsapp}
                          onChange={handleInputChange}
                          disabled={status === "loading"}
                          placeholder="e.g. +973 3900 0000"
                          className={`w-full bg-white/[0.03] border rounded-xl py-3.5 pl-11 pr-4 text-white text-sm outline-none transition-all duration-300 focus:bg-white/[0.06] ${
                            errors.whatsapp ? "border-danger-red/50 focus:border-danger-red" : "border-white/10 focus:border-electric-blue/50"
                          }`}
                        />
                      </div>
                      {errors.whatsapp && (
                        <p className="text-xs text-danger-red/80">{errors.whatsapp}</p>
                      )}
                    </div>

                    {/* Website */}
                    <div className="space-y-2">
                      <label className="text-xs font-semibold text-soft-gray uppercase tracking-wider block">
                        Website URL {activeTab === "book" && <span className="text-white/20">(Optional)</span>}
                      </label>
                      <div className="relative">
                        <Globe className="absolute left-4 top-1/2 -translate-y-1/2 w-4 h-4 text-white/20" />
                        <input
                          type="url"
                          name="website"
                          value={formData.website}
                          onChange={handleInputChange}
                          disabled={status === "loading"}
                          placeholder="e.g. www.company.bh"
                          className={`w-full bg-white/[0.03] border rounded-xl py-3.5 pl-11 pr-4 text-white text-sm outline-none transition-all duration-300 focus:bg-white/[0.06] ${
                            errors.website ? "border-danger-red/50 focus:border-danger-red" : "border-white/10 focus:border-electric-blue/50"
                          }`}
                        />
                      </div>
                      {errors.website && (
                        <p className="text-xs text-danger-red/80">{errors.website}</p>
                      )}
                    </div>
                  </div>

                  {/* Industry Select */}
                  <div className="space-y-2">
                    <label className="text-xs font-semibold text-soft-gray uppercase tracking-wider block">
                      Target Industry
                    </label>
                    <div className="relative">
                      <Building2 className="absolute left-4 top-1/2 -translate-y-1/2 w-4 h-4 text-white/20" />
                      <select
                        name="industry"
                        value={formData.industry}
                        onChange={handleInputChange}
                        disabled={status === "loading"}
                        className={`w-full bg-charcoal border rounded-xl py-3.5 pl-11 pr-10 text-white text-sm outline-none transition-all duration-300 focus:bg-white/[0.06] appearance-none cursor-pointer ${
                          errors.industry ? "border-danger-red/50 focus:border-danger-red" : "border-white/10 focus:border-electric-blue/50"
                        }`}
                      >
                        <option value="" disabled>Select your industry</option>
                        <option value="healthcare">Healthcare & Clinics</option>
                        <option value="legal">Legal & Law Firms</option>
                        <option value="food-beverage">Food & Beverage (F&B)</option>
                        <option value="ecommerce">E-commerce</option>
                        <option value="real-estate">Real Estate & Developers</option>
                        <option value="other">Other Business Services</option>
                      </select>
                      <div className="absolute right-4 top-1/2 -translate-y-1/2 pointer-events-none text-white/40">
                        ▼
                      </div>
                    </div>
                    {errors.industry && (
                      <p className="text-xs text-danger-red/80">{errors.industry}</p>
                    )}
                  </div>

                  {/* Message/Goals */}
                  <div className="space-y-2">
                    <label className="text-xs font-semibold text-soft-gray uppercase tracking-wider block">
                      {activeTab === "book" ? "How can we help you? / Growth Goals" : "Notes / Specific Competitors"}
                    </label>
                    <div className="relative">
                      <MessageSquare className="absolute left-4 top-4 w-4 h-4 text-white/20" />
                      <textarea
                        name="message"
                        value={formData.message}
                        onChange={handleInputChange}
                        disabled={status === "loading"}
                        rows={4}
                        placeholder={
                          activeTab === "book"
                            ? "Tell us about your business, current traffic, and target goals."
                            : "Share any competitors you want us to benchmark in your audit."
                        }
                        className="w-full bg-white/[0.03] border border-white/10 rounded-xl py-3.5 pl-11 pr-4 text-white text-sm outline-none transition-all duration-300 focus:bg-white/[0.06] focus:border-electric-blue/50 resize-y"
                      />
                    </div>
                  </div>

                  {/* Submit Button */}
                  <div className="pt-2">
                    <button
                      type="submit"
                      disabled={status === "loading"}
                      className="w-full group inline-flex items-center justify-center gap-2 px-8 py-4 sm:py-4.5 bg-electric-blue hover:bg-electric-blue-dark text-white font-bold rounded-xl transition-all duration-300 hover:shadow-[0_0_30px_rgba(59,130,246,0.3)] disabled:opacity-50 disabled:cursor-not-allowed cursor-pointer text-base"
                    >
                      {status === "loading" ? (
                        <>
                          <Loader2 className="w-5 h-5 animate-spin" />
                          Processing Submission...
                        </>
                      ) : activeTab === "book" ? (
                        <>
                          Book Strategy Call
                          <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
                        </>
                      ) : (
                        <>
                          Request Free Audit Report
                          <Sparkles className="w-4 h-4 group-hover:scale-110 transition-transform" />
                        </>
                      )}
                    </button>
                  </div>
                </motion.form>
              )}
            </AnimatePresence>
          </div>
        </div>
      </div>
    </section>
  );
}
