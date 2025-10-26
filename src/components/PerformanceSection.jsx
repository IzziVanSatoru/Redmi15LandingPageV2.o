import { motion, useScroll, useTransform } from "framer-motion";
import { useRef } from "react";

export default function PerformanceSection() {
  const ref = useRef(null);
  const { scrollYProgress } = useScroll({
    target: ref,
    offset: ["0 1", "1.2 1"],
  });

  const yParallax = useTransform(scrollYProgress, [0, 1], [120, -120]);
  const opacity = useTransform(scrollYProgress, [0, 0.3, 1], [0, 1, 1]);

  return (
    <section
      id="performance"
      ref={ref}
      className="relative w-full min-h-screen flex flex-col items-center justify-center overflow-hidden bg-[var(--color-background)]"
    >
      {/* Background parallax glow */}
      <motion.div
        style={{ y: yParallax, opacity }}
        className="absolute inset-0 bg-[radial-gradient(circle_at_50%_40%,rgba(138,43,226,0.15),transparent_70%)]"
      />
      <motion.div
        style={{ y: yParallax }}
        className="absolute inset-0 opacity-20 bg-[repeating-linear-gradient(90deg,rgba(0,198,255,0.08)_0_2px,transparent_2px_200px)]"
      />

      {/* Content */}
      <div className="relative z-10 w-full max-w-7xl px-6 sm:px-10 lg:px-20 py-24 sm:py-32 flex flex-col items-center gap-24">
        {/* --- Snapdragon Section --- */}
        <motion.div
          className="flex flex-col lg:flex-row items-center justify-between gap-10 lg:gap-20 w-full"
          initial={{ opacity: 0, y: 80 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.9, ease: "easeOut" }}
        >
          {/* Left: Image */}
          <motion.img
            src="https://i02.appmifile.com/mi-com-product/fly-birds/redmi-15/pc/c4b5c243ac712a5d2c9d9d95f0763f12.jpg?f=webp"
            alt="Snapdragon Showcase"
            className="w-full max-w-md lg:max-w-lg rounded-3xl shadow-[0_0_40px_rgba(138,43,226,0.3)]"
            whileHover={{ scale: 1.03 }}
            transition={{ type: "spring", stiffness: 200 }}
          />

          {/* Right: Text */}
          <div className="text-center lg:text-left space-y-5">
            <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold text-[var(--color-text-primary)]">
              Powerful Snapdragon® 685
            </h2>
            <p className="text-lg sm:text-xl text-[var(--color-text-secondary)]">
              RAM hingga 16 GB dengan Penambahan memori³
            </p>
          </div>
        </motion.div>

        {/* --- Display Section --- */}
        <motion.div
          className="flex flex-col-reverse lg:flex-row items-center justify-between gap-10 lg:gap-20 w-full"
          initial={{ opacity: 0, y: 80 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.9, ease: "easeOut", delay: 0.2 }}
        >
          {/* Left: Text */}
          <div className="text-center lg:text-left space-y-5">
            <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold text-[var(--color-text-primary)]">
              Layar FHD+ 6,9" yang Imersif
            </h2>
            <p className="text-lg sm:text-xl text-[var(--color-text-secondary)]">
              Refresh rate tinggi hingga 144 Hz²
            </p>
          </div>

          {/* Right: Image */}
          <motion.img
            src="https://i02.appmifile.com/mi-com-product/fly-birds/redmi-15/pc/7d05068257d1caf775cdb0d1b17496b8.jpg?f=webp"
            alt="Display Showcase"
            className="w-full max-w-md lg:max-w-lg rounded-3xl shadow-[0_0_40px_rgba(0,198,255,0.3)]"
            whileHover={{ scale: 1.03 }}
            transition={{ type: "spring", stiffness: 200 }}
          />
        </motion.div>
      </div>

      {/* Bottom glow accent */}
      <div className="absolute bottom-0 inset-x-0 h-64 bg-gradient-to-t from-[var(--color-primary)]/25 to-transparent blur-3xl" />
    </section>
  );
}
