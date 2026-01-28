import Image from 'next/image';
import { motion } from 'framer-motion';

const About: React.FC = () => {
  return (
    <section id="about" className="py-24 px-6 relative overflow-hidden">
      <div className="max-w-6xl mx-auto flex flex-col md:flex-row items-center gap-16 relative z-10">
        <motion.div
          initial={{ opacity: 0, x: -30 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
          className="w-full md:w-1/2"
        >
          <div className="relative group aspect-[4/5]">
            <div className="absolute -top-6 -left-6 w-32 h-32 bg-indigo-500/10 rounded-full blur-3xl -z-10 group-hover:bg-indigo-500/20 transition-colors"></div>
            <div className="absolute -bottom-6 -right-6 w-32 h-32 bg-purple-500/10 rounded-full blur-3xl -z-10 group-hover:bg-purple-500/20 transition-colors"></div>
            <Image
              src="https://images.unsplash.com/photo-1573496359142-b8d87734a5a2?auto=format&fit=crop&q=80&w=800"
              alt="Amna Khalid"
              fill
              className="rounded-[2.5rem] shadow-2xl object-cover border border-white/10 group-hover:scale-[1.02] transition-transform duration-500"
              sizes="(max-width: 768px) 100vw, 50vw"
            />
          </div>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, x: 30 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
          className="w-full md:w-1/2"
        >
          <div className="inline-block px-3 py-1 mb-6 rounded-full bg-indigo-500/10 border border-indigo-500/20 text-indigo-400 text-[10px] font-bold uppercase tracking-widest">
            The Engineer Behind the Code
          </div>
          <h2 className="text-4xl md:text-5xl font-bold mb-8 text-white leading-tight">About Me</h2>
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
            <div className="p-6 glass-morphism rounded-3xl border border-white/5 hover:border-indigo-500/30 transition-colors">
              <div className="text-3xl font-bold gradient-text">4+</div>
              <div className="text-xs text-slate-500 uppercase font-black tracking-widest mt-2">Years Study</div>
            </div>
            <div className="p-6 glass-morphism rounded-3xl border border-white/5 hover:border-indigo-500/30 transition-colors">
              <div className="text-3xl font-bold gradient-text">2</div>
              <div className="text-xs text-slate-500 uppercase font-black tracking-widest mt-2">Internships</div>
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default About;
