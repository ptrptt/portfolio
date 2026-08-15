import { Heart } from "lucide-react";

export function Footer() {
  const year = 2026;

  return (
    <footer className="bg-[#F8FAFC] border-t border-slate-200/80">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
        <div className="flex flex-col sm:flex-row items-center justify-between gap-4">
          {/* Logo */}
          <span className="text-lg font-extrabold text-[#2563EB] tracking-tight">
            PT.
          </span>

          {/* Copyright */}
          <p className="text-sm font-medium text-slate-500 flex items-center gap-1.5">
            Copyright &copy; {year} Phattharaphon Tangtaeng.{" "}
            <Heart
              size={14}
              className="text-rose-500 fill-rose-500"
              aria-hidden="true"
            />
          </p>

          {/* Tagline */}
          <p className="text-xs font-semibold text-slate-400 hidden sm:block">
            Software Tester intern
          </p>
        </div>
      </div>
    </footer>
  );
}
