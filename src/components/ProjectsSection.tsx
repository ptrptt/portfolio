"use client";

import { GitBranch, ExternalLink, ShieldCheck } from "lucide-react";
import { motion } from "framer-motion";
import { Section, SectionHeader } from "@/components/ui/SectionHeader";
import { FadeUp, ScaleIn } from "@/components/ui/Animations";
import { TechBadge } from "@/components/ui/SectionHeader";
import { projects } from "@/data";

export function ProjectsSection() {
  return (
    <Section id="projects" className="bg-[#F8FAFC]">
      <FadeUp>
        <SectionHeader
          title="Projects"
          subtitle="A selection of work I've built and tested"
        />
      </FadeUp>

      <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
        {projects.map((project, index) => (
          <ScaleIn key={project.id} delay={index * 0.1}>
            <motion.article
              whileHover={{ y: -6 }}
              transition={{ type: "spring", stiffness: 300, damping: 20 }}
              className="group relative bg-white rounded-2xl border border-slate-200/80 shadow-xs overflow-hidden hover:shadow-xl hover:shadow-blue-500/10 hover:border-blue-200 transition-all duration-300 flex flex-col justify-between h-full"
              aria-label={`${project.title} project`}
            >
              {/* Header preview */}
              <div
                className={`relative h-44 bg-gradient-to-br ${project.gradient} flex items-center justify-center overflow-hidden p-6`}
                aria-label={`${project.title} project image placeholder`}
              >
                {/* Decorative pattern */}
                <div
                  aria-hidden="true"
                  className="absolute inset-0 opacity-20 pointer-events-none"
                >
                  <div className="absolute top-0 right-0 w-32 h-32 rounded-full bg-white translate-x-12 -translate-y-12" />
                  <div className="absolute bottom-0 left-0 w-24 h-24 rounded-full bg-white -translate-x-8 translate-y-8" />
                </div>

                {/* Center glass icon badge */}
                <div className="relative text-center">
                  <div className="w-14 h-14 rounded-2xl bg-white/20 border border-white/30 flex items-center justify-center mx-auto mb-2 backdrop-blur-md shadow-xs group-hover:scale-110 transition-transform duration-300">
                    <ShieldCheck
                      size={26}
                      className="text-white drop-shadow-xs"
                      aria-hidden="true"
                    />
                  </div>
                  <p className="text-white/90 text-xs font-semibold tracking-wide">
                    Project Preview
                  </p>
                </div>

                {/* Category subtitle pill badge */}
                <div className="absolute top-4 left-4">
                  <span className="px-3 py-1 rounded-full bg-white/20 backdrop-blur-md border border-white/30 text-white text-xs font-semibold shadow-xs">
                    {project.subtitle}
                  </span>
                </div>
              </div>

              {/* Content */}
              <div className="p-6 flex flex-col flex-1 justify-between">
                <div>
                  <h3 className="text-lg font-bold text-gray-900 mb-2 group-hover:text-[#2563EB] transition-colors duration-200">
                    {project.title}
                  </h3>
                  <p className="text-sm text-gray-600 leading-relaxed mb-4">
                    {project.description}
                  </p>

                  {/* Tech badges */}
                  <div
                    className="flex flex-wrap gap-2 mb-6"
                    aria-label="Technologies used"
                  >
                    {project.technologies.map((tech) => (
                      <TechBadge key={tech} label={tech} />
                    ))}
                  </div>
                </div>

                {/* Action buttons */}
                <div className="flex gap-3 pt-2">
                  <a
                    href={project.githubUrl}
                    target="_blank"
                    rel="noopener noreferrer"
                    id={`project-github-${project.id}`}
                    className="flex-1 inline-flex items-center justify-center gap-2 px-4 py-2.5 rounded-xl border border-slate-200/80 bg-white text-sm font-semibold text-slate-700 hover:bg-slate-50 hover:border-slate-300 hover:text-slate-900 hover:scale-[1.02] active:scale-[0.98] transition-all duration-200 focus:outline-none focus-visible:ring-2 focus-visible:ring-[#2563EB] shadow-xs"
                    aria-label={`View ${project.title} on GitHub`}
                  >
                    <GitBranch size={15} aria-hidden="true" />
                    GitHub
                  </a>
                  <a
                    href={project.demoUrl}
                    target="_blank"
                    rel="noopener noreferrer"
                    id={`project-demo-${project.id}`}
                    className="flex-1 inline-flex items-center justify-center gap-2 px-4 py-2.5 rounded-xl bg-gradient-to-r from-[#2563EB] to-[#60A5FA] text-sm font-semibold text-white hover:opacity-95 hover:shadow-md hover:shadow-blue-500/20 hover:scale-[1.02] active:scale-[0.98] transition-all duration-200 focus:outline-none focus-visible:ring-2 focus-visible:ring-[#2563EB] shadow-xs"
                    aria-label={`View live demo of ${project.title}`}
                  >
                    <ExternalLink size={15} aria-hidden="true" />
                    Live Demo
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
