"use client";
import Image from "next/image";
import { Section, SectionHeader } from "@/components/ui/SectionHeader";
import { FadeUp, SlideIn } from "@/components/ui/Animations";
import { CheckCircle2 } from "lucide-react";

const highlights = [
  "QA & Functional Testing",
  "Test Case Execution",
  "Defect Tracking & SDLC",
];

export function AboutSection() {
  return (
    <Section id="about" className="bg-white border-y border-slate-100 relative">
      <FadeUp>
        <SectionHeader title="About Me" />
      </FadeUp>

      <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-16 items-center">
        {/* LEFT — Text */}
        <SlideIn direction="left" delay={0.1}>
          <div className="space-y-6 bg-slate-50/70 p-8 rounded-2xl border border-slate-200/70 shadow-xs">
            <p className="text-gray-600 text-base leading-relaxed">
              &quot;Third-year Software Engineering student with a strong interest in Software Testing and Quality Assurance.
              Familiar with designing test cases, analyzing system requirements, and performing functional testing through academic projects.
              Hands-on experience in test execution and identifying defects
              to ensure system quality. 
              Detail-focused and motivated to continuously improve
              testing skills in a professional environment.&quot;
            </p>

            {/* Highlight list */}
            <div className="flex flex-wrap gap-2.5 pt-2">
              {highlights.map((highlight) => (
                <div
                  key={highlight}
                  className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-xl bg-white border border-slate-200/80 text-slate-700 text-xs sm:text-sm font-medium shadow-xs"
                >
                  <CheckCircle2 className="w-4 h-4 text-[#2563EB] shrink-0" />
                  <span>{highlight}</span>
                </div>
              ))}
            </div>
          </div>
        </SlideIn>

        {/* RIGHT — Photo */}
        <SlideIn direction="right" delay={0.2}>
          <div className="flex justify-center lg:justify-end">
            <div
              className="relative w-full max-w-sm h-80 sm:h-96 lg:h-[420px] rounded-3xl bg-white p-2.5 border border-slate-200 shadow-xl shadow-blue-500/5 overflow-hidden"
              aria-label="About profile image"
            >
              <div className="relative w-full h-full rounded-2xl overflow-hidden bg-slate-100">
                <Image
                  src="/abot.jpg"
                  alt="Profile"
                  fill
                  sizes="(max-width: 640px) 288px, (max-width: 1024px) 320px, 384px"
                  className="object-cover"
                />
              </div>
            </div>
          </div>
        </SlideIn>
      </div>
    </Section>
  );
}
