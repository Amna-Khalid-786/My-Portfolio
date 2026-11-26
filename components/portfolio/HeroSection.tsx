"use client";

import React, { useEffect, useRef } from "react";
import Link from "next/link";
import Image from "next/image";
import { Typewriter } from "@/components/ui/Typewriter";

const TECH_STACK = [
  "Next.js", "React", "TypeScript", "React Native", "Flutter", "Dart",
  "Node.js", "Tailwind CSS", "Three.js", "Figma", "Firebase",
  "GSAP", "Framer Motion", "AI Integration", "REST APIs", "WordPress",
  "Docker", "VPS", "Hostinger", "PostgreSQL", "MongoDB", "AWS",
  "Next.js", "React", "TypeScript", "React Native", "Flutter", "Dart",
  "Node.js", "Tailwind CSS", "Three.js", "Figma", "Firebase",
  "GSAP", "Framer Motion", "AI Integration", "REST APIs", "WordPress",
  "Docker", "VPS", "Hostinger", "PostgreSQL", "MongoDB", "AWS",
];

const HeroSection = () => {
  const sectionRef = useRef<HTMLElement>(null);
  const badgeRef = useRef<HTMLDivElement>(null);
  const greetRef = useRef<HTMLDivElement>(null);
  const nameRef = useRef<HTMLHeadingElement>(null);
  const roleRef = useRef<HTMLDivElement>(null);
  const subtitleRef = useRef<HTMLParagraphElement>(null);
  const ctaRef = useRef<HTMLDivElement>(null);
  const statsRef = useRef<HTMLDivElement>(null);
  const imageRef = useRef<HTMLDivElement>(null);
  const techBadgesRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const initGSAP = async () => {
      try {
        const { gsap } = await import("gsap");

        const tl = gsap.timeline({ defaults: { ease: "power3.out" } });

        // Staggered entrance animations
        tl.fromTo(
          badgeRef.current,
          { opacity: 0, y: -20, scale: 0.9 },
          { opacity: 1, y: 0, scale: 1, duration: 0.6 }
        )
        .fromTo(
          greetRef.current,
          { opacity: 0, x: -30 },
          { opacity: 1, x: 0, duration: 0.5 },
          "-=0.3"
        )
        .fromTo(
          nameRef.current,
          { opacity: 0, y: 40, clipPath: "inset(100% 0 0 0)" },
          { opacity: 1, y: 0, clipPath: "inset(0% 0 0 0)", duration: 0.8 },
          "-=0.2"
        )
        .fromTo(
          roleRef.current,
          { opacity: 0, y: 20 },
          { opacity: 1, y: 0, duration: 0.6 },
          "-=0.3"
        )
        .fromTo(
          subtitleRef.current,
          { opacity: 0, y: 20 },
          { opacity: 1, y: 0, duration: 0.6 },
          "-=0.3"
        )
        .fromTo(
          ctaRef.current!.children,
          { opacity: 0, y: 20, scale: 0.95 },
          { opacity: 1, y: 0, scale: 1, stagger: 0.12, duration: 0.5 },
          "-=0.2"
        );

        // Image entrance with parallax feel
        gsap.fromTo(
          imageRef.current,
          { opacity: 0, scale: 0.85, rotate: -5 },
          { opacity: 1, scale: 1, rotate: 0, duration: 1.2, delay: 0.4, ease: "elastic.out(1, 0.75)" }
        );

        // Floating tech badges
        if (techBadgesRef.current) {
          const badges = techBadgesRef.current.children;
          gsap.fromTo(
            badges,
            { opacity: 0, scale: 0, rotation: -15 },
            { opacity: 1, scale: 1, rotation: 0, stagger: 0.08, duration: 0.5, delay: 0.8, ease: "back.out(2)" }
          );
        }

        // Stats counter animation
        if (statsRef.current) {
          gsap.fromTo(
            statsRef.current.children,
            { opacity: 0, y: 20 },
            { opacity: 1, y: 0, stagger: 0.1, duration: 0.6, delay: 1.2, ease: "power2.out" }
          );
          const counters = statsRef.current.querySelectorAll(".count-num");
          counters.forEach((counter) => {
            const target = parseInt(counter.getAttribute("data-target") || "0");
            const obj = { val: 0 };
            gsap.to(obj, {
              val: target,
              duration: 2,
              delay: 1.4,
              ease: "power2.out",
              onUpdate: () => {
                counter.textContent = Math.round(obj.val) + "+";
              },
            });
          });
        }

        // Continuous subtle floating animation on the image
        gsap.to(imageRef.current, {
          y: -10,
          duration: 3,
          repeat: -1,
          yoyo: true,
          ease: "sine.inOut",
          delay: 1.5,
        });

      } catch (e) {
        // Fallback: show everything
        [badgeRef, greetRef, nameRef, roleRef, subtitleRef, ctaRef, imageRef].forEach(ref => {
          if (ref.current) (ref.current as HTMLElement).style.opacity = "1";
        });
      }
    };
    initGSAP();
  }, []);

  return (
    <section
      id="home"
      ref={sectionRef}
      className="relative min-h-screen pt-28 pb-16 px-6 overflow-hidden flex flex-col items-center justify-center"
    >
      {/* Background */}
      <div className="absolute inset-0 pointer-events-none overflow-hidden">
        <div
          className="absolute top-[-5%] right-[-5%] w-[55%] h-[55%] rounded-full"
          style={{
            background: "radial-gradient(circle, rgba(129,140,248,0.12) 0%, transparent 70%)",
            filter: "blur(60px)",
            animation: "pulse-glow 8s ease-in-out infinite",
          }}
        />
        <div
          className="absolute bottom-[-5%] left-[-5%] w-[45%] h-[45%] rounded-full"
          style={{
            background: "radial-gradient(circle, rgba(192,132,252,0.1) 0%, transparent 70%)",
            filter: "blur(80px)",
            animation: "pulse-glow 10s ease-in-out infinite reverse",
          }}
        />
        <div
          className="absolute inset-0 opacity-[0.02]"
          style={{
            backgroundImage: `linear-gradient(rgba(255,255,255,0.1) 1px, transparent 1px), linear-gradient(90deg, rgba(255,255,255,0.1) 1px, transparent 1px)`,
            backgroundSize: "80px 80px",
          }}
        />
      </div>

      <div className="max-w-6xl mx-auto w-full grid grid-cols-1 md:grid-cols-2 gap-12 items-center relative z-10">
        {/* Left — Text Content */}
        <div className="flex flex-col items-start">
          <div
            ref={badgeRef}
            className="mb-6 flex items-center gap-2 px-4 py-2 rounded-full border border-indigo-500/20"
            style={{ background: "rgba(129,140,248,0.06)", opacity: 0 }}
          >
            <span className="w-2 h-2 rounded-full bg-green-400 animate-pulse" />
            <span className="text-xs text-slate-400 font-bold tracking-widest uppercase">
              Available for Opportunities
            </span>
          </div>

          <div
            ref={greetRef}
            className="text-xl text-slate-400 font-medium mb-2"
            style={{ opacity: 0 }}
          >
            Hi, I&apos;m
          </div>

          <h1
            ref={nameRef}
            className="text-5xl md:text-7xl font-black tracking-tight leading-none mb-4 text-white"
            style={{ opacity: 0 }}
          >
            <span className="gradient-text block">Amna Khalid</span>
          </h1>

          <div
            ref={roleRef}
            className="text-2xl md:text-3xl text-slate-300 font-semibold mb-6"
            style={{ opacity: 0 }}
          >
            A passionate{" "}
            <span className="text-indigo-400 font-bold">
              <Typewriter
                words={[
                  "Software Engineer",
                  "Web Developer",
                  "Mobile App Developer",
                  "UI/UX Designer",
                  "AI Solutions Builder",
                  "WordPress Developer",
                ]}
              />
            </span>
          </div>

          <p
            ref={subtitleRef}
            className="text-lg text-slate-400 max-w-lg mb-10 leading-relaxed font-light"
            style={{ opacity: 0 }}
          >
            Building secure, scalable, and AI-powered digital solutions that create{" "}
            <span className="text-white font-medium">real business impact</span>. From concept to
            deployment.
          </p>

          <div ref={ctaRef} className="flex flex-col sm:flex-row gap-4 mb-12 w-full sm:w-auto">
            <Link
              href="#projects"
              className="magnetic group px-10 py-4 bg-gradient-to-r from-indigo-600 to-purple-600 text-white font-black rounded-2xl transition-all shadow-lg shadow-indigo-500/25 hover:shadow-indigo-500/40 hover:scale-105 active:scale-95 text-center relative overflow-hidden"
              onClick={(e) => {
                e.preventDefault();
                document.getElementById("projects")?.scrollIntoView({ behavior: "smooth" });
              }}
              style={{ opacity: 0 }}
            >
              <span className="relative z-10">View Projects</span>
              <span className="absolute inset-0 bg-gradient-to-r from-purple-600 to-indigo-600 opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
            </Link>
            <Link
              href="#contact"
              className="magnetic px-10 py-4 glass border border-white/10 text-white font-black rounded-2xl hover:bg-white/5 hover:scale-105 active:scale-95 transition-all text-center hover:border-indigo-500/40"
              onClick={(e) => {
                e.preventDefault();
                document.getElementById("contact")?.scrollIntoView({ behavior: "smooth" });
              }}
              style={{ opacity: 0 }}
            >
              Hire Me ✦
            </Link>
          </div>

          <div ref={statsRef} className="flex gap-8">
            {[
              { label: "Projects Built", target: 15 },
              { label: "Technologies", target: 25 },
              { label: "Months Experience", target: 18 },
            ].map((stat) => (
              <div key={stat.label} className="flex flex-col" style={{ opacity: 0 }}>
                <span
                  className="count-num text-3xl font-black gradient-text"
                  data-target={stat.target}
                >
                  {stat.target}+
                </span>
                <span className="text-xs text-slate-500 font-bold uppercase tracking-wider mt-1">
                  {stat.label}
                </span>
              </div>
            ))}
          </div>
        </div>

        {/* Right — Profile Image with floating tech badges */}
        <div className="flex justify-center items-center min-h-[480px] relative">
          {/* Floating skill badges */}
          <div ref={techBadgesRef}>
            <div
              className="floating-badge absolute top-16 left-0 z-20 glass rounded-2xl px-3 py-2 border border-white/10 hidden md:flex items-center gap-2"
              style={{ animationDelay: "0s", opacity: 0 }}
            >
              <span className="text-lg">⚡</span>
              <div>
                <div className="text-xs font-bold text-white">Next.js</div>
                <div className="text-[10px] text-slate-500">React Framework</div>
              </div>
            </div>
            <div
              className="floating-badge absolute bottom-20 left-0 z-20 glass rounded-2xl px-3 py-2 border border-white/10 hidden md:flex items-center gap-2"
              style={{ animationDelay: "1s", opacity: 0 }}
            >
              <span className="text-lg">📱</span>
              <div>
                <div className="text-xs font-bold text-white">Flutter</div>
                <div className="text-[10px] text-slate-500">Cross-Platform</div>
              </div>
            </div>
            <div
              className="floating-badge absolute top-24 right-0 z-20 glass rounded-2xl px-3 py-2 border border-white/10 hidden md:flex items-center gap-2"
              style={{ animationDelay: "0.5s", opacity: 0 }}
            >
              <span className="text-lg">🤖</span>
              <div>
                <div className="text-xs font-bold text-white">AI Automation</div>
                <div className="text-[10px] text-slate-500">Gemini · GPT</div>
              </div>
            </div>
            <div
              className="floating-badge absolute bottom-28 right-0 z-20 glass rounded-2xl px-3 py-2 border border-white/10 hidden md:flex items-center gap-2"
              style={{ animationDelay: "1.5s", opacity: 0 }}
            >
              <span className="text-lg">🐳</span>
              <div>
                <div className="text-xs font-bold text-white">Docker</div>
                <div className="text-[10px] text-slate-500">DevOps</div>
              </div>
            </div>
          </div>

          {/* Profile Image */}
          <div ref={imageRef} className="relative z-10" style={{ opacity: 0 }}>
            {/* Glow behind */}
            <div
              className="absolute inset-0 rounded-full bg-indigo-500/15 blur-[50px]"
              style={{ width: 320, height: 320, top: "50%", left: "50%", transform: "translate(-50%, -50%)" }}
            />

            {/* The avatar container */}
            <div
              className="relative w-72 h-72 md:w-80 md:h-80 rounded-full overflow-hidden border-2 border-indigo-500/30"
              style={{
                boxShadow: "0 0 60px rgba(129,140,248,0.2), inset 0 0 40px rgba(129,140,248,0.05)",
              }}
            >
              <Image
                src="/assets/about.jpeg"
                alt="Amna Khalid"
                fill
                className="object-cover object-top"
                sizes="320px"
                priority
              />
              {/* Gradient overlay */}
              <div className="absolute inset-0 bg-gradient-to-t from-indigo-900/30 via-transparent to-transparent" />
            </div>

            {/* Name label below image */}
            <div className="absolute -bottom-4 left-1/2 -translate-x-1/2 px-6 py-2 rounded-full border border-indigo-500/40 bg-indigo-500/10 backdrop-blur-md shadow-[0_0_20px_rgba(99,102,241,0.2)]">
              <span className="text-xs font-black tracking-[0.3em] uppercase gradient-text">
                Amna Khalid
              </span>
            </div>
          </div>
        </div>
      </div>

      {/* Tech Stack Ticker */}
      <div className="absolute bottom-0 left-0 right-0 py-4 border-t border-white/5">
        <div className="ticker-wrapper">
          <div className="ticker-track">
            {TECH_STACK.map((tech, i) => (
              <span
                key={i}
                className="text-xs font-bold text-slate-600 uppercase tracking-widest flex items-center gap-4 whitespace-nowrap"
              >
                <span className="text-indigo-500/40">◆</span>
                {tech}
              </span>
            ))}
          </div>
        </div>
      </div>

      {/* Scroll indicator */}
      <div className="absolute bottom-8 left-1/2 -translate-x-1/2 flex flex-col items-center gap-2 opacity-40">
        <div className="w-6 h-10 rounded-full border-2 border-white/20 flex items-start justify-center p-1">
          <div
            className="w-1 h-2 bg-indigo-400 rounded-full"
            style={{ animation: "float-badge 1.5s ease-in-out infinite" }}
          />
        </div>
        <span className="text-[9px] text-slate-600 uppercase tracking-widest">Scroll</span>
      </div>
    </section>
  );
};

export default HeroSection;
