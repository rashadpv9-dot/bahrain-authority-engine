# Bahrain Authority Engine

A modern SEO services website built with Next.js, React 19, and Tailwind CSS. Features industry-specific pages, location-based services, and AI-powered content solutions for businesses in Bahrain.

## Features

- **Industry-Specific Pages** — Tailored SEO solutions for different sectors
- **Location-Based Services** — Targeted content for regions across Bahrain
- **AI Components** — Intelligent tools and integrations for content optimization
- **Responsive Design** — Mobile-first approach with Tailwind CSS
- **Smooth Animations** — Enhanced UX with Framer Motion and GSAP
- **Team & Process Sections** — Showcase expertise and methodology
- **Contact Integration** — Easy client communication

## Tech Stack

- **Framework** — Next.js 16.2.6
- **React** — 19.2.4
- **Styling** — Tailwind CSS 4
- **Animations** — Framer Motion, GSAP, Lenis
- **Icons** — Lucide React
- **Language** — TypeScript

## Getting Started

### Prerequisites
- Node.js 18+
- npm or yarn

### Installation

```bash
npm install
```

### Development

```bash
npm run dev
```

Open [http://localhost:3000](http://localhost:3000) to view the site.

### Build & Deploy

```bash
npm run build
npm start
```

### Linting

```bash
npm run lint
```

## Website Architecture

### System Design

```
┌─────────────────────────────────────────────┐
│        Next.js 16 App Router (SSR/SSG)      │
├─────────────────────────────────────────────┤
│                                             │
│  ┌──────────────────────────────────────┐   │
│  │     Root Layout (layout.tsx)         │   │
│  │  - Global metadata & Open Graph      │   │
│  │  - LocalBusinessSchema integration   │   │
│  │  - Font loading (Inter, Space Grotesk)   │
│  └──────────────────────────────────────┘   │
│           ↓                                  │
│  ┌──────────────────────────────────────┐   │
│  │    Page Routes & Dynamic Segments    │   │
│  │  - [industry] → Industry pages       │   │
│  │  - [location] → Location pages       │   │
│  │  - [subpage] → Nested routes         │   │
│  │  - /privacy-policy                   │   │
│  │  - /sitemap.ts                       │   │
│  └──────────────────────────────────────┘   │
│           ↓                                  │
│  ┌──────────────────────────────────────┐   │
│  │    Component Composition Layer       │   │
│  │  - Navbar (Navigation)               │   │
│  │  - Hero & Trust sections             │   │
│  │  - Content sections (Problem, AI...)         │   │
│  │  - CTAs & Engagement                 │   │
│  │  - Contact & Footer                  │   │
│  └──────────────────────────────────────┘   │
│           ↓                                  │
│  ┌──────────────────────────────────────┐   │
│  │   UX Enhancement Layer               │   │
│  │  - Cursor Glow (dynamic, client-side)│   │
│  │  - Scroll Progress indicator         │   │
│  │  - Loading Screen                    │   │
│  │  - Floating CTA                      │   │
│  └──────────────────────────────────────┘   │
└─────────────────────────────────────────────┘
                    ↓
         ┌──────────────────────┐
         │   Styling Layer      │
         │  - Tailwind CSS 4    │
         │  - Global CSS module │
         │  - Custom themes     │
         └──────────────────────┘
                    ↓
         ┌──────────────────────┐
         │ Animation Libraries  │
         │  - Framer Motion     │
         │  - GSAP              │
         │  - Lenis (scroll)    │
         └──────────────────────┘
```

### Project Structure

```
src/
├── app/
│   ├── layout.tsx                 # Root layout with metadata & schema
│   ├── page.tsx                   # Home page (main landing)
│   ├── globals.css                # Global Tailwind styles
│   ├── industries/
│   │   ├── [industry]/
│   │   │   └── page.tsx           # Dynamic industry pages
│   │   └── [industry]/[subpage]/
│   │       └── page.tsx           # Nested industry sub-pages
│   ├── locations/
│   │   ├── [location]/
│   │   │   └── page.tsx           # Dynamic location pages
│   │   ├── seo-manama/
│   │   ├── seo-muharraq/
│   │   ├── seo-seef/
│   │   └── seo-riffa/
│   ├── privacy-policy/
│   │   └── page.tsx
│   └── sitemap.ts                 # Sitemap generation
│
├── components/
│   ├── Core Navigation
│   │   ├── Navbar.tsx
│   │   ├── Footer.tsx
│   │   └── FloatingCTA.tsx
│   │
│   ├── Hero & Trust
│   │   ├── HeroSection.tsx
│   │   ├── TrustBar.tsx
│   │   └── LoadingScreen.tsx
│   │
│   ├── Marketing Sections
│   │   ├── ProblemSection.tsx
│   │   ├── AIOpportunitySection.tsx
│   │   ├── OfferSection.tsx
│   │   ├── ValueStackSection.tsx
│   │   ├── DifferentiatorSection.tsx
│   │   ├── HowWeThinkSection.tsx
│   │   ├── GuaranteeSection.tsx
│   │   └── ScarcitySection.tsx
│   │
│   ├── Social Proof
│   │   ├── CaseStudiesSection.tsx
│   │   ├── TestimonialsSection.tsx
│   │   └── TeamSection.tsx
│   │
│   ├── Engagement & Forms
│   │   ├── ContactSection.tsx
│   │   ├── FinalCTASection.tsx
│   │   ├── AISummaryBox.tsx
│   │   └── FAQSection.tsx
│   │
│   ├── UX Enhancements
│   │   ├── CursorGlow.tsx          # Dynamic cursor effect (client-side)
│   │   ├── ScrollProgress.tsx      # Scroll indicator
│   │   ├── ProcessSection.tsx      # Timeline/steps
│   │   └── LocalBusinessSchema.tsx # Structured data
│   │
│   └── ...more components
│
└── types/                         # TypeScript type definitions
```

### Core Architecture Decisions

| Layer | Technology | Purpose |
|-------|-----------|---------|
| **Framework** | Next.js 16 | SSR, SSG, App Router, dynamic routing |
| **UI Library** | React 19 | Component-based UI with hooks |
| **Styling** | Tailwind CSS 4 | Utility-first CSS framework |
| **Animations** | Framer Motion, GSAP | Smooth interactions & scroll effects |
| **Scroll Physics** | Lenis | Smooth scroll experience |
| **Icons** | Lucide React | SVG icon system |
| **Language** | TypeScript | Type-safe development |

### Page Flow Architecture

```
Home (page.tsx)
    ↓
[LoadingScreen] → [Navbar] → [Hero] → [Trust] → [Content Sections]
                    ↓
         [ScrollProgress] [FloatingCTA]
                    ↓
         [Contact] → [Footer] → [CursorGlow]
```

### Dynamic Content System

```
Industries: healthcare, ecommerce, law, restaurants, luxury, etc.
    └── Each industry has:
        ├── Main industry page
        └── Sub-pages (case studies, expertise, etc.)

Locations: Manama, Muharraq, Seef, Riffa, +custom locations
    └── SEO-optimized location pages
```

### SEO & Structured Data

- **OpenGraph tags** for social media sharing
- **LocalBusinessSchema** integration for Google Maps/Business Profile
- **Dynamic sitemap generation** (sitemap.ts)
- **Bilingual support** ready (English & Arabic framework)
- **AI Search optimization** (AEO) architecture
- **Meta tags** generation per page
- **Robots.txt** compliance (index: true, follow: true)

### Performance Optimizations

- **Dynamic imports** (CursorGlow) with `ssr: false` for client-only features
- **Font swapping** (Inter, Space Grotesk) to avoid layout shift
- **Sub-500ms response times** target
- **Next.js Code Splitting** for faster page loads
- **Streaming UI components** via React 19

## Project Structure (Simplified)

```
src/
├── app/              # Next.js app router pages
├── components/       # Reusable React components
├── styles/          # Global styles
└── types/           # TypeScript type definitions
```

## Key Components

- **Navbar** — Navigation with CTA buttons
- **Hero Section** — Landing page introduction
- **Services** — Industry and location-based offerings
- **Team Section** — Meet the SEO experts
- **Process Section** — Transparent methodology
- **Contact Section** — Client engagement
- **LocalBusinessSchema** — Structured data for local SEO

## Performance

- Fast Refresh for instant development feedback
- Optimized images and code splitting
- SEO-first architecture

## License

Private repository

## Contact

For inquiries about SEO services in Bahrain, visit our website or contact our team.
