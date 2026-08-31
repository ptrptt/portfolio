"use client";

import Image from "next/image";
import { ArrowRight, Download, Mail } from "lucide-react";
import { FadeUp, SlideIn } from "@/components/ui/Animations";
import { smoothScrollTo } from "@/lib/utils";

export function HeroSection() {
  return (
    <section
      id="hero"
      aria-label="Introduction"
      className="relative flex min-h-screen items-center overflow-hidden bg-[#F8FAFC]/35 pt-20"
    >
      <div aria-hidden="true" className="absolute inset-0 bg-grid-pattern opacity-60" />
      <div aria-hidden="true" className="absolute left-[12%] top-32 h-28 w-28 rounded-full border border-blue-300/25" />
      <div aria-hidden="true" className="absolute bottom-24 right-[8%] h-16 w-16 rounded-full bg-blue-200/25 blur-sm" />

      <div className="relative mx-auto w-full max-w-7xl px-5 py-16 sm:px-8 lg:px-12 lg:py-24">
        <div className="grid items-center gap-16 lg:grid-cols-[1.08fr_.92fr] lg:gap-20">
          <div className="order-2 flex flex-col items-start lg:order-1">
            <FadeUp delay={0.12}>
              <p className="mb-3 text-sm font-semibold uppercase tracking-[0.2em] text-blue-600">
                Software Engineering Student
              </p>
              <h1 className="max-w-3xl text-4xl font-black leading-[1.06] tracking-[-0.04em] text-slate-950 sm:text-5xl lg:text-6xl xl:text-7xl">
                Hello, I&apos;m
                <span className="block bg-gradient-to-r from-blue-700 via-blue-600 to-sky-400 bg-clip-text text-transparent">
                  Phattharaphon
                  <br />
                  Tangtaeng
                </span>
              </h1>
            </FadeUp>

            <FadeUp delay={0.2}>
              <div className="mt-5 space-y-3">
                <p className="text-base font-semibold text-blue-600 sm:text-lg">
                  Software Tester Intern
                </p>
                <p className="max-w-xl text-base leading-7 text-slate-600">
                  นักศึกษาวิศวกรรมซอฟต์แวร์ที่มีความสนใจและมุ่งมั่นในด้าน Software Testing และ Quality Assurance (QA)
                  สนใจการออกแบบ Test Case การทดสอบการทำงานของระบบ (Functional Testing) และการพัฒนาคุณภาพของซอฟต์แวร์ให้ดียิ่งขึ้น
                </p>
              </div>
            </FadeUp>

            <FadeUp delay={0.36}>
              <div className="mt-9 flex flex-wrap gap-3">
                <a
                  href="/resume.pdf"
                  download
                  id="hero-download-cv"
                  className="group inline-flex items-center gap-2 rounded-full bg-gradient-to-r from-blue-700 to-blue-500 px-6 py-3.5 text-sm font-semibold text-white shadow-lg shadow-blue-500/25 transition-all duration-200 hover:-translate-y-0.5 hover:shadow-xl hover:shadow-blue-500/30 focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-blue-600"
                >
                  <Download size={17} aria-hidden="true" />
                  Download CV
                </a>
                <button
                  id="hero-contact-me"
                  onClick={() => smoothScrollTo("#contact")}
                  className="group inline-flex cursor-pointer items-center gap-2 rounded-full border border-slate-300 bg-white/80 px-6 py-3.5 text-sm font-semibold text-slate-800 shadow-sm backdrop-blur-md transition-all duration-200 hover:-translate-y-0.5 hover:border-blue-300 hover:text-blue-700 hover:shadow-md focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-blue-600"
                >
                  <Mail size={17} aria-hidden="true" />
                  Contact Me
                  <ArrowRight size={15} className="transition-transform group-hover:translate-x-1" aria-hidden="true" />
                </button>
              </div>
            </FadeUp>
          </div>

          <div className="order-1 flex justify-center lg:order-2 lg:justify-end">
            <SlideIn direction="right" delay={0.15}>
              <div className="relative mx-auto w-[min(78vw,360px)] sm:w-[380px] lg:w-[410px]">
                  <div aria-hidden="true" className="absolute -inset-5 rotate-3 rounded-[2.5rem] border border-blue-200/70 bg-gradient-to-br from-blue-100/60 to-white/20" />
                  <div aria-hidden="true" className="absolute -inset-1 -rotate-3 rounded-[2.25rem] bg-gradient-to-br from-blue-600/20 via-sky-300/10 to-indigo-500/20 blur-xl" />

                  <div className="relative aspect-[4/4.7] overflow-hidden rounded-[2rem] border-[6px] border-white bg-slate-100 shadow-2xl shadow-blue-900/15">
                    <Image
                      src="/profile.jpg"
                      alt="Phattharaphon Tangtaeng"
                      fill
                      sizes="(max-width: 640px) 78vw, (max-width: 1024px) 380px, 410px"
                      className="object-cover"
                      priority
                    />
                    <div className="absolute inset-x-0 bottom-0 h-36 bg-gradient-to-t from-slate-950/55 to-transparent" />
                    <div className="absolute bottom-5 left-5 text-white">
                      <p className="text-xs font-medium uppercase tracking-[0.18em] text-blue-100">Software Engineering Student</p>
                      <p className="mt-1 text-lg font-bold">Software Tester Intern</p>
                    </div>
                  </div>

              </div>
            </SlideIn>
          </div>
        </div>
      </div>
    </section>
  );
}
