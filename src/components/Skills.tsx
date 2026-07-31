"use client";

import { motion } from "framer-motion";
import { skillsData } from "@/data/portfolioData";
import { Layout, Palette, Compass, Code2, LucideIcon } from "lucide-react";

const iconMap: Record<string, LucideIcon> = {
  Layout: Layout,
  Palette: Palette,
  Compass: Compass,
  Code2: Code2,
};

export default function Skills() {
  return (
    <section id="skills" className="py-24 bg-white">
      <div className="max-w-7xl mx-auto px-6 sm:px-8 lg:px-12">
        {/* Section Header */}
        <div className="max-w-3xl mb-16">
          <span className="text-xs font-bold tracking-widest text-gray-400 uppercase font-epilogue">
            Keahlian Utama
          </span>
          <h2 className="text-3xl sm:text-4xl font-extrabold text-[#2D2D2D] tracking-tight mt-2 font-epilogue">
            Spesialisasi & Kapabilitas
          </h2>
          <p className="text-gray-600 mt-4 text-base leading-relaxed">
            Menggabungkan estetika visual dengan keahlian rekayasa web untuk membangun produk digital dan solusi brand yang kohesif.
          </p>
        </div>

        {/* Skills Cards Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {skillsData.map((skill, index) => {
            const IconComponent = iconMap[skill.iconName] || Layout;

            return (
              <motion.div
                key={skill.id}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
                viewport={{ once: true }}
                whileHover={{ y: -6 }}
                className="p-8 rounded-2xl bg-white border border-gray-100 shadow-sm hover:shadow-xl transition-all duration-300 flex flex-col justify-between group"
              >
                <div>
                  <div className="w-14 h-14 rounded-2xl bg-gray-100 flex items-center justify-center mb-6 group-hover:bg-[#2D2D2D] transition-colors duration-300">
                    <IconComponent className="w-7 h-7 text-[#2D2D2D] group-hover:text-white transition-colors duration-300" />
                  </div>
                  <h3 className="text-xl font-bold text-[#2D2D2D] font-epilogue mb-3">
                    {skill.title}
                  </h3>
                  <p className="text-sm text-gray-600 leading-relaxed font-normal">
                    {skill.description}
                  </p>
                </div>
              </motion.div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
