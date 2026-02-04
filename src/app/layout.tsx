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

export const metadata: Metadata = {
  title: "CTI Sourcing | Premium Beeswax & Honey from Tanzania",
  description:
    "USDA Organic certified beeswax and honey sourced from Tanzania's protected forests. Full traceability, bulk supply, delivered from the US. Your trusted partner for premium African bee products.",
  keywords: [
    "beeswax",
    "organic beeswax",
    "bulk beeswax",
    "Tanzania beeswax",
    "African beeswax",
    "honey",
    "organic honey",
    "USDA organic",
    "beeswax supplier",
    "wholesale beeswax",
  ],
  authors: [{ name: "CTI Sourcing" }],
  openGraph: {
    title: "CTI Sourcing | Premium Beeswax & Honey from Tanzania",
    description:
      "USDA Organic certified beeswax and honey sourced from Tanzania's protected forests. Full traceability, bulk supply, delivered from the US.",
    type: "website",
    locale: "en_US",
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
    <html lang="en" className={`${dmSans.variable} ${playfair.variable}`}>
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
