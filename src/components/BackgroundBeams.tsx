"use client";

import { useEffect, useState } from "react";
import { motion } from "framer-motion";

export default function BackgroundBeams() {
  const [mousePos, setMousePos] = useState({ x: 0, y: 0 });

  useEffect(() => {
    const handleMouseMove = (e: MouseEvent) => {
      setMousePos({ x: e.clientX, y: e.clientY });
    };

    window.addEventListener("mousemove", handleMouseMove);
    return () => window.removeEventListener("mousemove", handleMouseMove);
  }, []);

  return (
    <div className="pointer-events-none absolute inset-0 overflow-hidden">
      {/* Interactive Mouse Spotlight */}
      <div
        className="pointer-events-none absolute -inset-px opacity-30 transition-opacity duration-300"
        style={{
          background: `radial-gradient(600px circle at ${mousePos.x}px ${mousePos.y}px, rgba(139, 92, 246, 0.15), transparent 40%)`,
        }}
      />

      {/* Floating Glowing Gradient Blobs */}
      <motion.div
        animate={{
          x: [0, 50, -30, 0],
          y: [0, -40, 30, 0],
          scale: [1, 1.2, 0.9, 1],
        }}
        transition={{
          duration: 15,
          repeat: Infinity,
          ease: "easeInOut",
        }}
        className="absolute top-[-10%] left-[-10%] w-[500px] h-[500px] rounded-full bg-gradient-to-tr from-purple-400/20 to-indigo-400/20 blur-3xl"
      />

      <motion.div
        animate={{
          x: [0, -40, 50, 0],
          y: [0, 30, -40, 0],
          scale: [1, 0.95, 1.15, 1],
        }}
        transition={{
          duration: 18,
          repeat: Infinity,
          ease: "easeInOut",
        }}
        className="absolute bottom-[-10%] right-[-10%] w-[600px] h-[600px] rounded-full bg-gradient-to-br from-pink-400/15 via-purple-300/15 to-blue-400/15 blur-3xl"
      />

      {/* SVG Grid Overlay */}
      <div className="absolute inset-0 bg-grid-pattern opacity-40 [mask-image:radial-gradient(ellipse_at_center,white_30%,transparent_80%)]" />
    </div>
  );
}
