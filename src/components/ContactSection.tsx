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

export function ContactSection() {
  return (
    <Section id="contact" className="bg-white border-t border-slate-100 relative">
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
                className="group flex items-center gap-4 p-5 rounded-2xl bg-white border border-slate-200/80 shadow-xs hover:shadow-lg hover:shadow-blue-500/8 hover:border-blue-300 hover:-translate-y-0.5 transition-all duration-200 focus:outline-none focus-visible:ring-2 focus-visible:ring-[#2563EB]"
                aria-label={`Contact via ${item.label}: ${item.value}`}
              >
                <div
                  className="w-11 h-11 rounded-xl bg-blue-50 text-[#2563EB] border border-blue-100 flex items-center justify-center shrink-0 group-hover:bg-[#2563EB] group-hover:text-white transition-colors duration-200"
                  aria-hidden="true"
                >
                  <Icon size={20} />
                </div>
                <div className="min-w-0">
                  <p className="text-xs font-semibold text-slate-400 mb-0.5 uppercase tracking-wider">
                    {item.label}
                  </p>
                  <p className="text-sm font-bold text-slate-800 truncate group-hover:text-[#2563EB] transition-colors duration-200">
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
            className="group inline-flex items-center gap-3 px-10 py-4 rounded-2xl bg-gradient-to-r from-[#2563EB] to-[#60A5FA] text-white font-bold text-base shadow-md shadow-blue-500/25 hover:shadow-xl hover:shadow-blue-500/35 hover:scale-[1.02] active:scale-[0.98] transition-all duration-300 focus:outline-none focus-visible:ring-2 focus-visible:ring-[#2563EB]"
            aria-label="Send me a message via email"
          >
            <Send
              size={19}
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
        <div className="absolute bottom-0 left-1/2 -translate-x-1/2 w-[600px] h-[280px] bg-gradient-to-t from-blue-50/50 to-transparent rounded-full blur-3xl" />
      </div>
    </Section>
  );
}
