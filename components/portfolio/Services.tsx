"use client";

import React, { useEffect, useRef } from "react";
import { motion } from "framer-motion";
import { Check, ArrowRight, Zap, Globe, Smartphone, Bot, Server, Palette, Blocks, ShieldCheck } from "lucide-react";

const SERVICES = [
  {
    icon: <Globe className="w-7 h-7" />,
    title: "Web Development",
    description: "Full-stack web applications built with Next.js, React, and modern frameworks. Fast, SEO-optimized, responsive, and scalable for any business need.",
    features: ["Custom Landing Pages", "E-Commerce Platforms", "Dashboard & Admin Panels", "SEO Optimization", "API Integration"],
    color: "#818cf8",
  },
  {
    icon: <Smartphone className="w-7 h-7" />,
    title: "Mobile App Development",
    description: "Cross-platform iOS & Android apps using React Native and Flutter with native-level performance and smooth UX.",
    features: ["React Native Apps", "Flutter Apps", "Push Notifications", "App Store Publishing", "Offline Capabilities"],
    color: "#a78bfa",
  },
  {
    icon: <Bot className="w-7 h-7" />,
    title: "AI Automation",
    description: "Smart AI-powered chatbots, automation workflows, and intelligent features using Gemini, OpenAI, and custom ML models.",
    features: ["AI Chatbots & Assistants", "Workflow Automation", "Content Generation", "Data Analysis", "AI API Integration"],
    color: "#c084fc",
  },
  {
    icon: <Blocks className="w-7 h-7" />,
    title: "WordPress Development",
    description: "Custom WordPress websites, themes, plugins, and WooCommerce stores. Full CMS setup with optimized performance.",
    features: ["Custom Themes", "WooCommerce Stores", "Plugin Development", "Site Migration", "Performance Optimization"],
    color: "#f472b6",
  },
  {
    icon: <Palette className="w-7 h-7" />,
    title: "UI/UX Design",
    description: "Beautiful, user-centered designs crafted in Figma. From wireframes to pixel-perfect prototypes that convert visitors into users.",
    features: ["Wireframing", "Prototyping in Figma", "Design Systems", "Mobile-First Design", "Brand Identity"],
    color: "#fb923c",
  },
  {
    icon: <Server className="w-7 h-7" />,
    title: "DevOps & Hosting",
    description: "Complete deployment and server management. VPS setup, Docker containerization, and hosting on Hostinger, Vercel, AWS.",
    features: ["VPS Configuration", "Docker Deployment", "Hostinger & Vercel Setup", "SSL & Domain Setup"],
    color: "#34d399",
  },
  {
    icon: <ShieldCheck className="w-7 h-7" />,
    title: "Healthcare IT",
    description: "Medical-grade software for patient monitoring, clinical workflows, and healthcare data management with HIPAA-compliant standards.",
    features: ["Patient Monitoring", "Clinical Dashboards", "Medical Imaging Apps", "HIPAA Compliance", "Telemedicine Solutions"],
    color: "#38bdf8",
  },
  {
    icon: <Zap className="w-7 h-7" />,
    title: "Branding & Marketing",
    description: "Complete brand identity — logos, brochures, social media kits, marketing materials, and visual storytelling.",
    features: ["Logo Design", "Social Media Kits", "Brochure Design", "Video Editing", "Marketing Materials"],
    color: "#fbbf24",
  },
];

const Services: React.FC = () => {
  const sectionRef = useRef<HTMLElement>(null);
  const headerRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const initGSAP = async () => {
      try {
        const { gsap } = await import("gsap");
        const { ScrollTrigger } = await import("gsap/ScrollTrigger");
        gsap.registerPlugin(ScrollTrigger);

        if (headerRef.current) {
          gsap.fromTo(headerRef.current, { opacity: 0, y: 60 }, {
            opacity: 1, y: 0, duration: 1, ease: "power3.out",
            scrollTrigger: { trigger: headerRef.current, start: "top 90%", once: true },
          });
        }
      } catch (e) {
        if (headerRef.current) headerRef.current.style.opacity = "1";
      }
    };
    initGSAP();
  }, []);

  return (
    <section id="services" ref={sectionRef} className="py-24 px-6 relative overflow-hidden">
      <div className="absolute inset-0 pointer-events-none">
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[800px] h-[800px] rounded-full" style={{ background: "radial-gradient(circle, rgba(129,140,248,0.04) 0%, transparent 60%)" }} />
      </div>

      <div className="max-w-6xl mx-auto relative z-10">
        {/* Header */}
        <div ref={headerRef} className="text-center mb-16">
          <h2 className="text-5xl md:text-7xl font-black mb-6 text-white tracking-tighter uppercase">
            My <span className="gradient-text">Services</span>
          </h2>
          <p className="text-slate-400 max-w-2xl mx-auto text-xl font-light leading-relaxed">
            End-to-end digital solutions crafted with precision, creativity, and engineering excellence.
          </p>
          <div className="h-1.5 w-24 bg-gradient-to-r from-indigo-500 to-purple-600 rounded-full mx-auto mt-8" />
        </div>

        {/* Services Grid */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-5"
        >
          {SERVICES.map((service, index) => (
            <motion.div
              key={service.title}
              initial={{ opacity: 0, y: 40 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: index * 0.06 }}
              className="service-card glass-morphism rounded-3xl p-7 border border-white/5 hover:border-opacity-50 transition-all duration-500 cursor-default group"
              style={{ ["--card-color" as string]: service.color }}
              onMouseEnter={(e) => {
                (e.currentTarget as HTMLElement).style.borderColor = service.color + "40";
                (e.currentTarget as HTMLElement).style.boxShadow = `0 25px 50px -15px ${service.color}20`;
              }}
              onMouseLeave={(e) => {
                (e.currentTarget as HTMLElement).style.borderColor = "rgba(255,255,255,0.05)";
                (e.currentTarget as HTMLElement).style.boxShadow = "none";
              }}
            >
              {/* Icon */}
              <div className="w-14 h-14 rounded-2xl flex items-center justify-center mb-5 border border-white/5 transition-colors duration-300"
                style={{ background: service.color + "15", color: service.color }}>
                {service.icon}
              </div>

              <h3 className="text-lg font-black text-white mb-2 tracking-tight group-hover:text-indigo-300 transition-colors">{service.title}</h3>
              <p className="text-slate-400 text-xs leading-relaxed mb-5 font-light">{service.description}</p>

              {/* Feature List */}
              <ul className="space-y-2">
                {service.features.map((f) => (
                  <li key={f} className="flex items-start gap-2 text-[11px] text-slate-500">
                    <Check className="w-3 h-3 mt-0.5 flex-shrink-0" style={{ color: service.color }} />
                    {f}
                  </li>
                ))}
              </ul>
            </motion.div>
          ))}
        </motion.div>

        {/* Bottom CTA */}
        <div className="text-center mt-16">
          <p className="text-slate-500 mb-4 text-sm">
            Need a custom solution? Let&apos;s discuss your requirements.
          </p>
          <a
            href="#contact"
            onClick={(e) => { e.preventDefault(); document.getElementById("contact")?.scrollIntoView({ behavior: "smooth" }); }}
            className="magnetic inline-flex items-center gap-3 px-10 py-4 bg-gradient-to-r from-indigo-600 to-purple-600 text-white font-black rounded-2xl hover:scale-105 active:scale-95 transition-all shadow-lg shadow-indigo-500/20"
          >
            Start a Project
            <ArrowRight className="w-4 h-4 inline-block align-middle" />
          </a>
        </div>
      </div>
    </section>
  );
};

export default Services;
