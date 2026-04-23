"use client";

import React, { useState } from 'react';
import { motion } from 'framer-motion';
import { SOCIAL_LINKS } from '@/lib/constants';
import { Mail, Phone, Linkedin, Github } from 'lucide-react';

const Contact: React.FC = () => {
  const [formState, setFormState] = useState({ name: '', email: '', message: '' });
  const [status, setStatus] = useState<'idle' | 'submitting' | 'success' | 'error'>('idle');

  const handleWhatsAppRedirect = () => {
    const text = encodeURIComponent(`Hello Amna!\n\nI just sent a message from your portfolio.\n\nFrom: ${formState.name}\nEmail: ${formState.email}\n\nMessage:\n${formState.message}`);
    const whatsappUrl = `https://wa.me/${SOCIAL_LINKS.phone.replace(/[^0-9]/g, '')}?text=${text}`;
    window.open(whatsappUrl, '_blank');
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setStatus('submitting');

    try {
      const response = await fetch('https://api.web3forms.com/submit', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
          'Accept': 'application/json',
        },
        body: JSON.stringify({
          access_key: process.env.NEXT_PUBLIC_WEB3FORMS_ACCESS_KEY,
          name: formState.name,
          email: formState.email,
          message: formState.message,
          subject: `New Message from ${formState.name} (Portfolio)`,
        }),
      });

      const data = await response.json();

      if (data.success) {
        setStatus('success');
      } else {
        throw new Error(data.message || "Delivery failed.");
      }
    } catch (error) {
      console.error("Contact Form Submission Error:", error);
      setStatus('error');
    }
  };

  return (
    <section id="contact" className="py-24 px-6 relative">
      <div className="max-w-6xl mx-auto relative z-10">
        {/* Section Header */}
        <motion.div
          initial={{ opacity: 0, y: 15 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "0px 0px -50px 0px" }}
          transition={{ duration: 0.5 }}
          className="text-center mb-20"
        >
          <h2 className="text-5xl md:text-7xl font-black mb-6 text-white tracking-tighter uppercase">
            Get In <span className="gradient-text">Touch</span>
          </h2>
          <p className="text-slate-400 max-w-2xl mx-auto text-xl font-light leading-relaxed">
            Let&apos;s discuss your next project or just say hello. My inbox is always open.
          </p>
          <div className="h-1.5 w-24 bg-gradient-to-r from-indigo-500 to-purple-600 rounded-full mx-auto mt-8"></div>
        </motion.div>

        {/* Two-Sided Card */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "0px 0px -100px 0px" }}
          transition={{ duration: 0.7 }}
          className="rounded-[2.5rem] overflow-hidden border border-white/10 shadow-[0_25px_60px_rgba(0,0,0,0.4)] grid grid-cols-1 md:grid-cols-5"
        >
          {/* Left Card — Contact Info */}
          <div className="md:col-span-2 bg-gradient-to-br from-indigo-600 via-purple-600 to-indigo-800 p-10 md:p-12 flex flex-col justify-between relative overflow-hidden">
            {/* Decorative Circles */}
            <div className="absolute -top-16 -right-16 w-48 h-48 rounded-full bg-white/[0.07]" />
            <div className="absolute -bottom-20 -left-20 w-56 h-56 rounded-full bg-white/[0.05]" />
            <div className="absolute top-1/2 right-0 w-32 h-32 rounded-full bg-white/[0.04] translate-x-1/2 -translate-y-1/2" />

            <div className="relative z-10">
              <h3 className="text-3xl md:text-4xl font-black text-white mb-4 tracking-tight">
                Contact
              </h3>
              <p className="text-white/70 text-sm leading-relaxed mb-12">
                Feel free to reach out through any of these channels. I&apos;d love to hear from you!
              </p>

              <div className="space-y-8">
                {/* Email */}
                <a
                  href={`mailto:${SOCIAL_LINKS.email}`}
                  className="flex items-start gap-4 group"
                >
                  <div className="w-11 h-11 rounded-xl bg-white/10 flex items-center justify-center flex-shrink-0 group-hover:bg-white/20 transition-colors">
                    <Mail className="w-5 h-5 text-white" />
                  </div>
                  <div>
                    <p className="text-[10px] font-bold text-white/50 uppercase tracking-widest mb-1">Email</p>
                    <p className="text-white font-semibold text-sm group-hover:text-white/80 transition-colors">
                      {SOCIAL_LINKS.email}
                    </p>
                  </div>
                </a>

                {/* Phone */}
                <a
                  href={`tel:${SOCIAL_LINKS.phone}`}
                  className="flex items-start gap-4 group"
                >
                  <div className="w-11 h-11 rounded-xl bg-white/10 flex items-center justify-center flex-shrink-0 group-hover:bg-white/20 transition-colors">
                    <Phone className="w-5 h-5 text-white" />
                  </div>
                  <div>
                    <p className="text-[10px] font-bold text-white/50 uppercase tracking-widest mb-1">Phone</p>
                    <p className="text-white font-semibold text-sm group-hover:text-white/80 transition-colors">
                      {SOCIAL_LINKS.phone}
                    </p>
                  </div>
                </a>
              </div>
            </div>

            {/* Social Links at bottom */}
            <div className="relative z-10 mt-12 flex items-center gap-3">
              <a
                href={SOCIAL_LINKS.linkedin}
                target="_blank"
                rel="noopener noreferrer"
                className="w-10 h-10 rounded-full bg-white/10 flex items-center justify-center hover:bg-white/25 transition-colors"
              >
                <Linkedin className="w-4 h-4 text-white" />
              </a>
              <a
                href={SOCIAL_LINKS.github}
                target="_blank"
                rel="noopener noreferrer"
                className="w-10 h-10 rounded-full bg-white/10 flex items-center justify-center hover:bg-white/25 transition-colors"
              >
                <Github className="w-4 h-4 text-white" />
              </a>
            </div>
          </div>

          {/* Right Card — Form */}
          <div className="md:col-span-3 bg-white/[0.03] backdrop-blur-sm p-10 md:p-12 flex flex-col justify-center">
            {status === 'success' ? (
              <div className="py-6 flex flex-col items-center text-center">
                <div className="w-20 h-20 bg-green-500/10 text-green-500 rounded-full flex items-center justify-center mb-6 border border-green-500/20">
                  <svg className="w-10 h-10" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="3" d="M5 13l4 4L19 7" /></svg>
                </div>
                <h3 className="text-2xl font-bold mb-3 text-white">Message Sent!</h3>
                <p className="text-slate-400 text-sm mb-10 max-w-xs mx-auto">
                  Your message has been delivered to <span className="text-white font-bold">amnapersonal4@gmail.com</span> automatically.
                </p>

                <div className="w-full space-y-4">
                  <button
                    onClick={handleWhatsAppRedirect}
                    className="w-full py-4 bg-green-600 hover:bg-green-700 text-white font-black rounded-2xl transition-all shadow-xl flex items-center justify-center gap-3 group"
                  >
                    <span className="uppercase tracking-widest text-xs">Also Send to WhatsApp</span>
                    <svg className="w-5 h-5 group-hover:translate-x-1 transition-transform" fill="currentColor" viewBox="0 0 24 24"><path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L0 24l6.335-1.662c1.72.94 3.659 1.437 5.634 1.437h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 00-3.48-8.413Z" /></svg>
                  </button>
                  <button
                    onClick={() => setStatus('idle')}
                    className="text-slate-500 text-[10px] uppercase font-bold tracking-widest hover:text-white transition-all w-full"
                  >
                    Send another message
                  </button>
                </div>
              </div>
            ) : (
              <form onSubmit={handleSubmit} className="space-y-6">
                <div>
                  <h3 className="text-2xl md:text-3xl font-black text-white mb-1 tracking-tight">Get in Touch</h3>
                  <p className="text-slate-500 text-sm">Feel free to drop me a line below!</p>
                </div>

                <div className="space-y-4">
                  <div className="space-y-2">
                    <label className="text-[10px] font-black text-slate-500 uppercase tracking-widest ml-1">Your Name</label>
                    <input
                      required
                      type="text"
                      value={formState.name}
                      onChange={(e) => setFormState({ ...formState, name: e.target.value })}
                      className="w-full bg-white/5 border border-white/10 rounded-xl py-4 px-6 text-white focus:outline-none focus:border-indigo-500/50 transition-all font-medium"
                      placeholder="Jane Doe"
                    />
                  </div>
                  <div className="space-y-2">
                    <label className="text-[10px] font-black text-slate-500 uppercase tracking-widest ml-1">Your Email Address</label>
                    <input
                      required
                      type="email"
                      value={formState.email}
                      onChange={(e) => setFormState({ ...formState, email: e.target.value })}
                      className="w-full bg-white/5 border border-white/10 rounded-xl py-4 px-6 text-white focus:outline-none focus:border-indigo-500/50 transition-all font-medium"
                      placeholder="jane@example.com"
                    />
                  </div>
                  <div className="space-y-2">
                    <label className="text-[10px] font-black text-slate-500 uppercase tracking-widest ml-1">Message</label>
                    <textarea
                      required
                      rows={4}
                      value={formState.message}
                      onChange={(e) => setFormState({ ...formState, message: e.target.value })}
                      className="w-full bg-white/5 border border-white/10 rounded-xl py-4 px-6 text-white focus:outline-none focus:border-indigo-500/50 transition-all resize-none font-medium"
                      placeholder="How can I help you?"
                    ></textarea>
                  </div>
                </div>

                <button
                  disabled={status === 'submitting'}
                  className="w-full py-5 bg-indigo-600 hover:bg-indigo-700 text-white font-black rounded-2xl transition-all shadow-xl disabled:opacity-50 flex items-center justify-center gap-2 uppercase tracking-widest text-sm"
                >
                  {status === 'submitting' ? (
                    <span className="w-5 h-5 border-2 border-white/30 border-t-white rounded-full animate-spin" />
                  ) : (
                    "Send"
                  )}
                </button>

                {status === 'error' && (
                  <p className="text-red-400 text-[10px] text-center uppercase font-bold">Failed to send. Please check connection.</p>
                )}
              </form>
            )}
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default Contact;
