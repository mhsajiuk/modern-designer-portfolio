"use client";

import Link from "next/link";
import { ArrowUp } from "lucide-react";

export default function Footer() {
  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: "smooth" });
  };

  return (
    <footer className="py-12 bg-[#2D2D2D] text-white border-t border-gray-800">
      <div className="max-w-7xl mx-auto px-6 sm:px-8 lg:px-12 flex flex-col md:flex-row items-center justify-between gap-6">
        {/* Brand Copyright */}
        <div className="flex flex-col sm:flex-row items-center gap-4 text-center sm:text-left">
          <Link href="#" className="font-extrabold text-xl tracking-tight text-white font-epilogue">
            Aura<span className="text-gray-400">Studio</span>
          </Link>
          <span className="hidden sm:inline text-gray-600">|</span>
          <p className="text-xs text-gray-400">
            © {new Date().getFullYear()} Aura Studio. Designed & Developed with Next.js & Tailwind CSS.
          </p>
        </div>

        {/* Back to top button */}
        <button
          onClick={scrollToTop}
          className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-white/10 hover:bg-white/20 text-xs font-semibold text-white transition-all"
          aria-label="Back to top"
        >
          <span>Back to Top</span>
          <ArrowUp className="w-4 h-4" />
        </button>
      </div>
    </footer>
  );
}
