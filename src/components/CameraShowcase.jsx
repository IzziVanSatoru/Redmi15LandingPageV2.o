import { motion } from "framer-motion";
import { useState } from "react";

export default function CameraShowcase() {
  const [isHovered, setIsHovered] = useState(false);

  const phoneImage =
    "https://i02.appmifile.com/mi-com-product/fly-birds/redmi-15c/pc/13c6073888696d12d00b68d038009250.png?f=webp";

  return (
    <section
      id="camera"
      className="relative w-full min-h-screen flex flex-col items-center justify-center overflow-hidden bg-[var(--color-surface)]"
    >
      {/* Parallax glow background */}
      <motion.div
        className="absolute inset-0 bg-[radial-gradient(circle_at_center,rgba(138,43,226,0.25),transparent_70%)] blur-3xl"
        animate={{
          scale: [1, 1.05, 1],
          opacity: [0.6, 0.8, 0.6],
        }}
        transition={{ duration: 8, repeat: Infinity, ease: "easeInOut" }}
      />

      {/* Light streak animation */}
      <motion.div
        className="absolute top-0 left-0 w-full h-full bg-[linear-gradient(120deg,transparent_40%,rgba(255,255,255,0.1)_50%,transparent_60%)]"
        animate={{
          backgroundPosition: ["200% 0", "-200% 0"],
        }}
        transition={{ duration: 8, repeat: Infinity, ease: "linear" }}
      />

      <div className="relative z-10 max-w-7xl w-full px-6 py-20 md:py-28 flex flex-col md:flex-row items-center justify-between gap-10 md:gap-20">
        {/* --- Left: Animated 3D Camera --- */}
        <motion.div
          className="w-full md:w-1/2 flex justify-center"
          onHoverStart={() => setIsHovered(true)}
          onHoverEnd={() => setIsHovered(false)}
        >
          <motion.div
            className="relative w-72 h-72 md:w-[420px] md:h-[420px] rounded-[2rem] flex items-center justify-center"
            animate={{
              rotateY: isHovered ? [0, 8, -8, 0] : [0, 5, -5, 0],
              rotateX: isHovered ? [0, 3, -3, 0] : [0, 2, -2, 0],
            }}
            transition={{
              duration: 8,
              repeat: Infinity,
              ease: "easeInOut",
            }}
          >
            {/* Glowing circle behind phone */}
            <motion.div
              className="absolute inset-0 rounded-full bg-gradient-to-br from-[var(--color-primary)]/50 to-[var(--color-secondary)]/40 blur-3xl scale-75"
              animate={{
                scale: [0.9, 1.1, 0.9],
                opacity: [0.6, 1, 0.6],
              }}
              transition={{ duration: 5, repeat: Infinity, ease: "easeInOut" }}
            />

            {/* Main camera image */}
            <motion.img
              src={phoneImage}
              alt="Redmi 15 Camera"
              className="relative z-10 w-full h-full object-contain drop-shadow-[0_0_40px_rgba(138,43,226,0.5)]"
              whileHover={{ scale: 1.05, rotateY: 8 }}
              transition={{ type: "spring", stiffness: 120 }}
            />
          </motion.div>
        </motion.div>

        {/* --- Right: Text Content --- */}
        <motion.div
          className="w-full md:w-1/2 flex flex-col items-center md:items-start text-center md:text-left space-y-6"
          initial={{ opacity: 0, y: 60 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
        >
          <motion.h2
            className="text-3xl md:text-5xl font-bold text-[var(--color-text-primary)]"
            whileHover={{ scale: 1.03 }}
            transition={{ type: "spring", stiffness: 150 }}
          >
            108MP Ultra Vision Camera
          </motion.h2>

          <p className="text-lg md:text-xl text-[var(--color-text-secondary)] leading-relaxed max-w-md">
            Tangkap dunia dalam detail luar biasa dengan mode AI Cinematic, HDR Pro, dan 8K Ultra Clarity.
          </p>

          {/* Button opens official Redmi 15 page */}
          <motion.a
            href="https://www.mi.co.id/id/product/redmi-15/"
            target="_blank"
            rel="noopener noreferrer"
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
            className="mt-4 bg-[var(--color-primary)] hover:bg-[var(--color-secondary)] text-white px-8 py-3 rounded-xl font-medium shadow-[0_0_20px_rgba(138,43,226,0.4)] transition inline-block"
          >
            🎥 Explore Camera
          </motion.a>
        </motion.div>
      </div>

      {/* Bottom gradient accent */}
      <div className="absolute bottom-0 inset-x-0 h-64 bg-gradient-to-t from-[var(--color-primary)]/20 to-transparent blur-3xl" />
    </section>
  );
}
