import React from 'react';
import { motion, useMotionValue, useTransform, useSpring } from 'framer-motion';

const TiltCard: React.FC<{
    title: string;
    subtitle: string;
    description: string;
    color: string;
    tag: string;
    delay: number;
}> = ({ title, subtitle, description, color, tag, delay }) => {
    const x = useMotionValue(0);
    const y = useMotionValue(0);

    const mouseX = useSpring(x, { stiffness: 150, damping: 20 });
    const mouseY = useSpring(y, { stiffness: 150, damping: 20 });

    const rotateX = useTransform(mouseY, [-0.5, 0.5], ["8deg", "-8deg"]);
    const rotateY = useTransform(mouseX, [-0.5, 0.5], ["-8deg", "8deg"]);

    const handleMouseMove = (event: React.MouseEvent<HTMLDivElement>) => {
        const rect = event.currentTarget.getBoundingClientRect();
        const width = rect.width;
        const height = rect.height;
        const mouseXPos = event.clientX - rect.left;
        const mouseYPos = event.clientY - rect.top;
        const xPct = mouseXPos / width - 0.5;
        const yPct = mouseYPos / height - 0.5;
        x.set(xPct);
        y.set(yPct);
    };

    const handleMouseLeave = () => {
        x.set(0);
        y.set(0);
    };

    return (
        <motion.div
            initial={{ opacity: 0, scale: 0.95 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8, delay }}
            onMouseMove={handleMouseMove}
            onMouseLeave={handleMouseLeave}
            style={{
                rotateX,
                rotateY,
                transformStyle: "preserve-3d",
            }}
            className="relative group cursor-pointer"
        >
            {/* Permanent Visible Border Base */}
            <div className="absolute -inset-[1.5px] rounded-[3rem] border border-white/20 z-0 shadow-[0_0_15px_rgba(0,0,0,0.5)]"></div>

            {/* High-Visibility Rotating Border Trace (Traces all 4 sides) */}
            <div className="absolute -inset-[2px] overflow-hidden rounded-[3rem] z-0 opacity-40 group-hover:opacity-100 transition-opacity duration-500">
                <div
                    className="absolute inset-[-400%] animate-spin-slow"
                    style={{
                        background: `conic-gradient(from 0deg, transparent 60%, ${color}aa 80%, white 95%, transparent 100%)`
                    }}
                ></div>
            </div>

            {/* Main Card Content */}
            <div className="glass-morphism p-10 rounded-[3rem] relative bg-[#0a0a0c]/90 backdrop-blur-2xl flex flex-col items-start min-h-[350px] z-10 overflow-hidden shadow-2xl">
                {/* Glow Effect on Hover */}
                <div
                    className="absolute -top-24 -right-24 w-64 h-64 blur-[100px] opacity-10 group-hover:opacity-40 transition-opacity duration-700 rounded-full"
                    style={{ backgroundColor: color }}
                ></div>

                <h3 className="text-4xl font-black text-white mb-6 tracking-tighter leading-none" style={{ transform: "translateZ(60px)" }}>
                    {title} <span style={{ color }}>{subtitle}</span>
                </h3>

                <p className="text-slate-400 text-lg leading-relaxed mb-auto" style={{ transform: "translateZ(40px)" }}>
                    {description}
                </p>

                <div
                    className="mt-8 flex items-center gap-3 font-black text-[11px] uppercase tracking-[0.4em]"
                    style={{ color, transform: "translateZ(50px)" }}
                >
                    <span className="w-10 h-[2.5px]" style={{ backgroundColor: color }}></span>
                    {tag}
                </div>
            </div>
        </motion.div>
    );
};

const HighlightCards: React.FC = () => {
    return (
        <section className="max-w-7xl mx-auto px-6 mt-48 pb-16 relative z-30">
            <div className="grid grid-cols-1 md:grid-cols-2 gap-12">
                <TiltCard
                    title="Strategic"
                    subtitle="Innovation"
                    description="I don't just build; I solve. I leverage data and logic to architect systems that are as efficient as they are innovative, ensuring your technical foundations are built for long-term growth."
                    color="#6366f1"
                    tag="Visionary Thinking"
                    delay={0}
                />
                <TiltCard
                    title="Immersive"
                    subtitle="Design"
                    description="Creating visual stories that captivate. I focus on micro-interactions and accessibility to make every user feel seen, bridging the gap between stunning visuals and seamless functionality."
                    color="#a855f7"
                    tag="User-Centric Artistry"
                    delay={0.2}
                />
            </div>

            <style jsx global>{`
        @keyframes spin-slow {
          from { transform: rotate(0deg); }
          to { transform: rotate(360deg); }
        }
        .animate-spin-slow {
          animation: spin-slow 6s linear infinite;
        }
      `}</style>
        </section>
    );
};

export default HighlightCards;
