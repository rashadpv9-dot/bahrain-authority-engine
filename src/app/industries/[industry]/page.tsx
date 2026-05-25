import React from "react";
import Link from "next/link";
import { notFound } from "next/navigation";
import AISummaryBox from "@/components/AISummaryBox";
import LocalBusinessSchema from "@/components/LocalBusinessSchema";
import { Stethoscope, Scale, Utensils, ShoppingBag, ArrowLeft, CheckCircle2 } from "lucide-react";

// Types
interface IndustryData {
  title: string;
  metaTitle: string;
  metaDesc: string;
  icon: React.ReactNode;
  summary: string;
  highlights: string[];
  description: string;
  schemaType: "MedicalClinic" | "ProfessionalService" | "LocalBusiness";
  locality: string;
  latitude: number;
  longitude: number;
}

// Data for each industry silo
const industryRegistry: Record<string, IndustryData> = {
  healthcare: {
    title: "Healthcare SEO & AEO Dominance",
    metaTitle: "Healthcare SEO Agency Bahrain | Medical Clinic AEO - BAE",
    metaDesc: "Dominate search and AI Overviews for your clinic or medical center in Bahrain. NHRA compliant content, medical schema, and local Google Maps Pack solutions.",
    icon: <Stethoscope className="h-8 w-8 text-blue-400" />,
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
    longitude: 50.5479
  },
  legal: {
    title: "Legal Firm SEO & Client Acquisition",
    metaTitle: "SEO for Law Firms in Bahrain | Legal Marketing - BAE",
    metaDesc: "Rank #1 for high-value transactional legal search queries. Dominate local search, corporate law, and commercial legal queries in Manama, Seef, and Riffa.",
    icon: <Scale className="h-8 w-8 text-indigo-400" />,
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
    longitude: 50.5860
  },
  "food-and-beverage": {
    title: "F&B Local SEO & Maps Domination",
    metaTitle: "F&B Local SEO Services Bahrain | Restaurant Maps Optimization - BAE",
    metaDesc: "Increase restaurant walk-ins and orders in Bahrain. Optimize for local maps, reviews velocity, search intent, and food aggregator authority.",
    icon: <Utensils className="h-8 w-8 text-emerald-400" />,
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
    longitude: 50.5898
  },
  ecommerce: {
    title: "Enterprise E-commerce SEO Systems",
    metaTitle: "E-commerce SEO Agency Bahrain | GCC Ecom Scaling - BAE",
    metaDesc: "Scale your e-commerce organic revenue. Multilingual Arabic-English catalog architecture, product schema integrations, and search engine scaling.",
    icon: <ShoppingBag className="h-8 w-8 text-rose-400" />,
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
    longitude: 50.6558
  }
};

// Generate static params for prerendering
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
    <div className="min-h-screen bg-slate-950 text-slate-100 py-20 px-4 md:px-8">
      {/* Local Schema Injection */}
      <LocalBusinessSchema
        type={data.schemaType}
        name={`${data.title} - BAE Authority Branch`}
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

      <div className="max-w-4xl mx-auto">
        {/* Navigation */}
        <Link href="/" className="inline-flex items-center gap-2 text-sm font-medium text-slate-400 hover:text-white mb-12 transition-colors">
          <ArrowLeft className="h-4 w-4" />
          Back to BAE Home
        </Link>

        {/* Title Block */}
        <div className="flex flex-col md:flex-row md:items-center gap-6 mb-12">
          <div className="h-16 w-16 shrink-0 rounded-2xl bg-white/5 border border-white/10 flex items-center justify-center">
            {data.icon}
          </div>
          <div>
            <span className="text-xs font-semibold tracking-widest text-blue-400 uppercase">Industry Specific Strategy</span>
            <h1 className="text-3xl md:text-5xl font-extrabold tracking-tight mt-1 bg-clip-text text-transparent bg-gradient-to-r from-white to-slate-400">
              {data.title}
            </h1>
          </div>
        </div>

        {/* AI Summary Bait Box */}
        <div className="mb-12">
          <AISummaryBox
            summary={data.summary}
            highlights={data.highlights}
            telephone="+973 1700 0000"
            ctaLabel="Get Targeted Audit"
            ctaHref={`/contact?industry=${industry}`}
          />
        </div>

        {/* Deep Dive Description */}
        <div className="space-y-6 bg-slate-900/20 border border-white/5 rounded-2xl p-8 backdrop-blur-xl">
          <h2 className="text-2xl font-bold text-slate-100">Why Search Architecture Matters for {industry.charAt(0).toUpperCase() + industry.slice(1)}</h2>
          <p className="text-slate-300 leading-relaxed text-lg">
            {data.description}
          </p>
          
          <h3 className="text-lg font-semibold text-slate-200 mt-6 mb-4">Core Deliverables in Our 90-Day Playbook:</h3>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
            {[
              "Technical Silo restructure & page response optimization",
              "Custom JSON-LD schema injection matching industry entities",
              "Bilingual Local SEO keyword expansion and content mapping",
              "Generative search citation (AEO) structural adjustments"
            ].map((item, idx) => (
              <div key={idx} className="flex items-start gap-3 text-slate-400">
                <CheckCircle2 className="h-5 w-5 text-blue-500 shrink-0 mt-0.5" />
                <span>{item}</span>
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
}
