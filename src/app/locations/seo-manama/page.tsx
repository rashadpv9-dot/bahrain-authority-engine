import React from "react";
import LocationPage from "../[location]/page";

export const metadata = {
  title: "SEO Services Manama | Search Engine Agency Manama - BAE",
  description: "Achieve #1 rankings and AI Overviews visibility in Manama. Local business schema, high-authority backlink outreach, and GCC digital marketing structures.",
  alternates: {
    canonical: "https://bahrainauthorityengine.com/locations/seo-manama"
  }
};

export default function ManamaPage() {
  const params = Promise.resolve({ location: "seo-manama" });
  return <LocationPage params={params} />;
}
