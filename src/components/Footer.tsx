"use client";

import Link from "next/link";
import { ArrowUp } from "lucide-react";

export default function Footer() {
  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: "smooth" });
  };

  return (
    <footer className="py-12 bg-[#050507] text-white border-t border-zinc-800/80">
      <div className="max-w-7xl mx-auto px-6 sm:px-8 lg:px-12 flex flex-col md:flex-row items-center justify-between gap-6">
        {/* Brand Copyright */}
        <div className="flex flex-col sm:flex-row items-center gap-4 text-center sm:text-left">
          <Link href="#" className="font-extrabold text-xl tracking-tight text-white font-epilogue">
            Aura<span className="text-purple-400">Studio</span>
          </Link>
          <span className="hidden sm:inline text-zinc-700">|</span>
          <p className="text-xs text-zinc-400">
            © {new Date().getFullYear()} Aura Studio. Dirancang & Dikembangkan dengan Next.js & Tailwind CSS.
          </p>
        </div>

        {/* Back to top button */}
        <button
          onClick={scrollToTop}
          className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-zinc-900 border border-zinc-800 hover:border-purple-500/50 hover:bg-zinc-800 text-xs font-semibold text-white transition-all shadow-md"
          aria-label="Kembali ke atas"
        >
          <span>Kembali ke Atas</span>
          <ArrowUp className="w-4 h-4 text-purple-400" />
        </button>
      </div>
    </footer>
  );
}
