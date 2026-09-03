"use client";

import { ArrowUpRight } from "lucide-react";
import { motion } from "framer-motion";
import { Section, SectionHeader } from "@/components/ui/SectionHeader";
import { FadeUp, ScaleIn } from "@/components/ui/Animations";
import { projects } from "@/data";

export function ProjectsSection() {
  return (
    <Section id="projects" className="bg-[#F3FCFB]/50">
      <FadeUp>
        <SectionHeader
          title="Projects"
          subtitle="A selection of work I've built and tested"
        />
      </FadeUp>

      <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 items-start">
        {projects.map((project, index) => (
          <ScaleIn key={project.id} delay={index * 0.1}>
            <motion.article
              whileHover={{ y: -6 }}
              transition={{ type: "spring", stiffness: 300, damping: 20 }}
              className="group relative bg-white rounded-[1.75rem] border border-sky-100/80 p-6 sm:p-8 shadow-sm shadow-sky-100/50 overflow-hidden hover:shadow-xl hover:shadow-sky-100 hover:border-sky-200 transition-shadow duration-300"
              aria-label={`${project.title} project`}
            >
              <div className="relative">
                <span className="inline-flex rounded-full bg-sky-50 px-3.5 py-1.5 text-xs font-semibold text-sky-600 mb-6">
                  {project.category}
                </span>

                <h3 className="text-xl sm:text-2xl font-bold text-[#073b83] mb-1">
                  {project.title}
                </h3>
                <p className="text-sm sm:text-base font-medium text-sky-500 mb-5">
                  {project.subtitle}
                </p>
                <p className="text-sm sm:text-base text-slate-600 leading-7 mb-6">
                  {project.description}
                </p>

                <ul className="space-y-3 rounded-2xl bg-sky-50/90 p-5 sm:p-6 mb-6 text-sm sm:text-base text-slate-600 leading-7">
                  {project.highlights.map((highlight) => (
                    <li key={highlight} className="flex gap-3">
                      <span aria-hidden="true" className="mt-2.5 h-1.5 w-1.5 shrink-0 rounded-full bg-sky-300" />
                      <span>{highlight}</span>
                    </li>
                  ))}
                </ul>

                <div className="flex flex-wrap gap-2 mb-7" aria-label="Technologies used">
                  {project.technologies.map((tech) => (
                    <span key={tech} className="rounded-full border border-slate-200 bg-white px-3 py-1.5 text-xs text-slate-600 shadow-xs">
                      {tech}
                    </span>
                  ))}
                </div>

                <div className="flex justify-center">
                  <a
                    href={project.testCaseUrl || project.demoUrl || project.githubUrl}
                    target="_blank"
                    rel="noopener noreferrer"
                    id={`project-details-${project.id}`}
                    className="inline-flex min-w-40 items-center justify-center gap-2 rounded-xl bg-gradient-to-r from-[#087F78] to-[#40E0D0] px-6 py-3 text-sm font-bold text-white shadow-sm shadow-teal-200 transition-all duration-200 hover:-translate-y-0.5 hover:shadow-md hover:shadow-teal-200 focus:outline-none focus-visible:ring-2 focus-visible:ring-[#40E0D0] focus-visible:ring-offset-2"
                    aria-label={`ดูรายละเอียด ${project.title}`}
                  >
                    ดูรายละเอียด
                    <ArrowUpRight size={17} aria-hidden="true" />
                  </a>
                </div>
              </div>
            </motion.article>
          </ScaleIn>
        ))}
      </div>
    </Section>
  );
}
