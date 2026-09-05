"use client";

import { useState, useEffect } from "react";
import { Menu, X, Download } from "lucide-react";
import { motion, AnimatePresence } from "framer-motion";
import { navLinks } from "@/data";
import { useActiveSection } from "@/hooks/useActiveSection";
import { smoothScrollTo } from "@/lib/utils";

const sectionIds = navLinks.map((link) => link.href.replace("#", ""));

export function Navbar() {
  const [scrolled, setScrolled] = useState(false);
  const [mobileOpen, setMobileOpen] = useState(false);

  const activeSection = useActiveSection(sectionIds);

  useEffect(() => {
    const handleScroll = () => setScrolled(window.scrollY > 20);
    window.addEventListener("scroll", handleScroll, { passive: true });
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const handleNavClick = (href: string) => {
    setMobileOpen(false);
    smoothScrollTo(href);
  };

  return (
    <>
      <header
        className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
          scrolled
            ? "bg-[#fffafa]/88 backdrop-blur-md border-b border-[#fecaca] shadow-xs"
            : "bg-transparent"
        }`}
      >
        <nav
          className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 h-16 flex items-center justify-between"
          aria-label="Main navigation"
        >
          {/* Logo */}
          <button
            onClick={() => window.scrollTo({ top: 0, behavior: "smooth" })}
            className="flex items-center gap-1.5 text-xl font-extrabold text-[#991b1b] tracking-tight focus:outline-none cursor-pointer"
            aria-label="Go to top"
          >
            <span>PT.</span>
            <span className="w-2 h-2 rounded-full bg-[#dc2626] animate-pulse" />
          </button>

          {/* Desktop Nav */}
          <ul
            className="hidden md:flex items-center gap-1 bg-slate-100/60 p-1.5 rounded-full border border-slate-200/50 backdrop-blur-xs"
            role="list"
          >
            {navLinks.map((link) => {
              const isActive =
                activeSection === link.href.replace("#", "");
              return (
                <li key={link.href}>
                  <button
                    onClick={() => handleNavClick(link.href)}
                    className={`relative px-4 py-1.5 text-sm font-medium rounded-full transition-colors duration-200 focus:outline-none focus-visible:ring-2 focus-visible:ring-[#dc2626] cursor-pointer ${
                      isActive
                        ? "text-[#991b1b] font-semibold"
                        : "text-slate-600 hover:text-[#991b1b]"
                    }`}
                    aria-current={isActive ? "page" : undefined}
                  >
                    {isActive && (
                      <motion.span
                        layoutId="nav-pill"
                        className="absolute inset-0 rounded-full bg-white shadow-xs border border-[#fecaca]"
                        style={{ zIndex: -1 }}
                        transition={{ type: "spring", duration: 0.5, bounce: 0.2 }}
                      />
                    )}
                    {link.label}
                  </button>
                </li>
              );
            })}
          </ul>

          {/* Resume Button (desktop) */}
          <a
            href="/CVphattharaphon.pdf"
            download
            className="hidden md:inline-flex items-center gap-2 px-4 py-2 text-sm font-medium rounded-full bg-gradient-to-r from-[#991b1b] to-[#dc2626] text-white shadow-sm shadow-[#dc2626]/25 hover:shadow-md hover:shadow-[#dc2626]/35 hover:scale-[1.03] active:scale-[0.98] transition-all duration-200 focus:outline-none focus-visible:ring-2 focus-visible:ring-[#dc2626]"
            aria-label="Download Resume"
          >
            <Download size={14} />
            Resume
          </a>

          {/* Mobile Menu Toggle */}
          <button
            className="md:hidden p-2 rounded-lg text-slate-600 hover:text-[#991b1b] hover:bg-[#fef2f2] transition-colors focus:outline-none focus-visible:ring-2 focus-visible:ring-[#dc2626] cursor-pointer"
            onClick={() => setMobileOpen((prev) => !prev)}
            aria-label={mobileOpen ? "Close menu" : "Open menu"}
            aria-expanded={mobileOpen}
          >
            {mobileOpen ? <X size={22} /> : <Menu size={22} />}
          </button>
        </nav>
      </header>

      {/* Mobile Drawer */}
      <AnimatePresence>
        {mobileOpen && (
          <motion.div
            key="mobile-menu"
            initial={{ opacity: 0, y: -16 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -16 }}
            transition={{ duration: 0.2 }}
            className="fixed top-16 left-0 right-0 z-40 bg-[#fffafa]/95 backdrop-blur-xl border-b border-[#fecaca] shadow-lg md:hidden"
          >
            <nav aria-label="Mobile navigation">
              <ul className="flex flex-col px-4 py-4 gap-1" role="list">
                {navLinks.map((link) => (
                  <li key={link.href}>
                    <button
                      onClick={() => handleNavClick(link.href)}
                      className="w-full text-left px-4 py-3 text-sm font-medium text-slate-700 hover:text-[#991b1b] hover:bg-[#fef2f2] rounded-xl transition-colors cursor-pointer"
                    >
                      {link.label}
                    </button>
                  </li>
                ))}
                <li className="pt-2">
                  <a
                    href="/CVphattharaphon.pdf"
                    download
                    className="flex items-center justify-center gap-2 px-4 py-3 text-sm font-medium rounded-xl bg-gradient-to-r from-[#991b1b] to-[#dc2626] text-white shadow-sm shadow-[#dc2626]/25"
                    onClick={() => setMobileOpen(false)}
                  >
                    <Download size={14} />
                    Download Resume
                  </a>
                </li>
              </ul>
            </nav>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  );
}
