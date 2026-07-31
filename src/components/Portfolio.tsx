"use client";

import { useState } from "react";
import Image from "next/image";
import { motion, AnimatePresence } from "framer-motion";
import { projectsData } from "@/data/portfolioData";
import { ProjectItem } from "@/types";
import ProjectModal from "./ProjectModal";
import { ArrowUpRight, Sparkles, ExternalLink } from "lucide-react";

export default function Portfolio() {
  const [selectedCategory, setSelectedCategory] = useState("Semua");
  const [activeModalProject, setActiveModalProject] = useState<ProjectItem | null>(null);

  const categories = ["Semua", "UI/UX", "Branding", "Art Direction"];

  const filteredProjects =
    selectedCategory === "Semua"
      ? projectsData
      : projectsData.filter((p) => p.category === selectedCategory);

  return (
    <section id="work" className="relative py-24 bg-[#09090b] border-t border-zinc-800/80 overflow-hidden">
      {/* Background Dots Accent */}
      <div className="absolute inset-0 bg-dots-pattern opacity-20 pointer-events-none" />

      <div className="relative max-w-7xl mx-auto px-6 sm:px-8 lg:px-12 z-10">
        {/* Header Section */}
        <div className="flex flex-col md:flex-row md:items-end justify-between mb-12 gap-6">
          <div>
            <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-purple-950/60 border border-purple-800/50 text-purple-300 text-xs font-bold uppercase tracking-widest font-epilogue mb-3">
              <Sparkles className="w-3.5 h-3.5 text-purple-400" />
              <span>Karya Terpilih</span>
            </div>
            <h2 className="text-3xl sm:text-4xl font-extrabold text-white tracking-tight font-epilogue">
              Galeri Proyek Terbaru
            </h2>
          </div>

          {/* Responsive Category Filter Tabs */}
          <div className="flex flex-wrap items-center gap-2.5 sm:gap-3">
            {categories.map((cat) => {
              const isActive = selectedCategory === cat;
              return (
                <button
                  key={cat}
                  onClick={() => setSelectedCategory(cat)}
                  className={`relative px-5 py-2.5 rounded-2xl text-xs font-bold transition-all duration-300 font-epilogue ${
                    isActive
                      ? "bg-gradient-to-r from-purple-600 to-indigo-600 text-white shadow-lg shadow-purple-950/50 border border-purple-500/50 scale-105"
                      : "bg-[#121318] text-zinc-400 hover:text-white border border-zinc-800 hover:border-zinc-700"
                  }`}
                >
                  {cat}
                </button>
              );
            })}
          </div>
        </div>

        {/* Gallery Cards Grid */}
        <motion.div layout className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 sm:gap-10">
          <AnimatePresence mode="popLayout">
            {filteredProjects.map((project, index) => (
              <motion.div
                key={project.id}
                layout
                initial={{ opacity: 0, scale: 0.9, y: 20 }}
                animate={{ opacity: 1, scale: 1, y: 0 }}
                exit={{ opacity: 0, scale: 0.9, y: 20 }}
                transition={{ duration: 0.35, delay: index * 0.05 }}
                onClick={() => setActiveModalProject(project)}
                className="group cursor-pointer flex flex-col bg-[#121318] rounded-3xl p-3 border border-zinc-800 hover:border-purple-500/50 shadow-lg hover:shadow-2xl hover:shadow-purple-950/30 transition-all duration-300 transform hover:-translate-y-1.5"
              >
                {/* Image Thumbnail Container */}
                <div className="relative aspect-[4/3] rounded-2xl overflow-hidden bg-zinc-900 mb-4 border border-zinc-800">
                  <Image
                    src={project.image}
                    alt={project.title}
                    fill
                    unoptimized
                    sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
                    className="object-cover object-center group-hover:scale-105 transition-transform duration-500 ease-out opacity-90 group-hover:opacity-100"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-[#09090b] via-black/20 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex flex-col justify-between p-4">
                    {project.featured && (
                      <div className="self-start px-3 py-1 rounded-full bg-amber-500/90 text-white text-[10px] font-extrabold uppercase tracking-wider shadow-md backdrop-blur-sm flex items-center gap-1 font-epilogue">
                        <Sparkles className="w-3 h-3" />
                        <span>Unggulan</span>
                      </div>
                    )}
                    <div className="self-end w-12 h-12 rounded-full bg-white text-black transform translate-y-4 group-hover:translate-y-0 transition-all duration-300 flex items-center justify-center shadow-2xl">
                      <ArrowUpRight className="w-5 h-5" />
                    </div>
                  </div>
                </div>

                {/* Title & Category Info */}
                <div className="px-2 pb-2 space-y-1.5">
                  <div className="flex items-center justify-between">
                    <span className="text-[11px] font-bold uppercase tracking-wider text-purple-400 font-epilogue">
                      {project.categoryTag}
                    </span>
                    {project.link && (
                      <span className="text-[11px] font-medium text-zinc-500 flex items-center gap-1">
                        <span>Live Demo</span>
                        <ExternalLink className="w-3 h-3" />
                      </span>
                    )}
                  </div>
                  <h3 className="text-lg font-bold text-white font-epilogue group-hover:text-purple-300 transition-colors line-clamp-1">
                    {project.title}
                  </h3>
                  <p className="text-xs text-zinc-400 line-clamp-2 leading-relaxed font-sans">
                    {project.description}
                  </p>
                </div>
              </motion.div>
            ))}
          </AnimatePresence>
        </motion.div>
      </div>

      {/* Project Detail Modal */}
      <ProjectModal
        project={activeModalProject}
        onClose={() => setActiveModalProject(null)}
      />
    </section>
  );
}
