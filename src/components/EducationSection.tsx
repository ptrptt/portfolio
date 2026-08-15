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

      <div className="relative">
        {/* Timeline line */}
        <div
          aria-hidden="true"
          className="absolute left-6 lg:left-1/2 top-4 bottom-4 w-0.5 bg-gradient-to-b from-[#2563EB] via-[#60A5FA]/60 to-slate-200 -translate-x-1/2"
        />

        <div className="space-y-12">
          {education.map((edu, index) => {
            const isLeft = index % 2 === 0;

            return (
              <ScaleIn key={edu.id} delay={index * 0.15}>
                <div
                  className={`relative flex flex-col lg:flex-row gap-8 ${
                    isLeft ? "lg:flex-row" : "lg:flex-row-reverse"
                  }`}
                >
                  {/* Timeline nodes */}
                  <div
                    aria-hidden="true"
                    className="absolute left-6 lg:left-1/2 top-6 -translate-x-1/2 w-5 h-5 rounded-full bg-[#2563EB] border-4 border-white shadow-md shadow-blue-500/30 z-10"
                  />

                  {/* Spacer */}
                  <div className="hidden lg:block lg:w-1/2" />

                  {/* Card */}
                  <div className="ml-14 lg:ml-0 lg:w-1/2 lg:px-8">
                    <article
                      className="group relative bg-white rounded-2xl p-6 shadow-xs border border-slate-200/80 hover:shadow-xl hover:shadow-blue-500/10 hover:border-blue-200 transition-all duration-300"
                      aria-label={`${edu.institution} education`}
                    >
                      {/* Header */}
                      <div className="flex items-start gap-4">
                        {/* Logos */}
                        <div className="w-14 h-14 rounded-xl bg-slate-50 border border-slate-100 p-2 shrink-0 flex items-center justify-center overflow-hidden">
                          <Image
                            src={edu.logo}
                            alt={edu.institution}
                            width={56}
                            height={56}
                            className="object-contain max-h-full"
                          />
                        </div>

                        <div className="flex-1 min-w-0">
                          <div className="flex items-center gap-2 flex-wrap mb-1.5">
                            {/* Period badge with Calendar icon */}
                            <span className="inline-flex items-center gap-1.5 text-xs font-semibold px-2.5 py-0.5 rounded-full bg-blue-50 text-[#2563EB] border border-blue-100/80">
                              <Calendar size={12} className="text-[#2563EB] shrink-0" aria-hidden="true" />
                              {edu.period}
                            </span>

                            {/* Current status emerald badge */}
                            {edu.current && (
                              <span className="inline-flex items-center gap-1.5 text-xs font-semibold px-2.5 py-0.5 rounded-full bg-emerald-50 text-emerald-600 border border-emerald-200/70">
                                <span className="w-1.5 h-1.5 rounded-full bg-emerald-500 animate-pulse" aria-hidden="true" />
                                Current
                              </span>
                            )}
                          </div>

                          <h3 className="text-base font-bold text-gray-900 leading-snug group-hover:text-[#2563EB] transition-colors">
                            {edu.institution}
                          </h3>
                        </div>
                      </div>

                      {/* Details */}
                      <div className="mt-4 space-y-2.5 sm:pl-[72px]">
                        <div className="flex items-start gap-2.5 text-sm text-slate-700">
                          <BookOpen
                            size={16}
                            className="text-[#2563EB] shrink-0 mt-0.5"
                            aria-hidden="true"
                          />
                          <span className="font-medium leading-snug">{edu.degree}</span>
                        </div>

                        {edu.field && (
                          <div className="flex items-start gap-2.5 text-sm text-slate-500 pl-6">
                            <span className="w-1.5 h-1.5 rounded-full bg-blue-300 mt-2 shrink-0" aria-hidden="true" />
                            <span className="leading-snug">{edu.field}</span>
                          </div>
                        )}

                        <div className="pt-1">
                          <div className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full bg-slate-50 border border-slate-200/80 text-xs font-semibold text-slate-700 shadow-xs">
                            <Award
                              size={14}
                              className="text-amber-500 shrink-0"
                              aria-hidden="true"
                            />
                            <span>
                              GPA:{" "}
                              <span className="text-[#2563EB] font-bold">
                                {edu.gpa}
                              </span>
                            </span>
                          </div>
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