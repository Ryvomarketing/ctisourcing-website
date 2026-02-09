import { Metadata } from "next";
import Link from "next/link";

export const metadata: Metadata = {
  title: "Terms of Use",
  description:
    "CTI Sourcing website terms of use. Understand the terms and conditions governing your use of our website.",
};

export default function TermsPage() {
  return (
    <section className="bg-black py-24">
      <div className="max-w-4xl mx-auto px-6 lg:px-8">
        <h1 className="font-serif text-4xl sm:text-5xl text-cream mb-4">
          Terms of Use
        </h1>
        <p className="text-cream/40 text-sm mb-12">
          Last updated: February 9, 2025
        </p>

        <div className="prose">
          <p className="lead">
            By accessing and using ctisourcing.com (&quot;the Site&quot;), you
            agree to the following terms. If you do not agree, please
            discontinue use of the Site.
          </p>

          <h2>1. Use of the Site</h2>
          <p>
            This website is provided by CTI Sourcing for informational and
            business inquiry purposes. The content on this site is intended for
            business professionals exploring sourcing partnerships for beeswax
            and honey products. You agree to use this site lawfully and not for
            any fraudulent or harmful purpose.
          </p>

          <h2>2. Intellectual Property</h2>
          <p>
            All content on this site &mdash; including text, images, logos,
            graphics, and design &mdash; is the property of CTI Sourcing or its
            licensors and is protected by applicable copyright and trademark
            laws. You may not reproduce, distribute, or use any content from
            this site without our prior written permission.
          </p>

          <h2>3. Product Information</h2>
          <p>
            Product descriptions, certifications, and specifications on this
            site are provided for general informational purposes. While we
            strive to keep information accurate and up to date, details such as
            pricing, availability, minimum order quantities, and
            certifications may change without notice. All business terms are
            subject to a formal written agreement between the parties.
          </p>

          <h2>4. Inquiry Submissions</h2>
          <p>
            When you submit an inquiry through our contact form, you agree
            that:
          </p>
          <ul>
            <li>
              The information you provide is accurate and relates to a
              legitimate business inquiry
            </li>
            <li>
              We may use your contact information to respond to your inquiry
              and discuss potential business opportunities
            </li>
            <li>
              Submitting an inquiry does not create a contractual obligation on
              either party
            </li>
          </ul>
          <p>
            You will receive a confirmation email acknowledging receipt of your
            inquiry. This confirmation does not constitute a binding offer or
            agreement.
          </p>

          <h2>5. Third-Party Services &amp; Links</h2>
          <p>
            Our site integrates with and may link to third-party services. We
            are not responsible for the content, privacy practices, or terms of
            these services. Your use of third-party services is governed by
            their respective terms and policies:
          </p>
          <ul>
            <li>
              <strong>Google Analytics &amp; Google Tag Manager</strong> &mdash;{" "}
              <a
                href="https://policies.google.com/terms"
                target="_blank"
                rel="noopener noreferrer"
              >
                Google Terms of Service
              </a>
            </li>
            <li>
              <strong>WhatsApp</strong> &mdash;{" "}
              <a
                href="https://www.whatsapp.com/legal/terms-of-service"
                target="_blank"
                rel="noopener noreferrer"
              >
                WhatsApp Terms of Service
              </a>
            </li>
            <li>
              <strong>Cal.com</strong> &mdash;{" "}
              <a
                href="https://cal.com/terms"
                target="_blank"
                rel="noopener noreferrer"
              >
                Cal.com Terms of Service
              </a>
            </li>
            <li>
              <strong>Vercel (hosting)</strong> &mdash;{" "}
              <a
                href="https://vercel.com/legal/terms"
                target="_blank"
                rel="noopener noreferrer"
              >
                Vercel Terms of Service
              </a>
            </li>
          </ul>
          <p>
            We encourage you to review the terms and privacy policies of any
            third-party service before using it. CTI Sourcing is not liable for
            any data handling or practices of these third-party providers.
          </p>

          <h2>6. WhatsApp Communication</h2>
          <p>
            Our site provides a link to contact us directly via WhatsApp. By
            choosing to message us on WhatsApp, you are using Meta&apos;s
            WhatsApp platform, which is governed by{" "}
            <a
              href="https://www.whatsapp.com/legal/terms-of-service"
              target="_blank"
              rel="noopener noreferrer"
            >
              WhatsApp&apos;s Terms of Service
            </a>{" "}
            and{" "}
            <a
              href="https://www.whatsapp.com/legal/privacy-policy"
              target="_blank"
              rel="noopener noreferrer"
            >
              WhatsApp&apos;s Privacy Policy
            </a>
            . CTI Sourcing does not control WhatsApp&apos;s data collection,
            storage, or processing practices. Any information you share via
            WhatsApp is subject to Meta&apos;s policies, not ours.
          </p>

          <h2>7. Email Communications</h2>
          <p>
            Inquiry confirmation emails and any subsequent correspondence are
            sent via Google&apos;s Gmail infrastructure. Email delivery and
            data handling by Google are governed by the{" "}
            <a
              href="https://policies.google.com/terms"
              target="_blank"
              rel="noopener noreferrer"
            >
              Google Terms of Service
            </a>
            . We are not responsible for email delivery failures or data
            processing by email providers on either end.
          </p>

          <h2>8. Disclaimer of Warranties</h2>
          <p>
            This website and its content are provided &quot;as is&quot; and
            &quot;as available&quot; without warranties of any kind, whether
            express or implied. CTI Sourcing does not warrant that the site
            will be uninterrupted, error-free, or free of harmful components.
          </p>

          <h2>9. Limitation of Liability</h2>
          <p>
            To the fullest extent permitted by law, CTI Sourcing shall not be
            liable for any indirect, incidental, special, or consequential
            damages arising from your use of the site, your reliance on any
            information provided, or your use of third-party services linked
            from the site.
          </p>

          <h2>10. Governing Law</h2>
          <p>
            These terms are governed by and construed in accordance with the
            laws of the United States. Any disputes arising from the use of
            this site shall be resolved in accordance with applicable US law.
          </p>

          <h2>11. Changes to These Terms</h2>
          <p>
            We reserve the right to modify these terms at any time. Changes
            will be posted on this page with an updated date. Continued use of
            the site after changes are posted constitutes acceptance of the
            revised terms.
          </p>

          <h2>12. Related Policies</h2>
          <p>
            Please also review our{" "}
            <Link href="/privacy">Privacy Policy</Link> and{" "}
            <Link href="/cookie-policy">Cookie Policy</Link>, which govern
            your use of this site.
          </p>

          <h2>13. Contact</h2>
          <p>
            For questions about these terms, please reach out through the
            contact form on our website.
          </p>
        </div>
      </div>
    </section>
  );
}
