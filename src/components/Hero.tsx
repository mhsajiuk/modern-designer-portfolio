"use client";

import { useState } from "react";
import Image from "next/image";
import Link from "next/link";
import { motion, useMotionValue, useSpring, useTransform } from "framer-motion";
import { heroData } from "@/data/portfolioData";
import { ArrowRight, Sparkles, Code, CheckCircle2, Zap } from "lucide-react";
import confetti from "canvas-confetti";
import BackgroundBeams from "./BackgroundBeams";

export default function Hero() {
  // 3D Parallax Tilt Effect
  const mouseX = useMotionValue(0);
  const mouseY = useMotionValue(0);

  const rotateX = useSpring(useTransform(mouseY, [-0.5, 0.5], [12, -12]), {
    stiffness: 200,
    damping: 20,
  });
  const rotateY = useSpring(useTransform(mouseX, [-0.5, 0.5], [-12, 12]), {
    stiffness: 200,
    damping: 20,
  });

  const handleMouseMove = (e: React.MouseEvent<HTMLDivElement>) => {
    const rect = e.currentTarget.getBoundingClientRect();
    const width = rect.width;
    const height = rect.height;
    const xPct = (e.clientX - rect.left) / width - 0.5;
    const yPct = (e.clientY - rect.top) / height - 0.5;
    mouseX.set(xPct);
    mouseY.set(yPct);
  };

  const handleMouseLeave = () => {
    mouseX.set(0);
    mouseY.set(0);
  };

  const triggerConfetti = () => {
    confetti({
      particleCount: 80,
      spread: 70,
      origin: { y: 0.6 },
      colors: ["#8b5cf6", "#ec4899", "#3b82f6", "#10b981"],
    });
  };

  return (
    <section id="about" className="relative pt-32 pb-20 md:pt-40 md:pb-28 overflow-hidden bg-[#FAF9F6]">
      {/* 21st.dev Interactive Background Beams */}
      <BackgroundBeams />

      <div className="relative max-w-7xl mx-auto px-6 sm:px-8 lg:px-12 z-10">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-8 items-center">
          {/* Left Text Content */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7, ease: "easeOut" }}
            className="lg:col-span-7 space-y-6"
          >
            {/* Tagline / Subtitle */}
            <motion.div
              initial={{ opacity: 0, scale: 0.9 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ duration: 0.5, delay: 0.1 }}
              className="inline-flex items-center gap-2 px-4 py-2 rounded-full glass-card text-xs font-bold tracking-wider uppercase text-[#2D2D2D] shadow-sm border border-purple-500/20"
            >
              <Zap className="w-3.5 h-3.5 text-purple-600 animate-bounce" />
              <span className="bg-gradient-to-r from-purple-700 via-indigo-600 to-pink-600 bg-clip-text text-transparent">
                {heroData.subtitle}
              </span>
            </motion.div>

            {/* Main Heading */}
            <h1 className="text-4xl sm:text-5xl lg:text-6xl font-extrabold text-[#2D2D2D] tracking-tight leading-[1.1] font-epilogue">
              Aura Studio <br className="hidden sm:inline" />
              <span className="shimmer-text">Desain Visual & Web</span>
            </h1>

            {/* Paragraph Bio */}
            <p className="text-lg text-gray-600 max-w-2xl font-normal leading-relaxed font-sans">
              {heroData.description}
            </p>

            {/* CTA Buttons & Stats */}
            <div className="pt-4 flex flex-wrap items-center gap-4 sm:gap-6">
              <Link
                href={heroData.ctaLink}
                onClick={triggerConfetti}
                className="group relative inline-flex items-center gap-3 px-8 py-4 rounded-2xl bg-[#2D2D2D] text-white font-bold text-sm hover:bg-black transition-all shadow-xl hover:shadow-2xl transform hover:-translate-y-1 overflow-hidden font-epilogue"
              >
                <span className="relative z-10">{heroData.ctaText}</span>
                <ArrowRight className="w-4 h-4 relative z-10 group-hover:translate-x-1 transition-transform" />
                <span className="absolute inset-0 bg-gradient-to-r from-purple-600 to-indigo-600 opacity-0 group-hover:opacity-100 transition-opacity duration-300 -z-0" />
              </Link>

              <Link
                href="#work"
                className="inline-flex items-center gap-2 px-7 py-4 rounded-2xl glass-card text-[#2D2D2D] font-bold text-sm border border-gray-200 hover:bg-white transition-all shadow-sm font-epilogue"
              >
                <span>Jelajahi Karya</span>
              </Link>
            </div>

            {/* 21st.dev Animated Stats Counter Badges */}
            <div className="pt-8 border-t border-gray-200/80 grid grid-cols-3 gap-6 max-w-lg">
              <motion.div
                whileHover={{ scale: 1.05 }}
                className="p-3 rounded-2xl glass-card border border-white/60 shadow-sm"
              >
                <p className="text-2xl font-extrabold text-[#2D2D2D] font-epilogue">5+ Thn</p>
                <p className="text-xs font-medium text-gray-500 font-sans">Pengalaman</p>
              </motion.div>

              <motion.div
                whileHover={{ scale: 1.05 }}
                className="p-3 rounded-2xl glass-card border border-white/60 shadow-sm"
              >
                <p className="text-2xl font-extrabold text-[#2D2D2D] font-epilogue">40+ Proyek</p>
                <p className="text-xs font-medium text-gray-500 font-sans">Karya Selesai</p>
              </motion.div>

              <motion.div
                whileHover={{ scale: 1.05 }}
                className="p-3 rounded-2xl glass-card border border-white/60 shadow-sm"
              >
                <p className="text-2xl font-extrabold text-[#2D2D2D] font-epilogue">100%</p>
                <p className="text-xs font-medium text-gray-500 font-sans">Klien Puas</p>
              </motion.div>
            </div>
          </motion.div>

          {/* Right Hero Artwork with 3D Parallax Mouse Tilt */}
          <motion.div
            initial={{ opacity: 0, scale: 0.9 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.8, delay: 0.2 }}
            className="lg:col-span-5 relative flex justify-center lg:justify-end perspective-1000"
          >
            <motion.div
              onMouseMove={handleMouseMove}
              onMouseLeave={handleMouseLeave}
              style={{
                rotateX,
                rotateY,
                transformStyle: "preserve-3d",
              }}
              className="relative w-full max-w-md aspect-[4/5] rounded-3xl bg-white p-3 border border-gray-200/80 shadow-2xl overflow-hidden group cursor-pointer"
            >
              <div className="relative w-full h-full rounded-2xl overflow-hidden bg-gray-100">
                <Image
                  src={heroData.heroImage}
                  alt="Aura Studio Desainer"
                  fill
                  priority
                  unoptimized
                  sizes="(max-width: 768px) 100vw, 50vw"
                  className="object-cover object-center group-hover:scale-105 transition-transform duration-700"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/40 via-transparent to-transparent opacity-60 group-hover:opacity-40 transition-opacity" />
              </div>

              {/* Floating Interactive Status Badge */}
              <motion.div
                animate={{ y: [0, -6, 0] }}
                transition={{ duration: 4, repeat: Infinity, ease: "easeInOut" }}
                className="absolute bottom-6 left-6 right-6 glass-card p-4 rounded-2xl shadow-xl border border-white/80"
              >
                <div className="flex items-center gap-3">
                  <div className="relative flex items-center justify-center">
                    <div className="w-3 h-3 rounded-full bg-emerald-500"></div>
                    <div className="absolute w-5 h-5 rounded-full bg-emerald-500/40 animate-ping"></div>
                  </div>
                  <div>
                    <p className="text-xs font-extrabold text-[#2D2D2D] font-epilogue flex items-center gap-1.5">
                      <span>Tersedia Proyek Baru</span>
                      <Sparkles className="w-3.5 h-3.5 text-amber-500" />
                    </p>
                    <p className="text-[11px] text-gray-500 font-medium font-sans">Menerima klien & peluang kolaborasi</p>
                  </div>
                </div>
              </motion.div>
            </motion.div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
