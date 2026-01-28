import React from 'react';
import { motion } from 'framer-motion';
import { EXPERIENCES } from '../constants';

const Experience: React.FC = () => {
  return (
    <section id="experience" className="py-24 px-6 relative overflow-hidden">
      <div className="max-w-6xl mx-auto relative z-10">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="mb-20 text-center"
        >
          <h2 className="text-4xl md:text-5xl font-bold mb-4 text-white">Experience & Education</h2>
          <div className="h-1.5 w-24 bg-gradient-to-r from-indigo-500 to-purple-500 rounded-full mx-auto mb-8"></div>
          <p className="text-slate-400 max-w-2xl mx-auto text-lg">
            A journey of engineering excellence, from academic foundations to industrial innovation.
          </p>
        </motion.div>

        <div className="relative space-y-16 before:absolute before:left-4 md:before:left-1/2 before:top-2 before:bottom-2 before:w-0.5 before:bg-white/10">
          {EXPERIENCES.map((exp, idx) => (
            <motion.div
              key={idx}
              initial={{ opacity: 0, x: idx % 2 === 0 ? 50 : -50 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: idx * 0.1 }}
              className={`relative flex flex-col md:flex-row items-center ${idx % 2 === 0 ? 'md:flex-row-reverse' : ''}`}
            >
              {/* Animated Glowing Dot */}
              <div className="absolute left-4 md:left-1/2 -translate-x-1/2 w-5 h-5 rounded-full bg-indigo-500 border-4 border-[#0a0a0c] z-10 shadow-[0_0_20px_rgba(99,102,241,0.8)]" />

              <div className="w-full md:w-1/2 pl-12 md:pl-0 md:px-12">
                <div className="glass-morphism p-10 rounded-[2.5rem] border border-white/5 group hover:border-indigo-500/40 transition-all duration-500 shadow-2xl">
                  <div className="flex flex-wrap justify-between items-center mb-6 gap-3">
                    <span className="text-indigo-400 font-black uppercase text-[10px] tracking-[0.2em]">{exp.period}</span>
                    {exp.link && (
                      <a href={exp.link} target="_blank" rel="noopener noreferrer" className="text-white/40 hover:text-white transition-colors">
                        <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path d="M10 6H6a2 2 0 00-2 2v10a2 2 0 002 2h10a2 2 0 002-2v-4M14 4h6m0 0v6m0-6L10 14" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" /></svg>
                      </a>
                    )}
                  </div>
                  <h3 className="text-3xl font-bold text-white mb-2 group-hover:text-indigo-400 transition-colors">{exp.role}</h3>
                  <div className="text-slate-200 font-medium mb-6 text-lg">{exp.company}</div>
                  <p className="text-slate-400 leading-relaxed font-light">
                    {exp.description}
                  </p>
                </div>
              </div>
              <div className="hidden md:block md:w-1/2"></div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Experience;
