import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";
import Navigation from "@/components/Navigation";
import AIAssistant from "@/components/AIAssistant";
import { SOCIAL_LINKS } from "@/constants";

const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
    title: "Amna Khalid | Portfolio",
    description: "Portfolio and AI Assistant of Amna Khalid",
};

export default function RootLayout({
    children,
}: Readonly<{
    children: React.ReactNode;
}>) {
    return (
        <html lang="en">
            <body className={inter.className}>
                <div className="min-h-screen relative selection:bg-indigo-500/30">
                    {/* Background blobs for aesthetic */}
                    <div className="fixed top-0 left-0 w-full h-full -z-10 overflow-hidden pointer-events-none">
                        <div className="absolute top-[-10%] right-[-10%] w-[50%] h-[50%] bg-indigo-500/10 blur-[120px] rounded-full"></div>
                        <div className="absolute bottom-[-10%] left-[-10%] w-[40%] h-[40%] bg-purple-500/10 blur-[120px] rounded-full"></div>
                    </div>

                    <Navigation />

                    <main className="min-h-[70vh]">
                        {children}
                    </main>

                    <footer className="py-12 border-t border-white/5 bg-black/40 text-center">
                        <div className="max-w-6xl mx-auto px-6">
                            <div className="text-2xl font-bold gradient-text mb-4">Amna Khalid</div>
                            <div className="flex justify-center gap-6 mb-8 text-slate-400">
                                <a href={SOCIAL_LINKS.linkedin} target="_blank" rel="noopener noreferrer" className="hover:text-white transition-colors">LinkedIn</a>
                                <a href={SOCIAL_LINKS.github} target="_blank" rel="noopener noreferrer" className="hover:text-white transition-colors">GitHub</a>
                                <a href="https://rmt-usa.com/" target="_blank" rel="noopener noreferrer" className="hover:text-white transition-colors">RMT USA</a>
                            </div>
                            <p className="text-sm text-slate-500">
                                © {new Date().getFullYear()} Amna Khalid. Built with React, Tailwind & AI Assistant.
                            </p>
                        </div>
                    </footer>

                    {/* Floating Assistant */}
                    <AIAssistant />
                </div>
            </body>
        </html>
    );
}
