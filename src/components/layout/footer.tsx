"use client";

import Link from "next/link";
import { useContactModal } from "./contact-modal-context";
import { Mail, MapPin } from "lucide-react";

const footerLinks = {
  navigation: [
    { href: "/", label: "Home" },
    { href: "/products", label: "Products" },
    { href: "/about", label: "About" },
  ],
  products: [
    { href: "/products#beeswax", label: "Beeswax" },
    { href: "/products#honey", label: "Honey" },
  ],
};

export function Footer() {
  const { openModal } = useContactModal();
  const currentYear = new Date().getFullYear();

  return (
    <footer
      className="bg-black border-t border-gold/10"
      role="contentinfo"
      aria-label="Site footer"
    >
      {/* Main Footer */}
      <div className="max-w-7xl mx-auto px-6 lg:px-8 py-16">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-12">
          {/* Brand Column */}
          <div className="lg:col-span-1">
            <Link href="/" className="inline-block mb-6" aria-label="CTI Sourcing - Home">
              <div className="flex items-center gap-3">
                {/* Honeycomb Icon */}
                <div className="relative w-10 h-10">
                  <svg
                    viewBox="0 0 40 40"
                    fill="none"
                    className="w-full h-full"
                    aria-hidden="true"
                  >
                    <path
                      d="M20 2L35 11V29L20 38L5 29V11L20 2Z"
                      stroke="currentColor"
                      strokeWidth="1.5"
                      className="text-gold"
                    />
                    <path
                      d="M20 14L25 17V23L20 26L15 23V17L20 14Z"
                      fill="currentColor"
                      className="text-gold"
                    />
                  </svg>
                </div>
                <div className="flex flex-col">
                  <span className="font-serif text-xl tracking-wide text-cream">
                    CTI
                  </span>
                  <span className="text-[10px] tracking-[0.3em] text-gold uppercase -mt-1">
                    Sourcing
                  </span>
                </div>
              </div>
            </Link>
            <p className="text-cream/60 text-sm leading-relaxed mb-6">
              Premium beeswax and honey sourced from Tanzania&apos;s protected
              forests. Delivered from the US.
            </p>
            <p className="text-gold/80 text-xs tracking-wide">
              Exclusive Partner of QVC Africa
            </p>
          </div>

          {/* Navigation Column */}
          <div>
            <h3 className="font-serif text-lg text-cream mb-6">Navigation</h3>
            <ul className="space-y-3">
              {footerLinks.navigation.map((link) => (
                <li key={link.href}>
                  <Link
                    href={link.href}
                    className="text-cream/60 hover:text-gold text-sm transition-colors duration-300"
                  >
                    {link.label}
                  </Link>
                </li>
              ))}
              <li>
                <button
                  onClick={openModal}
                  className="text-cream/60 hover:text-gold text-sm transition-colors duration-300"
                >
                  Contact
                </button>
              </li>
            </ul>
          </div>

          {/* Products Column */}
          <div>
            <h3 className="font-serif text-lg text-cream mb-6">Products</h3>
            <ul className="space-y-3">
              {footerLinks.products.map((link) => (
                <li key={link.label}>
                  <Link
                    href={link.href}
                    className="text-cream/60 hover:text-gold text-sm transition-colors duration-300"
                  >
                    {link.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Contact Column */}
          <div>
            <h3 className="font-serif text-lg text-cream mb-6">Contact</h3>
            <ul className="space-y-4">
              <li className="flex items-start gap-3">
                <MapPin className="w-4 h-4 text-gold mt-1 flex-shrink-0" aria-hidden="true" />
                <span className="text-cream/60 text-sm">
                  United States
                  <br />
                  <span className="text-cream/40 text-xs">
                    Sourcing from Tanzania
                  </span>
                </span>
              </li>
              <li>
                <button
                  onClick={openModal}
                  className="flex items-center gap-3 text-cream/60 hover:text-gold text-sm transition-colors duration-300"
                >
                  <Mail className="w-4 h-4 text-gold flex-shrink-0" aria-hidden="true" />
                  Get in Touch
                </button>
              </li>
            </ul>

            {/* Certifications */}
            <div className="mt-8 flex items-center gap-3">
              {/* USDA Organic Seal */}
              <img
                src="https://upload.wikimedia.org/wikipedia/commons/thumb/1/1d/USDA_organic_seal.svg/120px-USDA_organic_seal.svg.png"
                alt="USDA Organic Certified"
                className="w-10 h-10"
                loading="lazy"
              />
              <p className="text-xs text-cream/40">
                USDA/NOP & EU Organic Certified
              </p>
            </div>
          </div>
        </div>
      </div>

      {/* Bottom Bar */}
      <div className="border-t border-gold/10">
        <div className="max-w-7xl mx-auto px-6 lg:px-8 py-6">
          <p className="text-cream/40 text-xs text-center md:text-left">
            &copy; {currentYear} CTI Sourcing. All rights reserved.
          </p>
        </div>
      </div>
    </footer>
  );
}
