import React from "react";
import Link from "next/link";
import { notFound } from "next/navigation";
import LocalBusinessSchema from "@/components/LocalBusinessSchema";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import {
  Smile, Sparkles, Activity, Users, Flame,
  ArrowRight, CheckCircle2, Zap, TrendingUp,
  ShieldCheck, HelpCircle, Award, BookOpen,
  BadgeCheck, FileSearch, Target, Phone, MessageSquare
} from "lucide-react";

interface SubpageData {
  title: string;
  metaTitle: string;
  metaDesc: string;
  icon: React.ReactNode;
  subtitle: string;
  summary: string;
  highlights: string[];
  description: string;
  locality: string;
  latitude: number;
  longitude: number;
  painPoints: { title: string; desc: string }[];
  faqs: { q: string; a: string }[];
  eeatCredentials: { label: string; detail: string }[];
  methodology: string;
  keywords: { phrase: string; volume: string; intent: string }[];
}

const subpagesRegistry: Record<string, SubpageData> = {
  dental: {
    title: "Dental Clinic SEO & Booking Velocity Systems",
    metaTitle: "Dental Clinic SEO Bahrain | Dentist Marketing Systems - BAE",
    metaDesc: "Increase cosmetic dentistry and implant bookings for your private dental clinic in Bahrain. Dominate Google Maps Local 3-Pack and organic search.",
    icon: <Smile className="h-10 w-10 text-electric-blue-light" />,
    subtitle: "Organic patient acquisition frameworks designed specifically for private dental practices, cosmetic clinics, and orthodontists in the GCC.",
    summary: "Stop paying $8+ per click on Google Ads for keywords like 'dental implant price Bahrain'. We rank your dental center at the top of organic maps and search listings for high-yield procedures.",
    highlights: [
      "Veneers & Dental Implants organic search campaign structures",
      "Google Maps Local 3-Pack rank acceleration for dentists",
      "Dynamic DentalClinic schema with coordinate mapping",
      "Patient booking funnel and WhatsApp intake conversion loops"
    ],
    description: "Dental services are highly transaction-driven. When patients search for implants, teeth whitening, or pediatric dentistry in Bahrain, they scroll directly to Google Maps. We configure local branch citations, optimize reviews velocity, and structure your dental specialty pages so they rank for high-intent queries before your competitors.",
    locality: "Seef Medical District, Manama",
    latitude: 26.2361,
    longitude: 50.5479,
    painPoints: [
      { title: "Implant & Cosmetic Leads", desc: "Positioning your practice for high-value services (veneers, implants, braces) to increase the average patient value." },
      { title: "Map Pack Local Authority", desc: "Setting up automated review requests and NAP directory consistency to rank #1 on Google Maps for local queries." },
      { title: "WhatsApp Intake Funnels", desc: "Converting organic visitors into scheduled appointments through direct messaging templates and clear conversion landing paths." }
    ],
    faqs: [
      { q: "How long does it take for a dental clinic to rank in the Local 3-Pack?", a: "Typically 30 to 60 days. Because map listings depend heavily on review velocity and category optimization, our systems achieve fast map visibility compared to standard technical website edits." },
      { q: "Do you target specific dental procedures?", a: "Yes. Instead of generic terms like 'dentist Bahrain', we build landing page silos for high-margin procedures such as 'dental implants Seef' or 'invisalign price Manama'." },
      { q: "Will organic ranking help bypass social media advertising?", a: "Social ads are interruption-based. Search traffic is intent-based. A patient searching for an 'emergency dentist Riffa' is ready to book immediately, resulting in 4x higher conversion rates than social ads." },
      { q: "Is our content compliant with NHRA medical marketing guidelines?", a: "Yes. All dental copy is written to be strictly educational, highlighting professional certifications, doctor biographies, and clinic license numbers without comparative claims." }
    ],
    eeatCredentials: [
      { label: "Dental Clinic Schema", detail: "Injections of custom schema specifying available dental treatments, pricing tiers, and diagnostic technologies." },
      { label: "Board Certified Verification", detail: "Doctor profile markup detailing dental degrees (DDS/BDS), specialized board memberships, and licensing numbers." },
      { label: "Verified Local Coordinates", detail: "Exact coordinate mappings across Bahrain's governorates to synchronize local map cards with organic directories." }
    ],
    methodology: "Our dental SEO playbook: (1) Category auditing of local Google Business Profiles, (2) Creation of procedure-specific content silos (orthodontics, cosmetic, implants), (3) Structured review velocity campaign activation, and (4) Headless page speed optimizations to lower bounce rates on mobile searchers.",
    keywords: [
      { phrase: "dental implants Bahrain", volume: "480/mo", intent: "Commercial" },
      { phrase: "best dentist in Seef", volume: "320/mo", intent: "Transactional" },
      { phrase: "veneer price Manama", volume: "210/mo", intent: "Commercial" },
      { phrase: "invisalign doctor Riffa", volume: "190/mo", intent: "Transactional" }
    ]
  },
  dermatology: {
    title: "Dermatology & Aesthetic Clinic SEO Systems",
    metaTitle: "Aesthetic Clinic SEO Agency Bahrain | Dermatology Marketing - BAE",
    metaDesc: "Scale skin clinic and aesthetic bookings in Bahrain. Rank #1 for laser hair removal, hydrafacials, botox, and specialized skincare queries.",
    icon: <Sparkles className="h-10 w-10 text-electric-blue-light" />,
    subtitle: "High-performance organic visibility engines designed for cosmetic clinics, dermatologists, and laser centers in Bahrain.",
    summary: "Bypass competitive social media bidding. We position your aesthetic center at the top of local maps and search for high-intent laser, anti-aging, and skin rejuvenation treatments.",
    highlights: [
      "Targeting high-margin cosmetic procedures (botox, laser, fillers)",
      "Google Business Profile photo optimization to drive conversions",
      "Dynamic LocalBusiness schema and coordinates injection",
      "Review management pipelines to maintain a 4.8+ rating"
    ],
    description: "Cosmetic dermatology is one of the most competitive search spaces in the GCC. Patients actively research treatment safety, doctor credentials, and before-and-after results. BAE structures skin clinic websites so that they rank organically when patients look for specific aesthetic procedures and skin specialist consultations.",
    locality: "Seef District, Manama",
    latitude: 26.2365,
    longitude: 50.5485,
    painPoints: [
      { title: "High-Margin Treatment Flow", desc: "Structuring landing pages around lucrative cosmetic treatments to secure patient bookings for high-revenue services." },
      { title: "Review Velocity Domination", desc: "Implementing post-treatment WhatsApp templates to drive a continuous stream of 5-star Google reviews." },
      { title: "Local Maps pack Visibility", desc: "Optimizing the clinic's GBP to rank first in the map pack for high-volume local aesthetic searches." }
    ],
    faqs: [
      { q: "How do we rank for highly competitive anti-aging and laser terms?", a: "We build dedicated procedure silos rather than a single generic services list. This establishes deep topical authority, allowing your clinic to outrank general medical centers." },
      { q: "How does GBP photo optimization affect aesthetic clinic rankings?", a: "Google maps algorithms track user interaction with clinic photos. Optimizing clinical interior photos, reception views, and equipment details raises listing CTR and improves local rankings." },
      { q: "Can we rank separately for medical dermatology and cosmetic procedures?", a: "Yes. We design separate silos: one for pathology (acne, eczema) and another for aesthetic services, preventing keyword cannibalization." },
      { q: "Are laser treatment descriptions NHRA compliant?", a: "Yes. We avoid exaggerated claims and focus entirely on FDA-approved technology specifications, clinical staff certifications, and transparent procedural details." }
    ],
    eeatCredentials: [
      { label: "FDA-Approved Tech Schema", detail: "Schema metadata detailing clinical laser systems, skincare product brands, and cosmetic injectables safety standards." },
      { label: "Certified Dermatologist Bios", detail: "Attorney-grade educational and registration listings for aesthetic doctors and clinical cosmetologists." },
      { label: "Clinical Environment Validation", detail: "Local directory verification emphasizing hygiene certifications and clinical registration details." }
    ],
    methodology: "Our aesthetic SEO methodology: (1) Procedure-level keyword difficulty auditing, (2) Creating high-performance cosmetic treatment landing pages, (3) Implementing review velocity funnels, and (4) Building authority citations across local healthcare portals.",
    keywords: [
      { phrase: "laser hair removal Bahrain", volume: "720/mo", intent: "Commercial" },
      { phrase: "best dermatologist Seef", volume: "450/mo", intent: "Transactional" },
      { phrase: "botox injection Manama", volume: "310/mo", intent: "Transactional" },
      { phrase: "hydrafacial clinic Riffa", volume: "240/mo", intent: "Commercial" }
    ]
  },
  obgyn: {
    title: "Women's Health & OBGYN Clinic Patient Engines",
    metaTitle: "OBGYN Clinic SEO Bahrain | Women's Health Marketing - BAE",
    metaDesc: "Rank your women's health clinic for high-volume 'lady doctor' and maternity queries in Bahrain. Align with local search behaviors and GCC cultural filters.",
    icon: <Users className="h-10 w-10 text-electric-blue-light" />,
    subtitle: "Custom search positioning for private OBGYN clinics, maternity centers, and women's health specialists.",
    summary: "Gender-specific searches represent some of the highest-converting traffic in the Gulf region. We rank your female doctors and obstetric clinics at the top of local maps pack queries.",
    highlights: [
      "Targeting culturally critical 'female gynecologist/lady doctor' searches",
      "Maternity package and IVF treatment content silos",
      "Dynamic Physician schema for female obstetric specialists",
      "Bilingual structures optimized for local & expat searches"
    ],
    description: "Women's health and OBGYN searches require maximum sensitivity and E-E-A-T credentials. Private clinic listings must display female doctor availability, translation assistance, and insurance options to capture local family decision-makers searching on Google.",
    locality: "MahoOz, Manama",
    latitude: 26.2122,
    longitude: 50.5891,
    painPoints: [
      { title: "Lady Doctor Visibility", desc: "Explicitly structuring search listings to rank for highly searched 'lady gynecologist' and 'female obstetrician' terms." },
      { title: "Maternity Package Silos", desc: "Structuring pricing guides, room features, and delivery package details to drive high-revenue admissions." },
      { title: "IVF & Fertility Authority", desc: "Building deeply educational content around reproductive health to capture complex fertility treatment searches." }
    ],
    faqs: [
      { q: "Why are gender-specific keywords so critical in Bahrain?", a: "A significant portion of women's health searches in the Gulf specify female practitioners. Ranking for 'female gynecologist near me' secures a steady pipeline of direct patient leads." },
      { q: "How do we write content for sensitive YMYL topics like fertility?", a: "Our copy is highly factual, educational, and reviewed by clinical experts. We link claims to medical journals and reference specific specialist licenses." },
      { q: "Do you optimize for regional insurance networks?", a: "Yes. By listing accepted maternity insurance options in the search schema, we match searchers looking to cover prenatal and delivery costs." },
      { q: "Can we rank our doctors individually?", a: "Yes. We create individual profile pages equipped with custom Physician schema, linking them to the main clinic database to build dual brand and specialist authority." }
    ],
    eeatCredentials: [
      { label: "Lady Doctor Availability Tags", detail: "Specialized LocalBusiness attributes denoting female practitioner availability on-site." },
      { label: "Maternity Care Schema", detail: "Metadata mapping pregnancy care plans, diagnostic ultrasound facilities, and delivery services." },
      { label: "Board Certified Credentials", detail: "Attestation listings mapping medical degrees, fellowship certificates, and NHRA clinical registry data." }
    ],
    methodology: "Our OBGYN methodology: (1) Family-intent keyword research, (2) Women's health capability pages and female doctor bios compilation, (3) Physician schema deployment with registry verifications, and (4) Proximity ranking configuration to capture neighboring communities.",
    keywords: [
      { phrase: "lady gynecologist Riffa", volume: "510/mo", intent: "Transactional" },
      { phrase: "female gynecologist Manama", volume: "420/mo", intent: "Transactional" },
      { phrase: "best obgyn in Seef", volume: "280/mo", intent: "Transactional" },
      { phrase: "maternity clinic Bahrain", volume: "190/mo", intent: "Commercial" }
    ]
  },
  orthopedics: {
    title: "Orthopedic & Physiotherapy SEO Systems",
    metaTitle: "Orthopedic Clinic SEO Bahrain | Physiotherapy Marketing - BAE",
    metaDesc: "Acquire more joint replacement, sports medicine, and rehab patients. Rank #1 for orthopedic surgeons, back pain treatment, and physical therapy.",
    icon: <Activity className="h-10 w-10 text-electric-blue-light" />,
    subtitle: "Organic search acquisition frameworks for sports medicine clinics, orthopedic surgeons, and physiotherapy groups.",
    summary: "Position your orthopedic center as the premium choice for joint care, rehab, and sports recovery. Rank #1 for search queries that drive orthopedic procedures.",
    highlights: [
      "Surgical procedure keyword silos (joint replacement, arthroscopy)",
      "Physiotherapy & sports rehab local search pack positioning",
      "Dynamic MedicalProcedure and Physician JSON-LD schema",
      "GCC insurance coverage alignment content"
    ],
    description: "Orthopedics and physiotherapy represent high-margin, long-term care services. When patients experience joint injuries or chronic back pain, they search for orthopedic specialists or physiotherapy centers nearby. BAE ranks your clinic to capture these patients early in their research process.",
    locality: "Juffair, Manama",
    latitude: 26.2155,
    longitude: 50.6055,
    painPoints: [
      { title: "Joint & Spine Surgery Leads", desc: "Acquiring high-margin surgical patients searching for specialized joint replacement, spine surgery, and sports medicine." },
      { title: "Physiotherapy Recurring Flow", desc: "Driving patient volume to your rehab and physical therapy departments for long-term recovery plans." },
      { title: "Payer-Mix Inbound Capture", desc: "Ranking for corporate and premium insurance search intents to secure insured patient bookings." }
    ],
    faqs: [
      { q: "How do we target both surgical and non-surgical patients?", a: "We structure distinct silos: one focusing on orthopedic surgery (arthroscopy, spine) and another targeting conservative care (physiotherapy, sports rehab)." },
      { q: "What schema types do you use for orthopedic surgeons?", a: "We combine Physician schema with MedicalProcedure schema (e.g. knee replacement, ACL reconstruction), informing Google about the specific surgical services you offer." },
      { q: "Can we rank for sport-specific injury terms?", a: "Yes. We create content around common injuries (runner's knee, golf elbow, rotator cuff tear) to capture active recovery and rehab search intents." },
      { q: "Is physiotherapy content subject to YMYL rules?", a: "Yes. Back pain, sciatica, and post-op rehab are high-scrutiny YMYL topics. We write medically accurate, reference-backed content to ensure ranking stability." }
    ],
    eeatCredentials: [
      { label: "MedicalProcedure Schema", detail: "Metadata defining surgical and non-surgical treatments, diagnostic imaging (MRI, X-Ray), and rehab plans." },
      { label: "Surgeon Credentials Registry", detail: "Board certified orthopedic listings, surgical residency credits, and NHRA surgeon license records." },
      { label: "Sports Rehab Affiliation", detail: "Highlighting links to sport associations, athletic clubs, and rehabilitation certifications." }
    ],
    methodology: "Our orthopedic SEO blueprint: (1) Spine/Joint procedural keyword audits, (2) MedicalProcedure schema integration, (3) Proximity map pack optimization for local rehab centers, and (4) Expat-friendly insurer listings schema synchronization.",
    keywords: [
      { phrase: "orthopedic surgeon Bahrain", volume: "390/mo", intent: "Transactional" },
      { phrase: "physiotherapy clinic Seef", volume: "310/mo", intent: "Transactional" },
      { phrase: "back pain treatment Manama", volume: "220/mo", intent: "Commercial" },
      { phrase: "knee specialist Riffa", volume: "180/mo", intent: "Transactional" }
    ]
  },
  pediatrics: {
    title: "Pediatric Clinic Local SEO & Trust Systems",
    metaTitle: "Pediatric SEO Bahrain | Child Clinic Marketing Systems - BAE",
    metaDesc: "Rank your pediatric clinic or child specialist clinic in Bahrain. Dominate Local Maps Pack, capture parental searches, and build community trust.",
    icon: <Flame className="h-10 w-10 text-electric-blue-light" />,
    subtitle: "Organic search and maps visibility platforms built for private pediatric centers, child specialists, and neonatologists.",
    summary: "When parents seek urgent child care, they don't look past the nearest maps results. We rank your pediatric clinic #1 in Google Maps Local Pack for emergency and child care queries.",
    highlights: [
      "Emergency pediatric and child care local maps domination",
      "Targeting child health and immunization search keywords",
      "Dynamic Pediatrician / MedicalClinic schema with geolocations",
      "WhatsApp direct reservation pipelines for urgent bookings"
    ],
    description: "Pediatrics is a highly trust-oriented medical specialty. Parents in Bahrain research child clinics based on proximity, clinic environment, insurance acceptance, and patient reviews. BAE structures pediatric listings to establish immediate geographic and professional authority.",
    locality: "Adliya, Manama",
    latitude: 26.2163,
    longitude: 50.5898,
    painPoints: [
      { title: "Emergency Patient Capture", desc: "Ranking #1 in the Local 3-Pack for urgent night-time or weekend child care queries ('pediatrician open now near me')." },
      { title: "Immunization & Growth Inbounds", desc: "Driving regular check-up and vaccination bookings through structured preventative care landing pages." },
      { title: "Parent Review Velocity", desc: "Automating post-visit review acquisition to assure new parents of your clinic's safety and service quality." }
    ],
    faqs: [
      { q: "Why is Google Maps visibility crucial for pediatric clinics?", a: "Parents seeking urgent care for a sick child prioritize travel time. Dominating local map listings ensures you are the first clinic they call during an emergency." },
      { q: "How do you optimize for child vaccination searches?", a: "We build localized guides detailing national immunization schedules, vaccination availability, and booking timelines to capture parents planning child checkups." },
      { q: "Do you include neonatologist profiles?", a: "Yes. Custom schemas distinguish general pediatricians from specialized neonatologists and pediatric allergists, targeting niche parent queries." },
      { q: "Are child care pages subject to stricter E-E-A-T criteria?", a: "Yes, children's health is a highly protected YMYL vertical. We maintain clinical accuracy and display medical licensing prominently on all pediatric pages." }
    ],
    eeatCredentials: [
      { label: "Pediatric Clinic Schema", detail: "Metadata mapping child care specialties, preventative checkup packages, and emergency hours." },
      { label: "Licensed Pediatrician Records", detail: "Registry credentials showing specialized pediatric fellowships, med school degrees, and active NHRA practitioner numbers." },
      { label: "Preventative Care Guides", detail: "Verified, parent-focused child health checklists mapping preventative medicine guidelines." }
    ],
    methodology: "Our pediatric SEO playbook: (1) Neighborhood maps pack audits, (2) Preventative care search guide creation, (3) Coordinate-synced pediatrician schema injections, and (4) Multi-branch local review velocity management.",
    keywords: [
      { phrase: "best pediatrician Bahrain", volume: "420/mo", intent: "Transactional" },
      { phrase: "child doctor near Seef", volume: "290/mo", intent: "Transactional" },
      { phrase: "pediatric clinic Manama", volume: "250/mo", intent: "Commercial" },
      { phrase: "baby vaccination Riffa", volume: "160/mo", intent: "Commercial" }
    ]
  }
};

export async function generateStaticParams() {
  return [
    { subpage: "dental" },
    { subpage: "dermatology" },
    { subpage: "obgyn" },
    { subpage: "orthopedics" },
    { subpage: "pediatrics" }
  ];
}

interface PageProps {
  params: Promise<{ subpage: string }>;
}

export async function generateMetadata({ params }: PageProps) {
  const { subpage } = await params;
  const data = subpagesRegistry[subpage];
  if (!data) return {};

  return {
    title: data.metaTitle,
    description: data.metaDesc,
    alternates: {
      canonical: `https://bahrainauthorityengine.com/industries/healthcare/${subpage}`
    }
  };
}

export default async function HealthcareSubpage({ params }: PageProps) {
  const { subpage } = await params;
  const data = subpagesRegistry[subpage];

  if (!data) {
    notFound();
  }

  return (
    <div className="relative min-h-screen bg-black-matte text-white font-[family-name:var(--font-inter)] overflow-hidden noise-overlay">
      {/* Dynamic Schema Injections */}
      <LocalBusinessSchema
        type="MedicalClinic"
        name={`${data.title} - BAE Systems`}
        url={`https://bahrainauthorityengine.com/industries/healthcare/${subpage}`}
        telephone="+973 1700 0000"
        streetAddress="BAE Healthcare Center, Floor 4, Medical Hub"
        addressLocality={data.locality}
        addressRegion="Capital Governorate"
        latitude={data.latitude}
        longitude={data.longitude}
        openingHours={["Mo-Sa 08:00-18:00"]}
        description={data.summary}
      />

      {/* Shared Navbar */}
      <Navbar />

      {/* Decorative Gradients & Mesh */}
      <div className="absolute inset-0 grid-bg opacity-30 pointer-events-none" />
      <div className="absolute top-0 left-0 right-0 h-[60vh] radial-gradient-top pointer-events-none" />
      <div className="absolute top-[20%] right-[-10%] w-[500px] h-[500px] rounded-full bg-electric-blue/5 blur-[120px] pointer-events-none animate-pulse-glow" />

      {/* Main Content */}
      <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 pt-28 sm:pt-36 pb-16 sm:pb-24">
        {/* Breadcrumb */}
        <div className="mb-10 sm:mb-16 flex items-center gap-2 text-sm text-soft-gray">
          <Link href="/" className="hover:text-white transition-colors">Home</Link>
          <span className="text-white/20">/</span>
          <Link href="/#services" className="hover:text-white transition-colors">Services</Link>
          <span className="text-white/20">/</span>
          <Link href="/industries/healthcare" className="hover:text-white transition-colors">Healthcare SEO</Link>
          <span className="text-white/20">/</span>
          <span className="text-electric-blue">{data.title.split(" ")[0]} Niche</span>
        </div>

        {/* Hero Section */}
        <div className="max-w-4xl mb-12 sm:mb-20">
          <span className="inline-flex items-center gap-1.5 text-xs font-semibold text-success-green uppercase tracking-widest px-3.5 py-1 rounded-full border border-success-green/20 bg-success-green/5 animate-pulse-glow">
            <Zap className="h-3.5 w-3.5 text-success-green" /> B2B Client Acquisition System
          </span>
          <h1 className="text-3xl sm:text-5xl lg:text-6xl font-[family-name:var(--font-space)] font-bold mt-6 tracking-tight leading-tight">
            {data.title}
          </h1>
          <p className="mt-6 text-base sm:text-xl text-soft-gray leading-relaxed max-w-3xl">
            {data.subtitle}
          </p>
        </div>

        {/* Alex Hormozi Style AI Overview Hook */}
        <div className="mb-16 sm:mb-24 max-w-5xl">
          <div className="relative overflow-hidden rounded-2xl border border-white/10 bg-slate-900/40 p-6 backdrop-blur-xl md:p-8" style={{ boxShadow: "0 8px 32px 0 rgba(0, 0, 0, 0.37)" }}>
            <div className="absolute -top-24 -left-24 h-48 w-48 rounded-full bg-blue-500/10 blur-3xl" />
            <div className="flex items-center gap-3 border-b border-white/5 pb-4 mb-4">
              <div className="flex h-10 w-10 items-center justify-center rounded-lg bg-blue-500/10 text-blue-400">
                <TrendingUp className="h-5 w-5" />
              </div>
              <div>
                <h4 className="flex items-center gap-2 text-sm font-semibold tracking-wide text-slate-200 uppercase">The Niche Value Proposition</h4>
                <span className="text-[11px] text-slate-400">Alex Hormozi Framework & Patient CAC Optimization</span>
              </div>
            </div>
            <div className="prose prose-invert prose-sm max-w-none text-slate-300">
              <p className="text-base leading-relaxed font-normal text-slate-200">
                <strong>Our BAE System:</strong> {data.summary}
              </p>
              <ul className="mt-4 grid grid-cols-1 gap-2 md:grid-cols-2">
                {data.highlights.map((highlight, idx) => (
                  <li key={idx} className="flex items-start gap-2 text-sm text-slate-300">
                    <span className="mt-1.5 h-1.5 w-1.5 shrink-0 rounded-full bg-blue-500" />
                    <span>{highlight}</span>
                  </li>
                ))}
              </ul>
            </div>
          </div>
        </div>

        {/* Keywords Valuation Matrix */}
        <div className="mb-16 sm:mb-24">
          <div className="mb-10">
            <span className="inline-flex items-center gap-1.5 text-xs font-semibold text-electric-blue uppercase tracking-widest px-3 py-1 rounded-full border border-electric-blue/20 bg-electric-blue/5 mb-4">
              <Target className="h-3.5 w-3.5" /> High-Value Patient Intents
            </span>
            <h2 className="text-2xl sm:text-3xl font-[family-name:var(--font-space)] font-bold mt-3">
              Bahrain Niche Keyword Valuation
            </h2>
            <p className="text-soft-gray text-sm sm:text-base mt-2 max-w-2xl">
              We target high-intent search phrases that translate directly into doctor bookings. By owning these organic assets, you bypass expensive bidding wars.
            </p>
          </div>

          <div className="overflow-x-auto rounded-xl border border-white/[0.06] bg-white/[0.01]">
            <table className="min-w-full divide-y divide-white/[0.06] text-left text-sm text-soft-gray">
              <thead className="bg-white/[0.03] text-xs font-semibold uppercase text-white">
                <tr>
                  <th scope="col" className="px-6 py-4">Target Keyword (Bahrain Focus)</th>
                  <th scope="col" className="px-6 py-4">Search Volume (Est.)</th>
                  <th scope="col" className="px-6 py-4">Search Intent Category</th>
                  <th scope="col" className="px-6 py-4">Conversion Value</th>
                </tr>
              </thead>
              <tbody className="divide-y divide-white/[0.06]">
                {data.keywords.map((kw, idx) => (
                  <tr key={idx} className="hover:bg-white/[0.01] transition-colors">
                    <td className="px-6 py-4 font-medium text-white">{kw.phrase}</td>
                    <td className="px-6 py-4">{kw.volume}</td>
                    <td className="px-6 py-4">
                      <span className="px-2 py-0.5 rounded text-[10px] bg-electric-blue/10 text-electric-blue font-semibold uppercase tracking-wider">{kw.intent}</span>
                    </td>
                    <td className="px-6 py-4 text-success-green font-bold">HIGH (Direct Booking)</td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </div>

        {/* Niche Pillars */}
        <div className="mb-16 sm:mb-24">
          <div className="mb-10">
            <span className="inline-flex items-center gap-1.5 text-xs font-semibold text-electric-blue uppercase tracking-widest px-3 py-1 rounded-full border border-electric-blue/20 bg-electric-blue/5 mb-4">
              <Award className="h-3.5 w-3.5" /> Practice Areas
            </span>
            <h2 className="text-2xl sm:text-3xl font-[family-name:var(--font-space)] font-bold mt-3">
              SEO Playbook Pillars for Niche Owners
            </h2>
            <p className="text-soft-gray text-sm sm:text-base mt-2">
              Our specific deliverables designed to drive qualified patients to your practice.
            </p>
          </div>

          <div className="grid md:grid-cols-3 gap-6">
            {data.painPoints.map((point, idx) => (
              <div
                key={idx}
                className="group glass rounded-xl sm:rounded-2xl p-6 sm:p-8 hover:glow-blue transition-all duration-500 border border-white/[0.04] hover:border-electric-blue/20 cursor-default"
              >
                <div className="w-10 h-10 rounded-xl bg-electric-blue/10 flex items-center justify-center mb-6 group-hover:bg-electric-blue/20 transition-colors duration-300">
                  <Activity className="w-5 h-5 text-electric-blue" />
                </div>
                <h3 className="text-lg sm:text-xl font-[family-name:var(--font-space)] font-bold text-white mb-3">
                  {point.title}
                </h3>
                <p className="text-soft-gray text-sm leading-relaxed">
                  {point.desc}
                </p>
              </div>
            ))}
          </div>
        </div>

        {/* E-E-A-T Framework */}
        <div className="mb-16 sm:mb-24">
          <div className="mb-10">
            <span className="inline-flex items-center gap-1.5 text-xs font-semibold text-electric-blue uppercase tracking-widest px-3 py-1 rounded-full border border-electric-blue/20 bg-electric-blue/5 mb-4">
              <ShieldCheck className="h-3.5 w-3.5" /> Medical Trust
            </span>
            <h2 className="text-2xl sm:text-3xl font-[family-name:var(--font-space)] font-bold mt-3">
              Google E-E-A-T Schema Validations
            </h2>
            <p className="text-soft-gray text-sm sm:text-base mt-2">
              How BAE structures technical schemas to prove your clinical authority to search crawlers.
            </p>
          </div>

          <div className="grid md:grid-cols-3 gap-6">
            {data.eeatCredentials.map((cred, idx) => (
              <div
                key={idx}
                className="group glass rounded-xl sm:rounded-2xl p-6 sm:p-8 hover:glow-blue transition-all duration-500 border border-white/[0.04] hover:border-electric-blue/20 cursor-default"
              >
                <div className="w-10 h-10 rounded-xl bg-electric-blue/10 flex items-center justify-center mb-6 group-hover:bg-electric-blue/20 transition-colors duration-300">
                  <BadgeCheck className="w-5 h-5 text-electric-blue" />
                </div>
                <h3 className="text-base sm:text-lg font-[family-name:var(--font-space)] font-bold text-white mb-2">
                  {cred.label}
                </h3>
                <p className="text-soft-gray text-sm leading-relaxed">
                  {cred.detail}
                </p>
              </div>
            ))}
          </div>
        </div>

        {/* Methodology */}
        <div className="relative overflow-hidden rounded-2xl border border-white/[0.04] glass p-8 sm:p-10 mb-16 sm:mb-24">
          <div className="absolute top-0 right-0 w-32 h-32 bg-electric-blue/5 rounded-bl-full blur-xl pointer-events-none" />
          <div className="max-w-3xl relative z-10">
            <div className="flex items-center gap-3 mb-6">
              <div className="w-10 h-10 rounded-xl bg-electric-blue/10 flex items-center justify-center">
                <BookOpen className="h-5 w-5 text-electric-blue" />
              </div>
              <h3 className="text-lg sm:text-xl font-[family-name:var(--font-space)] font-bold text-white">
                How We Execute: Clinic Optimization Process
              </h3>
            </div>
            <p className="text-soft-gray leading-relaxed text-sm sm:text-base mb-6">
              {data.methodology}
            </p>
            <div className="flex items-start gap-3 pt-4 border-t border-white/[0.04]">
              <ShieldCheck className="h-5 w-5 text-electric-blue flex-shrink-0 mt-0.5" />
              <p className="text-soft-gray text-xs sm:text-sm leading-relaxed">
                <strong className="text-white">Strict Compliance Check:</strong> We audit all content against Ministry of Health regulations. BAE never utilizes comparative claims that threaten your medical licensing in Bahrain.
              </p>
            </div>
          </div>
        </div>

        {/* Editorial Framework */}
        <div className="relative overflow-hidden rounded-2xl border border-white/[0.04] glass p-8 sm:p-10 mb-16 sm:mb-24">
          <div className="max-w-3xl">
            <div className="flex items-center gap-3 mb-6">
              <div className="w-10 h-10 rounded-xl bg-electric-blue/10 flex items-center justify-center">
                <ShieldCheck className="h-5 w-5 text-electric-blue" />
              </div>
              <h3 className="text-lg sm:text-xl font-[family-name:var(--font-space)] font-bold text-white">
                B2B Silo Compliance & Patient Acquisition Framework
              </h3>
            </div>
            <p className="text-soft-gray leading-relaxed text-sm sm:text-base">
              {data.description}
            </p>
          </div>
        </div>

        {/* FAQs */}
        <div className="max-w-3xl mb-16 sm:mb-24">
          <div className="flex items-center gap-3 mb-8 sm:mb-10">
            <div className="w-10 h-10 rounded-xl bg-electric-blue/10 flex items-center justify-center">
              <HelpCircle className="h-5 w-5 text-electric-blue" />
            </div>
            <h2 className="text-xl sm:text-3xl font-[family-name:var(--font-space)] font-bold">
              Frequently Asked Questions (Clinic Owner FAQ)
            </h2>
          </div>

          <div className="space-y-4">
            {data.faqs.map((faq, idx) => (
              <div
                key={idx}
                className="glass rounded-xl p-5 sm:p-6 border border-white/[0.04] hover:border-electric-blue/10 transition-colors"
              >
                <h4 className="text-sm sm:text-base font-bold text-white mb-2 flex items-start gap-2">
                  <Sparkles className="h-4 w-4 text-electric-blue flex-shrink-0 mt-0.5" />
                  {faq.q}
                </h4>
                <p className="text-soft-gray text-xs sm:text-sm leading-relaxed border-t border-white/[0.04] pt-3 mt-3 ml-6">
                  {faq.a}
                </p>
              </div>
            ))}
          </div>
        </div>

        {/* Bottom B2B CTA */}
        <div className="glass rounded-2xl sm:rounded-3xl p-8 sm:p-12 border border-white/[0.04] text-center">
          <h2 className="text-2xl sm:text-3xl font-[family-name:var(--font-space)] font-bold mb-4">
            Ready to Dominate <span className="gradient-text">{data.title.split(" ")[0]} Search?</span>
          </h2>
          <p className="text-soft-gray text-sm sm:text-base max-w-xl mx-auto mb-8">
            Book a free 30-minute patient acquisition strategy call. We will show you exactly how BAE will scale your clinic bookings.
          </p>
          <div className="flex flex-col sm:flex-row items-center justify-center gap-3">
            <Link
              href="/#contact"
              className="group inline-flex items-center gap-2 px-8 py-4 bg-electric-blue hover:bg-electric-blue-dark text-white font-bold rounded-full transition-all duration-300 hover:shadow-[0_0_30px_rgba(59,130,246,0.4)] text-sm sm:text-base"
            >
              Book Acquisition Call
              <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
            </Link>
            <Link
              href="/#contact"
              className="group inline-flex items-center gap-2 px-8 py-4 border border-white/10 hover:border-electric-blue/50 text-white font-semibold rounded-full transition-all duration-300 hover:bg-white/[0.03] text-sm sm:text-base"
            >
              <FileSearch className="w-4 h-4 text-electric-blue" />
              Request Free Patient Audit
            </Link>
          </div>
        </div>
      </div>

      {/* Shared Footer */}
      <Footer />

      {/* FAQPage Schema */}
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify({
            "@context": "https://schema.org",
            "@type": "FAQPage",
            "mainEntity": data.faqs.map((faq) => ({
              "@type": "Question",
              "name": faq.q,
              "acceptedAnswer": {
                "@type": "Answer",
                "text": faq.a
              }
            }))
          })
        }}
      />
    </div>
  );
}
