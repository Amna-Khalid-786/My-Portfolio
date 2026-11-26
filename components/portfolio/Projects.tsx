"use client";

import React, { useState, useEffect, useRef } from "react";
import Link from "next/link";
import Image from "next/image";
import {
  motion,
  AnimatePresence,
  useMotionValue,
  useSpring,
  useTransform,
} from "framer-motion";
import { Figma, Palette, Globe, Lock } from "lucide-react";
import { INITIAL_PROJECTS } from "@/lib/constants";

const FILTER_TABS = ["All", "Web", "Mobile", "Design", "AI"];

const getProjectCategory = (tags: string[]): string => {
  const tagStr = tags.join(" ").toLowerCase();
  if (tagStr.includes("figma") || tagStr.includes("canva") || tagStr.includes("ui/ux") || tagStr.includes("branding")) return "Design";
  if (tagStr.includes("react native") || tagStr.includes("flutter") || tagStr.includes("mobile")) return "Mobile";
  if (tags.some(t => t.toLowerCase() === "ai") || tagStr.includes("machine learning")) return "AI";
  if (tagStr.includes("next") || tagStr.includes("react") || tagStr.includes("web") || tagStr.includes("full-stack")) return "Web";
  return "Web";
};

const TiltCard = ({ children, className }: { children: React.ReactNode; className: string }) => {
  const x = useMotionValue(0);
  const y = useMotionValue(0);
  const mouseXSpring = useSpring(x);
  const mouseYSpring = useSpring(y);
  const rotateX = useTransform(mouseYSpring, [-0.5, 0.5], ["8deg", "-8deg"]);
  const rotateY = useTransform(mouseXSpring, [-0.5, 0.5], ["-8deg", "8deg"]);

  const handleMouseMove = (e: React.MouseEvent<HTMLDivElement>) => {
    const rect = e.currentTarget.getBoundingClientRect();
    x.set((e.clientX - rect.left) / rect.width - 0.5);
    y.set((e.clientY - rect.top) / rect.height - 0.5);
  };
  const handleMouseLeave = () => { x.set(0); y.set(0); };

  return (
    <motion.div
      onMouseMove={handleMouseMove}
      onMouseLeave={handleMouseLeave}
      style={{ rotateY, rotateX, transformStyle: "preserve-3d" }}
      className={`${className} h-full`}
    >
      <div style={{ transform: "translateZ(40px)", transformStyle: "preserve-3d" }} className="h-full flex flex-col">
        {children}
      </div>
    </motion.div>
  );
};

const Projects: React.FC = () => {
  const [activeFilter, setActiveFilter] = useState("All");
  const headerRef = useRef<HTMLDivElement>(null);
  const gridRef = useRef<HTMLDivElement>(null);

  const filteredProjects =
    activeFilter === "All"
      ? INITIAL_PROJECTS
      : INITIAL_PROJECTS.filter(
          (p) => getProjectCategory(p.tags) === activeFilter
        );

  useEffect(() => {
    const initGSAP = async () => {
      try {
        const { gsap } = await import("gsap");
        const { ScrollTrigger } = await import("gsap/ScrollTrigger");
        gsap.registerPlugin(ScrollTrigger);

        if (headerRef.current) {
          gsap.fromTo(
            headerRef.current,
            { opacity: 0, y: 50 },
            {
              opacity: 1, y: 0, duration: 0.9, ease: "power3.out",
              scrollTrigger: { trigger: headerRef.current, start: "top 85%", once: true },
            }
          );
        }
      } catch (e) {
        if (headerRef.current) headerRef.current.style.opacity = "1";
      }
    };
    initGSAP();
  }, []);

  return (
    <section id="projects" className="py-20 px-6 relative overflow-hidden">
      <div className="max-w-6xl mx-auto relative z-10">
        {/* Header */}
        <div ref={headerRef} className="text-center mb-14" style={{ opacity: 0 }}>
          <h2 className="text-5xl md:text-7xl font-black mb-6 text-white tracking-tighter uppercase">
            My <span className="gradient-text">Projects</span>
          </h2>
          <p className="text-slate-400 max-w-2xl mx-auto text-xl font-light leading-relaxed">
            A showcase of digital solutions where engineering meets creative design.
          </p>
          <div className="h-1.5 w-24 bg-gradient-to-r from-indigo-500 to-purple-600 rounded-full mx-auto mt-8" />
        </div>

        {/* Filter Tabs */}
        <div className="flex flex-wrap justify-center gap-3 mb-12">
          {FILTER_TABS.map((tab) => (
            <button
              key={tab}
              onClick={() => setActiveFilter(tab)}
              className={`magnetic px-6 py-2.5 rounded-xl text-sm font-black uppercase tracking-wider transition-all duration-300 ${
                activeFilter === tab
                  ? "bg-gradient-to-r from-indigo-600 to-purple-600 text-white shadow-lg shadow-indigo-500/20"
                  : "glass border border-white/10 text-slate-400 hover:text-white hover:border-indigo-500/30"
              }`}
            >
              {tab}
            </button>
          ))}
        </div>

        {/* Projects Grid */}
        {filteredProjects.length === 0 ? (
          <div className="text-center py-20 glass rounded-3xl border border-dashed border-white/10">
            <p className="text-slate-500 mb-4">No projects in this category yet.</p>
          </div>
        ) : (
          <div ref={gridRef} className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8 perspective-1000">
            <AnimatePresence mode="popLayout">
              {filteredProjects.map((project, index) => (
                <motion.div
                  key={project.id}
                  initial={{ opacity: 0, y: 50, scale: 0.95 }}
                  animate={{ opacity: 1, y: 0, scale: 1 }}
                  exit={{ opacity: 0, y: -20, scale: 0.95 }}
                  transition={{ duration: 0.5, delay: index * 0.06, ease: "easeOut" }}
                  layout
                >
                  <TiltCard className="group glass-morphism rounded-3xl overflow-hidden border border-white/5 hover:border-indigo-500/30 transition-colors duration-500 h-full">
                    <div className="flex flex-col h-full relative">
                      {/* Image */}
                      <div className="relative h-56 overflow-hidden flex-shrink-0">
                        <Image
                          src={project.image}
                          alt={project.title}
                          fill
                          className="object-cover group-hover:scale-110 transition-transform duration-700"
                          sizes="(max-width: 768px) 100vw, 50vw"
                        />
                        <div className="absolute inset-0 bg-gradient-to-t from-[#0a0a0c] via-transparent to-transparent opacity-70" />

                        {/* Private badge */}
                        {project.isPrivate && (
                          <div className="absolute top-3 right-3 flex items-center gap-1.5 bg-black/60 backdrop-blur-sm px-2.5 py-1 rounded-full border border-white/10">
                            <Lock className="w-3 h-3 text-slate-400" />
                            <span className="text-[10px] text-slate-400 font-bold uppercase tracking-wider">Private</span>
                          </div>
                        )}

                        {/* Hover overlay — only live link or nothing */}
                        <div className="absolute inset-0 flex items-center justify-center gap-4 opacity-0 group-hover:opacity-100 transition-opacity duration-300 bg-black/40 backdrop-blur-sm">
                          {/* Live site link — always show if available */}
                          {project.vercelLink && (
                            <Link
                              href={project.vercelLink}
                              target="_blank"
                              className="p-3 bg-indigo-500/20 hover:bg-indigo-500/40 rounded-full transition-colors border border-indigo-500/30 group/icon flex items-center justify-center"
                              title="View Live Site"
                            >
                              <Globe className="w-6 h-6 text-indigo-300 group-hover/icon:scale-110 transition-transform" />
                            </Link>
                          )}
                          {/* GitHub — only for NON-private projects */}
                          {!project.isPrivate && project.githubLink && (
                            <Link
                              href={project.githubLink}
                              target="_blank"
                              className="p-3 bg-white/10 hover:bg-white/20 rounded-full transition-colors border border-white/20 group/icon flex items-center justify-center"
                              title="View Repository"
                            >
                              <svg className="w-6 h-6 text-white group-hover/icon:scale-110 transition-transform" fill="currentColor" viewBox="0 0 24 24">
                                <path d="M12 0c-6.626 0-12 5.373-12 12 0 5.302 3.438 9.8 8.207 11.387.599.111.793-.261.793-.577v-2.234c-3.338.726-4.033-1.416-4.033-1.416-.546-1.387-1.333-1.756-1.333-1.756-1.089-.745.083-.729.083-.729 1.205.084 1.839 1.237 1.839 1.237 1.07 1.834 2.807 1.304 3.492.997.107-.775.418-1.305.762-1.604-2.665-.305-5.467-1.334-5.467-5.931 0-1.311.469-2.381 1.236-3.221-.124-.303-.535-1.524.117-3.176 0 0 1.008-.322 3.301 1.23.957-.266 1.983-.399 3.003-.404 1.02.005 2.047.138 3.006.404 2.291-1.552 3.297-1.23 3.297-1.23.653 1.653.242 2.874.118 3.176.77.84 1.235 1.911 1.235 3.221 0 4.609-2.807 5.624-5.479 5.921.43.372.823 1.102.823 2.222v3.293c0 .319.192.694.801.576 4.765-1.589 8.199-6.086 8.199-11.386 0-6.627-5.373-12-12-12z" />
                              </svg>
                            </Link>
                          )}
                          {project.figmaLink && (
                            <Link href={project.figmaLink} target="_blank" className="p-3 bg-white/10 hover:bg-white/20 rounded-full transition-colors border border-white/20 group/icon flex items-center justify-center" title="View Figma">
                              <Figma className="w-6 h-6 text-white group-hover/icon:scale-110 transition-transform" />
                            </Link>
                          )}
                          {project.canvaLink && (
                            <Link href={project.canvaLink} target="_blank" className="p-3 bg-white/10 hover:bg-white/20 rounded-full transition-colors border border-white/20 group/icon flex items-center justify-center" title="View Canva">
                              <Palette className="w-6 h-6 text-white group-hover/icon:scale-110 transition-transform" />
                            </Link>
                          )}
                          {/* If completely private with no links, show lock message */}
                          {project.isPrivate && !project.vercelLink && !project.figmaLink && !project.canvaLink && (
                            <div className="flex flex-col items-center gap-2">
                              <Lock className="w-8 h-8 text-slate-400" />
                              <span className="text-xs text-slate-400 font-bold uppercase tracking-wider">Private Project</span>
                            </div>
                          )}
                        </div>
                      </div>

                      {/* Info */}
                      <div className="p-7 flex flex-col flex-grow">
                        <div className="flex flex-wrap gap-2 mb-4">
                          {project.tags.map((tag) => (
                            <span key={tag} className="text-[10px] font-bold uppercase tracking-tighter text-indigo-300 bg-indigo-500/10 px-2 py-1 rounded-md border border-indigo-500/20">
                              {tag}
                            </span>
                          ))}
                        </div>
                        <h3 className="text-xl font-bold mb-2 text-white group-hover:text-indigo-400 transition-colors">
                          {project.title}
                        </h3>
                        <p className="text-slate-400 text-sm leading-relaxed line-clamp-2 font-light flex-grow">
                          {project.description}
                        </p>
                      </div>
                    </div>
                  </TiltCard>
                </motion.div>
              ))}
            </AnimatePresence>
          </div>
        )}
      </div>
    </section>
  );
};

export default Projects;
