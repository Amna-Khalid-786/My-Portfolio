"use client";

import Contact from "@/components/portfolio/Contact";
import Hero from "@/components/portfolio/Hero";

export default function ContactPage() {
    return (
        <div className="page-enter">
            <Hero
                title={<>Let&apos;s <span className="gradient-text">Connect</span></>}
                subtitle="Have a project in mind or just want to say hi? Reach out to me!"
                primaryButton={{ text: "Send Message", href: "#contact-form" }}
                secondaryButton={{ text: "Back to Home", href: "/" }}
                height="min-h-[70vh]"
            />
            <div id="contact-form" className="pb-12">
                <Contact />
            </div>
        </div>
    );
}
