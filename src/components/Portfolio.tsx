"use client";

import { useState } from "react";
import Image from "next/image";
import { motion } from "framer-motion";
import { projectsData } from "@/data/portfolioData";
import { ProjectItem } from "@/types";
import ProjectModal from "./ProjectModal";
import { ArrowUpRight } from "lucide-react";

export default function Portfolio() {
  const [selectedCategory, setSelectedCategory] = useState("Semua");
  const [activeModalProject, setActiveModalProject] = useState<ProjectItem | null>(null);

  const categories = ["Semua", "UI/UX", "Branding", "Art Direction"];

  const filteredProjects =
    selectedCategory === "Semua"
      ? projectsData
      : projectsData.filter((p) => p.category === selectedCategory);

  return (
    <section id="work" className="py-24 bg-white border-t border-gray-100">
      <div className="max-w-7xl mx-auto px-6 sm:px-8 lg:px-12">
        {/* Header Section */}
        <div className="flex flex-col md:flex-row md:items-end justify-between mb-12 gap-6">
          <div>
            <span className="text-xs font-bold tracking-widest text-gray-400 uppercase font-epilogue">
              Karya Terpilih
            </span>
            <h2 className="text-3xl sm:text-4xl font-extrabold text-[#2D2D2D] tracking-tight mt-2 font-epilogue">
              Karya Terbaru
            </h2>
          </div>

          {/* Filter Tabs */}
          <div className="flex flex-wrap gap-2">
            {categories.map((cat) => (
              <button
                key={cat}
                onClick={() => setSelectedCategory(cat)}
                className={`px-4 py-2 rounded-full text-xs font-semibold transition-all ${
                  selectedCategory === cat
                    ? "bg-[#2D2D2D] text-white shadow-sm"
                    : "bg-gray-100 text-gray-600 hover:bg-gray-200"
                }`}
              >
                {cat}
              </button>
            ))}
          </div>
        </div>

        {/* Gallery Cards Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 sm:gap-10">
          {filteredProjects.map((project, index) => (
            <motion.div
              key={project.id}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              viewport={{ once: true }}
              onClick={() => setActiveModalProject(project)}
              className="group cursor-pointer flex flex-col bg-white"
            >
              {/* Image Thumbnail Container */}
              <div className="relative aspect-[4/3] rounded-2xl overflow-hidden bg-gray-100 mb-4 border border-gray-100">
                <Image
                  src={project.image}
                  alt={project.title}
                  fill
                  unoptimized
                  sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
                  className="object-cover object-center group-hover:scale-105 transition-transform duration-500"
                />
                <div className="absolute inset-0 bg-black/0 group-hover:bg-black/20 transition-colors duration-300 flex items-center justify-center">
                  <div className="w-12 h-12 rounded-full bg-white text-[#2D2D2D] opacity-0 group-hover:opacity-100 transition-all duration-300 transform translate-y-2 group-hover:translate-y-0 flex items-center justify-center shadow-lg">
                    <ArrowUpRight className="w-5 h-5" />
                  </div>
                </div>
              </div>

              {/* Title & Category Info */}
              <div className="space-y-1">
                <h3 className="text-lg font-bold text-[#2D2D2D] font-epilogue group-hover:text-gray-600 transition-colors">
                  {project.title}
                </h3>
                <p className="text-xs font-medium text-gray-500">
                  {project.categoryTag}
                </p>
              </div>
            </motion.div>
          ))}
        </div>
      </div>

      {/* Project Detail Modal */}
      <ProjectModal
        project={activeModalProject}
        onClose={() => setActiveModalProject(null)}
      />
    </section>
  );
}
