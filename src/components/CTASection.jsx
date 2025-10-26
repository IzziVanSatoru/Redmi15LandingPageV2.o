import { motion } from "framer-motion";

export default function CTASection() {
  return (
    <section
      id="cta"
      className="relative w-full flex flex-col items-center justify-center text-center overflow-hidden bg-[var(--color-surface)]"
    >
      {/* Background glow gradient */}
      <div className="absolute inset-0 bg-gradient-to-b from-[var(--color-background)] via-[var(--color-surface)] to-[var(--color-background)] opacity-50 blur-2xl" />

      {/* Content */}
      <div className="relative z-10 max-w-5xl px-6 sm:px-10 md:px-16 py-24 sm:py-28 lg:py-36 flex flex-col items-center space-y-10 sm:space-y-12">
        <motion.h2
          className="text-3xl sm:text-4xl lg:text-5xl font-extrabold text-[var(--color-text-primary)] leading-snug"
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
        >
          Experience the Power of Perfection
        </motion.h2>

        <motion.p
          className="text-lg sm:text-xl text-[var(--color-text-secondary)] max-w-2xl leading-relaxed"
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.2 }}
        >
          Unleash next-generation speed, clarity, and innovation — built for
          creators, gamers, and dreamers.
        </motion.p>

        {/* Button to purchase page */}
        <motion.a
          href="https://www.mi.co.id/id/product/redmi-15/buy/"
          target="_blank"
          rel="noopener noreferrer"
          whileHover={{
            scale: 1.08,
            boxShadow: "0 0 25px rgba(138,43,226,0.6)",
          }}
          whileTap={{ scale: 0.96 }}
          transition={{ type: "spring", stiffness: 220, damping: 14 }}
          className="mt-6 px-10 py-4 sm:px-12 sm:py-5 text-lg sm:text-xl font-semibold rounded-full bg-[var(--color-primary)] text-white shadow-[0_0_20px_rgba(138,43,226,0.4)] hover:shadow-[0_0_35px_rgba(138,43,226,0.7)] inline-block"
        >
          Pre-Order Now
        </motion.a>
      </div>

      {/* Bottom accent glow */}
      <div className="absolute bottom-0 inset-x-0 h-64 bg-gradient-to-t from-[var(--color-primary)]/25 to-transparent blur-3xl" />
    </section>
  );
}
