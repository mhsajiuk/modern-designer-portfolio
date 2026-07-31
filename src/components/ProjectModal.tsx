"use client";

import Image from "next/image";
import { ProjectItem } from "@/types";
import { X, ExternalLink, Tag } from "lucide-react";
import { motion, AnimatePresence } from "framer-motion";

interface ProjectModalProps {
  project: ProjectItem | null;
  onClose: () => void;
}

export default function ProjectModal({ project, onClose }: ProjectModalProps) {
  if (!project) return null;

  return (
    <AnimatePresence>
      <div className="fixed inset-0 z-50 overflow-y-auto">
        {/* Dark Backdrop */}
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          exit={{ opacity: 0 }}
          onClick={onClose}
          className="fixed inset-0 bg-black/80 backdrop-blur-md"
        />

        {/* Scroll Wrapper */}
        <div className="flex min-h-full items-center justify-center p-4 sm:p-6 my-auto">
          {/* Modal Container */}
          <motion.div
            initial={{ opacity: 0, scale: 0.95, y: 20 }}
            animate={{ opacity: 1, scale: 1, y: 0 }}
            exit={{ opacity: 0, scale: 0.95, y: 20 }}
            className="relative bg-[#121318] rounded-3xl max-w-3xl w-full shadow-2xl border border-zinc-800 overflow-hidden z-10 max-h-[85vh] flex flex-col my-auto"
          >
            {/* Close Button */}
            <button
              onClick={onClose}
              className="absolute top-4 right-4 z-20 p-2.5 rounded-full bg-zinc-900/90 backdrop-blur-md text-white hover:bg-zinc-800 hover:scale-105 transition-all shadow-md border border-zinc-700/60"
              aria-label="Tutup modal"
            >
              <X className="w-5 h-5" />
            </button>

            {/* Scrollable Content Box */}
            <div className="overflow-y-auto flex-1 custom-scrollbar">
              {/* Modal Header Image */}
              <div className="relative w-full aspect-[16/9] bg-zinc-900">
                <Image
                  src={project.image}
                  alt={project.title}
                  fill
                  unoptimized
                  sizes="(max-width: 768px) 100vw, 800px"
                  className="object-cover object-center opacity-95"
                />
              </div>

              {/* Modal Body */}
              <div className="p-6 sm:p-8 space-y-6">
                <div>
                  <div className="inline-flex items-center gap-2 px-3 py-1 rounded-md bg-purple-950/80 border border-purple-800/50 text-xs font-semibold text-purple-300 mb-3 font-epilogue">
                    <Tag className="w-3.5 h-3.5 text-purple-400" />
                    <span>{project.categoryTag}</span>
                  </div>
                  <h3 className="text-2xl sm:text-3xl font-extrabold text-white font-epilogue">
                    {project.title}
                  </h3>
                </div>

                <p className="text-zinc-300 leading-relaxed text-base font-sans">
                  {project.fullDescription || project.description}
                </p>

                {/* Tags */}
                <div className="flex flex-wrap gap-2 pt-2">
                  {project.tags.map((tag) => (
                    <span
                      key={tag}
                      className="px-3 py-1 rounded-full bg-zinc-900/90 border border-zinc-800 text-xs font-medium text-zinc-300"
                    >
                      #{tag}
                    </span>
                  ))}
                </div>

                {/* Action Footer */}
                <div className="pt-6 border-t border-zinc-800 flex items-center justify-between gap-4">
                  <span className="text-xs text-zinc-500 font-medium font-sans">
                    Kategori: {project.category}
                  </span>
                  {project.link && (
                    <a
                      href={project.link}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="inline-flex items-center gap-2 px-6 py-3 rounded-xl bg-gradient-to-r from-purple-600 to-indigo-600 text-white font-semibold text-sm hover:opacity-90 transition-all shadow-lg shadow-purple-950/50 shrink-0 font-epilogue"
                    >
                      <span>Lihat Demo Live</span>
                      <ExternalLink className="w-4 h-4" />
                    </a>
                  )}
                </div>
              </div>
            </div>
          </motion.div>
        </div>
      </div>
    </AnimatePresence>
  );
}
