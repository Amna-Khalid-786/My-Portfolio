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
import Services from "@/components/portfolio/Services";

export default function Home() {
  return (
    <div className="page-enter">
      {/* Hero */}
      <section id="home">
        <Hero
          title={
            <div className="flex flex-col gap-2">
              <span className="whitespace-nowrap">Hi, I&apos;m <span className="gradient-text">Amna Khalid</span></span>
              <span className="text-2xl md:text-3xl text-slate-300 font-normal whitespace-nowrap">
                A passionate <span className="text-indigo-400 font-bold"><Typewriter words={["Software Engineer", "Web Developer", "Mobile App Developer", "UI/UX Designer", "AI Solutions Builder", "WordPress Developer"]} /></span>
              </span>
            </div>
          }
          extraContent={<DecorativeRobot />}
          primaryButton={{ text: "View Projects", href: "#projects" }}
          secondaryButton={{ text: "Hire Me ✦", href: "#contact" }}
        />
      </section>

      {/* About */}
      <section id="about">
        <About />
      </section>

      <div className="section-divider" />

      {/* Experience */}
      <section id="experience">
        <Experience />
        <LearningMethodology />
      </section>

      <div className="section-divider" />

      {/* Projects */}
      <section id="projects">
        <Projects />
      </section>

      <div className="section-divider" />

      {/* Services */}
      <section id="services">
        <Services />
      </section>

      <div className="section-divider" />

      {/* Skills */}
      <section id="skills">
        <Skills />
        <HighlightCards />
        <Approach />
      </section>

      <div className="section-divider" />

      {/* Contact */}
      <section id="contact">
        <Contact />
      </section>
    </div>
  );
}
