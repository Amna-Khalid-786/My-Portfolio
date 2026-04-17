import React from 'react';
import { motion } from 'framer-motion';
import Image from 'next/image';

const scrollingSkills = [
  { name: "JavaScript", logo: "/skills-logos/javascript.svg", color: "#F7DF1E" },
  { name: "React", logo: "/skills-logos/react.svg", color: "#61DAFB" },
  { name: "Next.js", logo: "/skills-logos/nextjs.svg", color: "#FFFFFF" },
  { name: "HTML", logo: "/skills-logos/html.svg", color: "#E34F26" },
  { name: "CSS", logo: "/skills-logos/css.svg", color: "#1572B6" },
  { name: "Flutter", logo: "/skills-logos/flutter.svg", color: "#02569B" },
  { name: "Git", logo: "/skills-logos/git.svg", color: "#F05032" },
  { name: "GitHub", logo: "/skills-logos/github.svg", color: "#FFFFFF" },
  { name: "Figma", logo: "/skills-logos/figma.svg", color: "#F24E1E" },
  { name: "Canva", logo: "/skills-logos/canva.svg", color: "#00C4CC" },
  { name: "UI/UX", logo: "/skills-logos/uiux.svg", color: "#FF61F6" },
  { name: "Responsive", logo: "/skills-logos/responsive.png", color: "#3DDC84" },
  { name: "React Native", logo: "/skills-logos/reactnative.png", color: "#61DAFB" },
  { name: "Nodemailer", logo: "/skills-logos/nodemailer.png", color: "#3399CC" },
  { name: "npm", logo: "/skills-logos/npm.svg", color: "#CB3837" },
  { name: "VS Code", logo: "/skills-logos/vscode.svg", color: "#007ACC" },
  { name: "Android", logo: "/skills-logos/android.svg", color: "#3DDC84" },
];

const Skills: React.FC = () => {
  return (
    <section id="skills" className="pt-24 pb-0 px-6 relative overflow-hidden bg-[#0a0a0c]">
      {/* Decorative Circles for Ambient Background */}
      <div className="absolute top-1/4 left-0 w-96 h-96 bg-indigo-600/10 blur-[120px] rounded-full -z-10"></div>
      <div className="absolute bottom-1/4 right-0 w-96 h-96 bg-purple-600/10 blur-[120px] rounded-full -z-10"></div>

      <div className="max-w-7xl mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 15 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "0px 0px -50px 0px" }}
          transition={{ duration: 0.5 }}
          className="mb-16 text-center"
        >
          <h2 className="text-5xl md:text-7xl font-black mb-6 text-white tracking-tighter uppercase">
            Skills & <span className="gradient-text">Expertise</span>
          </h2>
          <p className="text-slate-400 max-w-2xl mx-auto text-xl font-light leading-relaxed">
            A technical arsenal for building modern, scalable, and high-performance applications.
          </p>
          <div className="h-1.5 w-24 bg-gradient-to-r from-indigo-500 to-purple-600 rounded-full mx-auto mt-8"></div>



          {/* Infinite Horizontal Looping Marquee */}
          <div className="relative w-full overflow-x-auto overflow-y-hidden pt-10 pb-0 group scrollbar-hide">
            {/* Gradient Mask for fading edges */}
            <div className="absolute inset-y-0 left-0 w-32 bg-gradient-to-r from-[#0a0a0c] to-transparent z-20 pointer-events-none"></div>
            <div className="absolute inset-y-0 right-0 w-32 bg-gradient-to-l from-[#0a0a0c] to-transparent z-20 pointer-events-none"></div>

            <div className="flex animate-marquee group-hover:pause-marquee whitespace-nowrap min-w-max pt-8 pb-0 will-change-transform">
              {[...scrollingSkills, ...scrollingSkills, ...scrollingSkills].map((skill, index) => (
                <motion.div
                  key={`${skill.name}-${index}`}
                  initial={{ opacity: 0, scale: 0.5 }}
                  whileInView={{ opacity: 1, scale: 1 }}
                  viewport={{ once: true }}
                  transition={{
                    duration: 0.5,
                    delay: (index % scrollingSkills.length) * 0.05,
                    ease: "easeOut"
                  }}
                  className="inline-flex flex-col items-center justify-center mx-10 space-y-5"
                  style={{ width: '130px' }}
                >
                  <div className="relative w-28 h-28 flex items-center justify-center group/skill cursor-pointer">
                    {/* Vibrant Circular Container */}
                    <div
                      className="w-24 h-24 rounded-full flex items-center justify-center relative z-10 transition-all duration-500 group-hover/skill:scale-110 shadow-[0_15px_35px_rgba(0,0,0,0.6)] overflow-hidden"
                      style={{
                        background: `linear-gradient(135deg, ${skill.color}15 0%, ${skill.color}35 100%)`,
                        border: `2px solid ${skill.color}66`,
                        boxShadow: `0 0 25px ${skill.color}15, inset 0 0 15px ${skill.color}10`
                      }}
                    >
                      {/* Interactive Shine Effect */}
                      <div className="absolute inset-x-0 top-0 h-1/2 bg-white/5 skew-y-[-15deg] -translate-y-full group-hover/skill:translate-y-0 transition-transform duration-700"></div>

                      {/* Solid background on hover */}
                      <div
                        className="absolute inset-0 opacity-0 group-hover/skill:opacity-95 transition-opacity duration-500 -z-10"
                        style={{ backgroundColor: skill.color }}
                      ></div>

                      {/* Logo Icon - Uniform Inner Size */}
                      <div className="w-12 h-12 flex items-center justify-center relative z-20">
                        <Image
                          src={skill.logo}
                          alt={skill.name}
                          width={48}
                          height={48}
                          className="max-w-full max-h-full object-contain transition-all duration-500 group-hover/skill:scale-110 group-hover/skill:brightness-110 drop-shadow-md"
                        />
                      </div>
                    </div>


                    {/* Outer Glow Aura */}
                    <div
                      className="absolute inset-2 rounded-full opacity-5 group-hover/skill:opacity-40 blur-3xl transition-all duration-500 -z-10"
                      style={{ backgroundColor: skill.color }}
                    ></div>
                  </div>

                  {/* Skill Name */}
                  <span className="text-[11px] font-bold tracking-[0.2em] text-slate-400 group-hover/skill:text-white uppercase transition-colors duration-300 text-center">
                    {skill.name}
                  </span>
                </motion.div>
              ))}
            </div>
          </div>

          <style jsx global>{`
            @keyframes marquee {
              0% { transform: translateX(0); }
              100% { transform: translateX(-33.33%); }
            }
            .animate-marquee {
              display: inline-flex;
              animation: marquee 40s linear infinite;
            }
            .pause-marquee {
              animation-play-state: paused;
            }
            .scrollbar-hide::-webkit-scrollbar {
              display: none;
            }
            .scrollbar-hide {
              -ms-overflow-style: none;
              scrollbar-width: none;
            }
          `}</style>
        </motion.div>
      </div>
    </section >

  );
};

export default Skills;
