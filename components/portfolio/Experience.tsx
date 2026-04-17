import React from 'react';
import { motion } from 'framer-motion';
import { EXPERIENCES } from '@/constants';

const Experience: React.FC = () => {
  return (
    <section id="experience" className="py-24 px-6 relative overflow-hidden bg-black/20">
      {/* Background Decorative Elements */}
      <div className="absolute top-0 left-0 w-full h-full pointer-events-none">
        <div className="absolute top-1/4 -left-20 w-80 h-80 bg-indigo-500/10 rounded-full blur-[120px]" />
        <div className="absolute bottom-1/4 -right-20 w-80 h-80 bg-purple-500/10 rounded-full blur-[120px]" />
      </div>

      <div className="max-w-6xl mx-auto relative z-10">
        <motion.div
          initial={{ opacity: 0, y: 15 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "0px 0px -50px 0px" }}
          className="mb-24 text-center"
        >
          <h2 className="text-5xl md:text-7xl font-black mb-6 text-white tracking-tight uppercase">
            My <span className="gradient-text">Experience</span>
          </h2>
          <p className="text-slate-400 max-w-2xl mx-auto text-xl font-light leading-relaxed">
            Bridging academic excellence with industrial innovation through a structured professional path.
          </p>
          <div className="h-1.5 w-24 bg-gradient-to-r from-indigo-500 to-purple-600 rounded-full mx-auto mt-8"></div>
        </motion.div>


        <div className="relative">
          {/* Vertical Timeline Line - Enhanced */}
          <div className="absolute left-0 md:left-1/2 top-0 bottom-0 w-[2px] md:-translate-x-1/2 overflow-hidden">
            <div className="absolute inset-0 bg-white/5" />
            <motion.div
              initial={{ height: 0 }}
              whileInView={{ height: '100%' }}
              viewport={{ once: true, margin: "0px 0px -100px 0px" }}
              transition={{ duration: 1, ease: "easeOut" }}
              className="absolute top-0 bottom-0 w-full bg-gradient-to-b from-indigo-500 via-purple-500 to-transparent shadow-[0_0_15px_rgba(99,102,241,0.5)]"
            />
          </div>

          <div className="space-y-24">
            {EXPERIENCES.map((exp, idx) => (
              <motion.div
                key={idx}
                initial={{ opacity: 0, x: idx % 2 === 0 ? 50 : -50, y: 30 }}
                whileInView={{ opacity: 1, x: 0, y: 0 }}
                viewport={{ once: true, margin: "0px 0px -100px 0px" }}
                transition={{ duration: 0.8, delay: idx * 0.2, ease: "easeOut" }}
                className={`flex flex-col md:flex-row gap-8 md:gap-0 ${idx % 2 === 0 ? 'md:flex-row-reverse' : ''}`}
              >
                {/* Timeline Connector */}
                <div className="absolute left-0 md:left-1/2 -translate-x-[9.5px] md:-translate-x-1/2 z-20">
                  <div className="w-5 h-5 rounded-full bg-black border-2 border-indigo-500 relative">
                    <div className="absolute inset-0 rounded-full bg-indigo-400 animate-ping opacity-25" />
                    <div className="absolute inset-1 rounded-full bg-indigo-500 shadow-[0_0_15px_rgba(99,102,241,0.8)]" />
                  </div>
                </div>

                {/* Content Card Side */}
                <div className="w-full md:w-[45%] pl-10 md:pl-0">
                  <div className="group relative">
                    {/* Border Trace Animation Container (Modified to match Learning & Growth) */}
                    <div className="absolute -inset-[2px] rounded-[3.1rem] overflow-hidden opacity-30 group-hover:opacity-100 transition-opacity duration-500 pointer-events-none">
                      <div
                        className="absolute inset-[-1000%] animate-[spin_4s_linear_infinite]"
                        style={{
                          backgroundImage: `conic-gradient(from 0deg, transparent 70%, #6366f1 100%)`
                        }}
                      />
                    </div>

                    <div className="glass-morphism relative p-8 md:p-10 rounded-[2rem] border border-white/5 group-hover:border-white/10 transition-all duration-500 bg-black/40 backdrop-blur-3xl m-[1px] overflow-hidden">
                      {/* Link Icon - Repositioned to Top Right */}
                      {exp.link && (
                        <a
                          href={exp.link}
                          target="_blank"
                          rel="noopener noreferrer"
                          className="absolute top-6 right-6 p-3 rounded-xl bg-white/5 hover:bg-indigo-500/20 text-white/40 hover:text-indigo-400 transition-all duration-300 border border-white/5 z-20 group/link"
                        >
                          <svg className="w-5 h-5 group-hover/link:translate-x-0.5 group-hover/link:-translate-y-0.5 transition-transform" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                            <path d="M10 6H6a2 2 0 00-2 2v10a2 2 0 002 2h10a2 2 0 002-2v-4M14 4h6m0 0v6m0-6L10 14" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
                          </svg>
                        </a>
                      )}

                      <div className="flex flex-col mb-6">
                        <span className="inline-block w-fit px-4 py-1.5 rounded-full bg-indigo-500/10 text-indigo-400 border border-indigo-500/20 text-xs font-bold uppercase tracking-widest mb-4">
                          {exp.period}
                        </span>
                        <h3 className="text-2xl md:text-3xl font-bold text-white group-hover:text-indigo-400 transition-all duration-500">
                          {exp.role}
                        </h3>
                      </div>

                      <div className="text-purple-400 font-semibold mb-6 flex items-center gap-2">
                        <span className="w-6 h-[1px] bg-purple-500/50"></span>
                        {exp.company}
                      </div>

                      <p className="text-slate-400 leading-relaxed text-lg font-light">
                        {exp.description}
                      </p>


                      {/* Decorative Corner */}
                      <div className="absolute bottom-6 right-6 opacity-5 group-hover:opacity-10 transition-opacity">
                        <svg className="w-12 h-12" stroke="currentColor" fill="none" viewBox="0 0 24 24">
                          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="1" d="M19 21V5a2 2 0 00-2-2H7a2 2 0 00-2 2v16m14 0h2m-2 0h-5m-9 0H3m2 0h5M9 7h1m-1 4h1m4-4h1m-1 4h1m-5 10v-5a1 1 0 011-1h2a1 1 0 011 1v5m-4 0h4" />
                        </svg>
                      </div>
                    </div>
                  </div>
                </div>

                {/* Empty Side (For Layout) */}
                <div className="hidden md:block w-[45%]"></div>
              </motion.div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default Experience;
