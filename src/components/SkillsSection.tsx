"use client";

import {
  TestTube,
  Wrench,
  Code2,
  BookOpen,
  Users,
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

const cardColors = [
  {
    bg: "from-blue-50 to-indigo-50",
    border: "border-blue-100",
    icon: "bg-blue-100 text-[#2563EB]",
    pill: "bg-blue-50 text-[#2563EB] border-blue-100",
    accent: "from-[#2563EB] to-[#60A5FA]",
  },
  {
    bg: "from-violet-50 to-purple-50",
    border: "border-violet-100",
    icon: "bg-violet-100 text-violet-600",
    pill: "bg-violet-50 text-violet-600 border-violet-100",
    accent: "from-violet-500 to-purple-500",
  },
  {
    bg: "from-emerald-50 to-teal-50",
    border: "border-emerald-100",
    icon: "bg-emerald-100 text-emerald-600",
    pill: "bg-emerald-50 text-emerald-700 border-emerald-100",
    accent: "from-emerald-500 to-teal-500",
  },
  {
    bg: "from-amber-50 to-orange-50",
    border: "border-amber-100",
    icon: "bg-amber-100 text-amber-600",
    pill: "bg-amber-50 text-amber-700 border-amber-100",
    accent: "from-amber-500 to-orange-500",
  },
  {
    bg: "from-rose-50 to-pink-50",
    border: "border-rose-100",
    icon: "bg-rose-100 text-rose-600",
    pill: "bg-rose-50 text-rose-700 border-rose-100",
    accent: "from-rose-500 to-pink-500",
  },
];

export function SkillsSection() {
  return (
    <Section id="skills" className="bg-white">
      <FadeUp>
        <SectionHeader
          title="Skills"
          subtitle="Technologies and tools I work with"
        />
      </FadeUp>

      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
        {skillCategories.map((category, index) => {
          const Icon = iconMap[category.icon] ?? BookOpen;
          const color = cardColors[index % cardColors.length];

          return (
            <ScaleIn key={category.title} delay={index * 0.1}>
              <article
                className={`group relative bg-gradient-to-br ${color.bg} rounded-2xl p-6 border ${color.border} hover:shadow-lg hover:-translate-y-1 transition-all duration-300 overflow-hidden h-full`}
                aria-label={`${category.title} skills`}
              >
                {/* Top accent gradient bar */}
                <div
                  aria-hidden="true"
                  className={`absolute top-0 left-0 right-0 h-1 bg-gradient-to-r ${color.accent} rounded-t-2xl`}
                />

                {/* Icon + Title */}
                <div className="flex items-center gap-3 mb-5">
                  <div
                    className={`w-10 h-10 rounded-xl ${color.icon} flex items-center justify-center shrink-0`}
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
                      <span
                        className={`inline-flex items-center px-3 py-1 rounded-full text-xs font-medium border ${color.pill} transition-transform duration-200 group-hover:scale-[1.02]`}
                      >
                        {skill}
                      </span>
                    </li>
                  ))}
                </ul>
              </article>
            </ScaleIn>
          );
        })}
      </div>
    </Section>
  );
}
