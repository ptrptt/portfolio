"use client";

import {
  TestTube,
  Bot,
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
  Bot,
  Wrench,
  Code2,
  BookOpen,
  Users,
};

const cardColors = [
  {
    bg: "from-sky-50 to-blue-100",
    border: "border-blue-200",
    icon: "bg-blue-200 text-blue-800",
    pill: "bg-blue-50 text-blue-800 border-blue-200",
    accent: "from-sky-500 to-blue-600",
  },
  {
    bg: "from-violet-50 to-purple-100",
    border: "border-purple-200",
    icon: "bg-purple-200 text-purple-800",
    pill: "bg-purple-50 text-purple-800 border-purple-200",
    accent: "from-violet-500 to-purple-600",
  },
  {
    bg: "from-emerald-50 to-green-100",
    border: "border-green-200",
    icon: "bg-green-200 text-green-800",
    pill: "bg-green-50 text-green-800 border-green-200",
    accent: "from-emerald-500 to-green-600",
  },
  {
    bg: "from-amber-50 to-orange-100",
    border: "border-orange-200",
    icon: "bg-orange-200 text-orange-800",
    pill: "bg-orange-50 text-orange-800 border-orange-200",
    accent: "from-amber-500 to-orange-600",
  },
  {
    bg: "from-cyan-50 to-teal-100",
    border: "border-teal-200",
    icon: "bg-teal-200 text-teal-800",
    pill: "bg-teal-50 text-teal-800 border-teal-200",
    accent: "from-cyan-500 to-teal-600",
  },
  {
    bg: "from-rose-50 to-pink-100",
    border: "border-pink-200",
    icon: "bg-pink-200 text-pink-800",
    pill: "bg-pink-50 text-pink-800 border-pink-200",
    accent: "from-rose-500 to-pink-600",
  },
];

export function SkillsSection() {
  return (
    <Section id="skills" className="bg-white/80">
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
