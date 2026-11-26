"use client";

import React, { useState, useEffect } from "react";
import Link from "next/link";

const Navigation: React.FC = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [activeSection, setActiveSection] = useState("home");
  const [scrolled, setScrolled] = useState(false);

  const navLinks = [
    { name: "Home", href: "#home" },
    { name: "About", href: "#about" },
    { name: "Services", href: "#services" },
    { name: "Projects", href: "#projects" },
    { name: "Skills", href: "#skills" },
    { name: "Contact", href: "#contact" },
  ];

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 20);
      const sections = ["home", "about", "experience", "projects", "services", "skills", "contact"];
      const scrollPosition = window.scrollY + 120;

      for (const sectionId of sections) {
        const element = document.getElementById(sectionId);
        if (element) {
          const { offsetTop, offsetHeight } = element;
          if (scrollPosition >= offsetTop && scrollPosition < offsetTop + offsetHeight) {
            setActiveSection(sectionId);
          }
        }
      }
    };

    window.addEventListener("scroll", handleScroll, { passive: true });
    handleScroll();
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const closeMenu = () => setIsMenuOpen(false);

  const handleLinkClick = (e: React.MouseEvent<HTMLAnchorElement>, href: string) => {
    if (href.startsWith("#")) {
      e.preventDefault();
      const targetId = href.replace("#", "");
      const element = document.getElementById(targetId);
      if (element) {
        window.scrollTo({ top: element.offsetTop - 80, behavior: "smooth" });
      }
      closeMenu();
    }
  };

  return (
    <nav
      className={`fixed top-0 left-0 right-0 z-[100] h-20 flex items-center transition-all duration-300 ${
        scrolled
          ? "bg-[#0a0a0c]/95 backdrop-blur-xl border-b border-white/5 shadow-[0_4px_30px_rgba(0,0,0,0.3)]"
          : "bg-transparent"
      }`}
    >
      <div className="max-w-6xl mx-auto px-6 w-full flex items-center justify-between">
        {/* Logo */}
        <Link
          href="#home"
          onClick={(e) => handleLinkClick(e, "#home")}
          className="text-2xl font-black gradient-text tracking-tight"
        >
          AK
        </Link>

        {/* Desktop Links */}
        <div className="hidden md:flex items-center space-x-6">
          {navLinks.map((link) => (
            <Link
              key={link.name}
              href={link.href}
              onClick={(e) => handleLinkClick(e, link.href)}
              className={`text-sm font-bold transition-all relative group ${
                activeSection === link.href.replace("#", "")
                  ? "text-indigo-400"
                  : "text-slate-400 hover:text-white"
              }`}
            >
              {link.name}
              <span
                className={`absolute -bottom-1 left-0 h-0.5 bg-gradient-to-r from-indigo-500 to-purple-500 rounded-full transition-all duration-300 ${
                  activeSection === link.href.replace("#", "")
                    ? "w-full"
                    : "w-0 group-hover:w-full"
                }`}
              />
            </Link>
          ))}
          <Link
            href="#contact"
            onClick={(e) => handleLinkClick(e, "#contact")}
            className="magnetic px-6 py-2.5 bg-gradient-to-r from-indigo-600 to-purple-600 hover:from-indigo-700 hover:to-purple-700 text-white text-sm font-black rounded-xl transition-all hover:scale-105 active:scale-95 shadow-lg shadow-indigo-500/20"
          >
            Hire Me ✦
          </Link>
        </div>

        {/* Mobile Toggle */}
        <button
          onClick={() => setIsMenuOpen(!isMenuOpen)}
          className="md:hidden text-slate-400 hover:text-white p-2 transition-colors"
          aria-label="Toggle menu"
        >
          {isMenuOpen ? (
            <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
            </svg>
          ) : (
            <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6h16M4 12h16m-7 6h7" />
            </svg>
          )}
        </button>
      </div>

      {/* Mobile Menu */}
      {isMenuOpen && (
        <div className="md:hidden absolute top-20 left-0 right-0 bg-[#0a0a0c]/98 backdrop-blur-xl border-b border-white/5 py-8 px-6 flex flex-col space-y-6">
          {navLinks.map((link) => (
            <Link
              key={link.name}
              href={link.href}
              onClick={(e) => handleLinkClick(e, link.href)}
              className={`text-xl font-bold transition-colors ${
                activeSection === link.href.replace("#", "")
                  ? "text-indigo-400"
                  : "text-slate-300 hover:text-white"
              }`}
            >
              {link.name}
            </Link>
          ))}
          <Link
            href="#contact"
            onClick={(e) => handleLinkClick(e, "#contact")}
            className="w-full text-center py-4 bg-gradient-to-r from-indigo-600 to-purple-600 text-white font-black rounded-xl"
          >
            Hire Me ✦
          </Link>
        </div>
      )}
    </nav>
  );
};

export default Navigation;
