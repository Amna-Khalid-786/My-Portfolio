import { Metadata } from "next";
import Link from "next/link";

export const metadata: Metadata = {
  title: "Privacy Policy | Amna Khalid Portfolio",
  description: "Privacy policy for Amna Khalid's portfolio website. Learn how we handle your data.",
};

export default function PrivacyPolicy() {
  return (
    <main className="min-h-screen pt-32 pb-24 px-6">
      <div className="max-w-3xl mx-auto">
        {/* Header */}
        <div className="mb-16">
          <Link
            href="/"
            className="inline-flex items-center gap-2 text-slate-500 hover:text-indigo-400 transition-colors text-sm font-bold mb-8"
          >
            <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 19l-7-7 7-7" />
            </svg>
            Back to Portfolio
          </Link>
          <h1 className="text-4xl md:text-6xl font-black text-white tracking-tight mb-4">
            Privacy <span className="gradient-text">Policy</span>
          </h1>
          <p className="text-slate-400">
            Last updated: November 2026
          </p>
          <div className="h-1 w-16 bg-gradient-to-r from-indigo-500 to-purple-600 rounded-full mt-6" />
        </div>

        {/* Content */}
        <div className="space-y-10 text-slate-400 leading-relaxed">
          <section>
            <h2 className="text-xl font-black text-white mb-4">1. Introduction</h2>
            <p>
              Welcome to Amna Khalid&apos;s portfolio website (&quot;we&quot;, &quot;our&quot;, or &quot;us&quot;). This Privacy Policy explains how we collect, use, disclose, and safeguard your information when you visit our portfolio website. Please read this policy carefully. If you disagree with its terms, please discontinue use of the site.
            </p>
          </section>

          <section>
            <h2 className="text-xl font-black text-white mb-4">2. Information We Collect</h2>
            <p className="mb-4">We may collect the following types of information:</p>
            <ul className="list-disc list-inside space-y-2 ml-4">
              <li>
                <strong className="text-white">Contact Information:</strong> When you use the contact form, we collect your name, email address, and message content. This is used solely to respond to your inquiry.
              </li>
              <li>
                <strong className="text-white">Usage Data:</strong> We may collect non-identifiable information about how you interact with our website, such as pages visited and time spent.
              </li>
              <li>
                <strong className="text-white">Device Information:</strong> Basic device and browser type information for compatibility purposes.
              </li>
            </ul>
          </section>

          <section>
            <h2 className="text-xl font-black text-white mb-4">3. How We Use Your Information</h2>
            <p className="mb-4">The information we collect is used to:</p>
            <ul className="list-disc list-inside space-y-2 ml-4">
              <li>Respond to contact form inquiries and messages</li>
              <li>Improve the portfolio website and user experience</li>
              <li>Analyze site traffic and usage patterns (in aggregate, anonymized form)</li>
              <li>Comply with legal obligations</li>
            </ul>
          </section>

          <section>
            <h2 className="text-xl font-black text-white mb-4">4. Third-Party Services</h2>
            <p className="mb-4">We use the following third-party services that may process your data:</p>
            <div className="glass-morphism rounded-2xl p-6 border border-white/5 space-y-4">
              <div>
                <h3 className="text-white font-bold mb-1">Web3Forms</h3>
                <p className="text-sm">Used to process contact form submissions. Your name, email, and message are transmitted to Web3Forms for delivery. View their{" "}
                  <a href="https://web3forms.com/privacy" target="_blank" rel="noopener noreferrer" className="text-indigo-400 hover:underline">privacy policy</a>.
                </p>
              </div>
              <div>
                <h3 className="text-white font-bold mb-1">Vercel</h3>
                <p className="text-sm">This website is hosted on Vercel. Vercel may collect server logs and performance data. View their{" "}
                  <a href="https://vercel.com/legal/privacy-policy" target="_blank" rel="noopener noreferrer" className="text-indigo-400 hover:underline">privacy policy</a>.
                </p>
              </div>
              <div>
                <h3 className="text-white font-bold mb-1">Google Fonts</h3>
                <p className="text-sm">We use Google Fonts for typography. Google may log requests. View their{" "}
                  <a href="https://policies.google.com/privacy" target="_blank" rel="noopener noreferrer" className="text-indigo-400 hover:underline">privacy policy</a>.
                </p>
              </div>
            </div>
          </section>

          <section>
            <h2 className="text-xl font-black text-white mb-4">5. Cookies</h2>
            <p>
              This website uses minimal cookies necessary for functionality. We do not use tracking cookies or advertising cookies. You can configure your browser to refuse all cookies, though some features may not function properly as a result.
            </p>
          </section>

          <section>
            <h2 className="text-xl font-black text-white mb-4">6. Data Retention</h2>
            <p>
              Contact form submissions are retained only as long as necessary to respond to your inquiry. We do not sell, trade, or rent your personal information to third parties.
            </p>
          </section>

          <section>
            <h2 className="text-xl font-black text-white mb-4">7. Your Rights</h2>
            <p className="mb-4">You have the right to:</p>
            <ul className="list-disc list-inside space-y-2 ml-4">
              <li>Request access to any personal data we hold about you</li>
              <li>Request correction or deletion of your personal data</li>
              <li>Object to or restrict our processing of your data</li>
              <li>Withdraw consent at any time (where processing is based on consent)</li>
            </ul>
          </section>

          <section>
            <h2 className="text-xl font-black text-white mb-4">8. Security</h2>
            <p>
              We implement reasonable technical and organizational security measures to protect your information. However, no method of transmission over the Internet is 100% secure, and we cannot guarantee absolute security.
            </p>
          </section>

          <section>
            <h2 className="text-xl font-black text-white mb-4">9. Children&apos;s Privacy</h2>
            <p>
              This website is not directed to children under 13 years of age. We do not knowingly collect personal information from children under 13.
            </p>
          </section>

          <section>
            <h2 className="text-xl font-black text-white mb-4">10. Changes to This Policy</h2>
            <p>
              We may update this Privacy Policy from time to time. Changes will be posted on this page with an updated revision date. Continued use of the site constitutes your acceptance of any changes.
            </p>
          </section>

          <section>
            <h2 className="text-xl font-black text-white mb-4">11. Contact Us</h2>
            <p>
              If you have any questions about this Privacy Policy, please contact us at:
            </p>
            <div className="mt-4 glass-morphism rounded-2xl p-6 border border-white/5">
              <p className="text-white font-bold">Amna Khalid</p>
              <a href="mailto:amnapersonal4@gmail.com" className="text-indigo-400 hover:underline">
                amnapersonal4@gmail.com
              </a>
            </div>
          </section>
        </div>

        <div className="mt-16 pt-8 border-t border-white/5 text-center">
          <Link href="/" className="text-indigo-400 hover:underline text-sm font-bold">
            ← Return to Portfolio
          </Link>
        </div>
      </div>
    </main>
  );
}
