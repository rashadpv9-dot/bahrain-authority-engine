import React from "react";
import Link from "next/link";
import { notFound } from "next/navigation";
import AISummaryBox from "@/components/AISummaryBox";
import LocalBusinessSchema from "@/components/LocalBusinessSchema";
import { MapPin, Globe, Compass, ArrowLeft, Building2 } from "lucide-react";

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
    metaDesc: "Achieve #1 rankings and AI Overviews visibility in Manama. Local business schema, high-authority backlink outreach, and GCC digital marketing structures."
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
    metaDesc: "Rank #1 for medical and retail search queries in Seef. NHRA-compliant local optimization, dynamic coordinates schema, and high-performance search maps."
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
    metaDesc: "Get found by residents in East & West Riffa. Dominate Google Local Pack, Apple Maps, and conversational search engines with BAE local systems."
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
    metaDesc: "Rank #1 for local searches in Muharraq and Amwaj. Geocoding schema injections, local maps pack rankings, and AI overview optimizations."
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
    <div className="min-h-screen bg-slate-950 text-slate-100 py-20 px-4 md:px-8">
      {/* Inject Local Business Schema */}
      <LocalBusinessSchema
        type="ProfessionalService"
        name={`BAE local SEO Branch - ${data.name}`}
        url={`https://bahrainauthorityengine.com/locations/${location}`}
        telephone="+973 1700 0000"
        streetAddress={`BAE Landmark Tower, Block 3${location === "seo-seef" ? "2" : "1"}`}
        addressLocality={data.name}
        addressRegion="Capital Governorate"
        latitude={data.latitude}
        longitude={data.longitude}
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
            <MapPin className="h-8 w-8 text-blue-400" />
          </div>
          <div>
            <span className="text-xs font-semibold tracking-widest text-blue-400 uppercase">Geographical SEO Silo</span>
            <h1 className="text-3xl md:text-5xl font-extrabold tracking-tight mt-1 bg-clip-text text-transparent bg-gradient-to-r from-white to-slate-400">
              {data.name} Local Search
            </h1>
          </div>
        </div>

        {/* AI summary Box */}
        <div className="mb-12">
          <AISummaryBox
            summary={data.summary}
            highlights={data.highlights}
            telephone="+973 1700 0000"
            ctaLabel="Verify Local Coordinates"
            ctaHref={`/contact?location=${location}`}
          />
        </div>

        {/* Local landmarks & coordinates */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-12">
          <div className="bg-slate-900/30 border border-white/5 rounded-2xl p-6">
            <h3 className="text-lg font-bold text-slate-100 flex items-center gap-2 mb-4">
              <Compass className="h-5 w-5 text-blue-400" />
              Target Geocoordinates
            </h3>
            <p className="text-slate-300 font-mono text-sm mb-4">
              Latitude: {data.latitude}° N<br />
              Longitude: {data.longitude}° E
            </p>
            <span className="text-xs text-slate-400">Natively embedded in JSON-LD structured schema codes for Google Maps Pack rank signaling.</span>
          </div>

          <div className="bg-slate-900/30 border border-white/5 rounded-2xl p-6">
            <h3 className="text-lg font-bold text-slate-100 flex items-center gap-2 mb-4">
              <Building2 className="h-5 w-5 text-blue-400" />
              Nearby Landmarks & Silos
            </h3>
            <ul className="space-y-2">
              {data.landmarks.map((landmark, idx) => (
                <li key={idx} className="flex items-center gap-2 text-sm text-slate-300">
                  <span className="h-1.5 w-1.5 rounded-full bg-blue-500" />
                  {landmark}
                </li>
              ))}
            </ul>
          </div>
        </div>
      </div>
    </div>
  );
}
