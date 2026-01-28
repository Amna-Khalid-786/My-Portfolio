import React from 'react';
import { motion } from 'framer-motion';
import { SKILLS } from '../constants';

const Skills: React.FC = () => {
  const categories = ['Frontend', 'Design', 'Media', 'Tools'] as const;

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: { staggerChildren: 0.1 }
    }
  };

  const itemVariants = {
    hidden: { opacity: 0, y: 20 },
    visible: { opacity: 1, y: 0 }
  };

  return (
    <section id="skills" className="py-24 px-6 relative overflow-hidden">
      <div className="max-w-6xl mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="mb-16 text-center md:text-left"
        >
          <h2 className="text-4xl font-bold mb-4 text-white">Core Competencies</h2>
          <div className="h-1 w-20 bg-indigo-500 rounded-full mx-auto md:mx-0 mb-6"></div>
          <p className="text-slate-400 text-lg max-w-xl">
            A technological stack deep-rooted in engineering principles and polished with modern aesthetics.
          </p>
        </motion.div>

        <motion.div
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          className="grid grid-cols-1 md:grid-cols-2 gap-8"
        >
          {categories.map((cat) => (
            <motion.div
              key={cat}
              variants={itemVariants}
              className="glass-morphism p-10 rounded-[2.5rem] border border-white/5 group hover:border-indigo-500/30 transition-all duration-500"
            >
              <h3 className="text-white font-bold mb-10 text-2xl flex items-center gap-3">
                <span className="w-3 h-3 rounded-full bg-indigo-500 shadow-[0_0_15px_rgba(99,102,241,0.6)]"></span>
                {cat}
              </h3>
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-8">
                {SKILLS.filter(s => s.category === cat).map((skill) => (
                  <div key={skill.name} className="space-y-3">
                    <div className="flex justify-between items-center text-sm">
                      <span className="text-slate-300 font-medium">{skill.name}</span>
                      <span className="text-indigo-400/60 text-[8px] uppercase font-black tracking-widest">Mastery</span>
                    </div>
                    <div className="h-1 w-full bg-white/5 rounded-full overflow-hidden">
                      <motion.div
                        initial={{ width: 0 }}
                        whileInView={{ width: "85%" }}
                        transition={{ duration: 1.5, ease: "easeOut" }}
                        className="h-full bg-gradient-to-r from-indigo-600 to-purple-600 rounded-full shadow-[0_0_10px_rgba(99,102,241,0.3)]"
                      />
                    </div>
                  </div>
                ))}
              </div>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  );
};

export default Skills;
