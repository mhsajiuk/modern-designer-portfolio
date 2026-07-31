"use client";

import { useState } from "react";
import { motion } from "framer-motion";
import { skillsData } from "@/data/portfolioData";
import { Layout, Palette, Compass, Code2, LucideIcon, Sparkles } from "lucide-react";

const iconMap: Record<string, LucideIcon> = {
  Layout: Layout,
  Palette: Palette,
  Compass: Compass,
  Code2: Code2,
};

function SpotlightSkillCard({
  skill,
  index,
}: {
  skill: (typeof skillsData)[0];
  index: number;
}) {
  const IconComponent = iconMap[skill.iconName] || Layout;
  const [mousePosition, setMousePosition] = useState({ x: 0, y: 0 });
  const [isHovered, setIsHovered] = useState(false);

  const handleMouseMove = (e: React.MouseEvent<HTMLDivElement>) => {
    const rect = e.currentTarget.getBoundingClientRect();
    setMousePosition({
      x: e.clientX - rect.left,
      y: e.clientY - rect.top,
    });
  };

  return (
    <motion.div
      initial={{ opacity: 0, y: 30 }}
      whileInView={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.5, delay: index * 0.1 }}
      viewport={{ once: true }}
      onMouseMove={handleMouseMove}
      onMouseEnter={() => setIsHovered(true)}
      onMouseLeave={() => setIsHovered(false)}
      className="relative p-8 rounded-3xl bg-white border border-gray-200/80 shadow-sm hover:shadow-2xl transition-all duration-500 overflow-hidden group cursor-pointer"
    >
      {/* 21st.dev Spotlight Glow Effect */}
      {isHovered && (
        <div
          className="pointer-events-none absolute -inset-px transition-opacity duration-300"
          style={{
            background: `radial-gradient(350px circle at ${mousePosition.x}px ${mousePosition.y}px, rgba(139, 92, 246, 0.15), transparent 80%)`,
          }}
        />
      )}

      <div className="relative z-10 space-y-4">
        {/* Animated Icon Box */}
        <motion.div
          whileHover={{ rotate: 5, scale: 1.1 }}
          transition={{ type: "spring", stiffness: 300, damping: 15 }}
          className="w-16 h-16 rounded-2xl bg-purple-50 text-purple-700 flex items-center justify-center group-hover:bg-[#2D2D2D] group-hover:text-white transition-colors duration-300 shadow-sm"
        >
          <IconComponent className="w-8 h-8 transition-transform duration-300 group-hover:scale-110" />
        </motion.div>

        <div>
          <h3 className="text-xl font-bold text-[#2D2D2D] font-epilogue group-hover:text-purple-700 transition-colors">
            {skill.title}
          </h3>
          <p className="mt-2 text-sm text-gray-600 leading-relaxed font-sans font-normal">
            {skill.description}
          </p>
        </div>
      </div>
    </motion.div>
  );
}

export default function Skills() {
  return (
    <section id="services" className="relative py-24 bg-[#FAF9F6] border-t border-gray-100 overflow-hidden">
      <div className="max-w-7xl mx-auto px-6 sm:px-8 lg:px-12">
        {/* Section Header */}
        <div className="max-w-3xl mb-16">
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-purple-50 text-purple-700 text-xs font-bold uppercase tracking-widest font-epilogue mb-2">
            <Sparkles className="w-3.5 h-3.5" />
            <span>Keahlian Utama</span>
          </div>
          <h2 className="text-3xl sm:text-4xl font-extrabold text-[#2D2D2D] tracking-tight font-epilogue">
            Spesialisasi Desain & Pengembangan
          </h2>
          <p className="text-gray-600 mt-4 text-base leading-relaxed font-sans">
            Menggabungkan estetika visual tingkat tinggi dengan keahlian rekayasa web modern untuk membangun produk digital dan solusi brand yang luar biasa.
          </p>
        </div>

        {/* Skills Cards Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {skillsData.map((skill, index) => (
            <SpotlightSkillCard key={skill.id} skill={skill} index={index} />
          ))}
        </div>
      </div>
    </section>
  );
}
