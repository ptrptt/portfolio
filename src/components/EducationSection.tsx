"use client";

import Image from "next/image";
import { Award, BookOpen, BriefcaseBusiness, Calendar, GraduationCap } from "lucide-react";
import { education } from "@/data";
import { FadeUp, ScaleIn } from "@/components/ui/Animations";
import { Section, SectionHeader } from "@/components/ui/SectionHeader";

export function EducationSection() {
  return (
    <Section id="education" className="bg-[#F3FCFB]/50">
      <FadeUp>
        <SectionHeader
          title="Education"
          subtitle="My academic journey and qualifications"
        />
      </FadeUp>

      <div className="mx-auto max-w-5xl space-y-6">
        {education.map((edu, index) => (
          <ScaleIn key={edu.id} delay={index * 0.12}>
            <article className="group overflow-hidden rounded-3xl border border-slate-200/80 bg-white/90 shadow-sm shadow-slate-200/40 transition-all duration-300 hover:-translate-y-1 hover:border-[#9AF1E8] hover:shadow-xl hover:shadow-[#40E0D0]/12">
              <div className="h-1.5 bg-gradient-to-r from-[#087F78] via-[#40E0D0] to-[#9AF1E8]" />

              <div className="p-6 sm:p-8">
                <div className="flex flex-col gap-6 sm:flex-row sm:items-start">
                  <div className="flex h-20 w-20 shrink-0 items-center justify-center overflow-hidden rounded-2xl border border-slate-200 bg-slate-50 p-3 shadow-sm">
                    <Image
                      src={edu.logo}
                      alt={edu.institution}
                      width={80}
                      height={80}
                      className="max-h-full w-auto object-contain"
                    />
                  </div>

                  <div className="min-w-0 flex-1">
                    <div className="flex flex-col gap-4 lg:flex-row lg:items-start lg:justify-between">
                      <div>
                        <div className="mb-2 flex flex-wrap items-center gap-2">
                          <span className="inline-flex items-center gap-1.5 rounded-full bg-[#E8FBF9] px-3 py-1 text-xs font-semibold text-[#087F78] ring-1 ring-inset ring-[#C8F3EF]">
                            <GraduationCap size={13} aria-hidden="true" />
                            Education
                          </span>
                          {edu.current && (
                            <span className="inline-flex items-center gap-1.5 rounded-full bg-emerald-50 px-3 py-1 text-xs font-semibold text-emerald-700 ring-1 ring-inset ring-emerald-200">
                              <span className="h-1.5 w-1.5 rounded-full bg-emerald-500" aria-hidden="true" />
                              Current
                            </span>
                          )}
                        </div>
                        <h3 className="text-xl font-bold leading-snug text-slate-900 transition-colors group-hover:text-[#087F78] sm:text-2xl">
                          {edu.institution}
                        </h3>
                      </div>

                      <div className="flex shrink-0 flex-wrap gap-2">
                        <span className="inline-flex items-center gap-1.5 rounded-xl border border-slate-200 bg-slate-50 px-3 py-2 text-xs font-semibold text-slate-600">
                          <Calendar size={14} className="text-[#087F78]" aria-hidden="true" />
                          {edu.period}
                        </span>
                        <span className="inline-flex items-center gap-1.5 rounded-xl border border-amber-200/70 bg-amber-50 px-3 py-2 text-xs font-semibold text-slate-700">
                          <Award size={14} className="text-amber-500" aria-hidden="true" />
                          GPA <strong className="text-[#087F78]">{edu.gpa}</strong>
                        </span>
                      </div>
                    </div>

                    <div className="mt-5 flex items-start gap-3 rounded-2xl bg-slate-50/80 p-4 ring-1 ring-inset ring-slate-100">
                      <BookOpen size={18} className="mt-0.5 shrink-0 text-[#087F78]" aria-hidden="true" />
                      <div>
                        <p className="font-semibold text-slate-800">{edu.degree}</p>
                        {edu.field && <p className="mt-1 text-sm text-slate-500">{edu.field}</p>}
                      </div>
                    </div>
                  </div>
                </div>

                {edu.internship && (
                  <div className="mt-7 rounded-2xl border border-[#C8F3EF] bg-gradient-to-br from-[#E8FBF9]/80 to-[#F3FCFB]/40 p-4 sm:ml-[104px]">
                    <div className="space-y-5">
                      <div className="flex items-start gap-3">
                        <BriefcaseBusiness
                          size={18}
                          className="mt-0.5 shrink-0 text-[#087F78]"
                          aria-hidden="true"
                        />
                        <div>
                          <p className="block text-sm font-bold leading-relaxed text-slate-900">
                            {edu.internship.organization}
                          </p>
                          <p className="mt-1 block text-sm font-medium leading-relaxed text-[#087F78]">
                            {edu.internship.department}
                          </p>
                        </div>
                      </div>

                      <p className="pl-[30px] text-sm leading-7 text-slate-600">
                        {edu.internship.description}
                      </p>
                    </div>
                  </div>
                )}
              </div>
            </article>
          </ScaleIn>
        ))}
      </div>
    </Section>
  );
}
