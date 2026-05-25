import React from "react";
import LocationPage from "../[location]/page";

export const metadata = {
  title: "SEO Services Riffa | Local Search Agency Riffa - BAE",
  description: "Get found by residents in East & West Riffa. Dominate Google Local Pack, Apple Maps, and conversational search engines with BAE local systems.",
  alternates: {
    canonical: "https://bahrainauthorityengine.com/locations/seo-riffa"
  }
};

export default function RiffaPage() {
  const params = Promise.resolve({ location: "seo-riffa" });
  return <LocationPage params={params} />;
}
