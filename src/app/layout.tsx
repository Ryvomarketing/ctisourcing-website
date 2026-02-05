import type { Metadata } from "next";
import { DM_Sans, Playfair_Display } from "next/font/google";
import "./globals.css";
import { Navbar } from "@/components/layout/navbar";
import { Footer } from "@/components/layout/footer";
import { ContactModalProvider } from "@/components/layout/contact-modal-context";

const dmSans = DM_Sans({
  subsets: ["latin"],
  variable: "--font-dm-sans",
  display: "swap",
});

const playfair = Playfair_Display({
  subsets: ["latin"],
  variable: "--font-playfair",
  display: "swap",
});

const siteUrl = "https://ctisourcing.com";

export const metadata: Metadata = {
  metadataBase: new URL(siteUrl),
  title: {
    default: "CTI Sourcing | Premium Beeswax & Honey from Tanzania",
    template: "%s | CTI Sourcing",
  },
  description:
    "USDA/NOP Organic certified beeswax and honey sourced from Tanzania's protected forests. Full traceability, bulk supply, delivered from the US. Your trusted partner for premium African bee products.",
  keywords: [
    "beeswax",
    "organic beeswax",
    "bulk beeswax",
    "Tanzania beeswax",
    "African beeswax",
    "honey",
    "organic honey",
    "USDA/NOP organic",
    "beeswax supplier",
    "wholesale beeswax",
    "beeswax manufacturer",
    "cosmetic grade beeswax",
    "pharmaceutical grade beeswax",
  ],
  authors: [{ name: "CTI Sourcing" }],
  creator: "CTI Sourcing",
  publisher: "CTI Sourcing",
  formatDetection: {
    email: false,
    address: false,
    telephone: false,
  },
  openGraph: {
    type: "website",
    locale: "en_US",
    url: siteUrl,
    siteName: "CTI Sourcing",
    title: "CTI Sourcing | Premium Beeswax & Honey from Tanzania",
    description:
      "USDA/NOP Organic certified beeswax and honey sourced from Tanzania's protected forests. Full traceability, bulk supply, delivered from the US.",
    images: [
      {
        url: "/og-image.jpg",
        width: 1200,
        height: 630,
        alt: "CTI Sourcing - Premium Beeswax & Honey from Tanzania",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "CTI Sourcing | Premium Beeswax & Honey from Tanzania",
    description:
      "USDA/NOP Organic certified beeswax and honey sourced from Tanzania's protected forests. Full traceability, bulk supply.",
    images: ["/og-image.jpg"],
  },
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      "max-video-preview": -1,
      "max-image-preview": "large",
      "max-snippet": -1,
    },
  },
  verification: {
    // Add these when you have them
    // google: "your-google-verification-code",
    // yandex: "your-yandex-verification-code",
  },
};

// JSON-LD Structured Data
const jsonLd = {
  "@context": "https://schema.org",
  "@type": "Organization",
  name: "CTI Sourcing",
  description:
    "Premium organic beeswax and honey sourced from Tanzania's protected forests. Exclusive US partner of QVC Africa.",
  url: siteUrl,
  logo: `${siteUrl}/favicon.svg`,
  contactPoint: {
    "@type": "ContactPoint",
    contactType: "sales",
    availableLanguage: ["English"],
  },
  sameAs: [],
  address: {
    "@type": "PostalAddress",
    addressCountry: "US",
  },
  founder: [
    {
      "@type": "Person",
      name: "Roger Manzur",
    },
    {
      "@type": "Person",
      name: "Bonaventure Mhonda",
    },
  ],
  knowsAbout: [
    "Beeswax",
    "Organic Beeswax",
    "Honey",
    "Organic Honey",
    "Tanzania",
    "Sustainable Sourcing",
  ],
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className={`${dmSans.variable} ${playfair.variable}`}>
      <head>
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
        />
      </head>
      <body className="font-sans">
        <ContactModalProvider>
          {/* Skip link for accessibility */}
          <a href="#main-content" className="skip-link">
            Skip to main content
          </a>

          <Navbar />

          <main id="main-content">{children}</main>

          <Footer />
        </ContactModalProvider>
      </body>
    </html>
  );
}
