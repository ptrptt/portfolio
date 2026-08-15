"use client";

import { ReactNode } from "react";
import { cn } from "@/lib/utils";

interface SectionHeaderProps {
  title: string;
  subtitle?: string;
  className?: string;
}

export function SectionHeader({
  title,
  subtitle,
  className,
}: SectionHeaderProps) {
  return (
    <div className={cn("text-center mb-14", className)}>
      <h2 className="text-3xl sm:text-4xl font-extrabold text-slate-900 tracking-tight mb-4">
        {title}
      </h2>
      <div className="mx-auto h-1 w-14 rounded-full bg-gradient-to-r from-[#2563EB] to-[#60A5FA]" />
      {subtitle && (
        <p className="mt-4 text-slate-500 text-base sm:text-lg max-w-xl mx-auto leading-relaxed">
          {subtitle}
        </p>
      )}
    </div>
  );
}

interface SectionProps {
  id: string;
  children: ReactNode;
  className?: string;
}

export function Section({ id, children, className }: SectionProps) {
  return (
    <section
      id={id}
      className={cn("py-20 lg:py-24 px-4 sm:px-6 lg:px-8", className)}
    >
      <div className="max-w-6xl mx-auto">{children}</div>
    </section>
  );
}

interface BadgeProps {
  children: ReactNode;
  className?: string;
}

export function Badge({ children, className }: BadgeProps) {
  return (
    <span
      className={cn(
        "inline-flex items-center rounded-full px-3 py-1 text-xs font-semibold bg-blue-50 text-[#2563EB] border border-blue-100",
        className
      )}
    >
      {children}
    </span>
  );
}

interface TechBadgeProps {
  label: string;
}

export function TechBadge({ label }: TechBadgeProps) {
  return (
    <span className="inline-flex items-center rounded-md px-2.5 py-1 text-xs font-semibold bg-slate-100 text-slate-600 border border-slate-200/80 hover:bg-blue-50 hover:text-[#2563EB] hover:border-blue-200 transition-colors duration-150">
      {label}
    </span>
  );
}
