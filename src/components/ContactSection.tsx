"use client";

import {
  Mail,
  GitBranch,
  Link2,
  Phone,
  Send,
  LucideIcon,
} from "lucide-react";
import { Section, SectionHeader } from "@/components/ui/SectionHeader";
import { FadeUp, ScaleIn } from "@/components/ui/Animations";
import { contactItems } from "@/data";

const iconMap: Record<string, LucideIcon> = {
  Mail,
  Github: GitBranch,
  Linkedin: Link2,
  Phone,
};

const contactColors = [
  {
    bg: "from-blue-50 to-indigo-50",
    border: "border-blue-100",
    icon: "bg-blue-100 text-[#2563EB]",
    hover: "hover:border-blue-200 hover:shadow-blue-100",
  },
  {
    bg: "from-gray-50 to-slate-50",
    border: "border-slate-100",
    icon: "bg-slate-100 text-slate-700",
    hover: "hover:border-slate-200 hover:shadow-slate-100",
  },
  {
    bg: "from-sky-50 to-cyan-50",
    border: "border-sky-100",
    icon: "bg-sky-100 text-sky-600",
    hover: "hover:border-sky-200 hover:shadow-sky-100",
  },
  {
    bg: "from-emerald-50 to-teal-50",
    border: "border-emerald-100",
    icon: "bg-emerald-100 text-emerald-600",
    hover: "hover:border-emerald-200 hover:shadow-emerald-100",
  },
];

export function ContactSection() {
  return (
    <Section id="contact" className="bg-white/80 relative">
      <FadeUp>
        <SectionHeader
          title="Contact"
          subtitle="Let's connect — I'm open to internship opportunities"
        />
      </FadeUp>

      {/* Contact cards grid */}
      <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 max-w-2xl mx-auto mb-10">
        {contactItems.map((item, index) => {
          const Icon = iconMap[item.icon] ?? Mail;
          const color = contactColors[index % contactColors.length];

          return (
            <ScaleIn key={item.id} delay={index * 0.1}>
              <a
                href={item.href}
                target={item.href.startsWith("http") ? "_blank" : undefined}
                rel={
                  item.href.startsWith("http")
                    ? "noopener noreferrer"
                    : undefined
                }
                id={`contact-${item.id}`}
                className={`group flex items-center gap-4 p-5 rounded-2xl bg-gradient-to-br ${color.bg} border ${color.border} ${color.hover} hover:shadow-md hover:-translate-y-0.5 transition-all duration-200 focus:outline-none focus-visible:ring-2 focus-visible:ring-[#2563EB]`}
                aria-label={`Contact via ${item.label}: ${item.value}`}
              >
                <div
                  className={`w-11 h-11 rounded-xl ${color.icon} flex items-center justify-center shrink-0`}
                  aria-hidden="true"
                >
                  <Icon size={20} />
                </div>
                <div className="min-w-0">
                  <p className="text-xs font-medium text-gray-400 mb-0.5">
                    {item.label}
                  </p>
                  <p className="text-sm font-semibold text-gray-800 truncate group-hover:text-[#2563EB] transition-colors duration-200">
                    {item.value}
                  </p>
                </div>
              </a>
            </ScaleIn>
          );
        })}
      </div>

      {/* Send Message CTA */}
      <FadeUp delay={0.4}>
        <div className="flex justify-center">
          <a
            href="mailto:tphattharaphon@gmail.com"
            id="contact-send-message"
            className="group inline-flex items-center gap-3 px-10 py-4 rounded-2xl bg-gradient-to-r from-[#2563EB] to-[#60A5FA] text-white font-semibold text-base shadow-lg shadow-blue-200 hover:shadow-xl hover:shadow-blue-300 hover:scale-105 transition-all duration-300 focus:outline-none focus-visible:ring-2 focus-visible:ring-[#2563EB]"
            aria-label="Send me a message via email"
          >
            <Send
              size={20}
              className="group-hover:rotate-12 transition-transform duration-200"
              aria-hidden="true"
            />
            Send Message
          </a>
        </div>
      </FadeUp>

      {/* Decorative gradient blob */}
      <div
        aria-hidden="true"
        className="pointer-events-none absolute inset-0 overflow-hidden -z-10"
      >
        <div className="absolute bottom-0 left-1/2 -translate-x-1/2 w-[600px] h-[300px] bg-gradient-to-t from-blue-50/60 to-transparent rounded-full blur-3xl" />
      </div>
    </Section>
  );
}
