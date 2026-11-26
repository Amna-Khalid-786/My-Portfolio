import { Metadata } from "next";
import Link from "next/link";

export const metadata: Metadata = {
  title: "Terms of Service | Amna Khalid Portfolio",
  description: "Terms of service for Amna Khalid's portfolio website.",
};

export default function TermsOfService() {
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
            Terms of <span className="gradient-text">Service</span>
          </h1>
          <p className="text-slate-400">
            Last updated: November 2026
          </p>
          <div className="h-1 w-16 bg-gradient-to-r from-indigo-500 to-purple-600 rounded-full mt-6" />
        </div>

        {/* Content */}
        <div className="space-y-10 text-slate-400 leading-relaxed">
          <section>
            <h2 className="text-xl font-black text-white mb-4">1. Acceptance of Terms</h2>
            <p>
              By accessing and using this portfolio website (&quot;Site&quot;) owned and operated by Amna Khalid, you accept and agree to be bound by these Terms of Service. If you do not agree to these terms, please do not use this Site.
            </p>
          </section>

          <section>
            <h2 className="text-xl font-black text-white mb-4">2. Use of the Site</h2>
            <p className="mb-4">You may access and use this Site for lawful purposes only. You agree not to:</p>
            <ul className="list-disc list-inside space-y-2 ml-4">
              <li>Use the Site in any way that violates applicable local, national, or international laws or regulations</li>
              <li>Attempt to gain unauthorized access to any part of the Site or its related systems</li>
              <li>Transmit any unsolicited or unauthorized advertising or promotional material</li>
              <li>Engage in any conduct that restricts or inhibits anyone&apos;s use or enjoyment of the Site</li>
              <li>Reproduce, duplicate, copy, or resell any part of this Site without prior written consent</li>
            </ul>
          </section>

          <section>
            <h2 className="text-xl font-black text-white mb-4">3. Intellectual Property</h2>
            <p className="mb-4">
              All content on this Site — including but not limited to text, graphics, logos, images, code samples, project descriptions, and designs — is the property of Amna Khalid and is protected by applicable intellectual property laws.
            </p>
            <p>
              You may view and reference the portfolio content for personal, non-commercial purposes. Any reproduction, distribution, or commercial use of content from this Site requires explicit written permission from Amna Khalid.
            </p>
          </section>

          <section>
            <h2 className="text-xl font-black text-white mb-4">4. Projects & Portfolio Work</h2>
            <div className="glass-morphism rounded-2xl p-6 border border-white/5 space-y-3">
              <p>Projects displayed in this portfolio are either:</p>
              <ul className="list-disc list-inside space-y-2 ml-4">
                <li><strong className="text-white">Personal Projects:</strong> Fully owned by Amna Khalid</li>
                <li><strong className="text-white">Client Work:</strong> Developed on behalf of clients who retain ownership of their respective intellectual property</li>
                <li><strong className="text-white">Collaborative Work:</strong> Developed in team environments where ownership is shared per applicable agreements</li>
              </ul>
              <p className="text-sm mt-3">
                Projects marked as &quot;Private&quot; are confidential and their source code is not publicly accessible.
              </p>
            </div>
          </section>

          <section>
            <h2 className="text-xl font-black text-white mb-4">5. Freelance & Collaboration Terms</h2>
            <p className="mb-4">
              Inquiries made through the contact form do not constitute a binding contract. Any freelance engagement, project collaboration, or employment arrangement requires a separate written agreement outlining:
            </p>
            <ul className="list-disc list-inside space-y-2 ml-4">
              <li>Scope of work and deliverables</li>
              <li>Timeline and milestones</li>
              <li>Compensation and payment terms</li>
              <li>Intellectual property ownership and licensing</li>
              <li>Confidentiality requirements</li>
            </ul>
          </section>

          <section>
            <h2 className="text-xl font-black text-white mb-4">6. Disclaimer of Warranties</h2>
            <p>
              This Site is provided on an &quot;as is&quot; and &quot;as available&quot; basis without any warranties of any kind, either express or implied. We do not warrant that the Site will be uninterrupted, error-free, or completely secure. We disclaim all warranties, express or implied, including merchantability and fitness for a particular purpose.
            </p>
          </section>

          <section>
            <h2 className="text-xl font-black text-white mb-4">7. Limitation of Liability</h2>
            <p>
              To the fullest extent permitted by law, Amna Khalid shall not be liable for any indirect, incidental, special, consequential, or punitive damages resulting from your access to or use of (or inability to use) the Site or its content.
            </p>
          </section>

          <section>
            <h2 className="text-xl font-black text-white mb-4">8. External Links</h2>
            <p>
              This Site may contain links to third-party websites (GitHub, LinkedIn, Vercel deployments, Figma designs, etc.). These links are provided for your convenience. We have no control over the content of those sites and accept no responsibility for them or any loss or damage that may arise from your use of them.
            </p>
          </section>

          <section>
            <h2 className="text-xl font-black text-white mb-4">9. Privacy</h2>
            <p>
              Your use of this Site is also governed by our{" "}
              <Link href="/privacy-policy" className="text-indigo-400 hover:underline">
                Privacy Policy
              </Link>
              , which is incorporated into these Terms of Service by reference.
            </p>
          </section>

          <section>
            <h2 className="text-xl font-black text-white mb-4">10. Governing Law</h2>
            <p>
              These Terms of Service shall be governed by and construed in accordance with the laws of Pakistan, without regard to its conflict of law provisions.
            </p>
          </section>

          <section>
            <h2 className="text-xl font-black text-white mb-4">11. Changes to Terms</h2>
            <p>
              We reserve the right to modify these Terms of Service at any time. Changes will be effective immediately upon posting to the Site. Your continued use of the Site after any changes constitutes your acceptance of the new terms.
            </p>
          </section>

          <section>
            <h2 className="text-xl font-black text-white mb-4">12. Contact</h2>
            <p className="mb-4">
              For any questions regarding these Terms of Service, please contact:
            </p>
            <div className="glass-morphism rounded-2xl p-6 border border-white/5">
              <p className="text-white font-bold">Amna Khalid</p>
              <a href="mailto:amnapersonal4@gmail.com" className="text-indigo-400 hover:underline">
                amnapersonal4@gmail.com
              </a>
              <p className="text-slate-500 text-sm mt-1">Islamabad, Pakistan</p>
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
