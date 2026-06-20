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
  { name: "AWS S3", logo: "/skills-logos/aws.svg", color: "#569A31" },
  { name: "Neon", logo: "https://cdn.simpleicons.org/neon/white", color: "#00E599" },
  { name: "Resend", logo: "https://cdn.simpleicons.org/resend/white", color: "#FFFFFF" },
  { name: "Brevo", logo: "https://cdn.simpleicons.org/brevo/white", color: "#0092FF" },
  { name: "PostgreSQL", logo: "https://cdn.simpleicons.org/postgresql/white", color: "#4169E1" },
  { name: "C++", logo: "https://cdn.simpleicons.org/cplusplus/white", color: "#00599C" },
  { name: "TypeScript", logo: "https://cdn.simpleicons.org/typescript/white", color: "#3178C6" },
  { name: "Dart", logo: "https://cdn.simpleicons.org/dart/white", color: "#0175C2" },
  { name: "WordPress", logo: "https://cdn.simpleicons.org/wordpress/white", color: "#21759B" },
  { name: "Tailwind CSS", logo: "https://cdn.simpleicons.org/tailwindcss/white", color: "#38B2AC" },
  { name: "MongoDB", logo: "https://cdn.simpleicons.org/mongodb/white", color: "#4EA94B" },
  { name: "Vite", logo: "https://cdn.simpleicons.org/vite/white", color: "#646CFF" },
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
                        <img
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

          {/* Technical Stack Static Chart */}
          <div className="mt-32 max-w-5xl mx-auto pb-10">
            <h3 className="text-4xl md:text-5xl font-black text-center mb-16 text-white tracking-tighter uppercase">
              Technical <span className="gradient-text">Stack</span>
            </h3>
            
            <div className="space-y-16">
              {[
                {
                  title: "Programming Languages",
                  skills: [
                    { name: "JavaScript", logo: "/skills-logos/javascript.svg", color: "#F7DF1E" },
                    { name: "TypeScript", logo: "https://cdn.simpleicons.org/typescript/white", color: "#3178C6" },
                    { name: "Dart", logo: "https://cdn.simpleicons.org/dart/white", color: "#0175C2" },
                    { name: "C++", logo: "https://cdn.simpleicons.org/cplusplus/white", color: "#00599C" },
                    { name: "HTML5", logo: "/skills-logos/html.svg", color: "#E34F26" },
                    { name: "CSS3", logo: "/skills-logos/css.svg", color: "#1572B6" }
                  ]
                },
                {
                  title: "Frameworks, Libraries & CMS",
                  skills: [
                    { name: "React", logo: "/skills-logos/react.svg", color: "#61DAFB" },
                    { name: "Next.js", logo: "/skills-logos/nextjs.svg", color: "#FFFFFF" },
                    { name: "Flutter", logo: "/skills-logos/flutter.svg", color: "#02569B" },
                    { name: "React Native", logo: "/skills-logos/reactnative.png", color: "#61DAFB" },
                    { name: "WordPress", logo: "https://cdn.simpleicons.org/wordpress/white", color: "#21759B" },
                    { name: "Tailwind CSS", logo: "https://cdn.simpleicons.org/tailwindcss/white", color: "#38B2AC" }
                  ]
                },
                {
                  title: "UI/UX & Design Tools",
                  skills: [
                    { name: "Figma", logo: "/skills-logos/figma.svg", color: "#F24E1E" },
                    { name: "Canva", logo: "/skills-logos/canva.svg", color: "#00C4CC" },
                    { name: "UI/UX", logo: "/skills-logos/uiux.svg", color: "#FF61F6" },
                    { name: "Responsive", logo: "/skills-logos/responsive.png", color: "#3DDC84" }
                  ]
                },
                {
                  title: "Databases, Cloud & Services",
                  skills: [
                    { name: "PostgreSQL", logo: "https://cdn.simpleicons.org/postgresql/white", color: "#4169E1" },
                    { name: "AWS S3", logo: "/skills-logos/aws.svg", color: "#569A31" },
                    { name: "Neon", logo: "https://cdn.simpleicons.org/neon/white", color: "#00E599" },
                    { name: "MongoDB", logo: "https://cdn.simpleicons.org/mongodb/white", color: "#4EA94B" },
                    { name: "Resend", logo: "https://cdn.simpleicons.org/resend/white", color: "#FFFFFF" },
                    { name: "Brevo", logo: "https://cdn.simpleicons.org/brevo/white", color: "#0092FF" },
                    { name: "Nodemailer", logo: "/skills-logos/nodemailer.png", color: "#3399CC" }
                  ]
                },
                {
                  title: "Developer Ecosystem",
                  skills: [
                    { name: "Git", logo: "/skills-logos/git.svg", color: "#F05032" },
                    { name: "GitHub", logo: "/skills-logos/github.svg", color: "#FFFFFF" },
                    { name: "VS Code", logo: "/skills-logos/vscode.svg", color: "#007ACC" },
                    { name: "npm", logo: "/skills-logos/npm.svg", color: "#CB3837" },
                    { name: "Vite", logo: "https://cdn.simpleicons.org/vite/white", color: "#646CFF" },
                    { name: "Android", logo: "/skills-logos/android.svg", color: "#3DDC84" }
                  ]
                }
              ].map((category, idx) => (
                <div key={idx} className="flex flex-col items-center">
                  <h4 className="text-2xl font-semibold text-center text-transparent bg-clip-text bg-gradient-to-r from-indigo-400 to-purple-400 mb-8 tracking-wide">
                    {category.title}
                  </h4>
                  <div className="flex flex-wrap justify-center gap-4 md:gap-6 w-full">
                    {category.skills.map((skill, sIdx) => (
                      <div 
                        key={sIdx} 
                        className="glass px-6 py-4 rounded-2xl flex items-center gap-4 hover:scale-110 hover:-translate-y-2 transition-all duration-300 group cursor-pointer border border-white/5 hover:border-indigo-500/30"
                        style={{ boxShadow: `0 4px 20px -5px ${skill.color}15` }}
                      >
                        <div className="w-8 h-8 flex items-center justify-center relative">
                          <div 
                            className="absolute inset-0 rounded-full blur-md group-hover:opacity-100 opacity-0 transition-opacity duration-300"
                            style={{ backgroundColor: skill.color }}
                          ></div>
                          <img 
                            src={skill.logo} 
                            alt={skill.name} 
                            className="w-full h-full object-contain relative z-10 group-hover:brightness-125 transition-all" 
                          />
                        </div>
                        <span className="text-slate-300 font-bold tracking-wider text-sm group-hover:text-white transition-colors uppercase">
                          {skill.name}
                        </span>
                      </div>
                    ))}
                  </div>
                </div>
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
