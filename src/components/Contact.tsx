"use client";

import { useState } from "react";
import { motion } from "framer-motion";
import confetti from "canvas-confetti";
import { Send, Mail, MapPin, CheckCircle2, Sparkles } from "lucide-react";

// Custom SVG icons for social platforms
const GithubIcon = ({ className = "w-5 h-5" }: { className?: string }) => (
  <svg className={className} fill="currentColor" viewBox="0 0 24 24">
    <path fillRule="evenodd" clipRule="evenodd" d="M12 2C6.477 2 2 6.484 2 12.017c0 4.425 2.865 8.18 6.839 9.504.5.092.682-.217.682-.483 0-.237-.008-.868-.013-1.703-2.782.605-3.369-1.343-3.369-1.343-.454-1.158-1.11-1.466-1.11-1.466-.908-.62.069-.608.069-.608 1.003.07 1.53 1.032 1.53 1.032.892 1.53 2.341 1.088 2.91.832.092-.647.35-1.088.636-1.338-2.22-.253-4.555-1.113-4.555-4.951 0-1.093.39-1.988 1.029-2.688-.103-.253-.446-1.272.098-2.65 0 0 .84-.27 2.75 1.026A9.564 9.564 0 0112 6.844c.85.004 1.705.115 2.504.337 1.909-1.296 2.747-1.027 2.747-1.027.546 1.379.202 2.398.1 2.651.64.7 1.028 1.595 1.028 2.688 0 3.848-2.339 4.695-4.566 4.943.359.309.678.92.678 1.855 0 1.338-.012 2.419-.012 2.747 0 .268.18.58.688.482A10.019 10.019 0 0022 12.017C22 6.484 17.522 2 12 2z" />
  </svg>
);

const LinkedinIcon = ({ className = "w-5 h-5" }: { className?: string }) => (
  <svg className={className} fill="currentColor" viewBox="0 0 24 24">
    <path d="M19 3a2 2 0 0 1 2 2v14a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2V5a2 2 0 0 1 2-2h14m-.5 15.5v-5.3a3.26 3.26 0 0 0-3.26-3.26c-.85 0-1.84.52-2.28 1.3v-1.11h-2.79v8.37h2.79v-4.93c0-.77.62-1.4 1.39-1.4a1.4 1.4 0 0 1 1.4 1.4v4.93h2.75M6.88 8.56a1.68 1.68 0 0 0 1.68-1.68c0-.93-.75-1.69-1.68-1.69a1.69 1.69 0 0 0-1.69 1.69c0 .93.76 1.68 1.69 1.68m1.39 9.94v-8.37H5.5v8.37h2.77z"/>
  </svg>
);

const DribbbleIcon = ({ className = "w-5 h-5" }: { className?: string }) => (
  <svg className={className} fill="currentColor" viewBox="0 0 24 24">
    <path d="M12 2a10 10 0 0 0-10 10 10 10 0 0 0 10 10 10 10 0 0 0 10-10A10 10 0 0 0 12 2zm6.605 5.21a8.442 8.442 0 0 1 2.015 5.23 7.854 7.854 0 0 1-.144 1.492A13.882 13.882 0 0 0 15.68 11.2a14.7 14.7 0 0 0 2.925-3.99zM12 3.56c1.862 0 3.585.602 4.985 1.625a13.25 13.25 0 0 1-2.753 3.738A18.847 18.847 0 0 1 10.3 4.298 8.4 8.4 0 0 1 12 3.56zm-3.056 1.37a20.082 20.082 0 0 0 3.88 4.54 13.141 13.141 0 0 1-7.11 2.375 8.455 8.455 0 0 1 3.23-6.915zM3.56 12c0-.18.007-.358.02-.536A14.654 14.654 0 0 0 11.51 9.04a15.342 15.342 0 0 1 4.7 2.68 15.7 15.7 0 0 1-3.69 7.608A8.447 8.447 0 0 1 3.56 12zm8.44 8.44a8.4 8.4 0 0 1-1.393-.117 14.205 14.205 0 0 0 3.493-7.07 12.395 12.395 0 0 1 4.316 2.647 8.45 8.45 0 0 1-6.416 4.54z"/>
  </svg>
);

const TwitterIcon = ({ className = "w-5 h-5" }: { className?: string }) => (
  <svg className={className} fill="currentColor" viewBox="0 0 24 24">
    <path d="M18.244 2.25h3.308l-7.227 8.26 8.502 11.24H16.17l-5.214-6.817L4.99 21.75H1.68l7.73-8.835L1.254 2.25H8.08l4.713 6.231zm-1.161 17.52h1.833L7.084 4.126H5.117z"/>
  </svg>
);

const InstagramIcon = ({ className = "w-5 h-5" }: { className?: string }) => (
  <svg className={className} fill="currentColor" viewBox="0 0 24 24">
    <path d="M12 2.163c3.204 0 3.584.012 4.85.07 3.252.148 4.771 1.691 4.919 4.919.058 1.265.069 1.645.069 4.849 0 3.205-.012 3.584-.069 4.849-.149 3.225-1.664 4.771-4.919 4.919-1.266.058-1.644.07-4.85.07-3.204 0-3.584-.012-4.849-.07-3.26-.149-4.771-1.699-4.919-4.92-.058-1.265-.07-1.644-.07-4.849 0-3.204.013-3.583.07-4.849.149-3.227 1.664-4.771 4.919-4.919 1.266-.057 1.645-.069 4.849-.069zm0-2.163c-3.259 0-3.667.014-4.947.072-4.358.2-6.78 2.618-6.98 6.98-.059 1.281-.073 1.689-.073 4.948 0 3.259.014 3.668.072 4.948.2 4.358 2.618 6.78 6.98 6.98 1.281.058 1.689.072 4.948.072 3.259 0 3.668-.014 4.948-.072 4.354-.2 6.782-2.618 6.979-6.98.059-1.28.073-1.689.073-4.948 0-3.259-.014-3.667-.072-4.947-.196-4.354-2.617-6.78-6.979-6.98-1.281-.059-1.69-.073-4.949-.073zm0 5.838c-3.403 0-6.162 2.759-6.162 6.162s2.759 6.163 6.162 6.163 6.162-2.759 6.162-6.163c0-3.403-2.759-6.162-6.162-6.162zm0 10.162c-2.209 0-4-1.79-4-4 0-2.209 1.791-4 4-4s4 1.791 4 4c0 2.21-1.791 4-4 4zm6.406-11.845c-.796 0-1.441.645-1.441 1.44s.645 1.44 1.441 1.44c.795 0 1.439-.645 1.439-1.44s-.644-1.44-1.439-1.44z"/>
  </svg>
);

export default function Contact() {
  const [formData, setFormData] = useState({ name: "", email: "", message: "" });
  const [submitted, setSubmitted] = useState(false);
  const [loading, setLoading] = useState(false);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setLoading(true);

    setTimeout(() => {
      setLoading(false);
      setSubmitted(true);
      confetti({
        particleCount: 120,
        spread: 80,
        origin: { y: 0.6 },
        colors: ["#a855f7", "#ec4899", "#3b82f6", "#10b981", "#f59e0b"],
      });
    }, 800);
  };

  return (
    <section id="contact" className="relative py-24 bg-[#0d0e12] border-t border-zinc-800/80 overflow-hidden">
      {/* Background Lighting Accent */}
      <div className="absolute bottom-0 right-0 w-[500px] h-[500px] rounded-full bg-gradient-to-tr from-purple-600/10 to-indigo-600/10 blur-3xl pointer-events-none" />

      <div className="relative max-w-7xl mx-auto px-6 sm:px-8 lg:px-12 z-10">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-16 items-start">
          {/* Left Column: Heading & Description & Social Icons */}
          <motion.div
            initial={{ opacity: 0, x: -20 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.6 }}
            viewport={{ once: true }}
            className="lg:col-span-6 space-y-8"
          >
            <div>
              <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-purple-950/60 border border-purple-800/50 text-purple-300 text-xs font-bold uppercase tracking-widest font-epilogue mb-2">
                <Sparkles className="w-3.5 h-3.5 text-purple-400" />
                <span>Mari Berkolaborasi</span>
              </div>
              <h2 className="text-4xl sm:text-5xl font-extrabold text-white tracking-tight mt-2 font-epilogue leading-tight">
                Punya Proyek Impian? <br />
                <span className="shimmer-text">Hubungi Saya.</span>
              </h2>
            </div>

            <p className="text-zinc-400 text-base sm:text-lg leading-relaxed max-w-md font-sans">
              Saya selalu terbuka untuk mendiskusikan desain produk baru, branding, atau proyek aplikasi web modern. Mari wujudkan ide hebat Anda bersama.
            </p>

            {/* Quick Contact Info */}
            <div className="space-y-4 pt-2">
              <div className="flex items-center gap-4 text-zinc-300">
                <div className="w-12 h-12 rounded-2xl bg-purple-950/60 border border-purple-800/40 flex items-center justify-center text-purple-400 shrink-0 shadow-md">
                  <Mail className="w-5 h-5" />
                </div>
                <div>
                  <p className="text-xs text-zinc-400 font-bold uppercase tracking-wider font-epilogue">Email Kami</p>
                  <a href="mailto:hello@aurastudio.id" className="text-sm sm:text-base font-extrabold text-white hover:text-purple-400 transition-colors font-epilogue">
                    hello@aurastudio.id
                  </a>
                </div>
              </div>

              <div className="flex items-center gap-4 text-zinc-300">
                <div className="w-12 h-12 rounded-2xl bg-purple-950/60 border border-purple-800/40 flex items-center justify-center text-purple-400 shrink-0 shadow-md">
                  <MapPin className="w-5 h-5" />
                </div>
                <div>
                  <p className="text-xs text-zinc-400 font-bold uppercase tracking-wider font-epilogue">Lokasi Studio</p>
                  <p className="text-sm sm:text-base font-extrabold text-white font-epilogue">Jakarta & Bandung, Indonesia</p>
                </div>
              </div>
            </div>

            {/* Social Icons */}
            <div className="pt-6 border-t border-zinc-800/80">
              <p className="text-xs font-bold text-zinc-400 uppercase tracking-wider mb-4 font-epilogue">
                Terhubung di Media Sosial
              </p>
              <div className="flex items-center gap-3">
                {[
                  { icon: GithubIcon, href: "https://github.com", name: "GitHub" },
                  { icon: LinkedinIcon, href: "https://linkedin.com", name: "LinkedIn" },
                  { icon: DribbbleIcon, href: "https://dribbble.com", name: "Dribbble" },
                  { icon: TwitterIcon, href: "https://twitter.com", name: "Twitter" },
                  { icon: InstagramIcon, href: "https://instagram.com", name: "Instagram" },
                ].map((social) => (
                  <motion.a
                    key={social.name}
                    href={social.href}
                    target="_blank"
                    rel="noopener noreferrer"
                    whileHover={{ scale: 1.1, y: -2 }}
                    whileTap={{ scale: 0.95 }}
                    className="w-11 h-11 rounded-xl bg-zinc-900 border border-zinc-800 flex items-center justify-center text-zinc-300 hover:bg-purple-600 hover:text-white hover:border-purple-500 transition-all shadow-md"
                    aria-label={social.name}
                  >
                    <social.icon className="w-5 h-5" />
                  </motion.a>
                ))}
              </div>
            </div>
          </motion.div>

          {/* Right Column: Contact Form */}
          <motion.div
            initial={{ opacity: 0, x: 20 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.6 }}
            viewport={{ once: true }}
            className="lg:col-span-6 bg-[#121318] p-8 sm:p-10 rounded-3xl border border-zinc-800 shadow-2xl relative overflow-hidden"
          >
            {submitted ? (
              <div className="py-12 text-center space-y-4">
                <motion.div
                  initial={{ scale: 0 }}
                  animate={{ scale: 1 }}
                  transition={{ type: "spring", stiffness: 300, damping: 15 }}
                  className="w-16 h-16 rounded-full bg-emerald-950 border border-emerald-700/50 text-emerald-400 flex items-center justify-center mx-auto shadow-lg"
                >
                  <CheckCircle2 className="w-8 h-8" />
                </motion.div>
                <h3 className="text-2xl font-bold text-white font-epilogue">
                  Pesan Berhasil Terkirim!
                </h3>
                <p className="text-zinc-400 text-sm max-w-sm mx-auto font-sans">
                  Terima kasih telah menghubungi kami. Kami akan merespons pesan Anda dalam kurun waktu 24 jam.
                </p>
                <button
                  onClick={() => {
                    setSubmitted(false);
                    setFormData({ name: "", email: "", message: "" });
                  }}
                  className="mt-4 px-6 py-3 rounded-xl bg-purple-600 text-white text-xs font-bold uppercase tracking-wider hover:bg-purple-700 font-epilogue transition-all shadow-lg"
                >
                  Kirim Pesan Lain
                </button>
              </div>
            ) : (
              <form onSubmit={handleSubmit} className="space-y-6">
                <div>
                  <label htmlFor="name" className="block text-xs font-bold text-zinc-300 uppercase tracking-wider mb-2 font-epilogue">
                    Nama Lengkap
                  </label>
                  <input
                    type="text"
                    id="name"
                    required
                    placeholder="Masukkan nama Anda"
                    value={formData.name}
                    onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                    className="w-full px-4 py-3.5 rounded-xl bg-[#181920] border border-zinc-800 text-white placeholder-zinc-500 focus:outline-none focus:ring-2 focus:ring-purple-500 focus:border-transparent transition-all font-sans text-sm"
                  />
                </div>

                <div>
                  <label htmlFor="email" className="block text-xs font-bold text-zinc-300 uppercase tracking-wider mb-2 font-epilogue">
                    Alamat Email
                  </label>
                  <input
                    type="email"
                    id="email"
                    required
                    placeholder="nama@email.com"
                    value={formData.email}
                    onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                    className="w-full px-4 py-3.5 rounded-xl bg-[#181920] border border-zinc-800 text-white placeholder-zinc-500 focus:outline-none focus:ring-2 focus:ring-purple-500 focus:border-transparent transition-all font-sans text-sm"
                  />
                </div>

                <div>
                  <label htmlFor="message" className="block text-xs font-bold text-zinc-300 uppercase tracking-wider mb-2 font-epilogue">
                    Pesan Detail Proyek
                  </label>
                  <textarea
                    id="message"
                    rows={4}
                    required
                    placeholder="Ceritakan tentang proyek atau ide Anda..."
                    value={formData.message}
                    onChange={(e) => setFormData({ ...formData, message: e.target.value })}
                    className="w-full px-4 py-3.5 rounded-xl bg-[#181920] border border-zinc-800 text-white placeholder-zinc-500 focus:outline-none focus:ring-2 focus:ring-purple-500 focus:border-transparent transition-all resize-none font-sans text-sm"
                  />
                </div>

                <motion.button
                  whileHover={{ scale: 1.02 }}
                  whileTap={{ scale: 0.98 }}
                  type="submit"
                  disabled={loading}
                  className="w-full py-4 rounded-2xl bg-gradient-to-r from-purple-600 via-pink-600 to-indigo-600 text-white font-bold text-sm hover:opacity-95 transition-all shadow-xl shadow-purple-950/50 flex items-center justify-center gap-2 group disabled:opacity-70 font-epilogue relative overflow-hidden"
                >
                  {loading ? (
                    <span>Mengirim...</span>
                  ) : (
                    <>
                      <span>Kirim Pesan</span>
                      <Send className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
                    </>
                  )}
                </motion.button>
              </form>
            )}
          </motion.div>
        </div>
      </div>
    </section>
  );
}
