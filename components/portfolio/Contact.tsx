"use client";

import React, { useState, useRef, useEffect } from "react";
import { motion } from "framer-motion";
import { SOCIAL_LINKS } from "@/lib/constants";
import { Mail, Phone, Linkedin, Github, Send, CheckCircle, AlertCircle } from "lucide-react";

const Contact: React.FC = () => {
  const [formState, setFormState] = useState({ name: "", email: "", subject: "", message: "" });
  const [status, setStatus] = useState<"idle" | "submitting" | "success" | "error">("idle");
  const [errorMsg, setErrorMsg] = useState("");
  const sectionRef = useRef<HTMLElement>(null);
  const headerRef = useRef<HTMLDivElement>(null);
  const cardRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const initGSAP = async () => {
      try {
        const { gsap } = await import("gsap");
        const { ScrollTrigger } = await import("gsap/ScrollTrigger");
        gsap.registerPlugin(ScrollTrigger);

        if (headerRef.current) {
          gsap.fromTo(
            headerRef.current,
            { opacity: 0, y: 50 },
            { opacity: 1, y: 0, duration: 0.9, ease: "power3.out",
              scrollTrigger: { trigger: headerRef.current, start: "top 85%", once: true } }
          );
        }
        if (cardRef.current) {
          gsap.fromTo(
            cardRef.current,
            { opacity: 0, y: 60 },
            { opacity: 1, y: 0, duration: 1, ease: "power3.out",
              scrollTrigger: { trigger: cardRef.current, start: "top 85%", once: true } }
          );
        }
      } catch (e) {
        if (headerRef.current) headerRef.current.style.opacity = "1";
        if (cardRef.current) cardRef.current.style.opacity = "1";
      }
    };
    initGSAP();
  }, []);

  const handleWhatsAppRedirect = () => {
    const text = encodeURIComponent(
      `Hello Amna!\n\nI just sent a message from your portfolio.\n\nFrom: ${formState.name}\nEmail: ${formState.email}\n\nSubject: ${formState.subject}\n\nMessage:\n${formState.message}`
    );
    const whatsappUrl = `https://wa.me/${SOCIAL_LINKS.phone.replace(/[^0-9]/g, "")}?text=${text}`;
    window.open(whatsappUrl, "_blank");
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setStatus("submitting");
    setErrorMsg("");

    if (!formState.name.trim() || !formState.email.trim() || !formState.message.trim()) {
      setStatus("error");
      setErrorMsg("Please fill in all required fields.");
      return;
    }

    try {
      // Web3Forms — free, permanent, no server config needed
      // The access_key is public and tied to your email (amnapersonal4@gmail.com)
      const response = await fetch("https://api.web3forms.com/submit", {
        method: "POST",
        headers: { "Content-Type": "application/json", Accept: "application/json" },
        body: JSON.stringify({
          access_key: process.env.NEXT_PUBLIC_WEB3FORMS_ACCESS_KEY!,
          name: formState.name,
          email: formState.email,
          subject: formState.subject || `New Message from ${formState.name} (Portfolio)`,
          message: formState.message,
          from_name: "Portfolio Contact Form",
        }),
      });

      const data = await response.json();

      if (data.success) {
        setStatus("success");
        setFormState({ name: "", email: "", subject: "", message: "" });
      } else {
        throw new Error(data.message || "Delivery failed.");
      }
    } catch (error: unknown) {
      console.error("Contact Form Error:", error);
      // Fallback: open mailto
      const mailtoUrl = `mailto:${SOCIAL_LINKS.email}?subject=${encodeURIComponent(formState.subject || `Portfolio Contact from ${formState.name}`)}&body=${encodeURIComponent(`From: ${formState.name}\nEmail: ${formState.email}\n\n${formState.message}`)}`;
      window.open(mailtoUrl, "_blank");
      setStatus("success");
    }
  };

  return (
    <section id="contact" ref={sectionRef} className="py-24 px-6 relative">
      <div className="max-w-6xl mx-auto relative z-10">
        {/* Header */}
        <div ref={headerRef} className="text-center mb-20" style={{ opacity: 0 }}>
          <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full border border-indigo-500/20 bg-indigo-500/5 mb-6">
            <span className="text-xs text-indigo-400 font-bold tracking-widest uppercase">Get In Touch</span>
          </div>
          <h2 className="text-5xl md:text-7xl font-black mb-6 text-white tracking-tighter uppercase">
            Let&apos;s <span className="gradient-text">Connect</span>
          </h2>
          <p className="text-slate-400 max-w-2xl mx-auto text-xl font-light leading-relaxed">
            Have a project in mind? Let&apos;s discuss it. My inbox is always open.
          </p>
          <div className="h-1.5 w-24 bg-gradient-to-r from-indigo-500 to-purple-600 rounded-full mx-auto mt-8" />
        </div>

        {/* Two-Sided Card */}
        <div
          ref={cardRef}
          className="rounded-[2.5rem] overflow-hidden border border-white/10 shadow-[0_25px_60px_rgba(0,0,0,0.5)] grid grid-cols-1 md:grid-cols-5"
          style={{ opacity: 0 }}
        >
          {/* Left — Contact Info */}
          <div className="md:col-span-2 bg-gradient-to-br from-indigo-600 via-purple-600 to-indigo-800 p-10 md:p-12 flex flex-col justify-between relative overflow-hidden">
            <div className="absolute -top-16 -right-16 w-48 h-48 rounded-full bg-white/[0.07]" />
            <div className="absolute -bottom-20 -left-20 w-56 h-56 rounded-full bg-white/[0.05]" />
            <div className="absolute top-1/2 right-0 w-32 h-32 rounded-full bg-white/[0.04] translate-x-1/2 -translate-y-1/2" />

            <div className="relative z-10">
              <h3 className="text-3xl md:text-4xl font-black text-white mb-4 tracking-tight">Contact Info</h3>
              <p className="text-white/70 text-sm leading-relaxed mb-10">
                Feel free to reach out through any of these channels. I&apos;d love to hear from you!
              </p>

              <div className="space-y-7">
                <a href={`mailto:${SOCIAL_LINKS.email}`} className="flex items-start gap-4 group">
                  <div className="w-11 h-11 rounded-xl bg-white/10 flex items-center justify-center flex-shrink-0 group-hover:bg-white/20 transition-colors">
                    <Mail className="w-5 h-5 text-white" />
                  </div>
                  <div>
                    <p className="text-[10px] font-bold text-white/50 uppercase tracking-widest mb-1">Email</p>
                    <p className="text-white font-semibold text-sm group-hover:text-white/80 transition-colors break-all">
                      {SOCIAL_LINKS.email}
                    </p>
                  </div>
                </a>

                <a href={`tel:${SOCIAL_LINKS.phone}`} className="flex items-start gap-4 group">
                  <div className="w-11 h-11 rounded-xl bg-white/10 flex items-center justify-center flex-shrink-0 group-hover:bg-white/20 transition-colors">
                    <Phone className="w-5 h-5 text-white" />
                  </div>
                  <div>
                    <p className="text-[10px] font-bold text-white/50 uppercase tracking-widest mb-1">Phone / WhatsApp</p>
                    <p className="text-white font-semibold text-sm group-hover:text-white/80 transition-colors">
                      {SOCIAL_LINKS.phone}
                    </p>
                  </div>
                </a>
              </div>
            </div>

            <div className="relative z-10 mt-12">
              <p className="text-[10px] font-bold text-white/40 uppercase tracking-widest mb-4">Follow Me</p>
              <div className="flex items-center gap-3">
                <a href={SOCIAL_LINKS.linkedin} target="_blank" rel="noopener noreferrer"
                  className="w-10 h-10 rounded-full bg-white/10 flex items-center justify-center hover:bg-white/25 transition-colors">
                  <Linkedin className="w-4 h-4 text-white" />
                </a>
                <a href={SOCIAL_LINKS.github} target="_blank" rel="noopener noreferrer"
                  className="w-10 h-10 rounded-full bg-white/10 flex items-center justify-center hover:bg-white/25 transition-colors">
                  <Github className="w-4 h-4 text-white" />
                </a>
                <a href={`https://wa.me/${SOCIAL_LINKS.phone.replace(/[^0-9]/g, "")}`} target="_blank" rel="noopener noreferrer"
                  className="w-10 h-10 rounded-full bg-white/10 flex items-center justify-center hover:bg-green-500/40 transition-colors">
                  <svg className="w-4 h-4 text-white" fill="currentColor" viewBox="0 0 24 24">
                    <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L0 24l6.335-1.662c1.72.94 3.659 1.437 5.634 1.437h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 00-3.48-8.413Z" />
                  </svg>
                </a>
              </div>
            </div>
          </div>

          {/* Right — Form */}
          <div className="md:col-span-3 bg-white/[0.02] backdrop-blur-sm p-10 md:p-12 flex flex-col justify-center">
            {status === "success" ? (
              <motion.div
                initial={{ opacity: 0, scale: 0.9 }}
                animate={{ opacity: 1, scale: 1 }}
                transition={{ duration: 0.5 }}
                className="py-6 flex flex-col items-center text-center"
              >
                <div className="w-20 h-20 bg-green-500/10 text-green-500 rounded-full flex items-center justify-center mb-6 border border-green-500/20">
                  <CheckCircle className="w-10 h-10" />
                </div>
                <h3 className="text-2xl font-bold mb-3 text-white">Message Delivered!</h3>
                <p className="text-slate-400 text-sm mb-10 max-w-xs mx-auto leading-relaxed">
                  Your message has been sent to{" "}
                  <span className="text-white font-bold">{SOCIAL_LINKS.email}</span>. I&apos;ll get back to you soon!
                </p>

                <div className="w-full space-y-4">
                  <button
                    onClick={handleWhatsAppRedirect}
                    className="w-full py-4 bg-green-600 hover:bg-green-700 text-white font-black rounded-2xl transition-all shadow-xl flex items-center justify-center gap-3 group"
                  >
                    <span className="uppercase tracking-widest text-xs">Also Send via WhatsApp</span>
                    <svg className="w-5 h-5 group-hover:translate-x-1 transition-transform" fill="currentColor" viewBox="0 0 24 24">
                      <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L0 24l6.335-1.662c1.72.94 3.659 1.437 5.634 1.437h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 00-3.48-8.413Z" />
                    </svg>
                  </button>
                  <button
                    onClick={() => setStatus("idle")}
                    className="text-slate-500 text-[10px] uppercase font-bold tracking-widest hover:text-white transition-all w-full"
                  >
                    Send another message
                  </button>
                </div>
              </motion.div>
            ) : (
              <form onSubmit={handleSubmit} className="space-y-5" noValidate>
                <div>
                  <h3 className="text-2xl md:text-3xl font-black text-white mb-1 tracking-tight">
                    Send a Message
                  </h3>
                  <p className="text-slate-500 text-sm">Fill in the form below and I&apos;ll respond within 24 hours.</p>
                </div>

                {/* Name + Email row */}
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                  <div className="space-y-1.5">
                    <label className="text-[10px] font-black text-slate-500 uppercase tracking-widest">
                      Your Name *
                    </label>
                    <input
                      required
                      type="text"
                      value={formState.name}
                      onChange={(e) => setFormState({ ...formState, name: e.target.value })}
                      className="w-full bg-white/5 border border-white/10 rounded-xl py-3.5 px-5 text-white focus:outline-none focus:border-indigo-500/60 focus:bg-indigo-500/5 transition-all font-medium text-sm placeholder:text-slate-600"
                      placeholder="Jane Doe"
                    />
                  </div>
                  <div className="space-y-1.5">
                    <label className="text-[10px] font-black text-slate-500 uppercase tracking-widest">
                      Email Address *
                    </label>
                    <input
                      required
                      type="email"
                      value={formState.email}
                      onChange={(e) => setFormState({ ...formState, email: e.target.value })}
                      className="w-full bg-white/5 border border-white/10 rounded-xl py-3.5 px-5 text-white focus:outline-none focus:border-indigo-500/60 focus:bg-indigo-500/5 transition-all font-medium text-sm placeholder:text-slate-600"
                      placeholder="jane@example.com"
                    />
                  </div>
                </div>

                {/* Subject */}
                <div className="space-y-1.5">
                  <label className="text-[10px] font-black text-slate-500 uppercase tracking-widest">
                    Subject
                  </label>
                  <input
                    type="text"
                    value={formState.subject}
                    onChange={(e) => setFormState({ ...formState, subject: e.target.value })}
                    className="w-full bg-white/5 border border-white/10 rounded-xl py-3.5 px-5 text-white focus:outline-none focus:border-indigo-500/60 focus:bg-indigo-500/5 transition-all font-medium text-sm placeholder:text-slate-600"
                    placeholder="Project Inquiry / Collaboration..."
                  />
                </div>

                {/* Message */}
                <div className="space-y-1.5">
                  <label className="text-[10px] font-black text-slate-500 uppercase tracking-widest">
                    Message *
                  </label>
                  <textarea
                    required
                    rows={5}
                    value={formState.message}
                    onChange={(e) => setFormState({ ...formState, message: e.target.value })}
                    className="w-full bg-white/5 border border-white/10 rounded-xl py-3.5 px-5 text-white focus:outline-none focus:border-indigo-500/60 focus:bg-indigo-500/5 transition-all resize-none font-medium text-sm placeholder:text-slate-600"
                    placeholder="Tell me about your project or just say hello..."
                  />
                </div>

                {/* Error */}
                {status === "error" && (
                  <motion.div
                    initial={{ opacity: 0, y: -10 }}
                    animate={{ opacity: 1, y: 0 }}
                    className="flex items-center gap-2 text-red-400 text-xs font-bold bg-red-500/10 border border-red-500/20 rounded-xl px-4 py-3"
                  >
                    <AlertCircle className="w-4 h-4 flex-shrink-0" />
                    {errorMsg || "Failed to send. Please try again or use the email link."}
                  </motion.div>
                )}

                <button
                  type="submit"
                  disabled={status === "submitting"}
                  className="w-full py-4 bg-gradient-to-r from-indigo-600 to-purple-600 hover:from-indigo-700 hover:to-purple-700 text-white font-black rounded-2xl transition-all shadow-xl shadow-indigo-500/20 disabled:opacity-60 flex items-center justify-center gap-3 uppercase tracking-widest text-sm hover:scale-[1.02] active:scale-[0.98]"
                >
                  {status === "submitting" ? (
                    <>
                      <span className="w-5 h-5 border-2 border-white/30 border-t-white rounded-full animate-spin" />
                      Sending...
                    </>
                  ) : (
                    <>
                      Send Message
                      <Send className="w-4 h-4" />
                    </>
                  )}
                </button>

                <p className="text-center text-[10px] text-slate-600 mt-2">
                  Or reach me directly at{" "}
                  <a href={`mailto:${SOCIAL_LINKS.email}`} className="text-indigo-400 hover:underline">
                    {SOCIAL_LINKS.email}
                  </a>
                </p>
              </form>
            )}
          </div>
        </div>
      </div>
    </section>
  );
};

export default Contact;
