# Bahrain Authority Engine

AI-first SEO agency site. Next.js 16, React 19, TypeScript.

## Stack

- Next.js 16.2.6 (App Router, SSR/SSG)
- React 19, TypeScript
- Tailwind CSS 4
- Framer Motion, GSAP, Lenis

## Quick Start

```bash
npm install
npm run dev
# http://localhost:3000
```

## Architecture

```
src/app/
├── page.tsx              # Home
├── layout.tsx            # Root layout + schema
├── industries/[industry]/ # Dynamic industry pages
├── locations/[location]/  # Dynamic location pages
└── sitemap.ts

src/components/
├── Navbar, Footer, FloatingCTA
├── HeroSection, TrustBar, LoadingScreen
├── ProblemSection, AIOpportunitySection, OfferSection
├── CaseStudiesSection, TestimonialsSection, TeamSection
├── ContactSection, FAQSection, ProcessSection
└── UX: CursorGlow, ScrollProgress, LocalBusinessSchema
```

## Key Design Decisions

| Aspect | Choice | Why |
|--------|--------|-----|
| Routing | Dynamic segments `[industry]`, `[location]` | Scales industry/location pages without duplication |
| Client UX | Cursor glow, scroll progress | Engagement metrics |
| SSR | Per-page (home is client, schema runs server) | SEO + performance trade-off |
| Schema | LocalBusinessSchema + OpenGraph | Local SEO + social share |
| Animations | Framer/GSAP with Lenis | Smooth scroll physics |

## Data Flow

```
Root Layout (metadata, schema injection)
  ↓
Page Route [industry/location]
  ↓
Component Composition (Hero → Content → CTA → Contact)
  ↓
Client Enhancements (CursorGlow, ScrollProgress)
```

## SEO Stack

- **Sitemap**: `sitemap.ts` (dynamic generation)
- **Schema**: `LocalBusinessSchema` (Google Maps integration)
- **OpenGraph**: Per-page metadata
- **Robots**: index: true, follow: true
- **Bilingual**: Ready for EN/AR split

## Performance Notes

- CursorGlow: `ssr: false` (client-side only)
- Font swap: Inter + Space Grotesk (no layout shift)
- Target: <500ms response times
- Next.js code splitting (automatic)

## Routes

```
/                    # Home
/industries/[name]   # Industry page
/industries/[name]/[subpage] # Nested
/locations/[city]    # City page (Manama, Muharraq, Seef, Riffa)
/privacy-policy      # Legal
/sitemap.xml         # Generated
```

## Build & Deploy

```bash
npm run build
npm start
```

## Dev Notes

- Pre-configured ESLint (Next.js config)
- Tailwind 4 (new `@import` syntax)
- React 19 (watch for async parent changes)
- TypeScript strict mode
