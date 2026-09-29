import type { Metadata, Viewport } from "next";
import { Plus_Jakarta_Sans } from "next/font/google";
import { site } from "@/lib/content";
import "./globals.css";

// Only the navbar wordmark uses a web font; everything else uses the system stack.
const jakarta = Plus_Jakarta_Sans({
  subsets: ["latin"],
  weight: ["700"],
  display: "swap",
  variable: "--font-jakarta",
});

const ogImage = {
  url: "/og-image.png",
  width: 1200,
  height: 630,
  alt: "Fintilla: helping lenders see beyond the books",
};

export const metadata: Metadata = {
  metadataBase: new URL(site.url),
  title: site.title,
  description: site.description,
  applicationName: site.name,
  authors: [{ name: site.legalName, url: site.url }],
  creator: site.legalName,
  publisher: site.legalName,
  category: "Financial Technology",
  keywords: [
    "MSME credit assessment",
    "small business lending",
    "AI credit underwriting",
    "alternative credit scoring",
    "thin-file borrowers",
    "new-to-credit lending",
    "MSME lending India",
    "UMKM lending Indonesia",
    "credit assessment platform",
    "Fintilla",
  ],
  alternates: {
    canonical: `${site.url}/`,
  },
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      "max-image-preview": "large",
      "max-snippet": -1,
      "max-video-preview": -1,
    },
  },
  openGraph: {
    type: "website",
    url: `${site.url}/`,
    siteName: site.name,
    title: site.title,
    description: site.description,
    locale: "en_US",
    images: [ogImage],
  },
  twitter: {
    card: "summary_large_image",
    title: site.title,
    description: site.description,
    images: [ogImage],
  },
  formatDetection: {
    email: false,
    address: false,
    telephone: false,
  },
  verification: {
    google: "64O8ZFJOv8HKtsgeRYOpQcrwHMEKvqHMWxBKsXTaIxY",
  },
};

export const viewport: Viewport = {
  width: "device-width",
  initialScale: 1,
  themeColor: "#F4F1FA",
};

const orgId = `${site.url}/#organization`;
const websiteId = `${site.url}/#website`;

const jsonLd = {
  "@context": "https://schema.org",
  "@graph": [
    {
      "@type": "Organization",
      "@id": orgId,
      name: site.name,
      legalName: site.legalName,
      url: `${site.url}/`,
      logo: {
        "@type": "ImageObject",
        url: `${site.url}/logofin.png`,
        width: 206,
        height: 181,
      },
      image: `${site.url}/og-image.png`,
      description: site.shortDescription,
      email: site.email,
      address: {
        "@type": "PostalAddress",
        addressCountry: "SG",
      },
      foundingLocation: {
        "@type": "Place",
        address: { "@type": "PostalAddress", addressCountry: "SG" },
      },
      areaServed: [
        { "@type": "Country", name: "India" },
        { "@type": "Country", name: "Indonesia" },
      ],
      knowsAbout: [
        "Credit assessment",
        "MSME lending",
        "Small business lending",
        "Credit underwriting",
        "Alternative credit data",
        "Artificial intelligence",
      ],
      contactPoint: {
        "@type": "ContactPoint",
        contactType: "sales",
        email: site.email,
        availableLanguage: ["English"],
      },
    },
    {
      "@type": "WebSite",
      "@id": websiteId,
      url: `${site.url}/`,
      name: site.name,
      description: site.shortDescription,
      publisher: { "@id": orgId },
      inLanguage: "en",
    },
    {
      "@type": "WebPage",
      "@id": `${site.url}/#webpage`,
      url: `${site.url}/`,
      name: site.title,
      description: site.description,
      isPartOf: { "@id": websiteId },
      about: { "@id": orgId },
      primaryImageOfPage: { "@type": "ImageObject", url: `${site.url}/og-image.png` },
      inLanguage: "en",
    },
  ],
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en" className={jakarta.variable}>
      <body>
        {children}
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
        />
      </body>
    </html>
  );
}
