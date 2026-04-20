"use client";

import Hero from "@/components/portfolio/Hero";
import About from "@/components/portfolio/About";
import { Typewriter } from "@/components/ui/Typewriter";
import { DecorativeRobot } from "@/components/bot/DecorativeRobot";
import Experience from "@/components/portfolio/Experience";
import LearningMethodology from "@/components/portfolio/LearningMethodology";
import Projects from "@/components/portfolio/Projects";
import Skills from "@/components/portfolio/Skills";
import HighlightCards from "@/components/portfolio/Highlights";
import Approach from "@/components/portfolio/Approach";
import Contact from "@/components/portfolio/Contact";

export default function Home() {
    return (
        <div className="page-enter">
            <section id="home">
                <Hero
                    title={
                        <div className="flex flex-col gap-2">
                            <span className="whitespace-nowrap">Hi, I&apos;m <span className="gradient-text">Amna Khalid</span></span>
                            <span className="text-2xl md:text-3xl text-slate-300 font-normal whitespace-nowrap">
                                A passionate <span className="text-indigo-400 font-bold"><Typewriter words={["Software Developer", "Mobile & Web Developer"]} /></span>
                            </span>
                        </div>
                    }
                    extraContent={<DecorativeRobot />}
                    primaryButton={{ text: "View Projects", href: "#projects" }}
                    secondaryButton={{ text: "Hire Me", href: "#contact" }}
                />
            </section>

            <section id="about">
                <About />
            </section>

            <section id="experience">
                <Experience />
                <LearningMethodology />
            </section>

            <section id="projects">
                <Projects />
            </section>

            <section id="skills">
                <Skills />
                <HighlightCards />
                <Approach />
            </section>

            <section id="contact">
                <Contact />
            </section>

        </div>
    );
}
