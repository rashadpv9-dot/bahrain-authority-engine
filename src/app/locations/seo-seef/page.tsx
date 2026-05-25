import React from "react";
import LocationPage from "../[location]/page";

export const metadata = {
  title: "SEO Agency Seef | Clinic & Business SEO Seef - BAE",
  description: "Rank #1 for medical and retail search queries in Seef. NHRA-compliant local optimization, dynamic coordinates schema, and high-performance search maps.",
  alternates: {
    canonical: "https://bahrainauthorityengine.com/locations/seo-seef"
  }
};

export default function SeefPage() {
  const params = Promise.resolve({ location: "seo-seef" });
  return <LocationPage params={params} />;
}
