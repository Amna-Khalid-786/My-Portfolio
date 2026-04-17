"use client";

import React, { useEffect, useState } from 'react';
import Link from 'next/link';
import Image from 'next/image';
import { useParams, useRouter } from 'next/navigation';
import { motion } from 'framer-motion';
import { INITIAL_PROJECTS } from '@/constants';
import { Project } from '@/types';

const renderBoldText = (text: string) => {
  const parts = text.split(/(\*\*.*?\*\*)/g);
  return parts.map((part, i) => {
    if (part.startsWith('**') && part.endsWith('**')) {
      return <strong key={i} className="font-bold text-white">{part.slice(2, -2)}</strong>;
    }
    return part;
  });
};

const ProjectDetail: React.FC = () => {
  const params = useParams();
  const id = params?.id as string;
  const router = useRouter();
  const [project, setProject] = useState<Project | null>(null);

  useEffect(() => {
    if (!id) return;
    const found = INITIAL_PROJECTS.find(p => p.id === Number(id));
    if (found) {
      setProject(found);
    } else {
      router.push('/projects');
    }
  }, [id, router]);

  if (!project) return null;

  return (
    <div className="pt-24 pb-20 relative overflow-hidden">
      {/* Background Ambience */}
      <div className="absolute top-0 left-0 w-full h-[50vh] bg-gradient-to-b from-indigo-600/10 to-transparent pointer-events-none" />

      <div className="max-w-6xl mx-auto px-6 relative z-10">
        {/* Breadcrumb & Navigation */}
        <motion.div
          initial={{ opacity: 0, x: -20 }}
          animate={{ opacity: 1, x: 0 }}
          className="mb-12 flex items-center justify-between"
        >
          <Link href="/projects" className="flex items-center gap-3 text-slate-400 hover:text-white transition-all bg-white/5 px-4 py-2 rounded-full border border-white/5 hover:border-white/10 group">
            <svg className="w-5 h-5 group-hover:-translate-x-1 transition-transform" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M10 19l-7-7m0 0l7-7m-7 7h18" /></svg>
            <span className="text-sm font-bold">All Projects</span>
          </Link>
          <div className="flex gap-4">
            {project.githubLink && (
              <a href={project.githubLink} target="_blank" rel="noopener noreferrer" className="p-3 glass-morphism rounded-full hover:bg-white text-indigo-400 hover:text-black transition-all border border-white/5" title="Source Code">
                <svg className="w-6 h-6" fill="currentColor" viewBox="0 0 24 24"><path d="M12 0c-6.626 0-12 5.373-12 12 0 5.302 3.438 9.8 8.207 11.387.599.111.793-.261.793-.577v-2.234c-3.338.726-4.041-1.472-4.041-1.472-.546-1.387-1.333-1.756-1.333-1.756-1.089-.745.083-.729.083-.729 1.205.084 1.839 1.237 1.839 1.237 1.07 1.834 2.807 1.304 3.492.997.107-.775.418-1.305.762-1.604-2.665-.305-5.467-1.334-5.467-5.931 0-1.311.469-2.381 1.236-3.221-.124-.303-.535-1.524.117-3.176 0 0 1.008-.322 3.301 1.23.957-.266 1.983-.399 3.003-.404 1.02.005 2.047.138 3.006.404 2.291-1.552 3.297-1.23 3.297-1.23.653 1.653.242 2.874.118 3.176.77.84 1.235 1.911 1.235 3.221 0 4.609-2.807 5.624-5.479 5.921.43.372.823 1.102.823 2.222v3.293c0 .319.192.694.801.576 4.765-1.589 8.199-6.086 8.199-11.386 0-6.627-5.373-12-12-12z" /></svg>
              </a>
            )}
            {project.link && (
              <a href={project.link} target="_blank" rel="noopener noreferrer" className="px-8 py-3 bg-white text-black font-black rounded-full transition-all flex items-center gap-3 shadow-2xl hover:scale-105 active:scale-95">
                <span className="text-sm uppercase tracking-widest">Live Demo</span>
                <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M10 6H6a2 2 0 00-2 2v10a2 2 0 002 2h10a2 2 0 002-2v-4M14 4h6m0 0v6m0-6L10 14" /></svg>
              </a>
            )}
          </div>
        </motion.div>

        {/* Hero Banner Part */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.2 }}
          className="relative h-[450px] md:h-[600px] rounded-[3rem] overflow-hidden mb-20 shadow-2xl group border border-white/5"
        >
          <Image
            src={project.image}
            alt={project.title}
            fill
            className="object-cover transition-transform duration-1000 group-hover:scale-105"
            priority
            sizes="100vw"
          />
          <div className="absolute inset-0 bg-gradient-to-t from-[#0a0a0c] via-transparent to-transparent flex flex-col justify-end p-10 md:p-16">
            <div className="flex flex-wrap gap-2 mb-6">
              {project.tags.map(tag => (
                <span key={tag} className="px-4 py-1.5 glass-morphism backdrop-blur-xl text-white text-[10px] font-black rounded-full uppercase tracking-[0.2em] border border-white/10 shadow-lg">{tag}</span>
              ))}
            </div>
            <h1 className="text-5xl md:text-8xl font-black text-white mb-6 leading-none tracking-tighter">{project.title}</h1>
            <p className="text-xl md:text-2xl text-slate-300 max-w-4xl leading-relaxed font-light">{project.description}</p>
          </div>
        </motion.div>

        {/* Content Section */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-16">
          {/* Documentation Section */}
          <div className="lg:col-span-8 space-y-12">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
            >
              <h2 className="text-3xl font-bold mb-10 flex items-center gap-4 text-white">
                <span className="w-12 h-1 bg-indigo-500 rounded-full shadow-[0_0_10px_rgba(99,102,241,0.5)]"></span>
                Abstract
              </h2>
              <div className="prose prose-invert max-w-none text-slate-300 leading-relaxed text-xl space-y-8 font-light italic">
                {project.documentation ? (
                  <div className="space-y-6">
                    {project.documentation.split('\n').map((line, i) => {
                      if (line.startsWith('### ')) {
                        return <h3 key={i} className="text-2xl font-bold text-white mt-8 mb-4 not-italic">{line.replace('### ', '')}</h3>;
                      }
                      if (line.startsWith('- ')) {
                        return (
                          <li key={i} className="ml-6 list-disc text-slate-300 not-italic">
                            {renderBoldText(line.replace('- ', ''))}
                          </li>
                        );
                      }
                      if (line.startsWith('**') && line.endsWith('**')) {
                        return <p key={i} className="font-bold text-white not-italic">{line.replace(/\*\*/g, '')}</p>;
                      }
                      if (line.trim() === '') return <div key={i} className="h-2" />;

                      return (
                        <p key={i} className="not-italic">
                          {renderBoldText(line)}
                        </p>
                      );
                    })}
                  </div>
                ) : (
                  <p className="opacity-50">Detailed documentation coming soon. Stay tuned!</p>
                )}
              </div>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              className="space-y-10"
            >
              <h2 className="text-3xl font-bold flex items-center gap-4 text-white">
                <span className="w-12 h-1 bg-purple-500 rounded-full shadow-[0_0_10px_rgba(168,85,247,0.5)]"></span>
                Visual Breakdown
              </h2>
              <div className="grid grid-cols-1 gap-10">
                {project.screenshots && project.screenshots.length > 0 ? (
                  project.screenshots.map((src, i) => (
                    <motion.div
                      key={i}
                      whileHover={{ y: -10 }}
                      className="glass-morphism rounded-[2.5rem] overflow-hidden border border-white/5 shadow-2xl p-4"
                    >
                      <div className="relative aspect-video rounded-[2rem] overflow-hidden">
                        <Image
                          src={src}
                          alt={`${project.title} detailed view ${i + 1}`}
                          fill
                          className="object-cover"
                          sizes="(max-width: 768px) 100vw, 80vw"
                        />
                      </div>
                    </motion.div>
                  ))
                ) : (
                  <div className="p-20 text-center glass-morphism rounded-[3rem] border border-dashed border-white/10 text-slate-500">
                    No visual breakdown available yet.
                  </div>
                )}
              </div>
            </motion.div>
          </div>

          {/* Sidebar Part */}
          <motion.div
            initial={{ opacity: 0, x: 20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            className="lg:col-span-4"
          >
            <div className="glass-morphism p-10 rounded-[3rem] border border-white/5 sticky top-24 shadow-2xl space-y-10 group overflow-hidden">
              <div className="absolute top-0 left-0 w-full h-1 bg-gradient-to-r from-indigo-500 to-purple-500 opacity-50 group-hover:opacity-100 transition-opacity" />

              <div>
                <h3 className="text-indigo-400 font-black mb-8 text-[10px] uppercase tracking-[0.3em]">Project Metrics</h3>
                <div className="space-y-6">
                  <div className="flex justify-between items-center py-4 border-b border-white/5">
                    <span className="text-slate-500 text-sm">Industry</span>
                    <span className="text-white font-medium">Healthcare / Tech</span>
                  </div>
                  <div className="flex justify-between items-center py-4 border-b border-white/5">
                    <span className="text-slate-500 text-sm">Target</span>
                    <span className="text-white font-medium">Enterprise</span>
                  </div>
                  <div className="flex justify-between items-center py-4">
                    <span className="text-slate-500 text-sm">Status</span>
                    <span className="text-green-400 font-black uppercase text-[9px] px-2 py-1 bg-green-400/10 rounded-full border border-green-400/20">Production Ready</span>
                  </div>
                </div>
              </div>

              <div className="pt-4">
                {project.githubLink && (
                  <a href={project.githubLink} target="_blank" rel="noopener noreferrer" className="w-full py-5 glass-morphism border border-white/10 text-white font-black rounded-2xl flex items-center justify-center gap-4 hover:bg-white hover:text-black transition-all shadow-xl group">
                    <svg className="w-6 h-6" fill="currentColor" viewBox="0 0 24 24"><path d="M12 0c-6.626 0-12 5.373-12 12 0 5.302 3.438 9.8 8.207 11.387.599.111.793-.261.793-.577v-2.234c-3.338.726-4.041-1.472-4.041-1.472-.546-1.387-1.333-1.756-1.333-1.756-1.089-.745.083-.729.083-.729 1.205.084 1.839 1.237 1.839 1.237 1.07 1.834 2.807 1.304 3.492.997.107-.775.418-1.305.762-1.604-2.665-.305-5.467-1.334-5.467-5.931 0-1.311.469-2.381 1.236-3.221-.124-.303-.535-1.524.117-3.176 0 0 1.008-.322 3.301 1.23.957-.266 1.983-.399 3.003-.404 1.02.005 2.047.138 3.006.404 2.291-1.552 3.297-1.23 3.297-1.23.653 1.653.242 2.874.118 3.176.77.84 1.235 1.911 1.235 3.221 0 4.609-2.807 5.624-5.479 5.921.43.372.823 1.102.823 2.222v3.293c0 .319.192.694.801.576 4.765-1.589 8.199-6.086 8.199-11.386 0-6.627-5.373-12-12-12z" /></svg>
                    <span className="uppercase tracking-widest text-[11px]">View Source Code</span>
                  </a>
                )}
              </div>
            </div>
          </motion.div>
        </div>
      </div>
    </div>
  );
};

export default ProjectDetail;
