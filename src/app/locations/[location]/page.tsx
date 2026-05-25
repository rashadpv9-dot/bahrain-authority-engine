import React from "react";
import Link from "next/link";
import { notFound } from "next/navigation";
import AISummaryBox from "@/components/AISummaryBox";
import LocalBusinessSchema from "@/components/LocalBusinessSchema";
import { 
  MapPin, Globe, Compass, ArrowLeft, 
  Building2, Zap, HelpCircle, ShieldCheck 
} from "lucide-react";

interface LocationData {
  name: string;
  coordinates: string;
  latitude: number;
  longitude: number;
  landmarks: string[];
  summary: string;
  highlights: string[];
  metaTitle: string;
  metaDesc: string;
  region: string;
  description: string;
  faqs: { q: string; a: string }[];
}

const locationRegistry: Record<string, LocationData> = {
  "seo-manama": {
    name: "Manama (Capital Governorate)",
    coordinates: "26.2285° N, 50.5860° E",
    latitude: 26.2285,
    longitude: 50.5860,
    landmarks: ["Diplomatic Area", "Bahrain Financial Harbour", "Bab Al Bahrain"],
    summary: "Targeted enterprise search and Answer Engine Optimization (AEO) for corporate legal firms and headquarters in Manama. Dynamic local map pack optimization designed to secure visibility for high-value business terms.",
    highlights: [
      "Structured schema injections for financial & legal entities",
      "Geotargeted localized keyword indexing for Manama commercial core",
      "NAP synchronization with global maps directories",
      "Answer Engine citations for corporate and commercial terms"
    ],
    metaTitle: "SEO Services Manama | Search Engine Agency Manama - BAE",
    metaDesc: "Achieve #1 rankings and AI Overviews visibility in Manama. Local business schema, high-authority backlink outreach, and GCC digital marketing structures.",
    region: "Capital Governorate",
    description: "As the financial and political center of the Kingdom of Bahrain, Manama is home to global commercial banks, regional prestige law firms, and corporate headquarters. BAE helps businesses in the Diplomatic Area and Financial Harbour dominate commercial intent queries by establishing deep entity authority and local map pack dominance.",
    faqs: [
      { q: "Why is local map pack placement crucial in Manama?", a: "Most corporate clients and high-value legal prospects search on mobile with immediate geographical intent. Securing a spot in the top Local 3-Pack places your office directly in front of active decision-makers." },
      { q: "How does geocoding metadata work?", a: "We embed exact coordinates (26.2285° N, 50.5860° E) natively within your website's header structured code (JSON-LD), signaling your exact proximity to search engines." }
    ]
  },
  "seo-seef": {
    name: "Seef District",
    coordinates: "26.2361° N, 50.5479° E",
    latitude: 26.2361,
    longitude: 50.5479,
    landmarks: ["Seef Mall", "Ritz-Carlton Bahrain", "ERA Tower"],
    summary: "Premium clinic, medical center, and retail optimization in the Seef district. Focused on high-end local search terms, medical clinic schema compliance, and local pack discovery.",
    highlights: [
      "MedicalClinic and Physician JSON-LD schema integration",
      "Local Map Pack tracking for healthcare specialists",
      "Core Web Vitals acceleration for medical portals",
      "E-E-A-T trust signals (NHRA license compliance)"
    ],
    metaTitle: "SEO Agency Seef | Clinic & Business SEO Seef - BAE",
    metaDesc: "Rank #1 for medical and retail search queries in Seef. NHRA-compliant local optimization, dynamic coordinates schema, and high-performance search maps.",
    region: "Seef District, Capital Governorate",
    description: "Seef is Bahrain's premier healthcare and luxury retail hub. With dozens of specialized private clinics and high-end businesses competing, organic map placement and local AEO are vital. BAE constructs clean, lightning-fast Next.js routing structures that load in milliseconds, outranking legacy local aggregates.",
    faqs: [
      { q: "Can BAE help our Seef clinic get more patient bookings?", a: "Absolutely. By integrating Physician and MedicalClinic schemas with your Seef coordinates, we place your clinic at the top of local health searches." },
      { q: "Do you integrate NHRA licensing in Seef SEO?", a: "Yes. All healthcare sites must display regulatory credentials. We integrate your license metadata natively to build search engine trust." }
    ]
  },
  "seo-riffa": {
    name: "Riffa (Southern Governorate)",
    coordinates: "26.1300° N, 50.5550° E",
    latitude: 26.1300,
    longitude: 50.5550,
    landmarks: ["Riffa Views", "Royal Golf Club", "East Riffa Palace"],
    summary: "Local business directory and residential market SEO in Riffa. Optimized for Southern Governorate searches, review velocity setups, and clinic location mapping.",
    highlights: [
      "LocalBusiness and ProfessionalService schema automation",
      "Review management workflows for local reputation",
      "Neighborhood-specific landing page optimization",
      "Bilingual GCC search targeting (Arabic and English)"
    ],
    metaTitle: "SEO Services Riffa | Local Search Agency Riffa - BAE",
    metaDesc: "Get found by residents in East & West Riffa. Dominate Google Local Pack, Apple Maps, and conversational search engines with BAE local systems.",
    region: "Southern Governorate",
    description: "Riffa holds a massive demographic mix of GCC citizens and expats, requiring a strong bilingual (Arabic/English) local search presence. BAE optimizes your neighborhood profiles and maps listings so you rank first for high-density local service searches in Riffa Views, East Riffa, and West Riffa.",
    faqs: [
      { q: "How do we target Riffa residents searching in Arabic?", a: "We build dedicated Arabic local landing pages configured with alternate hreflang tags, indexing your business for voice search and native Arabic intent." },
      { q: "What is review velocity, and why does Riffa need it?", a: "Map algorithms evaluate the speed and consistency at which you gain customer reviews. We configure automated review generation systems to keep your ranking stable." }
    ]
  },
  "seo-muharraq": {
    name: "Muharraq (Muharraq Governorate)",
    coordinates: "26.2572° N, 50.6108° E",
    latitude: 26.2572,
    longitude: 50.6108,
    landmarks: ["Amwaj Islands", "Diyar Al Muharraq", "Arad Fort"],
    summary: "Geographical search optimization for businesses in Muharraq, Amwaj Islands, and Diyar Al Muharraq. Focuses on aviation, retail, tourism, and local medical clinics.",
    highlights: [
      "Amwaj & Diyar regional search silo optimization",
      "Local map geocoordinate schema alignments",
      "Bilingual localized Arabic/English search indices",
      "High-speed crawl optimization for services directories"
    ],
    metaTitle: "SEO Agency Muharraq | Amwaj Islands Local SEO - BAE",
    metaDesc: "Rank #1 for local searches in Muharraq and Amwaj. Geocoding schema injections, local maps pack rankings, and AI overview optimizations.",
    region: "Muharraq Governorate",
    description: "From historic Muharraq to modern waterfront communities like Amwaj Islands and Diyar Al Muharraq, search behavior varies wildly. BAE creates geographical folder silos that target residential and leisure service queries, ensuring your brand stands out in maps, travel apps, and local search queries.",
    faqs: [
      { q: "How do we target Amwaj Islands search intent specifically?", a: "We build localized keyword structures targeting the Amwaj demographic, linking geocoordinates for the lagoon and residential zones." },
      { q: "Do you optimize for Bahrain International Airport vicinity searches?", a: "Yes. For hospitality, rental, and corporate services, vicinity-based geocoding is integrated to capture travelers and airport transit traffic." }
    ]
  }
};

export async function generateStaticParams() {
  return [
    { location: "seo-manama" },
    { location: "seo-seef" },
    { location: "seo-riffa" },
    { location: "seo-muharraq" }
  ];
}

interface PageProps {
  params: Promise<{ location: string }>;
}

export async function generateMetadata({ params }: PageProps) {
  const { location } = await params;
  const data = locationRegistry[location];
  if (!data) return {};

  return {
    title: data.metaTitle,
    description: data.metaDesc,
    alternates: {
      canonical: `https://bahrainauthorityengine.com/locations/${location}`
    }
  };
}

export default async function LocationPage({ params }: PageProps) {
  const { location } = await params;
  const data = locationRegistry[location];

  if (!data) {
    notFound();
  }

  return (
    <div className="relative min-h-screen bg-black-matte text-white font-[family-name:var(--font-inter)] overflow-hidden noise-overlay">
      {/* Inject Local Business Schema */}
      <LocalBusinessSchema
        type="ProfessionalService"
        name={`BAE Local SEO Branch - ${data.name}`}
        url={`https://bahrainauthorityengine.com/locations/${location}`}
        telephone="+973 1700 0000"
        streetAddress={`BAE Landmark Tower, Block 3${location === "seo-seef" ? "2" : "1"}`}
        addressLocality={data.name}
        addressRegion={data.region}
        latitude={data.latitude}
        longitude={data.longitude}
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
            <MapPin className="h-3.5 w-3.5" /> Geographic Authority Silo
          </span>
          <h1 className="text-3xl sm:text-5xl lg:text-6xl font-[family-name:var(--font-space)] font-bold mt-6 tracking-tight leading-tight">
            SEO Services in {data.name}
          </h1>
          <p className="mt-6 text-base sm:text-xl text-soft-gray leading-relaxed max-w-3xl">
            Hyper-localized search systems built to secure first-page Google rankings and AI citations in {data.name}.
          </p>
        </div>

        {/* AI Summary Box */}
        <div className="mb-16 sm:mb-24 max-w-5xl">
          <AISummaryBox
            summary={data.summary}
            highlights={data.highlights}
            telephone="+973 1700 0000"
            ctaLabel="Verify Map Placement"
            ctaHref={`/#contact?location=${location}`}
          />
        </div>

        {/* Geocoordinates & Landmarks Cards */}
        <div className="grid md:grid-cols-2 gap-6 mb-16 sm:mb-24">
          {/* Card 1 */}
          <div className="group glass rounded-xl sm:rounded-2xl p-6 sm:p-8 hover:glow-blue transition-all duration-500 border border-white/[0.04] hover:border-electric-blue/20 cursor-default">
            <div className="w-10 h-10 rounded-xl bg-electric-blue/10 flex items-center justify-center mb-6">
              <Compass className="w-5 h-5 text-electric-blue-light animate-spin" style={{ animationDuration: "12s" }} />
            </div>
            <h3 className="text-lg sm:text-xl font-[family-name:var(--font-space)] font-bold text-white mb-3">
              Schema Target Coordinates
            </h3>
            <p className="text-slate-300 font-mono text-sm leading-relaxed mb-4">
              Latitude: {data.latitude}° N<br />
              Longitude: {data.longitude}° E
            </p>
            <p className="text-soft-gray text-xs sm:text-sm">
              These exact geocodes are compiled dynamically into your JSON-LD schemas, signalling vicinity authority directly to map indexing spiders.
            </p>
          </div>

          {/* Card 2 */}
          <div className="group glass rounded-xl sm:rounded-2xl p-6 sm:p-8 hover:glow-blue transition-all duration-500 border border-white/[0.04] hover:border-electric-blue/20 cursor-default">
            <div className="w-10 h-10 rounded-xl bg-electric-blue/10 flex items-center justify-center mb-6">
              <Building2 className="w-5 h-5 text-electric-blue-light" />
            </div>
            <h3 className="text-lg sm:text-xl font-[family-name:var(--font-space)] font-bold text-white mb-3">
              Target Landmarks & Neighborhoods
            </h3>
            <div className="flex flex-wrap gap-2.5 mb-4">
              {data.landmarks.map((landmark, idx) => (
                <span key={idx} className="text-xs bg-white/5 border border-white/10 px-3 py-1 rounded-full text-slate-300">
                  {landmark}
                </span>
              ))}
            </div>
            <p className="text-soft-gray text-xs sm:text-sm">
              Establishing localized proximity signals that capture searches conducted near key civic centers, business districts, and landmarks.
            </p>
          </div>
        </div>

        {/* Detailed Explanation */}
        <div className="relative overflow-hidden rounded-2xl border border-white/5 bg-charcoal/20 p-8 backdrop-blur-xl mb-16 sm:mb-24">
          <div className="max-w-3xl">
            <h3 className="text-lg sm:text-xl font-[family-name:var(--font-space)] font-bold flex items-center gap-2 mb-4">
              <ShieldCheck className="h-5 w-5 text-electric-blue" />
              Geographic Silo Compliance
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
