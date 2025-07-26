import type { Metadata } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: "Lucky Patel - Full Stack Gen AI Developer | AI Engineer Portfolio India",
  description: "Lucky Patel (luckypatel.in) - Full Stack Gen AI Developer from Ahmedabad, India. Specializing in RAG systems, LLMs, and AI integration with 2.5+ years experience building 10+ AI applications.",
  keywords: "Lucky Patel, LuckyPatel, Patel Lucky, luckypatel.in, Gen AI Developer India, Full Stack Developer Ahmedabad, AI Engineer Gujarat, RAG Systems, LLM Integration",
  authors: [{ name: "Lucky Patel" }],
  creator: "Lucky Patel",
  publisher: "Lucky Patel",
  robots: "index, follow",
  
  // Open Graph / Facebook
  openGraph: {
    type: "website",
    locale: "en_IN",
    url: "https://luckypatel.in",
    title: "Lucky Patel - Full Stack Gen AI Developer India",
    description: "Portfolio of Lucky Patel (luckypatel.in) - Gen AI specialist from Ahmedabad, India building cutting-edge AI solutions",
    siteName: "Lucky Patel Portfolio",
    images: [
      {
        url: "https://luckypatel.in/profile.PNG",
        width: 1200,
        height: 630,
        alt: "Lucky Patel - Full Stack Gen AI Developer from Ahmedabad, India",
      },
    ],
  },
  
  // Twitter
  twitter: {
    card: "summary_large_image",
    title: "Lucky Patel - Full Stack Gen AI Developer",
    description: "Portfolio of Lucky Patel, Gen AI specialist and full-stack developer from India",
    images: ["https://luckypatel.in/profile.PNG"],
    creator: "@LuckyPatel",
  },
  
  // Additional Meta
  metadataBase: new URL("https://luckypatel.in"),
  alternates: {
    canonical: "https://luckypatel.in",
  },
  
  // Geo Location
  other: {
    "geo.region": "IN-GJ",
    "geo.placename": "Ahmedabad, Gujarat, India",
    "geo.position": "23.0225;72.5714",
    "ICBM": "23.0225, 72.5714",
  },
  
  // Icons
  icons: {
    icon: [
      { url: "/favicon.ico", sizes: "32x32" },
      { url: "/favicon-16x16.png", sizes: "16x16", type: "image/png" },
      { url: "/favicon-32x32.png", sizes: "32x32", type: "image/png" },
    ],
    apple: [
      { url: "/apple-touch-icon.png", sizes: "180x180", type: "image/png" },
    ],
    other: [
      { url: "/android-chrome-192x192.png", sizes: "192x192", type: "image/png" },
    ],
  },
  
  // Manifest
  manifest: "/manifest.json",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <head>
        {/* Structured Data - JSON-LD */}
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{
            __html: JSON.stringify({
              "@context": "https://schema.org",
              "@type": "Person",
              "name": "Lucky Patel",
              "alternateName": ["LuckyPatel", "Patel Lucky"],
              "url": "https://luckypatel.in",
              "image": "https://luckypatel.in/profile.PNG",
              "jobTitle": "Full Stack Gen AI Developer",
              "nationality": "Indian",
              "worksFor": {
                "@type": "Organization",
                "name": "Silvertouch Technologies",
                "address": {
                  "@type": "PostalAddress",
                  "addressCountry": "India"
                }
              },
              "address": {
                "@type": "PostalAddress",
                "streetAddress": "Ahmedabad",
                "addressLocality": "Ahmedabad",
                "addressRegion": "Gujarat",
                "addressCountry": "India"
              },
              "sameAs": [
                "https://linkedin.com/in/lucky7x",
                "https://github.com/lucky7xx",
                "https://luckypatel.in"
              ],
              "knowsAbout": [
                "Artificial Intelligence",
                "Machine Learning",
                "Full Stack Development",
                "RAG Systems",
                "LLM Integration",
                "Generative AI",
                "Next.js",
                "React",
                "Node.js"
              ],
              "email": "lbp7198@gmail.com",
              "telephone": "+91-9824697672",
              "birthPlace": "India",
              "homeLocation": {
                "@type": "Place",
                "name": "Ahmedabad, Gujarat, India"
              }
            })
          }}
        />
        
        {/* Google Analytics (add your GA4 tracking ID) */}
        {/* <script async src="https://www.googletagmanager.com/gtag/js?id=GA_MEASUREMENT_ID"></script>
        <script dangerouslySetInnerHTML={{
          __html: `
            window.dataLayer = window.dataLayer || [];
            function gtag(){dataLayer.push(arguments);}
            gtag('js', new Date());
            gtag('config', 'GA_MEASUREMENT_ID');
          `
        }} /> */}
      </head>
      <body
        className={`${geistSans.variable} ${geistMono.variable} antialiased`}
      >
        {children}
      </body>
    </html>
  );
}