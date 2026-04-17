"use client";

import Hero from "@/components/portfolio/Hero";
import Skills from "@/components/portfolio/Skills";
import Approach from "@/components/portfolio/Approach";
import HighlightCards from "@/components/portfolio/Highlights";

export default function SkillsPage() {
    return (
        <div className="page-enter">
            <Hero

                title={<>Technical <span className="gradient-text">Skills</span></>}
                subtitle="The tools and technologies I use to bring ideas to life."
                primaryButton={{ text: "View Projects", href: "/projects" }}
                secondaryButton={{ text: "Hire Me", href: "/contact" }}
                height="min-h-[70vh]"
            />
            <div className="pb-0">
                <Skills />
                <HighlightCards />
                <Approach />
            </div>
        </div>
    );
}
