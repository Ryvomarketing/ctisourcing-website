import { Metadata } from "next";

export const metadata: Metadata = {
  title: "Cookie Policy",
  description:
    "CTI Sourcing cookie policy. Learn about the cookies and tracking technologies used on our website.",
};

export default function CookiePolicyPage() {
  return (
    <section className="bg-black py-24">
      <div className="max-w-4xl mx-auto px-6 lg:px-8">
        <h1 className="font-serif text-4xl sm:text-5xl text-cream mb-4">
          Cookie Policy
        </h1>
        <p className="text-cream/40 text-sm mb-12">
          Last updated: February 9, 2025
        </p>

        <div className="prose">
          <p className="lead">
            This policy explains what cookies are, how ctisourcing.com uses
            them, and your options for managing them.
          </p>

          <h2>What Are Cookies?</h2>
          <p>
            Cookies are small text files stored on your device by your web
            browser when you visit a website. They are widely used to make
            websites work efficiently and to provide information to site
            owners. Some cookies are essential for a site to function, while
            others help with analytics and performance.
          </p>

          <h2>Cookies We Use</h2>

          <h3>Google Analytics Cookies</h3>
          <p>
            We use Google Analytics 4 to understand how visitors interact with
            our website. Google Analytics sets cookies to distinguish unique
            users and throttle request rates. These cookies do not store
            personally identifiable information.
          </p>
          <p>Common Google Analytics cookies include:</p>
          <ul>
            <li>
              <strong>_ga</strong> &mdash; Distinguishes unique users. Expires
              after 2 years.
            </li>
            <li>
              <strong>_ga_*</strong> &mdash; Maintains session state. Expires
              after 2 years.
            </li>
          </ul>
          <p>
            For a full list of cookies set by Google Analytics, see{" "}
            <a
              href="https://developers.google.com/analytics/devguides/collection/analyticsjs/cookie-usage"
              target="_blank"
              rel="noopener noreferrer"
            >
              Google Analytics Cookie Usage
            </a>
            .
          </p>

          <h3>Google Tag Manager</h3>
          <p>
            Google Tag Manager is used to manage analytics tags on our site.
            GTM itself does not set cookies that track users, but it loads
            services (like Google Analytics) that may. See the{" "}
            <a
              href="https://marketingplatform.google.com/about/analytics/tag-manager/use-policy/"
              target="_blank"
              rel="noopener noreferrer"
            >
              Google Tag Manager Use Policy
            </a>{" "}
            for details.
          </p>

          <h2>Third-Party Cookies</h2>
          <p>
            Some third-party services loaded on our site may set their own
            cookies. We do not control these cookies. The third-party services
            we use and their respective cookie/privacy policies are:
          </p>
          <ul>
            <li>
              <a
                href="https://policies.google.com/technologies/cookies"
                target="_blank"
                rel="noopener noreferrer"
              >
                Google &mdash; How Google uses cookies
              </a>
            </li>
            <li>
              <a
                href="https://vercel.com/legal/cookie-policy"
                target="_blank"
                rel="noopener noreferrer"
              >
                Vercel Cookie Policy
              </a>
            </li>
          </ul>

          <h2>Managing Cookies</h2>
          <p>
            You can control and manage cookies in several ways:
          </p>

          <h3>Browser Settings</h3>
          <p>
            Most browsers allow you to view, manage, and delete cookies
            through their settings. Instructions for common browsers:
          </p>
          <ul>
            <li>
              <a
                href="https://support.google.com/chrome/answer/95647"
                target="_blank"
                rel="noopener noreferrer"
              >
                Google Chrome
              </a>
            </li>
            <li>
              <a
                href="https://support.mozilla.org/en-US/kb/cookies-information-websites-store-on-your-computer"
                target="_blank"
                rel="noopener noreferrer"
              >
                Mozilla Firefox
              </a>
            </li>
            <li>
              <a
                href="https://support.apple.com/guide/safari/manage-cookies-sfri11471"
                target="_blank"
                rel="noopener noreferrer"
              >
                Safari
              </a>
            </li>
            <li>
              <a
                href="https://support.microsoft.com/en-us/microsoft-edge/manage-cookies-in-microsoft-edge-view-allow-block-delete-and-use-168dab11-0753-043d-7c16-ede5947fc64d"
                target="_blank"
                rel="noopener noreferrer"
              >
                Microsoft Edge
              </a>
            </li>
          </ul>

          <h3>Google Analytics Opt-Out</h3>
          <p>
            You can specifically opt out of Google Analytics tracking by
            installing the{" "}
            <a
              href="https://tools.google.com/dlpage/gaoptout"
              target="_blank"
              rel="noopener noreferrer"
            >
              Google Analytics Opt-out Browser Add-on
            </a>
            .
          </p>

          <h2>Impact of Disabling Cookies</h2>
          <p>
            Disabling cookies will not affect the core functionality of our
            website. You will still be able to browse all pages and submit
            inquiries. Disabling analytics cookies simply means your visit
            will not be counted in our traffic reports.
          </p>

          <h2>Changes to This Policy</h2>
          <p>
            We may update this cookie policy to reflect changes in the
            technologies we use. Updates will be posted on this page with a
            revised date. Please review it periodically.
          </p>

          <h2>Contact</h2>
          <p>
            If you have questions about our use of cookies, please reach out
            through the contact form on our website.
          </p>
        </div>
      </div>
    </section>
  );
}
