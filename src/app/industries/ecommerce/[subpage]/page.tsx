import React from "react";
import Link from "next/link";
import { notFound } from "next/navigation";
import LocalBusinessSchema from "@/components/LocalBusinessSchema";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import {
  ShoppingBag, Shirt, Smartphone, Sparkles, ShoppingCart,
  Sofa, Gem, Rocket, Store,
  ArrowRight, Zap, TrendingUp,
  ShieldCheck, HelpCircle, Award, BookOpen,
  BadgeCheck, FileSearch, Target, BarChart3
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
  fashion: {
    title: "Fashion & Apparel E-commerce SEO",
    metaTitle: "Fashion E-commerce SEO Bahrain | Apparel Store Ranking - BAE",
    metaDesc: "Rank your fashion store above Noon and Amazon for apparel searches in Bahrain. Product schema, category authority, and Arabic search targeting at zero ad spend.",
    icon: <Shirt className="h-10 w-10 text-electric-blue-light" />,
    subtitle: "Done-for-you organic product visibility that ranks your fashion catalog above marketplace aggregators. Category authority architecture, Product schema for free Google Shopping listings, and Arabic search targeting — zero ad spend required.",
    summary: "Fashion is the #1 e-commerce category in Bahrain by revenue. It is also the most competitive. Right now, Noon and Amazon own the top 3 positions for 'buy abaya online Bahrain,' 'men's thobe Bahrain,' and 'designer bags Bahrain.' Your Shopify store with 200 products cannot outspend them — but it can outrank them on long-tail searches they are too massive to target. We build category-level authority that captures the 80% of fashion searches marketplaces ignore.",
    highlights: [
      "Category page authority architecture beating marketplace aggregators",
      "Product JSON-LD schema unlocking free Google Shopping listings",
      "Seasonal trend capture: Ramadan, Eid, National Day pre-indexed silos",
      "Arabic-first fashion search targeting for Gulf consumer behavior"
    ],
    description: "Fashion e-commerce in Bahrain is a high-volume, trend-driven market where organic visibility determines which stores thrive and which remain invisible behind marketplace giants. BAE builds category-level topical authority, deploys product schema for rich snippet eligibility, and constructs seasonal content silos that capture search surges before they happen. We structure your catalog so Google indexes your revenue pages — not your filter variations.",
    locality: "Seef District, Manama",
    latitude: 26.2365,
    longitude: 50.5485,
    painPoints: [
      { title: "The Marketplace Commission Trap", desc: "Noon takes 15–25% commission on every sale. At 500 orders per month with 80 BHD AOV, that is 6,000–10,000 BHD per month in marketplace fees. Organic search to your own store equals 0% commission. We build the search visibility that redirects those buyers to your domain." },
      { title: "Seasonal Trend Capture", desc: "Ramadan, Eid, and National Day drive massive fashion search spikes. If your category pages are not indexed and ranked before the season hits, you miss the surge entirely. We pre-build seasonal content silos 60 days ahead of every major Bahraini shopping event." },
      { title: "Visual Search & Product Schema", desc: "Google now displays product images, prices, and ratings directly in search results — but only for stores with correctly implemented Product schema. Your competitor's dress shows price and 4.8 stars. Your dress shows a plain blue link. Which one gets clicked?" }
    ],
    faqs: [
      { q: "How do we compete with Noon and Amazon for fashion searches?", a: "You do not compete head-to-head on broad terms. You dominate the long-tail: 'modest abaya collection Bahrain,' 'designer handbags under 100 BHD,' 'men's thobe Manama delivery.' These are specific purchase-intent searches that marketplaces do not optimize for — and they convert at 5x the rate of generic category searches." },
      { q: "Can you optimize our Shopify fashion store?", a: "Yes. Shopify has known SEO limitations — duplicate /collections/ paths, rigid URL structures, liquid template constraints. We work within and around every limitation: custom canonical configurations, JSON-LD product schema via theme code, collection page content optimization, and Shopify Markets hreflang for Arabic and English dual stores." },
      { q: "How do you handle seasonal fashion trends?", a: "We pre-build category and landing pages 60 days before major shopping events (Ramadan, Eid al-Fitr, Eid al-Adha, Bahrain National Day, Black Friday). These pages are indexed and gaining authority before the search spike hits — so when demand surges, your store is already positioned at the top." },
      { q: "Will this work for Arabic-speaking shoppers?", a: "Absolutely. Arabic fashion searches outpace English by over 2x in Bahrain. We build independent Arabic category silos with proper hreflang tags — not auto-translated content. Native Arabic keyword targeting for the majority of Bahraini consumers who search in their first language." }
    ],
    eeatCredentials: [
      { label: "Product Schema Authority", detail: "Full Product JSON-LD implementation with price, availability, GTIN, brand, and AggregateRating — unlocking free Google Shopping listings and rich product cards in search results." },
      { label: "Category Silo Architecture", detail: "We structure your collections into topical authority clusters that tell Google your store is the definitive source for specific fashion categories — not a generic marketplace listing." },
      { label: "Bahrain Market Intelligence", detail: "Our keyword targeting incorporates Bahraini shopping behavior: abaya styles, thobe preferences, modest fashion trends, Gulf luxury brand demand, and seasonal cultural events that drive purchase intent." }
    ],
    methodology: "Our fashion e-commerce playbook: (1) Catalog crawl audit — we identify the 15,000+ filter URLs wasting your crawl budget and clean them, (2) Product schema deployment across your entire catalog for Google Shopping free listing eligibility, (3) Category page authority content — 300+ words of buying-guide-style content on every collection page, and (4) Seasonal pre-indexing — landing pages built 60 days before every major Bahraini shopping event. You approve. We build. Your store ranks.",
    keywords: [
      { phrase: "buy abaya online Bahrain", volume: "680/mo", intent: "Transactional" },
      { phrase: "men's thobe shop Bahrain", volume: "420/mo", intent: "Commercial" },
      { phrase: "designer handbags Bahrain", volume: "350/mo", intent: "Commercial" },
      { phrase: "modest fashion online GCC", volume: "290/mo", intent: "Commercial" }
    ]
  },
  electronics: {
    title: "Electronics & Gadgets Store SEO",
    metaTitle: "Electronics E-commerce SEO Bahrain | Gadget Store Ranking - BAE",
    metaDesc: "Rank your electronics store for iPhone, laptop, and gaming searches in Bahrain. Product spec schema, comparison content, and price-intent keyword targeting.",
    icon: <Smartphone className="h-10 w-10 text-electric-blue-light" />,
    subtitle: "Organic product discovery infrastructure for electronics retailers. We rank your store for spec-comparison searches, model-specific queries, and 'best price' commercial intent — the traffic that converts at 3–5x social media rates.",
    summary: "Electronics is the highest average-order-value category in Bahrain e-commerce. A single smartphone sale is 300–500 BHD. A laptop is 400–1,200 BHD. Yet most electronics stores in Bahrain rely entirely on Google Ads and Instagram to drive traffic. The moment you stop paying, sales stop. We build permanent organic product positions that capture spec-comparison searches, model-specific queries, and best-price commercial intent — the traffic that converts at 3 to 5 times social media rates because buyers searched with purchase intent.",
    highlights: [
      "Model-specific product pages (e.g., 'iPhone 16 Pro Max price Bahrain')",
      "Technical spec schema with compatibility, warranty, and stock data",
      "Comparison content silos: 'MacBook vs Surface vs ThinkPad Bahrain'",
      "Google Merchant Center free listing optimization for electronics"
    ],
    description: "Electronics buyers research obsessively. They compare specs, read reviews, check prices across 5 stores, and then buy from whoever ranks first for their exact model query. BAE builds model-specific product pages, spec-driven schema markup, and comparison content silos that capture buyers at every stage of their research journey — from 'best gaming laptop 2026' to 'buy RTX 5080 Bahrain price.'",
    locality: "Manama Souq Area",
    latitude: 26.2285,
    longitude: 50.5860,
    painPoints: [
      { title: "The $1,200 Laptop Sale You Are Missing", desc: "When someone searches 'best laptop under 500 BHD Bahrain,' they have already decided to buy. That single search leads to a 400–1,200 BHD transaction. If your store does not rank for that query, a competitor or Noon captures the sale. We build dedicated comparison landing pages that own these high-AOV searches." },
      { title: "Spec Sheet as Search Asset", desc: "Electronics buyers search by exact specifications: 'laptop 16GB RAM i7 Bahrain,' 'phone 256GB dual SIM Manama.' We structure your product pages with TechArticle and Product schema so Google matches your inventory to these precise technical queries — something marketplace listings cannot do well." },
      { title: "Price Update Freshness Signals", desc: "Google prioritizes fresh product data. We configure your Product schema to automatically reflect current prices and stock status, sending freshness signals that keep your listings above competitors with stale data." }
    ],
    faqs: [
      { q: "How do we rank against Noon and Amazon for electronics?", a: "By targeting the model-specific and comparison queries they ignore. Noon ranks for 'buy laptop.' We rank you for 'MacBook Air M4 16GB price Bahrain' — which converts 8x better because the buyer has already decided on the exact product. We build pages for every high-demand model in your catalog." },
      { q: "Can product prices be included in search results?", a: "Yes. With properly implemented Product schema including price, priceCurrency, and availability, Google displays your product cards with live pricing directly in search results. This dramatically increases click-through rates versus plain blue links." },
      { q: "How do you handle product launches and new models?", a: "We pre-build optimized landing pages for upcoming product launches (e.g., iPhone 17, Samsung Galaxy S27) using leaked spec data and pre-order intent keywords. When the product drops, your page is already indexed and ranking while competitors scramble to create content." },
      { q: "What about warranty and after-sales search queries?", a: "We build supporting content around warranty, repair, and accessory searches. Someone searching 'iPhone screen repair Bahrain' is a customer who bought from a competitor but could become yours for accessories, upgrades, and their next purchase. We capture the full electronics customer lifecycle." }
    ],
    eeatCredentials: [
      { label: "Technical Spec Schema", detail: "Product markup including brand, model, specifications, compatibility data, warranty terms, and real-time pricing — making your products eligible for Google rich results and free Shopping listings." },
      { label: "Comparison Content Authority", detail: "Expert-grade comparison guides structured for AI extraction: 'MacBook vs Surface vs ThinkPad' with spec tables, use-case recommendations, and Bahrain-specific pricing data." },
      { label: "Inventory Sync Intelligence", detail: "Schema configurations that reflect real-time stock status and pricing, ensuring Google displays accurate data and penalizes competitors with stale or misleading listings." }
    ],
    methodology: "Our electronics e-commerce playbook: (1) Full catalog audit — identifying top-revenue SKUs and creating dedicated landing pages for each, (2) Product and Offer schema deployment with live pricing, specs, and availability for every product, (3) Comparison content silo creation targeting 'best X vs Y' and 'top Z under $X' queries, and (4) Google Merchant Center feed alignment for free organic Shopping listings. We track revenue per organic keyword weekly.",
    keywords: [
      { phrase: "buy iPhone Bahrain price", volume: "1,200/mo", intent: "Transactional" },
      { phrase: "best laptop Bahrain 2026", volume: "680/mo", intent: "Commercial" },
      { phrase: "gaming PC Bahrain", volume: "420/mo", intent: "Commercial" },
      { phrase: "smart home devices Bahrain", volume: "310/mo", intent: "Commercial" }
    ]
  },
  beauty: {
    title: "Beauty & Personal Care E-commerce SEO",
    metaTitle: "Beauty E-commerce SEO Bahrain | Skincare Store Ranking - BAE",
    metaDesc: "Rank your beauty store for perfume, skincare, and cosmetics searches in Bahrain. Ingredient-driven content, repeat-purchase optimization, and product schema.",
    icon: <Sparkles className="h-10 w-10 text-electric-blue-light" />,
    subtitle: "Organic customer acquisition infrastructure for beauty brands and personal care stores. We build ingredient-driven, skin-type-targeted search systems that capture beauty buyers at the research phase and convert them into loyal repeat customers.",
    summary: "Beauty products have the highest repeat-purchase rate of any e-commerce category. A customer who finds your skincare brand through organic search returns 4 to 6 times per year. At 40 BHD average order, that is 160 to 240 BHD in annual revenue per customer — acquired at zero cost. We build the ingredient-driven, skin-type-targeted search infrastructure that captures beauty buyers at the research phase and converts them into loyal repeat customers who never need an ad to come back.",
    highlights: [
      "Ingredient and skin-type content silos for high-intent beauty searches",
      "Product schema with brand, shade, reviews, and price data",
      "Repeat-purchase organic funnels (skincare routines, subscription queries)",
      "Arabic beauty and perfume search targeting for Gulf consumers"
    ],
    description: "Beauty e-commerce in the Gulf is driven by ingredient awareness, brand trust, and cultural preferences. Bahraini consumers research products by skin type, ingredient lists, and social proof before purchasing. BAE structures beauty store content around these research patterns — building ingredient authority pages, skin-type guides, and product comparison content that captures buyers during their research phase and converts them into repeat organic customers.",
    locality: "Seef Mall District, Manama",
    latitude: 26.2370,
    longitude: 50.5475,
    painPoints: [
      { title: "The Repeat-Purchase Revenue Engine", desc: "A single organic beauty customer acquired at zero cost returns 4–6 times per year. At 40 BHD average order, each organic customer generates 160–240 BHD annually. Compare that to paying 2–5 BHD per click on Instagram ads for every single visit. Organic search builds a compounding customer base that grows without increasing ad spend." },
      { title: "Ingredient Authority = Search Authority", desc: "When someone searches 'best retinol cream Bahrain' or 'niacinamide serum for oily skin,' they are deep in the buying journey. We build dedicated ingredient and concern pages that position your store as the expert source — capturing buyers that generic marketplace listings cannot reach." },
      { title: "Perfume Search Domination", desc: "Perfume is the #1 beauty search category in the Gulf. 'Buy perfume online Bahrain' gets 750+ searches per month. We build fragrance family taxonomies, occasion-based collection pages, and brand authority content that captures perfume buyers across every intent stage." }
    ],
    faqs: [
      { q: "How do you handle beauty product variations (shades, sizes)?", a: "We implement variant-aware Product schema that registers each shade and size as a structured option under the parent product. Google displays color swatches and size availability directly in search results. Canonical tags prevent duplicate indexation of similar product variants." },
      { q: "Can organic SEO replace our Instagram ad spend?", a: "Not entirely — Instagram remains valuable for brand awareness. But organic search captures high-intent buyers who are ready to purchase right now. A shopper searching 'buy Korean skincare Bahrain' has already decided to buy. That intent-based traffic converts at 3–5x Instagram ad traffic. Over 6 months, most beauty stores reduce paid spend by 40–60% while maintaining revenue." },
      { q: "How do you optimize for Arabic beauty searches?", a: "Arabic beauty searches include unique query patterns: specific fragrance preferences (oud, musk, bakhoor), cultural skincare concerns, and regional brand names. We build independent Arabic content silos targeting these patterns — not translations of English pages, but natively researched Arabic keyword targets." },
      { q: "Do you optimize for ingredient-specific queries?", a: "Yes. We build dedicated ingredient hub pages: retinol guides, hyaluronic acid explainers, vitamin C comparisons — each linking to your products containing those ingredients. This creates topical authority clusters that tell Google your store is the expert source for specific skincare concerns." }
    ],
    eeatCredentials: [
      { label: "Product & Review Schema", detail: "Full Product schema with brand, ingredients, shade variants, price, and AggregateRating — enabling rich product cards with star ratings directly in Google search results." },
      { label: "Ingredient Authority Content", detail: "Research-backed ingredient guides written at editorial quality — positioning your store as a trusted skincare knowledge source, not just a product catalog." },
      { label: "Gulf Beauty Market Intelligence", detail: "Our content strategy incorporates GCC-specific beauty preferences: oud-based fragrances, halal-certified cosmetics, regional skincare concerns from climate exposure, and cultural beauty standards." }
    ],
    methodology: "Our beauty e-commerce playbook: (1) Ingredient and concern mapping — we build content silos around the top 20 skincare concerns and fragrance categories Bahraini consumers search for, (2) Product schema deployment with variant support for shades, sizes, and scent families, (3) Brand authority pages that position your store as a curated expert source versus a generic marketplace, and (4) Arabic-first fragrance and beauty content targeting Gulf-specific search patterns. We measure repeat customer acquisition rate from organic search monthly.",
    keywords: [
      { phrase: "buy perfume online Bahrain", volume: "750/mo", intent: "Transactional" },
      { phrase: "skincare products Bahrain", volume: "520/mo", intent: "Commercial" },
      { phrase: "Korean beauty products GCC", volume: "380/mo", intent: "Commercial" },
      { phrase: "organic makeup Bahrain", volume: "240/mo", intent: "Commercial" }
    ]
  },
  grocery: {
    title: "Online Grocery & F&B E-commerce SEO",
    metaTitle: "Grocery E-commerce SEO Bahrain | Online Food Store Ranking - BAE",
    metaDesc: "Rank your grocery delivery store above Talabat and InstaShop. Local delivery zone targeting, product availability schema, and zero-commission organic orders.",
    icon: <ShoppingCart className="h-10 w-10 text-electric-blue-light" />,
    subtitle: "Organic order infrastructure for online grocery stores and F&B e-commerce in Bahrain. We rank your store for 'grocery delivery [area]' searches, driving direct orders through your own website at zero aggregator commission.",
    summary: "Online grocery in Bahrain is dominated by aggregator platforms that take 20 to 30 percent commission on every order. Every order through Talabat or InstaShop costs you margin. We build local search infrastructure that ranks your own store for 'grocery delivery near me' and area-specific delivery queries, driving direct orders through your website or WhatsApp — at zero commission. For a store doing 1,000 orders per month at 25 BHD average, that is 5,000 to 7,500 BHD per month in commission savings redirected to your bottom line.",
    highlights: [
      "Area-specific delivery zone landing pages for every Bahrain neighborhood",
      "Product availability schema with real-time stock signals",
      "Zero-commission organic ordering versus 20–30% aggregator fees",
      "WhatsApp ordering integration and local pickup SEO optimization"
    ],
    description: "Online grocery is a convenience-driven, high-frequency purchase category. Shoppers search by proximity and delivery speed, not brand loyalty. BAE builds hyper-local delivery zone pages that capture 'grocery delivery [neighborhood]' searches, deploys product availability schema for stock freshness signals, and structures your store to compete with aggregator platforms on organic search — where commission is zero and customer data stays yours.",
    locality: "Juffair, Manama",
    latitude: 26.2155,
    longitude: 50.6055,
    painPoints: [
      { title: "The 25% Aggregator Tax", desc: "Talabat, InstaShop, and similar platforms take 20–30% commission on every grocery order. At 1,000 orders per month with 25 BHD average basket, you pay 5,000–7,500 BHD monthly in commissions. We build organic search visibility that drives those same customers to order directly from your store — zero commission, full margin, and you keep the customer data." },
      { title: "Hyper-Local Delivery Zone SEO", desc: "Grocery is the most local e-commerce category. When someone in Adliya searches 'grocery delivery near me,' your store must appear — not Talabat's generic listing. We build dedicated landing pages for every Bahrain neighborhood you serve: Seef, Juffair, Adliya, Riffa, Muharraq, Hidd, and more." },
      { title: "Stock Freshness Signals", desc: "Google prioritizes product listings with up-to-date availability data. We configure your Product schema to signal real-time stock status, giving your listings a freshness advantage over competitors with stale catalog data." }
    ],
    faqs: [
      { q: "Can we really compete with Talabat organically?", a: "For broad terms like 'food delivery,' no — Talabat's domain authority is too high. But for 'organic grocery delivery Adliya,' 'fresh fruits delivery Seef,' or 'Indian grocery store Bahrain online,' you absolutely can. These hyper-local, specific queries are what Talabat does not optimize for — and they carry the highest conversion intent." },
      { q: "How do delivery zone landing pages work?", a: "We create individual pages for every neighborhood you deliver to. Each page includes the area name, delivery times, minimum order details, and locally relevant product highlights. This tells Google exactly where you serve and matches you to area-specific searches that aggregators cannot replicate." },
      { q: "Do you integrate with WhatsApp ordering?", a: "Yes. Many Bahraini grocery shoppers prefer WhatsApp for convenience. We structure your CTAs and local schema to drive WhatsApp direct orders alongside website checkout — capturing the significant portion of customers who prefer messaging over traditional e-commerce flows." },
      { q: "How fast can organic replace aggregator dependency?", a: "Month 1: We deploy delivery zone pages and product schema — you begin appearing for local queries immediately. Month 3: Direct organic orders begin scaling. Month 6: Most grocery clients reduce aggregator dependency by 30–50%. The goal is not eliminating aggregators entirely but building a direct channel that captures your highest-margin customers." }
    ],
    eeatCredentials: [
      { label: "Local Delivery Schema", detail: "DeliveryService and OfferShippingDetails schema that registers your exact delivery zones, times, and minimum order values — making your store eligible for Google's local shopping results." },
      { label: "Neighborhood Authority Pages", detail: "Dedicated landing pages for each delivery zone with area-specific content, local landmark references, and delivery logistics that aggregator platforms cannot replicate at scale." },
      { label: "Freshness & Availability Signals", detail: "Automated Product schema updates reflecting real-time stock status and pricing — sending Google the freshness signals that rank your listings above competitors with stale data." }
    ],
    methodology: "Our grocery e-commerce playbook: (1) Delivery zone mapping — we build optimized landing pages for every neighborhood you serve, (2) Product schema deployment with availability, price, and delivery information for your top 200 SKUs, (3) WhatsApp and direct-ordering CTA optimization to capture Bahrain's messaging-first consumer behavior, and (4) Local Business schema with precise geocoordinates for each pickup or warehouse location. We track direct orders versus aggregator orders monthly.",
    keywords: [
      { phrase: "grocery delivery Bahrain", volume: "900/mo", intent: "Transactional" },
      { phrase: "online grocery Manama", volume: "580/mo", intent: "Transactional" },
      { phrase: "fresh fruits delivery Seef", volume: "320/mo", intent: "Transactional" },
      { phrase: "Indian grocery store Bahrain", volume: "260/mo", intent: "Commercial" }
    ]
  },
  "home-furniture": {
    title: "Home & Furniture E-commerce SEO",
    metaTitle: "Furniture E-commerce SEO Bahrain | Home Store Ranking - BAE",
    metaDesc: "Rank your furniture store for sofa, bedroom, and home decor searches in Bahrain. High-ticket product pages, room-based content silos, and showroom visibility.",
    icon: <Sofa className="h-10 w-10 text-electric-blue-light" />,
    subtitle: "Organic search infrastructure for high-ticket home and furniture stores. We rank your products for room-based, style-based, and budget-based furniture searches — capturing buyers who research extensively before committing to purchases worth 500 to 3,000 BHD.",
    summary: "Furniture is the highest average-order-value category in Bahrain e-commerce after electronics. A single sofa purchase is 500 to 3,000 BHD. But furniture buyers research extensively — they compare materials, dimensions, delivery options, and reviews across 4 to 5 stores before purchasing. The store that ranks number one for 'buy sofa Bahrain' gets first consideration on every purchase. We make that store yours by building room-based content architectures and high-trust product pages that convert research into revenue.",
    highlights: [
      "Room-based category silos (living room, bedroom, dining, outdoor)",
      "High-AOV product pages with dimensions, materials, and delivery schema",
      "Showroom + online hybrid SEO for click-and-collect visibility",
      "Interior design content that drives commercial furniture searches"
    ],
    description: "Home and furniture e-commerce requires a trust-first SEO strategy. Buyers spending 1,000+ BHD on a dining table need visual proof, dimension details, material specifications, delivery guarantees, and social proof before committing. BAE structures furniture stores with room-based category silos, detailed product pages that answer every buyer question, and showroom-to-online bridge content that captures both digital and physical shopping intent.",
    locality: "Sitra, Manama",
    latitude: 26.1558,
    longitude: 50.6089,
    painPoints: [
      { title: "The $3,000 Sofa Sale Starts on Google", desc: "When someone searches 'buy L-shaped sofa Bahrain,' they are ready to invest 800–3,000 BHD. That single organic search position drives more revenue than 500 low-AOV fashion clicks. We build dedicated product pages for your highest-value furniture items with full specification schema, lifestyle imagery optimization, and delivery details that eliminate purchase hesitation." },
      { title: "Room-Based Content Architecture", desc: "Furniture buyers search by room: 'modern living room furniture Bahrain,' 'kids bedroom set Manama,' 'outdoor patio furniture Riffa.' We structure your store around these room-based journeys, building category hubs that establish topical authority for every space in the home." },
      { title: "Showroom Meets Online", desc: "Many furniture buyers research online but want to see the product in person before buying. We optimize both your e-commerce catalog AND your physical showroom on Google Maps, creating a seamless click-and-collect and showroom-visit funnel that captures both intent types." }
    ],
    faqs: [
      { q: "How important is SEO for high-ticket furniture?", a: "Critical. Furniture buyers do not impulse-buy. They research for days or weeks, comparing materials, dimensions, and reviews. The store that ranks first during their research phase becomes their reference point. Even if they visit a showroom, they found that showroom through Google. Organic search is the beginning of every high-ticket furniture sale." },
      { q: "Can you optimize for both our online store and showroom?", a: "Yes. We build a dual strategy: e-commerce catalog SEO for online purchases plus Google Business Profile optimization for your physical showroom. Many furniture buyers search online, visit the showroom, then order online — or the reverse. We capture both paths." },
      { q: "How do you handle large product catalogs (500+ items)?", a: "We prioritize your top 50 highest-margin products for dedicated landing pages with full schema and lifestyle content. Remaining products receive automated Product schema and category-level optimization. This ensures Google's crawl budget focuses on your revenue-driving products first." },
      { q: "What about delivery and assembly searches?", a: "We build supporting content around 'furniture delivery Bahrain,' 'furniture assembly service Manama,' and 'free delivery furniture Bahrain' — capturing customers at the purchase-decision stage when delivery logistics often determine which store gets the order." }
    ],
    eeatCredentials: [
      { label: "High-AOV Product Schema", detail: "Product markup including dimensions, materials, weight, color options, delivery timeframes, and assembly requirements — providing the detailed data Google needs to rank furniture products for specific buyer queries." },
      { label: "Room-Based Authority Clusters", detail: "Category architectures structured around rooms and styles that build topical authority: modern, classic, minimalist, Arabic-style — each as a distinct content silo with supporting blog content." },
      { label: "Showroom-to-Online Bridge", detail: "Integrated local SEO connecting your physical showroom with your e-commerce catalog, enabling click-and-collect searches and showroom appointment bookings through organic search." }
    ],
    methodology: "Our furniture e-commerce playbook: (1) Top-50 product prioritization with dedicated landing pages and full Product schema, (2) Room-based category silo architecture with lifestyle content and interior design guides, (3) Google Business Profile optimization for showroom visibility and appointment bookings, and (4) Delivery and logistics content targeting last-mile purchase decision queries. We track revenue per organic product page monthly.",
    keywords: [
      { phrase: "buy sofa Bahrain", volume: "520/mo", intent: "Transactional" },
      { phrase: "bedroom furniture Manama", volume: "380/mo", intent: "Commercial" },
      { phrase: "office furniture Bahrain", volume: "310/mo", intent: "Commercial" },
      { phrase: "outdoor furniture Riffa", volume: "190/mo", intent: "Commercial" }
    ]
  },
  luxury: {
    title: "Luxury & Premium Brand E-commerce SEO",
    metaTitle: "Luxury E-commerce SEO Bahrain | Premium Brand Ranking - BAE",
    metaDesc: "Rank your luxury brand for premium product searches in Bahrain. Editorial authority, brand entity SEO, and prestige positioning for high-net-worth buyers.",
    icon: <Gem className="h-10 w-10 text-electric-blue-light" />,
    subtitle: "Premium consumers do not click ads — they research. Your organic authority determines whether they choose you. We build editorial-grade search presence that positions your brand as the verified, trusted source for luxury purchases in the Gulf.",
    summary: "Luxury consumers in the Gulf research for weeks before purchasing. They read editorials, compare authenticity, and verify sellers. A Google Ad says 'we are selling.' An organic number one position says 'we are the authority.' For luxury brands, that distinction is the difference between a click and a conversion. We build editorial-grade organic authority that positions your brand as the verified, trusted source — not another advertiser competing on price in a market where price is irrelevant.",
    highlights: [
      "Brand entity SEO establishing your store as an authorized retailer",
      "Editorial-grade content: brand stories, craftsmanship, authentication guides",
      "High-net-worth buyer search patterns targeting for Gulf consumers",
      "Prestige search positioning: 'best' and 'authentic' query capture"
    ],
    description: "Luxury e-commerce SEO is fundamentally different from standard retail optimization. Price-driven tactics fail because luxury buyers do not shop on price — they shop on trust, authenticity, and prestige. BAE builds brand entity authority that signals to Google and AI systems that your store is a verified, authoritative source for premium products. We create editorial content, authentication guides, and brand storytelling pages that resonate with high-net-worth buyers who research extensively before making luxury purchases.",
    locality: "Bahrain Financial Harbour",
    latitude: 26.2402,
    longitude: 50.5828,
    painPoints: [
      { title: "Authenticity Is Your SEO Weapon", desc: "Luxury buyers searching 'authentic designer bags Bahrain' or 'authorized watch dealer Manama' are filtering for trust. We build authentication content, authorized dealer schema, and brand partnership pages that position your store as the verified source — capturing buyers who specifically avoid marketplace listings due to counterfeit concerns." },
      { title: "Editorial Authority Over Price Competition", desc: "Luxury brands lose when they compete on price. We build editorial-grade content: brand heritage stories, craftsmanship guides, seasonal collection previews, and styling content that attracts high-net-worth buyers through expertise — not discounts." },
      { title: "The 'Best' and 'Top' Query Domination", desc: "When someone searches 'best luxury watches Bahrain' or 'top designer perfumes GCC,' they are in the final stages of a high-value purchase. These aspirational queries have massive revenue per click. We build curated list content and category authority that owns these prestige positions." }
    ],
    faqs: [
      { q: "How is luxury SEO different from regular e-commerce SEO?", a: "Regular e-commerce SEO optimizes for price and conversion speed. Luxury SEO optimizes for trust, authority, and brand experience. We never use discount-driven language or price-comparison tactics. Instead, we build editorial content, brand authentication pages, and prestige positioning that attracts buyers who value quality over price." },
      { q: "Can you compete with brand.com direct stores?", a: "Yes. Many luxury consumers prefer authorized multi-brand retailers over single-brand stores because they want curation, local availability, and personal service. We position your store as the curated luxury destination — the boutique experience that brand.com cannot provide." },
      { q: "How do you prevent brand dilution in search results?", a: "We structure your product pages to associate with the brand entity without competing against the official brand site. Custom BreadcrumbList schema, authorized retailer markup, and branded category pages that complement — not compete with — the official brand presence." },
      { q: "What about Arabic luxury search queries?", a: "Gulf luxury consumers searching in Arabic use distinct patterns: specific brand transliterations, cultural occasion terms (wedding gifts, Eid luxury), and trust signals like 'original' and 'authentic' in Arabic. We build Arabic luxury content targeting these specific intent patterns." }
    ],
    eeatCredentials: [
      { label: "Brand Entity Authority", detail: "Structured data connecting your store to verified brand entities, authorized retailer signals, and authentication certifications that Google uses to assess trustworthiness for luxury queries." },
      { label: "Editorial Content Standards", detail: "Magazine-quality brand stories, craftsmanship features, and seasonal collection content written at the editorial standard luxury buyers expect — positioning your store as a curator, not just a seller." },
      { label: "HNW Buyer Intelligence", detail: "Content strategy targeting Gulf high-net-worth buyer search patterns: occasion-based luxury purchases (weddings, Ramadan gifts), brand-specific authentication queries, and premium lifestyle content." }
    ],
    methodology: "Our luxury e-commerce playbook: (1) Brand entity audit — establishing your store's relationship with each luxury brand in Google's Knowledge Graph, (2) Editorial content architecture — brand stories, authentication guides, and craftsmanship features at magazine quality, (3) Prestige query targeting — 'best,' 'authentic,' 'authorized' search terms that drive high-net-worth buyer traffic, and (4) Arabic luxury content for Gulf-specific cultural purchasing occasions. We measure revenue per luxury organic visitor — not just traffic volume.",
    keywords: [
      { phrase: "luxury watches Bahrain", volume: "430/mo", intent: "Commercial" },
      { phrase: "authentic designer bags Bahrain", volume: "350/mo", intent: "Transactional" },
      { phrase: "premium perfume store Manama", volume: "280/mo", intent: "Commercial" },
      { phrase: "luxury gifts Bahrain Eid", volume: "220/mo", intent: "Commercial" }
    ]
  },
  d2c: {
    title: "D2C Brand Organic Growth Systems",
    metaTitle: "D2C Brand SEO Bahrain | Direct-to-Consumer Growth - BAE",
    metaDesc: "Escape rising Instagram CAC. Build organic search infrastructure for your D2C brand in Bahrain. Brand entity SEO, product authority, and zero-click customer acquisition.",
    icon: <Rocket className="h-10 w-10 text-electric-blue-light" />,
    subtitle: "You built a product people love — now build the search infrastructure so they can find it without paying Instagram. Organic search is the only channel where customer acquisition cost decreases over time while volume increases.",
    summary: "Your Instagram CAC is climbing every quarter. iOS privacy changes killed your retargeting. Meta's algorithm changes buried your organic reach. You are paying more to reach fewer people. Organic search is the only customer acquisition channel where cost decreases over time. Every month your organic infrastructure compounds — more keywords ranked, more pages indexed, more authority built. We construct the product authority, brand entity, and category infrastructure that makes your D2C brand discoverable through search — permanently, at zero cost per click.",
    highlights: [
      "Brand entity establishment in Google's Knowledge Graph",
      "Product category authority replacing paid social dependency",
      "Content-to-commerce funnels: guides that drive product purchases",
      "Founder story and brand narrative SEO for trust building"
    ],
    description: "Direct-to-consumer brands in Bahrain face a unique challenge: they built their customer base on Instagram and TikTok, platforms where reach is rented, not owned. Every algorithm change threatens revenue. BAE builds owned search infrastructure that cannot be taken away by platform changes — brand entity authority, product category content, and educational funnels that attract customers through intent-based search rather than interruption-based advertising.",
    locality: "Bahrain Bay, Manama",
    latitude: 26.2439,
    longitude: 50.5750,
    painPoints: [
      { title: "The Instagram CAC Crisis", desc: "Your customer acquisition cost on Meta ads has doubled in 18 months. iOS privacy changes destroyed your retargeting audiences. Algorithm changes reduced your organic reach to under 5%. You are paying more to reach fewer people every quarter. Organic search reverses this equation: cost goes down as your authority grows, and no platform algorithm change can take your rankings away." },
      { title: "Brand Entity = Search Moat", desc: "When someone searches your brand name, do you own the entire first page? Or do marketplace listings, review sites, and competitors appear? We build your brand entity in Google's Knowledge Graph — your website, social profiles, press mentions, and founder story all connected as one verified entity. This is a permanent search asset." },
      { title: "Content-to-Commerce Funnels", desc: "D2C brands sell stories, not just products. We build educational content funnels: 'how to choose the right [product],' 'X vs Y comparison,' 'beginner's guide to [category].' Each piece drives traffic to your product pages through internal linking. This is how organic search replaces paid social — by capturing buyers during their research phase." }
    ],
    faqs: [
      { q: "Can organic search really replace our Instagram ad spend?", a: "Not overnight — but it can reduce your dependency dramatically. Month 1: We establish your brand entity and deploy product schema. Month 3: Content funnels begin generating organic traffic. Month 6: Organic search becomes your second-largest revenue channel. Most D2C brands reduce paid social spend by 30–50% within 6 months while growing total revenue through organic compound growth." },
      { q: "How do you build a brand entity in Google?", a: "We connect your website, Google Business Profile, social media accounts, press mentions, and founder bios into a coherent entity that Google's Knowledge Graph recognizes. This includes Organization schema, founder Person schema, brand SameAs connections, and structured press coverage. Once established, your brand becomes a verified entity that Google trusts and recommends." },
      { q: "What content drives D2C product sales?", a: "Three types: (1) Comparison content — 'our product vs competitor product' capturing buyers in the consideration phase, (2) Educational guides — 'how to choose the right X' capturing early-stage researchers, and (3) Use-case content — 'best X for [specific situation]' capturing buyers with specific needs. Each type links directly to your product pages." },
      { q: "How long before organic replaces our social dependency?", a: "Organic search is a compounding asset. Month 1–3: Foundation building. Month 4–6: Organic traffic grows 20–40% per month. Month 7–12: Organic becomes a reliable, scalable channel. By month 12, most D2C brands see organic search generating 25–40% of total revenue — a channel that did not exist before and costs zero in marginal customer acquisition." }
    ],
    eeatCredentials: [
      { label: "Brand Entity Architecture", detail: "Organization and Person schema connecting your brand, founders, and products into a verified Knowledge Graph entity that Google treats as an authoritative source." },
      { label: "Content-Commerce Integration", detail: "Educational content funnels strategically linked to product pages — every guide, comparison, and use-case article serves as a zero-cost customer acquisition channel." },
      { label: "Platform-Independent Authority", detail: "We build search authority that lives on your domain — not on Instagram, TikTok, or any platform that can change algorithms or policies overnight. Owned traffic, owned data, owned growth." }
    ],
    methodology: "Our D2C growth playbook: (1) Brand entity establishment — connecting your brand across Google's Knowledge Graph with Organization, Person, and Product schema, (2) Content funnel architecture — educational guides, comparison content, and use-case articles that drive product discovery, (3) Product category authority — building topical depth around your product category so Google treats your store as the expert source, and (4) Founder narrative SEO — positioning your brand story as a trust signal that differentiates from generic marketplace sellers. We track organic revenue as a percentage of total revenue monthly.",
    keywords: [
      { phrase: "buy [brand category] Bahrain", volume: "Varies", intent: "Transactional" },
      { phrase: "best [product type] GCC", volume: "Varies", intent: "Commercial" },
      { phrase: "[brand name] review", volume: "Varies", intent: "Informational" },
      { phrase: "natural [category] products Bahrain", volume: "300/mo", intent: "Commercial" }
    ]
  },
  marketplace: {
    title: "Multi-Vendor Marketplace SEO Systems",
    metaTitle: "Marketplace SEO Bahrain | Multi-Vendor Platform Ranking - BAE",
    metaDesc: "Rank your multi-vendor marketplace against Noon and Amazon. Vendor profile schema, category depth architecture, and long-tail product discovery systems.",
    icon: <Store className="h-10 w-10 text-electric-blue-light" />,
    subtitle: "Noon has 30 million products indexed. Your marketplace has 5,000. Here is how to win the long-tail battle: granular category architectures, vendor profile schemas, and local delivery zone targeting that captures the searches marketplace giants overlook.",
    summary: "You cannot outindex Noon or Amazon on breadth. But you can outrank them on depth. Large marketplaces optimize for volume — generic category pages with thin content. Your marketplace advantage is specificity: niche categories, curated vendor stories, local delivery zones, and product expertise that generic platforms cannot replicate. We build granular category architectures, vendor authority profiles, and neighborhood-level delivery targeting that captures the 70% of long-tail product searches that marketplace giants do not optimize for.",
    highlights: [
      "Long-tail category pages that beat marketplace generic listings",
      "Vendor profile schema establishing merchant authority",
      "Neighborhood delivery zone pages for local purchase intent",
      "Niche category depth where broad marketplaces are thin"
    ],
    description: "Running a multi-vendor marketplace in Bahrain means competing against Noon, Amazon.ae, and regional giants with vastly larger catalogs. BAE levels the playing field by exploiting the structural weakness of large marketplaces: they optimize for breadth, not depth. We build your marketplace's SEO around niche category expertise, vendor trust signals, and local delivery specificity that enterprise marketplaces cannot replicate at their scale.",
    locality: "Hidd Industrial Area",
    latitude: 26.2131,
    longitude: 50.6558,
    painPoints: [
      { title: "Depth Beats Breadth", desc: "Noon has 30 million products but thin category pages. Your marketplace with 5,000 curated products can build 300-word buying guides, vendor spotlights, and expert recommendations on every category page. Google rewards depth over breadth. We structure your categories to out-quality the giants where they are weakest." },
      { title: "Vendor Authority as Ranking Signal", desc: "Your vendors are your competitive advantage. We build individual vendor profile pages with business schema, product specializations, customer ratings, and location data — creating a trust layer that generic marketplace listings cannot match. Each vendor profile becomes a ranking asset." },
      { title: "Local Delivery Advantage", desc: "Your marketplace delivers to specific Bahrain neighborhoods faster than international platforms. We build delivery zone landing pages that capture 'buy [product] delivery [area]' searches — leveraging your local logistics advantage as a search ranking signal." }
    ],
    faqs: [
      { q: "Can a small marketplace really compete with Noon?", a: "On broad terms like 'buy phone,' no. But Noon's category pages for niche products are thin — auto-generated with no editorial content. We build 50–100 deep category pages in your niche with buying guides, vendor recommendations, and curated collections. For specific long-tail queries, your 300-word expert category page outranks Noon's auto-generated listing every time." },
      { q: "How do vendor profiles help SEO?", a: "Each vendor profile is a unique, indexable page with its own keywords: 'Bahrain handmade jewelry shop,' 'organic food supplier Manama.' These pages rank independently for vendor-specific searches and pass authority to the products they sell. It is a scaling strategy: every new vendor adds new ranking opportunities." },
      { q: "What about marketplace platform SEO limitations?", a: "We work with all major marketplace platforms: CS-Cart, Sharetribe, Dokan, custom builds. Each has SEO constraints we know how to work around — custom canonical configurations, programmatic category content injection, and vendor schema deployment via API or tag management." },
      { q: "How do you handle thousands of product pages?", a: "We use a tiered approach: top 200 products get dedicated optimization with full schema. Category pages get editorial content and buying guides. The remaining catalog gets automated Product schema through template-level implementation. This ensures crawl budget focuses on your revenue drivers while the long tail still gets indexed." }
    ],
    eeatCredentials: [
      { label: "Vendor Authority Schema", detail: "Organization and LocalBusiness schema for each vendor — establishing merchant credibility, specializations, and customer ratings as trust signals that Google uses to rank marketplace listings." },
      { label: "Category Depth Strategy", detail: "Editorial buying guides and curated recommendations on every category page — creating the content depth that differentiates your marketplace from auto-generated enterprise listings." },
      { label: "Multi-Vendor Technical SEO", detail: "Platform-agnostic schema deployment across CS-Cart, Sharetribe, Dokan, and custom marketplace builds — handling the unique crawl, canonical, and indexation challenges of multi-vendor architectures." }
    ],
    methodology: "Our marketplace SEO playbook: (1) Category depth audit — identifying the 50 niche categories where you can out-content Noon and Amazon, (2) Vendor profile schema deployment — building authority pages for every active vendor with business data, specializations, and ratings, (3) Delivery zone landing pages — hyper-local pages for every neighborhood you serve faster than international competitors, and (4) Programmatic product schema across your catalog via template-level implementation. We track category ranking positions and marketplace GMV from organic search weekly.",
    keywords: [
      { phrase: "online marketplace Bahrain", volume: "340/mo", intent: "Navigational" },
      { phrase: "buy local products Bahrain", volume: "280/mo", intent: "Commercial" },
      { phrase: "Bahrain online shopping delivery", volume: "450/mo", intent: "Transactional" },
      { phrase: "handmade products Bahrain", volume: "190/mo", intent: "Commercial" }
    ]
  }
};

export async function generateStaticParams() {
  return [
    { subpage: "fashion" },
    { subpage: "electronics" },
    { subpage: "beauty" },
    { subpage: "grocery" },
    { subpage: "home-furniture" },
    { subpage: "luxury" },
    { subpage: "d2c" },
    { subpage: "marketplace" }
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
      canonical: `https://bahrainauthorityengine.com/industries/ecommerce/${subpage}`
    }
  };
}

export default async function EcommerceSubpage({ params }: PageProps) {
  const { subpage } = await params;
  const data = subpagesRegistry[subpage];

  if (!data) {
    notFound();
  }

  return (
    <div className="relative min-h-screen bg-black-matte text-white font-[family-name:var(--font-inter)] overflow-hidden noise-overlay">
      {/* Dynamic Schema Injections */}
      <LocalBusinessSchema
        type="ProfessionalService"
        name={`${data.title} - BAE Systems`}
        url={`https://bahrainauthorityengine.com/industries/ecommerce/${subpage}`}
        telephone="+973 1700 0000"
        streetAddress="BAE Digital Commerce Hub, Block 905"
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
          <Link href="/industries/ecommerce" className="hover:text-white transition-colors">E-commerce SEO</Link>
          <span className="text-white/20">/</span>
          <span className="text-electric-blue">{data.title.split(" ")[0]} Niche</span>
        </div>

        {/* Hero Section */}
        <div className="max-w-4xl mb-12 sm:mb-20">
          <span className="inline-flex items-center gap-1.5 text-xs font-semibold text-success-green uppercase tracking-widest px-3.5 py-1 rounded-full border border-success-green/20 bg-success-green/5 animate-pulse-glow">
            <Zap className="h-3.5 w-3.5 text-success-green" /> E-commerce Revenue System
          </span>
          <h1 className="text-3xl sm:text-5xl lg:text-6xl font-[family-name:var(--font-space)] font-bold mt-6 tracking-tight leading-tight">
            {data.title}
          </h1>
          <p className="mt-6 text-base sm:text-xl text-soft-gray leading-relaxed max-w-3xl">
            {data.subtitle}
          </p>
        </div>

        {/* Hormozi-Style Value Proposition Hook */}
        <div className="mb-16 sm:mb-24 max-w-5xl">
          <div className="relative overflow-hidden rounded-2xl border border-white/10 bg-slate-900/40 p-6 backdrop-blur-xl md:p-8" style={{ boxShadow: "0 8px 32px 0 rgba(0, 0, 0, 0.37)" }}>
            <div className="absolute -top-24 -left-24 h-48 w-48 rounded-full bg-blue-500/10 blur-3xl" />
            <div className="flex items-center gap-3 border-b border-white/5 pb-4 mb-4">
              <div className="flex h-10 w-10 items-center justify-center rounded-lg bg-blue-500/10 text-blue-400">
                <TrendingUp className="h-5 w-5" />
              </div>
              <div>
                <h4 className="flex items-center gap-2 text-sm font-semibold tracking-wide text-slate-200 uppercase">The Revenue Value Proposition</h4>
                <span className="text-[11px] text-slate-400">Hormozi Value Equation & CAC Optimization</span>
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
              <Target className="h-3.5 w-3.5" /> High-Value Buyer Intents
            </span>
            <h2 className="text-2xl sm:text-3xl font-[family-name:var(--font-space)] font-bold mt-3">
              Bahrain Niche Keyword Valuation
            </h2>
            <p className="text-soft-gray text-sm sm:text-base mt-2 max-w-2xl">
              We target high-intent search phrases that translate directly into product purchases. By owning these organic positions, you bypass expensive ad bidding and marketplace commissions.
            </p>
          </div>

          <div className="overflow-x-auto rounded-xl border border-white/[0.06] bg-white/[0.01]">
            <table className="min-w-full divide-y divide-white/[0.06] text-left text-sm text-soft-gray">
              <thead className="bg-white/[0.03] text-xs font-semibold uppercase text-white">
                <tr>
                  <th scope="col" className="px-6 py-4">Target Keyword (Bahrain Focus)</th>
                  <th scope="col" className="px-6 py-4">Search Volume (Est.)</th>
                  <th scope="col" className="px-6 py-4">Search Intent Category</th>
                  <th scope="col" className="px-6 py-4">Revenue Potential</th>
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
                    <td className="px-6 py-4 text-success-green font-bold">HIGH (Direct Purchase)</td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </div>

        {/* Revenue Pillars */}
        <div className="mb-16 sm:mb-24">
          <div className="mb-10">
            <span className="inline-flex items-center gap-1.5 text-xs font-semibold text-electric-blue uppercase tracking-widest px-3 py-1 rounded-full border border-electric-blue/20 bg-electric-blue/5 mb-4">
              <Award className="h-3.5 w-3.5" /> Revenue Opportunities
            </span>
            <h2 className="text-2xl sm:text-3xl font-[family-name:var(--font-space)] font-bold mt-3">
              SEO Revenue Pillars for Store Owners
            </h2>
            <p className="text-soft-gray text-sm sm:text-base mt-2">
              The specific organic infrastructure we deploy to drive qualified buyers to your store.
            </p>
          </div>

          <div className="grid md:grid-cols-3 gap-6">
            {data.painPoints.map((point, idx) => (
              <div
                key={idx}
                className="group glass rounded-xl sm:rounded-2xl p-6 sm:p-8 hover:glow-blue transition-all duration-500 border border-white/[0.04] hover:border-electric-blue/20 cursor-default"
              >
                <div className="w-10 h-10 rounded-xl bg-electric-blue/10 flex items-center justify-center mb-6 group-hover:bg-electric-blue/20 transition-colors duration-300">
                  <BarChart3 className="w-5 h-5 text-electric-blue" />
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
              <ShieldCheck className="h-3.5 w-3.5" /> Technical Authority
            </span>
            <h2 className="text-2xl sm:text-3xl font-[family-name:var(--font-space)] font-bold mt-3">
              Schema & Authority Validations
            </h2>
            <p className="text-soft-gray text-sm sm:text-base mt-2">
              How BAE structures technical infrastructure to prove your store&apos;s authority to search engines and AI systems.
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
                How We Execute: Store Optimization Process
              </h3>
            </div>
            <p className="text-soft-gray leading-relaxed text-sm sm:text-base mb-6">
              {data.methodology}
            </p>
            <div className="flex items-start gap-3 pt-4 border-t border-white/[0.04]">
              <ShieldCheck className="h-5 w-5 text-electric-blue flex-shrink-0 mt-0.5" />
              <p className="text-soft-gray text-xs sm:text-sm leading-relaxed">
                <strong className="text-white">Platform Agnostic:</strong> We integrate with Shopify, WooCommerce, Magento, and custom headless builds. Our schema injection and crawl optimization systems work regardless of your e-commerce platform.
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
                Revenue Infrastructure & Marketplace Competition Framework
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
              Frequently Asked Questions (Store Owner FAQ)
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
            Ready to Dominate <span className="gradient-text">{data.title.split(" ")[0]} E-commerce Search?</span>
          </h2>
          <p className="text-soft-gray text-sm sm:text-base max-w-xl mx-auto mb-8">
            Book a free 30-minute revenue infrastructure audit. We will show you exactly which product searches your competitors own and how to capture them at zero ad spend.
          </p>
          <div className="flex flex-col sm:flex-row items-center justify-center gap-3">
            <Link
              href="/#contact"
              className="group inline-flex items-center gap-2 px-8 py-4 bg-electric-blue hover:bg-electric-blue-dark text-white font-bold rounded-full transition-all duration-300 hover:shadow-[0_0_30px_rgba(59,130,246,0.4)] text-sm sm:text-base"
            >
              Book Revenue Audit
              <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
            </Link>
            <Link
              href="/#contact"
              className="group inline-flex items-center gap-2 px-8 py-4 border border-white/10 hover:border-electric-blue/50 text-white font-semibold rounded-full transition-all duration-300 hover:bg-white/[0.03] text-sm sm:text-base"
            >
              <FileSearch className="w-4 h-4 text-electric-blue" />
              Free Competitor Gap Report
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
