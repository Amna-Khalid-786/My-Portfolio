import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";
import Navigation from "@/components/layout/Navigation";
import PortfolioBot from "@/components/bot/PortfolioBot";
import Footer from "@/components/layout/Footer";


const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
    title: "Amna Khalid | Portfolio",
    description: "Professional portfolio of Amna Khalid, showcasing engineering projects and skills.",
    icons: {
        icon: '/assets/logo.png',
    },
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

                    <Footer />

                    {/* Main content */}
                    <PortfolioBot />
                </div>
            </body>
        </html>
    );
}
