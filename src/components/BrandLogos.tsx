"use client";

import { motion } from "framer-motion";
import { brandLogos } from "@/data/portfolioData";

export default function BrandLogos() {
  return (
    <section className="py-12 bg-[#0d0e12] border-y border-zinc-800/80">
      <div className="max-w-7xl mx-auto px-6 sm:px-8 lg:px-12">
        <p className="text-center text-xs font-semibold tracking-widest text-zinc-500 uppercase mb-8 font-epilogue">
          Dipercaya oleh Perusahaan & Studio Terkemuka
        </p>

        <div className="flex flex-wrap items-center justify-center gap-8 sm:gap-16 lg:gap-24 opacity-80 hover:opacity-100 transition-opacity">
          {brandLogos.map((brand, idx) => (
            <motion.div
              key={brand.id}
              initial={{ opacity: 0, y: 10 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.4, delay: idx * 0.1 }}
              viewport={{ once: true }}
              className="flex items-center justify-center transition-all duration-300 transform hover:scale-105"
            >
              <span className="text-xl sm:text-2xl font-black text-zinc-400 hover:text-white font-epilogue tracking-tight transition-colors">
                {brand.name}
              </span>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
