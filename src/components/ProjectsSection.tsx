"use client";

import { ArrowUpRight } from "lucide-react";
import { motion } from "framer-motion";
import { Section, SectionHeader } from "@/components/ui/SectionHeader";
import { FadeUp, ScaleIn } from "@/components/ui/Animations";
import { projects } from "@/data";

export function ProjectsSection() {
  return (
    <Section id="projects" className="bg-[#fff7f7]/50">
      <FadeUp>
        <SectionHeader
          title="Projects"
          subtitle="A selection of work I've built and tested"
        />
      </FadeUp>

      <div className="grid grid-cols-1 lg:grid-cols-2 gap-6 lg:gap-8 items-stretch">
        {projects.map((project, index) => (
          <ScaleIn key={project.id} delay={index * 0.1} className="h-full min-w-0">
            <motion.article
              whileHover={{ y: -6 }}
              transition={{ type: "spring", stiffness: 300, damping: 20 }}
              className="group relative h-full flex flex-col bg-white rounded-[1.75rem] border border-red-100/80 p-6 sm:p-8 shadow-sm shadow-red-100/50 overflow-hidden hover:shadow-xl hover:shadow-red-100 hover:border-red-200 transition-shadow duration-300"
              aria-label={`${project.title} project`}
            >
              <div className="relative flex flex-1 flex-col min-w-0">
                <h3 className="text-xl sm:text-2xl font-bold text-[#7f1d1d] mb-1">
                  {project.title}
                </h3>
                <p className="text-sm sm:text-base font-medium text-red-700 mb-5">
                  {project.subtitle}
                </p>
                {project.status && (
                  <p className="mb-4 text-sm font-semibold text-amber-700">
                    สถานะ: {project.status}
                  </p>
                )}
                {project.lineOfficialAccount && (
                  <p className="mb-5 text-sm text-slate-600">
                    <span className="font-semibold">LINE Official Account:</span>{" "}
                    <span className="font-mono">{project.lineOfficialAccount}</span>
                  </p>
                )}
                <p className="text-sm sm:text-base text-slate-600 leading-7 mb-6">
                  {project.description}
                </p>
                {project.role && (
                  <p className="mb-5 text-sm sm:text-base font-semibold text-[#7f1d1d]">
                    Role: {project.role}
                  </p>
                )}

                <ul className="space-y-3 rounded-2xl bg-red-50/90 p-5 sm:p-6 mb-6 text-sm sm:text-base text-slate-600 leading-7">
                  {project.highlights.map((highlight) => (
                    <li key={highlight} className="flex gap-3">
                      <span aria-hidden="true" className="mt-2.5 h-1.5 w-1.5 shrink-0 rounded-full bg-red-300" />
                      <span>{highlight}</span>
                    </li>
                  ))}
                </ul>

                <div className="mt-auto pt-2">
                <div className="flex flex-wrap gap-2" aria-label="Technologies used">
                  {project.technologies.map((tech) => (
                    <span key={tech} className="rounded-full border border-slate-200 bg-white px-3 py-1.5 text-xs text-slate-600 shadow-xs">
                      {tech}
                    </span>
                  ))}
                </div>

                {(project.testCaseUrl || project.demoUrl || project.githubUrl) && (
                <div className="flex justify-center mt-6 pt-5 border-t border-red-100">
                  <a
                    href={project.testCaseUrl || project.demoUrl || project.githubUrl}
                    target="_blank"
                    rel="noopener noreferrer"
                    id={`project-details-${project.id}`}
                    className="inline-flex min-w-40 items-center justify-center gap-2 rounded-xl bg-gradient-to-r from-[#991b1b] to-[#dc2626] px-6 py-3 text-sm font-bold text-white shadow-sm shadow-red-200 transition-all duration-200 hover:-translate-y-0.5 hover:shadow-md hover:shadow-red-200 focus:outline-none focus-visible:ring-2 focus-visible:ring-[#dc2626] focus-visible:ring-offset-2"
                    aria-label={`ดูรายละเอียด ${project.title}`}
                  >
                    ดูรายละเอียด
                    <ArrowUpRight size={17} aria-hidden="true" />
                  </a>
                </div>
                )}
                </div>
              </div>
            </motion.article>
          </ScaleIn>
        ))}
      </div>
    </Section>
  );
}
