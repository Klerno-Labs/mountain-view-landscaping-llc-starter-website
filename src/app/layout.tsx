import type { Metadata } from "next";
import { Montserrat, Inter, Playfair_Display } from "next/font/google";
import "./globals.css";
import Navbar from "@/components/layout/Navbar";
import Footer from "@/components/layout/Footer";
import { siteConfig } from "@/config/site";

const heading = Montserrat({ 
  subsets: ["latin"], 
  variable: "--font-heading",
  display: "swap",
});

const body = Inter({ 
  subsets: ["latin"], 
  variable: "--font-body",
  display: "swap",
});

const accent = Playfair_Display({ 
  subsets: ["latin"], 
  variable: "--font-accent",
  display: "swap",
});

export const metadata: Metadata = {
  metadataBase: new URL("https://mountainviewlandscaping.com"),
  title: {
    default: siteConfig.name,
    template: `%s | ${siteConfig.name}`,
  },
  description: siteConfig.description,
  keywords: ["Landscaping Austin", "Lawn Care", "Hardscaping", "Irrigation", "Tree Trimming"],
  openGraph: {
    type: "website",
    locale: "en_US",
    url: siteConfig.url,
    title: siteConfig.name,
    description: siteConfig.description,
    images: [
      {
        url: siteConfig.ogImage,
        width: 1200,
        height: 630,
        alt: siteConfig.name,
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: siteConfig.name,
    description: siteConfig.description,
    images: [siteConfig.ogImage],
  },
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en" className={`${heading.variable} ${body.variable} ${accent.variable}`}>
      <head>
        <link rel="preconnect" href="https://fonts.googleapis.com" />
        <link rel="icon" href="/favicon.ico" />
      </head>
      <body className="min-h-screen flex flex-col">
        <Navbar />
        <main className="flex-1">{children}</main>
        <Footer />
        
        {/* Structured Data */}
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{
            __html: JSON.stringify({
              "@context": "https://schema.org",
              "@type": "Landscaping",
              "name": siteConfig.name,
              "image": siteConfig.ogImage,
              "@id": siteConfig.url,
              "url": siteConfig.url,
              "telephone": siteConfig.contact.phone,
              "address": {
                "@type": "PostalAddress",
                "streetAddress": "4821 Westlake Dr",
                "addressLocality": "Austin",
                "addressRegion": "TX",
                "postalCode": "78746",
                "addressCountry": "US",
              },
              "geo": {
                "@type": "GeoCoordinates",
                "latitude": 30.2711,
                "longitude": -97.7949,
              },
              "openingHoursSpecification": {
                "@type": "OpeningHoursSpecification",
                "dayOfWeek": [
                  "Monday",
                  "Tuesday",
                  "Wednesday",
                  "Thursday",
                  "Friday",
                  "Saturday",
                ],
                "opens": "07:00",
                "closes": "18:00",
              },
              "priceRange": "$$",
            }),
          }}
        />
      </body>
    </html>
  );
}