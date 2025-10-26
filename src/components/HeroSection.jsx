import { motion } from "framer-motion";

export default function HeroSection() {
  return (
    <section
      id="hero"
      className="relative w-full h-screen flex flex-col items-center justify-center text-center overflow-hidden bg-gradient-to-b from-[var(--color-background)] to-[var(--color-surface)]"
    >
      {/* --- Floating Glow Particles --- */}
      <div className="absolute inset-0 overflow-hidden">
        <motion.div
          className="absolute w-3 h-3 rounded-full bg-[var(--color-accent-glow)] opacity-30 blur-md"
          animate={{ y: [0, -20, 0], opacity: [0.4, 0.7, 0.4] }}
          transition={{ duration: 4, repeat: Infinity, ease: "easeInOut" }}
          style={{ top: "20%", left: "25%" }}
        />
        <motion.div
          className="absolute w-2 h-2 rounded-full bg-[var(--color-secondary)] opacity-40 blur-md"
          animate={{ y: [0, -15, 0], opacity: [0.4, 0.8, 0.4] }}
          transition={{ duration: 3, repeat: Infinity, ease: "easeInOut", delay: 1 }}
          style={{ top: "60%", left: "70%" }}
        />
      </div>

      {/* --- Banner Image (centered + parallax rotation) --- */}
      <motion.div
        className="relative z-10 w-full h-full flex items-center justify-center"
        animate={{
          rotateY: [0, 4, -4, 0],
          rotateX: [0, 2, -2, 0],
        }}
        transition={{
          duration: 10,
          repeat: Infinity,
          ease: "easeInOut",
        }}
      >
        <img
          src="https://i02.appmifile.com/mi-com-product/fly-birds/redmi-15/pc/ba48808178d85b82290883a3666f8c3b.jpg?f=webp"
          alt="Redmi 15 Banner"
          className="absolute inset-0 w-full h-full object-cover object-center"
        />
        <div className="absolute inset-0 bg-gradient-to-b from-[var(--color-background)]/40 via-transparent to-[var(--color-background)]/60" />
      </motion.div>

      {/* --- Text + CTA Buttons (centered over image) --- */}
      <motion.div
        className="absolute z-20 inset-0 flex flex-col items-center justify-center text-center px-6 space-y-6"
        initial={{ opacity: 0, y: 40 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8, ease: "easeOut" }}
      >
        <h1 className="text-4xl sm:text-5xl md:text-6xl font-bold text-[var(--color-text-primary)] drop-shadow-[0_3px_15px_rgba(0,0,0,0.6)]">
          Redmi 15
        </h1>
        <p className="text-lg sm:text-xl md:text-2xl text-[var(--color-text-secondary)] drop-shadow-[0_2px_8px_rgba(0,0,0,0.4)]">
          Redefine Speed and Vision
        </p>

        <div className="flex flex-col sm:flex-row items-center gap-4 mt-4">
          <motion.button
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
            className="bg-[var(--color-primary)] hover:bg-[var(--color-secondary)] text-white font-medium px-8 py-3 rounded-xl shadow-[0_0_20px_rgba(138,43,226,0.4)] transition"
          >
            ⚡ Preorder Now
          </motion.button>
          <motion.button
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
            className="border border-[var(--color-secondary)] text-[var(--color-secondary)] font-medium px-8 py-3 rounded-xl transition"
          >
            Learn More
          </motion.button>
        </div>
      </motion.div>

      {/* --- Bottom glow gradient --- */}
      <div className="absolute bottom-0 inset-x-0 h-64 bg-gradient-to-t from-[var(--color-primary)]/20 to-transparent blur-3xl" />
    </section>
  );
}
