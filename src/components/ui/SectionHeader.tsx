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
    <div className={cn("text-center mb-16", className)}>
      <h2 className="text-4xl font-bold text-gray-900 mb-4">{title}</h2>
      <div className="mx-auto h-1 w-16 rounded-full bg-gradient-to-r from-[#991b1b] to-[#dc2626]" />
      {subtitle && (
        <p className="mt-4 text-gray-500 text-lg max-w-xl mx-auto">
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
      className={cn("py-24 px-4 sm:px-6 lg:px-8", className)}
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
        "inline-flex items-center rounded-full px-3 py-1 text-xs font-medium bg-[#fef2f2] text-[#991b1b] border border-[#fecaca]",
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
    <span className="inline-flex items-center rounded-md px-2.5 py-1 text-xs font-medium bg-slate-100 text-slate-600 border border-slate-200">
      {label}
    </span>
  );
}
