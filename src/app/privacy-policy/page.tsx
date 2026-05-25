import React from "react";
import Link from "next/link";
import { Shield, Eye, Lock, FileText } from "lucide-react";

export const metadata = {
  title: "Privacy Policy | Bahrain Authority Engine (BAE)",
  description: "Learn about how BAE protects and handles your data, in compliance with Bahrain Personal Data Protection Law (PDPL) and global standards.",
  alternates: {
    canonical: "https://bahrainauthorityengine.com/privacy-policy"
  }
};

export default function PrivacyPolicyPage() {
  return (
    <div className="min-h-screen bg-slate-950 text-slate-100 py-20 px-4 md:px-8">
      <div className="max-w-4xl mx-auto">
        {/* Header */}
        <div className="text-center mb-16">
          <div className="inline-flex h-12 w-12 items-center justify-center rounded-xl bg-blue-500/10 text-blue-400 mb-4">
            <Shield className="h-6 w-6" />
          </div>
          <h1 className="text-3xl md:text-4xl font-extrabold tracking-tight bg-clip-text text-transparent bg-gradient-to-r from-white to-slate-400">
            Privacy Policy
          </h1>
          <p className="mt-4 text-slate-400">
            Effective Date: May 25, 2026 | Compliant with Bahrain Law No. 30 of 2018 (PDPL)
          </p>
        </div>

        {/* Content Silos */}
        <div className="space-y-12 bg-slate-900/30 border border-white/5 rounded-2xl p-8 backdrop-blur-xl">
          <section className="space-y-4">
            <h2 className="text-xl font-bold text-slate-100 flex items-center gap-2">
              <Eye className="h-5 w-5 text-blue-400" />
              1. Information We Collect
            </h2>
            <p className="text-slate-300 leading-relaxed">
              We collect information to provide a better search engine optimization and authority building service to our clients. This includes:
            </p>
            <ul className="list-disc pl-6 space-y-2 text-slate-400">
              <li><strong>Personal Data:</strong> Contact details, email address, phone number, and company information when you request a consultation.</li>
              <li><strong>Technical Data:</strong> IP address, browser type, location coordinates, page response times, and interactions with BAE pages.</li>
            </ul>
          </section>

          <section className="space-y-4">
            <h2 className="text-xl font-bold text-slate-100 flex items-center gap-2">
              <Lock className="h-5 w-5 text-blue-400" />
              2. How We Use Your Data
            </h2>
            <p className="text-slate-300 leading-relaxed">
              We use your data only for authorized purposes, including:
            </p>
            <ul className="list-disc pl-6 space-y-2 text-slate-400">
              <li>Managing and improving your search campaigns and technical performance.</li>
              <li>Compiling statistical aggregates and audits for GCC market research.</li>
              <li>Securing our server resources against illegal scraping or malicious bots.</li>
            </ul>
          </section>

          <section className="space-y-4">
            <h2 className="text-xl font-bold text-slate-100 flex items-center gap-2">
              <FileText className="h-5 w-5 text-blue-400" />
              3. AI Crawler Directives & Web Scraping
            </h2>
            <p className="text-slate-300 leading-relaxed">
              In accordance with our commitment to modern AI and Answer Engine Optimization (AEO), we openly share structured information with verified AI search agents (e.g., ChatGPT, Gemini, Perplexity). We explicitly prohibit illegal extraction of our proprietary analytics, codebases, or copyrighted assets by non-verified third-party scraping tools.
            </p>
          </section>

          <section className="space-y-4">
            <h2 className="text-xl font-bold text-slate-100">
              4. Contact Us
            </h2>
            <p className="text-slate-300 leading-relaxed">
              If you have any questions about this Privacy Policy or wish to exercise your rights under the Bahrain PDPL, you can reach our compliance team at:
            </p>
            <p className="text-slate-400">
              📧 Email: privacy@bahrainauthorityengine.com <br />
              📞 Phone: +973 1700 0000
            </p>
          </section>
        </div>

        {/* Footer Link */}
        <div className="text-center mt-12">
          <Link href="/" className="text-sm font-medium text-blue-400 hover:text-blue-300 transition-colors">
            &larr; Back to Home
          </Link>
        </div>
      </div>
    </div>
  );
}
