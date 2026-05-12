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
import GuaranteeSection from "@/components/GuaranteeSection";
import TestimonialsSection from "@/components/TestimonialsSection";
import FAQSection from "@/components/FAQSection";
import ScarcitySection from "@/components/ScarcitySection";
import FinalCTASection from "@/components/FinalCTASection";
import Footer from "@/components/Footer";
import ScrollProgress from "@/components/ScrollProgress";
import FloatingCTA from "@/components/FloatingCTA";
import LoadingScreen from "@/components/LoadingScreen";

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
        <TrustBar />
        <ProblemSection />
        <AIOpportunitySection />
        <OfferSection />
        <CaseStudiesSection />
        <ValueStackSection />
        <ProcessSection />
        <DifferentiatorSection />
        <GuaranteeSection />
        <TestimonialsSection />
        <FAQSection />
        <ScarcitySection />
        <FinalCTASection />
      </main>

      <Footer />
      <FloatingCTA />
    </>
  );
}
