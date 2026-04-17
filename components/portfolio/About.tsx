import Image from 'next/image';
import { motion } from 'framer-motion';

const About: React.FC = () => {
  return (
    <section id="about" className="py-24 px-6 relative overflow-hidden">
      <div className="max-w-6xl mx-auto relative z-10">
        <motion.div
          initial={{ opacity: 0, y: 15 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "0px 0px -50px 0px" }}
          transition={{ duration: 0.5 }}
          className="mb-24 text-center"
        >
          <h2 className="text-5xl md:text-7xl font-black mb-6 text-white tracking-tighter uppercase">
            About <span className="gradient-text">Me</span>
          </h2>
          <p className="text-slate-400 max-w-2xl mx-auto text-xl font-light leading-relaxed">
            The engineer behind the code, blending academic rigor with technical passion.
          </p>
          <div className="h-1.5 w-24 bg-gradient-to-r from-indigo-500 to-purple-600 rounded-full mx-auto mt-8"></div>
        </motion.div>

        <div className="flex flex-col md:flex-row items-start gap-16">
          <motion.div
            initial={{ opacity: 0, x: -50 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true, margin: "0px 0px -100px 0px" }}
            transition={{ duration: 0.8, ease: "easeOut" }}
            className="w-full md:w-5/12 mx-auto"
          >
            <div className="relative group aspect-[3/4] max-w-[280px] mx-auto transform -rotate-3 hover:rotate-0 transition-all duration-500 will-change-transform">
              <div className="absolute -top-10 -left-10 w-40 h-40 bg-indigo-500/20 rounded-full blur-[40px] -z-10 group-hover:bg-indigo-500/30 transition-colors"></div>
              <div className="absolute -bottom-10 -right-10 w-40 h-40 bg-purple-500/20 rounded-full blur-[40px] -z-10 group-hover:bg-purple-500/30 transition-colors"></div>

              {/* Abstract decorative frame */}
              <div className="absolute inset-0 border-2 border-white/10 rounded-[2rem] transform translate-x-3 translate-y-3 -z-10 group-hover:translate-x-1 group-hover:translate-y-1 transition-transform duration-500"></div>
              <div className="absolute inset-0 border border-indigo-500/30 rounded-[2rem] transform -translate-x-2 -translate-y-2 -z-10 group-hover:translate-x-1 group-hover:translate-y-1 transition-transform duration-500 opacity-0 group-hover:opacity-100"></div>

              <Image
                src="/assets/about.jpeg"
                alt="Amna Khalid"
                fill
                className="rounded-[2rem] shadow-2xl object-cover object-top border border-white/10 grayscale group-hover:grayscale-0 transition-all duration-700 ease-out"
                sizes="(max-width: 768px) 100vw, 33vw"
              />
            </div>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, x: 50 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true, margin: "0px 0px -100px 0px" }}
            transition={{ duration: 0.8, ease: "easeOut" }}
            className="w-full md:w-1/2"
          >
            <div className="space-y-6 text-slate-400 leading-relaxed text-lg">
              <p>
                I am currently pursuing a degree in <span className="text-white font-medium">Information Engineering Technology</span> at Foundation University. My academic journey has been a blend of theoretical depth and hands-on industrial applications.
              </p>
              <p>
                With 6 semesters of comprehensive coursework behind me, I am now navigating my professional phase. During my 7th semester, I completed a pivotal internship at <a href="https://rmt-usa.com/" className="text-indigo-400 hover:underline">Revive Medical Technologies Inc.</a>, where I applied engineering principles to real-world healthcare solutions.
              </p>
              <p>
                Currently, I am in my <span className="text-white font-medium">8th semester</span>, continuing my journey at RMT. My goal is to build secure, scalable, and human-centric software.
              </p>
            </div>

            <div className="grid grid-cols-2 gap-4 mt-10">
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: 0.2 }}
                className="p-6 glass-morphism rounded-3xl border border-white/5 hover:border-indigo-500/30 transition-colors"
              >
                <div className="text-3xl font-bold gradient-text">4+</div>
                <div className="text-xs text-slate-500 uppercase font-black tracking-widest mt-2">Years Study</div>
              </motion.div>
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: 0.4 }}
                className="p-6 glass-morphism rounded-3xl border border-white/5 hover:border-indigo-500/30 transition-colors"
              >
                <div className="text-3xl font-bold gradient-text">2</div>
                <div className="text-xs text-slate-500 uppercase font-black tracking-widest mt-2">Internships</div>
              </motion.div>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default About;
