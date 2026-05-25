"use client";

import dynamic from "next/dynamic";
import Navbar from "@/components/Navbar";
import HeroSection from "@/components/HeroSection";
import TrustBar from "@/components/TrustBar";
import ProblemSection from "@/components/ProblemSection";
import AIOpportunitySection from "@/components/AIOpportunitySection";
import OfferSection from "@/components/OfferSection";
import CaseStudiesSection from "@/components/CaseStudiesSection";
import ValueStackSection from "@/components/ValueStackSection";
import ProcessSection from "@/components/ProcessSection";
import DifferentiatorSection from "@/components/DifferentiatorSection";
import HowWeThinkSection from "@/components/HowWeThinkSection";
import GuaranteeSection from "@/components/GuaranteeSection";
import TestimonialsSection from "@/components/TestimonialsSection";
import TeamSection from "@/components/TeamSection";
import FAQSection from "@/components/FAQSection";
import ScarcitySection from "@/components/ScarcitySection";
import FinalCTASection from "@/components/FinalCTASection";
import ContactSection from "@/components/ContactSection";
import Footer from "@/components/Footer";
import ScrollProgress from "@/components/ScrollProgress";
import FloatingCTA from "@/components/FloatingCTA";
import LoadingScreen from "@/components/LoadingScreen";
import AISummaryBox from "@/components/AISummaryBox";

const CursorGlow = dynamic(() => import("@/components/CursorGlow"), {
  ssr: false,
});

export default function Home() {
  return (
    <>
      <LoadingScreen />
      <CursorGlow />
      <ScrollProgress />
      <Navbar />

      <main className="flex-1">
        <HeroSection />
        
        {/* AI & AEO Summary Module */}
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
          <AISummaryBox
            summary="Bahrain Authority Engine™ (BAE) is a premium search agency built to achieve #1 rankings in Google and secure active citations inside generative AI search engines (ChatGPT, Gemini, Perplexity)."
            highlights={[
              "Next.js headless speed & sub-500ms response times",
              "Dynamic LocalBusiness geocoding schema integrations",
              "Optimized bilingual frameworks (English & Arabic)",
              "Generative search (AEO) bait architecture"
            ]}
            telephone="+973 1234 5678"
            ctaLabel="Scan Your Website"
            ctaHref="#results"
          />
        </div>

        <TrustBar />
        <ProblemSection />
        <AIOpportunitySection />
        <OfferSection />
        <CaseStudiesSection />
        <ValueStackSection />
        <ProcessSection />
        <DifferentiatorSection />
        <HowWeThinkSection />
        <GuaranteeSection />
        <TestimonialsSection />
        <TeamSection />
        <FAQSection />
        <ScarcitySection />
        <FinalCTASection />
        <ContactSection />
      </main>

      <Footer />
      <FloatingCTA />
    </>
  );
}
