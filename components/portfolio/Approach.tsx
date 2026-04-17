import React from 'react';
import { motion } from 'framer-motion';
import { ClipboardList, Palette, Code2, ShieldCheck, Rocket } from 'lucide-react';

const approachSteps = [
    {
        title: "Plan",
        description: "Defining discovery and strategy to align with business goals.",
        icon: ClipboardList,
        color: "#6366f1", // Indigo
    },
    {
        title: "Design",
        description: "Creating intuitive user interfaces and seamless experiences.",
        icon: Palette,
        color: "#a855f7", // Purple
    },
    {
        title: "Build",
        description: "Developing robust, scalable code using modern technologies.",
        icon: Code2,
        color: "#ec4899", // Pink
    },
    {
        title: "Test",
        description: "Ensuring high performance and bug-free functionality.",
        icon: ShieldCheck,
        color: "#3b82f6", // Blue
    },
    {
        title: "Deploy",
        description: "Launching polished products into the digital ecosystem.",
        icon: Rocket,
        color: "#10b981", // Emerald
    }
];

const Approach: React.FC = () => {
    return (
        <section className="pt-24 pb-0 px-6 relative overflow-hidden bg-[#0a0a0c]">
            {/* Background elements */}
            <div className="absolute top-0 right-0 w-[500px] h-[500px] bg-indigo-600/5 blur-[120px] rounded-full -z-10 animate-pulse"></div>

            <div className="max-w-7xl mx-auto">
                <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.8 }}
                    className="text-center mb-20"
                >
                    <h2 className="text-5xl md:text-7xl font-black mb-6 text-white tracking-tighter uppercase">
                        My <span className="gradient-text">Approach</span>
                    </h2>
                    <p className="text-slate-400 max-w-2xl mx-auto text-xl font-light leading-relaxed">
                        Structured methodologies to transform complex ideas into reliable digital realities.
                    </p>
                    <div className="h-1.5 w-24 bg-gradient-to-r from-indigo-500 to-purple-600 rounded-full mx-auto mt-8"></div>
                </motion.div>


                <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-5 gap-6 mb-20">
                    {approachSteps.map((step, index) => (
                        <motion.div
                            key={step.title}
                            initial={{ opacity: 0, scale: 0.9, y: 20 }}
                            whileInView={{ opacity: 1, scale: 1, y: 0 }}
                            viewport={{ once: true }}
                            transition={{ duration: 0.5, delay: index * 0.1 }}
                            whileHover={{ y: -10 }}
                            className="glass-morphism p-8 rounded-[2.5rem] border border-white/5 group hover:border-white/10 transition-all duration-500 relative flex flex-col items-center text-center h-full"
                        >
                            {/* Card Glow */}
                            <div
                                className="absolute inset-0 opacity-0 group-hover:opacity-10 transition-opacity duration-500 blur-2xl rounded-[2.5rem] -z-10"
                                style={{ backgroundColor: step.color }}
                            ></div>

                            <div
                                className="w-16 h-16 rounded-2xl flex items-center justify-center mb-6 transition-all duration-500 group-hover:scale-110 shadow-lg"
                                style={{
                                    backgroundColor: `${step.color}15`,
                                    border: `1.5px solid ${step.color}44`,
                                    boxShadow: `0 0 20px ${step.color}10`
                                }}
                            >
                                <step.icon size={32} style={{ color: step.color }} className="group-hover:brightness-125" />
                            </div>

                            <h3 className="text-xl font-bold text-white mb-4 group-hover:text-white/90">{step.title}</h3>
                            <p className="text-slate-400 text-sm leading-relaxed group-hover:text-slate-300 transition-colors duration-300">
                                {step.description}
                            </p>

                            {/* Step indicator */}
                            <div className="absolute -bottom-2 -right-2 w-10 h-10 flex items-center justify-center text-[10px] font-black text-white/10 group-hover:text-white/30 transition-colors duration-500">
                                0{index + 1}
                            </div>
                        </motion.div>
                    ))}
                </div>

                <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.8, delay: 0.6 }}
                    className="max-w-3xl mx-auto text-center"
                >
                    <div className="inline-block p-[2px] rounded-full bg-gradient-to-r from-indigo-500/30 via-purple-500/30 to-indigo-500/30 mb-8">
                        <div className="px-8 py-4 rounded-full bg-[#0a0a0c]/80 backdrop-blur-md">
                            <p className="text-lg md:text-xl text-slate-300 italic leading-relaxed">
                                &quot;I apply structured methodologies for reliable, scalable digital solutions from concept to launch.&quot;
                            </p>
                        </div>
                    </div>
                </motion.div>
            </div>
        </section>
    );
};

export default Approach;
