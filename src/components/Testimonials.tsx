"use client";

import Image from "next/image";
import { motion } from "framer-motion";
import { testimonialsData } from "@/data/portfolioData";
import { Star, Quote, Sparkles } from "lucide-react";

export default function Testimonials() {
  return (
    <section id="testimonials" className="relative py-24 bg-white border-t border-gray-100 overflow-hidden">
      {/* Ambient background blob */}
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[600px] rounded-full bg-purple-400/5 blur-3xl pointer-events-none" />

      <div className="relative max-w-7xl mx-auto px-6 sm:px-8 lg:px-12 z-10">
        {/* Header */}
        <div className="text-center max-w-2xl mx-auto mb-16 space-y-3">
          <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-purple-50 text-purple-700 text-xs font-bold uppercase tracking-widest font-epilogue">
            <Sparkles className="w-3.5 h-3.5" />
            <span>Ulasan Klien</span>
          </div>
          <h2 className="text-3xl sm:text-4xl font-extrabold text-[#2D2D2D] tracking-tight font-epilogue">
            Apa Kata Mitra & Klien Indonesia
          </h2>
          <p className="text-gray-600 text-base leading-relaxed font-sans">
            Kepercayaan dan ulasan nyata dari profesional industri kreatif terbaik.
          </p>
        </div>

        {/* Testimonials Cards Grid */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {testimonialsData.map((item, index) => (
            <motion.div
              key={item.id}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: index * 0.15 }}
              viewport={{ once: true }}
              whileHover={{ y: -8 }}
              className="group p-8 rounded-3xl bg-[#FAF9F6] border border-gray-200/80 hover:border-purple-500/30 shadow-sm hover:shadow-2xl transition-all duration-500 flex flex-col justify-between relative overflow-hidden"
            >
              <div className="space-y-4 relative z-10">
                <div className="flex items-center justify-between">
                  <div className="flex items-center gap-1 text-amber-400">
                    {[...Array(item.rating)].map((_, i) => (
                      <motion.div
                        key={i}
                        animate={{ scale: [1, 1.2, 1] }}
                        transition={{ duration: 2, repeat: Infinity, delay: i * 0.2 }}
                      >
                        <Star className="w-4 h-4 fill-amber-400" />
                      </motion.div>
                    ))}
                  </div>
                  <Quote className="w-8 h-8 text-purple-300 group-hover:text-purple-600 transition-colors" />
                </div>

                <p className="text-gray-700 text-sm leading-relaxed italic font-sans">
                  &ldquo;{item.feedback}&rdquo;
                </p>
              </div>

              {/* User Profile */}
              <div className="flex items-center gap-4 pt-6 mt-6 border-t border-gray-200/80 relative z-10">
                <div className="relative w-12 h-12 rounded-full overflow-hidden bg-gray-200 border-2 border-white shadow-md shrink-0">
                  <Image
                    src={item.clientAvatar}
                    alt={item.clientName}
                    fill
                    unoptimized
                    className="object-cover object-center group-hover:scale-110 transition-transform duration-500"
                  />
                </div>
                <div>
                  <h4 className="text-sm font-bold text-[#2D2D2D] font-epilogue group-hover:text-purple-700 transition-colors">
                    {item.clientName}
                  </h4>
                  <p className="text-xs text-gray-500 font-medium font-sans">
                    {item.clientRole}, <span className="font-semibold text-gray-700">{item.clientCompany}</span>
                  </p>
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
