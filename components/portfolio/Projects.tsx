"use client";

import Link from 'next/link';
import Image from 'next/image';
import { motion, AnimatePresence, useMotionValue, useSpring, useTransform } from 'framer-motion';
import { Github, ExternalLink, Figma, Palette, Globe, Lock } from 'lucide-react';
import { INITIAL_PROJECTS } from '@/constants';

const TiltCard = ({ children, className }: { children: React.ReactNode, className: string }) => {
  const x = useMotionValue(0);
  const y = useMotionValue(0);

  const mouseXSpring = useSpring(x);
  const mouseYSpring = useSpring(y);

  const rotateX = useTransform(mouseYSpring, [-0.5, 0.5], ["10deg", "-10deg"]);
  const rotateY = useTransform(mouseXSpring, [-0.5, 0.5], ["-10deg", "10deg"]);

  const handleMouseMove = (e: React.MouseEvent<HTMLDivElement>) => {
    const rect = e.currentTarget.getBoundingClientRect();
    const width = rect.width;
    const height = rect.height;
    const mouseX = e.clientX - rect.left;
    const mouseY = e.clientY - rect.top;
    const xPct = mouseX / width - 0.5;
    const yPct = mouseY / height - 0.5;
    x.set(xPct);
    y.set(yPct);
  };

  const handleMouseLeave = () => {
    x.set(0);
    y.set(0);
  };

  return (
    <motion.div
      onMouseMove={handleMouseMove}
      onMouseLeave={handleMouseLeave}
      style={{ rotateY, rotateX, transformStyle: "preserve-3d" }}
      className={`${className} h-full`}
    >
      <div style={{ transform: "translateZ(50px)", transformStyle: "preserve-3d" }} className="h-full flex flex-col">
        {children}
      </div>
    </motion.div>
  );
};

const Projects: React.FC = () => {
  return (
    <section id="projects" className="py-20 px-6 relative overflow-hidden">
      <div className="max-w-6xl mx-auto relative z-10">
        <motion.div
          initial={{ opacity: 0, y: 15 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "0px 0px -50px 0px" }}
          className="text-center mb-20"
        >
          <h2 className="text-5xl md:text-7xl font-black mb-6 text-white tracking-tighter uppercase">
            My <span className="gradient-text">Projects</span>
          </h2>
          <p className="text-slate-400 max-w-2xl mx-auto text-xl font-light leading-relaxed">
            A showcase of digital solutions where engineering meets creative design.
          </p>
          <div className="h-1.5 w-24 bg-gradient-to-r from-indigo-500 to-purple-600 rounded-full mx-auto mt-8"></div>
        </motion.div>


        {INITIAL_PROJECTS.length === 0 ? (
          <div className="text-center py-20 glass rounded-3xl border border-dashed border-white/10">
            <p className="text-slate-500 mb-4">
              No projects to display.
            </p>
          </div>
        ) : (
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-10 perspective-1000">
            <AnimatePresence mode="popLayout">
              {INITIAL_PROJECTS.map((project, index) => (
                <motion.div
                  key={project.id}
                  initial={{ opacity: 0, y: 50 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true, margin: "0px 0px -100px 0px" }}
                  transition={{ duration: 0.8, delay: index * 0.1, ease: "easeOut" }}
                  layout
                >
                  <TiltCard className="group glass-morphism rounded-3xl overflow-hidden border border-white/5 hover:border-indigo-500/30 transition-colors duration-500 h-full">
                    <div className="flex flex-col h-full relative">
                      <div className="relative h-72 overflow-hidden flex-shrink-0">
                        <Image
                          src={project.image}
                          alt={project.title}
                          fill
                          className="object-cover group-hover:scale-110 transition-transform duration-700"
                          sizes="(max-width: 768px) 100vw, 50vw"
                        />
                        <div className="absolute inset-0 bg-gradient-to-t from-[#0a0a0c] via-transparent to-transparent opacity-60" />
                        
                        {/* Hover Overlay Icons */}
                        <div className="absolute inset-0 flex items-center justify-center gap-6 opacity-0 group-hover:opacity-100 transition-opacity duration-300 bg-black/40 backdrop-blur-sm">
                          {project.isPrivate && (
                            <div 
                              className="p-3 bg-red-500/10 hover:bg-red-500/20 rounded-full transition-colors border border-red-500/20 group/icon flex items-center justify-center cursor-help"
                              title="Private Repository"
                            >
                              <Lock className="w-6 h-6 text-red-400 group-hover/icon:scale-110 transition-transform" />
                            </div>
                          )}
                          {project.githubLink && (
                            <Link 
                              href={project.githubLink} 
                              target="_blank" 
                              className="p-3 bg-white/10 hover:bg-white/20 rounded-full transition-colors border border-white/20 group/icon"
                              title="View GitHub Repository"
                            >
                              <Github className="w-6 h-6 text-white group-hover/icon:scale-110 transition-transform" />
                            </Link>
                          )}
                          {project.vercelLink && (
                            <Link 
                              href={project.vercelLink} 
                              target="_blank" 
                              className="p-3 bg-white/10 hover:bg-white/20 rounded-full transition-colors border border-white/20 group/icon"
                              title="View Live Site"
                            >
                              <Globe className="w-6 h-6 text-white group-hover/icon:scale-110 transition-transform" />
                            </Link>
                          )}
                          {project.figmaLink && (
                            <Link 
                              href={project.figmaLink} 
                              target="_blank" 
                              className="p-3 bg-white/10 hover:bg-white/20 rounded-full transition-colors border border-white/20 group/icon"
                              title="View Figma Design"
                            >
                              <Figma className="w-6 h-6 text-white group-hover/icon:scale-110 transition-transform" />
                            </Link>
                          )}
                          {project.canvaLink && (
                            <Link 
                              href={project.canvaLink} 
                              target="_blank" 
                              className="p-3 bg-white/10 hover:bg-white/20 rounded-full transition-colors border border-white/20 group/icon"
                              title="View Canva Design"
                            >
                              <Palette className="w-6 h-6 text-white group-hover/icon:scale-110 transition-transform" />
                            </Link>
                          )}
                        </div>
                      </div>
                      <div className="p-8 flex flex-col flex-grow">
                        <div className="flex flex-wrap gap-2 mb-4">
                          {project.tags.map(tag => (
                            <span key={tag} className="text-[10px] font-bold uppercase tracking-tighter text-indigo-300 bg-indigo-500/10 px-2 py-1 rounded-md border border-indigo-500/20">
                              {tag}
                            </span>
                          ))}
                        </div>
                        <h3 className="text-2xl font-bold mb-3 text-white group-hover:text-indigo-400 transition-colors">{project.title}</h3>
                        <p className="text-slate-400 text-sm leading-relaxed line-clamp-2 font-light flex-grow">{project.description}</p>
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
