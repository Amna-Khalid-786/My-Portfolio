"use client";

import React, { useState } from 'react';
import { motion } from 'framer-motion';

const GROWTH_STEPS = [
    {
        id: 1,
        number: "1",
        label: "Foundation",
        description: "Academic learning & problem-solving mindset",
        color: "#6366f1", // Indigo
        rotation: 0
    },
    {
        id: 2,
        number: "2",
        label: "Exploration",
        description: "Exposure to multiple domains & experimentation",
        color: "#a855f7", // Purple
        rotation: 72
    },
    {
        id: 3,
        number: "3",
        label: "Application",
        description: "Real-world projects & hands-on development",
        color: "#ec4899", // Pink
        rotation: 144
    },
    {
        id: 4,
        number: "4",
        label: "Optimization",
        description: "Code quality, performance, maintainability",
        color: "#3b82f6", // Blue
        rotation: 216
    },
    {
        id: 5,
        number: "5",
        label: "Readiness",
        description: "Industry mindset, ownership, collaboration",
        color: "#10b981", // Emerald
        rotation: 288
    },
];

const LearningMethodology: React.FC = () => {
    const [hoveredId, setHoveredId] = useState<number | null>(null);

    return (
        <section className="py-32 px-6 relative overflow-hidden bg-[#0a0a0c]">
            {/* Decorative Background Elements */}
            <div className="absolute top-0 left-1/4 w-[500px] h-[500px] bg-indigo-600/10 rounded-full blur-[120px] pointer-events-none animate-pulse" />
            <div className="absolute bottom-0 right-1/4 w-[400px] h-[400px] bg-purple-600/10 rounded-full blur-[100px] pointer-events-none animate-pulse" style={{ animationDelay: '2s' }} />

            <div className="max-w-6xl mx-auto relative z-10">
                <motion.div
                    initial={{ opacity: 0, scale: 0.95 }}
                    whileInView={{ opacity: 1, scale: 1 }}
                    viewport={{ once: true, margin: "0px 0px -100px 0px" }}
                    transition={{ duration: 0.5 }}
                    className="mb-24 text-center"
                >
                    <h2 className="text-5xl md:text-7xl font-black mb-6 text-white tracking-tighter uppercase">
                        Learning & <span className="gradient-text">Growth</span>
                    </h2>
                    <p className="text-slate-400 max-w-2xl mx-auto text-xl font-light leading-relaxed">
                        A visual representation of my continuous evolution and technical adaptation.
                    </p>
                    <div className="h-1.5 w-24 bg-gradient-to-r from-indigo-500 to-purple-600 rounded-full mx-auto mt-8"></div>
                </motion.div>


                <div className="relative aspect-square max-w-[650px] mx-auto flex items-center justify-center mb-20">

                    {/* Static Background Rings (Premium Polish) */}
                    <div className="absolute inset-0 flex items-center justify-center pointer-events-none">
                        {/* Outer Glow Ring */}
                        <div className="w-[90%] h-[90%] rounded-full border border-white/5 shadow-[inset_0_0_20px_rgba(255,255,255,0.02)]" />

                        {/* Rotating Dotted Base (Subtle) */}
                        <motion.div
                            animate={{ rotate: 360 }}
                            transition={{ duration: 100, repeat: Infinity, ease: "linear" }}
                            className="absolute w-[80%] h-[80%] rounded-full border border-dashed border-white/10"
                        />

                        {/* Solid Glass Base */}
                        <div className="w-[78%] h-[78%] rounded-full border border-white/10 bg-gradient-to-br from-white/[0.03] to-transparent backdrop-blur-3xl shadow-2xl relative overflow-hidden">
                            {/* Decorative mesh pattern overlay */}
                            <div className="absolute inset-0 opacity-10 bg-[radial-gradient(circle_at_2px_2px,rgba(255,255,255,0.1)_1px,transparent_0)] bg-[length:24px_24px]" />
                        </div>
                    </div>

                    {/* Nodes Layer - Entire assembly rotates like a cycle tyre */}
                    <motion.div
                        className="w-full h-full relative z-10"
                        animate={{ rotate: 360 }}
                        transition={{ duration: 60, repeat: Infinity, ease: "linear" }}
                    >
                        <svg viewBox="0 0 100 100" className="w-full h-full overflow-visible">
                            {/* Connection Ring - Properly Neon */}
                            <circle
                                cx="50" cy="50" r="39"
                                fill="none"
                                stroke="white"
                                strokeOpacity="0.05"
                                strokeWidth="0.8"
                            />

                            {GROWTH_STEPS.map((step) => {
                                const radius = 39;
                                const angle = (step.rotation * Math.PI) / 180;
                                const x = 50 + radius * Math.cos(angle - Math.PI / 2);
                                const y = 50 + radius * Math.sin(angle - Math.PI / 2);

                                const isHovered = hoveredId === step.id;

                                return (
                                    <motion.g
                                        key={step.id}
                                        className="cursor-pointer"
                                        onMouseEnter={() => setHoveredId(step.id)}
                                        onMouseLeave={() => setHoveredId(null)}
                                        animate={{ scale: isHovered ? 1.2 : 1 }}
                                    >
                                        {/* Individual Node - Counter-rotates to stay upright */}
                                        <motion.g
                                            animate={{ rotate: -360 }}
                                            transition={{ duration: 60, repeat: Infinity, ease: "linear" }}
                                            style={{ transformOrigin: `${x}px ${y}px` }}
                                        >
                                            {/* Pulsing Aura */}
                                            <motion.circle
                                                cx={x} cy={y} r="10"
                                                fill={step.color}
                                                animate={{
                                                    fillOpacity: isHovered ? 0.3 : 0.05,
                                                    r: isHovered ? 16 : 10
                                                }}
                                                className="transition-all duration-700 blur-md"
                                            />

                                            {/* Highly Decorative Node */}
                                            <g>
                                                {/* Outer Glow Circle */}
                                                <circle cx={x} cy={y} r="9" fill="#050507" />

                                                {/* Main Colored Circle with Gradient */}
                                                <defs>
                                                    <linearGradient id={`grad-${step.id}`} x1="0%" y1="0%" x2="100%" y2="100%">
                                                        <stop offset="0%" stopColor={step.color} />
                                                        <stop offset="100%" stopColor="#ffffff" stopOpacity="0.5" />
                                                    </linearGradient>
                                                </defs>

                                                <circle
                                                    cx={x} cy={y} r="8.5"
                                                    fill={`url(#grad-${step.id})`}
                                                    fillOpacity={isHovered ? 1 : 0.8}
                                                    stroke="white"
                                                    strokeWidth="0.5"
                                                    className="transition-all duration-300"
                                                    style={{ filter: isHovered ? `drop-shadow(0 0 10px ${step.color}88)` : 'none' }}
                                                />

                                                {/* Text Label */}
                                                <text
                                                    x={x}
                                                    y={y + 0.8}
                                                    fill="white"
                                                    fontSize="1.6"
                                                    fontWeight="900"
                                                    textAnchor="middle"
                                                    className="pointer-events-none select-none uppercase tracking-tighter drop-shadow-md"
                                                >
                                                    {step.label}
                                                </text>

                                                {/* Tiny Decorative Dot above label */}
                                                <circle cx={x} cy={y - 3} r="0.5" fill="white" fillOpacity="0.8" />
                                            </g>
                                        </motion.g>
                                    </motion.g>
                                );
                            })}
                        </svg>
                    </motion.div>

                    {/* Center Branding - Perfectly Centered & Premium Glassmorphism */}
                    <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 text-center pointer-events-none z-20 w-1/2 flex items-center justify-center">
                        <div className="relative group">
                            <div className="absolute inset-0 bg-indigo-500/10 blur-[80px] rounded-full scale-150" />
                            <div className="relative w-44 h-44 md:w-60 md:h-60 flex flex-col items-center justify-center glass-morphism rounded-full border border-white/20 shadow-[0_0_50px_rgba(0,0,0,0.5)] overflow-hidden">
                                <div className="absolute inset-0 bg-gradient-to-tr from-indigo-500/5 via-transparent to-purple-500/5" />

                                <div className="flex flex-col items-center justify-center relative z-10 w-full">
                                    <h3 className="text-indigo-400 text-[10px] md:text-sm font-black tracking-[0.5em] uppercase mb-2 text-center w-full">Learning</h3>
                                    <div className="h-[1px] w-12 bg-white/20 my-1" />
                                    <h4 className="text-white text-base md:text-3xl font-black tracking-[0.1em] uppercase leading-tight text-center w-full">Growth</h4>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>

                {/* Description card removed as requested */}

            </div>
        </section>
    );
};

export default LearningMethodology;
