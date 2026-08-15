# Portfolio UI/UX Redesign Implementation Plan

> **For agentic workers:** REQUIRED SUB-SKILL: Use superpowers:subagent-driven-development (recommended) or superpowers:executing-plans to implement this plan task-by-task. Steps use checkbox (`- [ ]`) syntax for tracking.

**Goal:** Transform the portfolio UI/UX into a modern, professional, clean, minimal, and precise Software Tester / QA Engineer aesthetic (Option 1) while keeping 100% of all existing text, data, images, links, and functionality untouched.

**Architecture:** Implement a refined blue-and-white theme system with subtle SVG background grid accents, high-contrast typography hierarchy, glassmorphic card borders, precision QA status badges, and smooth Framer Motion micro-interactions.

**Tech Stack:** Next.js (App Router), React 19, Tailwind CSS v4, Framer Motion, Lucide React, TypeScript.

---

### Task 1: Refine Global CSS & Theme Setup

**Files:**
- Modify: `src/app/globals.css`
- Modify: `src/app/layout.tsx`

- [ ] **Step 1: Update `globals.css` with clean QA background pattern & subtle scrollbar/selection styling**

```css
@import "tailwindcss";

:root {
  --color-primary: #2563eb;
  --color-secondary: #60a5fa;
  --color-bg: #f8fafc;
}

@theme inline {
  --color-background: var(--color-bg);
  --color-foreground: #0f172a;
  --font-sans: var(--font-inter);
}

html {
  scroll-behavior: smooth;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
}

body {
  background-color: #f8fafc;
  color: #0f172a;
  font-family: var(--font-inter, "Inter", system-ui, sans-serif);
  overflow-x: hidden;
}

/* Background grid utility */
.bg-grid-pattern {
  background-size: 24px 24px;
  background-image: 
    radial-gradient(circle, rgba(37, 99, 235, 0.07) 1px, transparent 1px);
}

/* Custom scrollbar */
::-webkit-scrollbar {
  width: 7px;
}

::-webkit-scrollbar-track {
  background: #f1f5f9;
}

::-webkit-scrollbar-thumb {
  background: #cbd5e1;
  border-radius: 9999px;
}

::-webkit-scrollbar-thumb:hover {
  background: #94a3b8;
}

/* Focus ring */
:focus-visible {
  outline: 2px solid #2563eb;
  outline-offset: 2px;
}

/* Selection */
::selection {
  background: #bfdbfe;
  color: #1e40af;
}
```

- [ ] **Step 2: Check layout metadata and body styling in `src/app/layout.tsx`**

Ensure `body` uses `bg-[#F8FAFC] text-slate-900 antialiased selection:bg-blue-100 selection:text-blue-900`.

- [ ] **Step 3: Test build**

Run: `npm run build`
Expected output: Successful build without errors.

- [ ] **Step 4: Commit changes**

```bash
git add src/app/globals.css src/app/layout.tsx
git commit -m "style: enhance global styles with precision grid pattern and color variables"
```

---

### Task 2: Refine Navbar Component

**Files:**
- Modify: `src/components/Navbar.tsx`

- [ ] **Step 1: Enhance `Navbar.tsx` visual presentation**

Update backdrop-blur, shadow, logo styling with a pulsing blue indicator dot, active pill transition, and hover states for the Download Resume CTA button without changing any nav labels or link targets.

```tsx
"use client";

import { useState, useEffect } from "react";
import { Menu, X, Download } from "lucide-react";
import { motion, AnimatePresence } from "framer-motion";
import { navLinks } from "@/data";
import { useActiveSection } from "@/hooks/useActiveSection";
import { smoothScrollTo } from "@/lib/utils";

export function Navbar() {
  const [scrolled, setScrolled] = useState(false);
  const [mobileOpen, setMobileOpen] = useState(false);

  const sectionIds = navLinks.map((l) => l.href.replace("#", ""));
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
            ? "bg-white/85 backdrop-blur-md border-b border-slate-200/80 shadow-xs"
            : "bg-transparent py-2"
        }`}
      >
        <nav
          className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 h-16 flex items-center justify-between"
          aria-label="Main navigation"
        >
          {/* Logo */}
          <button
            onClick={() => window.scrollTo({ top: 0, behavior: "smooth" })}
            className="flex items-center gap-1.5 text-xl font-extrabold text-[#2563EB] tracking-tight focus:outline-none cursor-pointer"
            aria-label="Go to top"
          >
            <span>PT.</span>
            <span className="w-2 h-2 rounded-full bg-blue-500 animate-pulse" />
          </button>

          {/* Desktop Nav */}
          <ul className="hidden md:flex items-center gap-1 bg-slate-100/60 p-1.5 rounded-full border border-slate-200/50 backdrop-blur-xs" role="list">
            {navLinks.map((link) => {
              const isActive = activeSection === link.href.replace("#", "");
              return (
                <li key={link.href}>
                  <button
                    onClick={() => handleNavClick(link.href)}
                    className={`relative px-4 py-1.5 text-sm font-medium rounded-full transition-colors duration-200 focus:outline-none focus-visible:ring-2 focus-visible:ring-[#2563EB] cursor-pointer ${
                      isActive
                        ? "text-[#2563EB] font-semibold"
                        : "text-slate-600 hover:text-[#2563EB]"
                    }`}
                    aria-current={isActive ? "page" : undefined}
                  >
                    {isActive && (
                      <motion.span
                        layoutId="nav-pill"
                        className="absolute inset-0 rounded-full bg-white shadow-xs border border-blue-100"
                        style={{ zIndex: -1 }}
                        transition={{ type: "spring", stiffness: 350, damping: 30 }}
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
            href="/resume.pdf"
            download
            className="hidden md:inline-flex items-center gap-2 px-5 py-2 text-sm font-semibold rounded-full bg-gradient-to-r from-[#2563EB] to-[#60A5FA] text-white shadow-sm shadow-blue-500/20 hover:shadow-md hover:shadow-blue-500/30 hover:scale-[1.03] active:scale-[0.98] transition-all duration-200 focus:outline-none focus-visible:ring-2 focus-visible:ring-[#2563EB]"
            aria-label="Download Resume"
          >
            <Download size={14} className="transition-transform duration-200 group-hover:translate-y-0.5" />
            Resume
          </a>

          {/* Mobile Menu Toggle */}
          <button
            className="md:hidden p-2 rounded-xl text-slate-600 hover:text-[#2563EB] hover:bg-blue-50 transition-colors focus:outline-none focus-visible:ring-2 focus-visible:ring-[#2563EB]"
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
            initial={{ opacity: 0, y: -12 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -12 }}
            transition={{ duration: 0.2 }}
            className="fixed top-[64px] left-0 right-0 z-40 bg-white/95 backdrop-blur-xl border-b border-slate-200 shadow-xl md:hidden"
          >
            <nav aria-label="Mobile navigation">
              <ul className="flex flex-col px-4 py-4 gap-1" role="list">
                {navLinks.map((link) => (
                  <li key={link.href}>
                    <button
                      onClick={() => handleNavClick(link.href)}
                      className="w-full text-left px-4 py-3 text-sm font-medium text-slate-700 hover:text-[#2563EB] hover:bg-blue-50/80 rounded-xl transition-colors"
                    >
                      {link.label}
                    </button>
                  </li>
                ))}
                <li className="pt-2">
                  <a
                    href="/resume.pdf"
                    download
                    className="flex items-center justify-center gap-2 px-4 py-3 text-sm font-semibold rounded-xl bg-gradient-to-r from-[#2563EB] to-[#60A5FA] text-white shadow-md shadow-blue-500/20"
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
```

- [ ] **Step 2: Commit changes**

```bash
git add src/components/Navbar.tsx
git commit -m "style(navbar): elevate navbar design with backdrop blur and refined active pill"
```

---

### Task 3: Redesign Hero Section

**Files:**
- Modify: `src/components/HeroSection.tsx`

- [ ] **Step 1: Upgrade `HeroSection.tsx` UI and visual elements**

Keep exact text, photo (`/profile.jpg`), download link, contact scroll action. Add status badge (`● OPEN TO INTERNSHIP`), refined typography, double-framed photo layout, and gradient button styling.

```tsx
"use client";

import Image from "next/image";
import { Download, Mail, CheckCircle2, ShieldCheck } from "lucide-react";
import { motion } from "framer-motion";
import { FadeUp, SlideIn, Floating } from "@/components/ui/Animations";
import { smoothScrollTo } from "@/lib/utils";

export function HeroSection() {
  return (
    <section
      id="hero"
      aria-label="Hero section"
      className="relative min-h-[92vh] flex items-center overflow-hidden bg-[#F8FAFC] bg-grid-pattern pt-24 pb-16"
    >
      {/* Background decorative ambient glows */}
      <div
        aria-hidden="true"
        className="absolute inset-0 pointer-events-none overflow-hidden"
      >
        <div className="absolute -top-40 -right-40 w-[600px] h-[600px] rounded-full bg-gradient-to-br from-blue-100/60 to-indigo-100/40 opacity-70 blur-3xl" />
        <div className="absolute -bottom-40 -left-40 w-[500px] h-[500px] rounded-full bg-gradient-to-tr from-sky-100/60 to-blue-50/50 opacity-60 blur-3xl" />
      </div>

      <div className="relative max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 w-full py-12">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-8 items-center">
          
          {/* LEFT COLUMN */}
          <div className="flex flex-col gap-6 order-2 lg:order-1 lg:col-span-7">
            
            {/* Status Badge */}
            <FadeUp delay={0.1}>
              <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-blue-50 border border-blue-200/80 text-blue-700 text-xs font-semibold shadow-xs">
                <span className="relative flex h-2 w-2">
                  <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-emerald-400 opacity-75" />
                  <span className="relative inline-flex rounded-full h-2 w-2 bg-emerald-500" />
                </span>
                OPEN TO INTERNSHIP
              </div>
            </FadeUp>

            {/* Heading */}
            <FadeUp delay={0.2}>
              <h1 className="text-4xl sm:text-5xl lg:text-6xl font-extrabold text-slate-900 leading-[1.1] tracking-tight">
                Hello, I&apos;m{" "}
                <span className="bg-gradient-to-r from-[#2563EB] via-blue-600 to-[#60A5FA] bg-clip-text text-transparent">
                  Phattharaphon
                  <br />
                  Tangtaeng
                </span>
              </h1>
            </FadeUp>

            {/* Subtitle */}
            <FadeUp delay={0.3}>
              <div className="space-y-1.5">
                <p className="text-xl font-bold text-slate-800 tracking-tight">
                  Software Engineering Student
                </p>
                <p className="text-base text-[#2563EB] font-semibold flex items-center gap-2">
                  <ShieldCheck size={18} className="text-[#2563EB]" />
                  Software Tester Intern
                </p>
              </div>
            </FadeUp>

            {/* Paragraph (Exact Content Kept) */}
            <FadeUp delay={0.4}>
              <p className="text-slate-600 text-base leading-relaxed max-w-lg">
                "Software Engineering student passionate about Software Testing and Quality Assurance.
                 Interested in test case design, functional testing, and improving software quality."
              </p>
            </FadeUp>

            {/* CTA Buttons */}
            <FadeUp delay={0.5}>
              <div className="flex flex-wrap gap-4 pt-2">
                <a
                  href="/resume.pdf"
                  download
                  id="hero-download-cv"
                  className="group inline-flex items-center gap-2.5 px-7 py-3.5 rounded-full bg-gradient-to-r from-[#2563EB] to-[#60A5FA] text-white font-semibold text-sm shadow-md shadow-blue-500/25 hover:shadow-lg hover:shadow-blue-500/35 hover:scale-[1.02] active:scale-[0.98] transition-all duration-200 focus:outline-none focus-visible:ring-2 focus-visible:ring-[#2563EB]"
                >
                  <Download size={17} className="transition-transform duration-200 group-hover:-translate-y-0.5" />
                  Download CV
                </a>
                <button
                  id="hero-contact-me"
                  onClick={() => smoothScrollTo("#contact")}
                  className="inline-flex items-center gap-2.5 px-7 py-3.5 rounded-full border-2 border-[#2563EB] text-[#2563EB] font-semibold text-sm bg-white/80 hover:bg-blue-50/80 hover:scale-[1.02] active:scale-[0.98] transition-all duration-200 focus:outline-none focus-visible:ring-2 focus-visible:ring-[#2563EB] shadow-xs cursor-pointer"
                >
                  <Mail size={17} />
                  Contact Me
                </button>
              </div>
            </FadeUp>

          </div>

          {/* RIGHT COLUMN — Profile Image Frame */}
          <div className="flex justify-center items-center order-1 lg:order-2 lg:col-span-5">
            <SlideIn direction="right" delay={0.3}>
              <Floating>
                <div className="relative" aria-label="Profile image placeholder">
                  
                  {/* Glowing background halo */}
                  <div className="absolute -inset-2 rounded-3xl bg-gradient-to-tr from-[#2563EB]/25 to-[#60A5FA]/25 blur-xl opacity-80" />

                  {/* Precision Double-Border Card */}
                  <div className="relative w-72 h-80 sm:w-80 sm:h-96 lg:w-88 lg:h-[430px] rounded-3xl bg-white p-3 border border-slate-200/90 shadow-xl shadow-blue-500/10 flex flex-col items-center justify-center overflow-hidden">
                    <div className="relative w-full h-full rounded-2xl overflow-hidden bg-slate-100 border border-slate-100">
                      <Image
                        src="/profile.jpg"
                        alt="Profile"
                        fill
                        priority
                        className="object-cover transition-transform duration-500 hover:scale-105"
                      />
                    </div>
                  </div>

                </div>
              </Floating>
            </SlideIn>
          </div>

        </div>
      </div>
    </section>
  );
}
```

- [ ] **Step 2: Commit changes**

```bash
git add src/components/HeroSection.tsx
git commit -m "style(hero): redesign hero section with precision frame, availability badge, and refined layout"
```

---

### Task 4: Redesign About Section

**Files:**
- Modify: `src/components/AboutSection.tsx`

- [ ] **Step 1: Upgrade `AboutSection.tsx` visual design**

Keep exact bio text and `/abot.jpg` photo. Enhance border cards, section header spacing, and photo container.

```tsx
"use client";

import Image from "next/image";
import { Section, SectionHeader } from "@/components/ui/SectionHeader";
import { FadeUp, SlideIn } from "@/components/ui/Animations";
import { CheckCircle2 } from "lucide-react";

export function AboutSection() {
  return (
    <Section id="about" className="bg-white border-y border-slate-100 relative">
      <FadeUp>
        <SectionHeader title="About Me" subtitle="A brief introduction to my background and QA focus" />
      </FadeUp>

      <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-center">
        
        {/* LEFT — Text */}
        <SlideIn direction="left" delay={0.1} className="lg:col-span-7">
          <div className="space-y-6 bg-slate-50/70 p-8 rounded-2xl border border-slate-200/70 shadow-xs">
            <p className="text-slate-600 text-base sm:text-lg leading-relaxed">
              "Third-year Software Engineering student with a strong interest in Software Testing and Quality Assurance.
               Familiar with designing test cases, analyzing system requirements, and performing functional testing through academic projects.
                Hands-on experience in test execution and identifying defects
               to ensure system quality. 
               Detail-focused and motivated to continuously improve
                testing skills in a professional environment."
            </p>

            <div className="pt-2 flex flex-wrap gap-4 border-t border-slate-200/60">
              <div className="flex items-center gap-2 text-xs font-semibold text-slate-700 bg-white px-3 py-1.5 rounded-lg border border-slate-200 shadow-2xs">
                <CheckCircle2 size={14} className="text-[#2563EB]" />
                QA & Functional Testing
              </div>
              <div className="flex items-center gap-2 text-xs font-semibold text-slate-700 bg-white px-3 py-1.5 rounded-lg border border-slate-200 shadow-2xs">
                <CheckCircle2 size={14} className="text-[#2563EB]" />
                Test Case Execution
              </div>
              <div className="flex items-center gap-2 text-xs font-semibold text-slate-700 bg-white px-3 py-1.5 rounded-lg border border-slate-200 shadow-2xs">
                <CheckCircle2 size={14} className="text-[#2563EB]" />
                Defect Tracking & SDLC
              </div>
            </div>
          </div>
        </SlideIn>

        {/* RIGHT — Image */}
        <SlideIn direction="right" delay={0.2} className="lg:col-span-5 flex justify-center lg:justify-end">
          <div
            className="relative w-full max-w-sm h-[380px] rounded-3xl bg-white p-2.5 border border-slate-200 shadow-xl shadow-blue-500/5 overflow-hidden"
            aria-label="About image"
          >
            <div className="relative w-full h-full rounded-2xl overflow-hidden bg-slate-100">
              <Image
                src="/abot.jpg"
                alt="Profile"
                fill
                className="object-cover transition-transform duration-500 hover:scale-105"
              />
            </div>
          </div>
        </SlideIn>

      </div>
    </Section>
  );
}
```

- [ ] **Step 2: Commit changes**

```bash
git add src/components/AboutSection.tsx
git commit -m "style(about): update about section layout and card styling"
```

---

### Task 5: Redesign Education Section

**Files:**
- Modify: `src/components/EducationSection.tsx`

- [ ] **Step 1: Upgrade `EducationSection.tsx` with precision connected timeline node cards**

Keep all data (`education` array from `src/data/index.ts`). Improve timeline styling, logo containers, badges, and hover effects.

```tsx
"use client";

import Image from "next/image";
import { Section, SectionHeader } from "@/components/ui/SectionHeader";
import { FadeUp, ScaleIn } from "@/components/ui/Animations";
import { education } from "@/data";
import { BookOpen, Award, Calendar } from "lucide-react";

export function EducationSection() {
  return (
    <Section id="education" className="bg-[#F8FAFC]">
      <FadeUp>
        <SectionHeader
          title="Education"
          subtitle="My academic journey and qualifications"
        />
      </FadeUp>

      <div className="relative max-w-4xl mx-auto">
        {/* Vertical line */}
        <div
          aria-hidden="true"
          className="absolute left-6 lg:left-1/2 top-4 bottom-4 w-0.5 bg-gradient-to-b from-[#2563EB] via-[#60A5FA]/60 to-slate-200 -translate-x-1/2"
        />

        <div className="space-y-10">
          {education.map((edu, index) => {
            const isLeft = index % 2 === 0;

            return (
              <ScaleIn key={edu.id} delay={index * 0.15}>
                <div
                  className={`relative flex flex-col lg:flex-row gap-8 ${
                    isLeft ? "lg:flex-row" : "lg:flex-row-reverse"
                  }`}
                >
                  {/* Timeline node */}
                  <div
                    aria-hidden="true"
                    className="absolute left-6 lg:left-1/2 top-6 -translate-x-1/2 w-5 h-5 rounded-full bg-[#2563EB] border-4 border-white shadow-md shadow-blue-500/30 z-10"
                  />

                  {/* Spacer */}
                  <div className="hidden lg:block lg:w-1/2" />

                  {/* Card */}
                  <div className="ml-14 lg:ml-0 lg:w-1/2 lg:px-6">
                    <article
                      className="group relative bg-white rounded-2xl p-6 shadow-xs border border-slate-200/80 hover:shadow-xl hover:shadow-blue-500/10 hover:border-blue-200 transition-all duration-300"
                      aria-label={`${edu.institution} education`}
                    >
                      {/* Header */}
                      <div className="flex items-start gap-4">
                        {/* Logo */}
                        <div className="w-14 h-14 rounded-xl bg-slate-50 border border-slate-100 p-2 shrink-0 flex items-center justify-center overflow-hidden">
                          <Image
                            src={edu.logo}
                            alt={edu.institution}
                            width={44}
                            height={44}
                            className="object-contain max-h-full"
                          />
                        </div>

                        <div className="flex-1 min-w-0">
                          <div className="flex items-center gap-2 flex-wrap mb-1.5">
                            <span className="inline-flex items-center gap-1 text-xs font-semibold px-3 py-0.5 rounded-full bg-blue-50 text-[#2563EB] border border-blue-100">
                              <Calendar size={12} />
                              {edu.period}
                            </span>

                            {edu.current && (
                              <span className="text-xs font-semibold px-2.5 py-0.5 rounded-full bg-emerald-50 text-emerald-700 border border-emerald-200">
                                Current
                              </span>
                            )}
                          </div>

                          <h3 className="text-base font-bold text-slate-900 leading-snug">
                            {edu.institution}
                          </h3>
                        </div>
                      </div>

                      {/* Details */}
                      <div className="mt-4 space-y-2.5 pl-1">
                        <div className="flex items-center gap-2 text-sm text-slate-700">
                          <BookOpen
                            size={15}
                            className="text-[#2563EB] shrink-0"
                          />
                          <span className="font-semibold">{edu.degree}</span>
                        </div>

                        {edu.field && (
                          <div className="flex items-center gap-2 text-sm text-slate-500 pl-6">
                            <span className="w-2 h-0.5 bg-blue-300 rounded shrink-0" />
                            {edu.field}
                          </div>
                        )}

                        <div className="flex items-center gap-2 text-sm pt-1">
                          <Award
                            size={15}
                            className="text-amber-500 shrink-0"
                          />
                          <span className="font-semibold text-slate-700">
                            GPA:{" "}
                            <span className="text-[#2563EB] font-bold">{edu.gpa}</span>
                          </span>
                        </div>
                      </div>
                    </article>
                  </div>
                </div>
              </ScaleIn>
            );
          })}
        </div>
      </div>
    </Section>
  );
}
```

- [ ] **Step 2: Commit changes**

```bash
git add src/components/EducationSection.tsx
git commit -m "style(education): redesign education timeline with node badges and refined cards"
```

---

### Task 6: Redesign Skills Section

**Files:**
- Modify: `src/components/SkillsSection.tsx`

- [ ] **Step 1: Upgrade `SkillsSection.tsx` card grid**

Keep all categories and skill strings from `src/data/index.ts`. Elevate cards with top gradient border bars, soft icon background badges, and interactive skill pills.

```tsx
"use client";

import {
  TestTube,
  Wrench,
  Code2,
  BookOpen,
  Users,
  LucideIcon,
  Check,
} from "lucide-react";
import { Section, SectionHeader } from "@/components/ui/SectionHeader";
import { FadeUp, ScaleIn } from "@/components/ui/Animations";
import { skillCategories } from "@/data";

const iconMap: Record<string, LucideIcon> = {
  TestTube,
  Wrench,
  Code2,
  BookOpen,
  Users,
};

export function SkillsSection() {
  return (
    <Section id="skills" className="bg-white border-t border-slate-100">
      <FadeUp>
        <SectionHeader
          title="Skills"
          subtitle="Technologies, testing tools, and core competencies"
        />
      </FadeUp>

      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
        {skillCategories.map((category, index) => {
          const Icon = iconMap[category.icon] ?? BookOpen;

          return (
            <ScaleIn key={category.title} delay={index * 0.1}>
              <article
                className="group relative bg-white rounded-2xl p-6 border border-slate-200/80 shadow-xs hover:shadow-xl hover:shadow-blue-500/10 hover:border-blue-200 transition-all duration-300 overflow-hidden h-full flex flex-col justify-between"
                aria-label={`${category.title} skills`}
              >
                {/* Top accent gradient bar */}
                <div
                  aria-hidden="true"
                  className="absolute top-0 left-0 right-0 h-1 bg-gradient-to-r from-[#2563EB] to-[#60A5FA]"
                />

                <div>
                  {/* Icon + Title */}
                  <div className="flex items-center gap-3 mb-5">
                    <div
                      className="w-11 h-11 rounded-xl bg-blue-50 text-[#2563EB] border border-blue-100 flex items-center justify-center shrink-0 group-hover:bg-[#2563EB] group-hover:text-white transition-colors duration-300"
                      aria-hidden="true"
                    >
                      <Icon size={20} />
                    </div>
                    <h3 className="text-base font-bold text-slate-900">
                      {category.title}
                    </h3>
                  </div>

                  {/* Skill pills */}
                  <ul
                    className="flex flex-wrap gap-2"
                    aria-label={`${category.title} list`}
                  >
                    {category.skills.map((skill) => (
                      <li key={skill}>
                        <span
                          className="inline-flex items-center gap-1.5 px-3 py-1 rounded-lg text-xs font-semibold bg-slate-50 text-slate-700 border border-slate-200/80 transition-all duration-200 hover:bg-blue-50 hover:text-[#2563EB] hover:border-blue-200 hover:scale-[1.02]"
                        >
                          <Check size={12} className="text-[#2563EB] shrink-0" />
                          {skill}
                        </span>
                      </li>
                    ))}
                  </ul>
                </div>
              </article>
            </ScaleIn>
          );
        })}
      </div>
    </Section>
  );
}
```

- [ ] **Step 2: Commit changes**

```bash
git add src/components/SkillsSection.tsx
git commit -m "style(skills): redesign skills section with elevated cards and interactive skill pills"
```

---

### Task 7: Redesign Projects Section

**Files:**
- Modify: `src/components/ProjectsSection.tsx`

- [ ] **Step 1: Upgrade `ProjectsSection.tsx` visual cards**

Keep project titles, descriptions, links, tech badges. Refine card header preview box, tech badges, and action buttons.

```tsx
"use client";

import { GitBranch, ExternalLink, ShieldCheck } from "lucide-react";
import { motion } from "framer-motion";
import { Section, SectionHeader } from "@/components/ui/SectionHeader";
import { FadeUp, ScaleIn } from "@/components/ui/Animations";
import { TechBadge } from "@/components/ui/SectionHeader";
import { projects } from "@/data";

export function ProjectsSection() {
  return (
    <Section id="projects" className="bg-[#F8FAFC]">
      <FadeUp>
        <SectionHeader
          title="Projects"
          subtitle="A selection of work I've built and tested"
        />
      </FadeUp>

      <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
        {projects.map((project, index) => (
          <ScaleIn key={project.id} delay={index * 0.1}>
            <motion.article
              whileHover={{ y: -6 }}
              transition={{ type: "spring", stiffness: 300, damping: 20 }}
              className="group relative bg-white rounded-2xl border border-slate-200/80 shadow-xs overflow-hidden hover:shadow-xl hover:shadow-blue-500/10 hover:border-blue-200 transition-all duration-300 flex flex-col justify-between h-full"
              aria-label={`${project.title} project`}
            >
              <div>
                {/* Header Preview */}
                <div
                  className={`relative h-44 bg-gradient-to-br ${project.gradient} flex items-center justify-center overflow-hidden p-6`}
                  aria-label={`${project.title} project preview`}
                >
                  {/* Decorative background overlay */}
                  <div
                    aria-hidden="true"
                    className="absolute inset-0 bg-slate-900/10 backdrop-blur-[2px]"
                  />

                  <div className="relative text-center z-10">
                    <div className="w-12 h-12 rounded-xl bg-white/20 border border-white/40 flex items-center justify-center mx-auto mb-2 backdrop-blur-md shadow-xs">
                      <ShieldCheck
                        size={22}
                        className="text-white"
                        aria-hidden="true"
                      />
                    </div>
                    <span className="text-white font-bold text-base tracking-tight drop-shadow-xs">
                      {project.title}
                    </span>
                  </div>

                  {/* Subtitle badge */}
                  <div className="absolute top-4 left-4 z-10">
                    <span className="px-3 py-1 rounded-full bg-white/20 backdrop-blur-md border border-white/40 text-white text-xs font-semibold shadow-xs">
                      {project.subtitle}
                    </span>
                  </div>
                </div>

                {/* Content */}
                <div className="p-6">
                  <h3 className="text-lg font-bold text-slate-900 mb-2">
                    {project.title}
                  </h3>
                  <p className="text-sm text-slate-600 leading-relaxed mb-5">
                    {project.description}
                  </p>

                  {/* Tech badges */}
                  <div
                    className="flex flex-wrap gap-2 mb-6"
                    aria-label="Technologies used"
                  >
                    {project.technologies.map((tech) => (
                      <TechBadge key={tech} label={tech} />
                    ))}
                  </div>
                </div>
              </div>

              {/* Action buttons */}
              <div className="px-6 pb-6 pt-0 flex gap-3">
                <a
                  href={project.githubUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                  id={`project-github-${project.id}`}
                  className="flex-1 inline-flex items-center justify-center gap-2 px-4 py-2.5 rounded-xl border border-slate-200 text-sm font-semibold text-slate-700 bg-white hover:bg-slate-50 hover:border-slate-300 transition-all duration-200 focus:outline-none focus-visible:ring-2 focus-visible:ring-[#2563EB]"
                  aria-label={`View ${project.title} on GitHub`}
                >
                  <GitBranch size={15} aria-hidden="true" />
                  GitHub
                </a>
                <a
                  href={project.demoUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                  id={`project-demo-${project.id}`}
                  className="flex-1 inline-flex items-center justify-center gap-2 px-4 py-2.5 rounded-xl bg-gradient-to-r from-[#2563EB] to-[#60A5FA] text-sm font-semibold text-white shadow-xs hover:shadow-md hover:shadow-blue-500/20 hover:scale-[1.02] active:scale-[0.98] transition-all duration-200 focus:outline-none focus-visible:ring-2 focus-visible:ring-[#2563EB]"
                  aria-label={`View live demo of ${project.title}`}
                >
                  <ExternalLink size={15} aria-hidden="true" />
                  Live Demo
                </a>
              </div>
            </motion.article>
          </ScaleIn>
        ))}
      </div>
    </Section>
  );
}
```

- [ ] **Step 2: Commit changes**

```bash
git add src/components/ProjectsSection.tsx
git commit -m "style(projects): redesign project cards with enhanced headers and refined button states"
```

---

### Task 8: Redesign Contact Section & Footer

**Files:**
- Modify: `src/components/ContactSection.tsx`
- Modify: `src/components/Footer.tsx`

- [ ] **Step 1: Upgrade `ContactSection.tsx` visual elements**

Keep contact items (`contactItems` from `src/data/index.ts`) and email mailto link. Elevate contact card grid and Send Message button.

```tsx
"use client";

import {
  Mail,
  GitBranch,
  Link2,
  Phone,
  Send,
  LucideIcon,
} from "lucide-react";
import { Section, SectionHeader } from "@/components/ui/SectionHeader";
import { FadeUp, ScaleIn } from "@/components/ui/Animations";
import { contactItems } from "@/data";

const iconMap: Record<string, LucideIcon> = {
  Mail,
  Github: GitBranch,
  Linkedin: Link2,
  Phone,
};

export function ContactSection() {
  return (
    <Section id="contact" className="bg-white border-t border-slate-100 relative">
      <FadeUp>
        <SectionHeader
          title="Contact"
          subtitle="Let's connect — I'm open to internship opportunities"
        />
      </FadeUp>

      {/* Contact cards grid */}
      <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 max-w-2xl mx-auto mb-10">
        {contactItems.map((item, index) => {
          const Icon = iconMap[item.icon] ?? Mail;

          return (
            <ScaleIn key={item.id} delay={index * 0.1}>
              <a
                href={item.href}
                target={item.href.startsWith("http") ? "_blank" : undefined}
                rel={
                  item.href.startsWith("http")
                    ? "noopener noreferrer"
                    : undefined
                }
                id={`contact-${item.id}`}
                className="group flex items-center gap-4 p-5 rounded-2xl bg-white border border-slate-200/80 shadow-xs hover:shadow-md hover:border-blue-300 hover:-translate-y-0.5 transition-all duration-200 focus:outline-none focus-visible:ring-2 focus-visible:ring-[#2563EB]"
                aria-label={`Contact via ${item.label}: ${item.value}`}
              >
                <div
                  className="w-11 h-11 rounded-xl bg-blue-50 text-[#2563EB] border border-blue-100 flex items-center justify-center shrink-0 group-hover:bg-[#2563EB] group-hover:text-white transition-colors duration-200"
                  aria-hidden="true"
                >
                  <Icon size={20} />
                </div>
                <div className="min-w-0">
                  <p className="text-xs font-semibold text-slate-400 mb-0.5">
                    {item.label}
                  </p>
                  <p className="text-sm font-bold text-slate-800 truncate group-hover:text-[#2563EB] transition-colors duration-200">
                    {item.value}
                  </p>
                </div>
              </a>
            </ScaleIn>
          );
        })}
      </div>

      {/* Send Message CTA */}
      <FadeUp delay={0.4}>
        <div className="flex justify-center">
          <a
            href="mailto:tphattharaphon@gmail.com"
            id="contact-send-message"
            className="group inline-flex items-center gap-3 px-9 py-4 rounded-2xl bg-gradient-to-r from-[#2563EB] to-[#60A5FA] text-white font-bold text-base shadow-md shadow-blue-500/25 hover:shadow-lg hover:shadow-blue-500/35 hover:scale-[1.02] active:scale-[0.98] transition-all duration-300 focus:outline-none focus-visible:ring-2 focus-visible:ring-[#2563EB]"
            aria-label="Send me a message via email"
          >
            <Send
              size={19}
              className="group-hover:rotate-12 transition-transform duration-200"
              aria-hidden="true"
            />
            Send Message
          </a>
        </div>
      </FadeUp>
    </Section>
  );
}
```

- [ ] **Step 2: Update `Footer.tsx`**

```tsx
import { Heart } from "lucide-react";

export function Footer() {
  const year = 2026;

  return (
    <footer className="bg-[#F8FAFC] border-t border-slate-200/80">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
        <div className="flex flex-col sm:flex-row items-center justify-between gap-4">
          {/* Logo */}
          <span className="text-lg font-extrabold text-[#2563EB] tracking-tight">
            PT.
          </span>

          {/* Copyright */}
          <p className="text-sm font-medium text-slate-500 flex items-center gap-1.5">
            Copyright &copy; {year} Phattharaphon Tangtaeng. {" "}
            <Heart
              size={14}
              className="text-rose-500 fill-rose-500"
              aria-hidden="true"
            />
          </p>

          {/* Tagline */}
          <p className="text-xs font-semibold text-slate-400 hidden sm:block">
            Software Tester intern
          </p>
        </div>
      </div>
    </footer>
  );
}
```

- [ ] **Step 3: Commit changes**

```bash
git add src/components/ContactSection.tsx src/components/Footer.tsx
git commit -m "style(contact): update contact section and footer design"
```

---

### Task 9: Verification & Visual Polish

**Files:**
- Audit: All components in `src/components/` and `src/app/`

- [ ] **Step 1: Execute production build check**

Run: `npm run build`
Expected output: Build completed successfully with 0 errors.

- [ ] **Step 2: Content integrity audit**

Verify that all text strings (Name, Bio, Skills, Projects, Education details) in `src/data/index.ts` match original content 100%.

- [ ] **Step 3: Final commit**

```bash
git commit --allow-empty -m "build: verify zero content regression and successful production build"
```
