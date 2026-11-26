import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";
import Navigation from "@/components/layout/Navigation";
import PortfolioBot from "@/components/bot/PortfolioBot";
import Footer from "@/components/layout/Footer";
import { GlobalGSAPInit } from "@/components/ui/GlobalGSAPInit";
import { SmoothScroll } from "@/components/ui/SmoothScroll";
import { SOCIAL_LINKS } from "@/lib/constants";

const inter = Inter({ subsets: ["latin"] });

const SITE_URL = "https://my-portfolio-nu-orcin-87.vercel.app";
const TITLE = "Amna Khalid | Software Engineer & Full-Stack Developer";
const DESCRIPTION =
  "Amna Khalid is a Software Engineer and Full-Stack Developer from Pakistan specializing in Next.js, React, React Native, Flutter, AI-powered web apps, UI/UX design, and Healthcare IT. View projects and hire for web, mobile, and design work.";

export const metadata: Metadata = {
  metadataBase: new URL(SITE_URL),
  title: { default: TITLE, template: "%s | Amna Khalid" },
  description: DESCRIPTION,
  applicationName: "Amna Khalid Portfolio",
  keywords: [
    "Amna Khalid",
    "Amna Khalid portfolio",
    "Amna Khalid software engineer",
    "Amna Khalid developer",
    "Software Engineer Pakistan",
    "Full Stack Developer Pakistan",
    "Next.js Developer",
    "React Developer",
    "React Native Developer",
    "Flutter Developer",
    "UI/UX Designer",
    "AI Web Developer",
    "Healthcare IT Developer",
    "Freelance Web Developer",
  ],
  authors: [{ name: "Amna Khalid", url: SITE_URL }],
  creator: "Amna Khalid",
  publisher: "Amna Khalid",
  alternates: { canonical: "/" },
  openGraph: {
    title: TITLE,
    description: DESCRIPTION,
    url: SITE_URL,
    siteName: "Amna Khalid Portfolio",
    type: "profile",
    firstName: "Amna",
    lastName: "Khalid",
    locale: "en_US",
    images: [{ url: "/assets/about.jpeg", alt: "Amna Khalid - Software Engineer" }],
  },
  twitter: {
    card: "summary_large_image",
    title: TITLE,
    description: DESCRIPTION,
    images: ["/assets/about.jpeg"],
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
  verification: {
    google: process.env.NEXT_PUBLIC_GOOGLE_SITE_VERIFICATION,
  },
  icons: {
    icon: "/assets/logo.png",
    apple: "/assets/logo.png",
  },
  category: "technology",
};

// Structured data so Google can build a "Person" knowledge profile linked to LinkedIn & GitHub
const jsonLd = {
  "@context": "https://schema.org",
  "@graph": [
    {
      "@type": "Person",
      "@id": `${SITE_URL}/#person`,
      name: "Amna Khalid",
      url: SITE_URL,
      image: `${SITE_URL}/assets/about.jpeg`,
      jobTitle: "Software Engineer & Full-Stack Developer",
      description: DESCRIPTION,
      email: "mailto:amnapersonal4@gmail.com",
      address: { "@type": "PostalAddress", addressCountry: "PK" },
      sameAs: [SOCIAL_LINKS.linkedin, SOCIAL_LINKS.github].filter(Boolean),
      knowsAbout: [
        "Next.js",
        "React",
        "React Native",
        "Flutter",
        "UI/UX Design",
        "Artificial Intelligence",
        "Healthcare IT",
        "Web Development",
        "Mobile App Development",
      ],
    },
    {
      "@type": "WebSite",
      "@id": `${SITE_URL}/#website`,
      url: SITE_URL,
      name: "Amna Khalid Portfolio",
      author: { "@id": `${SITE_URL}/#person` },
      inLanguage: "en",
    },
  ],
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className={inter.className}>
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
        />
        <SmoothScroll>
          <div className="min-h-screen relative selection:bg-indigo-500/30">
            {/* Background gradient blobs */}
            <div className="fixed top-0 left-0 w-full h-full -z-10 overflow-hidden pointer-events-none">
              <div className="absolute top-[-10%] right-[-10%] w-[50%] h-[50%] bg-indigo-500/8 blur-[140px] rounded-full" />
              <div className="absolute bottom-[-10%] left-[-10%] w-[40%] h-[40%] bg-purple-500/8 blur-[140px] rounded-full" />
              <div className="absolute top-[40%] left-[30%] w-[30%] h-[30%] bg-indigo-600/5 blur-[120px] rounded-full" />
            </div>

            {/* Global GSAP scroll animations */}
            <GlobalGSAPInit />


            <Navigation />

            <main className="min-h-[70vh]">{children}</main>

            <Footer />

            {/* AI Portfolio Bot */}
            <PortfolioBot />
          </div>
        </SmoothScroll>
      </body>
    </html>
  );
}
