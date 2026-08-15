"use client";

import {
  TestTube,
  Wrench,
  Code2,
  BookOpen,
  Users,
  Check,
  LucideIcon,
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
                {/* Top accent bar */}
                <div
                  aria-hidden="true"
                  className="absolute top-0 left-0 right-0 h-1 bg-gradient-to-r from-[#2563EB] to-[#60A5FA]"
                />

                <div>
                  {/* Icon header + Title */}
                  <div className="flex items-center gap-3 mb-5">
                    <div
                      className="w-11 h-11 rounded-xl bg-blue-50 text-[#2563EB] border border-blue-100 flex items-center justify-center shrink-0 group-hover:bg-[#2563EB] group-hover:text-white transition-colors duration-300"
                      aria-hidden="true"
                    >
                      <Icon size={20} />
                    </div>
                    <h3 className="text-base font-bold text-gray-900">
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
                        <span className="inline-flex items-center gap-1.5 px-3 py-1 rounded-lg text-xs font-semibold bg-slate-50 text-slate-700 border border-slate-200/80 transition-all duration-200 hover:bg-blue-50 hover:text-[#2563EB] hover:border-blue-200 hover:scale-[1.02]">
                          <Check className="w-3.5 h-3.5 text-[#2563EB] shrink-0" />
                          <span>{skill}</span>
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
