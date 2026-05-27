import React from "react";
import Link from "next/link";
import { notFound } from "next/navigation";
import AISummaryBox from "@/components/AISummaryBox";
import LocalBusinessSchema from "@/components/LocalBusinessSchema";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import { 
  Stethoscope, Scale, Utensils, ShoppingBag, 
  ArrowLeft, ArrowRight, CheckCircle2, Zap, TrendingUp, 
  ShieldCheck, HelpCircle, Activity, Award, BookOpen, Users,
  BadgeCheck, FileSearch, Sparkles, Target,
  Briefcase, HardHat, Package, Home, GraduationCap, Car,
  Smile, Flame
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
  eeatCredentials: { label: string; detail: string }[];
  methodology: string;
  relatedLocations: { label: string; href: string }[];
  relatedIndustries: { label: string; href: string }[];
}

const industryRegistry: Record<string, IndustryData> = {
  healthcare: {
    title: "Healthcare SEO & Patient Acquisition Systems",
    metaTitle: "Healthcare SEO Agency Bahrain | Medical Clinic Lead Systems",
    metaDesc: "Get more patients for your clinic or hospital in Bahrain. NHRA-compliant SEO, Local Map Pack domination, and search rankings built for conversions.",
    icon: <Stethoscope className="h-10 w-10 text-electric-blue-light" />,
    subtitle: "Dominate local medical search in 90 days. We align your clinic's digital presence with Google's strict YMYL E-E-A-T criteria and NHRA regulations.",
    summary: "Bypass expensive $15,000/month Google Ad bidding wars. We build structured local search assets that rank your specialists #1 on Google Maps and inside AI Overviews for high-value patient intent queries.",
    highlights: [
      "Strict NHRA Advertisement Guidelines (Decree 38/2015) compliance",
      "Dynamic Physician & MedicalClinic JSON-LD schema integrations",
      "Google Maps Local 3-Pack domination for neighborhood terms",
      "Insurance networks optimization (Solidarity, GIG Gulf, MedNet, Health360)"
    ],
    description: "In healthcare, being found first means being chosen. Patients do not browse page two when seeking urgent medical care. We structure clinical service pages, doctor profile schemas, and local maps velocity pipelines so your clinic ranks for high-intent search terms (e.g. 'lady gynecologist Seef' or 'dentist near me'). All setups are NHRA-compliant and optimized for Google's YMYL search standards.",
    schemaType: "MedicalClinic",
    locality: "Seef Medical District, Manama",
    latitude: 26.2361,
    longitude: 50.5479,
    painPoints: [
      { title: "Bypassing Ad Bidding Wars", desc: "Organic map pack positioning that captures patient intent without paying high cost-per-click fees on ads." },
      { title: "NHRA Copywriting Audits", desc: "Writing highly persuasive copy that respects Bahrain Health Authority guidelines while maintaining conversion power." },
      { title: "Lady Doctor Visibility", desc: "Optimizing search listings for gender-specific queries, a critical cultural filter for patients in the Gulf." }
    ],
    faqs: [
      { q: "How does NHRA compliance work with BAE SEO systems?", a: "We audit and structure your clinical content under Bahrain's National Health Regulatory Authority advertising guidelines. We showcase factual clinical certifications and patient outcomes without making illegal comparative claims." },
      { q: "What is the timeline for ranking our private medical center?", a: "You will see initial Local 3-Pack maps movement within 30 to 45 days. Complete dominance for competitive specialty queries (e.g., orthopedic or cosmetic dermatology) takes 90 days." },
      { q: "How do you target insured patients in Bahrain?", a: "We build dedicated content silos and schema markups identifying the insurance providers you accept (e.g., Solidarity, GIG, MedNet, NextCare), capturing searchers filtering by insurance coverage." },
      { q: "Do you optimize individual doctor profiles?", a: "Yes. Every doctor gets custom Physician schema containing their university degrees, board certifications, NHRA license number, and languages spoken, verifying their authority to search engines." }
    ],
    eeatCredentials: [
      { label: "NHRA Compliant Review", detail: "All medical copywriting is audited against Ministry of Health and NHRA advertising decree guidelines to protect your license." },
      { label: "Board Certified Schema", detail: "Doctor profiles are marked up with verified credentials, board associations, and licensing details for Google YMYL validation." },
      { label: "GCC Payer-Mix Alignment", detail: "Content is structured around insurer listings and medical specializations to drive pre-qualified patient conversions." }
    ],
    methodology: "Our healthcare methodology: (1) Deploying NHRA-compliant local content frameworks, (2) Implementing MedicalClinic and Physician schema markup to prove clinical authority to Google, (3) Optimizing Google Business Profiles for Local 3-Pack ranking, and (4) Automating post-appointment review velocity to build trust. Every step is designed to drive direct patient bookings via phone and WhatsApp.",
    relatedLocations: [
      { label: "SEO Seef", href: "/locations/seo-seef" },
      { label: "SEO Manama", href: "/locations/seo-manama" },
      { label: "SEO Riffa", href: "/locations/seo-riffa" },
      { label: "SEO Muharraq", href: "/locations/seo-muharraq" }
    ],
    relatedIndustries: [
      { label: "Legal Firm SEO", href: "/industries/legal" },
      { label: "E-commerce SEO", href: "/industries/ecommerce" }
    ]
  },
  legal: {
    title: "Legal Firm SEO & Client Acquisition",
    metaTitle: "SEO for Law Firms in Bahrain | Legal Marketing - BAE",
    metaDesc: "Rank #1 for high-value transactional legal search queries. Dominate local search, corporate law, and commercial legal queries in Manama, Seef, and Riffa.",
    icon: <Scale className="h-10 w-10 text-electric-blue-light" />,
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
      { q: "How long does it take for a legal website to outrank aggregates?", a: "Typically between 3 to 6 months. With our custom Next.js stack, clean indexation, and target authority schemas, we bypass bulky directory sites quickly." },
      { q: "Do you handle legal content writing?", a: "We produce legal-grade educational content covering practice areas, case study frameworks, and jurisdictional guides. All content is structured to satisfy E-E-A-T requirements for YMYL legal topics." },
      { q: "Can you optimize for Arabic legal search terms?", a: "Yes. We build dedicated Arabic practice area pages with proper hreflang tags, targeting GCC nationals searching for legal representation in their native language." }
    ],
    eeatCredentials: [
      { label: "YMYL Legal Compliance", detail: "All legal content follows Google's Your Money or Your Life quality guidelines, with proper disclaimers and jurisdiction disclosures." },
      { label: "Attorney Credential Verification", detail: "Lawyer profiles include bar association memberships, law chamber registrations, and academic credentials in structured markup." },
      { label: "Case Study Documentation", detail: "We structure anonymized case outcomes and practice area expertise to demonstrate real-world legal experience to search engines." }
    ],
    methodology: "Our legal SEO methodology: (1) Practice area keyword mapping with CPC and intent analysis, (2) Attorney profile schema deployment with credential verification, (3) Content silo architecture for each practice area (litigation, arbitration, IP, corporate), and (4) Digital PR and citation building across GCC legal directories. All content includes proper legal disclaimers and jurisdiction notices.",
    relatedLocations: [
      { label: "SEO Manama", href: "/locations/seo-manama" },
      { label: "SEO Seef", href: "/locations/seo-seef" }
    ],
    relatedIndustries: [
      { label: "Healthcare SEO", href: "/industries/healthcare" },
      { label: "F&B Local SEO", href: "/industries/food-and-beverage" }
    ]
  },
  "food-and-beverage": {
    title: "F&B Local SEO & Maps Domination",
    metaTitle: "F&B Local SEO Services Bahrain | Restaurant Maps Optimization - BAE",
    metaDesc: "Increase restaurant walk-ins and orders in Bahrain. Optimize for local maps, reviews velocity, search intent, and food aggregator authority.",
    icon: <Utensils className="h-10 w-10 text-electric-blue-light" />,
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
      { q: "How do map reviews affect our ranking?", a: "Google Map algorithms prioritize reviews containing specific local keywords, rapid reply rates, and steady review velocity. We automate this system for you." },
      { q: "Can you optimize multiple restaurant branches?", a: "Absolutely. We create individual Google Business Profiles for each branch with unique coordinates, area-specific keywords, and independent review pipelines to avoid cannibalizing your own listings." },
      { q: "Do you handle food photography for listings?", a: "While we don't provide photography services, we optimize your existing visual assets for Google Business Profiles, implement image schema markup, and provide guidelines for photography that performs well in local search." }
    ],
    eeatCredentials: [
      { label: "Local Market Expertise", detail: "Deep understanding of Bahrain's dining landscape including Block 338, Adliya, Juffair, and Seef dining corridors." },
      { label: "Platform Verified Systems", detail: "Our review velocity and NAP consistency processes follow Google Business Profile guidelines and avoid policy violations." },
      { label: "Measurable Outcomes", detail: "All campaigns are tracked with transparent map rank tracking, call tracking, and direction-request analytics." }
    ],
    methodology: "Our F&B methodology: (1) Multi-branch Google Business Profile audit and NAP consistency mapping, (2) FoodEstablishment and Menu schema injection with structured pricing data, (3) Review velocity engineering with automated request sequences, and (4) Local content creation targeting neighborhood-specific dining queries. We track map pack positions, direction requests, and phone calls weekly.",
    relatedLocations: [
      { label: "SEO Riffa", href: "/locations/seo-riffa" },
      { label: "SEO Muharraq", href: "/locations/seo-muharraq" }
    ],
    relatedIndustries: [
      { label: "E-commerce SEO", href: "/industries/ecommerce" },
      { label: "Healthcare SEO", href: "/industries/healthcare" }
    ]
  },
  ecommerce: {
    title: "Enterprise E-commerce SEO Systems",
    metaTitle: "E-commerce SEO Agency Bahrain | GCC Ecom Scaling - BAE",
    metaDesc: "Scale your e-commerce organic revenue. Multilingual Arabic-English catalog architecture, product schema integrations, and search engine scaling.",
    icon: <ShoppingBag className="h-10 w-10 text-electric-blue-light" />,
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
      { q: "Can you optimize our feed for Google Merchant Center?", a: "Yes. We align your product schema structure directly with Merchant Center requirements to unlock free organic product listings." },
      { q: "Do you work with specific e-commerce platforms?", a: "We work with all major platforms including Shopify, WooCommerce, Magento, and custom headless solutions. Our schema injection systems are platform-agnostic and integrate via API or tag manager." },
      { q: "How do you handle regional pricing differences?", a: "We configure hreflang and regional meta tags to serve the correct currency and pricing to searchers in Bahrain, Saudi Arabia, and the UAE, preventing confusion and improving conversion rates." }
    ],
    eeatCredentials: [
      { label: "Technical SEO Expertise", detail: "Our engineering team specializes in crawl budget optimization, JavaScript rendering, and headless CMS integrations for large-scale catalogs." },
      { label: "Platform Certifications", detail: "Experience with Shopify Plus, WooCommerce, Magento 2, and custom Next.js commerce architectures across GCC retail brands." },
      { label: "Revenue Attribution", detail: "All e-commerce campaigns include transparent revenue tracking tied to organic search, with monthly ROI reporting." }
    ],
    methodology: "Our e-commerce methodology: (1) Technical crawl audit identifying indexation waste, duplicate content, and rendering issues, (2) Product and Offer schema deployment for rich snippet eligibility, (3) Multilingual category silo architecture with hreflang configuration, and (4) Google Merchant Center feed alignment and free listing optimization. We measure success by organic revenue attribution, not just traffic.",
    relatedLocations: [
      { label: "SEO Manama", href: "/locations/seo-manama" },
      { label: "SEO Muharraq", href: "/locations/seo-muharraq" }
    ],
    relatedIndustries: [
      { label: "F&B Local SEO", href: "/industries/food-and-beverage" },
      { label: "Legal Firm SEO", href: "/industries/legal" }
    ]
  },
  "company-formation": {
    title: "Company Formation & Business Setup SEO",
    metaTitle: "Company Formation SEO Agency Bahrain | Business Setup Marketing",
    metaDesc: "Dominate search for company registration and business setup services in Bahrain. Attract international clients via Sijilat and MOIC search optimization.",
    icon: <Briefcase className="h-10 w-10 text-electric-blue-light" />,
    subtitle: "E-E-A-T search frameworks for corporate service providers and business formation agents in Bahrain.",
    summary: "Attract international founders looking to establish businesses in Bahrain. Tailored Sijilat & MOIC compliance systems, target foreign investor intent, and local SEO structure. Proof-of-concept: Bahrain Agent achieved #1 rankings and international business setup leads within 90 days.",
    highlights: [
      "Targeting high-value international queries (e.g. 'how to start a business in Bahrain')",
      "Sijilat portal registry & MOIC compliance alignment",
      "Dynamic LocalBusiness schema with precise coordinate mapping",
      "Bilingual structures optimized for international & GCC investors"
    ],
    description: "Company formation search queries in Bahrain carry massive transaction value. Global entrepreneurs search for licensing, corporate registries, and Tamkeen grants. BAE structures legal-grade insights and regulatory pages that answer complex compliance questions, forcing search engine algorithms to categorize your brand as the leading authority.",
    schemaType: "ProfessionalService",
    locality: "Bahrain World Trade Center, Manama",
    latitude: 26.2402,
    longitude: 50.5828,
    painPoints: [
      { title: "Sijilat Portal Queries", desc: "Optimizing content to capture searchers seeking Sijilat system registration, commercial registration (CR), and activity codes." },
      { title: "Tamkeen Grant Searches", desc: "Structuring pages that capture business owners researching Tamkeen enterprise growth programs and business financing." },
      { title: "B2B Lead Funnels", desc: "Optimizing conversion pathways for corporate services, virtual offices, and legal representation searches." }
    ],
    faqs: [
      { q: "Can a foreigner own 100% of a company in Bahrain?", a: "Yes, Bahrain allows 100% foreign ownership in most business sectors. We structure informational SEO hubs explaining these ownership rules and commercial activity codes to attract global founders." },
      { q: "What is the Sijilat system?", a: "Sijilat is the online commercial registration portal by the Ministry of Industry and Commerce (MOIC). We optimize search content specifically around Sijilat procedures to capture active setup queries." },
      { q: "How long does company registration take in Bahrain?", a: "It typically takes 5 to 14 business days depending on activity approvals. Providing clear, search-optimized timelines on your website captures high-intent prospects." },
      { q: "How does BAE attract international clients in 90 days?", a: "Our proprietary BAE system targets high-CPC search terms used by international investors planning GCC expansion, driving pre-qualified B2B leads to your team within 90 days." }
    ],
    eeatCredentials: [
      { label: "Ministry Guidelines Compliant", detail: "All business setup content is mapped directly against the latest MOIC regulations and Sijilat registration guidelines." },
      { label: "Bahrain Agent Case Proof", detail: "Validated system performance with Bahrain Agent: ranking #1 for core investment and company formation terms." },
      { label: "Bilingual GCC Authorities", detail: "Content is structured by native English and Arabic legal-business copywriters to ensure maximum authority." }
    ],
    methodology: "Our business setup methodology: (1) Sijilat activity-code keyword mapping and commercial intent profiling, (2) Setup process guides and FAQ page schema injection, (3) Localization for expat searchers in Europe, Asia, and other GCC countries, and (4) Link building with trusted international business directories. We verify rank growth for transactional search queries weekly.",
    relatedLocations: [
      { label: "SEO Manama", href: "/locations/seo-manama" },
      { label: "SEO Seef", href: "/locations/seo-seef" }
    ],
    relatedIndustries: [
      { label: "Legal Firm SEO", href: "/industries/legal" },
      { label: "Engineering SEO", href: "/industries/engineering" }
    ]
  },
  engineering: {
    title: "Engineering & Construction SEO",
    metaTitle: "SEO for Engineering & Contracting Companies Bahrain - BAE",
    metaDesc: "Rank your contracting or engineering firm for B2B procurement queries in Bahrain. Secure visibility for major infrastructure and Vision 2030 tenders.",
    icon: <HardHat className="h-10 w-10 text-electric-blue-light" />,
    subtitle: "B2B procurement visibility and search engine systems for contracting firms, builders, and developers.",
    summary: "Dominate high-value industrial and construction search queries in Bahrain. We build structured project portfolio silos, ISO compliance validation blocks, and localized search visibility for B2B contracting. Case study: NEC.",
    highlights: [
      "Topical authority structures for engineering and project delivery",
      "Project-portfolio schema mapping with location geocodes",
      "Attracting corporate and government tender decision-makers",
      "Case study tie-in: NEC contracting search acceleration"
    ],
    description: "B2B procurement in the GCC is increasingly research-driven. Prior to sending RFPs or invitations to tender, developers and government entities search for qualified local partners. BAE ensures your contracting firm ranks for regional capabilities, joint venture searches, and project qualifications.",
    schemaType: "ProfessionalService",
    locality: "Hidd Industrial Area",
    latitude: 26.2234,
    longitude: 50.6412,
    painPoints: [
      { title: "B2B Tender Discovery", desc: "Structuring pages around specific construction capabilities and engineering disciplines to capture pre-tender research." },
      { title: "Project Portfolio Indexing", desc: "Coding custom project galleries with rich schema so search bots crawl and understand your project history." },
      { title: "Top-Tier Certifications", desc: "Highlighting ISO certifications, safety records, and CREP grades in Google-readable structured data." }
    ],
    faqs: [
      { q: "How does SEO help B2B engineering firms?", a: "SEO ensures that when developers, investors, or government agencies search for specialized engineering capabilities (e.g., 'civil contracting Hidd' or 'industrial piping Bahrain'), your company is positioned first." },
      { q: "What schema is best for contracting companies?", a: "We use a combination of ProfessionalService, Project, and Location schemas to detail your offices, project locations, and structural disciplines directly to search engines." },
      { q: "Can BAE rank our firm for GCC-wide tenders?", a: "Yes. We configure multi-country subfolders and target B2B search terms that regional procurement managers use when seeking contracting partners in Bahrain." },
      { q: "Do you optimize individual project portfolios?", a: "Yes. Every major project is structured as a separate sub-page with coordinates, construction type, client name, and safety stats, building deep topical authority." }
    ],
    eeatCredentials: [
      { label: "ISO & Safety Standardized", detail: "All content structures explicitly detail ISO certifications, HSE policies, and safety metrics for search engine validation." },
      { label: "B2B Procurement Aligned", detail: "We design information architectures that cater directly to corporate procurement managers and engineering directors." },
      { label: "NEC Client Validated", detail: "Built on operational insights from optimizing top industrial and contracting brands like NEC." }
    ],
    methodology: "Our engineering SEO methodology: (1) Technical audit of heavy-industry portfolio rendering, (2) Structuring capability siloing for specific contracting disciplines, (3) Local schema mapping for completed construction sites, and (4) Corporate profile optimization to pass due-diligence crawler checks. We measure rankings on key B2B qualification terms monthly.",
    relatedLocations: [
      { label: "SEO Muharraq", href: "/locations/seo-muharraq" },
      { label: "SEO Manama", href: "/locations/seo-manama" }
    ],
    relatedIndustries: [
      { label: "Company Formation SEO", href: "/industries/company-formation" },
      { label: "Retail & Distribution SEO", href: "/industries/retail-distribution" }
    ]
  },
  "retail-distribution": {
    title: "Retail & FMCG Distribution SEO",
    metaTitle: "Retail & Distribution SEO Agency Bahrain | FMCG B2B Marketing",
    metaDesc: "Rank your wholesale distribution or retail brand for high-volume product category queries in Bahrain. Secure shelf placement and supplier visibility.",
    icon: <Package className="h-10 w-10 text-electric-blue-light" />,
    subtitle: "Topical search silos and category-level SEO for FMCG distributors and multi-brand retailers.",
    summary: "Dominate search query results for FMCG, retail distribution, and wholesale supply in Bahrain. Optimized product-category schema, distributor listing optimization, and B2B buyer targeting. Case study client: Yasmico.",
    highlights: [
      "Product category authority siloing for B2B supply chains",
      "Dynamic OfferCatalog and Warehouse schema integrations",
      "Review management pipelines for retail branch networks",
      "Competitor target optimization against large regional distributors"
    ],
    description: "Wholesale retail and FMCG distribution is a high-volume, relationship-driven market in Bahrain. Search engines index product category pages and supplier locations. BAE structures distributor websites so that when retailers look for brands or suppliers, your catalog ranks first.",
    schemaType: "LocalBusiness",
    locality: "Mina Salman Port, Manama",
    latitude: 26.2089,
    longitude: 50.6033,
    painPoints: [
      { title: "Multi-Brand Catalog SEO", desc: "Ensuring individual partner brands and product category hierarchies rank independently on search engines." },
      { title: "Wholesale Buyer Capture", desc: "Targeting terms used by commercial buyers, supermarkets, and hospitality procurement specialists." },
      { title: "Supply Chain Schema", desc: "Deploying schema markup to tell search engines about distribution rights, brands represented, and warehouse locations." }
    ],
    faqs: [
      { q: "How do you optimize a multi-brand distribution catalog?", a: "We structure brand landing hubs and product category pages with proper semantic HTML and canonical configurations to prevent indexation clutter while dominating parent-category searches." },
      { q: "What is OfferCatalog schema?", a: "It is a search-bot markup system that registers the collection of services or goods your distribution company offers, linking them directly to your business identity." },
      { q: "Can retail SEO increase local walk-ins to branches?", a: "Yes. By optimizing Google Business Profiles and local branch directories, we drive foot traffic to retail outlets across Muharraq, Manama, and Riffa." },
      { q: "Do you write wholesale buyer content?", a: "We write supply chain guides, logistics documentation, and product catalog descriptions that establish your brand as a reliable supply partner." }
    ],
    eeatCredentials: [
      { label: "Supply Chain Verified", detail: "Content is structured to reflect distribution compliance, warehouse capacity, and brand partnership legitimacy." },
      { label: "Yasmico Case Verified", detail: "Optimized using insights from distribution leaders like Yasmico to dominate regional wholesale category searches." },
      { label: "GCC Directory Trusted", detail: "We synchronize local listings and trade citations across verified GCC business directories." }
    ],
    methodology: "Our retail-distribution SEO methodology: (1) Catalog crawl-depth audit and faceted navigation optimization, (2) Brand representation schema deployment, (3) B2B search intent categorization (retailers vs end-users), and (4) Citation sync across import/export portals. We track catalog keyword impressions weekly.",
    relatedLocations: [
      { label: "SEO Muharraq", href: "/locations/seo-muharraq" },
      { label: "SEO Riffa", href: "/locations/seo-riffa" }
    ],
    relatedIndustries: [
      { label: "E-commerce SEO", href: "/industries/ecommerce" },
      { label: "Engineering SEO", href: "/industries/engineering" }
    ]
  },
  "real-estate": {
    title: "Real Estate & Property Development SEO",
    metaTitle: "Real Estate SEO Agency Bahrain | Property Developer Marketing",
    metaDesc: "Rank your real estate agency or property development firm in Bahrain. RERA-compliant local SEO, luxury villa keywords, and off-plan project visibility.",
    icon: <Home className="h-10 w-10 text-electric-blue-light" />,
    subtitle: "RERA-compliant property silos and local search systems for luxury brokerages, property developers, and villa projects.",
    summary: "Scale organic lead generation for luxury properties and developments in Bahrain. RERA compliance mapping, local area search term targeting (Amwaj, Dilmunia, Seef), and structured RealEstateAgent schema.",
    highlights: [
      "RERA advertising license and compliance mapping",
      "Subfolder architecture for luxury locations & property types",
      "Dynamic RealEstateAgent JSON-LD schema integrations",
      "Capturing international investors searching for Bahrain freehold property"
    ],
    description: "Real estate search results in Bahrain are heavily dominated by massive aggregators. BAE helps boutique agencies and developers bypass these platforms by targeting hyper-local neighborhood keywords, RERA license numbers, and off-plan project names where organic buyers search directly.",
    schemaType: "ProfessionalService",
    locality: "Amwaj Islands",
    latitude: 26.2798,
    longitude: 50.6679,
    painPoints: [
      { title: "Aggregator Competition", desc: "Deploying high-intent long-tail keywords to bypass aggregator directories for premium area searches." },
      { title: "RERA Compliance Rules", desc: "Structuring property listings and agent bios to satisfy RERA guidelines without sacrificing conversion elements." },
      { title: "Off-Plan Project Hype", desc: "Creating dedicated project hubs that rank for development names prior to completion." }
    ],
    faqs: [
      { q: "How do we compete with large property directories?", a: "We target highly specific local queries (e.g. '3 bedroom villa with pool Amwaj') and structure rich landing pages that aggregators cannot match for quality and depth." },
      { q: "What is RealEstateAgent schema?", a: "It tells Google exactly which properties you represent, your license number, coordinates, and reviews, allowing your listing to rank higher in local packs." },
      { q: "Do you optimize bilingual property listings?", a: "Yes. Both Arabic and English listings are structured with hreflang tags to capture expat buyers and local GCC investors." },
      { q: "How does RERA affect our SEO strategy?", a: "We ensure all property descriptions display mandatory RERA advertising license numbers in indexable text to protect compliance while ranking." }
    ],
    eeatCredentials: [
      { label: "RERA Regulation Compliant", detail: "All property content structures adhere strictly to the guidelines set by the Real Estate Regulatory Authority of Bahrain." },
      { label: "Hyper-Local Geographic Silos", detail: "Custom mapping footprints for high-value areas like Seef, Amwaj Islands, Dilmunia, and Riffa Views." },
      { label: "RICS/IVS Standards Aligned", detail: "Content highlights professional valuation standards to establish maximum authority." }
    ],
    methodology: "Our real estate SEO methodology: (1) Neighborhood search volume audits and buyer persona mapping, (2) RealEstateAgent schema deployment with agent license tracking, (3) Sub-page silos for property categories (rent vs buy, luxury vs commercial), and (4) Digital PR around new project launches. We track inbound phone calls and WhatsApp enquiries weekly.",
    relatedLocations: [
      { label: "SEO Seef", href: "/locations/seo-seef" },
      { label: "SEO Riffa", href: "/locations/seo-riffa" }
    ],
    relatedIndustries: [
      { label: "Legal Firm SEO", href: "/industries/legal" },
      { label: "Company Formation SEO", href: "/industries/company-formation" }
    ]
  },
  education: {
    title: "Education & Training Institute SEO",
    metaTitle: "Education SEO Services Bahrain | Private School & University Marketing",
    metaDesc: "Rank your school, university, or training center in Bahrain. BQA-compliant local SEO, program-specific search optimization, and admissions lead generation.",
    icon: <GraduationCap className="h-10 w-10 text-electric-blue-light" />,
    subtitle: "BQA-compliant academic search engines and admissions-focused local search visibility for Bahrain's educational institutions.",
    summary: "Attract students and professionals to your institution. Optimize for admissions queries, BQA accreditation standards, and NQF qualifications framework. Dynamic EducationalOrganization schema integrations.",
    highlights: [
      "BQA rating & NQF framework alignment markup",
      "Course & program-specific keyword optimization hubs",
      "Admissions page conversion & organic visibility mapping",
      "Structured School & Course schemas for rich snippets"
    ],
    description: "Parents and students in Bahrain heavily research private schools and universities online. BAE designs custom search strategies that prioritize admissions timelines, accreditation verification, and curriculum details to capture high-intent enrollment search traffic.",
    schemaType: "ProfessionalService",
    locality: "Isa Town",
    latitude: 26.1736,
    longitude: 50.5478,
    painPoints: [
      { title: "Admissions Lead Pipelines", desc: "Designing programmatic pages around admission deadlines and tuition fee keywords to capture parental searches." },
      { title: "Accreditation Authority", desc: "Highlighting BQA ratings and international curriculum affiliations in a structured format." },
      { title: "Course-Specific Rankings", desc: "Structuring academic program catalogs so each degree or professional certification ranks for target search terms." }
    ],
    faqs: [
      { q: "How does BQA accreditation affect our search ranking?", a: "Google uses E-E-A-T signals to evaluate educational content. Displaying and marking up your BQA rating verifies your academic quality to search crawlers." },
      { q: "What is Course schema?", a: "It is a specialized schema markup that displays your program details, duration, and degree credentials directly on search result pages, driving higher CTRs." },
      { q: "Can BAE help rank our professional training center?", a: "Yes. We optimize corporate training and certification keywords (e.g. 'PMP course Bahrain') to drive corporate and individual enrollments." },
      { q: "How do you optimize school directory listings?", a: "We claim and audit your presence across national school directories and maps, ensuring consistent contact info and driving parent review acquisition." }
    ],
    eeatCredentials: [
      { label: "BQA & HEC Aligned", detail: "Content is structured to highlight Ministry-approved accreditations and National Qualifications Framework data." },
      { label: "Academic Authority Mapping", detail: "We index faculty credentials, research outputs, and student success data as core authority proof." },
      { label: "Parental Intent Optimized", detail: "Pages are built around actual query structures parents use when evaluating curriculums in Bahrain." }
    ],
    methodology: "Our education SEO methodology: (1) Program curriculum keyword audit and competitor admission analysis, (2) School/Course JSON-LD schema implementation, (3) Parent-intent information architecture (fees, curriculum, admissions), and (4) Citation optimization across academic portals. We monitor admissions page visibility and conversions monthly.",
    relatedLocations: [
      { label: "SEO Riffa", href: "/locations/seo-riffa" },
      { label: "SEO Muharraq", href: "/locations/seo-muharraq" }
    ],
    relatedIndustries: [
      { label: "Healthcare SEO", href: "/industries/healthcare" },
      { label: "Legal Firm SEO", href: "/industries/legal" }
    ]
  },
  automotive: {
    title: "Automotive SEO & Car Dealership Systems",
    metaTitle: "Automotive SEO Agency Bahrain | Car Dealership Local Search",
    metaDesc: "Dominate search rankings for luxury car dealerships and automotive services in Bahrain. Optimize local search, EV terms, and service center bookings.",
    icon: <Car className="h-10 w-10 text-electric-blue-light" />,
    subtitle: "Showroom-to-digital local search systems and inventory optimization for automotive brands and dealer networks.",
    summary: "Drive showroom traffic and service bookings. Local map pack ranking optimization, certified pre-owned program keyword structures, and AutoDealer schema integrations.",
    highlights: [
      "AutoDealer and AutoRepair JSON-LD schema deployment",
      "Service center keyword optimization (e.g. 'luxury car service Manama')",
      "Review velocity setups for multi-branch showrooms",
      "Targeting high-value EV and certified pre-owned queries"
    ],
    description: "Car buyers and vehicle owners in Bahrain rely on search engines for dealership locations, service bookings, and vehicle models. BAE structures dealer websites to display real-time inventory schemas, localized service options, and manufacturer certifications to outrank third-party classified sites.",
    schemaType: "LocalBusiness",
    locality: "Sitra Industrial Area",
    latitude: 26.1558,
    longitude: 50.6089,
    painPoints: [
      { title: "Service Center Bookings", desc: "Capturing search traffic for maintenance, detailing, and spare parts queries to drive recurring service revenue." },
      { title: "Aggregator Competition", desc: "Outranking local car listing directories for specific brand and model search terms." },
      { title: "Showroom Map Rankings", desc: "Ensuring all regional showroom branches rank #1 in Google Maps Local Pack for brand queries." }
    ],
    faqs: [
      { q: "How do we compete with car aggregator websites?", a: "By targeting highly specific local queries (e.g. 'luxury car service Sitra') and structure rich landing pages that aggregator sites lack." },
      { q: "What is AutoDealer schema?", a: "It is structured data code specifying your vehicle brands, showroom coordinates, contact details, and open hours, enabling rich snippet displays on Google." },
      { q: "Can BAE help optimize our service center separately?", a: "Yes. We create separate local silos and AutoRepair schemas for your service centers to drive direct appointment bookings." },
      { q: "How do you target electric vehicle (EV) buyers?", a: "We build dedicated content hubs explaining EV charging networks in Bahrain, import regulations, and model specs to capture early-adopter search trends." }
    ],
    eeatCredentials: [
      { label: "Manufacturer Certified", detail: "Content is structured to showcase official dealership credentials, certified technicians, and genuine parts." },
      { label: "Sitra Hub Geolocated", detail: "Optimized geographic footprints targeting Sitra's prominent automotive corridor." },
      { label: "Transparent Inventory Schema", detail: "Syncs vehicle specifications, pricing, and availability with search-friendly structured data." }
    ],
    methodology: "Our automotive SEO methodology: (1) Showroom keyword mapping and vehicle brand queries, (2) AutoDealer and AutoRepair schema deployment, (3) Branch-specific Google Business Profile auditing, and (4) Service center landing page creation. We measure map pack impressions and booking leads monthly.",
    relatedLocations: [
      { label: "SEO Manama", href: "/locations/seo-manama" },
      { label: "SEO Riffa", href: "/locations/seo-riffa" }
    ],
    relatedIndustries: [
      { label: "E-commerce SEO", href: "/industries/ecommerce" },
      { label: "Retail & Distribution SEO", href: "/industries/retail-distribution" }
    ]
  }
};

export async function generateStaticParams() {
  return [
    { industry: "healthcare" },
    { industry: "legal" },
    { industry: "food-and-beverage" },
    { industry: "ecommerce" },
    { industry: "company-formation" },
    { industry: "engineering" },
    { industry: "retail-distribution" },
    { industry: "real-estate" },
    { industry: "education" },
    { industry: "automotive" }
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

      {/* Shared Navbar */}
      <Navbar />

      {/* Decorative Gradients & Mesh */}
      <div className="absolute inset-0 grid-bg opacity-30 pointer-events-none" />
      <div className="absolute top-0 left-0 right-0 h-[60vh] radial-gradient-top pointer-events-none" />
      <div className="absolute top-[20%] right-[-10%] w-[500px] h-[500px] rounded-full bg-electric-blue/5 blur-[120px] pointer-events-none animate-pulse-glow" />

      {/* Main Container */}
      <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 pt-28 sm:pt-36 pb-16 sm:pb-24">
        {/* Breadcrumb */}
        <div className="mb-10 sm:mb-16 flex items-center gap-2 text-sm text-soft-gray">
          <Link
            href="/"
            className="hover:text-white transition-colors"
          >
            Home
          </Link>
          <span className="text-white/20">/</span>
          <Link
            href="/#services"
            className="hover:text-white transition-colors"
          >
            Services
          </Link>
          <span className="text-white/20">/</span>
          <span className="text-electric-blue">{data.title}</span>
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

        {/* Healthcare Niche Hubs Selection */}
        {industry === "healthcare" && (
          <div className="mb-16 sm:mb-24">
            <div className="mb-10">
              <span className="inline-flex items-center gap-1.5 text-xs font-semibold text-success-green uppercase tracking-widest px-3 py-1 rounded-full border border-success-green/20 bg-success-green/5 mb-4">
                <Target className="h-3.5 w-3.5" /> Medical Niche Optimization
              </span>
              <h2 className="text-2xl sm:text-3xl font-[family-name:var(--font-space)] font-bold mt-3">
                Patient Acquisition Systems by Practice
              </h2>
              <p className="text-soft-gray text-sm sm:text-base mt-2 max-w-2xl">
                We design specialized organic search frameworks tailored to the patient psychology and search habits of each medical niche in Bahrain. Select your specialty below:
              </p>
            </div>

            <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6">
              {[
                {
                  label: "Dental & Orthodontics",
                  href: "/industries/healthcare/dental",
                  desc: "Dominate veneers, implants, and invisalign search terms. Own local map pack rankings for your dental center.",
                  icon: <Smile className="w-5 h-5 text-electric-blue" />
                },
                {
                  label: "Dermatology & Aesthetic",
                  href: "/industries/healthcare/dermatology",
                  desc: "Rank first for high-margin procedures (laser, botox, fillers) using visual search GBP loops.",
                  icon: <Sparkles className="w-5 h-5 text-electric-blue" />
                },
                {
                  label: "Women's Health (OBGYN)",
                  href: "/industries/healthcare/obgyn",
                  desc: "Capture gender-specific search behaviors (e.g. 'lady doctor Riffa') with secure local silos.",
                  icon: <Users className="w-5 h-5 text-electric-blue" />
                },
                {
                  label: "Orthopedic & Physiotherapy",
                  href: "/industries/healthcare/orthopedics",
                  desc: "Acquire procedure-ready surgical and rehabilitation patients searching for joint and back care.",
                  icon: <Activity className="w-5 h-5 text-electric-blue" />
                },
                {
                  label: "Pediatric Clinic",
                  href: "/industries/healthcare/pediatrics",
                  desc: "Position your clinic as the family's nearest trusted emergency and neonatal check-up resource.",
                  icon: <Flame className="w-5 h-5 text-electric-blue" />
                }
              ].map((niche, idx) => (
                <Link
                  key={idx}
                  href={niche.href}
                  className="group relative overflow-hidden rounded-xl border border-white/[0.04] bg-slate-900/10 p-6 hover:border-electric-blue/30 hover:glow-blue transition-all duration-300 flex flex-col justify-between"
                >
                  <div>
                    <div className="w-10 h-10 rounded-xl bg-electric-blue/10 flex items-center justify-center mb-5 group-hover:scale-110 transition-transform duration-300">
                      {niche.icon}
                    </div>
                    <h3 className="text-base sm:text-lg font-semibold text-white group-hover:text-electric-blue transition-colors mb-2">
                      {niche.label}
                    </h3>
                    <p className="text-xs text-soft-gray leading-relaxed mb-6">
                      {niche.desc}
                    </p>
                  </div>
                  <div className="flex items-center gap-1 text-xs font-semibold text-electric-blue group-hover:text-white transition-colors mt-auto">
                    View Niche Playbook
                    <ArrowRight className="w-3.5 h-3.5 group-hover:translate-x-1 transition-transform" />
                  </div>
                </Link>
              ))}
            </div>
          </div>
        )}

        {/* E-E-A-T Trust & Credentials Section */}
        <div className="mb-16 sm:mb-24">
          <div className="mb-10">
            <span className="inline-flex items-center gap-1.5 text-xs font-semibold text-electric-blue uppercase tracking-widest px-3 py-1 rounded-full border border-electric-blue/20 bg-electric-blue/5 mb-4">
              <Award className="h-3.5 w-3.5" /> Trust & Credentials
            </span>
            <h2 className="text-2xl sm:text-3xl font-[family-name:var(--font-space)] font-bold mt-3">
              E-E-A-T Authority Signals
            </h2>
            <p className="text-soft-gray text-sm sm:text-base mt-2 max-w-2xl">
              Google requires demonstrable Experience, Expertise, Authoritativeness, and Trustworthiness. Here is how BAE satisfies each pillar for this vertical.
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

        {/* Core Strategy Pillars */}
        <div className="mb-16 sm:mb-24">
          <div className="mb-10">
            <span className="inline-flex items-center gap-1.5 text-xs font-semibold text-electric-blue uppercase tracking-widest px-3 py-1 rounded-full border border-electric-blue/20 bg-electric-blue/5 mb-4">
              <Target className="h-3.5 w-3.5" /> Strategic Deliverables
            </span>
            <h2 className="text-2xl sm:text-3xl font-[family-name:var(--font-space)] font-bold mt-3">
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

        {/* Methodology & Editorial Process — E-E-A-T */}
        <div className="relative overflow-hidden rounded-2xl border border-white/[0.04] glass p-8 sm:p-10 mb-16 sm:mb-24">
          <div className="absolute top-0 right-0 w-32 h-32 bg-electric-blue/5 rounded-bl-full blur-xl pointer-events-none" />
          <div className="max-w-3xl relative z-10">
            <div className="flex items-center gap-3 mb-6">
              <div className="w-10 h-10 rounded-xl bg-electric-blue/10 flex items-center justify-center">
                <BookOpen className="h-5 w-5 text-electric-blue" />
              </div>
              <h3 className="text-lg sm:text-xl font-[family-name:var(--font-space)] font-bold text-white">
                Our Methodology & Editorial Process
              </h3>
            </div>
            <p className="text-soft-gray leading-relaxed text-sm sm:text-base mb-6">
              {data.methodology}
            </p>
            <div className="flex items-start gap-3 pt-4 border-t border-white/[0.04]">
              <ShieldCheck className="h-5 w-5 text-electric-blue flex-shrink-0 mt-0.5" />
              <p className="text-soft-gray text-xs sm:text-sm leading-relaxed">
                <strong className="text-white">Editorial Integrity:</strong> All published content undergoes subject-matter review. We do not make unsubstantiated performance claims. Results vary by market, competition, and domain authority baseline.
              </p>
            </div>
          </div>
        </div>

        {/* E-E-A-T Framework Compliance */}
        <div className="relative overflow-hidden rounded-2xl border border-white/[0.04] glass p-8 sm:p-10 mb-16 sm:mb-24">
          <div className="max-w-3xl">
            <div className="flex items-center gap-3 mb-6">
              <div className="w-10 h-10 rounded-xl bg-electric-blue/10 flex items-center justify-center">
                <ShieldCheck className="h-5 w-5 text-electric-blue" />
              </div>
              <h3 className="text-lg sm:text-xl font-[family-name:var(--font-space)] font-bold text-white">
                Silo Compliance & E-E-A-T Framework
              </h3>
            </div>
            <p className="text-soft-gray leading-relaxed text-sm sm:text-base">
              {data.description}
            </p>
          </div>
        </div>

        {/* FAQs Section — FAQPage Schema */}
        <div className="max-w-3xl mb-16 sm:mb-24">
          <div className="flex items-center gap-3 mb-8 sm:mb-10">
            <div className="w-10 h-10 rounded-xl bg-electric-blue/10 flex items-center justify-center">
              <HelpCircle className="h-5 w-5 text-electric-blue" />
            </div>
            <h2 className="text-xl sm:text-3xl font-[family-name:var(--font-space)] font-bold">
              Frequently Asked Questions
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

        {/* Internal Linking — Related Pages */}
        <div className="mb-16 sm:mb-24">
          <h2 className="text-xl sm:text-2xl font-[family-name:var(--font-space)] font-bold mb-8">
            Explore More
          </h2>
          <div className="grid sm:grid-cols-2 gap-6">
            {/* Related Locations */}
            <div className="glass rounded-xl sm:rounded-2xl p-6 sm:p-8 border border-white/[0.04]">
              <h3 className="text-sm font-semibold text-electric-blue uppercase tracking-wider mb-4">
                Nearby Locations
              </h3>
              <div className="space-y-3">
                {data.relatedLocations.map((loc) => (
                  <Link
                    key={loc.href}
                    href={loc.href}
                    className="flex items-center justify-between text-soft-gray hover:text-white transition-colors group py-1"
                  >
                    <span className="text-sm font-medium">{loc.label}</span>
                    <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform text-electric-blue" />
                  </Link>
                ))}
              </div>
            </div>

            {/* Related Industries */}
            <div className="glass rounded-xl sm:rounded-2xl p-6 sm:p-8 border border-white/[0.04]">
              <h3 className="text-sm font-semibold text-electric-blue uppercase tracking-wider mb-4">
                Related Services
              </h3>
              <div className="space-y-3">
                {data.relatedIndustries.map((ind) => (
                  <Link
                    key={ind.href}
                    href={ind.href}
                    className="flex items-center justify-between text-soft-gray hover:text-white transition-colors group py-1"
                  >
                    <span className="text-sm font-medium">{ind.label}</span>
                    <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform text-electric-blue" />
                  </Link>
                ))}
              </div>
            </div>
          </div>
        </div>

        {/* Bottom CTA */}
        <div className="glass rounded-2xl sm:rounded-3xl p-8 sm:p-12 border border-white/[0.04] text-center">
          <h2 className="text-2xl sm:text-3xl font-[family-name:var(--font-space)] font-bold mb-4">
            Ready to Dominate <span className="gradient-text">{data.title.split(" ")[0]} Search?</span>
          </h2>
          <p className="text-soft-gray text-sm sm:text-base max-w-xl mx-auto mb-8">
            Book a free strategy session to see exactly how BAE can position your business as the authority in this vertical.
          </p>
          <div className="flex flex-col sm:flex-row items-center justify-center gap-3">
            <Link
              href="/#contact"
              className="group inline-flex items-center gap-2 px-8 py-4 bg-electric-blue hover:bg-electric-blue-dark text-white font-bold rounded-full transition-all duration-300 hover:shadow-[0_0_30px_rgba(59,130,246,0.4)] text-sm sm:text-base"
            >
              Book Strategy Call
              <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
            </Link>
            <Link
              href="/#contact"
              className="group inline-flex items-center gap-2 px-8 py-4 border border-white/10 hover:border-electric-blue/50 text-white font-semibold rounded-full transition-all duration-300 hover:bg-white/[0.03] text-sm sm:text-base"
            >
              <FileSearch className="w-4 h-4 text-electric-blue" />
              Request Free Audit
            </Link>
          </div>
        </div>
      </div>

      {/* Shared Footer */}
      <Footer />

      {/* FAQPage Schema for Google Rich Results */}
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
