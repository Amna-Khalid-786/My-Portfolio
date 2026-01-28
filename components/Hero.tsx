import React from 'react';
import Link from 'next/link';
import { motion } from 'framer-motion';

const Hero: React.FC = () => {
  return (
    <section className="relative pt-32 pb-20 px-6 overflow-hidden min-h-[90vh] flex items-center">
      {/* 3D Decorative Elements */}
      <div className="absolute inset-0 pointer-events-none overflow-hidden">
        <motion.div
          animate={{
            y: [20, -20, 20],
            rotate: [0, 10, 0],
            scale: [1, 1.1, 1]
          }}
          transition={{ duration: 8, repeat: Infinity, ease: "easeInOut" }}
          className="absolute top-1/4 left-10 w-64 h-64 bg-indigo-600/10 blur-[100px] rounded-full"
        />
        <motion.div
          animate={{
            y: [-30, 30, -30],
            rotate: [0, -15, 0]
          }}
          transition={{ duration: 10, repeat: Infinity, ease: "easeInOut" }}
          className="absolute bottom-1/4 right-10 w-96 h-96 bg-purple-600/10 blur-[120px] rounded-full"
        />

        {/* Floating Glass Cards */}
        <motion.div
          animate={{ rotate: 360, y: [0, 50, 0] }}
          transition={{ duration: 25, repeat: Infinity, ease: "linear" }}
          className="absolute top-20 right-[15%] w-32 h-32 glass rounded-3xl opacity-20 hidden md:block"
        />
        <motion.div
          animate={{ rotate: -360, x: [0, 30, 0] }}
          transition={{ duration: 20, repeat: Infinity, ease: "linear" }}
          className="absolute bottom-40 left-[10%] w-24 h-24 glass rounded-full opacity-10 hidden md:block"
        />
      </div>

      <div className="max-w-6xl mx-auto flex flex-col items-center text-center relative z-10">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          className="inline-block px-4 py-1.5 mb-6 rounded-full glass border border-indigo-500/30 text-indigo-400 text-xs font-semibold uppercase tracking-wider glow-indigo"
        >
          Information Engineering Technology Graduate
        </motion.div>

        <motion.h1
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.2 }}
          className="text-5xl md:text-8xl font-extrabold mb-6 tracking-tight leading-none"
        >
          Hi, I&apos;m <span className="gradient-text">Amna Khalid</span>
        </motion.h1>

        <motion.p
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.4 }}
          className="text-lg md:text-2xl text-slate-400 max-w-2xl mb-10 leading-relaxed font-light"
        >
          Bridging the gap between engineering and aesthetics with
          <span className="text-white font-medium"> precision</span> and
          <span className="text-white font-medium"> style</span>.
        </motion.p>

        <motion.div
          initial={{ opacity: 0, scale: 0.9 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.6, delay: 0.6 }}
          className="flex flex-col sm:flex-row gap-4 w-full sm:w-auto"
        >
          <Link href="/projects" className="px-10 py-5 bg-white text-black font-bold rounded-2xl hover:scale-105 active:scale-95 transition-all shadow-2xl shadow-white/10">
            View Projects
          </Link>
          <Link href="/contact" className="px-10 py-5 glass border border-white/10 text-white font-bold rounded-2xl hover:bg-white/5 hover:scale-105 active:scale-95 transition-all text-center">
            Hire Me
          </Link>
        </motion.div>
      </div>
    </section>
  );
};

export default Hero;
