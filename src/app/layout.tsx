import type { Metadata } from "next";
import { Inter, Space_Grotesk } from "next/font/google";
import "./globals.css";

const inter = Inter({
  variable: "--font-inter",
  subsets: ["latin"],
  display: "swap",
});

const spaceGrotesk = Space_Grotesk({
  variable: "--font-space",
  subsets: ["latin"],
  display: "swap",
});

export const metadata: Metadata = {
  title: "Bahrain Authority Engine™ | AI-First SEO Agency in Bahrain",
  description:
    "Dominate Google & AI search in Bahrain. We help clinics, law firms, restaurants, and luxury businesses become the most visible brand in their market using AI-first SEO systems.",
  keywords: [
    "SEO Bahrain",
    "AI SEO",
    "SEO agency Bahrain",
    "Google ranking Bahrain",
    "digital marketing Bahrain",
    "AI visibility",
    "local SEO Bahrain",
  ],
  openGraph: {
    title: "Bahrain Authority Engine™ | AI-First SEO Agency",
    description:
      "Dominate Google & AI search in Bahrain with AI-first SEO systems.",
    type: "website",
    locale: "en_BH",
  },
  robots: {
    index: true,
    follow: true,
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html
      lang="en"
      className={`${inter.variable} ${spaceGrotesk.variable} h-full antialiased`}
    >
      <body className="min-h-full flex flex-col bg-black-matte text-white font-[family-name:var(--font-inter)]">
        {children}
      </body>
    </html>
  );
}
