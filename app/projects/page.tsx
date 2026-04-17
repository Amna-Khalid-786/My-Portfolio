"use client";

import Projects from "@/components/portfolio/Projects";
import Hero from "@/components/portfolio/Hero";

export default function ProjectsPage() {
    return (
        <div className="page-enter">
            <Hero
                title={<>My <span className="gradient-text">Portfolio</span></>}
                subtitle="A collection of projects where I've blended engineering logic with creative design."
                primaryButton={{ text: "Back to Home", href: "/" }}
                secondaryButton={{ text: "Contact Me", href: "/contact" }}
                height="min-h-[70vh]"
            />
            <div className="pb-12">
                <Projects />
            </div>
        </div>
    );
}
