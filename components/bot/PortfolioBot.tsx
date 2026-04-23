"use client";

import React, { useState, useRef, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Message } from '@/lib/types';
import { Bot, Send, X, MessageSquare, Sparkles } from 'lucide-react';

const PortfolioBot = () => {
    const [isOpen, setIsOpen] = useState(false);
    const [messages, setMessages] = useState<Message[]>([
        { role: 'assistant', content: "Hi! I'm Amna's AI Assistant. How can I help you explore her work today?" }
    ]);
    const [input, setInput] = useState('');
    const [isLoading, setIsLoading] = useState(false);
    const scrollRef = useRef<HTMLDivElement>(null);

    useEffect(() => {
        if (scrollRef.current) {
            scrollRef.current.scrollTop = scrollRef.current.scrollHeight;
        }
    }, [messages]);

    const handleSend = async (e: React.FormEvent) => {
        e.preventDefault();
        if (!input.trim() || isLoading) return;

        const userMsg: Message = { role: 'user', content: input };
        setMessages(prev => [...prev, userMsg]);
        setInput('');
        setIsLoading(true);

        try {
            const response = await fetch('/api/bot', {
                method: 'POST',
                headers: { 'Content-Type': 'application/json' },
                body: JSON.stringify({ messages: [...messages, userMsg] }),
            });

            const data = await response.json();
            if (data.response) {
                setMessages(prev => [...prev, { role: 'assistant', content: data.response }]);
            } else {
                setMessages(prev => [...prev, { role: 'assistant', content: "I'm having a bit of trouble thinking right now. Please try again in a moment!" }]);
            }
        } catch (error) {
            console.error("Chat Error:", error);
            setMessages(prev => [...prev, { role: 'assistant', content: "Something went wrong on my end. Please check back later!" }]);
        } finally {
            setIsLoading(false);
        }
    };

    return (
        <div className="fixed bottom-8 right-8 z-50 flex flex-col items-end">
            <AnimatePresence>
                {isOpen && (
                    <motion.div
                        initial={{ opacity: 0, y: 40, scale: 0.9, filter: "blur(10px)" }}
                        animate={{ opacity: 1, y: 0, scale: 1, filter: "blur(0px)" }}
                        exit={{ opacity: 0, y: 40, scale: 0.9, filter: "blur(10px)" }}
                        className="w-85 sm:w-[400px] relative group"
                    >
                        {/* Rotating Border Glow */}
                        <div className="absolute -inset-[1.5px] rounded-3xl overflow-hidden opacity-50 group-hover:opacity-100 transition-opacity duration-500">
                            <div className="absolute inset-[-1000%] animate-[spin_5s_linear_infinite] bg-[conic-gradient(from_0deg,transparent_60%,#6366f1_80%,#a855f7_95%,transparent_100%)]" />
                        </div>

                        <div className="relative bg-[#0a0a0c]/90 backdrop-blur-3xl border border-white/10 rounded-3xl shadow-[0_0_50px_rgba(0,0,0,0.5)] overflow-hidden flex flex-col h-[550px]">
                            {/* Premium Header */}
                            <div className="p-5 bg-gradient-to-r from-indigo-600/20 via-purple-600/20 to-indigo-600/20 border-b border-white/5 flex justify-between items-center relative overflow-hidden">
                                <div className="absolute top-0 left-0 w-full h-[1px] bg-gradient-to-r from-transparent via-indigo-500 to-transparent opacity-50"></div>

                                <div className="flex items-center gap-4 relative z-10">
                                    <div className="relative">
                                        <div className="w-10 h-10 rounded-2xl bg-gradient-to-br from-indigo-500 to-purple-600 flex items-center justify-center text-white shadow-lg shadow-indigo-500/20">
                                            <Bot size={22} />
                                        </div>
                                        <div className="absolute -bottom-0.5 -right-0.5 w-3 h-3 bg-emerald-500 rounded-full border-2 border-[#0a0a0c] animate-pulse"></div>
                                    </div>
                                    <div>
                                        <h3 className="text-white font-bold text-base tracking-tight flex items-center gap-2">
                                            Amna Bot <Sparkles size={12} className="text-indigo-400" />
                                        </h3>
                                        <div className="flex items-center gap-1.5">
                                            <span className="text-indigo-300/80 text-[10px] font-bold uppercase tracking-widest">Active Now</span>
                                        </div>
                                    </div>
                                </div>

                                <button
                                    onClick={() => setIsOpen(false)}
                                    className="p-2 rounded-xl hover:bg-white/5 text-white/40 hover:text-white/90 transition-all duration-300 border border-white/0 hover:border-white/10"
                                >
                                    <X size={18} />
                                </button>
                            </div>

                            {/* Chat Messages */}
                            <div ref={scrollRef} className="flex-1 overflow-y-auto p-6 space-y-6 scrollbar-hide">
                                {messages.map((msg, idx) => (
                                    <div key={idx} className={`flex ${msg.role === 'user' ? 'justify-end' : 'justify-start'} `}>
                                        <motion.div
                                            initial={{ opacity: 0, y: 10, scale: 0.95 }}
                                            animate={{ opacity: 1, y: 0, scale: 1 }}
                                            className={`max - w - [85 %] p - 4 rounded - 2xl text - sm leading - relaxed ${msg.role === 'user'
                                                    ? 'bg-gradient-to-br from-indigo-600 to-purple-700 text-white rounded-tr-none shadow-lg shadow-indigo-500/10 font-medium'
                                                    : 'glass-morphism text-slate-200 border border-white/5 rounded-tl-none font-light'
                                                } `}
                                        >
                                            {msg.content}
                                        </motion.div>
                                    </div>
                                ))}
                                {isLoading && (
                                    <div className="flex justify-start">
                                        <div className="glass-morphism px-4 py-3 rounded-2xl rounded-tl-none flex gap-1.5 items-center">
                                            <div className="w-1 h-1 bg-indigo-400 rounded-full animate-bounce"></div>
                                            <div className="w-1 h-1 bg-indigo-400 rounded-full animate-bounce [animation-delay:-0.15s]"></div>
                                            <div className="w-1 h-1 bg-indigo-400 rounded-full animate-bounce [animation-delay:-0.3s]"></div>
                                        </div>
                                    </div>
                                )}
                            </div>

                            {/* Futuristic Input Area */}
                            <div className="p-6 bg-white/[0.02] border-t border-white/5 relative">
                                <form onSubmit={handleSend} className="relative group/input">
                                    <input
                                        type="text"
                                        value={input}
                                        onChange={(e) => setInput(e.target.value)}
                                        placeholder="Ask me anything..."
                                        className="w-full bg-white/5 border border-white/10 rounded-2xl pl-5 pr-14 py-4 text-sm text-white placeholder:text-slate-500 focus:outline-none focus:border-indigo-500/50 focus:bg-white/[0.08] transition-all duration-300"
                                    />
                                    <button
                                        type="submit"
                                        disabled={isLoading}
                                        className="absolute right-2 top-2 bottom-2 aspect-square bg-indigo-600 hover:bg-indigo-500 text-white rounded-xl shadow-lg shadow-indigo-500/20 transition-all duration-300 flex items-center justify-center disabled:opacity-50 disabled:grayscale group/btn"
                                    >
                                        <Send size={18} className="group-hover/btn:translate-x-0.5 group-hover/btn:-translate-y-0.5 transition-transform" />
                                    </button>
                                </form>
                                <p className="text-[9px] text-center text-slate-600 mt-4 uppercase tracking-[0.2em] font-bold">
                                    Amna Khalid&apos;s AI Assistant
                                </p>
                            </div>
                        </div>
                    </motion.div>
                )}
            </AnimatePresence>

            {/* Premium Floating Button */}
            <AnimatePresence>
                {!isOpen && (
                    <motion.button
                        initial={{ opacity: 0, scale: 0.8 }}
                        animate={{ opacity: 1, scale: 1 }}
                        exit={{ opacity: 0, scale: 0.8 }}
                        whileHover={{ scale: 1.05, boxShadow: "0 0 30px rgba(99, 102, 241, 0.4)" }}
                        whileTap={{ scale: 0.95 }}
                        onClick={() => setIsOpen(true)}
                        className="w-16 h-16 bg-gradient-to-br from-indigo-600 to-purple-600 rounded-2xl shadow-2xl flex items-center justify-center text-white relative group"
                    >
                        {/* Floating button glow */}
                        <div className="absolute inset-0 bg-indigo-500/20 blur-xl group-hover:bg-indigo-500/40 transition-colors animate-pulse rounded-full"></div>

                        <div className="relative z-10">
                            <MessageSquare size={28} />
                        </div>

                        <motion.div
                            initial={{ scale: 0 }}
                            animate={{ scale: 1 }}
                            className="absolute -top-1 -right-1 w-5 h-5 bg-indigo-500 rounded-full border-[3px] border-[#0a0a0c] z-20"
                        />
                    </motion.button>
                )}
            </AnimatePresence>
        </div>
    );
};

export default PortfolioBot;
