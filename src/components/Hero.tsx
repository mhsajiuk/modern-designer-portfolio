"use client";

import Image from "next/image";
import Link from "next/link";
import { motion } from "framer-motion";
import { heroData } from "@/data/portfolioData";
import { ArrowRight, Sparkles } from "lucide-react";

export default function Hero() {
  return (
    <section id="about" className="pt-32 pb-20 md:pt-40 md:pb-28 overflow-hidden bg-white">
      <div className="max-w-7xl mx-auto px-6 sm:px-8 lg:px-12">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-8 items-center">
          {/* Left Text Content */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, ease: "easeOut" }}
            className="lg:col-span-7 space-y-6"
          >
            {/* Tagline / Subtitle */}
            <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-gray-100 border border-gray-200/60 text-xs font-semibold tracking-wider text-[#2D2D2D] uppercase">
              <Sparkles className="w-3.5 h-3.5 text-[#2D2D2D]" />
              <span>{heroData.subtitle}</span>
            </div>

            {/* Main Heading */}
            <h1 className="text-4xl sm:text-5xl lg:text-6xl font-extrabold text-[#2D2D2D] tracking-tight leading-[1.1] font-epilogue">
              Visual Designer & <br className="hidden sm:inline" />
              <span className="relative inline-block text-gray-800">
                Web Developer
                <span className="absolute bottom-1 left-0 w-full h-3 bg-gray-200/60 -z-10 rounded-sm"></span>
              </span>
            </h1>

            {/* Paragraph Bio */}
            <p className="text-lg text-gray-600 max-w-2xl font-normal leading-relaxed">
              {heroData.description}
            </p>

            {/* CTA Buttons & Stats */}
            <div className="pt-4 flex flex-wrap items-center gap-4 sm:gap-6">
              <Link
                href={heroData.ctaLink}
                className="inline-flex items-center gap-3 px-8 py-4 rounded-xl bg-[#2D2D2D] text-white font-semibold hover:bg-black transition-all shadow-md hover:shadow-xl transform hover:-translate-y-0.5 group"
              >
                <span>{heroData.ctaText}</span>
                <ArrowRight className="w-5 h-5 group-hover:translate-x-1 transition-transform" />
              </Link>

              <Link
                href="#work"
                className="inline-flex items-center gap-2 px-7 py-4 rounded-xl border border-gray-300 text-[#2D2D2D] font-semibold hover:bg-gray-50 transition-all"
              >
                <span>Explore Work</span>
              </Link>
            </div>

            {/* Quick Highlights */}
            <div className="pt-8 border-t border-gray-100 grid grid-cols-3 gap-6 max-w-lg">
              <div>
                <p className="text-2xl font-extrabold text-[#2D2D2D] font-epilogue">5+ Years</p>
                <p className="text-xs font-medium text-gray-500">Experience</p>
              </div>
              <div>
                <p className="text-2xl font-extrabold text-[#2D2D2D] font-epilogue">40+ Apps</p>
                <p className="text-xs font-medium text-gray-500">Completed Projects</p>
              </div>
              <div>
                <p className="text-2xl font-extrabold text-[#2D2D2D] font-epilogue">99%</p>
                <p className="text-xs font-medium text-gray-500">Client Satisfaction</p>
              </div>
            </div>
          </motion.div>

          {/* Right Hero Artwork */}
          <motion.div
            initial={{ opacity: 0, scale: 0.95 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.7, delay: 0.2 }}
            className="lg:col-span-5 relative flex justify-center lg:justify-end"
          >
            <div className="relative w-full max-w-md aspect-[4/5] rounded-3xl bg-gradient-to-tr from-gray-100 via-gray-50 to-white p-4 border border-gray-200/80 shadow-2xl overflow-hidden group">
              <Image
                src={heroData.heroImage}
                alt="Aura Studio Designer"
                fill
                priority
                sizes="(max-width: 768px) 100vw, 50vw"
                className="object-cover object-center rounded-2xl group-hover:scale-105 transition-transform duration-500"
              />
              <div className="absolute inset-0 rounded-2xl ring-1 ring-inset ring-black/5 pointer-events-none"></div>

              {/* Floating Badge */}
              <motion.div
                animate={{ y: [0, -8, 0] }}
                transition={{ duration: 4, repeat: Infinity, ease: "easeInOut" }}
                className="absolute bottom-6 left-6 right-6 bg-white/90 backdrop-blur-md p-4 rounded-2xl shadow-xl border border-white/60"
              >
                <div className="flex items-center gap-3">
                  <div className="w-3 h-3 rounded-full bg-emerald-500 animate-pulse"></div>
                  <div>
                    <p className="text-xs font-bold text-[#2D2D2D]">Available for Projects</p>
                    <p className="text-[11px] text-gray-500">Accepting new clients & opportunities</p>
                  </div>
                </div>
              </motion.div>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
