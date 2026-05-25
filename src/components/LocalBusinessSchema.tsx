import React from "react";

interface LocalBusinessSchemaProps {
  type?: "ProfessionalService" | "LocalBusiness" | "MedicalClinic";
  name: string;
  url: string;
  telephone: string;
  streetAddress: string;
  addressLocality: string;
  addressRegion: string;
  addressCountry?: string;
  postalCode?: string;
  latitude: number;
  longitude: number;
  openingHours?: string[];
  sameAs?: string[];
  priceRange?: string;
  image?: string;
  description?: string;
}

export default function LocalBusinessSchema({
  type = "ProfessionalService",
  name,
  url,
  telephone,
  streetAddress,
  addressLocality,
  addressRegion,
  addressCountry = "BH",
  postalCode,
  latitude,
  longitude,
  openingHours = ["Mo-Su 00:00-23:59"],
  sameAs = [],
  priceRange = "$$",
  image,
  description
}: LocalBusinessSchemaProps) {
  const schema = {
    "@context": "https://schema.org",
    "@type": type,
    "name": name,
    "url": url,
    "telephone": telephone,
    "address": {
      "@type": "PostalAddress",
      "streetAddress": streetAddress,
      "addressLocality": addressLocality,
      "addressRegion": addressRegion,
      "addressCountry": addressCountry,
      ...(postalCode ? { "postalCode": postalCode } : {})
    },
    "geo": {
      "@type": "GeoCoordinates",
      "latitude": latitude,
      "longitude": longitude
    },
    "openingHoursSpecification": openingHours.map((hours) => {
      // Parse opening hours (e.g. "Mo-Fr 09:00-18:00")
      const parts = hours.split(" ");
      const days = parts[0] ? parts[0].split("-") : ["Monday", "Friday"];
      const times = parts[1] ? parts[1].split("-") : ["09:00", "18:00"];
      
      const dayMapping: { [key: string]: string } = {
        "Mo": "Monday", "Tu": "Tuesday", "We": "Wednesday", "Th": "Thursday",
        "Fr": "Friday", "Sa": "Saturday", "Su": "Sunday"
      };

      const opens = times[0];
      const closes = times[1];

      return {
        "@type": "OpeningHoursSpecification",
        "dayOfWeek": days.map(d => dayMapping[d] || d),
        "opens": opens,
        "closes": closes
      };
    }),
    "priceRange": priceRange,
    ...(sameAs.length > 0 ? { "sameAs": sameAs } : {}),
    ...(image ? { "image": image } : {}),
    ...(description ? { "description": description } : {})
  };

  return (
    <script
      type="application/ld+json"
      dangerouslySetInnerHTML={{ __html: JSON.stringify(schema) }}
    />
  );
}
