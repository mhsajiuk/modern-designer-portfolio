"use client";

import Image from "next/image";
import { motion } from "framer-motion";
import { testimonialsData } from "@/data/portfolioData";
import { Star, Quote } from "lucide-react";

export default function Testimonials() {
  return (
    <section id="testimonials" className="py-24 bg-gray-50/50 border-t border-gray-100">
      <div className="max-w-7xl mx-auto px-6 sm:px-8 lg:px-12">
        {/* Header */}
        <div className="max-w-3xl mb-16">
          <span className="text-xs font-bold tracking-widest text-gray-400 uppercase font-epilogue">
            Testimonials
          </span>
          <h2 className="text-3xl sm:text-4xl font-extrabold text-[#2D2D2D] tracking-tight mt-2 font-epilogue">
            Client Feedback & Reviews
          </h2>
          <p className="text-gray-600 mt-4 text-base">
            What partners and clients say about working together.
          </p>
        </div>

        {/* Cards Grid */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {testimonialsData.map((item, index) => (
            <motion.div
              key={item.id}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: index * 0.15 }}
              viewport={{ once: true }}
              className="p-8 rounded-3xl bg-white border border-gray-200/80 shadow-sm flex flex-col justify-between relative"
            >
              <Quote className="w-10 h-10 text-gray-200 mb-4" />

              <p className="text-gray-700 text-sm sm:text-base leading-relaxed font-normal mb-8">
                "{item.feedback}"
              </p>

              {/* Client Info & Stars */}
              <div className="pt-6 border-t border-gray-100 flex items-center justify-between">
                <div className="flex items-center gap-3">
                  <div className="relative w-12 h-12 rounded-full overflow-hidden bg-gray-100 border border-gray-200">
                    <Image
                      src={item.clientAvatar}
                      alt={item.clientName}
                      fill
                      className="object-cover object-top"
                    />
                  </div>
                  <div>
                    <h4 className="text-sm font-bold text-[#2D2D2D] font-epilogue">
                      {item.clientName}
                    </h4>
                    <p className="text-xs text-gray-500">
                      {item.clientCompany} • {item.clientRole}
                    </p>
                  </div>
                </div>

                {/* Rating */}
                <div className="flex items-center gap-1 text-amber-400">
                  {[...Array(item.rating)].map((_, i) => (
                    <Star key={i} className="w-4 h-4 fill-amber-400" />
                  ))}
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
