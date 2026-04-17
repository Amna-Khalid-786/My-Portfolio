"use client";

import React from 'react';
import Link from 'next/link';
import { motion } from 'framer-motion';
import { Robot3DWrapper } from '@/components/bot/Robot3DWrapper';

interface HeroProps {

  title?: React.ReactNode;
  subtitle?: string;
  primaryButton?: {
    text: string;
    href: string;
  };
  secondaryButton?: {
    text: string;
    href: string;
  };
  height?: string;
  extraContent?: React.ReactNode;
}

const Hero: React.FC<HeroProps> = ({

  title = (
    <>
      Hi, I&apos;m <span className="gradient-text">Amna Khalid</span>
    </>
  ),
  subtitle = "Bridging the gap between engineering and aesthetics with precision and style.",
  primaryButton = { text: "View Projects", href: "/projects" },
  secondaryButton = { text: "Hire Me", href: "/contact" },
  height = "min-h-[90vh]",
  extraContent
}) => {
  return (
    <section className={`relative pt-32 pb-20 px-6 overflow-hidden ${height} flex items-center`}>
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

      <div className={`max-w-6xl mx-auto flex flex-col ${extraContent ? 'md:flex-row text-left items-center justify-between gap-12 md:gap-24' : 'items-center text-center'} relative z-10 w-full`}>
        <div className={`flex flex-col ${extraContent ? 'items-start md:w-1/2' : 'items-center'} `}>
          <motion.h1
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.2 }}
            className={`text-4xl md:text-6xl font-extrabold mb-6 tracking-tight leading-tight ${extraContent ? '' : ''}`}
          >
            {title}
          </motion.h1>

          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.4 }}
            className={`text-lg md:text-2xl text-slate-400 max-w-2xl mb-10 leading-relaxed font-light ${extraContent ? 'text-left' : ''}`}
          >
            {subtitle}
          </motion.p>

          <motion.div
            initial={{ opacity: 0, scale: 0.9 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.6, delay: 0.6 }}
            className="flex flex-col sm:flex-row gap-4 w-full sm:w-auto"
          >
            <Link href={primaryButton.href} className="px-10 py-5 bg-white text-black font-bold rounded-2xl hover:scale-105 active:scale-95 transition-all shadow-2xl shadow-white/10">
              {primaryButton.text}
            </Link>
            <Link href={secondaryButton.href} className="px-10 py-5 glass border border-white/10 text-white font-bold rounded-2xl hover:bg-white/5 hover:scale-105 active:scale-95 transition-all text-center">
              {secondaryButton.text}
            </Link>
          </motion.div>
        </div>

        {extraContent && (
          <motion.div
            initial={{ opacity: 0, x: 50 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8, delay: 0.4 }}
            className="mt-10 md:-mt-32 md:w-1/2 flex justify-center md:justify-end"
          >
            <div className="md:pl-12">
              <Robot3DWrapper>
                {extraContent}
              </Robot3DWrapper>
            </div>
          </motion.div>
        )}
      </div>
    </section>
  );
};

export default Hero;
