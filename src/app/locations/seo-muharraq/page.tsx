import React from "react";
import LocationPage from "../[location]/page";

export const metadata = {
  title: "SEO Agency Muharraq | Amwaj Islands Local SEO - BAE",
  description: "Rank #1 for local searches in Muharraq and Amwaj. Geocoding schema injections, local maps pack rankings, and AI overview optimizations.",
  alternates: {
    canonical: "https://bahrainauthorityengine.com/locations/seo-muharraq"
  }
};

export default function MuharraqPage() {
  // Leverage the same page renderer but statically bound to "seo-muharraq"
  const params = Promise.resolve({ location: "seo-muharraq" });
  return <LocationPage params={params} />;
}
