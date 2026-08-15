"use client";
import Image from "next/image";
import { Download, Mail } from "lucide-react";
import { motion } from "framer-motion";
import { FadeUp, SlideIn, Floating } from "@/components/ui/Animations";
import { smoothScrollTo } from "@/lib/utils";

export function HeroSection() {
  return (
    <section
      id="hero"
      aria-label="Hero section"
      className="relative min-h-screen flex items-center overflow-hidden bg-[#F8FAFC] bg-grid-pattern pt-16"
    >
      {/* Background decorative blobs */}
      <div
        aria-hidden="true"
        className="absolute inset-0 pointer-events-none overflow-hidden"
      >
        <div className="absolute -top-40 -right-40 w-[600px] h-[600px] rounded-full bg-gradient-to-br from-blue-100/60 to-indigo-100/40 opacity-70 blur-3xl" />
        <div className="absolute -bottom-40 -left-40 w-[500px] h-[500px] rounded-full bg-gradient-to-tr from-sky-100/60 to-blue-100/40 opacity-70 blur-3xl" />
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[800px] h-[800px] rounded-full bg-gradient-to-br from-blue-100/60 to-indigo-100/40 opacity-70 blur-3xl" />
      </div>

      <div className="relative max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 w-full py-20">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-16 items-center">
          {/* LEFT COLUMN */}
          <div className="flex flex-col gap-6 order-2 lg:order-1 items-start">
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
              <div className="space-y-1">
                <p className="text-lg font-semibold text-gray-700">
                  Software Engineering Student
                </p>
                <p className="text-base text-[#2563EB] font-medium">
                   Software Tester Intern
                </p>
              </div>
            </FadeUp>

            {/* Paragraph */}
            <FadeUp delay={0.4}>
              <p className="text-gray-500 text-base leading-relaxed max-w-md">
                &quot;Software Engineering student passionate about Software Testing and Quality Assurance.
                 Interested in test case design, functional testing, and improving software quality.&quot;
              </p>
            </FadeUp>

            {/* CTA Buttons */}
            <FadeUp delay={0.5}>
              <div className="flex flex-wrap gap-3 pt-2">
                <a
                  href="/resume.pdf"
                  download
                  id="hero-download-cv"
                  className="inline-flex items-center gap-2 px-6 py-3 rounded-full bg-gradient-to-r from-[#2563EB] to-[#60A5FA] text-white font-medium text-sm shadow-md shadow-blue-500/25 hover:shadow-lg hover:shadow-blue-500/35 hover:scale-[1.02] active:scale-[0.98] transition-all duration-200 focus:outline-none focus-visible:ring-2 focus-visible:ring-[#2563EB]"
                >
                  <Download size={16} />
                  Download CV
                </a>
                <button
                  id="hero-contact-me"
                  onClick={() => smoothScrollTo("#contact")}
                  className="inline-flex items-center gap-2 px-6 py-3 rounded-full border-2 border-[#2563EB] text-[#2563EB] font-semibold text-sm bg-white/80 hover:bg-blue-50/80 hover:scale-[1.02] active:scale-[0.98] transition-all duration-200 focus:outline-none focus-visible:ring-2 focus-visible:ring-[#2563EB]"
                >
                  <Mail size={16} />
                  Contact Me
                </button>
              </div>
            </FadeUp>
          </div>

          {/* RIGHT COLUMN — Profile */}
          <div className="flex justify-center items-center order-1 lg:order-2">
            <SlideIn direction="right" delay={0.3}>
              <Floating>
                <div
                  className="relative"
                  aria-label="Profile image"
                >
                  {/* Outer glow ring */}
                  <div className="absolute inset-0 rounded-3xl bg-gradient-to-br from-[#2563EB]/20 to-[#60A5FA]/20 blur-xl scale-105" />

                  {/* Precision double-framed container */}
                  <div className="relative w-72 h-80 sm:w-80 sm:h-96 lg:w-96 lg:h-[440px] rounded-3xl bg-white p-3 border border-slate-200/90 shadow-xl shadow-blue-500/10 flex flex-col items-center justify-center overflow-hidden">
                    <div className="relative w-full h-full rounded-2xl overflow-hidden bg-slate-100">
                      <Image
                        src="/profile.jpg"
                        alt="Phattharaphon Tangtaeng - Profile"
                        fill
                        sizes="(max-width: 640px) 288px, (max-width: 1024px) 320px, 384px"
                        className="object-cover"
                        priority
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
