import { Heart } from "lucide-react";

export function Footer() {
  const year = 2026;

  return (
    <footer className="bg-[#F8FAFC]/65 backdrop-blur-sm border-t border-white/70">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
        <div className="flex flex-col sm:flex-row items-center justify-between gap-4">
          {/* Logo */}
          <span className="text-lg font-bold text-[#2563EB] tracking-tight">
            PT.
          </span>

          {/* Copyright */}
          <p className="text-sm text-gray-500 flex items-center gap-1">
            Copyright &copy; {year} Phattharaphon Tangtaeng.{" "}
            <Heart
              size={13}
              className="text-rose-400 fill-rose-400"
              aria-hidden="true"
            />
          </p>

          {/* Tagline */}
          <p className="text-xs text-gray-400 hidden sm:block">
            Software Tester intern
          </p>
        </div>
      </div>
    </footer>
  );
}
