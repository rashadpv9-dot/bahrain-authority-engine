import React from "react";
import Link from "next/link";
import { notFound } from "next/navigation";
import AISummaryBox from "@/components/AISummaryBox";
import LocalBusinessSchema from "@/components/LocalBusinessSchema";
import { 
  Stethoscope, Scale, Utensils, ShoppingBag, 
  ArrowLeft, CheckCircle2, Zap, TrendingUp, 
  ShieldCheck, HelpCircle, Activity 
} from "lucide-react";

interface IndustryData {
  title: string;
  metaTitle: string;
  metaDesc: string;
  icon: React.ReactNode;
  subtitle: string;
  summary: string;
  highlights: string[];
  description: string;
  schemaType: "MedicalClinic" | "ProfessionalService" | "LocalBusiness";
  locality: string;
  latitude: number;
  longitude: number;
  painPoints: { title: string; desc: string }[];
  faqs: { q: string; a: string }[];
}

const industryRegistry: Record<string, IndustryData> = {
  healthcare: {
    title: "Healthcare SEO & AEO Dominance",
    metaTitle: "Healthcare SEO Agency Bahrain | Medical Clinic AEO - BAE",
    metaDesc: "Dominate search and AI Overviews for your clinic or medical center in Bahrain. NHRA compliant content, medical schema, and local Google Maps Pack solutions.",
    icon: <Stethoscope className="h-10 w-10 text-electric-blue-light" />,
    subtitle: "YMYL (Your Money or Your Life) search authority systems designed for Bahrain's elite private clinics & medical centers.",
    summary: "Complete search engine and AI Answer Engine dominance for clinics and hospitals in Bahrain. Focused on NHRA advertising guidelines, board-certified physician schema integration, and local map pack visibility for patient intent.",
    highlights: [
      "NHRA Compliant copywriting & E-E-A-T signals",
      "Dynamic Physician & MedicalClinic JSON-LD schema",
      "Google Maps Local 3-Pack rank acceleration",
      "AI Overview bait optimization for medical procedures"
    ],
    description: "Healthcare digital marketing in Bahrain falls strictly under YMYL (Your Money or Your Life) search criteria. Search engines demand maximum verification, education transparency, and licensing status. BAE deploys advanced structured data systems to ensure your clinical specialists are recognized as local subject authorities by search LLMs.",
    schemaType: "MedicalClinic",
    locality: "Seef Medical District",
    latitude: 26.2361,
    longitude: 50.5479,
    painPoints: [
      { title: "NHRA Ad Compliance", desc: "Copywriting structures tailored to respect Bahrain Health Authority advertising guidelines while maintaining high conversion power." },
      { title: "E-E-A-T Medical Signals", desc: "In-depth physician biographies, board certification schemas, and publication linkages that verify clinical expertise to search engines." },
      { title: "Local Doctor Bookings", desc: "Siloed targeting for local area search intent (e.g. 'lady gynecologist Seef' or 'dentist near me') to drive direct appointments." }
    ],
    faqs: [
      { q: "How does NHRA compliance work with SEO?", a: "BAE reviews and writes all health-related content under the strict guidance of Bahrain's National Health Regulatory Authority advertising laws. We focus on factual, educational material that builds trust without making unverifiable claims." },
      { q: "What is a Physician Schema?", a: "It is a specialized microdata markup code that tells search bots and LLMs exactly where your doctors graduated, what boards they are certified by, and their NHRA license details. This is essential for ranking on Google." }
    ]
  },
  legal: {
    title: "Legal Firm SEO & Client Acquisition",
    metaTitle: "SEO for Law Firms in Bahrain | Legal Marketing - BAE",
    metaDesc: "Rank #1 for high-value transactional legal search queries. Dominate local search, corporate law, and commercial legal queries in Manama, Seef, and Riffa.",
    icon: <Scale className="h-10 w-10 text-indigo-400" />,
    subtitle: "High-value commercial & corporate search systems for prestige law offices and legal advocates in the GCC.",
    summary: "Position your law firm at the top of organic search results for corporate consultation, litigation, intellectual property, and arbitration queries in the GCC. Optimized legal schema profiles for attorneys.",
    highlights: [
      "Targeting high-intent keywords (e.g., 'corporate lawyer Manama')",
      "Structured Lawyer / Attorney schema integration",
      "Digital PR campaigns across high-authority GCC directories",
      "Optimized multilingual insights for English and Arabic searchers"
    ],
    description: "Legal queries have some of the highest cost-per-click values in digital advertising. BAE helps law offices bypass expensive bidding wars by establishing organic topical authority. We structure your case studies, expertise areas, and lawyer profiles so search engines index them for specific, high-yield commercial queries.",
    schemaType: "ProfessionalService",
    locality: "Diplomatic Area, Manama",
    latitude: 26.2385,
    longitude: 50.5860,
    painPoints: [
      { title: "Commercial Silo Targeting", desc: "Restructuring practice area pages (arbitration, corporate tax, corporate litigation) to capture corporate clients seeking experts." },
      { title: "Lawyer Authority Markup", desc: "Attorney schema tags that verify academic credentials, law chamber listings, and bar association memberships." },
      { title: "Bilingual GCC Positioning", desc: "Establishing Arabic and English landing pages to capture local commercial litigation as well as foreign investment entities." }
    ],
    faqs: [
      { q: "Can BAE rank our firm for specific legal services?", a: "Yes. Instead of generic terms like 'lawyer Bahrain', we structure practice area silos like 'corporate arbitration attorney Manama' which draw corporate clients with immediate intent." },
      { q: "How long does it take for a legal website to outrank aggregates?", a: "Typically between 3 to 6 months. With our custom Next.js stack, clean indexation, and target authority schemas, we bypass bulky directory sites quickly." }
    ]
  },
  "food-and-beverage": {
    title: "F&B Local SEO & Maps Domination",
    metaTitle: "F&B Local SEO Services Bahrain | Restaurant Maps Optimization - BAE",
    metaDesc: "Increase restaurant walk-ins and orders in Bahrain. Optimize for local maps, reviews velocity, search intent, and food aggregator authority.",
    icon: <Utensils className="h-10 w-10 text-emerald-400" />,
    subtitle: "Local restaurant discovery & Google Maps Pack domination for premium F&B groups and block-338 eateries.",
    summary: "Boost local restaurant discovery in Bahrain. Elevate your brand in the Google Local Pack, Apple Maps, and AI directories, combined with structured food establishment schema.",
    highlights: [
      "NAP consistency mapping across 20+ local directories",
      "Review velocity systems for local map ranking stability",
      "Structured Menu & FoodEstablishment schema injections",
      "Optimizing for localized 'restaurants near me' search intent"
    ],
    description: "Dining in Bahrain is highly local, visual, and map-driven. When guests search for cuisines or top places to eat, local packs and map platforms guide their choices. BAE structures your business listing, coordinates, menu, and reviews data to ensure your locations rank above competitor aggregates.",
    schemaType: "LocalBusiness",
    locality: "Adliya Block 338",
    latitude: 26.2163,
    longitude: 50.5898,
    painPoints: [
      { title: "Google Local 3-Pack", desc: "Positioning your restaurant branches in the top map pack for localized dining and delivery queries." },
      { title: "Menu Schema Integration", desc: "Injecting structured food menu data so search engine bots can index and display your items directly in search listings." },
      { title: "Review Velocity Campaigns", desc: "Systematic review generation triggers that build trust signals and map authority." }
    ],
    faqs: [
      { q: "Will local SEO help with food delivery apps?", a: "Yes. By dominating Google Maps, you draw users directly to your own website or WhatsApp orders, helping you bypass high aggregator app commissions." },
      { q: "How do map reviews affect our ranking?", a: "Google Map algorithms prioritize reviews containing specific local keywords, rapid reply rates, and steady review velocity. We automate this system for you." }
    ]
  },
  ecommerce: {
    title: "Enterprise E-commerce SEO Systems",
    metaTitle: "E-commerce SEO Agency Bahrain | GCC Ecom Scaling - BAE",
    metaDesc: "Scale your e-commerce organic revenue. Multilingual Arabic-English catalog architecture, product schema integrations, and search engine scaling.",
    icon: <ShoppingBag className="h-10 w-10 text-rose-400" />,
    subtitle: "High-volume crawl architectures & dynamic product schema solutions for GCC retail brands.",
    summary: "Complete organic visibility scaling for GCC-wide e-commerce stores. Multilingual catalog optimization, Google Merchant Center feed schema alignment, and category page link silos.",
    highlights: [
      "Bilingual Product & Offer JSON-LD schema implementation",
      "Faceted navigation cleanup & crawl budget conservation",
      "GCC-wide targeted search localization (BH, KSA, UAE)",
      "High-value transactional search query ranking architectures"
    ],
    description: "E-commerce stores in the GCC must navigate multilingual indexation, product variations, and search engine crawlers. BAE restructures catalog codebases to optimize crawl speed, prevent pagination duplicates, and auto-inject product schemas that generate Google Rich snippets.",
    schemaType: "ProfessionalService",
    locality: "Hidd Industrial Area",
    latitude: 26.2131,
    longitude: 50.6558,
    painPoints: [
      { title: "Crawl Budget Conservation", desc: "Cleaning up faceted filters (colors, sizes) to prevent crawlers from wastefully indexing millions of duplicate parameter URLs." },
      { title: "Product Rich Snippets", desc: "Injecting live price, stock, and rating schemas to generate visual product cards in search results." },
      { title: "Multilingual Search Silos", desc: "Independent English and Arabic structures that rank for regional search intents across the GCC." }
    ],
    faqs: [
      { q: "How does BAE prevent duplicate catalog pages?", a: "We write clean canonical loops and filter rules that tell Google exactly which product version to index, conserving crawl budget." },
      { q: "Can you optimize our feed for Google Merchant Center?", a: "Yes. We align your product schema structure directly with Merchant Center requirements to unlock free organic product listings." }
    ]
  }
};

export async function generateStaticParams() {
  return [
    { industry: "healthcare" },
    { industry: "legal" },
    { industry: "food-and-beverage" },
    { industry: "ecommerce" }
  ];
}

interface PageProps {
  params: Promise<{ industry: string }>;
}

export async function generateMetadata({ params }: PageProps) {
  const { industry } = await params;
  const data = industryRegistry[industry];
  if (!data) return {};

  return {
    title: data.metaTitle,
    description: data.metaDesc,
    alternates: {
      canonical: `https://bahrainauthorityengine.com/industries/${industry}`
    }
  };
}

export default async function IndustryPage({ params }: PageProps) {
  const { industry } = await params;
  const data = industryRegistry[industry];

  if (!data) {
    notFound();
  }

  return (
    <div className="relative min-h-screen bg-black-matte text-white font-[family-name:var(--font-inter)] overflow-hidden noise-overlay">
      {/* Dynamic Schema Injection */}
      <LocalBusinessSchema
        type={data.schemaType}
        name={`${data.title} - BAE Systems`}
        url={`https://bahrainauthorityengine.com/industries/${industry}`}
        telephone="+973 1700 0000"
        streetAddress={`BAE Office Building, Block 90${industry === "healthcare" ? "2" : "5"}`}
        addressLocality={data.locality}
        addressRegion="Capital Governorate"
        latitude={data.latitude}
        longitude={data.longitude}
        openingHours={["Mo-Sa 08:00-18:00"]}
        description={data.summary}
      />

      {/* Decorative Gradients & Mesh */}
      <div className="absolute inset-0 grid-bg opacity-30 pointer-events-none" />
      <div className="absolute top-0 left-0 right-0 h-[60vh] radial-gradient-top pointer-events-none" />
      <div className="absolute top-[20%] right-[-10%] w-[500px] h-[500px] rounded-full bg-electric-blue/5 blur-[120px] pointer-events-none animate-pulse-glow" />

      {/* Main Container */}
      <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16 sm:py-24">
        {/* Back Button */}
        <div className="mb-10 sm:mb-16">
          <Link
            href="/"
            className="inline-flex items-center gap-2 text-sm font-medium text-soft-gray hover:text-white transition-all group duration-300"
          >
            <ArrowLeft className="h-4 w-4 transform group-hover:-translate-x-1 transition-transform" />
            Back to Home
          </Link>
        </div>

        {/* Hero Section */}
        <div className="max-w-4xl mb-12 sm:mb-20">
          <span className="inline-flex items-center gap-1.5 text-xs font-semibold text-electric-blue uppercase tracking-widest px-3.5 py-1 rounded-full border border-electric-blue/20 bg-electric-blue/5 animate-pulse-glow">
            <Zap className="h-3.5 w-3.5" /> Industry Authority Silo
          </span>
          <h1 className="text-3xl sm:text-5xl lg:text-6xl font-[family-name:var(--font-space)] font-bold mt-6 tracking-tight leading-tight">
            {data.title}
          </h1>
          <p className="mt-6 text-base sm:text-xl text-soft-gray leading-relaxed max-w-3xl">
            {data.subtitle}
          </p>
        </div>

        {/* AEO Summary Box */}
        <div className="mb-16 sm:mb-24 max-w-5xl">
          <AISummaryBox
            summary={data.summary}
            highlights={data.highlights}
            telephone="+973 1700 0000"
            ctaLabel="Get Free Competitor Audit"
            ctaHref={`/#contact?industry=${industry}`}
          />
        </div>

        {/* Core Strategy Pillars (Pain point cards style) */}
        <div className="mb-16 sm:mb-24">
          <div className="mb-10">
            <h2 className="text-2xl sm:text-3xl font-[family-name:var(--font-space)] font-bold">
              Key Strategic Deliverables
            </h2>
            <p className="text-soft-gray text-sm sm:text-base mt-2">
              How BAE engineering secures topical authority for your industry vertical.
            </p>
          </div>

          <div className="grid md:grid-cols-3 gap-6">
            {data.painPoints.map((point, idx) => (
              <div
                key={idx}
                className="group glass rounded-xl sm:rounded-2xl p-6 sm:p-8 hover:glow-blue transition-all duration-500 border border-white/[0.04] hover:border-electric-blue/20 cursor-default"
              >
                <div className="w-10 h-10 rounded-xl bg-electric-blue/10 flex items-center justify-center mb-6 group-hover:bg-electric-blue/20 transition-colors duration-300">
                  <Activity className="w-5 h-5 text-electric-blue-light" />
                </div>
                <h3 className="text-lg sm:text-xl font-[family-name:var(--font-space)] font-bold text-white mb-3">
                  {point.title}
                </h3>
                <p className="text-soft-gray text-sm leading-relaxed mb-4">
                  {point.desc}
                </p>
              </div>
            ))}
          </div>
        </div>

        {/* Detailed Explanation */}
        <div className="relative overflow-hidden rounded-2xl border border-white/5 bg-charcoal/20 p-8 backdrop-blur-xl mb-16 sm:mb-24">
          <div className="absolute top-0 right-0 p-8 opacity-[0.03] pointer-events-none">
            {data.icon}
          </div>
          <div className="max-w-3xl">
            <h3 className="text-lg sm:text-xl font-[family-name:var(--font-space)] font-bold flex items-center gap-2 mb-4">
              <ShieldCheck className="h-5 w-5 text-electric-blue" />
              Silo Compliance & E-E-A-T Framework
            </h3>
            <p className="text-soft-gray leading-relaxed text-sm sm:text-base">
              {data.description}
            </p>
          </div>
        </div>

        {/* FAQs Section */}
        <div className="max-w-3xl">
          <div className="flex items-center gap-3 mb-8 sm:mb-10">
            <HelpCircle className="h-6 w-6 text-electric-blue" />
            <h2 className="text-xl sm:text-3xl font-[family-name:var(--font-space)] font-bold">
              Frequently Asked Questions
            </h2>
          </div>

          <div className="space-y-4">
            {data.faqs.map((faq, idx) => (
              <div
                key={idx}
                className="glass rounded-xl p-5 border border-white/[0.04]"
              >
                <h4 className="text-sm sm:text-base font-bold text-white mb-2">
                  Q: {faq.q}
                </h4>
                <p className="text-soft-gray text-xs sm:text-sm leading-relaxed border-t border-white/5 pt-2 mt-2">
                  {faq.a}
                </p>
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
}
