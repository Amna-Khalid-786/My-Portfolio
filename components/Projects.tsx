"use client";

import Link from 'next/link';
import Image from 'next/image';
import { motion, AnimatePresence, useMotionValue, useSpring, useTransform } from 'framer-motion';
import { INITIAL_PROJECTS } from '../constants';

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
      className={className}
    >
      <div style={{ transform: "translateZ(50px)", transformStyle: "preserve-3d" }}>
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
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="flex flex-col md:flex-row md:items-end justify-between mb-12 gap-6"
        >
          <div>
            <h2 className="text-4xl font-bold mb-4 text-white">
              Featured Work
            </h2>
            <div className="w-20 h-1 bg-indigo-500 mb-6 rounded-full"></div>
            <p className="text-slate-400 w-full whitespace-nowrap overflow-hidden text-ellipsis">
              A collection of projects where I applied my engineering background to create functional, beautiful digital experiences.
            </p>
          </div>
        </motion.div>

        {INITIAL_PROJECTS.length === 0 ? (
          <div className="text-center py-20 glass rounded-3xl border border-dashed border-white/10">
            <p className="text-slate-500 mb-4">
              No projects to display.
            </p>
          </div>
        ) : (
          <div className="grid grid-cols-1 md:grid-cols-2 gap-10 perspective-1000">
            <AnimatePresence mode="popLayout">
              {INITIAL_PROJECTS.map((project, index) => (
                <motion.div
                  key={project.id}
                  initial={{ opacity: 0, y: 30 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: index * 0.1 }}
                  layout
                >
                  <TiltCard className="group glass-morphism rounded-3xl overflow-hidden border border-white/5 hover:border-indigo-500/30 transition-colors duration-500">
                    <Link href={`/projects/${project.id}`} className="block">
                      <div className="relative h-72 overflow-hidden">
                        <Image
                          src={project.image}
                          alt={project.title}
                          fill
                          className="object-cover group-hover:scale-110 transition-transform duration-700"
                          sizes="(max-width: 768px) 100vw, 50vw"
                        />
                        <div className="absolute inset-0 bg-gradient-to-t from-[#0a0a0c] via-transparent to-transparent opacity-60" />
                        <div className="absolute inset-0 flex items-center justify-center opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                          <div className="px-6 py-2 bg-indigo-600 text-white font-bold rounded-full text-sm shadow-2xl">
                            Explore Project
                          </div>
                        </div>
                      </div>
                      <div className="p-8">
                        <div className="flex flex-wrap gap-2 mb-4">
                          {project.tags.map(tag => (
                            <span key={tag} className="text-[10px] font-bold uppercase tracking-tighter text-indigo-300 bg-indigo-500/10 px-2 py-1 rounded-md border border-indigo-500/20">
                              {tag}
                            </span>
                          ))}
                        </div>
                        <h3 className="text-2xl font-bold mb-3 text-white group-hover:text-indigo-400 transition-colors">{project.title}</h3>
                        <p className="text-slate-400 text-sm leading-relaxed line-clamp-2 font-light">{project.description}</p>
                      </div>
                    </Link>
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
