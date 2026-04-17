"use client";

import Hero from "@/components/portfolio/Hero";
import Experience from "@/components/portfolio/Experience";
import LearningMethodology from "@/components/portfolio/LearningMethodology";

export default function ExperiencePage() {
    return (
        <div className="page-enter">
            <Hero
                title={<>My <span className="gradient-text">Experience</span></>}
                subtitle="My professional growth and the milestones I've achieved along the way."
                primaryButton={{ text: "View Skills", href: "/skills" }}
                secondaryButton={{ text: "Get in Touch", href: "/contact" }}
                height="min-h-[70vh]"
            />

            <div className="space-y-24 pb-24">
                <Experience />
                <LearningMethodology />
            </div>
        </div>
    );
}
