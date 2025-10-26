import { motion, useScroll, useTransform } from "framer-motion";
import { useRef } from "react";

export default function DesignSection() {
  const ref = useRef(null);
  const { scrollYProgress } = useScroll({
    target: ref,
    offset: ["start end", "end start"],
  });

  const rotate = useTransform(scrollYProgress, [0, 1], [0, 360]);
  const y = useTransform(scrollYProgress, [0, 1], ["0%", "-10%"]);
  const opacity = useTransform(scrollYProgress, [0, 0.5, 1], [0, 1, 0.8]);

  return (
    <section
      id="design"
      ref={ref}
      className="relative w-full min-h-screen flex flex-col items-center justify-center overflow-hidden bg-[var(--color-background)]"
    >
      {/* Background Glow Layer */}
      <div className="absolute inset-0 bg-gradient-to-b from-[var(--color-surface)] via-[var(--color-background)] to-[var(--color-surface)] blur-2xl opacity-40" />

      {/* Content Wrapper */}
      <div className="relative z-10 max-w-6xl w-full px-6 py-20 md:py-28 flex flex-col md:flex-row items-center justify-between gap-10 md:gap-16">
        {/* Left: Rotating phone */}
        <motion.div
          style={{ rotate, y, opacity }}
          className="w-full md:w-1/2 flex justify-center"
        >
          <motion.img
            src="https://i.pinimg.com/1200x/2c/47/8b/2c478bc63e5504b92fed7d6645d506b7.jpg"
            alt="Redmi 15 Design"
            className="w-64 h-64 md:w-96 md:h-96 object-cover rounded-[2rem] shadow-[0_0_40px_rgba(138,43,226,0.4)]"
            whileHover={{ scale: 1.05 }}
            transition={{ type: "spring", stiffness: 120 }}
          />
        </motion.div>

        {/* Right: Text + Description */}
        <div className="w-full md:w-1/2 flex flex-col items-center md:items-start text-center md:text-left space-y-6 md:space-y-8">
          <motion.h2
            className="text-3xl md:text-5xl font-bold text-[var(--color-text-primary)]"
            initial={{ opacity: 0, y: 40 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
          >
            Ultra Slim. Ultra Premium.
          </motion.h2>

          <motion.p
            className="text-lg md:text-xl text-[var(--color-text-secondary)] leading-relaxed max-w-lg"
            initial={{ opacity: 0, y: 40 }}
            whileInView={{ opacity: 1, y: 0, delay: 0.2 }}
            transition={{ duration: 0.8 }}
          >
            6.7” AMOLED Edge Display – 144Hz refresh rate with adaptive brightness.
            Every curve engineered for perfection.
          </motion.p>

          <motion.div
            className="mt-4 w-32 h-1 rounded-full bg-gradient-to-r from-[var(--color-primary)] to-[var(--color-secondary)]"
            initial={{ width: 0, opacity: 0 }}
            whileInView={{ width: "8rem", opacity: 1 }}
            transition={{ duration: 1, delay: 0.3 }}
          />
        </div>
      </div>

      {/* Subtle bottom gradient glow */}
      <div className="absolute bottom-0 inset-x-0 h-64 bg-gradient-to-t from-[var(--color-primary)]/20 to-transparent blur-3xl" />
    </section>
  );
}
