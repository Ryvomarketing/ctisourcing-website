import { Metadata } from "next";

export const metadata: Metadata = {
  title: "Privacy Policy",
  description:
    "CTI Sourcing privacy policy. Learn how we collect, use, and protect your information when you visit our website or contact us.",
};

export default function PrivacyPolicyPage() {
  return (
    <section className="bg-black py-24">
      <div className="max-w-4xl mx-auto px-6 lg:px-8">
        <h1 className="font-serif text-4xl sm:text-5xl text-cream mb-4">
          Privacy Policy
        </h1>
        <p className="text-cream/40 text-sm mb-12">
          Last updated: February 9, 2025
        </p>

        <div className="prose">
          <p className="lead">
            CTI Sourcing (&quot;we,&quot; &quot;us,&quot; or &quot;our&quot;)
            respects your privacy. This policy explains what information we
            collect when you visit ctisourcing.com and how we use it.
          </p>

          <h2>1. Information We Collect</h2>

          <h3>Information You Provide</h3>
          <p>
            When you submit an inquiry through our contact form, we collect the
            information you provide, which may include:
          </p>
          <ul>
            <li>Full name and company name</li>
            <li>Email address</li>
            <li>Phone number (optional)</li>
            <li>Product interest and estimated volume</li>
            <li>Any message content you include</li>
          </ul>
          <p>
            We use this information solely to respond to your inquiry and
            discuss potential business opportunities. We do not sell, rent, or
            share your contact information with third parties for marketing
            purposes.
          </p>

          <h3>Information Collected Automatically</h3>
          <p>
            When you visit our website, certain information is collected
            automatically through cookies and similar technologies. This
            includes:
          </p>
          <ul>
            <li>
              Pages visited, time spent on pages, and navigation patterns
            </li>
            <li>Browser type, device type, and operating system</li>
            <li>Referring website or source</li>
            <li>General geographic region (country/city level, not precise location)</li>
          </ul>
          <p>
            This data is aggregated and does not personally identify you. We use
            it to understand how visitors use our site so we can improve the
            experience.
          </p>

          <h2>2. Third-Party Services</h2>
          <p>
            We use the following third-party services to operate our website.
            Each service has its own privacy policy governing how it handles
            data:
          </p>

          <h3>Google Analytics &amp; Google Tag Manager</h3>
          <p>
            We use Google Analytics 4 (GA4) and Google Tag Manager (GTM) to
            understand website traffic and usage patterns. These services may
            use cookies and collect anonymized usage data. We do not send any
            personally identifiable information (PII) to Google Analytics.
          </p>
          <ul>
            <li>
              <a
                href="https://policies.google.com/privacy"
                target="_blank"
                rel="noopener noreferrer"
              >
                Google Privacy Policy
              </a>
            </li>
            <li>
              <a
                href="https://support.google.com/analytics/answer/6004245"
                target="_blank"
                rel="noopener noreferrer"
              >
                How Google Analytics safeguards your data
              </a>
            </li>
            <li>
              <a
                href="https://marketingplatform.google.com/about/analytics/tag-manager/use-policy/"
                target="_blank"
                rel="noopener noreferrer"
              >
                Google Tag Manager Use Policy
              </a>
            </li>
          </ul>
          <p>
            You can opt out of Google Analytics by installing the{" "}
            <a
              href="https://tools.google.com/dlpage/gaoptout"
              target="_blank"
              rel="noopener noreferrer"
            >
              Google Analytics Opt-out Browser Add-on
            </a>
            .
          </p>

          <h3>Google Fonts</h3>
          <p>
            Our website uses Google Fonts to display typography. When you visit
            our site, your browser may connect to Google&apos;s servers to load
            font files. See the{" "}
            <a
              href="https://developers.google.com/fonts/faq/privacy"
              target="_blank"
              rel="noopener noreferrer"
            >
              Google Fonts Privacy FAQ
            </a>{" "}
            for details.
          </p>

          <h3>Email Communications (Gmail / Google Workspace)</h3>
          <p>
            When you submit an inquiry, we send a confirmation email and
            process your message using Google&apos;s Gmail service. Your email
            address and message content are transmitted through Google&apos;s
            servers. See the{" "}
            <a
              href="https://policies.google.com/privacy"
              target="_blank"
              rel="noopener noreferrer"
            >
              Google Privacy Policy
            </a>{" "}
            for details on how Google handles email data.
          </p>

          <h3>WhatsApp (Meta)</h3>
          <p>
            Our site provides a link to contact us via WhatsApp. If you choose
            to message us on WhatsApp, your communication is governed by
            WhatsApp&apos;s and Meta&apos;s privacy policies. We do not control
            how WhatsApp/Meta collects or processes your data within their
            platform.
          </p>
          <ul>
            <li>
              <a
                href="https://www.whatsapp.com/legal/privacy-policy"
                target="_blank"
                rel="noopener noreferrer"
              >
                WhatsApp Privacy Policy
              </a>
            </li>
            <li>
              <a
                href="https://www.meta.com/legal/privacy-policy/"
                target="_blank"
                rel="noopener noreferrer"
              >
                Meta Privacy Policy
              </a>
            </li>
          </ul>

          <h3>Cal.com</h3>
          <p>
            We use Cal.com for scheduling consultations. If you book a call,
            Cal.com may collect your name, email, and scheduling preferences.
            See the{" "}
            <a
              href="https://cal.com/privacy"
              target="_blank"
              rel="noopener noreferrer"
            >
              Cal.com Privacy Policy
            </a>{" "}
            for details.
          </p>

          <h3>Vercel</h3>
          <p>
            Our website is hosted on Vercel. Vercel may collect standard server
            logs (IP addresses, request timestamps) as part of hosting
            operations. See the{" "}
            <a
              href="https://vercel.com/legal/privacy-policy"
              target="_blank"
              rel="noopener noreferrer"
            >
              Vercel Privacy Policy
            </a>{" "}
            for details.
          </p>

          <h2>3. How We Use Your Information</h2>
          <p>We use the information we collect to:</p>
          <ul>
            <li>Respond to your inquiries and provide requested information</li>
            <li>Send a confirmation email when you submit an inquiry</li>
            <li>Analyze website usage to improve our content and user experience</li>
            <li>Ensure the security and proper functioning of our website</li>
          </ul>

          <h2>4. Data Retention</h2>
          <p>
            Inquiry submissions are retained for as long as necessary to
            respond to and follow up on your request. Analytics data is
            retained according to default Google Analytics settings (14 months
            for user-level data). You may request deletion of your personal
            information by contacting us.
          </p>

          <h2>5. Your Rights</h2>
          <p>
            Depending on your jurisdiction, you may have the right to:
          </p>
          <ul>
            <li>Request access to the personal information we hold about you</li>
            <li>Request correction or deletion of your personal information</li>
            <li>Opt out of analytics tracking (see Google Analytics opt-out above)</li>
            <li>Withdraw consent for data processing where applicable</li>
          </ul>
          <p>
            To exercise any of these rights, contact us using the information
            on our website.
          </p>

          <h2>6. Security</h2>
          <p>
            We implement reasonable security measures to protect the
            information submitted through our website, including HTTPS
            encryption, rate limiting on form submissions, input validation,
            and security headers. However, no method of transmission over the
            internet is 100% secure.
          </p>

          <h2>7. Children&apos;s Privacy</h2>
          <p>
            Our website is intended for business professionals and is not
            directed at individuals under the age of 18. We do not knowingly
            collect personal information from children.
          </p>

          <h2>8. Changes to This Policy</h2>
          <p>
            We may update this privacy policy from time to time. Changes will
            be posted on this page with an updated revision date. Your
            continued use of the website after changes are posted constitutes
            acceptance of the updated policy.
          </p>

          <h2>9. Contact</h2>
          <p>
            If you have questions about this privacy policy, please reach out
            to us through the contact form on our website.
          </p>
        </div>
      </div>
    </section>
  );
}
